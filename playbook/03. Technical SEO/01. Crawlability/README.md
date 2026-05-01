# Crawlability

> Whether Googlebot can reach your pages at all. The first link in the technical chain — if a page isn't crawlable, nothing else matters.

## What it is

Crawlability is the property of being reachable by Googlebot (and other search-engine crawlers). It depends on a stack of decisions: what your `robots.txt` allows, what `<meta robots>` and `X-Robots-Tag` headers say, whether the page returns a 200 (or a 4xx/5xx), whether internal links point to it from somewhere reachable, and whether the path to it is too deep for the crawler to bother.

A crawlable page can still fail to rank for many reasons. A page that's *not* crawlable can never rank. So crawlability is the floor, not the ceiling.

## Why it matters

Crawl issues are usually invisible to humans — the page works fine in a browser, the customer can buy from it, the analytics pixel fires, but Googlebot has been blocked or the page has been silently excluded. The result: pages that should drive traffic don't, and the team doesn't know why.

For a D2C brand, the most common crawlability failures are: an over-aggressive `robots.txt` that blocks important paths, a `noindex` left over from staging, a CMS quirk that returns soft-200s for missing pages, and JavaScript-injected internal links that crawlers don't follow. Each of these is a single line of code or config — but each can suppress a meaningful chunk of traffic until found.

## Core concepts

- **`robots.txt`** — a file at `/robots.txt` that tells crawlers which paths they're allowed (or disallowed) to crawl. It's a request, not an enforcement; well-behaved crawlers respect it. **Disallow ≠ noindex** — a page disallowed in robots.txt can still appear in the index without content if other sites link to it.
- **`<meta name="robots">` and `X-Robots-Tag`** — page-level directives. Common values: `index, follow` (default), `noindex` (don't add to index), `nofollow` (don't follow links from this page), `noarchive`, `nosnippet`. The HTTP header version (`X-Robots-Tag`) is used for non-HTML resources (PDFs, images).
- **HTTP status codes** — `200` = OK, `301` = permanent redirect, `302` = temporary redirect, `404` = not found, `410` = gone (definitively), `5xx` = server error. Crawlability audits look for: unexpected 4xx/5xx on pages that should work, 302s where 301s belong, soft-404s (200 status with "page not found" content).
- **Redirect chains and loops** — `A → B → C → D` is a chain; each hop dilutes signal slightly and slows crawl. `A → B → A` is a loop that crawlers eventually give up on. Both should be eliminated; chains collapsed to single hops, loops broken.
- **Crawl depth** — number of clicks from the homepage to reach a page. Shallow (1-3) is best; pages 5+ clicks deep get crawled less and rank worse on average.
- **Crawl budget** — the number of URLs Googlebot is willing to crawl on your site per unit time. For sites under ~5,000 URLs this is rarely a constraint; for larger sites (especially ecom with parameter URLs) it's a real ceiling. Wasted crawl on duplicates and parameters means less crawl on pages that matter.
- **Orphan pages** — pages with no internal links pointing at them. They exist in the sitemap or CMS but Googlebot has no path to discover them naturally.

## A worked example

