# 03. Technical SEO

> The plumbing layer. Make sure Google can find, crawl, render, index, and serve the work you've done in Strategy and On-page — fast enough that users don't bounce before the page loads.

## What this category covers

Technical SEO is everything that determines whether your pages can be discovered, parsed, indexed, and served quickly to searchers — by traditional search engines and by the AI crawlers that increasingly mediate visibility. It's the layer between *what's on a page* (On-page) and *whether the page is reachable at all*. The ten sub-topics here cover crawl, indexing, performance, structured data, canonical signals, sitemaps, JavaScript-rendered content, log-file diagnostics, the high-stakes event of a site migration, and the AI-crawler access decisions that govern how AI systems interact with your content.

For most D2C brands, technical SEO breaks in predictable ways: thin product pages get excluded from the index, parameter URLs flood the index with duplicates, JavaScript-rendered content doesn't get crawled, Core Web Vitals fail on mobile, and migrations lose 20-40% of organic traffic when redirects are botched. Each of these is fixable, but most of them only get fixed when someone audits — defaults are rarely good.

## How the sub-topics fit together

```
Discovery & access      Indexing decisions       Performance       Structure & signals    Events
──────────────────      ──────────────────       ───────────       ────────────────────   ──────
01. Crawlability    →   02. Indexing         →   03. Site Speed    04. Schema Markup      09. Site Migration
07. JavaScript SEO      05. Canonical Tags                          06. XML Sitemaps
08. Log File Analysis
10. AI Crawler Management
```

The flow on the left is the lifecycle of a URL through Google: it has to be **crawlable** before it can be **indexed**, and JavaScript and log analysis are diagnostic tools that sit alongside both. Performance, structured data, and sitemaps are signals you control on the served page or in the site-wide configuration. Migration is a one-off event that touches everything.

1. **[01. Crawlability](01. Crawlability.md)** — robots.txt, robots meta, x-robots-tag, server-response codes, internal linking depth, broken links. Whether Googlebot can reach the page at all.
2. **[02. Indexing](02. Indexing.md)** — once crawled, whether the page enters Google's index. Indexed-vs-not-indexed status, exclusion reasons, soft-404s, "discovered, not indexed."
3. **[03. Site Speed](03. Site Speed.md)** — Core Web Vitals (LCP, INP, CLS), TTFB, page-experience signals. The performance layer that affects ranking and conversion.
4. **[04. Schema Markup](04. Schema Markup.md)** — structured data (JSON-LD) that powers rich results, FAQ snippets, product cards, breadcrumbs, and AI Overview eligibility.
5. **[05. Canonical Tags](05. Canonical Tags.md)** — the `rel=canonical` signal that resolves duplicate content. Critical for ecom sites with parameter URLs and category-product variants.
6. **[06. XML Sitemaps](06. XML Sitemaps.md)** — the index of URLs you want Google to crawl. Should reflect canonical pages only and stay clean as the site grows.
7. **[07. JavaScript SEO](07. JavaScript SEO.md)** — server-side rendering, hydration, dynamic content, and the gap between what users see and what Googlebot crawls on JS-heavy sites.
8. **[08. Log File Analysis](08. Log File Analysis.md)** — the diagnostic that tells you what Googlebot actually does on your site: crawl frequency, status codes, wasted crawl budget on parameter URLs and filters.
9. **[09. Site Migration](09. Site Migration.md)** — re-platforms, rebrands, domain moves. The event most likely to lose 20-40% of organic traffic if mishandled.
10. **[10. AI Crawler Management](10. AI Crawler Management.md)** — robots.txt rules for AI bots (GPTBot, ClaudeBot, Google-Extended, etc.), `llms.txt` standard, `noai`/`noimageai` directives. The infrastructure layer of the AI-search shift.

## A suggested workflow

If you're auditing technical SEO for the first time on an existing site, work through this category in two passes:

**Pass 1 — Discovery and indexing (1-2 weeks):**

1. Run **Crawlability** audit. Confirm robots.txt isn't blocking key paths. Confirm there are no orphan URLs, no chains of redirects, and that internal-link depth is sane.
2. Run **Indexing** audit using GSC's Pages report. Identify excluded reasons (canonicalised, soft-404, crawled-not-indexed, blocked-by-robots) and prioritise the highest-traffic pages with issues.
3. Run **Canonical Tags** audit. Especially important for Shopify/WooCommerce parameter URLs that dilute index signal.
4. Run **XML Sitemaps** audit. Ensure the sitemap reflects only canonical, indexable URLs.

By the end of pass 1 you should know exactly which of your URLs Google is crawling, indexing, and surfacing — and which it's ignoring or excluding, with reasons.

**Pass 2 — Performance and structure (1-2 weeks):**

1. Run **Site Speed** audit on top 10-20 pages. Address LCP, INP, and CLS failures.
2. Run **Schema Markup** strategy + per-page generation. Layer structured data on product, article, FAQ, and breadcrumb elements.
3. Run **JavaScript SEO** audit if the site is JS-heavy (Next.js, React, Vue without SSR). Validate that Googlebot is rendering what users see.
4. Run **Log File Analysis** quarterly to surface wasted crawl budget — typically the biggest leverage on large ecom sites.

**Event-driven — Site Migration:**

1. Use **Site Migration** when re-platforming, rebranding, moving domains, or doing major URL restructures. Plan ahead; recovery is harder than prevention.

## Pre-requisites and dependencies

