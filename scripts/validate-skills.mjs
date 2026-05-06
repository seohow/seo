import fs from "node:fs";
import path from "node:path";
import { discoverSkills, parseFrontmatter, readReleaseConfig, ROOT } from "./skill-release-lib.mjs";

const strictPlatform = process.argv.includes("--strict-platform");
const config = readReleaseConfig();
const descriptionMaxChars = config.platformCompatibility?.descriptionMaxChars ?? 200;
const skills = discoverSkills();
const errors = [];
const warnings = [];

if (skills.length === 0) {
  errors.push("No skills found under skills/.");
}

for (const skill of skills) {
  const relativeSkillFile = path.relative(ROOT, skill.skillFile);
  const { frontmatter, content } = parseFrontmatter(skill.skillFile);

  if (!frontmatter) {
    errors.push(`${relativeSkillFile}: missing YAML frontmatter.`);
    continue;
  }

  if (!frontmatter.name) {
    errors.push(`${relativeSkillFile}: missing frontmatter field "name".`);
  } else if (frontmatter.name !== skill.name) {
    errors.push(`${relativeSkillFile}: name "${frontmatter.name}" must match folder "${skill.name}".`);
  }

  if (!frontmatter.description) {
    errors.push(`${relativeSkillFile}: missing frontmatter field "description".`);
  } else if (frontmatter.description.length > descriptionMaxChars) {
    const message = `${relativeSkillFile}: description is ${frontmatter.description.length} chars; platform config accepts ${descriptionMaxChars}.`;
    if (strictPlatform) errors.push(message);
    else warnings.push(message);
  }

  for (const reference of findLocalReferences(content)) {
    const target = path.join(skill.sourceDir, reference);
    if (!fs.existsSync(target)) {
      warnings.push(`${relativeSkillFile}: referenced local file not found: ${reference}`);
    }
  }
}

for (const warning of warnings) console.warn(`warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`error: ${error}`);
  process.exit(1);
}

console.log(`Validated ${skills.length} skills${warnings.length ? ` with ${warnings.length} warning(s)` : ""}.`);

function findLocalReferences(content) {
  const references = new Set();
  const markdownLinks = content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g);

  for (const match of markdownLinks) addReference(match[1]);

  return [...references];

  function addReference(rawValue) {
    const value = rawValue.split("#")[0].trim();
    if (!value) return;
    if (/^[a-z]+:/i.test(value)) return;
    if (value.startsWith("/") || value.startsWith("../")) return;
    if (!value.includes("/")) return;
    references.add(value.replace(/%20/g, " "));
  }
}
