# Blog Content

> The editorial workhorse. The largest single category of content most brands ship — educational explainers, comparisons, how-tos, ingredient deep-dives. The format that fills out most of the cluster map.

## What it is

Blog content is the body of editorial articles published on a brand's blog or content section. For an ecom brand, blog content typically targets *informational* and *commercial* clusters — the queries customers ask before they're ready to buy. "How does mineral sunscreen work." "Mineral vs chemical sunscreen." "Best vitamin C serum for sensitive skin." These are blog clusters, not product clusters.

For Field & Sun, blog content makes up the largest share of pages by count (25 posts vs 8 PDPs and 4 collections in the current state). Most clusters in the cluster map land here. The blog is where customer education happens, where SERP visibility on informational queries gets earned, and where brand-distinct angles (own product testing, ingredient transparency, founder perspective) live.

## Why it matters

Three reasons. First, **informational and commercial clusters dominate most ecom keyword maps**. For a typical D2C brand, 60-80% of the cluster map's queries are non-transactional — they're upstream of the purchase decision. Blog content is the format that serves them.

Second, **blog content compounds**. A single product-page rank produces traffic on a small set of transactional queries. A single blog post can rank for a cluster of 5-50 informational variants over years. Compounding works in the brand's favour if the content is durable and targets evergreen-leaning topics.

Third, **blog content is where brand voice and expertise show up most visibly**. Product pages are template-constrained. Collection pages are minimal. The blog is where Field & Sun's "ingredient-led, plain-language, percentages-not-claims" voice differentiates from Supergoop, Saie, and ILIA. The voice is part of the moat.

## Core concepts