Most technical-SEO work doesn't strictly require Strategy outputs, but it benefits from them:

- `businesses/<slug>/business_profile.md` — the platform field (Shopify / WordPress / custom Next.js / etc.) determines which technical patterns apply.
- `businesses/<slug>/clusters/cluster-map.md` — when prioritising indexing, schema, or site-speed work, the cluster map identifies which pages matter most.
- Output of **[02. On-page SEO](../02.%20On-page%20SEO/README.md)** work — technical SEO ensures the on-page work you shipped can actually be crawled, indexed, and served fast.

You'll also need access to: Google Search Console (mandatory), a crawler (Screaming Frog or Sitebulb), PageSpeed Insights / Lighthouse / WebPageTest, and ideally server log files (for log-file analysis).

## Skills you'll use in this category

The full inventory across the 10 sub-topics:

- **[audit-crawlability](../../skills/technical/audit-crawlability/SKILL.md)** — analyse robots.txt, robots meta, x-robots-tag, response codes, redirect chains, and crawl depth across a list of URLs.
- **[audit-indexing-status](../../skills/technical/audit-indexing-status/SKILL.md)** — analyse GSC's Pages report and surface why pages are excluded, prioritised by impact.
- **[audit-core-web-vitals](../../skills/technical/audit-core-web-vitals/SKILL.md)** — analyse a page's LCP, INP, CLS, TTFB, and recommend prioritised performance fixes.
- **[plan-schema-strategy](../../skills/technical/plan-schema-strategy/SKILL.md)** — produce a site-wide structured-data plan: which schema types per page type, with examples.
- **[generate-schema-markup](../../skills/technical/generate-schema-markup/SKILL.md)** — generate JSON-LD schema for a specific page with validation against Google's structured-data requirements.
- **[audit-canonical-tags](../../skills/technical/audit-canonical-tags/SKILL.md)** — review canonical tags across URLs, surface mismatches, missing canonicals, and circular references.
- **[audit-xml-sitemap](../../skills/technical/audit-xml-sitemap/SKILL.md)** — review the sitemap for non-canonical URLs, missing pages, broken URLs, and structural issues.
- **[audit-javascript-seo](../../skills/technical/audit-javascript-seo/SKILL.md)** — diagnose JS-rendering issues on a page, compare rendered DOM to source HTML, identify hydration / SSR gaps.
- **[analyse-log-files](../../skills/technical/analyse-log-files/SKILL.md)** — process server log file exports to identify Googlebot crawl patterns, wasted budget, and overlooked URLs.
- **[plan-site-migration](../../skills/technical/plan-site-migration/SKILL.md)** — design a structured migration plan: redirect strategy, sequencing, QA checkpoints, recovery monitoring.
- **[build-redirect-map](../../skills/technical/build-redirect-map/SKILL.md)** — produce the old-URL → new-URL mapping with status codes, chain checks, and an implementation order.
- **[audit-ai-crawler-access](../../skills/technical/audit-ai-crawler-access/SKILL.md)** — audit robots.txt declarations against the major AI crawlers, validate `llms.txt`, surface gaps between declared posture and actual rules.
- **[generate-llms-txt](../../skills/technical/generate-llms-txt/SKILL.md)** — produce a curated `/llms.txt` file (and optionally `/llms-full.txt`) for sites with an open or visibility-only AI-crawler posture.

## Common pitfalls

- **Treating technical SEO as a one-off project.** It's a recurring discipline. New CMS updates, new templates, new product launches all introduce new technical issues. Quarterly audits catch them early.
- **Auditing without GSC access.** Google Search Console is the source of truth for indexing, and most of the highest-leverage diagnostics start there. Without it, technical SEO is largely guesswork.
- **Fixing low-leverage issues first.** A canonical-tag inconsistency on a 0-traffic page isn't worth the time of fixing the same issue on the homepage. Prioritise by traffic, commercial value, and the page's role in the cluster map.
- **Migrating without redirects.** The single most expensive technical mistake. A URL change without a 301 typically costs 60-90% of the page's ranking immediately, and recovery is partial at best.
- **Ignoring JavaScript rendering.** On Next.js/React/Vue sites without SSR, Googlebot may see a blank shell. Audit early; an unrendered site can't rank no matter how good the strategy is.
- **Indexing parameter URLs.** Filter, sort, and pagination URLs without canonicals flood Google's index with duplicates, dilute signal, and waste crawl budget. Especially common on Shopify and WooCommerce.
- **Skipping log-file analysis on large sites.** For sites over ~5,000 URLs, log files surface crawl problems no other tool sees. The biggest crawl-budget wins almost always come from log-file insights.
- **Confusing "indexed" with "ranking."** A URL can be indexed and still not rank for anything. Indexing is necessary but not sufficient. Use indexing audits to fix exclusion problems; use rank tracking and the rest of the toolkit to lift positions.

## Where to go after this

Once technical SEO is in shape:

- **[04. Content SEO](../04.%20Content%20SEO/README.md)** — produce new pages knowing the technical foundation will pick them up cleanly.
- **[05. Analytics](../05.%20Analytics/README.md)** — set up the measurement that tells you whether the technical work is paying off.
- **[02. On-page SEO](../02.%20On-page%20SEO/README.md)** — re-run on-page work knowing pages are now crawlable, indexable, fast, and properly canonicalised.
- **[01. Strategy / 05. SEO Wins](../01. Strategy/05. SEO Wins.md)** — many technical findings become P0 items in the wins backlog.
