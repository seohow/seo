import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./skill-release-lib.mjs";

// The files whose "version" field the consistency check keeps in lockstep:
// package.json (the source of truth locally) and the installable plugin manifest.
const VERSIONED_FILES = [
  path.join(ROOT, "package.json"),
  path.join(ROOT, ".claude-plugin", "plugin.json")
];

function setVersion(version) {
  for (const file of VERSIONED_FILES) {
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    json.version = version;
    fs.writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`);
  }
}

// Cuts a release locally: bumps the version everywhere it must match, validates
// the repo, commits the bump, tags it, and pushes commit + tag. Pushing the tag
// triggers .github/workflows/release-skills.yml, which packages the skills and
// the .plugin at that version.
//
//   npm run release 1.2.3            # bump + check + commit + tag + push
//   npm run release 1.2.3 --dry-run  # print the plan, change nothing
//
// The version is a positional arg (no --version flag, so no clash with npm's own
// --version). --dry-run is consumed by npm and surfaced as npm_config_dry_run;
// we also honour it in argv for direct `node scripts/release.mjs` invocation.

const version = process.argv.slice(2).find((arg) => !arg.startsWith("-"));
const dryRun =
  process.env.npm_config_dry_run === "true" || process.argv.includes("--dry-run");

if (!version) {
  fail("Usage: npm run release <version> [--dry-run]   (e.g. npm run release 1.2.3)");
}

// Loose semver: 1.2.3, optionally -alpha.1 / -beta.2 / -rc.1 etc.
if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version)) {
  fail(`Version "${version}" is not a valid semver string (e.g. 1.2.3 or 1.2.3-alpha.1).`);
}

const tag = `v${version}`;
const relFiles = VERSIONED_FILES.map((file) => path.relative(ROOT, file));

// Preconditions: a clean tree (so the release commit only carries the bump) and
// a tag that doesn't already exist. In a real run these are hard failures; in a
// dry run they're surfaced as warnings so you can still preview from any state.
const dirty = git("status", "--porcelain").trim();
const tagExists = git("tag", "--list", tag).trim();

if (dryRun) {
  if (dirty) console.log(`[dry-run] Warning: working tree is not clean — a real run would abort.`);
  if (tagExists) console.log(`[dry-run] Warning: tag ${tag} already exists — a real run would abort.`);
  console.log(`[dry-run] Would set version ${version} in: ${relFiles.join(", ")}`);
  console.log(`[dry-run] Would run: npm run repo:check`);
  console.log(`[dry-run] Would commit: "chore(release): ${tag}"`);
  console.log(`[dry-run] Would tag: ${tag}`);
  console.log(`[dry-run] Would push: commit + ${tag} to origin`);
  process.exit(0);
}

if (dirty) {
  fail(`Working tree is not clean. Commit or stash changes first:\n${dirty}`);
}
if (tagExists) {
  fail(`Tag ${tag} already exists. Delete it or pick a new version.`);
}

console.log(`Bumping version to ${version} in ${relFiles.join(", ")}...`);
setVersion(version);

console.log("Running repo checks...");
run("npm", "run", "repo:check");

console.log(`Committing release commit and tagging ${tag}...`);
git("add", ...relFiles);
git("commit", "-m", `chore(release): ${tag}`);
git("tag", "-a", tag, "-m", `Release ${tag}`);

console.log("Pushing commit and tag...");
const branch = git("rev-parse", "--abbrev-ref", "HEAD").trim();
git("push", "origin", branch);
git("push", "origin", tag);
console.log(`Pushed ${branch} and ${tag}. The release workflow will run on the tag.`);

function git(...args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" });
}

function run(command, ...args) {
  execFileSync(command, args, { cwd: ROOT, stdio: "inherit" });
}

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}
