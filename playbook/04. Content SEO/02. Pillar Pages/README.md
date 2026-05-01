# Pillar Pages

> Comprehensive hub pages that cover a topic broadly and link to spoke pages covering subtopics in depth. The architectural backbone of the topic-cluster pattern — and the single most-load-bearing piece of content most brands ship.

## What it is

A pillar page is a long, structured page that comprehensively covers a broad topic — and links out to *spoke pages* (typically blog posts) that cover specific sub-topics in more depth. Together, the pillar + its spokes form a *topic cluster* (covered in the next leaf). The pillar's job is to demonstrate topical breadth and authority on the parent topic; the spokes' job is to win specific informational queries.

For Field & Sun, candidate pillars include "complete guide to mineral sunscreen" (parent of all the sun-care informational spokes) and "complete guide to skincare ingredients" (parent of vitamin C, niacinamide, hyaluronic acid sub-topics). One brand typically has 3-7 pillars total — fewer than blog posts, but each one carries dramatically more weight.

## Why it matters

Three reasons. First, **pillars rank for high-volume head terms that individual blog posts can't reach**. A spoke post on "is zinc oxide safe daily" can win that long-tail query but won't rank for the broader "mineral sunscreen guide" head term. The pillar can. Pillars are how you compete at the top of the funnel.

Second, **pillars consolidate topical authority signals to one page**. Google increasingly rewards sites that demonstrate depth on a topic. A 4,000-word pillar that links to 8 detailed spokes signals "this site is the authority on this topic" in a way that 8 standalone blog posts don't.

Third, **pillars are the highest-leverage internal-linking node**. Every spoke links *up* to the pillar; the pillar links *down* to every spoke. This concentrates ranking signal on the pillar (which then ranks for the head term) and distributes it back to spokes (which rank for long-tail). Without a pillar, the cluster is just a pile of disconnected posts.

For Field & Sun, building 2-3 strong pillars (sun care, skincare ingredients, refills/sustainability) is likely a higher-ROI move than shipping 10 more standalone blog posts.

## Core concepts

- **Pillar = hub.** The pillar is the central page; spokes link to it and from it. The pattern is sometimes called "hub and spoke" or "pillar and cluster."
- **Length and depth.** Pillars are typically 3,000-8,000 words — long enough to demonstrate comprehensiveness, structured enough to be readable. Not a wall of text; a curated tour with sections that link out.
- **Pillar primary keyword = head term.** The pillar targets the broadest version of the topic (e.g. "mineral sunscreen guide"). Spokes target long-tail variants (e.g. "is zinc oxide safe daily").
- **Pillar should rank for cluster head terms.** If the pillar isn't ranking for its primary keyword 6-12 months after publishing, something's wrong — either the topical fit is weak, the page lacks depth, or external authority is too low.
- **Pillar isn't a roundup of links to spokes.** It's a real page with substantive content covering the topic. The links to spokes are *embedded in the content*, not a separate "see also" list.
- **Pillar pages can be on the blog or as a dedicated `/guides/` section.** Either works. `/guides/` paths are often clearer for users and easier to internally link from the main nav.
- **Pillar pages need own product testing / brand-distinct angles.** The depth signal Google rewards is *substantive*, not "we summarised everything Wikipedia says about X." Bring something distinctive.

## A worked example

> **Scenario:** Field & Sun has 8 sun-care blog posts published or planned (per the editorial calendar). Several are spoke-shaped: "how does mineral sunscreen work," "is zinc oxide safe daily," "mineral vs chemical sunscreen," "mineral sunscreen for sensitive skin," "tinted vs untinted mineral sunscreen," etc. The brand wants to consolidate these into a topic cluster.
>
> **Step 1.** Decide the pillar topic. The natural parent of these spokes is "mineral sunscreen guide" or "complete guide to mineral sunscreen." Search volume on that head term is ~1,200/mo; SERP top 5 is dominated by Wirecutter, NYT, EWG. Realistic position target: 6-10 (top of page 1).
>
> **Step 2.** Run `design-pillar-page`. Skill produces a brief: pillar URL `/guides/mineral-sunscreen` (new), target word count 4,500, structure with 8 H2s each linking out to a spoke, brand-distinct angle (own product testing on three skin tones, ingredient percentages, dermatologist-reviewed claims).
>
> **Step 3.** Brief the writer via `generate-content-brief`. Writer drafts the pillar over 3-4 weeks (longer than a typical blog post — pillars are slower to produce).
>
> **Step 4.** Implement. Build at `/guides/mineral-sunscreen`. Internal links from every existing sun-care spoke point at this pillar in their intro paragraphs. The pillar links to all 8 spokes in its body content. Schema markup (Article + FAQPage if FAQs are included) added.
>
> **Step 5.** Result: pillar reaches position 9 within 6 months for "mineral sunscreen guide" (target met). More importantly, the cluster's spokes lift 2-5 positions on average — the linking + topical-authority signal flows both ways. Cluster traffic increases ~3x over 6 months from a single new pillar plus the linking changes.

## How to do it

