import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./skill-release-lib.mjs";

const SKIP_DIRS = new Set([".git", "node_modules", "releases"]);

// Files whose relative links are allowed to fail resolution because they are
// template placeholders, not real cross-links. AGENTS.md's "Cross-link URL
// encoding" section also contains a deliberate wrong example — handled separately
// below by skipping lines that begin with "- Wrong:".
const ALLOWLISTED_FILES = new Set([
  path.join(ROOT, "templates", "README_TEMPLATE.md"),
  path.join(ROOT, "templates", "SKILL_TEMPLATE.md")
]);

const markdownFiles = findMarkdownFiles(ROOT);
const errors = [];
let checkedLinks = 0;

for (const file of markdownFiles) {
  const relativeFile = path.relative(ROOT, file);
  const isAllowlistedFile = ALLOWLISTED_FILES.has(file);
  const isAgentsMd = file === path.join(ROOT, "AGENTS.md");
  const lines = fs.readFileSync(file, "utf8").split("\n");

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    // AGENTS.md's "Cross-link URL encoding" section illustrates both a correct and a
    // wrong link, both written inside backtick code spans as syntax examples rather
    // than real navigable links (the "Correct" one isn't resolvable from AGENTS.md's
    // own location either, since it demonstrates syntax as seen from inside a leaf
    // file one level down). Per convention, only the "- Wrong:" line's link is meant
    // to fail resolution; both are illustrative, so skip links inside inline code
    // spans on either line.
    const isIllustrativeExampleLine =
      isAgentsMd && (line.trim().startsWith("- Correct:") || line.trim().startsWith("- Wrong:"));

    for (const url of findLinkUrls(line)) {
      const value = url.split("#")[0].trim();
      if (!value) continue; // pure-fragment link
      if (/^[a-z][a-z0-9+.-]*:/i.test(value)) continue; // external scheme (http, https, mailto, ...)

      checkedLinks++;

      if (value.includes(" ")) {
        if (isAllowlistedFile || isIllustrativeExampleLine) continue;
        errors.push(
          `${relativeFile}:${lineNumber}: link path contains a literal space (use %20): "${value}"`
        );
        continue;
      }

      const decoded = decodeURIComponent(value);
      const resolved = decoded.startsWith("/")
        ? path.join(ROOT, decoded)
        : path.resolve(path.dirname(file), decoded);

      if (!fs.existsSync(resolved)) {
        if (isAllowlistedFile || isIllustrativeExampleLine) continue;
        errors.push(`${relativeFile}:${lineNumber}: broken link, target not found: "${value}"`);
      }
    }
  });
}

if (errors.length > 0) {
  for (const error of errors) console.error(`error: ${error}`);
  console.error(`\n${errors.length} broken link(s) found across ${markdownFiles.length} markdown file(s).`);
  process.exit(1);
}

console.log(`Checked ${checkedLinks} relative link(s) across ${markdownFiles.length} markdown file(s). All resolved.`);

function findMarkdownFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

function findLinkUrls(line) {
  const urls = [];
  const matches = line.matchAll(/\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of matches) urls.push(match[1].trim());
  return urls;
}
