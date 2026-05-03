# Search Console

> Google's first-party SEO data — impressions, clicks, position, query performance, indexing status, Core Web Vitals. The most reliable, most underused single data source in the SEO toolkit. If you only check one dashboard, check this.

## What it is

Google Search Console (GSC) is Google's free, first-party tool for SEO measurement. Unlike GA4 (which measures *on-site* behaviour), GSC measures *Google Search* behaviour — what queries users searched, what positions the site ranked for, how often pages got clicked, what indexing issues exist, what schema is recognised, what Core Web Vitals look like in the field. Because GSC reports Google's own data about Google Search, it's the closest thing to ground truth that exists for organic search performance.

For Field & Sun, GSC is where the brand sees: which sun-care queries are gaining or losing impressions, which pages are ranking position 11-20 (one CTR-fix away from page-1 traffic), which pages aren't indexed, whether mobile usability is broken anywhere, whether schema is being read correctly. Most of the highest-leverage SEO insights live in GSC, not GA4.

## Why it matters

Three reasons. First, **GSC data is closer to ground truth than any third-party tool**. Ahrefs, Semrush, AccuRanker all sample / approximate / estimate. GSC reports what Google actually sees and measures. For SEO-specific questions ("are we ranking for X?", "is this page indexed?", "is schema being read?"), GSC is authoritative.

Second, **GSC surfaces issues that no other tool catches**. Coverage errors, mobile-usability issues, schema validation failures, manual actions, security issues, CWV field data — all reported here, and almost all silent (no email alerts unless severe). Teams that don't check GSC weekly miss real problems for weeks or months.

Third, **GSC's query-level data is the foundation for all keyword-level analysis**. Which queries are driving traffic, which are losing position, which pages are ranking for queries the brand didn't even target — GSC answers all of these. Third-party tools approximate this; GSC reports it directly.

For Field & Sun: a weekly 30-minute GSC review by the marketing team is plausibly higher-ROI than any other recurring SEO operations check.

## Core concepts

- **The four core reports.** *Performance* (queries / pages / positions / clicks / impressions), *Pages / Coverage* (indexing status), *Enhancements* (schema, mobile usability, CWV), *Links* (backlinks Google has detected).
- **Property types.** *Domain property* (covers all subdomains + protocols, requires DNS verification — preferred). *URL-prefix property* (covers one subdomain + protocol, easier to verify). Most brands need a Domain property.
- **Sampling and limits.** GSC's API and UI cap data at 1,000 rows per query (or 50,000 via API). Large sites hit this; export to BigQuery (via direct integration) or use the API + pagination to bypass.
- **Average position vs daily position.** GSC reports *average* position over the date range — a query at position 1 for 5 days and position 20 for 5 days reports as ~10. For daily-granularity, a third-party rank tracker is needed.
- **Click-through rate (CTR).** GSC reports actual CTR per query / page. Compare against position-CTR benchmarks to identify CTR-improvement opportunities (queries ranking position 5 with CTR < 2% are usually fixable via title / description).
- **Indexing reports.** *Indexed*, *Excluded* (with reason), *Discovered — currently not indexed*, *Crawled — currently not indexed*, etc. Exclusion reasons are the most underused diagnostic data in SEO.
- **Sitemaps.** GSC reports sitemap submission status, last-fetched date, indexed-vs-submitted ratio. Useful for diagnosing indexing issues at scale.
- **URL Inspection.** Per-URL diagnosis: indexing status, last-crawled date, canonical Google chose vs you declared, mobile usability, schema, request indexing button.
- **Manual actions / security issues.** Rare but critical; GSC reports here if Google has manually penalised the site or detected security issues.
- **CWV field data.** Real-user Core Web Vitals (LCP, INP, CLS) from Chrome User Experience Report. Distinct from lab-data tools (Lighthouse, PageSpeed Insights).
- **Search appearance categories.** Recipe, FAQ, How-to, Product, etc. — surfaces where rich results were eligible.

## A worked example

> **Scenario:** Field & Sun's marketing team has GSC verified but checks it sporadically. The team isn't sure if it's set up correctly, and they suspect there might be indexing issues that haven't been surfaced.
>
> **Step 1.** Run `audit-search-console-setup`. Skill checks property type, sitemap submission, ownership permissions, integration with GA4, coverage status, and high-level data quality.
>
> **Step 2.** Findings:
>
> - **Property type:** URL-prefix property only (`https://www.fieldandsun.com`). Missing the apex `https://fieldandsun.com` and any other variants. Recommend converting to Domain property.
> - **Sitemap:** 1 sitemap submitted (`/sitemap.xml`), last fetched 28 days ago. 142 URLs submitted, 138 indexed. 4 URLs in "Crawled — currently not indexed."
> - **Coverage:** 4 indexing exclusions identified — 2 are duplicates (canonical handling correct, just slow to drop the source URLs); 2 are valid pages incorrectly excluded due to a stray `noindex` tag on `/blog/skincare-routine-basics` and `/blog/spf-myths`.
> - **Enhancements:** Product schema valid on 6/8 PDPs; 2 PDPs throw "missing field: aggregateRating" warnings.
> - **CWV:** Mobile LCP "Needs improvement" on 12 URLs (mainly blog posts with hero images > 500KB).
> - **Links:** 145 referring domains; 12 new in last 30 days.
>
> **Step 3.** Fix list:
>
> - Add Domain property; verify via DNS.
> - Investigate `noindex` on 2 blog posts; remove if intentional, fix if accidental.
> - Add `aggregateRating` to 2 PDPs.
> - Optimise hero images on 12 mobile-LCP-flagged blog posts (handoff to `audit-images`).
>
> **Step 4.** Result: 2 blog posts re-indexed within 7 days; CWV mobile rating "Good" on 8 of the 12 flagged URLs after image optimisation. Domain property gives full subdomain coverage and unifies the historical data.

