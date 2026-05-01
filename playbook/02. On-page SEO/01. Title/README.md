# Title

> The single highest-leverage on-page element. The string Google shows in the SERP, the strongest per-page signal of what the content is about, and the deciding factor in whether a searcher clicks through.

## What it is

The title tag is the HTML `<title>` element of a page (`<title>Refillable Laundry Detergent — Brand</title>`). It appears as the clickable blue text in the Google SERP, in browser tabs, and as the default text when the page is shared on social. On most platforms (Shopify, WordPress, Webflow) it's distinct from the H1 — though it's common practice to align them where it makes sense.

Don't confuse it with the **H1**, which is the visible page heading inside the body. They serve different jobs: the title is the SERP-facing label, the H1 is the on-page label. They can match, but they don't have to.

## Why it matters

Two reasons. First, the title is one of Google's strongest signals of page topic — historically the strongest single on-page signal, and still in the top 3 today. Second, the title is what searchers see in the SERP, so it directly drives **click-through rate (CTR)**. CTR is itself a ranking signal — pages that get clicked when shown for a query tend to rise; pages that don't tend to fall. So the title compounds: a better title both helps you rank AND helps you earn the clicks that further help you rank.

For a D2C brand, getting the title right on a top product or collection page can produce a 10-30% CTR uplift in 30-60 days with no other changes. Across a portfolio of 50 pages, that's a meaningful traffic delta from a half-day of work.

## Core concepts

- **Length and truncation** — Google truncates titles at roughly 580 pixels, which translates to about 50-60 characters in most fonts. Beyond that the title is cut with an ellipsis. The first 50-60 characters are what's actually seen and clicked.
- **Primary keyword placement** — the target cluster's primary keyword should appear in the title, ideally in the first 50 characters. Front-loaded keywords carry more weight.
- **Brand placement** — convention is `[Page Topic] — [Brand]` or `[Page Topic] | [Brand]`. Brand at the front (`[Brand] — Page Topic`) is fine for the homepage and for highly trusted brands but burns characters on every other page.
- **Intent alignment** — the title should reflect the intent of the cluster. A commercial-intent page's title reads differently from an informational-intent page's title, even on the same topic ("Best Refillable Laundry Detergents 2026" vs. "How Refillable Laundry Detergents Work").
- **CTR triggers** — modifiers that lift CTR when used honestly: year ("2026"), specificity ("12-Pack"), comparisons ("vs. Liquid"), benefits ("Plastic-Free"), category modifiers ("for Babies"). Don't stuff — use one, maybe two.
- **Google rewrites** — Google sometimes rewrites titles in the SERP if it thinks yours is misleading or under-descriptive. Stay specific and accurate; rewrites are a signal something's off.

## A worked example

> **Scenario:** The D2C refillable cleaning brand has a collection page at `/collections/refillable-laundry` ranking position 9 for "refillable laundry detergent" (1,300/mo). The current title is `Laundry — Refillable Cleaning Co`. They want to lift CTR and push to top 5.
>
> **Step 1.** Pull the cluster from `clusters/cluster-map.md`. Cluster T01 has primary `refillable laundry detergent`, supporting keywords `refill laundry detergent`, `eco laundry detergent refill`, `zero waste laundry detergent`, `plastic free laundry detergent`. Intent: transactional. Page type: collection.
>
> **Step 2.** Generate variants:
>   - `Refillable Laundry Detergent — Plastic-Free Refills | Refillable Cleaning Co`
>   - `Refillable Laundry Detergent: Zero-Waste Refills + Strips`
>   - `Refillable Laundry Detergent — Eco Refills, Free Shipping`
>   - `Plant-Based Refillable Laundry Detergent — Refillable Cleaning Co`
>
> **Step 3.** Score each: position of primary keyword (front), length (~55 chars), intent fit (transactional → commercial proof points), brand voice (warm, confident), differentiation against the SERP. Pick variant 1.
>
> **Step 4.** Implement, request indexing in GSC, monitor CTR + position over 30 days.
>
> **Step 5.** Result after 4 weeks: position 5, CTR 4.1% (up from 1.8%). Estimated +35 monthly clicks, on a page that previously needed no other changes.

## How to do it

