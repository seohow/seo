---
name: audit-crawlability
description: Audits the site's crawlability: robots.txt, internal links, crawl depth, redirect chains, and blocked resources. Use to diagnose crawl issues or before a site launch.
---

# Audit Crawlability

This skill takes a URL list (from Screaming Frog, Sitebulb, Ahrefs Site Audit, GSC, or a sitemap export) and a `robots.txt` and produces a structured crawlability audit. The output is a per-issue-type findings document with a prioritised remediation list — what to fix first, what's a regression watch, and what's safe to defer.

## When to use this skill

- The user shares a crawler export and asks for a crawlability audit.
- GSC reports rising "Discovered – not indexed" or "Crawled – not indexed" counts.
- Pages that should rank aren't being crawled (or are crawled rarely per log files).
- After a CMS update, template change, or site migration where regressions are possible.
- Quarterly technical-SEO hygiene check.

## When NOT to use this skill

- The user wants to audit *indexing* status (why Google excluded pages) — use `audit-indexing-status`.
- The user wants to investigate JavaScript-rendering gaps — use `audit-javascript-seo`.
- The user wants log-file-based crawl analysis — use `analyse-log-files`. This skill works on crawler/sitemap inputs; log files are a different surface.
- The user wants to fix one specific URL — recommend a manual check via DevTools + GSC URL Inspection instead.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. The CMS / platform field (section 5) is critical because crawlability defaults vary by platform.
2. **URL list with crawl metadata** — pasted, CSV, or file. Required columns at minimum: URL, status code, indexability (or meta robots value), depth from homepage. Useful additions: response time, X-Robots-Tag, canonical URL, inlinks count, redirect target. From Screaming Frog: the standard "Internal All" export has all of this.
3. **`robots.txt` file** — the live file at the site's root, pasted or fetched. Required.
4. **Cluster / priority list (optional)** — from `businesses/<slug>/clusters/cluster-map.md` or the user's priority pages. When known, the audit prioritises issues on these pages.
5. **Site scale** — small (under 500 URLs), medium (500-5,000), large (5,000+). Affects which findings warrant attention (e.g. crawl-depth issues are more impactful at large scale).

If the URL list or robots.txt is missing, ask. The audit isn't speculative — it operates on real artifacts.

## Process

1. **Parse `robots.txt`.** Identify each `User-agent` block, the `Allow`/`Disallow` directives, and any `Sitemap:` references. Flag risky patterns:
   - `Disallow: /` for any user-agent (full block — confirm intentional).
   - Wildcard patterns that catch real content paths (e.g. `Disallow: /*temp*` accidentally matching `/products/temperature-control`).
   - Outdated paths (blocking `/staging/` after staging is gone) — cosmetic but worth noting.
   - No `Sitemap:` reference — should add.
2. **Run mechanical checks across the URL list:**
   - **Status-code distribution** — counts of 2xx, 301, 302, 3xx other, 4xx, 5xx. Flag any 5xx (server errors); flag 4xx clusters; flag 302s (recommend converting to 301 unless temporary is genuinely intended).
   - **Soft-404 detection** — 200 status URLs whose content suggests "not found" or "no longer available." If the user has flagged these in the input, surface; otherwise note as a manual check.
   - **Redirect chains** — for each redirect, follow the chain. Flag any chain longer than 1 hop. Identify any loops.
   - **Meta robots / X-Robots-Tag** — count `noindex`, `nofollow`, `noarchive`, `nosnippet`. Flag every `noindex` for review (especially on cluster-mapped pages — usually unintentional). Flag any internal link with `nofollow`.
   - **Crawl depth** — distribution by depth. Flag URLs at depth 5+ (or 4+ for small sites). Cross-reference with priority pages — high-value pages at depth 5+ are P0.
   - **Orphan pages** — URLs in the sitemap or input list that have 0 inbound internal links per the crawler. Flag every orphan; if the page has commercial value, P0; if not, recommend de-publish or de-sitemap.
