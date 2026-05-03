# 02. On-page SEO

> Translate your strategy into the actual page changes that move rankings — titles, descriptions, headers, URLs, internal links, images, and body content.

## What this category covers

On-page SEO is everything you can change *on a page* to make it rank better and convert better. It's the tactical layer that sits between strategy (what to target) and execution (publishing). The seven sub-topics here cover the elements Google reads on every URL it crawls — and that searchers see in the SERP and on the page itself.

If Strategy decides *what* to target, On-page SEO is *how* you tell Google and the searcher you're the right answer. Most of it is unglamorous, repetitive, and high-leverage: a 30-minute title rewrite on a page already ranking position 11 can do more for the business than a quarter of new content.

## How the sub-topics fit together

```
Page-level signals                    Site-level signals             Content quality
─────────────────────                 ──────────────────             ────────────────
01. Title         ─┐                  04. URL Structure              07. Content Optimization
02. Descriptions   ├── per-page work  05. Internal Linking
03. Header Struct ─┘                  06. Image Optimization
```

1. **[01. Title](01.%20Title/README.md)** — the single highest-leverage on-page element. The clickable string in the SERP and Google's strongest signal of what a page is about.
2. **[02. Descriptions](02.%20Descriptions/README.md)** — the snippet under the title in the SERP. Doesn't directly affect rankings but heavily affects click-through rate, which feeds back into rankings.
3. **[03. Header Structure](03.%20Header%20Structure/README.md)** — the H1/H2/H3 outline of the page. Tells Google how the content is organised and what each section is about.
4. **[04. URL Structure](04.%20URL%20Structure/README.md)** — the slug pattern used across the site. A site-level decision that affects every page.
5. **[05. Internal Linking](05.%20Internal%20Linking/README.md)** — how pages link to each other inside the site. Distributes ranking signal and helps Google understand topical relationships.
6. **[06. Image Optimization](06.%20Image%20Optimization/README.md)** — alt text, file names, formats, dimensions, lazy-loading. Affects accessibility, page speed, and image-search traffic.
7. **[07. Content Optimization](07.%20Content%20Optimization/README.md)** — the body content of the page itself: depth, structure, terminology, semantic coverage of the target topic.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Page-level quick wins (1-2 weeks):**

1. Take your top 10-20 pages by traffic or commercial value (from `businesses/<slug>/clusters/cluster-map.md` or your `seo-wins-backlog`).
2. Run **Title** rewrites on all of them.
3. Run **Descriptions** rewrites on the same set (for CTR uplift).
4. Run **Header Structure** audits on the same set.

This typically ships in 1-2 weeks and produces measurable lift within 30-60 days.

**Pass 2 — Site-level structure (1-2 weeks):**

1. Run **URL Structure** to define site conventions (or audit existing URLs if the site is mature).
2. Run **Internal Linking** at the strategy level — design hub-and-spoke linking from your cluster map.

**Pass 3 — Depth and craft (ongoing):**

1. Run **Image Optimization** as a one-time audit + ongoing process for new pages.
2. Run **Content Optimization** on individual high-priority pages, one at a time. This is the deepest work and the one where AI assistance produces the biggest time savings.

## Pre-requisites from Strategy

The On-page work compounds when fed by strategy outputs. Specifically, expect to use:

- `businesses/<slug>/clusters/cluster-map.md` — every page should target one cluster; on-page elements are tuned to that cluster's primary + supporting keywords.
- `businesses/<slug>/intent-classification/classified-keywords.md` — intent dictates page type, which dictates the on-page template (a product PDP and a blog post don't have the same H-structure or title pattern).
- `businesses/<slug>/business_profile.md` section 8 (brand voice) — every output here uses brand-aligned language.

If the strategy outputs don't exist yet, the on-page skills will ask for the minimum viable inputs (target keyword, intent, page URL, content, brand tone) before producing anything.

## Skills you'll use in this category

The full inventory across the 7 sub-topics:

- **[generate-title-tags](../../skills/on-page/generate-title-tags/SKILL.md)** — produce title-tag variants for a page, scored on relevance, intent fit, and CTR signal.
- **[generate-meta-descriptions](../../skills/on-page/generate-meta-descriptions/SKILL.md)** — produce meta-description variants tuned to intent and brand voice.
- **[audit-header-structure](../../skills/on-page/audit-header-structure/SKILL.md)** — analyse H1/H2/H3 hierarchy of a page and propose a restructure.
- **[define-url-conventions](../../skills/on-page/define-url-conventions/SKILL.md)** — produce a URL-structure convention document for the site.
- **[audit-urls](../../skills/on-page/audit-urls/SKILL.md)** — review existing URLs against conventions, flag cleanup or migration candidates.
- **[plan-internal-linking](../../skills/on-page/plan-internal-linking/SKILL.md)** — design a site-wide internal-linking strategy from the cluster map.
- **[audit-page-internal-links](../../skills/on-page/audit-page-internal-links/SKILL.md)** — review the links on and to a single page, recommend additions or removals.
- **[audit-images](../../skills/on-page/audit-images/SKILL.md)** — analyse a page's images for alt text, file names, dimensions, format, and lazy-loading.
- **[optimize-page-content](../../skills/on-page/optimize-page-content/SKILL.md)** — rework a page's body content against a target cluster, intent, and brand voice.

## Common pitfalls

- **Optimising on-page without a strategy.** Title rewrites that don't reflect a chosen cluster + intent are guessing. Run Strategy first.
- **One-keyword-per-page thinking.** A page should target a *cluster* of related keywords. Title and content should reflect that breadth, not a single phrase.
- **Stuffing.** Putting the keyword in the title, H1, first paragraph, every H2, alt text, URL, and meta description doesn't help and can hurt. Modern Google reads natural language. Aim for clear and useful, not "optimised."
- **Skipping the description because "Google rewrites it."** Yes, Google rewrites about a third of meta descriptions. The other two-thirds it doesn't, and CTR uplift on those pages compounds.
- **Restructuring URLs without redirects.** Changing a URL without a 301 is one of the fastest ways to lose ranking. Plan the migration before you change anything.
- **Internal linking as an afterthought.** It's site-level architecture. Treat it as part of the strategy, not as a per-page chore.
- **Ignoring image optimization on Shopify / WordPress sites.** Auto-generated alt text from these platforms is usually empty or terrible. Manual review on top pages catches a lot.
- **Content-optimising a page that has the wrong intent.** No amount of body-content polish rescues a product page Google wants to rank as a blog post. Re-check intent before optimising content.

## Where to go after this

Once on-page is in good shape across your priority pages:

- **[03. Technical SEO](../03.%20Technical%20SEO/)** — make sure Google can actually crawl, index, and render the work you just did.
- **[04. Content SEO](../04.%20Content%20SEO/)** — produce *new* pages for the clusters that don't yet have one.
- **[05. Analytics](../05.%20Analytics/)** — measure rank, click, and traffic uplift on the pages you optimised so the next backlog is informed by evidence.
- **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/)** — re-score the backlog as on-page work ships, and queue the next round.
