# Indexing

> Once a page is crawlable, indexing decides whether it actually enters Google's index. A page that's crawled but not indexed cannot rank — and the reasons are usually fixable, once you know where to look.

## What it is

Indexing is the second phase of Google's pipeline: after a URL has been crawled, Google decides whether to add it to the index (the database of pages it can show in search results). Not every crawled page gets indexed. Pages get excluded for many reasons — some intentional (a `noindex` directive), some accidental (a duplicate canonical), some quality-driven (Google deciding the page isn't useful enough to surface).

Google Search Console's **Pages** report (formerly Coverage) is the single source of truth for indexing status. It groups your URLs into "Indexed" and "Not indexed," with a sub-reason for each excluded page. Reading this report at depth is the entry point to indexing work.

## Why it matters

A page that's not indexed earns zero organic traffic. For a D2C brand, a typical pattern is: 800 URLs in the sitemap, 600 indexed, 200 not indexed for various reasons. Some of those 200 are correctly excluded (out-of-stock product pages, internal admin); others are accidentally excluded (canonical pointing wrong, soft-404, "Crawled – currently not indexed"). Recovering those accidental exclusions is often the highest-ROI technical-SEO work because the pages already exist and just need to be made visible.

For larger ecom sites, the indexing problem flips: too many URLs are indexed (parameter URLs, faceted-navigation URLs, near-duplicates), diluting topical signal across thousands of low-value pages. Solving this — through canonicals, robots, and noindex — concentrates ranking strength on the canonical URLs that should be earning traffic.

## Core concepts

- **The GSC Pages report** — the operating dashboard for indexing. "Indexed" vs "Not indexed" with sub-reasons. The sub-reasons are the diagnostic.
- **Common exclusion reasons:**
  - **Crawled – currently not indexed** — Google crawled the page but chose not to index it. Usually a quality / thinness signal. Often the most fixable category.
  - **Discovered – currently not indexed** — Google knows the URL but hasn't crawled it. Usually means crawl budget or low-priority discovery. Improve internal linking to push priority.
  - **Duplicate without user-selected canonical** — Google found near-duplicates and picked a canonical other than yours. Set explicit canonicals.
  - **Duplicate, Google chose different canonical than user** — you set a canonical, Google overrode it. Usually means your canonical signals are inconsistent (links, sitemaps, hreflang all pointing different ways).
  - **Page with redirect** — non-canonical because it redirects elsewhere. Usually correct.
  - **Soft 404** — page returns 200 but content reads as "not found" / "out of stock." Either fix the page or return a real 404/410.
  - **Excluded by `noindex` tag** — page deliberately or accidentally has `noindex`. Audit for accidental.
  - **Blocked by `robots.txt`** — robots.txt prevents crawl, so Google can't index. Check intent.
  - **Not found (404)** — gone. Fine if intentional; bad if it's a page that should exist.
  - **Server error (5xx)** — server didn't respond. Investigate.
- **Index bloat** — when many low-value URLs are indexed (parameter URLs, internal search, archive pages), diluting overall signal. Solved with canonicals, noindex, and parameter handling.
- **URL Inspection tool** (in GSC) — per-URL view of indexing status, last crawl, canonical, mobile usability. The deep-dive tool when a single URL behaves unexpectedly.
- **Sitemap submission and "Why excluded"** — submitting a sitemap helps discovery but doesn't override exclusion reasons. A URL in your sitemap can still be "Crawled – not indexed."

## A worked example

> **Scenario:** Field & Sun audits indexing in GSC. Pages report shows: 612 indexed, 287 not indexed. Click "View" on each not-indexed reason:
>
> - **Crawled – currently not indexed:** 86 URLs. Mostly old blog posts and discontinued product pages.
> - **Duplicate without user-selected canonical:** 64 URLs. Mostly Shopify's `/collections/<x>/products/<slug>` duplicates.
> - **Soft 404:** 42 URLs. Discontinued products returning 200 with "no longer available" content.
> - **Excluded by noindex tag:** 38 URLs. Admin and account pages — correct.
> - **Discovered – currently not indexed:** 31 URLs. Recently launched blog posts not yet crawled.
> - **Page with redirect:** 18 URLs. Old URLs from prior migration. Correct.
> - **Not found (404):** 8 URLs. Genuinely removed.
>
> **Step 1.** Categorise findings by action:
>
> - 64 canonical duplicates → fix at template level (Shopify product canonical → flat `/products/<slug>`, not collection-prefixed).
> - 86 "Crawled – not indexed" → audit for thinness / quality. Decide per page: improve content, redirect to a more relevant page, or de-publish.
> - 42 soft-404s → return real 404 + remove from sitemap. Or, if products will return, create proper "out of stock" template that signals temporary unavailability.
> - 31 "Discovered – not indexed" → improve internal linking from high-authority pages to push crawl priority.
> - 38 noindex, 18 redirects, 8 404s → no action; correctly excluded.
>
> **Step 2.** Implement in priority order. Canonical template fix first (1 day of dev time, recovers ~64 URLs). Then internal-linking improvements (2-3 days, helps the 31 discovered URLs). Then per-page quality work on the 86 thin pages (ongoing — feed into Content Optimization).
>
> **Step 3.** Re-submit sitemap, monitor GSC for 30-60 days. Indexed count typically rises ~80-90% of the recoverable URLs within 60 days; the remainder need ongoing quality work.

