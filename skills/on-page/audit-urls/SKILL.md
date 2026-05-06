---
name: audit-urls
description: Use to audit urls; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Audit URLs

This skill takes an existing URL list (sitemap export, GSC URL list, crawler output, or pasted) and audits it. The output is a per-URL scorecard plus a prioritised migration plan: which URLs to keep as-is, which to migrate, what to migrate them to, and the redirect requirements.

The audit doesn't migrate anything — it produces the spec. Implementation (CMS changes, redirects, internal-link updates, re-indexing) is downstream work.

## When to use this skill

- The user has a URL list (sitemap, GSC, crawler) and wants a structural audit.
- The user is planning a re-platform or CMS migration and needs a redirect map.
- The user has inconsistent URLs after years of unstructured content and wants a cleanup plan.
- The user is preparing to publish URL conventions and wants to know how much existing content violates them.
- The user is doing a quarterly URL hygiene review.

## When NOT to use this skill

- The user wants to set rules for the first time — use `define-url-conventions` first; this skill consumes those rules.
- The user wants to audit one URL — that's a manual eye-check, not a list-scale audit. This skill earns its time at 50+ URLs.
- The user wants to handle the actual migration (write redirects in the CMS, update internal links) — that's implementation work outside this skill's scope.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first.
2. **URL conventions** — read `businesses/<slug>/urls/conventions.md`. If absent, recommend running `define-url-conventions` first; the audit needs a standard to compare against. If the user wants to skip and use only generic best practice, accept but flag that the audit will be less precise.
3. **URL list** — pasted, CSV, sitemap export, GSC export, or Screaming Frog crawl. Required columns at minimum: URL. Useful additions: page type, indexed/not-indexed, traffic (last 30 days), top query, status code. Ask for the list if not provided.
4. **Page-type tagging** — if the URL list has a page-type column, use it. If not, infer from URL patterns (e.g. `/products/<slug>` → product) or ask the user to tag a sample.
5. **Existing redirect map (optional)** — if the user has a current redirect file, share it so the audit doesn't recommend re-migrating already-migrated URLs.

If the URL list or the conventions doc is missing, ask before producing the audit.

## Process

For each URL in the list:

