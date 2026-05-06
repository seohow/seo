---
name: audit-xml-sitemap
description: Use to audit xml sitemap; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Audit XML Sitemap

This skill takes a sitemap (or sitemap-index plus all child sitemaps) and produces a structured audit. The output validates each URL in the sitemap against the canonical-only / indexable-only rule, surfaces sitemap-specific issues (parsing errors, stale `lastmod`, broken URLs, structural problems), and cross-references with GSC and other audits when data is available.

The skill is opinionated: every sitemap URL should be canonical, return 200, be indexable, and have an accurate `lastmod`. Pattern-level findings (X% of sitemap URLs are non-canonical) get prioritised over per-URL findings.

## When to use this skill

- The user shares a sitemap and asks for an audit.
- GSC Sitemaps report shows errors or discovered-but-not-indexed mismatches.
- After a CMS update, theme change, or migration that may have broken sitemap auto-generation.
- The user is investigating why indexed URLs and sitemap URLs don't match.
- Quarterly technical-SEO hygiene check.

## When NOT to use this skill

- The user wants to generate a sitemap from scratch — for most platforms, the CMS auto-generates and the audit task is checking output, not creation.
- The user wants to debug indexing reasons — use `audit-indexing-status`.
- The user wants to fix canonical issues specifically — use `audit-canonical-tags` (often run in parallel with this skill).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: CMS / platform (5).
2. **Sitemap source** — the live `sitemap.xml` URL, or pasted sitemap content. If it's a sitemap-index, also pull all child sitemaps. Required.
3. **Crawler export with canonical metadata (optional but valuable)** — Screaming Frog or similar showing canonical, status, indexability per URL. Without this, the audit can flag sitemap structural issues but can't validate every URL's canonical / indexable status. Ask if available.
4. **GSC Pages export (optional)** — for the indexed-vs-sitemap cross-reference. URLs indexed but not in sitemap; URLs in sitemap but not indexed.
5. **Canonical-audit output (optional)** — if `audit-canonical-tags` was just run, its output sharpens this audit's flag of "URLs with canonical pointing elsewhere shouldn't be in the sitemap."
6. **URL-conventions doc (optional)** — from `define-url-conventions`. URLs in sitemap that violate conventions are surfaced.

If the sitemap source is missing, ask. The audit operates on real sitemap content.

## Process

1. **Parse the sitemap.** If sitemap-index, fetch all child sitemaps. Count total URLs across the structure. Flag any parsing errors (malformed XML, unsupported encoding, missing required elements).
2. **Catalogue sitemap content:**
   - Total URL count
   - URL count per child sitemap
   - URLs by content type (products / collections / blog / pages / utility) — inferred from URL patterns
   - `lastmod` distribution: how many have a `lastmod`, how many missing, how stale (e.g. >12 months old)
   - `changefreq` and `priority` usage (informational; Google mostly ignores)
3. **Validate each URL** (using crawler data if available, otherwise sample-check):
   - Returns 200? Flag 4xx/5xx — these are sitemap errors that surface in GSC.
   - Indexable (no `noindex`, not blocked by `robots.txt`)? Flag exclusions.
   - Canonical (canonical URL == page URL, or page URL == canonical of another URL)? Flag non-canonical inclusions.
   - URL pattern matches site conventions? Flag deviations.
4. **Cross-reference with GSC indexed URLs (if data provided):**
   - URLs indexed but not in sitemap — usually parameter URLs / non-canonical duplicates Google picked up via crawl. Flag for canonical work upstream.
   - URLs in sitemap but not indexed — investigate per the indexing audit (see `audit-indexing-status`).
5. **Cross-reference with canonical audit (if available):**
   - Sitemap URLs flagged by canonical audit as "should canonicalise to different URL" — remove from sitemap.
6. **Check sitemap structure:**
   - Sitemap-index used appropriately? (Required if >50,000 URLs or >50MB.)
   - Splits make sense? (By content type, by product line, by date.)
   - Any sitemaps over 50,000 URLs / 50MB? Flag for splitting.
   - Sitemap referenced in `robots.txt`?
   - Sitemap submitted to GSC?
7. **Assess `lastmod` accuracy:**
   - Stale (>12 months on pages that have been edited)? Flag.
   - Missing entirely? Flag.
   - Synthesised CMS defaults that don't reflect real content updates? Flag.
