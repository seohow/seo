import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const SKILLS_DIR = path.join(ROOT, "skills");
export const CONFIG_PATH = path.join(ROOT, "release.config.json");

export function readReleaseConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    return {
      releaseRoot: "releases",
      versionPrefix: "v",
      layout: {
        setup: "setup/<skill>",
        category: "categories/<category>/<skill>",
        zipName: "<skill>-<version>.zip"
      },
      platformCompatibility: {
        descriptionMaxChars: 200
      }
    };
  }

  return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
}

export function discoverSkills() {
  const entries = [];
  for (const entry of fs.readdirSync(SKILLS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "node_modules") continue;

    const topLevelDir = path.join(SKILLS_DIR, entry.name);
    const directSkill = path.join(topLevelDir, "SKILL.md");
    if (fs.existsSync(directSkill)) {
      entries.push({
        category: "setup",
        name: entry.name,
        sourceDir: topLevelDir,
        skillFile: directSkill
      });
      continue;
    }

    for (const child of fs.readdirSync(topLevelDir, { withFileTypes: true })) {
      if (!child.isDirectory()) continue;
      const skillDir = path.join(topLevelDir, child.name);
      const skillFile = path.join(skillDir, "SKILL.md");
      if (!fs.existsSync(skillFile)) continue;
      entries.push({
        category: entry.name,
        name: child.name,
        sourceDir: skillDir,
        skillFile
      });
    }
  }

  return entries.sort((a, b) => {
    const categorySort = a.category.localeCompare(b.category);
    return categorySort || a.name.localeCompare(b.name);
  });
}

export function parseFrontmatter(skillFile) {
  const content = fs.readFileSync(skillFile, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { frontmatter: null, content };

  const frontmatter = {};
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    frontmatter[field[1]] = stripYamlScalar(field[2]);
  }

  return { frontmatter, content };
}

function stripYamlScalar(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

export function ensureCleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

export function copyDir(source, destination) {
  fs.mkdirSync(destination, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") continue;
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, destinationPath);
    } else if (entry.isSymbolicLink()) {
      fs.symlinkSync(fs.readlinkSync(sourcePath), destinationPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}