1. **Pick a page.** Don't optimise titles in a vacuum — pull from a list of priority pages (top 20 by traffic, or the SEO Wins backlog). Title rewrites are a quick-win archetype.
2. **Pull the target cluster.** Each page targets one cluster. Look up its primary + supporting keywords and the intent. If there's no cluster yet, run [Keyword Clustering](../../01.%20Strategy/04.%20Keyword%20Clustering/README.md) first.
3. **Look at the SERP.** Run the primary keyword in incognito in your target country. Read the top 10 titles. Note: format conventions, modifiers used, what a click-through-rate winner looks like in this SERP. Don't copy — differentiate while staying in-format.
4. **Draft 4-6 variants.** Different angles, different modifier combinations, different brand placements. Variants force you to compare instead of marrying the first idea.
5. **Score each.** Length, primary keyword placement, intent fit, brand voice fit, SERP differentiation, CTR-trigger usage. The `generate-title-tags` skill produces this scoring automatically.
6. **Pick one.** The highest-scoring variant that you'd actually be willing to publish.
7. **Implement and request indexing.** Update the title in your CMS, push live, request indexing of the URL in Google Search Console. Most platforms will reflect the new title in the SERP within 1-7 days.
8. **Monitor for 30 days.** Track CTR (GSC), position (GSC or rank tracker), and clicks. If CTR drops vs. the old title, revert or re-test a different variant.

## Common pitfalls

- **Treating title and H1 as the same.** They serve different roles and can be different — your title is for the SERP audience (must include the keyword + drive a click), your H1 is for the on-page audience (must orient the reader). Often they overlap, but don't force it.
- **Front-loading the brand.** Putting your brand name first works for the homepage and a handful of name-recognised brands. For everyone else it burns the most valuable real estate.
- **Stuffing modifiers.** "Best Refillable Plastic-Free Eco Non-Toxic Plant-Based Laundry Detergent 2026 — Brand" is not better than a clean title. One modifier, two at most.
- **Year-stamping pages that don't need it.** Year modifiers help on commercial / "best of" content. They actively hurt on evergreen product or service pages.
- **Misleading titles to bait clicks.** Google penalises clickbait. The CTR uplift is short-term; the rewrite or rank drop is long-term.
- **Optimising titles in isolation from intent.** Same page, different intent → different title. A roundup-intent page's title pattern is "Best X for Y," not "Buy X."
- **Forgetting to monitor.** Title rewrites should be measured. If you don't track CTR, you won't know which patterns work for your domain.

## Skills in this toolkit

- **[generate-title-tags](skills/generate-title-tags/SKILL.md)** — takes a page URL (or proposed page), the target cluster, and the business profile; produces 4-6 scored title-tag variants with explicit reasoning, plus a recommendation. Optionally runs at list scale on a backlog of priority pages.

## Related topics

- **[02. Descriptions](../02.%20Descriptions/README.md)** — almost always rewritten alongside the title, since both affect SERP CTR.
- **[03. Header Structure](../03.%20Header%20Structure/README.md)** — H1 often aligns with title, though they don't have to be identical.
- **[01. Strategy / 04. Keyword Clustering](../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — provides the cluster's primary + supporting keywords every title decision references.
- **[01. Strategy / 02. Search Intent](../../01.%20Strategy/02.%20Search%20Intent/README.md)** — intent dictates the title pattern (commercial → "Best X," transactional → product-led, informational → "How to X").
- **[07. Analytics / 02. Search Console](../../07.%20Analytics/02.%20Search%20Console/)** — GSC's queries report is where you measure CTR before and after.

## Further reading

- [Google Search Central — Title links best practices](https://developers.google.com/search/docs/appearance/title-link) — the canonical Google guidance, including how Google decides when to rewrite your title.
- [Ahrefs — How to Write Title Tags for SEO](https://ahrefs.com/blog/title-tag-seo/) — practitioner walkthrough with examples and SERP-pattern analysis.
- [Moz — Title Tag SEO Guide](https://moz.com/learn/seo/title-tag) — the foundational reference; less recent, but solid on the core mechanics.
- [Backlinko — How to Write Click-Worthy Titles](https://backlinko.com/title-tag-seo) — heavy on the CTR-trigger side; useful complement to the relevance-side guidance.
- [Aleyda Solis — Title Tag Optimisation Templates](https://www.aleydasolis.com/) — page-type-specific title templates (product, category, blog, comparison) that scale across a portfolio.
