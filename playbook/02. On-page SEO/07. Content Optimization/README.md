# Content Optimization

> The body content of the page itself: depth, structure, semantic coverage, terminology, examples, and proof. The deepest piece of on-page work — and the one with the biggest ranking lift when done right.

## What it is

Content optimization is the rework of a page's body copy to better serve a target keyword cluster, intent, and audience. It's distinct from creating new content (which is covered in [04. Content SEO](../../04.%20Content%20SEO/)) — content optimization works on a page that already exists. The goals are: rank for more of the cluster's supporting keywords, deliver on the searcher's intent more completely, and read better than the SERP competition.

Content optimization is the deepest piece of on-page work. Title, description, headers, URL — those are 30-90 minute jobs per page. Content optimization is often a 4-8 hour job per page, sometimes more. The trade-off is the lift: when a page goes from generic to comprehensive, the rank improvement compounds across many supporting keywords, not just one.

## Why it matters

Modern Google ranks pages on **semantic depth** more than keyword density. A page that comprehensively covers a topic — answering the primary query, the related sub-questions, the comparisons searchers make, the objections they raise — outranks shallow pages even if those shallow pages have the keyword in more places.

For a D2C brand, content optimization is most valuable on:

- **Striking-distance pages** (positions 11-30) — already in the conversation, but losing on depth/quality.
- **Pages that should rank for a cluster but only rank for the primary** — depth across supporting keywords usually unlocks 5-10x more cluster traffic.
- **Pages where the SERP top 5 are clearly more thorough** — Wirecutter, NYT, Good Housekeeping. You won't outwrite them on resources but you can win on specificity, freshness, brand-distinct angles, and structured answers.
- **Old pages with traffic decay** — Google rewards freshness for many topics; a re-write of an 18-month-old post often beats writing a new one.

The work is also where AI assistance produces the largest measurable time savings. A skill that reads the page, the cluster, the SERP, and the brand voice — then proposes a specific, structured rework — turns a 6-hour job into a 1-hour decision-and-edit job.

## Core concepts

- **Semantic depth** — covering not just the primary keyword but the related concepts, sub-topics, comparisons, and entities Google associates with the primary. Tools that surface this: surfer SEO, Clearscope, NeuronWriter; or manual SERP reading + cluster-map cross-reference.
- **Intent fidelity** — does the page answer what the searcher actually wants? An informational page should explain; a commercial page should compare; a transactional page should convert. Intent-misaligned content underperforms regardless of word count.
- **E-E-A-T signals** — Experience, Expertise, Authoritativeness, Trust. Demonstrated through specifics, credentials, primary research, customer examples, dates, and the absence of vague generalisations. Modern Google reads these signals heavily.
- **Freshness** — for many topics, recent dates and recent references signal relevance. Dating examples ("In 2026, US households produce…") and updating quarterly is meaningful for evergreen-but-decaying content.
- **Format match** — even with great content, format mismatch (a wall-of-text page targeting a list-format SERP) underperforms. Match the dominant format the SERP rewards.
- **Comparative clarity** — "Best X for Y" content wins when the comparison is structured: a table, a clear methodology, distinct picks for distinct use cases. Vague "you might consider" reasoning loses.
- **Cluster coverage** — the page should explicitly address each supporting keyword in the cluster. The `audit-header-structure` skill ensures the H2s do this; content optimization ensures the body content delivers on each.

## A worked example

> **Scenario:** Field & Sun's blog post `/blog/mineral-vs-chemical-sunscreen` ranks position 14 for "mineral vs chemical sunscreen" (1,800/mo). Article is 850 words, 4 H2s, no comparison table, no swatch photos, no specific brand-tested observations. SERP top 5 are: NYT Wirecutter (4,200 words, comparison table, test methodology, dermatologist quotes), Reddit thread, The Strategist, a personal skincare blog (1,800 words, photo-rich), and a YouTube video.
>
> **Step 1.** SERP read. Wirecutter dominates with a "tested and reviewed" depth signal Field & Sun can't fully match. But angles are open: skin-tone-specific swatch results (most reviews don't show range), sensitive-skin reactivity, and brand-specific ingredient transparency at percentages.
>
> **Step 2.** Cluster cross-check. Cluster I04: primary "mineral vs chemical sunscreen"; supporting "is mineral sunscreen better," "does mineral sunscreen leave white cast," "mineral sunscreen for sensitive skin," "is zinc oxide safe daily." Current content addresses 1 of 4 supporting keywords.
>
> **Step 3.** Plan the rework:
>
> - New H2 covering each missing supporting keyword.
> - Add a comparison table (mineral vs chemical, side-by-side on UV filters, skin feel, white-cast risk, reapplication, finish on skin, cost per ml).
> - Add a "tested on three skin tones" section: Mineral Sun Drops swatched on light, medium, deep skin — with photos and observed white-cast / blendability ratings.
> - Add freshness markers (date the swatch test, name the conditions and skin tones tested).
> - Add a "where mineral falls short" section to address objections honestly (greasy finish on humid days, harder to reapply over makeup). Counter-intuitively, this lifts rankings.
> - Update intro: 40-60 word direct answer to "mineral vs chemical sunscreen — which should I use?" — featured-snippet-eligible.
>
> **Step 4.** Implement: rewrite + add 2,400 words, embed comparison table, photograph and add 5 new images (with proper image-optimisation per `audit-images`). Update internal links to pillar + sibling spokes per linking plan.
>
> **Step 5.** Result: in 60 days position rose from 14 to 6, page enters featured snippet for "does mineral sunscreen leave white cast," cluster traffic across all 5 keywords goes from ~80/mo to ~520/mo.

