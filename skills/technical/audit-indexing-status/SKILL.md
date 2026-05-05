---
name: audit-indexing-status
description: Analyses a Google Search Console Pages-report export (or pasted data) and produces a structured indexing audit — categorises URLs by exclusion reason, distinguishes accidental from intentional exclusions, cross-references with the cluster map for priority signal, and produces a prioritised remediation list grouped by action type (canonical fixes, content quality, internal linking, soft-404 cleanup, noindex review). Use whenever the user asks "why isn't [page] indexed," "audit our indexing," "look at GSC coverage," "fix exclusion issues," "we have too many pages excluded," or shares a GSC export. Also use when a launch or migration causes an indexing drop, when GSC reports rising "Crawled – not indexed" counts, or as part of a quarterly technical SEO audit. Do not use to diagnose crawl-blocking issues (`audit-crawlability`) or to fix canonicals specifically (`audit-canonical-tags`) — those are upstream/parallel concerns.
---

# Audit Indexing Status

This skill takes a Google Search Console Pages-report export (or pasted data) and produces a structured indexing audit. The output groups URLs by exclusion reason, separates intentional from accidental exclusions, cross-references with priority pages, and produces a prioritised remediation list — what to fix first and how, by exclusion type.

The audit is operationally focused: every finding maps to a specific action (template fix, per-page fix, content rework, sitemap update, noindex removal, etc.).

## When to use this skill

- The user shares GSC Pages-report data and asks for analysis.
- The user notices indexing dropped after a launch, migration, or update.
- "Crawled – currently not indexed" or "Discovered – currently not indexed" counts have risen.
- The user is doing a quarterly technical SEO audit.
- The user is investigating index bloat (too many low-value URLs indexed).

## When NOT to use this skill

- The user wants to investigate crawl-level issues (robots, redirects, status codes) — use `audit-crawlability`.
- The user wants to fix canonicals specifically — use `audit-canonical-tags`.
- The user wants log-file-based diagnostics — use `analyse-log-files`.
- The user wants to investigate one specific URL's indexing — recommend GSC URL Inspection directly; this skill earns its time at list scale (typically 30+ excluded URLs).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), products/services (3), CMS / platform (5).
2. **GSC Pages-report data** — exported CSV or pasted. Required columns: URL, status (indexed / not indexed), exclusion reason. Useful additions: last crawl date, referring page (if any), validation status (passed / failed / not started). The user can export from GSC's Pages report.
3. **Cluster / priority list (optional but valuable)** — from `businesses/<slug>/clusters/cluster-map.md`. When known, the audit prioritises issues affecting cluster-mapped URLs.
4. **Sitemap (optional but valuable)** — comparing GSC's "indexed" set with the sitemap reveals sitemap drift (sitemap URLs not indexed; indexed URLs not in sitemap).
5. **Site scale** — small (under 500 indexed), medium (500-5,000), large (5,000+). Affects expectations: large sites typically have larger excluded counts in absolute terms.

If the GSC data is missing, ask. The audit operates on real GSC categories.

## Process

1. **Categorise exclusion reasons.** GSC's standard categories:
   - **Crawled – currently not indexed** — quality/thinness signal. Often the largest fixable bucket.
   - **Discovered – currently not indexed** — crawl-priority issue. Solved by internal-linking and crawl-signal improvements.
   - **Duplicate without user-selected canonical** — Google picked a canonical you didn't specify. Fix: set explicit canonicals.
   - **Duplicate, Google chose different canonical than user** — your canonical was overridden because of inconsistent signals (sitemap, hreflang, internal links pointing different ways). Fix: align all canonical signals.
   - **Page with redirect** — non-canonical because it redirects elsewhere. Usually correct; review if the chain is unnecessary.
   - **Soft 404** — 200 status but content reads as not-found. Either fix the page (real content) or return real 404/410.
   - **Excluded by 'noindex' tag** — deliberate or accidental noindex. Audit for accidental.
   - **Blocked by robots.txt** — robots blocking crawl. Confirm intent.
   - **Not found (404)** — gone. Fine if intentional.
   - **Server error (5xx)** — investigate server-side.
   - **Alternate page with proper canonical tag** — usually correct (variant of canonical).
2. **Tag each URL by category, count totals.** Produce the distribution table.
3. **Cross-reference with cluster map.** For each excluded URL, check whether it's in the cluster map. Cluster-mapped URLs that are excluded are P0 — they're priority pages that should be earning traffic.
4. **Distinguish intentional from accidental:**
   - Intentional: noindex on admin, account, internal search, thank-you, staging-leftover that's been formally retired. Mark "intentional" — no action.
   - Accidental: noindex on cluster-mapped pages, soft-404s on products that should exist, "Crawled – not indexed" on pages with substantial unique content. Mark "accidental" — needs remediation.