3. **Cross-reference robots.txt with the URL list.** Find URLs in the list that match a `Disallow` rule. These are crawl-blocked. For each, decide: was it intentional, or accidental? Flag accidental blocks as P0.
4. **Cross-reference with priority pages** if the cluster map is available. Issues on P0/P1 pages get higher remediation priority than issues on long-tail pages.
5. **Group findings by issue type:**
   - Robots.txt issues
   - Status-code issues (5xx, 4xx, 302s)
   - Soft-404s
   - Redirect chains and loops
   - Noindex / robots-meta issues
   - Crawl-depth issues
   - Orphan pages
6. **Prioritise.** P0 = blocking high-value pages, regression-risk, or affecting >5% of URLs. P1 = blocking low-value pages or issues affecting 1-5% of URLs. P2 = cosmetic / hygiene.
7. **Write the remediation list.** For each finding, specify: what to change, where (CMS / template / config), the expected outcome, and a verification step.

## Output format

```markdown
# Crawlability Audit — [Business Name]

**URLs audited:** [n]
**Site scale:** [small / medium / large]
**Robots.txt source:** [pasted / fetched live]
**Audit date:** [date]

## Summary
| Category | Findings | P0 | P1 | P2 |
|----------|---------:|---:|---:|---:|
| Robots.txt | ... | ... | ... | ... |
| Status codes | ... | ... | ... | ... |
| Soft-404s | ... | ... | ... | ... |
| Redirect chains/loops | ... | ... | ... | ... |
| Noindex / robots meta | ... | ... | ... | ... |
| Crawl depth | ... | ... | ... | ... |
| Orphan pages | ... | ... | ... | ... |

Brief 2-4 sentence read on the shape of the audit and the highest-leverage fixes.

## Robots.txt analysis

```

[Paste of robots.txt with annotations]

```

Findings:
- [Finding] — [risk level]. Recommendation: [...]
- ...

## Status-code findings

| Status | Count | % of URLs | Notes |
|-------:|------:|----------:|-------|
| 200 | ... | ... | OK |
| 301 | ... | ... | [observations on redirect targets] |
| 302 | ... | ... | [recommend conversion to 301?] |
| 4xx | ... | ... | [list URLs if low count, summary if many] |
| 5xx | ... | ... | [list URLs — investigate immediately] |

## Soft-404 findings
[List of suspected soft-404 URLs with rationale, or "none flagged in input"]

## Redirect chains and loops

| Chain / loop | Length | Hops | Recommendation |
|--------------|-------:|------|----------------|
| [start] → [end] | ... | [list] | Collapse to single 301 |

## Noindex / robots-meta findings

| URL | Directive | Cluster (if any) | Likely intentional? | Recommendation |
|-----|-----------|------------------|---------------------|----------------|
| ... | noindex | ... | yes/no | [keep / remove] |

## Crawl-depth findings

Distribution:
| Depth | URL count |
|------:|----------:|
| 0 | 1 (homepage) |
| 1 | ... |
| 2 | ... |
| 3 | ... |
| 4 | ... |
| 5+ | ... |

Priority pages at depth 5+:
- [URL] (cluster, traffic if known) — recommend internal-link in from [parent].

## Orphan pages

| URL | Cluster (if any) | Traffic (if known) | Recommendation |
|-----|------------------|--------------------|----------------|
| ... | ... | ... | Link in from [page] / de-publish / de-sitemap |

## Prioritised remediation list

### P0 — Critical (blocking high-value pages or large-scale issues)

| # | Finding | Affected URLs | Action | Where to fix | Verification |
|---|---------|---------------|--------|--------------|-------------|
| 1 | [...] | [n / list] | [...] | [CMS / template / robots.txt] | [GSC URL Inspection / re-crawl] |

### P1 — High (lower-traffic pages or smaller-scale issues)
[Same structure]

### P2 — Hygiene
[Same structure]

## Implementation checklist
- [ ] Implement P0 fixes first (target: this week).
- [ ] Re-crawl after P0 fixes; confirm issues resolved.
- [ ] Submit affected URLs to GSC for re-indexing.
- [ ] Implement P1 fixes (next 2-4 weeks).
- [ ] After 30 days: pull GSC Coverage report; verify excluded counts have decreased.
- [ ] Schedule next audit (recommended quarterly).

## Risks and watchouts
3-5 specific watchouts: e.g. "the staging-noindex pattern suggests the team's launch checklist is incomplete — recommend a CMS-level template review"; "302s look operator-error, recommend training on the difference"; "crawl depth is endemic on collection pages — fix is template-level, not per-page."
```

