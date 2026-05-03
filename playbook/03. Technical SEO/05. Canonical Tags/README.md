# Canonical Tags

> The signal that resolves duplicate content. Tells Google which URL is the "real" version when many URLs serve the same or near-identical page — the difference between concentrated ranking signal and diluted index bloat.

## What it is

The canonical tag is `<link rel="canonical" href="...">` placed in the `<head>` of a page. It tells Google: "of all the URLs that show this content, *this* one is the master." When Google sees a canonical signal, it indexes the canonical version and consolidates ranking signals (links, engagement, etc.) toward it. The other URLs become *alternates* — still crawlable, but de-prioritised in the index.

Canonicals are the bread-and-butter solution to duplicate content. On an ecom site, the same product can be reachable through `/products/x`, `/collections/cat/products/x`, `/products/x?variant=blue`, `/products/x?ref=email-campaign`, and an Amazon listing — five URLs, one product. Without canonicals, Google decides which to index and may pick wrong, splitting the ranking signal across the variants. With canonicals pointing at one master, the signal concentrates and the master ranks better.

## Why it matters

Two reasons. First, **canonicals fix a problem most sites have unknowingly**: parameter URLs, faceted-navigation URLs, and platform-default duplicates flood the index with near-identical content. Each one dilutes the ranking signal of the master page. A site with thousands of parameter URLs indexed but only 200 actual unique pages has effectively scattered its SEO equity across noise.

Second, **canonical mistakes are silent and consequential**. A wrong canonical tag — pointing to the wrong page, missing entirely, or contradicting other signals (sitemap, hreflang, internal links) — can cause Google to deindex the page you actually wanted to rank, or to rank the wrong variant. These mistakes don't surface as visible errors; they show up as "we lost half our organic traffic and don't know why" three months later.

For Field & Sun on Shopify, the typical canonical issue is the platform creating duplicate `/collections/<x>/products/<slug>` URLs alongside the canonical `/products/<slug>`. Without explicit `rel=canonical` on the duplicates pointing to the flat URL, both versions can get indexed.

## Core concepts