## How to do it

1. **Pick a page from the SEO Wins backlog.** Content optimization is a P1/P2 effort archetype — it ships in weeks 3-8 of a typical quarter. Don't pick randomly; pull from the prioritised backlog.
2. **Pull the cluster + intent.** From `clusters/cluster-map.md`. Confirm the page is mapped to a cluster and the cluster's intent is right.
3. **Read the SERP at depth.** Top 5 pages. Word count, H-structure, format (article, listicle, comparison, video, mix), depth signals (research, expert quotes, original photos, tables), freshness (last updated dates).
4. **Audit the current page.** Word count, H-structure, supporting-keyword coverage, depth signals, freshness, format match. Compare to the SERP.
5. **Plan the rework.** Specific changes: which H2s to add (mapped to which supporting keywords), which sections to expand, which sections to cut, what new evidence/proof to introduce, which format elements to add (table, list, photos, FAQs).
6. **Identify what only this brand can do.** Comparative clarity beats Wirecutter only on angle, not on resources. Brand-distinct angles: own product testing, customer stories, founder perspective, market-specific knowledge (e.g. EU regs for an EU brand), niche use cases.
7. **Write or rewrite.** Draft the new sections. Tune to brand voice. Use semantic terminology consistent with the cluster's vocabulary, not just the primary keyword.
8. **Layer in E-E-A-T signals.** Dates, named methodologies, photo evidence, expert quotes (where genuine), customer examples, links to primary sources.
9. **Check intent fidelity.** Read the rewrite as a searcher with the primary query. Did it answer the question? Cover the sub-questions? Match the SERP format?
10. **Implement and re-index.** Update the page, request indexing in GSC, monitor rank + click change for 30-60 days.
11. **Document the rewrite.** Note in the per-business CLAUDE.md what worked: which signals, format changes, or angles produced lift. The next content optimization on a similar page benefits from the pattern.

## Common pitfalls

- **Word-count fixation.** Going from 800 to 4,000 words doesn't help if 3,200 of them are filler. The right word count is "enough to comprehensively answer the cluster" — sometimes 1,200, sometimes 4,500.
- **Stuffing the keyword.** Modern Google reads natural language. Keyword density above ~1-2% is detectable as manipulation.
- **Optimising the wrong intent.** A product page that's losing to blog posts in the SERP doesn't need more product-page polish — it needs to either accept it should be a blog post or shift to a different cluster where the intent matches.
- **Trying to outwrite Wirecutter on Wirecutter's terms.** They have more reviewers, more budget, more methodology. Win on angle (specifics they can't), freshness (you can update quarterly; they update annually), brand-distinct examples.
- **Skipping the SERP read.** Content optimization without reading the SERP is shadow-boxing.
- **Adding sections without removing.** Content rework should be surgical. Cut the filler. A 2,400-word rewrite might mean removing 800 words and adding 1,200.
- **Forgetting freshness markers.** Undated content reads stale. Date the examples, date the tests, list "Last updated" near the byline.
- **One-and-done content optimization.** Pages decay. Set a 6-12-month review cadence on the top 20 pages.

## Skills in this toolkit

- **[optimize-page-content](skills/optimize-page-content/SKILL.md)** — takes a page (URL + current content), the target cluster, the SERP context, and the business profile, and produces a structured rework plan: which sections to add/expand/cut, brand-distinct angles to introduce, format changes, E-E-A-T signal recommendations, and either a section-by-section outline or a draft rewrite (the user picks the depth of output).

## Related topics

- **[03. Header Structure](../03.%20Header%20Structure/README.md)** — content rework usually pairs with header restructure; run that skill first or alongside.
- **[01. Title](../01.%20Title/README.md)** + **[02. Descriptions](../02.%20Descriptions/README.md)** — when the content shifts, titles and descriptions usually need a refresh too.
- **[04. Content SEO / 07. Content Refresh](../../04.%20Content%20SEO/07.%20Content%20Refresh/)** — the systematic approach to refreshing pages at scale; this skill is the per-page execution.
- **[01. Strategy / 04. Keyword Clustering](../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — provides the supporting keywords that drive coverage decisions.
- **[01. Strategy / 03. Competitor Analysis](../../01.%20Strategy/03.%20Competitor%20Analysis/README.md)** — the SERP read for content optimization is essentially a per-page competitor analysis.
- **[09. AI SEO / 01. Content Optimization](../../09.%20AI%20SEO/01.%20Content%20Optimization/)** — the AI-specific layer (LLM-friendly structure, citation-ready content) which can be layered on top.

## Further reading

- [Google Search Central — Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — the canonical guidance, especially on E-E-A-T and the helpful content system.
- [Google's Quality Rater Guidelines](https://services.google.com/fh/files/misc/hsw-sqrg.pdf) — what human raters look for; the most important signal of what Google rewards.
- [Animalz — How to Write Better Content](https://www.animalz.co/blog/) — strong on the editorial side; comparative clarity and structured argumentation.
- [Surfer SEO / Clearscope methodology blogs](https://surferseo.com/blog/) — semantic-coverage tools' own writing is good on the depth-signal mechanics.
- [Aleyda Solis — Content Audits and Updates](https://www.aleydasolis.com/) — practical templates for systematic content rework at scale.