## How to do it

1. **Pull GSC Pages report.** Note: GSC samples — for sites over a few thousand URLs, the listed examples are a subset, not the full list. Use the export feature or the Indexing API for completeness.
2. **Categorise by exclusion reason.** Each reason has a different remediation. Don't lump them together.
3. **Cross-reference with priority pages.** Pages from `clusters/cluster-map.md` that are excluded are P0 — they should be earning traffic and aren't. Long-tail / legacy excluded pages are P2 unless they're soft-404-flooding the index.
4. **Triage by exclusion reason:**
   - Canonical-related → fix canonical signals (next leaf, [05. Canonical Tags](../05.%20Canonical%20Tags/)).
   - Soft-404 → either fix the page (real content) or return real 404/410.
   - Crawled – not indexed → quality issue. Audit content depth, internal links, page intent. May feed into [Content Optimization](../../02.%20On-page%20SEO/07.%20Content%20Optimization/).
   - Discovered – not indexed → improve internal linking and crawl signal.
   - Excluded by noindex → confirm intent. If accidental, remove tag.
   - Blocked by robots.txt → confirm intent. If accidental, fix robots.
5. **Implement in priority order.** Template-level fixes (one change, many URLs recovered) first. Per-page fixes second. Quality improvements third.
6. **Re-submit affected URLs.** Use GSC URL Inspection's "Request Indexing" for high-priority URLs. Re-submit sitemap. For large batches, submit a fresh sitemap and let Google rediscover.
7. **Monitor weekly for 30-60 days.** GSC Pages report updates every few days. Watch the indexed count rise and the exclusion counts fall.
8. **Document patterns.** If the same exclusion reason keeps recurring, the underlying cause is template-level — note in the per-business CLAUDE.md so the next launch doesn't repeat.

## Common pitfalls

- **Treating "Indexed" as the goal.** Indexed isn't ranking. Many pages can be indexed and earn no clicks. Indexing solves *eligibility*; ranking solves *position*.
- **Ignoring "Crawled – currently not indexed."** This bucket is often the largest and most fixable. It usually signals a quality / thinness issue — pages Google decided weren't worth indexing. Often the right fix is to merge thin pages into stronger ones, or improve content depth.
- **Submitting URLs for re-indexing one-by-one when the cause is template-level.** Fixing 64 individual URLs is 64 hours; fixing the template is 4 hours and recovers all 64.
- **Ignoring soft-404s.** They waste crawl budget on every visit. Either fix the page or return a real 404. Don't leave them.
- **Mistaking "Excluded by noindex" as automatically wrong.** Many pages are correctly noindexed (admin, internal search, account, thank-you pages). Audit for *accidental* noindex on cluster-mapped pages, not all noindex.
- **Re-submitting too aggressively.** GSC's "Request Indexing" has rate limits. For batches >50 URLs, sitemap resubmission is more efficient than per-URL requests.
- **Index bloat on ecom sites.** Faceted nav and parameter URLs often get indexed by default. If GSC shows 3,000 indexed URLs on a 200-product site, that's bloat — almost certainly diluting signal.
- **Forgetting to monitor.** GSC Pages updates over weeks. Set a 60-day check on each fix to confirm recovery.

## Skills in this toolkit

- **[audit-indexing-status](../../../skills/technical/audit-indexing-status/SKILL.md)** — analyses a GSC Pages report export (or pasted data), categorises URLs by exclusion reason, cross-references with the cluster map, and produces a prioritised remediation list grouped by action type. Distinguishes accidental from intentional exclusions.

## Related topics

- **[01. Crawlability](../01.%20Crawlability/README.md)** — indexing depends on crawl. Crawl issues block indexing; this leaf is the next step.
- **[05. Canonical Tags](../05.%20Canonical%20Tags/README.md)** — most canonical-related indexing problems get solved here.
- **[06. XML Sitemaps](../06.%20XML%20Sitemaps/README.md)** — sitemap should reflect canonical, indexable URLs only.
- **[07. JavaScript SEO](../07.%20JavaScript%20SEO/README.md)** — JS-rendered content is often the cause of "Crawled – not indexed" on JS-heavy sites.
- **[02. On-page SEO / 07. Content Optimization](../../02.%20On-page%20SEO/07.%20Content%20Optimization/README.md)** — "Crawled – not indexed" often signals quality issues that on-page rework can solve.

## Further reading

- [Google Search Central — Page Indexing report](https://support.google.com/webmasters/answer/7440203) — the canonical guide to GSC's Pages report and what each exclusion reason means.
- [Google Search Central — URL Inspection tool](https://support.google.com/webmasters/answer/9012289) — the per-URL diagnostic tool.
- [Onely — Crawl Budget and Index Bloat](https://www.onely.com/blog/) — strong on the larger-ecom angle: managing what gets indexed when there are too many URLs.
- [Ahrefs — How to Fix Indexing Issues](https://ahrefs.com/blog/google-not-indexing/) — practitioner walkthrough by exclusion type.
- [Aleyda Solis — Indexing Audit Templates](https://www.aleydasolis.com/) — practical templates for surfacing and categorising indexing issues at scale.