1. **Tag with page type** — products, collections, blog, FAQ, comparison, location, landing, account, system. If the URL pattern is ambiguous, mark "unknown" and flag.
2. **Run mechanical checks:**
   - Slug format (kebab-case, lowercase, ASCII-only)? Pass/fail.
   - Slug length within max? Pass/fail.
   - Slug content reasonable (not stuffed, not SKU-only, not stop-word-heavy)? Pass/fail.
   - Trailing-slash policy consistent with site standard? Pass/fail.
   - No date stamps (or only where allowed)? Pass/fail.
   - No query strings (or only flagged for canonical handling)? Pass/fail.
   - No platform-default duplicates (e.g. Shopify's collection-prefixed product URLs)? Pass/fail.
3. **Run convention-specific checks** — compare against the patterns defined in `urls/conventions.md`. Each page type has its own pattern; flag URLs that don't match.
4. **Score each URL:**
   - **Compliant** — matches conventions and best practice. Keep as-is.
   - **Cosmetic issue** — minor (e.g. legacy capitalisation, missing trailing-slash consistency). Low-risk migration; do in batch.
   - **Structural issue** — pattern violation (date in URL, parent-prefix, stuffed slug). Higher-value migration but needs redirects.
   - **Critical issue** — actively harmful (parameter URLs indexed, duplicates, broken slugs, system URLs leaked). Must-fix.
5. **Prioritise migrations.** For each URL needing change, score on:
   - **Impact** — current traffic, current rankings (if a page is at #2 for a high-value query, migration risk is higher; do these last and most carefully).
   - **Effort** — slug change only? Pattern change requiring template changes? CMS-level change?
   - **Risk** — confidence the redirect will preserve ranking (high for like-for-like slug, lower for major path changes).
6. **Build the migration list.** For each URL that needs migration, produce a row with:
   - Current URL
   - Proposed new URL
   - Issue addressed
   - Redirect type (always 301)
   - Internal-link update required (yes/no/scope)
   - Priority (P0 must-fix, P1 should-fix, P2 cosmetic)
   - Risk note (if any)
7. **Surface portfolio-level patterns.** If 80% of blog URLs share the same issue (e.g. all have date stamps), the recommendation isn't 80 individual migrations — it's a CMS-level template change followed by a bulk migration. Call this out at the top.
8. **Sequence the migration.** Recommend a batched approach: P0 fixes first, in groups by page type. P1 in the next month. P2 cosmetic in batches as opportunity allows. Don't recommend migrating everything in one day.

## Output format

```markdown
# URL Audit — [Business Name]

**URLs audited:** [n]
**Conventions referenced:** `businesses/<slug>/urls/conventions.md` (or "best practice only — no conventions doc provided")
**Audit date:** [date]

## Summary
| Status | Count | % |
|--------|------:|--:|
| Compliant | ... | ...% |
| Cosmetic issue | ... | ...% |
| Structural issue | ... | ...% |
| Critical issue | ... | ...% |

Brief 3-5 sentence read on the shape of the portfolio: what's working, what isn't, where the highest-leverage fixes are.

## Portfolio-level patterns
Bulleted list of issues that affect many URLs, with the recommended CMS-level or template-level fix.

- [Pattern] — [count] URLs affected. Recommendation: [CMS / template change].
- ...

## Per-URL audit (full list)

| URL | Page type | Status | Issue(s) | Proposed new URL | Priority | Risk |
|-----|-----------|--------|----------|------------------|----------|------|
| ... | ... | ... | ... | ... | ... | ... |

(Sort: critical first, then structural, then cosmetic. Compliant URLs at the bottom or in a separate "no action" section.)

## Migration list (P0 + P1)

| Old URL | New URL | Status code | Internal-link sweep | Re-index? | Notes |
|---------|---------|------------:|---------------------|-----------|-------|
| ... | ... | 301 | yes / scope | yes | ... |

## Recommended sequencing

### Phase 1 — Critical (Wk 1-2)
Bulleted list of P0 migrations. Group by page type if many.

### Phase 2 — Structural (Wk 3-6)
Bulleted list of P1 migrations.

### Phase 3 — Cosmetic (ongoing)
Bulleted list of P2 migrations; ship in small batches.

## Risks and watchouts
3-5 specific risks for this migration: high-traffic pages with rank exposure, redirect-chain risk, internal-link sweep scope, URL changes that touch shared templates.

## Implementation checklist
- [ ] Create / update redirect file in CMS for each migration row.
- [ ] Update internal links sitewide for migrated URLs (within 7 days).
- [ ] Submit migrated URLs to GSC for re-indexing.
- [ ] Monitor: rank tracking + GSC + crawler logs for 60-90 days.
- [ ] After window closes, re-run audit to confirm no regressions.
```

Save the produced file to `businesses/<slug>/urls/audit-<YYYY-MM-DD>.md`. Use the date in the filename so successive audits don't overwrite. After writing, tell the user the file path.

## Quality bar

- Every URL in the input list has a row in the per-URL audit.
- Status (compliant / cosmetic / structural / critical) is defined consistently across the audit.
- Portfolio-level patterns are surfaced first; the user shouldn't have to read 500 rows to discover that all blog URLs have date stamps.
- Migration list is sortable and grouped — not just a flat dump.
- Risk is honest — high-traffic, top-ranked pages get flagged for careful migration, not lumped with cosmetic batches.
- Sequencing recommends batches, not big-bang migrations.
- Implementation checklist closes the loop with re-indexing and post-migration verification.

## Common mistakes to avoid

- Don't recommend migrating high-traffic, top-ranked pages without explicitly flagging the rank-loss risk and recommending careful timing.
- Don't recommend migrating everything in one batch. Risk-concentrated migrations are painful when something breaks.
- Don't treat all P2 cosmetic issues as worth fixing. Some legacy URLs have so little traffic that the migration cost exceeds the benefit; flag and skip.
- Don't skip the internal-link sweep. Migrated URLs without internal-link updates create hop-redirects that compound over time.
- Don't audit without conventions if the user has them. Generic best practice is OK as a fallback but is less useful than site-specific rules.
- Don't fabricate the portfolio-level patterns. If only 3 URLs have date stamps, that's not a CMS-level pattern — it's 3 individual fixes.

## Example

**Input (abbreviated):** 320 URLs from a Shopify sitemap export. Conventions doc says: products at `/products/<slug>` (flat), collections at `/collections/<slug>`, blog at `/blog/<slug>` (no `/blogs/news/` prefix, no dates).

**Output (abbreviated):**

Summary: 187 compliant (58%), 41 cosmetic (13%), 78 structural (24%), 14 critical (4%).

Portfolio-level patterns:

- 78 blog URLs use `/blogs/news/YYYY/MM/DD/<slug>` instead of `/blog/<slug>`. Recommendation: CMS-level change to drop `/news/` parent and date stamps; bulk migrate all 78.
- 14 system URLs (search, cart, account) are appearing in sitemap and being indexed. Recommendation: `noindex` via robots meta; remove from sitemap. P0.
- 41 product URLs have a duplicate at `/collections/<x>/products/<slug>`. Recommendation: `rel=canonical` on the duplicates pointing to flat product URL. Cosmetic but worth fixing in next sprint.

Migration list: 92 rows total. P0 (14): system URL noindex + sitemap removal. P1 (78): blog migration. P2 (41+): canonical fixes.

Sequencing: Phase 1 system URL fixes (Week 1, 1 day of dev work). Phase 2 blog migration in 2 batches (week 3-4 — 40 high-traffic posts; week 5-6 — 38 low-traffic). Phase 3 canonical fixes ongoing.

Risks: 6 of the 78 blog posts are in top 5 for high-value queries; flag for individual attention with extra-careful redirects and a 14-day post-migration watch.

Saved to `businesses/field-and-sun/urls/audit-2026-04-30.md`.
