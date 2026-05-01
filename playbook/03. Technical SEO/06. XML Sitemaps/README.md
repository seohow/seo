# XML Sitemaps

> The list of URLs you want Google to crawl. A discovery aid (especially for new pages and large sites) and a signal of which URLs you consider canonical and ranking-worthy.

## What it is

An XML sitemap is a file (usually at `/sitemap.xml`) listing the URLs on your site, with optional metadata (last-modified date, change frequency, priority). Google reads sitemaps to discover URLs and prioritise crawl, especially for pages that aren't well-internally-linked or are recently published.

A sitemap is a *hint*, not a directive. Submitting a URL doesn't guarantee indexing — Google decides based on quality, canonical signals, and crawl budget. But sitemap submission is one of the strongest discovery signals available, and for large sites it's the difference between Google finding new pages quickly versus weeks later.

For Field & Sun on Shopify, the sitemap is auto-generated and split into multiple files (`/sitemap_products_1.xml`, `/sitemap_collections_1.xml`, `/sitemap_blogs_1.xml`, etc.) referenced from a `sitemap-index.xml`. Most ecom platforms work this way.

## Why it matters

Two reasons. First, **the sitemap is your declaration of canonical URLs**. Google reads the sitemap as "the user thinks these are the URLs that matter." If your sitemap lists 800 URLs and 200 of those are non-canonical (parameter URLs, paginated pages, duplicates), you're sending mixed signals — and Google may pick the wrong canonical.

Second, **sitemaps are the cheapest discovery aid for new content**. Submit a sitemap to GSC, set up automatic regeneration on every publish, and Google finds new pages within hours instead of days. For brands with active content programs, this is meaningful.

The sitemap also surfaces sitemap-specific problems in GSC's Sitemaps report: parsing errors, URLs that returned 4xx/5xx, URLs blocked by robots.txt, URLs that are `noindex`. These are diagnostic signals — clean sitemaps tend to mean clean technical-SEO state.

## Core concepts

- **Sitemap structure (basic).** XML file with one `<urlset>` containing `<url>` entries. Each entry has at minimum `<loc>` (the URL) and optionally `<lastmod>` (last-modified date), `<changefreq>` (how often it changes), and `<priority>` (0.0-1.0 importance hint).
- **`lastmod` matters; `changefreq` and `priority` mostly don't.** Google has confirmed it largely ignores `changefreq` and `priority`, but uses `lastmod` as a hint about when to re-crawl. Accurate `lastmod` values are valuable; the others are CMS-default noise.
- **Sitemap index (for large sites).** When you have more than 50,000 URLs or a sitemap larger than 50MB (uncompressed), split into multiple sitemaps and reference them from a `sitemap-index.xml`. Most ecom platforms split by content type even at small scale (Shopify defaults to one sitemap per type).
- **Canonical-only inclusion.** Sitemaps should list canonical URLs only. Listing non-canonical (parameter URLs, paginated pages, redirect targets) sends mixed signals.
- **Indexable-only inclusion.** Sitemaps should list URLs that return 200, are not `noindex`, and are not blocked by `robots.txt`. Listing problematic URLs surfaces in GSC as sitemap errors.
- **Multiple sitemap types.** Beyond the standard URL sitemap: image sitemaps, video sitemaps, news sitemaps (for News-eligible publishers). Most ecom sites only need standard.
- **Submission.** Submit the sitemap to GSC (Settings → Sitemaps) and reference it in `robots.txt` (`Sitemap: https://yoursite.com/sitemap.xml`). Both. GSC submission gets you reporting; robots.txt reference helps Google find it during normal crawl.
- **Auto-generation vs manual.** On Shopify, WordPress, Webflow, etc., the sitemap is auto-generated. The audit task is checking that the auto-generation is producing correct output, not generating sitemaps by hand. Manual sitemaps are only for static sites or unusual cases.

## A worked example

