import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { ROOT } from "./skill-release-lib.mjs";

// Packages the repo as an installable Claude plugin (.plugin = zip of the plugin dir).
// Includes only what the installed plugin needs: the manifest, the skills, the playbook
// (skills and category READMEs cross-link into it), templates, README, and LICENSE.
// Excludes businesses/ (per-user workspaces live in the user's own folder, not the
// plugin), scripts/, releases/, CI config, and repo-maintenance docs.

const INCLUDE = [".claude-plugin", "skills", "playbook", "templates", "README.md", "LICENSE"];

const manifestPath = path.join(ROOT, ".claude-plugin", "plugin.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const outputDir = path.join(ROOT, "releases");
const outputFile = path.join(outputDir, `${manifest.name}.plugin`);

for (const entry of INCLUDE) {
  if (!fs.existsSync(path.join(ROOT, entry))) {
    console.error(`error: expected "${entry}" to exist at repo root.`);
    process.exit(1);
  }
}

fs.mkdirSync(outputDir, { recursive: true });

const tmpFile = path.join(os.tmpdir(), `${manifest.name}-${Date.now()}.plugin`);
const zip = spawnSync("zip", ["-r", "-q", tmpFile, ...INCLUDE, "-x", "*.DS_Store"], {
  cwd: ROOT,
  stdio: "inherit"
});

if (zip.status !== 0) {
  console.error("error: zip failed.");
  process.exit(zip.status ?? 1);
}

fs.copyFileSync(tmpFile, outputFile);
fs.rmSync(tmpFile);

const sizeKb = Math.round(fs.statSync(outputFile).size / 1024);
console.log(`Packaged ${manifest.name} v${manifest.version} → ${path.relative(ROOT, outputFile)} (${sizeKb} KB).`);
