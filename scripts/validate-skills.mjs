import fs from "node:fs";
import path from "node:path";
import { discoverSkills, parseFrontmatter, readReleaseConfig, ROOT } from "./skill-release-lib.mjs";

const strictPlatform = process.argv.includes("--strict-platform");
const config = readReleaseConfig();
const descriptionMaxChars = config.platformCompatibility?.descriptionMaxChars ?? 200;
const skills = discoverSkills();
const errors = [];
const warnings = [];

// Sections every SKILL.md must have, per templates/SKILL_TEMPLATE.md. Matching is
// tolerant (case-insensitive, allows the minor phrasing variants observed across the
// 76 shipped skills) because the template's wording is a guide, not a literal string.
const UNIVERSAL_REQUIRED_SECTIONS = [
  { label: "When to use this skill", pattern: /^when to use/i },
  { label: "When NOT to use this skill", pattern: /^when not to use/i },
  { label: "Quality bar", pattern: /^quality bar/i },
  { label: "Common mistakes to avoid", pattern: /^common mistakes/i },
  { label: "Example", pattern: /^example/i }
];

// "Process" and "Output format" are the topic-skill archetype (planner/executor
// producing an artifact). The three setup/meta utilities (business-context,
// seo-foundation, business-profile) are structurally different per AGENTS.md: they
// use "Modes" instead of "Process" and "Output files" instead of "Output format".
// discoverSkills() already tags these as category "setup", so key the exemption off
// that instead of hardcoding names.
const TOPIC_ONLY_REQUIRED_SECTIONS = [
  { label: "Inputs required", pattern: /^inputs required/i },
  { label: "Process", pattern: /^process/i },
  { label: "Output format", pattern: /^output format/i }
];

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

  const requiredSections =
    skill.category === "setup"
      ? UNIVERSAL_REQUIRED_SECTIONS
      : [...UNIVERSAL_REQUIRED_SECTIONS, ...TOPIC_ONLY_REQUIRED_SECTIONS];
  const headings = findHeadings(content);
  for (const section of requiredSections) {
    const found = headings.some((heading) => section.pattern.test(heading));
    if (!found) {
      errors.push(`${relativeSkillFile}: missing required section "${section.label}".`);
    }
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

function findHeadings(content) {
  const headings = [];
  const headingLines = content.matchAll(/^##\s+(.+?)\s*$/gm);
  for (const match of headingLines) headings.push(match[1].trim());
  return headings;
}

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