## How to do it

1. **Verify the property correctly.** Domain property (DNS-verified) preferred. Covers all subdomains and protocols.
2. **Submit sitemaps.** Submit at least the canonical XML sitemap (and any segment-specific sitemaps for programmatic templates per `06. Programmatic SEO`).
3. **Connect to GA4.** GSC → Settings → Associations. Surfaces GSC data inside GA4.
4. **Review weekly.**
   - Performance: any large WoW changes in clicks / impressions?
   - Coverage: any new exclusions?
   - Enhancements: any new schema / mobile-usability issues?
   - Manual actions / security: status check.
5. **Review monthly (deeper).**
   - Top-decline queries: which queries lost the most impressions / clicks?
   - Top-rising queries: which queries are gaining (potentially worth doubling down)?
   - Page-level performance: which pages contribute the most? Which are decaying?
   - CWV: any URL groups regressing?
6. **Use URL Inspection on demand.** When a specific page isn't ranking, isn't indexed, or behaves strangely, URL Inspection is the first diagnostic.
7. **Export data for deeper analysis.** API + pagination, or BigQuery direct integration, for >1,000-row queries.
8. **Run `analyse-search-performance`.** Quarterly structured analysis of GSC data; produces the report stakeholders read.
9. **Build dashboards.** Looker Studio + GSC data source = standard reporting setup. Dashboards make weekly review faster.
10. **Wire to other categories.** GSC findings feed indexing fixes (Technical SEO), refresh prioritisation (Content SEO), keyword research updates (Strategy).

## Common pitfalls

- **URL-prefix property only.** Misses traffic on apex / subdomain / `http` variants. Domain property covers all.
- **Sitemap not re-submitted after major changes.** Stale sitemap = slow re-indexing of changed URLs.
- **Ignoring "Crawled — currently not indexed."** Often signals quality issues Google sees that humans don't. Worth investigating.
- **Treating average position as daily position.** Causes confusion; use rank-tracking for daily granularity.
- **Trusting clicks for revenue measurement.** GSC clicks ≠ visits ≠ conversions. Clicks are an SEO metric, not a business metric.
- **Skipping CWV field data.** Lab data (Lighthouse) and field data (CrUX in GSC) often disagree. Field data is what affects rankings.
- **Not using the URL Inspection tool.** It's the single most useful diagnostic in SEO; underused even by experienced practitioners.
- **Only checking when there's a fire.** GSC works as a weekly habit; ad-hoc checks miss decay and slow-burn issues.
- **Sharing access too broadly.** Owner / Edit access should be restricted; over-sharing creates security risk and audit-trail confusion.
- **Forgetting subdomain properties.** A Domain property is preferred, but if you must use URL-prefix, every active subdomain needs its own property.

## Skills in this toolkit

- **[audit-search-console-setup](../../../skills/analytics/audit-search-console-setup/SKILL.md)** — produces a structured GSC configuration audit covering property type, sitemap submission, coverage status, enhancement reports, integrations, and access control. Output is a prioritised fix list. Should run before any GSC-based reporting is considered trustworthy. Quarterly cadence.
- **[analyse-search-performance](../../../skills/analytics/analyse-search-performance/SKILL.md)** — produces a structured GSC performance analysis: top queries by clicks / impressions / position, decline detection (queries / pages losing position), CTR-opportunity identification, query ↔ page intersection, cluster-level rollup. Output is the report stakeholders read; feeds Strategy + Content SEO refresh decisions.

## Related topics

- **[01. Google Analytics](../01.%20Google%20Analytics/README.md)** — GA4 + GSC are the standard pair; integrate both.
- **[03. Technical SEO / 02. Indexing](../../03.%20Technical%20SEO/02.%20Indexing/README.md)** — GSC's coverage report is the primary indexing diagnostic.
- **[03. Technical SEO / 03. Site Speed](../../03.%20Technical%20SEO/03.%20Site%20Speed/README.md)** — GSC's CWV field data is the source of truth for site-speed measurement.
- **[03. Technical SEO / 04. Schema Markup](../../03.%20Technical%20SEO/04.%20Schema%20Markup/README.md)** — GSC's Enhancements report flags schema validation issues.
- **[04. Content SEO / 07. Content Refresh](../../04.%20Content%20SEO/07.%20Content%20Refresh/README.md)** — GSC's decline data drives refresh prioritisation.
- **[03. Rank Tracking](../03.%20Rank%20Tracking/README.md)** — GSC complements third-party rank tracking; both have their role.

## Further reading

- [Google Search Central — Search Console Help](https://support.google.com/webmasters) — official documentation; comprehensive.
- [Aleyda Solis — GSC Tactics & Templates](https://www.aleydasolis.com/) — practitioner-grade analysis frameworks.
- [Lily Ray — Practical GSC Analysis](https://www.amsivedigital.com/insights/) — strong on decline diagnostics and YMYL-related signals.
- [Daniel Waisberg — GSC Behind the Scenes](https://www.danielwaisberg.com/) — GSC's lead developer advocate; unique inside perspective.
- [Tom Anthony / Distilled — GSC Data via API](https://www.tomanthony.co.uk/) — the canonical reference for programmatic GSC analysis.