- **Cluster-mapped, not standalone.** Every blog post should target a cluster from `clusters/cluster-map.md`. Standalone "let's write about X" posts rarely earn sustained traffic and dilute topical focus.
- **Editorial calendar.** A 30/60/90-day plan: which clusters get posts, in what order, with what cadence. Without a calendar, blog production drifts toward whatever feels interesting that week, not what the strategy actually needs.
- **Cadence vs depth trade-off.** Cadence (e.g. 4 posts/month) produces breadth across the cluster map fast. Depth (e.g. 1 long-form post/month) produces fewer pages but more durable rank. Most content-led brands settle around 2-4 substantive posts per month, which balances both.
- **Post archetypes.** Most blog posts fall into a handful of shapes: explainer ("how does X work"), comparison ("X vs Y"), roundup ("best X for Y"), how-to ("how to do X"), ingredient/feature deep-dive, tutorial, opinion/take. Each archetype has its own structural conventions.
- **Spoke vs standalone.** Some blog posts are spokes (part of a topic cluster — link to a pillar, sit alongside sibling spokes). Others are standalone (target their own cluster but aren't part of a larger architecture). Most should be spokes; standalone is a tactical exception.
- **Brand-distinct angle.** What can THIS brand say that the SERP top 10 cannot? Own product testing, customer stories, founder expertise, market-specific knowledge, niche use cases. The angle is part of the brief.
- **Editorial calendar ≠ content brief.** The calendar plans the *what* and *when*; the brief specifies the *how*. Both matter; they live at different scales.

## A worked example

> **Scenario:** Field & Sun has 28 clusters in `clusters/cluster-map.md`. Of those, 15 are informational and 5 are commercial — 20 cluster's worth of blog-shaped content. They've shipped 25 blog posts to date but coverage is uneven (general skincare and refill-system angles over-covered from earlier strategy; sun-care undercovered relative to seasonal demand).
>
> **Step 1.** Run `plan-blog-content`. The skill cross-references the cluster map (which clusters need pages?) with current blog inventory (which clusters already have pages?). Outputs a coverage matrix and a 90-day editorial calendar.
>
> **Step 2.** Coverage gaps surfaced: 8 informational sun-care clusters (e.g. "how does mineral sunscreen work," "mineral vs chemical sunscreen," "is zinc oxide safe daily") have no current post. Sun-care is the brand's seasonal-peak focus — these gaps are P0.
>
> **Step 3.** 90-day calendar:
>
> - Wk 1-2: 3 sun-care explainers ("how mineral sunscreen works," "is zinc oxide safe daily," "mineral sunscreen for sensitive skin").
> - Wk 3-5: 2 comparison posts ("mineral vs chemical sunscreen," "tinted vs untinted mineral sunscreen").
> - Wk 6-8: 2 ingredient deep-dives ("non-nano zinc oxide explained," "what's actually in our SPF").
> - Wk 9-12: 2 vitamin-C-cluster posts to start the Q4 rotation.
> - Plus 2 refresh efforts on existing decayed posts (handled separately by `plan-content-refresh`).
> Total: 9 new posts in 90 days, ~3/month — matches the team's content writer capacity.
>
> **Step 4.** Each post in the calendar gets a content brief via `generate-content-brief` before it's written.
>
> **Step 5.** Result: by end of Q3, sun-care cluster coverage is at 80%+ (vs 30% at start), in time for the May–August demand peak. Refresh work in parallel recovers existing decayed posts.

## How to do it

1. **Pull the cluster map.** From `clusters/cluster-map.md`. Identify which clusters are blog-shaped (informational + commercial intents) vs which belong elsewhere (transactional → product/collection; navigational → branded).
2. **Audit current blog inventory.** What's already published? Which clusters already have a covering post? Which don't?
3. **Surface coverage gaps.** Cluster-mapped topics with no current post. Especially priority: clusters tied to active business goals (e.g. sun-care for Field & Sun before seasonal peak).
4. **Decide the cadence.** What's the realistic content production capacity? Most brands underestimate the time per post. A substantive long-form post = 6-12 hours including research, brief, draft, edit, photos, internal links, publish. Plan for 2-4 substantive posts/month at most for a small content team.
5. **Sequence the calendar.** Priority gaps first, balanced across cluster types and matched to seasonality. Don't ship 4 sun-care posts in November when the demand peak is May.
6. **Brief each post.** `generate-content-brief` is the universal foundation. Every post in the calendar should have a brief before it's written.
7. **Write or commission.** The brief is the spec; writers (in-house, contractor, AI-assisted) produce the draft against the brief.
8. **Edit + ship.** On-page (title, description, headers, internal links) goes through the On-page SEO category's skills. Schema goes through Technical SEO.
9. **Monitor and feed back.** Ranking and traffic data on shipped posts informs which archetypes work for this brand and which don't. Update the calendar with the evidence.

## Common pitfalls

- **Writing without a cluster.** "We should write about X" without checking whether X is in the cluster map produces content that doesn't earn search traffic.
- **Writing without a brief.** Even great writers ship better content with a brief than without. The brief saves the editing round-trips and makes the content rankable.
- **Cadence over depth.** Shipping 8 thin posts a month doesn't beat shipping 2 substantive posts a month for SEO. Quality and depth compound; thinness decays.
- **Ignoring brand voice.** Generic blog content reads like every other brand's content. Field & Sun's voice (ingredient-led, plain-language, percentages-not-claims) is part of the moat — every post needs to honour it.
- **Treating every post as a standalone.** Most posts should be spokes in a topic cluster, with explicit links to a pillar and sibling spokes. Internal-linking strategy is part of the post's plan, not an afterthought.
- **Year-stamping evergreen topics.** "How does mineral sunscreen work in 2026" ages quickly. For evergreen, omit the year. For commercial / "best of" content, year-stamping is fine and even helps CTR.
- **Skipping the SERP read.** Every post should be planned against the actual SERP for its primary keyword. What ranks at positions 1-5? What's the dominant format? Without the SERP read, the post is shadow-boxing.
- **Producing faster than promotion can keep up.** New content needs internal links, social distribution, and outreach to compound. If you're shipping 4 posts a month but only 1 of them gets the post-launch wiring, the other 3 underperform.

## Skills in this toolkit

- **[plan-blog-content](skills/plan-blog-content/SKILL.md)** — produces a 30/60/90-day editorial calendar from the cluster map. Cross-references current blog inventory, surfaces coverage gaps, sequences posts by priority and seasonality, matches cadence to team capacity. Outputs the calendar plus per-post brief stubs that feed into `generate-content-brief`.

## Related topics

- **[08. Content Briefing](../08.%20Content%20Briefing/README.md)** — every post in the calendar gets briefed before it's written. The brief is the universal foundation across content types.
- **[02. Pillar Pages](../02.%20Pillar%20Pages/README.md)** — most blog posts are spokes under a pillar. Pillar work is the architectural counterpart.
- **[03. Topic Clusters](../03.%20Topic%20Clusters/README.md)** — the architectural pattern for how blog posts cluster around pillars.
- **[07. Content Refresh](../07.%20Content%20Refresh/README.md)** — refresh-vs-new-post is a real trade-off. Often refreshing an existing post beats writing a new one.
- **[01. Strategy / 04. Keyword Clustering](../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — provides the cluster map that drives the calendar.
- **[02. On-page SEO / 07. Content Optimization](../../02.%20On-page%20SEO/07.%20Content%20Optimization/README.md)** — when a blog post is published, on-page work happens via these skills.

## Further reading

- [Animalz — Content Strategy and Editorial Calendars](https://www.animalz.co/blog/) — strong practitioner content on editorial planning, post archetypes, and the cadence-vs-depth question.
- [Ahrefs — Blog Content for SEO](https://ahrefs.com/blog/seo-content/) — practitioner walkthrough on cluster-mapped blog content.
- [Aleyda Solis — Content Calendar Templates](https://www.aleydasolis.com/) — practical reusable templates.
- [Tomasz Tunguz / SaaS-side editorial calendars](https://tomtunguz.com/) — different vertical but the discipline transfers; useful for category breadth.
- [Google Search Central — Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — Google's canonical guidance on what counts as good content; informs every brief.