1. **Decide which clusters warrant pillars.** Not every cluster needs one. Pillars warrant the investment when:
   - The cluster has 5+ spoke-shaped sub-topics (under 5 and the pillar feels thin).
   - The head term has meaningful search volume (typically 500+/mo).
   - The brand has the depth to write something substantive on the topic.
   - Authority for the head term is realistic given the brand's domain rating.
   For Field & Sun: sun-care cluster meets all four criteria; refills cluster is borderline (small head term volume); vitamin-C cluster is dominated by publishers (Wirecutter, NYT) — pillar is a stretch goal there.
2. **Pick the pillar topic and primary keyword.** The pillar's primary keyword is the broadest version of the topic. Validate via SERP read — does the head term return guide-shaped pages that the brand could plausibly compete with?
3. **List the spoke pages (existing or planned).** From the cluster map. The pillar's outline should mirror the spokes — each H2 corresponds to a spoke topic.
4. **Design the pillar.** Use `design-pillar-page` to produce the structural brief: outline, target word count, brand-distinct angle, internal-link plan, schema strategy.
5. **Brief and write.** `generate-content-brief` for the writer; the writer drafts over 3-6 weeks. Pillars take longer than blog posts.
6. **Wire the cluster.** Update every spoke to link to the pillar (intro paragraph + relevant body sections). Update the pillar to link to every spoke in its body content. This wiring is the architectural payoff.
7. **Layer schema.** Article schema on the pillar, plus FAQPage schema if FAQs are included, plus BreadcrumbList. The pillar is a high-priority page for AI Overview and rich-result eligibility.
8. **Promote.** Outreach for backlinks (some publications prefer linking to "ultimate guide" content over individual posts). Internal-link prominence (homepage / nav / footer if relevant). Ideally social distribution.
9. **Monitor for 6-12 months.** Pillars rank slower than blog posts (longer page = longer indexing + ranking horizon). Don't declare success or failure before 6 months.

## Common pitfalls

- **Treating the pillar as a long blog post.** A pillar isn't just longer — it's *structurally different*. Hub function (links to spokes), broader scope, more comprehensive coverage.
- **Pillar without spokes.** A pillar in isolation underperforms. The cluster pattern only works when the spokes exist (or are planned, with internal linking added later).
- **Spokes don't link back.** Internal-link wiring is the architectural payoff. Without it, the pillar is just a long page on the blog.
- **Generic, summary-style content.** "Everything you need to know about X" pillars that summarise without depth or angle don't earn rank or links. The pillar needs original-research depth, brand-distinct testing, or expert perspective.
- **Wrong head term.** Picking a head term the brand can't realistically rank for. Pillars take 6-12 months to rank; if the SERP is dominated by Wirecutter and DR-80+ publishers, the pillar won't break top 10.
- **Year-stamping the pillar's title.** Pillars are evergreen; the title shouldn't say "2026" unless the topic is genuinely time-bound.
- **Over-scoping.** A 12,000-word pillar that takes 3 months to write often dies on the writer's desk. 3,500-5,500 words ships and earns rank just as well.
- **Not refreshing.** Pillars need annual refresh — update examples, update internal links to new spokes, update freshness signals (`dateModified` in schema). A 3-year-old pillar without refresh decays.

## Skills in this toolkit

- **[design-pillar-page](skills/design-pillar-page/SKILL.md)** — produces a pillar-page brief: target primary keyword, scope, full H1+H2 outline, target word count, supporting-spoke list, brand-distinct angle, internal-link plan, schema strategy, and acceptance criteria. Output is the spec a writer (human or AI) can produce a draft against.

## Related topics

- **[03. Topic Clusters](../03.%20Topic%20Clusters/README.md)** — pillars are the architectural unit; topic clusters are the broader pattern. Pair the two.
- **[01. Blog Content](../01.%20Blog%20Content/README.md)** — most spokes are blog posts. Pillar work depends on the editorial calendar that produces spokes.
- **[05. Evergreen Content](../05.%20Evergreen%20Content/README.md)** — pillars are usually evergreen by design; the longevity-first principles apply.
- **[08. Content Briefing](../08.%20Content%20Briefing/README.md)** — every pillar needs a brief; the briefing skill is universal.
- **[02. On-page SEO / 05. Internal Linking](../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — pillar work depends on the linking plan. They feed each other.
- **[02. On-page SEO / 03. Header Structure](../../02.%20On-page%20SEO/03.%20Header%20Structure/README.md)** — pillar pages depend on disciplined header structure more than any other content type.
- **[03. Technical SEO / 04. Schema Markup](../../03.%20Technical%20SEO/04.%20Schema%20Markup/README.md)** — Article + FAQPage + BreadcrumbList schema on the pillar.

## Further reading

- [HubSpot — Topic Clusters and the Pillar Page Model](https://blog.hubspot.com/marketing/topic-clusters-seo) — the original article that defined the pattern. Conceptually load-bearing.
- [Animalz — Pillar Pages and Topic Clusters in Practice](https://www.animalz.co/) — strong on the editorial side: how to actually build the pages.
- [Aleyda Solis — Content Hub Architecture](https://www.aleydasolis.com/) — practical templates connecting pillar work to information architecture.
- [Backlinko — Topic Cluster Examples](https://backlinko.com/hub/seo/topic-clusters) — examples and patterns, with screenshots.
- [Tom Critchlow — On Pillar Pages](https://tomcritchlow.com/) — the strategic framing of when pillars are worth the investment vs when they aren't.
