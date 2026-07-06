import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./skill-release-lib.mjs";

// Stamps a release version into the two files the consistency check keeps in
// lockstep: package.json (the single source of truth locally) and
// .claude-plugin/plugin.json (the installable plugin manifest). Used by the
// release workflow so a tag like v1.2.3 is mirrored everywhere, including the
// packaged .plugin. Safe to run locally: `npm run version:set -- --version 1.2.3`.

const version = readOption("--version") ?? process.env.RELEASE_VERSION;
if (!version) {
  console.error("Usage: npm run version:set -- --version 1.2.3");
  process.exit(1);
}

const targets = [
  path.join(ROOT, "package.json"),
  path.join(ROOT, ".claude-plugin", "plugin.json")
];

for (const file of targets) {
  const json = JSON.parse(fs.readFileSync(file, "utf8"));
  json.version = version;
  fs.writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`);
  console.log(`Set version ${version} in ${path.relative(ROOT, file)}.`);
}

function readOption(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) return null;
  return process.argv[index + 1] ?? null;
}
