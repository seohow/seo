import fs from "node:fs";
import path from "node:path";
import { discoverSkills, ROOT } from "./skill-release-lib.mjs";

// Regex from AGENTS.md's "Example drift prevention" section. Root-level AGENTS.md and
// TODO.md are allowed to contain these words because they document the scan itself;
// only playbook/ and skills/ content is required to be clean.
const STALE_LANGUAGE_PATTERN =
  /Refillable|Cleaning Co|laundry|clean beauty|non-toxic|chemical-free|plastic-free/;

const errors = [];

checkCatalogueSync();
checkStaleLanguage();
checkPluginManifest();

if (errors.length > 0) {
  for (const error of errors) console.error(`error: ${error}`);
  console.error(`\n${errors.length} consistency issue(s) found.`);
  process.exit(1);
}

console.log("Catalogue sync and stale-language checks passed.");

function checkCatalogueSync() {
  const skills = discoverSkills().filter((skill) => skill.category !== "setup");

  const skillsByCategory = new Map();
  for (const skill of skills) {
    if (!skillsByCategory.has(skill.category)) skillsByCategory.set(skill.category, []);
    skillsByCategory.get(skill.category).push(skill);
  }

  for (const [category, categorySkills] of skillsByCategory) {
    const readmePath = path.join(ROOT, "skills", category, "README.md");
    const relativeReadme = path.relative(ROOT, readmePath);

    if (!fs.existsSync(readmePath)) {
      errors.push(`skills/${category}/: missing README.md to catalogue its ${categorySkills.length} skill(s).`);
      continue;
    }

    const readmeContent = fs.readFileSync(readmePath, "utf8");
    const linkedSkillNames = findSkillLinksInReadme(readmeContent);

    // (a) Every SKILL.md on disk must be linked from the category README.
    for (const skill of categorySkills) {
      if (!linkedSkillNames.has(skill.name)) {
        errors.push(`${relativeReadme}: skill "${skill.name}" exists on disk but is not linked.`);
      }
    }

    // (b) Every SKILL.md link in the category README must resolve to a folder on disk.
    const onDiskNames = new Set(categorySkills.map((skill) => skill.name));
    for (const linkedName of linkedSkillNames) {
      if (!onDiskNames.has(linkedName)) {
        errors.push(`${relativeReadme}: links to skill "${linkedName}", which does not exist on disk.`);
      }
    }
  }
}

function findSkillLinksInReadme(content) {
  const names = new Set();
  // Matches links like "plan-keyword-research/SKILL.md" or "./plan-keyword-research/SKILL.md",
  // relative to the category README's own directory (one folder per skill).
  const matches = content.matchAll(/\]\((?:\.\/)?([a-z0-9-]+)\/SKILL\.md\)/gi);
  for (const match of matches) names.add(match[1]);
  return names;
}

function checkPluginManifest() {
  // The repo doubles as an installable Claude plugin. Verify the manifest parses,
  // every declared skills path exists, and the version stays in lockstep with
  // package.json (single source of truth for releases).
  const manifestPath = path.join(ROOT, ".claude-plugin", "plugin.json");
  const marketplacePath = path.join(ROOT, ".claude-plugin", "marketplace.json");

  if (!fs.existsSync(manifestPath)) {
    errors.push(".claude-plugin/plugin.json: missing (repo is expected to be installable as a plugin).");
    return;
  }

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    errors.push(`.claude-plugin/plugin.json: invalid JSON (${error.message}).`);
    return;
  }

  if (!manifest.name || !/^[a-z0-9-]+$/.test(manifest.name)) {
    errors.push(`.claude-plugin/plugin.json: "name" must be kebab-case, got "${manifest.name}".`);
  }

  for (const skillPath of manifest.skills ?? []) {
    if (!fs.existsSync(path.join(ROOT, skillPath))) {
      errors.push(`.claude-plugin/plugin.json: skills path "${skillPath}" does not exist.`);
    }
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
  if (manifest.version !== pkg.version) {
    errors.push(
      `.claude-plugin/plugin.json version "${manifest.version}" does not match package.json version "${pkg.version}".`
    );
  }

  if (fs.existsSync(marketplacePath)) {
    try {
      const marketplace = JSON.parse(fs.readFileSync(marketplacePath, "utf8"));
      const entry = (marketplace.plugins ?? []).find((plugin) => plugin.name === manifest.name);
      if (!entry) {
        errors.push(`.claude-plugin/marketplace.json: no plugin entry named "${manifest.name}".`);
      }
    } catch (error) {
      errors.push(`.claude-plugin/marketplace.json: invalid JSON (${error.message}).`);
    }
  }
}

function checkStaleLanguage() {
  const scanDirs = [path.join(ROOT, "playbook"), path.join(ROOT, "skills")];
  for (const dir of scanDirs) {
    scanDirForStaleLanguage(dir);
  }
}

function scanDirForStaleLanguage(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForStaleLanguage(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const content = fs.readFileSync(fullPath, "utf8");
      const lines = content.split("\n");
      lines.forEach((line, index) => {
        const match = line.match(STALE_LANGUAGE_PATTERN);
        if (match) {
          errors.push(`${path.relative(ROOT, fullPath)}:${index + 1}: stale language "${match[0]}" found.`);
        }
      });
    }
  }
}
