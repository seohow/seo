# Header Structure

> The H1/H2/H3 outline of a page. Tells Google how the content is organised, gives users an at-a-glance map, and dictates whether the page can answer multiple sub-questions in one place.

## What it is

Header structure is the hierarchy of `<h1>`, `<h2>`, `<h3>`, `<h4>` tags inside the body of a page. Together they form an outline — like a table of contents — that both humans (skimming) and Google (parsing) use to understand what the page is about and how it's organised.

The convention: **one H1 per page** (the on-page title, often but not always matching the meta title), **multiple H2s** for major sections, **H3s nested under H2s** for sub-sections, and so on. Headings are semantic, not just visual. Using `<h2>` because you want bigger text is the wrong instinct — use CSS for that. Use heading tags to communicate structure.

## Why it matters

Three reasons. First, headers are a strong topic signal — Google reads H1/H2/H3 as a compressed summary of what the page covers. Pages with clear headers covering multiple related questions can rank for *clusters* of queries, not just one.

Second, headers are how featured snippets, "People Also Ask" boxes, and the new AI Overviews pull content. A clear H2 followed by a 40-60 word answer is the #1 way to earn featured-snippet placement.

Third, on long pages, headers are where readers decide whether to keep scrolling. A reader who lands on a 2,000-word post and can't see the section they want in the first scroll is a reader who bounces. Strong headers convert scanners into readers.

For a D2C brand, headers do the heaviest lifting on collection pages, comparison pages, FAQ pages, and pillar/blog content. Product pages depend less on header depth (the structure is often dictated by the PDP template), but a well-structured FAQ section on a PDP can pull featured snippets.

## Core concepts

- **One H1 per page.** Multiple H1s confuse Google and accessibility tools alike. The H1 is the on-page title — singular.
- **Don't skip levels.** H1 → H3 (with no H2 in between) breaks the outline. The hierarchy should descend cleanly: H1 → H2 → H3 → H4.
- **H2s are the section signal.** Most ranking value beyond the H1 lives at the H2 level. Treat H2s as the "what would I put in a table of contents?" question.
- **Question-form H2s win featured snippets.** "How does hydrating serum work on skin?" is more snippet-friendly than "How it works." The literal question matches the literal query.
- **Semantic, not stylistic.** A page might have a small subtitle that's visually less prominent but is structurally an H2. Use the heading tag for hierarchy, not for size.
- **Headers carry keyword signal — without stuffing.** H2s should naturally include cluster-related variants (supporting keywords from your cluster map). Don't repeat the primary keyword in every H2; do use the cluster's full vocabulary across the H-structure.

## A worked example

> **Scenario:** The D2C brand has a blog post at `/blog/how-hydrating-serum-works` targeting cluster I03 (informational). Primary: "how does hydrating serum work on skin" (1,800/mo). Supporting: "is hydrating serum good for acne," "vitamin c serum side effects," "can you use serum with moisturizer," "serum vs moisturizer." Current structure: H1 = "Hydrating Serum," then 9 H2s like "Section 1," "Benefits," "Risks," "FAQ" — generic, not query-shaped, snippet-impossible.
>
> **Step 1.** Pull the cluster + supporting keywords. Notice 4 of the supporting keywords are themselves common queries with their own People-Also-Ask presence.
>
> **Step 2.** Restructure:
>   - H1: "How Does Hydrating Serum Work on Skin? A Plain-Language Guide"
>   - H2: "What is a hydrating serum, exactly?"
>   - H2: "How does hydrating serum hydrate skin?"
>     - H3: "The absorption process"
>     - H3: "What's actually in a hydrating serum"
>   - H2: "Is hydrating serum actually effective?"
>     - H3: "Clinical test results"
>     - H3: "Where it falls short (extreme dryness, compromised barriers)"
>   - H2: "Hydrating serum vs moisturizer"
>   - H2: "Is hydrating serum good for acne-prone skin?"
>   - H2: "How to use hydrating serum"
>   - H2: "Best hydrating serums to buy"
>
> **Step 3.** For each question H2, ensure the first 40-60 words after the heading directly answer the question. This is the snippet-pull pattern.
>
> **Step 4.** Implement, request indexing. After 30 days the page is now appearing in 3 People Also Ask boxes for related queries and holding a featured snippet on "is hydrating serum good for acne-prone skin" — net +315 monthly clicks across the cluster.

## How to do it