5. **Group by action type:**
   - **Template / CMS-level fixes** (e.g. fix canonical pattern across all collection-prefixed product URLs) — highest leverage.
   - **Per-page content fixes** (e.g. expand thin "Crawled – not indexed" pages).
   - **Internal-linking fixes** (e.g. add inbound links to "Discovered – not indexed" pages).
   - **Soft-404 cleanup** (return real 404 or fix page content).
   - **Noindex review** (remove accidental noindex).
   - **Sitemap update** (remove non-indexable from sitemap; add missing canonical URLs).
6. **Prioritise.** P0: template-level fixes affecting many URLs OR fixes affecting cluster-mapped pages. P1: per-page fixes on cluster-mapped pages. P2: cleanup of legacy / long-tail URLs.
7. **Sequence the remediation.** Template-level changes first (one fix, many URLs recover). Then per-page work on priority pages. Then long-tail.
8. **Recommend monitoring cadence.** GSC Pages updates every few days; verification windows are 30-60 days.

## Output format

```markdown
# Indexing Audit — [Business Name]

**Indexed URLs:** [n]
**Not-indexed URLs:** [n]
**Site scale:** [small / medium / large]
**Audit date:** [date]
**GSC export date:** [date — when the data was pulled]

## Distribution by exclusion reason

| Exclusion reason | Count | % of not-indexed | Cluster-mapped URLs affected |
|------------------|------:|-----------------:|-----------------------------:|
| Crawled – currently not indexed | ... | ...% | ... |
| Discovered – currently not indexed | ... | ...% | ... |
| Duplicate without user-selected canonical | ... | ...% | ... |
| Duplicate, Google chose different canonical | ... | ...% | ... |
| Soft 404 | ... | ...% | ... |
| Excluded by noindex | ... | ...% | ... |
| Blocked by robots.txt | ... | ...% | ... |
| Page with redirect | ... | ...% | ... |
| Not found (404) | ... | ...% | ... |
| Server error (5xx) | ... | ...% | ... |
| Alternate page with proper canonical | ... | ...% | ... |
| Other | ... | ...% | ... |

Brief 3-5 sentence read on the shape: where the volume is, what's accidental vs intentional, where the highest-leverage fix lives.

## Priority pages excluded

URLs in the cluster map that are not indexed. These are the highest-impact fixes.

| URL | Cluster | Exclusion reason | Likely cause | Action |
|-----|---------|------------------|--------------|--------|
| ... | ... | ... | ... | [link to remediation row below] |

## Remediation by action type

### A. Template / CMS-level fixes (highest leverage)

| # | Fix | Affected URLs | Where to fix | Recovery estimate |
|---|-----|--------------:|--------------|-------------------|
| A1 | [e.g. set explicit `rel=canonical` on all collection-prefixed product URLs to point at flat /products/<slug>] | [n] | Shopify theme / template | [X URLs recover within 30-60 days] |
| ... |

### B. Per-page content fixes (Crawled – not indexed)

For each "Crawled – not indexed" URL, decide: improve content, redirect to a stronger page, or de-publish.

| URL | Current state | Decision | Reason |
|-----|---------------|----------|--------|
| ... | thin (250 words) | Expand via `optimize-page-content` | High-priority cluster spoke. |
| ... | duplicates another post | Redirect to canonical | Stronger version exists. |
| ... | low traffic, off-strategy | De-publish, return 410 | Not earning value. |

### C. Internal-linking fixes (Discovered – not indexed)

Pages Google knows about but hasn't crawled. Add inbound internal links.

| URL | Suggested inbound from | Anchor suggestion |
|-----|------------------------|-------------------|
| ... | ... | ... |

### D. Soft-404 cleanup

| URL | Current behaviour | Recommendation |
|-----|-------------------|----------------|
| ... | 200 + "no longer available" | Return 404 + remove from sitemap |
| ... | 200 + "out of stock" | Keep page (product returning) but use OutOfStock schema; not soft-404 |

### E. Noindex review

| URL | Has noindex | Intent | Action |
|-----|-------------|--------|--------|
| ... | yes | accidental (cluster-mapped) | Remove tag |
| ... | yes | intentional (admin) | Keep — no action |

### F. Sitemap update

- Add to sitemap: [list]
- Remove from sitemap: [list]
- Re-submit: yes / no

## Prioritised sequence

### Phase 1 — Wk 1: Template-level fixes
- A1: ...
- A2: ...

### Phase 2 — Wk 2-4: Per-page content + internal-linking work on priority URLs
- B[n]: ...
- C[n]: ...

### Phase 3 — Wk 5-8: Long-tail cleanup and sitemap hygiene
- D[n]: ...
- E[n]: ...
- F: ...

## Implementation checklist
- [ ] Implement Phase 1 template-level fixes.
- [ ] Re-submit sitemap to GSC.
- [ ] Use GSC URL Inspection to "Request Indexing" on top 10-20 priority URLs (don't bulk-request — rate-limited).
- [ ] After 30 days: pull new GSC Pages report and verify recovery.
- [ ] After 60 days: re-run this audit to confirm long-term recovery and surface any new exclusions.

## Risks and watchouts
3-5 specific watchouts: e.g. "the soft-404 pattern suggests Shopify's 'unavailable' template needs redesign — without that, the cleanup is whack-a-mole"; "the canonical override on 64 URLs is template-level — recommend dev review before mass-editing per-page"; "if the 'Crawled – not indexed' count is dominated by old blog posts, consider a content audit rather than per-page rewrites".
```

