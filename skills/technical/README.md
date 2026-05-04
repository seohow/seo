# Technical Skills

Make sure search engines and AI crawlers can discover, crawl, render, index, and serve the site cleanly and quickly.

Read the full playbook category: [03. Technical SEO](../../playbook/03.%20Technical%20SEO/README.md)

## Topics and Skills

Each topic heading links back to the playbook explanation. Each skill link opens the runnable workflow.

## [Crawlability](../../playbook/03.%20Technical%20SEO/01.%20Crawlability.md)

| Skill | Description |
|---|---|
| [audit-crawlability](audit-crawlability/SKILL.md) | Analyses a list of URLs (from a crawler export or sitemap) for robots.txt blocking, meta robots / X-Robots-Tag directives, response codes, redirect chains, and crawl depth. Produces a prioritised remediation list grouped by issue type. |

## [Indexing](../../playbook/03.%20Technical%20SEO/02.%20Indexing.md)

| Skill | Description |
|---|---|
| [audit-indexing-status](audit-indexing-status/SKILL.md) | Analyses a GSC Pages report export (or pasted data), categorises URLs by exclusion reason, cross-references with the cluster map, and produces a prioritised remediation list grouped by action type. Distinguishes accidental from intentional exclusions. |

## [Site Speed](../../playbook/03.%20Technical%20SEO/03.%20Site%20Speed.md)

| Skill | Description |
|---|---|
| [audit-core-web-vitals](audit-core-web-vitals/SKILL.md) | Analyses one page's PageSpeed Insights results (lab + field) plus image inventory and third-party script list, identifies the LCP element, surfaces the highest-impact fixes for LCP/INP/CLS, and produces a prioritised remediation list with effort estimates and expected metric movement. |

## [Schema Markup](../../playbook/03.%20Technical%20SEO/04.%20Schema%20Markup.md)

| Skill | Description |
|---|---|
| [plan-schema-strategy](plan-schema-strategy/SKILL.md) | Produces a site-wide structured-data plan: which schema types per page type, which properties are mandatory vs nice-to-have, implementation approach (Liquid template vs app vs hand-coded), and a sequencing plan. Run this first before generating any specific schema. |
| [generate-schema-markup](generate-schema-markup/SKILL.md) | Generates valid JSON-LD for a specific page (PDP, collection, blog post, FAQ, homepage), with all required properties populated from page data, recommended properties where the data supports it, and explicit validation steps before deploy. |

## [Canonical Tags](../../playbook/03.%20Technical%20SEO/05.%20Canonical%20Tags.md)

| Skill | Description |
|---|---|
| [audit-canonical-tags](audit-canonical-tags/SKILL.md) | Analyses canonical tags across a URL list (from a crawler export or sitemap), surfaces missing canonicals, conflicts (canonical vs sitemap vs internal links), bad targets (canonicals pointing to 404 / 301 / noindex), and pattern-level issues (parameter URLs, collection-prefixed duplicates). Produces a prioritised remediation list grouped by issue type. |

## [XML Sitemaps](../../playbook/03.%20Technical%20SEO/06.%20XML%20Sitemaps.md)

| Skill | Description |
|---|---|
| [audit-xml-sitemap](audit-xml-sitemap/SKILL.md) | Analyses the sitemap (or sitemap-index + child sitemaps) for non-canonical URLs, broken / `noindex` URLs, stale `lastmod`, missing canonical URLs, and sitemap-index structural issues. Cross-references with GSC Pages export, canonical-audit output, and URL-conventions doc when available. Produces a remediation list with template-level vs per-URL actions. |

## [JavaScript SEO](../../playbook/03.%20Technical%20SEO/07.%20JavaScript%20SEO.md)

| Skill | Description |
|---|---|
| [audit-javascript-seo](audit-javascript-seo/SKILL.md) | Analyses a page (or batch) for JavaScript rendering risks. Compares source HTML against rendered DOM (using user-supplied data from "View Source" + DevTools "Elements" panel, OR GSC URL Inspection's tested-page view). Identifies SEO-critical content that's only in the rendered DOM, audits internal links for real `<a href>` anchors, flags JS redirects, surfaces JS-injected widget content. Produces a prioritised remediation list with specific fixes per finding. |

## [Log File Analysis](../../playbook/03.%20Technical%20SEO/08.%20Log%20File%20Analysis.md)

| Skill | Description |
|---|---|
| [analyse-log-files](analyse-log-files/SKILL.md) | Takes a 30-90-day server access log export filtered for Googlebot, plus the site's URL inventory (sitemap + crawler export), and produces a structured analysis: crawl distribution by URL bucket, response-code distribution, orphan URLs, under-crawled URLs, crawl-budget waste estimates, and a prioritised remediation list. |

## [Site Migration](../../playbook/03.%20Technical%20SEO/09.%20Site%20Migration.md)

| Skill | Description |
|---|---|
| [plan-site-migration](plan-site-migration/SKILL.md) | Produces a written migration plan: scope (which URLs change, what type of migration), redirect strategy, pre-migration baseline checklist, sequencing (single-shot vs staged), QA gates, recovery monitoring schedule, rollback trigger definition, downstream-system update list, and post-migration documentation requirements. Run this first; the plan is the prerequisite to any other migration work. |
| [build-redirect-map](build-redirect-map/SKILL.md) | Builds the operational old-URL → new-URL → 301 mapping. Inputs: full URL inventory (sitemap + crawler), the new URL convention or per-URL mapping rules, any existing redirect file. Outputs: the mapping table with chain-detection (no multi-hop), 200-validation status per new URL, batch order for staged rollout, and an implementation-ready file for the CMS or server. |

## [AI Crawler Management](../../playbook/03.%20Technical%20SEO/10.%20AI%20Crawler%20Management.md)

| Skill | Description |
|---|---|
| [audit-ai-crawler-access](audit-ai-crawler-access/SKILL.md) | Analyses the live `robots.txt`, `llms.txt`, and page-level AI directives against the major AI crawlers; surfaces gaps between declared posture and actual rules; produces a remediation list. Use to validate that what the team thinks the policy is matches what the server actually serves. |
| [generate-llms-txt](generate-llms-txt/SKILL.md) | Produces a valid `/llms.txt` file (and optionally `/llms-full.txt`) from the business profile, sitemap, and curated key URLs. Outputs the file plus an implementation note. Use when the brand has decided on an open or visibility-only posture and wants LLMs to find a clean summary of the site. |