> **Scenario:** Field & Sun notices in GSC that 12 of their 28 cluster-mapped pages are not in the index. The pages exist; customers can navigate to them. Why?
>
> **Step 1.** Run a crawlability audit using Screaming Frog. Discover:
>
> - 4 pages have a `noindex` meta tag left over from staging (a CMS template flag never flipped at launch).
> - 3 pages return 302 instead of 301 redirects (set up by a marketer who didn't know the difference).
> - 2 pages are at depth 6 from the homepage (buried under nested collections) — crawled rarely.
> - 2 pages return soft-404 (200 status but page content says "Sorry, this product is no longer available").
> - 1 page is blocked in `robots.txt` because the path matches `Disallow: /products/temp-` and the slug accidentally contains "temp".
>
> **Step 2.** Fix in priority order: remove the `noindex` (template fix, ships immediately, 4 pages back); change 302→301 (one-line CMS fix, 3 pages); convert soft-404s to proper 404 + remove from sitemap (2 pages); fix the `robots.txt` disallow pattern (1 page); add internal links to the deep-buried pages from higher-authority pages to shorten depth (2 pages).
>
> **Step 3.** Re-submit each URL to GSC for re-indexing. After 14 days, 11 of the 12 pages are back in the index; the 12th (a soft-404 product page) was correctly de-indexed because the product was discontinued.
>
> **Step 4.** Document the patterns in the per-business CLAUDE.md so the same issues don't recur on new launches.

## How to do it

1. **Crawl the site.** Screaming Frog, Sitebulb, or Ahrefs Site Audit. Configure to respect (or ignore) robots.txt depending on what you're investigating. Get a complete URL list with status codes, response headers, and meta directives.
2. **Validate `robots.txt`.** Read it line by line. Does each `Disallow` block what it should? Are there accidental wildcards catching real pages? Is the sitemap referenced (`Sitemap: https://...`)?
3. **Audit meta robots and X-Robots-Tag.** Crawl reports show these per URL. Flag every `noindex` — confirm it's intentional. Flag every `nofollow` on internal links — usually a mistake, internal-link nofollow burns equity.
4. **Audit response codes.** Build a count: how many 200s, 301s, 302s, 4xx, 5xx? Investigate clusters of unexpected status codes (a wave of 302s usually signals a rushed migration; a wave of 5xx usually signals a server-side problem).
5. **Audit redirect chains.** Any URL that returns a redirect should redirect once, to a 200. Multi-hop chains compress to single hops; loops break.
6. **Audit crawl depth.** From the crawl, identify URLs at depth 5+. For each, decide: link in from a higher-depth page (best), accept the depth (rare — only if the page is genuinely low-priority), or de-index/de-publish.
7. **Identify orphans.** URLs in the sitemap or CMS but not reachable by following internal links from the homepage. Typically: link in from a related page, or remove from the sitemap.
8. **Cross-reference with GSC.** Pull GSC's Pages report to see what Google actually crawled vs. what your crawl saw. Discrepancies reveal access or rendering issues a crawler-as-Googlebot might miss.
9. **Set up forward-going monitoring.** Add a weekly or monthly check on response-code distribution and `noindex` count. Catches regressions before they cost traffic.

## Common pitfalls

- **Confusing `noindex` and `Disallow`.** They're not the same. `Disallow` in robots.txt prevents crawling; `noindex` prevents indexing. A page can be `Disallow`ed but still indexed (with no content snippet) if other sites link to it. Use `noindex` to *remove* from index; use `Disallow` to *prevent crawl* (but then Google can't see your `noindex`, so use one or the other based on goal).
- **Leftover staging directives.** `noindex` tags or `Disallow: /` left over from staging are the most common single cause of "why aren't we indexed?" The audit catches this.
- **302s where 301s belong.** A 302 (temporary) tells Google not to update its index; a 301 (permanent) tells it to. Migrations and URL changes should always be 301.
- **Soft-404s.** A page that returns 200 status but says "page not found" or "out of stock" wastes crawl budget. Either fix the page (so it's a real 200), or return a real 404 / 410.
- **Internal `nofollow`.** Adding `rel="nofollow"` to internal links is almost always a mistake — it stops equity flow inside your own site.
- **Crawl depth on collection pages.** A common ecom mistake: nesting collections so deeply (`/collections/skincare/serums/vitamin-c/morning-routine/...`) that the deepest pages are 6+ clicks from the homepage.
- **Robots.txt overreach.** "Block /admin and /cart" is fine. "Block /products with a wildcard pattern" is catastrophic. Test changes carefully.
- **Auditing once and forgetting.** Crawl issues recur — every CMS update or template change can introduce new ones. Quarterly audits at minimum.

## Skills in this toolkit

- **[audit-crawlability](skills/audit-crawlability/SKILL.md)** — analyses a list of URLs (from a crawler export or sitemap) for robots.txt blocking, meta robots / X-Robots-Tag directives, response codes, redirect chains, and crawl depth. Produces a prioritised remediation list grouped by issue type.

## Related topics

- **[02. Indexing](../02.%20Indexing/README.md)** — the next link in the chain; once a page is crawlable, indexing decides whether it actually enters Google's index.
- **[05. Canonical Tags](../05.%20Canonical%20Tags/README.md)** — canonicalisation interacts with crawl decisions; non-canonical URLs are still crawled but de-prioritised.
- **[06. XML Sitemaps](../06.%20XML%20Sitemaps/README.md)** — sitemaps help Google discover pages but don't override crawl directives.
- **[08. Log File Analysis](../08.%20Log%20File%20Analysis/README.md)** — the diagnostic that reveals what Googlebot actually does on the site, beyond what crawlers infer.
- **[02. On-page SEO / 05. Internal Linking](../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — internal-linking strategy directly affects crawl depth and orphan-page counts.

## Further reading

- [Google Search Central — Crawling and Indexing](https://developers.google.com/search/docs/crawling-indexing) — the canonical hub for Google's guidance on crawl, robots, sitemaps, and indexing controls.
- [Google's `robots.txt` specification](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) — exact syntax, directive precedence, and edge cases.
- [Ahrefs — Crawl Errors and How to Fix Them](https://ahrefs.com/blog/crawl-errors/) — practitioner walkthrough with examples by error type.
- [Onely — JavaScript SEO and Crawl Budget](https://www.onely.com/blog/) — strong on the crawl-budget side, especially for large JS-heavy sites.
- [Aleyda Solis — Technical SEO Audit Templates](https://www.aleydasolis.com/) — practical, reusable templates for crawl audits at scale.