8. **Group findings by issue type:**
   - Parsing errors
   - Broken URLs (4xx/5xx)
   - Non-indexable URLs (`noindex` / robots-blocked)
   - Non-canonical URLs in sitemap
   - URLs violating site URL conventions
   - Stale or missing `lastmod`
   - Sitemap-index structural issues
   - Discovered-vs-submitted mismatches (GSC cross-reference)
   - Sitemap not referenced in robots.txt / not submitted to GSC
9. **Prioritise.** P0 = fixes affecting many URLs OR template-level (CMS auto-generation issues) OR sitemap-not-submitted. P1 = per-URL cleanups on cluster-mapped or high-traffic URLs. P2 = `lastmod` and metadata hygiene.

## Output format

```markdown
# XML Sitemap Audit — [Business Name]

**Sitemap source:** [URL or "pasted"]
**Sitemap structure:** [single sitemap / sitemap-index with N children]
**Total URLs:** [n]
**Audit date:** [date]

## Sitemap structure

| Sitemap file | URL count | Content type |
|--------------|----------:|--------------|
| /sitemap.xml | (index) | — |
| /sitemap_products_1.xml | 8 | products |
| /sitemap_collections_1.xml | 4 | collections |
| /sitemap_blogs_1.xml | 25 | blog articles |
| /sitemap_pages_1.xml | 12 | utility pages |

(Recompute as appropriate.)

## URL-state distribution

| State | Count | % |
|-------|------:|--:|
| Returns 200 + canonical + indexable | ... | ...% |
| Returns 4xx/5xx (broken) | ... | ...% |
| Non-indexable (noindex / robots-blocked) | ... | ...% |
| Non-canonical (canonical points elsewhere) | ... | ...% |
| Other / unknown | ... | ...% |

## `lastmod` analysis

| State | Count | % |
|-------|------:|--:|
| Present + recent (<6mo) | ... | ...% |
| Present + moderately stale (6-12mo) | ... | ...% |
| Present + stale (>12mo) | ... | ...% |
| Missing | ... | ...% |

(Note: stale lastmod on pages that haven't actually changed is fine; stale lastmod on pages that HAVE been updated is the problem.)

## Findings by issue type

### Parsing errors
- [List or "none"]

### Broken URLs (4xx/5xx)
| URL | Status | Recommendation |
|-----|------:|----------------|
| ... | ... | Remove from sitemap / fix the URL |

### Non-indexable URLs (noindex / robots-blocked)
| URL | Reason | Recommendation |
|-----|--------|----------------|
| ... | ... | Remove from sitemap OR remove the noindex (depending on intent) |

### Non-canonical URLs
| URL | Canonical points to | Recommendation |
|-----|---------------------|----------------|
| ... | ... | Remove from sitemap OR change canonical (depending on intent) |

### Stale lastmod
| URL | lastmod | Last actual update (if known) | Recommendation |
|-----|---------|-------------------------------|----------------|
| ... | ... | ... | Re-save in CMS to refresh; or fix CMS sitemap-generation logic |

### URLs violating URL conventions
| URL | Issue | Recommendation |
|-----|-------|----------------|
| ... | ... | ... |

### Sitemap-index structural issues
- [Findings or "none"]

### Discovered-vs-submitted mismatch (if GSC data provided)
- URLs indexed but not in sitemap: [n]. Most likely cause: [parameter URLs / duplicates / etc.]. Recommendation: fix upstream via canonical work.
- URLs in sitemap but not indexed: [n]. Recommendation: cross-reference with `audit-indexing-status`.

### Sitemap submission state
- Submitted to GSC? [yes / no]
- Referenced in robots.txt? [yes / no]
- Recommendations if either is missing.

## Prioritised remediation list

### P0 — Critical
| # | Fix | Affected URLs | Action | Where to fix |
|---|-----|---------------|--------|--------------|
| 1 | Remove broken URLs from sitemap | [n] | [...] | [CMS / config] |
| 2 | Submit sitemap to GSC | n/a | [...] | GSC Sitemaps |
| ... |

### P1 — High
[Same structure]

### P2 — Hygiene
[Same structure]

## Implementation checklist
- [ ] Apply P0 fixes (target: this week).
- [ ] Force sitemap regeneration in CMS.
- [ ] Re-submit to GSC if URL changed; ping GSC otherwise.
- [ ] Apply P1 fixes (next 2-4 weeks).
- [ ] Address `lastmod` hygiene at template level if pattern-driven.
- [ ] After 14 days: pull GSC Sitemaps report; verify error count has dropped.
- [ ] Schedule next audit (recommended quarterly).

## Risks and watchouts
3-5 specific watchouts: e.g. "Shopify regenerates the sitemap automatically — manual edits won't persist; fixes have to happen in product / page records, not the sitemap file"; "discovered-but-not-submitted URLs are a canonical-audit problem, not a sitemap problem"; "lastmod on Shopify pulls from `updated_at`, which doesn't update on minor edits — re-saving the page record is the workaround"; "if a child sitemap fails to parse, GSC reports the parent sitemap-index as failed even though only one child broke."
```