Save the produced file to `businesses/<slug>/crawlability/audit-<YYYY-MM-DD>.md`. Create the `crawlability/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every URL with an issue has a row in at least one findings table.
- Robots.txt is annotated, not just pasted.
- Status-code distribution is shown numerically with percentages — not just narrative.
- P0/P1/P2 prioritisation is explicit and matches the documented criteria.
- Each remediation specifies WHAT to change, WHERE, and HOW to verify.
- Issues affecting priority pages (per the cluster map) are flagged as such, not buried in long-tail tables.
- The "Risks and watchouts" section surfaces patterns, not just individual findings.

## Common mistakes to avoid

- Don't conflate Disallow and noindex. They're different mechanisms with different consequences.
- Don't recommend removing a `noindex` without confirming the page should be indexed. Some `noindex` pages (admin, account, internal search) are correct.
- Don't recommend converting all 302s to 301s blindly. Some 302s are genuinely temporary (A/B test, geo-routing, holiday redirects).
- Don't flag every 4xx as a problem. Some 404s are correct (real removed content); 410s are sometimes deliberate. Distinguish.
- Don't skip cluster-map cross-reference if available. Issues on priority pages are P0; identical issues on long-tail pages are not.
- Don't propose redirect-chain collapses without checking the user's CMS-level redirect rules — sometimes the chain exists because of a forced HTTPS redirect or trailing-slash policy, and collapsing it requires server-config changes, not a CMS edit.
- Don't audit without robots.txt. The audit is incomplete without it.

## Example

**Input (abbreviated):** Field & Sun. Shopify. 320 URLs from Screaming Frog. Robots.txt blocks `/cart`, `/checkout`, `/admin`, `/search`, and `/products/temp-*`. Cluster map identifies 28 priority pages.

**Output (abbreviated):**

Summary: 18 findings total. P0: 6 (4 cluster-mapped pages noindexed from staging template; the wildcard `Disallow: /products/temp-*` is accidentally blocking `/products/temperature-control-cleaner`; one 5xx on a high-traffic collection page). P1: 9 (3 redirect chains, 5 302s on legacy URLs that should be 301s, 1 orphan blog post in cluster map). P2: 3 (cosmetic robots.txt cleanups).

Robots.txt: flagged the wildcard pattern as too aggressive — recommend tightening to `Disallow: /products/temp-` (no wildcard) so `temperature-control-cleaner` isn't caught.

Status codes: 287 200s, 21 301s, 5 302s, 5 4xx (4 expected, 1 needs investigation), 2 5xx (one is the priority page; needs server logs to diagnose).

Noindex findings: 4 cluster-mapped pages have leftover staging `noindex`. P0 — remove ASAP.

Redirect chains: 3 chains of length 2-3. Collapse all to single hops.

Crawl depth: 12 URLs at depth 5+. 2 are priority pages — recommend internal-link in from collection pages.

Orphan pages: 4 orphans. 1 is a priority blog post — link in from related cluster spokes (P0). 3 are legacy posts — recommend de-publish.

P0 fixes: this week. P1: next 3 weeks. P2: rolling. Implementation checklist included with re-crawl + GSC re-indexing steps. Saved to `businesses/field-and-sun/crawlability/audit-2026-05-01.md`.