- **Self-referencing canonicals.** Every page should have a canonical tag pointing at itself (or at the canonical version if different). Self-references aren't redundant — they explicitly tell Google "this is the canonical" and protect against Google guessing wrong.
- **`rel=canonical` is a hint, not a directive.** Google can ignore canonicals if signals contradict each other (e.g. you canonicalise to A, but your sitemap lists B, and your internal links all point to B — Google may pick B). Consistent signals win.
- **Cross-domain canonicals.** Allowed and useful. Syndicated content (republished on Medium, on a partner blog) can canonicalise back to the original. Amazon-side listings can reference the brand's PDP. Cross-domain only works if both sites are crawlable.
- **Parameter URLs and canonicals.** Filter, sort, and pagination URLs (`?color=blue`, `?sort=newest`, `?page=2`) should canonicalise to the clean parent URL — unless the parameter substantively changes the content. Pagination is a special case (Google's stance has changed; see "Pagination" below).
- **Variant URLs.** Product variants (e.g. different colours of the same garment) usually canonicalise to a single master variant URL — unless each variant has substantively different content (different price, different reviews, different images), in which case they each self-canonicalise.
- **Pagination.** Google deprecated `rel=next/prev` in 2019. Current best practice: paginated pages self-canonicalise (page 2 canonicalises to page 2, not to page 1). Don't canonicalise paginated pages back to page 1 — that loses the unique products on later pages from the index.
- **Canonical conflicts to avoid:**
  - Canonical points to one URL, sitemap lists another, internal links use a third — pick one and align everything.
  - Canonical points to a URL that 404s, redirects, or is `noindex` — Google ignores or penalises.
  - Canonical to a non-equivalent page (e.g. canonicalising a product page to a category page) — Google penalises and may drop both.
- **HTTP header canonicals (`Link: <url>; rel="canonical"`).** Used for non-HTML resources (PDFs, images). Same semantics, different delivery.

## A worked example

> **Scenario:** Field & Sun audits canonicals across the site. Findings:
>
> - 8 PDP URLs have canonical tags pointing at themselves — correct.
> - 8 PDP URLs *also* exist at `/collections/<x>/products/<slug>` (Shopify default) and these duplicates have NO canonical tag at all — Google is choosing which to index, and on 3 of them has chosen the collection-prefixed version (wrong).
> - The blog has 25 posts. Each canonical tag is correct.
> - Faceted-nav URLs on collection pages (`?filter=tinted`, `?sort=newest`) are being indexed because their canonical tags self-reference instead of pointing back to the parent collection.
> - One blog post (`/blog/mineral-vs-chemical-sunscreen`) was syndicated to a partner skincare publication; the partner published it without a canonical tag back to Field & Sun, so Google indexed the partner's version above the original.
>
> **Step 1.** Fix the Shopify collection-prefixed duplicates. Update the theme's `product.liquid` template to emit `<link rel="canonical" href="{{ shop.url }}{{ product.url }}">` always pointing at the flat `/products/<slug>` form, even when the page is reached via the collection-prefixed URL. Recovers ~8 product canonical signals.
>
> **Step 2.** Fix faceted-nav canonicals. Update the collection template so filter / sort URLs emit canonicals pointing back at the clean collection (`/collections/sun-care` rather than `/collections/sun-care?filter=tinted`). Removes ~30 parameter URLs from the index over 30-60 days.
>
> **Step 3.** Outreach to the partner publication that republished the mineral-vs-chemical post. Ask them to add `<link rel="canonical" href="https://fieldandsun.com/blog/mineral-vs-chemical-sunscreen">` to their version. If they agree, ranking signal consolidates back to Field & Sun within 60 days.
>
> **Step 4.** Submit the affected URLs to GSC for re-indexing. Monitor the GSC Pages report for the next 30-60 days; expect "Duplicate, Google chose different canonical than user" entries to fall to zero.

## How to do it

1. **Crawl the site for canonical state.** Screaming Frog or Sitebulb shows the canonical tag on every URL. Pull the report. Fields you need: URL, canonical URL, indexability, response code.
2. **Identify the duplicate-URL patterns.** Common sources: parameter URLs, collection-prefixed product URLs (Shopify), trailing-slash variants, capitalised variants, paginated URLs, variant URLs, syndicated content, AMP versions.
3. **For each pattern, decide the canonical strategy:**
   - Same content, multiple URLs → canonicalise duplicates to the master.
   - Substantively different content → each self-canonicalises.
   - Pagination → each page self-canonicalises (don't point all pages at page 1).
4. **Cross-reference with the sitemap.** Sitemap URLs should be canonical-only. Any non-canonical URL in the sitemap is a contradiction signal — Google may interpret it as the canonical you didn't intend.
5. **Cross-reference with internal links.** Internal links should point at canonical URLs. If your nav links to `/collections/x/products/y` (the duplicate) but the canonical is `/products/y`, you're sending mixed signals to Google.
6. **Cross-reference with hreflang (if multi-locale).** Hreflang URLs must each be canonical for their locale. Canonicalising EN-US to EN-UK is a hreflang conflict.
7. **Implement at template level.** Per-page hand-coded canonicals don't scale. On Shopify, the Liquid template should emit the canonical tag computed from `shop.url + product.url` (or `page.url`, `article.url`) — automatic and correct site-wide.
8. **Validate.** Use GSC URL Inspection on a sample of representative URLs to confirm Google sees the canonical you intended. Then monitor the Pages report for "Duplicate, Google chose different canonical than user" — that bucket shrinking confirms the fix is working.

## Common pitfalls

- **Missing canonicals entirely.** Every page should have a self-referencing canonical at minimum. Pages with no canonical force Google to guess.
- **Canonical to the wrong URL.** Pointing a product page's canonical at the homepage, or a blog post's canonical at the category page. Pages get deindexed without warning.
- **Inconsistent canonical, sitemap, internal links.** All three signals should align. Conflict is a yellow flag for Google.
- **Canonicalising paginated pages back to page 1.** Loses the unique content on pages 2+ from the index. Each paginated page should self-canonicalise.
- **Canonicalising variants when they're substantively different.** Two product variants with different prices, different inventory, different reviews — each may warrant its own indexed page (with hreflang-style cross-references for users finding the wrong one).
- **Canonical to a 404 / 301 / noindex URL.** Canonical targets must be reachable, indexable, and content-equivalent.
- **Manually maintaining canonicals.** On a site with thousands of URLs, manual canonical management always drifts. Always template-level.
- **Forgetting cross-domain canonicals when syndicating.** If you republish your content elsewhere, that elsewhere should canonicalise back to you.
- **Ignoring GSC's "Duplicate, Google chose different canonical" bucket.** That's Google explicitly telling you it overrode your canonical. Investigate every entry.

## Skills in this toolkit

- **[audit-canonical-tags](../../../skills/technical/audit-canonical-tags/SKILL.md)** — analyses canonical tags across a URL list (from a crawler export or sitemap), surfaces missing canonicals, conflicts (canonical vs sitemap vs internal links), bad targets (canonicals pointing to 404 / 301 / noindex), and pattern-level issues (parameter URLs, collection-prefixed duplicates). Produces a prioritised remediation list grouped by issue type.

## Related topics

- **[02. Indexing](../02.%20Indexing/README.md)** — most "Duplicate" exclusion reasons in GSC are canonical-related; this leaf is the fix.
- **[01. Crawlability](../01.%20Crawlability/README.md)** — canonical targets must be crawlable; canonicals don't override `robots.txt`.
- **[06. XML Sitemaps](../06.%20XML%20Sitemaps/README.md)** — sitemap should list canonical URLs only; this pair is usually audited together.
- **[02. On-page SEO / 04. URL Structure](../../02.%20On-page%20SEO/04.%20URL%20Structure/README.md)** — URL conventions and canonical strategy are interdependent. Set conventions, then enforce via canonicals.
- **[02. On-page SEO / 05. Internal Linking](../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — internal links should target canonical URLs to avoid contradicting the canonical signal.
- **[08. International SEO / 01. Hreflang](../../08.%20International%20SEO/01.%20Hreflang/)** — multi-locale sites have to align canonicals with hreflang carefully.

## Further reading

- [Google Search Central — Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — the canonical reference. Covers `rel=canonical`, redirects, and consistency requirements.
- [Google Search Central — URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure) — broader URL guidance that interacts with canonical decisions.
- [Ahrefs — Canonical Tags Guide](https://ahrefs.com/blog/canonical-tags/) — practitioner walkthrough with platform-specific examples.
- [Onely — Canonicalisation Issues at Scale](https://www.onely.com/blog/) — strong on the larger-site / parameter-URL angle.
- [Aleyda Solis — Canonical Tag Audits](https://www.aleydasolis.com/) — practical templates for canonical audit and remediation.