Save the produced file to `businesses/<slug>/sitemaps/audit-<YYYY-MM-DD>.md`. Create the `sitemaps/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every URL state is categorised; the URL-state distribution table is real, not handwaved.
- Pattern-level findings (e.g. "all parameter URLs in sitemap should be removed") surface first; per-URL findings come after.
- Cross-references with GSC, canonical audit, and URL conventions are run when data is provided.
- Sitemap submission state is checked explicitly — both GSC submission and `robots.txt` reference.
- Remediation is grouped by action type and prioritised P0/P1/P2.
- Implementation checklist closes the loop with re-submission and GSC verification at 14 days.

## Common mistakes to avoid

- Don't recommend manually editing an auto-generated sitemap. The fix has to happen in the CMS data, not the sitemap file.
- Don't recommend keeping URLs in the sitemap that the canonical audit flagged as non-canonical. Either remove from sitemap or fix the canonical.
- Don't skip GSC submission state. A sitemap not submitted to GSC loses the GSC Sitemaps report's diagnostic value.
- Don't fabricate findings. If the input lacks canonical metadata, say so and limit the audit to what you can validate (URL count, structure, parsing).
- Don't recommend removing `lastmod` because it's stale — recommend updating it. Missing `lastmod` is a stronger problem than stale `lastmod`.
- Don't promise indexing improvements from sitemap fixes alone. Sitemaps aid discovery; indexing depends on quality, canonicals, and crawl.
- Don't audit a sitemap without the sitemap. The audit operates on real content.

## Example

**Input (abbreviated):** Field & Sun. Shopify. Sitemap-index at `/sitemap.xml` with 4 child sitemaps: products (8 URLs), collections (4 URLs), blogs (25 URLs), pages (12 URLs). Total 49 URLs in sitemap. GSC indexed count: 612. Crawler data with canonical metadata available.

**Output (abbreviated):**

Structure: 4 child sitemaps, splits by content type — sensible.

URL-state distribution: 47 of 49 URLs (96%) return 200 + canonical + indexable. 1 page (`/legacy-press`) returns 404. 1 product page is `noindex` (left over from staging — should be either removed or re-indexed; the user has to decide).

`lastmod`: 23 of 25 blog articles have stale `lastmod` from initial publish; 2 articles were updated in 2026 but `lastmod` doesn't reflect this. CMS quirk — re-save the articles to refresh.

Findings:

- **Broken URL:** `/legacy-press` returns 404. Remove from sitemap (delete the page record in Shopify so the sitemap auto-regenerates without it).
- **Non-indexable URL:** 1 product page has `noindex`. Either remove the noindex (if the product should rank) or remove the page from the sitemap.
- **Stale lastmod:** 2 articles. Re-save in Shopify to refresh `updated_at` → sitemap regenerates with correct dates.
- **Discovered-vs-submitted mismatch:** 612 indexed URLs vs 49 in sitemap = 563 URLs indexed without sitemap submission. Almost all are parameter URLs and Shopify-default duplicates. Recommendation: fix upstream via `audit-canonical-tags` (already in P0 there); not a sitemap fix.
- **Submission state:** sitemap is referenced in robots.txt (good); submitted to GSC (good); GSC Sitemaps report shows 1 error (the `/legacy-press` 404).

Prioritised remediation: 2 P0 fixes (remove `/legacy-press`, decide on the noindexed product), 2 P1 (refresh stale `lastmod`), 0 P2.

Implementation checklist included. After 14 days, re-pull GSC Sitemaps report; expect zero errors.

Risks: the 563 indexed-but-not-in-sitemap URLs are a canonical-audit problem, not a sitemap-audit problem. If Field & Sun fixes canonicals, those URLs deindex over 30-60 days and the sitemap stays right-sized. If they don't fix canonicals, those URLs stay in the index and dilute signal.

Saved to `businesses/field-and-sun/sitemaps/audit-2026-05-01.md`.