Save the produced file to `businesses/<slug>/indexing/audit-<YYYY-MM-DD>.md`. Create the `indexing/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every excluded URL is categorised by exclusion reason.
- Cluster-mapped URLs that are excluded are surfaced as a separate priority section.
- Intentional exclusions are explicitly distinguished from accidental — the audit doesn't recommend removing legitimate noindex tags.
- Remediations are grouped by action type, with template-level fixes called out as highest-leverage.
- Sequence is staged across phases, not lumped into a single "do everything" bucket.
- Risks section surfaces patterns, not just individual findings.
- Implementation checklist closes the loop with verification timing.

## Common mistakes to avoid

- Don't recommend mass per-page fixes when a template change would solve them. Always look for the cascading fix first.
- Don't propose removing every noindex. Many are correct.
- Don't treat "Discovered – not indexed" as a content problem. It's almost always a crawl-priority / internal-linking problem.
- Don't ignore "Alternate page with proper canonical." This is usually correct — flag only if it appears on URLs that should be canonical themselves.
- Don't recommend per-URL "Request Indexing" for batches. GSC rate-limits this; sitemap re-submission is more efficient.
- Don't audit indexing without cross-referencing the cluster map if available. Without it, you can't distinguish high-priority exclusions from long-tail noise.
- Don't promise specific recovery timelines beyond ranges. GSC re-indexes on its own schedule; "30-60 days" is a reasonable expectation, "exactly 14 days" is not.

## Example

**Input (abbreviated):** Field & Sun. Shopify. GSC Pages export: 612 indexed, 287 not indexed. Cluster map identifies 28 priority URLs.

**Output (abbreviated):**

Distribution: 86 "Crawled – not indexed" (30%), 64 "Duplicate without canonical" (22%), 42 soft 404 (15%), 38 noindex (13%), 31 "Discovered – not indexed" (11%), 18 "Page with redirect" (6%), 8 not found (3%).

Priority pages excluded: 9 of 28 cluster-mapped URLs are not indexed. Highest-impact fixes flagged.

Template-level fix (A1): Shopify is creating duplicate `/collections/<x>/products/<slug>` URLs without canonical signal. Fix theme to emit `rel=canonical` pointing to flat `/products/<slug>`. Recovers ~64 URLs.

Per-page (B): 86 thin "Crawled – not indexed" pages. 12 are cluster spokes — feed into `optimize-page-content`. 41 are old blog posts — review for content quality or de-publish. 33 are discontinued products — de-publish + 410.

Internal-linking (C): 31 "Discovered – not indexed" — most are recent blog posts. Add inbound links from related cluster spokes.

Soft-404 (D): 42 URLs. Recommend: real 404 for definitively gone (28); keep page + OutOfStock schema for temporarily unavailable (14).

Noindex review (E): 38 noindex tags. 34 are correct (admin/account); 4 are accidental on cluster-mapped pages — remove.

Sequence: Phase 1 (Wk 1) — A1 template fix + remove 4 accidental noindex. Phase 2 (Wk 2-4) — internal-linking improvements + soft-404 cleanup. Phase 3 (Wk 5-8) — content quality work on the 12 cluster-spoke pages and de-publishing of 33 discontinued products.

Implementation checklist included with re-submission and verification timing. Saved to `businesses/field-and-sun/indexing/audit-2026-05-01.md`.
