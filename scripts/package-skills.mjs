import childProcess from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  copyDir,
  discoverSkills,
  ensureCleanDir,
  parseFrontmatter,
  readReleaseConfig,
  ROOT,
  sha256
} from "./skill-release-lib.mjs";

const config = readReleaseConfig();
const version = readOption("--version") ?? process.env.RELEASE_VERSION;
if (!version) {
  console.error("Usage: npm run skills:package -- --version 1.0.0");
  process.exit(1);
}

const skills = discoverSkills();
const versionName = `${config.versionPrefix ?? "v"}${version}`;
const prerelease = isPrerelease(version);
const outputRoot = readOption("--output")
  ? path.resolve(readOption("--output"))
  : path.join(ROOT, config.releaseRoot ?? "releases");
const releaseDir = path.join(outputRoot, versionName);
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `seo-skills-${version}-`));
const manifest = {
  version,
  prerelease,
  createdAt: new Date().toISOString(),
  layout: formatLayout(config.layout),
  skills: []
};
const checksums = [];

ensureCleanDir(releaseDir);

try {
  for (const skill of skills) {
    const releaseRelativeDir =
      skill.category === "setup"
        ? renderTemplate(config.layout?.setup ?? "setup", skill, versionName)
        : renderTemplate(config.layout?.category ?? "categories/<category>", skill, versionName);
    const destinationDir = path.join(releaseDir, releaseRelativeDir);
    const zipName = renderTemplate(config.layout?.zipName ?? "<skill>.zip", skill, versionName);
    const zipPath = path.join(destinationDir, zipName);
    const packageRoot = path.join(tempDir, skill.name);

    fs.mkdirSync(destinationDir, { recursive: true });
    ensureCleanDir(packageRoot);
    copyDir(skill.sourceDir, packageRoot);
    zipSkill(tempDir, skill.name, zipPath);

    const checksum = sha256(zipPath);
    const relativeZip = path.relative(releaseDir, zipPath);
    const { frontmatter } = parseFrontmatter(skill.skillFile);
    manifest.skills.push({
      name: skill.name,
      category: skill.category,
      description: frontmatter?.description ?? "",
      source: path.relative(ROOT, skill.sourceDir),
      zip: relativeZip,
      sha256: checksum
    });
    checksums.push(`${checksum}  ${relativeZip}`);
  }

  fs.writeFileSync(path.join(releaseDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(releaseDir, "checksums.txt"), `${checksums.join("\n")}\n`);
  fs.writeFileSync(path.join(releaseDir, "README.md"), renderReleaseReadme(version, manifest));

  console.log(`Packaged ${skills.length} skills into ${path.relative(ROOT, releaseDir)}.`);
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

function zipSkill(cwd, skillName, zipPath) {
  childProcess.execFileSync("zip", ["-qr", zipPath, skillName], { cwd });
}

function readOption(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) return null;
  return process.argv[index + 1] ?? null;
}

function renderTemplate(template, skill, releaseVersionName) {
  return template
    .replaceAll("<category>", skill.category)
    .replaceAll("<skill>", skill.name)
    .replaceAll("<version>", releaseVersionName)
    .split("/")
    .join(path.sep);
}

function formatLayout(layoutConfig = {}) {
  const zipName = layoutConfig.zipName ?? "<skill>.zip";
  const setupPath = path.posix.join(layoutConfig.setup ?? "setup", zipName);
  const categoryPath = path.posix.join(layoutConfig.category ?? "categories/<category>", zipName);
  return `${setupPath} and ${categoryPath}`;
}

function renderReleaseReadme(releaseVersion, releaseManifest) {
  const byCategory = new Map();
  for (const skill of releaseManifest.skills) {
    if (!byCategory.has(skill.category)) byCategory.set(skill.category, []);
    byCategory.get(skill.category).push(skill);
  }

  const sections = [...byCategory.entries()]
    .map(([category, categorySkills]) => {
      const rows = categorySkills
        .map((skill) => `| ${skill.name} | \`${skill.zip}\` |`)
        .join("\n");
      const title = category === "setup" ? "Setup" : category;
      return `## ${title}\n\n| Skill | ZIP |\n|---|---|\n${rows}`;
    })
    .join("\n\n");

  const releaseType = releaseManifest.prerelease ? "Prerelease" : "Release";

  return `# SEO Toolkit Skills v${releaseVersion}\n\nStatus: ${releaseType}\n\nThis release keeps ZIPs grouped by setup/category so admins can browse the toolkit without an extra folder per skill.\n\nEach ZIP contains exactly one skill folder at its archive root, which is the upload shape expected by Claude Skills and compatible Agent Skills import flows.\n\n${sections}\n`;
}

function isPrerelease(candidateVersion) {
  return /(?:^|[.-])(alpha|beta|rc)(?:[.-]|$)/i.test(candidateVersion);
}