> **Scenario:** Field & Sun audits its sitemap state. The Shopify-default sitemap is at `/sitemap.xml`, which is a sitemap-index pointing to 4 child sitemaps (products, collections, blogs/articles, pages).
>
> Findings:
>
> - **Sitemap-index has 4 children. Total URLs across all children: 187.** Compared to GSC indexed count (612 for the site overall), 425 indexed URLs are NOT in the sitemap. Most are parameter URLs and Shopify-default duplicate URLs Google picked up via crawl rather than sitemap submission.
> - **Sitemap product file lists 8 PDPs.** All 8 are canonical, all return 200, all are indexable. Clean.
> - **Sitemap collection file lists 4 collection pages.** All clean.
> - **Sitemap blog file lists 25 articles.** 23 are clean. 2 articles have stale `lastmod` dates (showing 2024 dates after 2026 content updates) — Shopify's `lastmod` was set on first publish and never updated.
> - **Sitemap pages file lists 12 utility pages** (About, Contact, FAQ, Shipping, etc.). 1 of them is `/legacy-press` which 404s (legacy URL the site removed but the page-publishing record is still cached). Sitemap error in GSC.
>
> **Step 1.** Fix the stale `lastmod` on the 2 blog articles. Re-save the articles in Shopify; this updates `updated_at` which the sitemap pulls from. Verify the sitemap regenerates with the new dates.
>
> **Step 2.** Remove `/legacy-press` from the sitemap. In Shopify: delete the page record (it's already 404ing, so removing the cached entry is correct). The sitemap regenerates automatically.
>
> **Step 3.** Investigate why 425 indexed URLs aren't in the sitemap. Most are parameter URLs Google indexed without canonical signals (this overlaps with the canonical audit). The fix is upstream — improve canonicals on parameter URLs (per `audit-canonical-tags`) so Google de-indexes them, rather than adding them to the sitemap.
>
> **Step 4.** Submit refreshed sitemap to GSC and check the Sitemaps report after 7-14 days. Errors should clear; the discovered-vs-submitted ratio should improve.

## How to do it

1. **Locate the sitemap.** Most platforms auto-generate at `/sitemap.xml`. If unsure, check `robots.txt` for the `Sitemap:` directive.
2. **Pull the sitemap-index and child sitemaps.** Read each XML file. Note the URL count per file and the structure.
3. **Validate every URL in the sitemap:**
   - Returns 200? Flag any 4xx/5xx.
   - Indexable (no `noindex`, not blocked by `robots.txt`)? Flag exclusions.
   - Canonical (canonical URL = page URL)? Flag any non-canonical inclusions.
   - `lastmod` is recent and accurate? Flag stale dates.
4. **Cross-reference with GSC indexed URLs.** Pull GSC Pages report. Identify (a) indexed URLs not in the sitemap, (b) sitemap URLs not indexed.
5. **Cross-reference with the canonical audit (if available).** URLs the canonical audit flagged as "should canonicalise to a different URL" should not be in the sitemap.
6. **Cross-reference with the URL conventions doc (if available).** URLs in the sitemap that violate URL conventions (legacy patterns, capitalised, parameter-stuffed) should be flagged.
7. **Check sitemap-index structure.** For large sites, ensure splits are sensible (by content type, by product line, by date) rather than arbitrary.
8. **Validate parsing.** Submit to GSC's Sitemaps report; check for parsing errors. If errors, fix XML syntax.
9. **Set forward-going regeneration.** Most platforms auto-regenerate. Confirm this actually happens on publish — test by publishing a new page and checking the sitemap within 1-2 days.

## Common pitfalls

- **Including non-canonical URLs.** Parameter URLs, paginated URLs, duplicate URLs in the sitemap send mixed signals. Sitemap should be canonical-only.
- **Including `noindex` URLs.** Confuses Google ("you want me to index this but also told me not to"). Either remove from sitemap or remove the noindex.
- **Including URLs blocked by `robots.txt`.** Same conflict. Pick one direction.
- **Stale `lastmod`.** A `lastmod` that hasn't moved in two years tells Google the page is forgotten. CMSs sometimes don't update `lastmod` on minor edits — verify.
- **Hardcoded `priority` and `changefreq` values.** Most platforms set these to default values that don't reflect reality. Either set them accurately or accept that Google ignores them.
- **Forgetting to submit to GSC.** A sitemap not submitted to GSC still helps via crawl, but you lose the GSC Sitemaps report's diagnostic value.
- **Not referencing in `robots.txt`.** Two-line addition; helps Google find the sitemap during initial crawl.
- **Manually maintained sitemaps on auto-generating platforms.** Almost always drifts. Use the platform's auto-generated sitemap unless there's a specific reason not to.
- **Overlooking sitemap errors in GSC.** Sitemap errors (parsing failures, broken URLs) often surface a CMS bug that affects more than the sitemap.
- **Ignoring the discovered-vs-submitted ratio.** If GSC shows 612 indexed URLs but only 187 in the sitemap, you have a lot of URLs Google found via crawl that you don't endorse. Usually a canonical / parameter / index-bloat problem.

## Skills in this toolkit

- **[audit-xml-sitemap](skills/audit-xml-sitemap/SKILL.md)** — analyses the sitemap (or sitemap-index + child sitemaps) for non-canonical URLs, broken / `noindex` URLs, stale `lastmod`, missing canonical URLs, and sitemap-index structural issues. Cross-references with GSC Pages export, canonical-audit output, and URL-conventions doc when available. Produces a remediation list with template-level vs per-URL actions.

## Related topics

- **[05. Canonical Tags](../05.%20Canonical%20Tags/README.md)** — sitemap and canonical strategy must align; this pair is usually audited together.
- **[02. Indexing](../02.%20Indexing/README.md)** — sitemap submission is the cheapest discovery aid; sitemap state interacts heavily with GSC indexing reports.
- **[01. Crawlability](../01.%20Crawlability/README.md)** — sitemap is a hint, not an override; crawl-blocked URLs in the sitemap are conflicts.
- **[02. On-page SEO / 04. URL Structure](../../02.%20On-page%20SEO/04.%20URL%20Structure/README.md)** — URL conventions and sitemap inclusion rules align.
- **[09. Site Migration](../09.%20Site%20Migration/README.md)** — migration involves coordinated sitemap updates (old + new sitemaps, redirect handling).

## Further reading

- [Google Search Central — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — the canonical guide. Required reading.
- [Sitemap protocol (sitemaps.org)](https://www.sitemaps.org/protocol.html) — the underlying XML format spec.
- [Google Search Central — Sitemaps report](https://support.google.com/webmasters/answer/7451001) — how to read and act on GSC's Sitemaps report.
- [Ahrefs — XML Sitemaps Guide](https://ahrefs.com/blog/xml-sitemap/) — practitioner walkthrough; covers platform-specific nuances.
- [Aleyda Solis — Sitemap Audit Templates](https://www.aleydasolis.com/) — practical templates for sitemap audit at scale.