1. **Pull the cluster.** Headers should mirror the cluster's primary + supporting keywords. From `clusters/cluster-map.md`, take the page's cluster row.
2. **Read the SERP for the primary query.** Note what page-types rank, especially the featured snippet's source page and structure. The snippet pattern tells you the heading-level format Google considers most useful for this query.
3. **Plan the outline before touching the page.** Sketch H1 → H2s → H3s in a list. The outline alone should be a coherent answer to the primary query.
4. **Make 60-80% of H2s question-form** for informational and commercial intents. For transactional pages (PDP, collection), question-form is less important — go for clear functional sections (Description, Features, How to Use, Reviews, FAQs).
5. **Each H2 should map to one supporting keyword or sub-intent.** This is how a single page ranks for a *cluster*, not just the primary keyword.
6. **Place keyword-bearing H2s above the fold ideally**, or at least in the first half. Top-of-page H2s carry slightly more weight than bottom-of-page ones.
7. **Audit H1 vs. meta title.** They can match exactly, or differ slightly (title optimised for SERP truncation/CTR; H1 optimised for in-page reading). Don't let them contradict each other.
8. **Check for broken hierarchy.** No skipping (H1 → H3); no two H1s; no H2s used for visual emphasis where H3 is the real semantic level. The `audit-header-structure` skill catches these.
9. **Implement and re-index.** Push the new structure live, request re-indexing in GSC.

## Common pitfalls

- **Multiple H1s.** The most common structural mistake. Often introduced by template designers using H1 for a logo or a banner.
- **Generic H2s.** "Introduction," "Features," "Conclusion," "FAQ" — these don't signal anything to Google and don't help users skim. Use specific, keyword-aware section names.
- **H-tags used for styling.** "I want this text to be small but bold so I'll use H4" — wrong. Use a CSS class. H-tags must reflect document structure.
- **Skipped levels.** H1 → H3 with no H2 between. Breaks accessibility, confuses parsing.
- **Stuffed H2s.** "Best Hydrating Serum: Top 10 Hydrating Serums Reviewed for 2026 Hydrating Serum Buyers." Read it aloud — if you can't, neither can a human or Google.
- **Ignoring the snippet pattern.** A page that aspires to rank for an informational query but has no question-form H2s is leaving featured-snippet eligibility on the table.
- **Treating PDP and blog templates the same.** Product pages have template-locked structure (often correct — Title, Price, Description, Reviews, FAQs as H2s). Blog posts have flexibility. Optimise within each template's constraints.

## Skills in this toolkit

- **[audit-header-structure](skills/audit-header-structure/SKILL.md)** — analyses a page's current H1/H2/H3 hierarchy, identifies structural issues (multiple H1s, skipped levels, stuffing), and proposes a restructured outline aligned to the page's target cluster, intent, and SERP.

## Related topics

- **[01. Title](../01.%20Title/README.md)** — the H1 often aligns with (but doesn't have to match) the meta title.
- **[07. Content Optimization](../07.%20Content%20Optimization/README.md)** — header restructuring is usually paired with content rework; together they cover the page-body layer.
- **[03. Technical SEO / 04. Schema Markup](../../03.%20Technical%20SEO/04.%20Schema%20Markup/)** — FAQ-pattern H2s often pair with FAQPage schema for featured-snippet eligibility.
- **[01. Strategy / 04. Keyword Clustering](../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — cluster's supporting keywords drive what each H2 should target.
- **[09. AI SEO / 04. SERP Features](../../09.%20AI%20SEO/04.%20SERP%20Features/)** — featured snippets, People Also Ask, AI Overviews; structurally dependent on header patterns.

## Further reading

- [Google Search Central — Heading tags guidance](https://developers.google.com/search/docs/appearance/structured-data/article) — embedded throughout Google's structured-content guidance.
- [Ahrefs — How to Use Header Tags](https://ahrefs.com/blog/header-tags/) — practitioner walkthrough with examples of restructure-driven traffic gains.
- [Backlinko — Featured Snippet Optimisation](https://backlinko.com/hub/seo/featured-snippets) — heavy on the H2-question + 40-60 word answer pattern.
- [WCAG 2.1 — Heading Levels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels) — accessibility-first framing; reinforces the semantic-not-stylistic principle.
- [Aleyda Solis — Templates for Content Outlines](https://www.aleydasolis.com/) — page-type-specific outline templates that scale across a content portfolio.
