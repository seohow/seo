# Content Briefing

> The universal foundation. A good brief is the difference between content that ranks and content that doesn't — regardless of whether the writer is human, AI, in-house, or contracted. Briefing is the most under-resourced step in most content programmes and the highest-leverage one to fix.

## What it is

A content brief is the structured spec a writer uses to produce a draft. It bundles everything the writer needs upfront: target keyword, intent, audience, outline, word count, tone, internal-link plan, schema considerations, asset requirements, and acceptance criteria. The brief sits between *strategy* (which says "we should write about X") and *production* (the draft itself).

In a well-run content programme, every page has a brief before any drafting starts — pillar, blog post, evergreen, refresh, programmatic template, even tool pages. Different page types have different brief shapes, but the discipline is universal. Skipping the brief is the single most common reason content underperforms: writers without briefs produce generic content, AI without briefs produces shallow content, and editors without briefs spend their time fixing structural issues the brief should have prevented.

For Field & Sun, the brief is the contract between strategy (cluster map, calendar, pillar architecture) and execution (the writer producing the draft). Without it, every post is reinvented from scratch and quality varies dramatically post-to-post.

## Why it matters

Three reasons. First, **briefs make content rankable rather than just publishable**. The SERP read, intent classification, outline, and internal-link plan all happen at brief time. If they happen later (or not at all), the content doesn't fit the SERP, doesn't serve the intent, and doesn't slot into the cluster architecture. Even excellent writers can't fix structural problems at draft time; the brief is where that work belongs.

Second, **briefs scale the work**. With briefs, the team can commission to multiple writers (in-house, contractors, AI-assisted) and get consistent quality. Without briefs, every writer reinvents the structure, voice gets inconsistent, and editorial overhead balloons. A brief-led content team can ship 3-5x more substantive content per editor than a brief-less one.

Third, **briefs are how strategy survives contact with production**. Strategic decisions — cluster placement, brand-distinct angle, voice constraints, schema requirements — get encoded in the brief. Without that encoding, strategy stays in someone's head and gets lost in the writing process. The brief is where strategy becomes executable.

For Field & Sun specifically: the brand voice constraints (no "clean beauty," no "non-toxic," no "chemical-free," percentages over claims) are fragile. They survive only if every brief encodes them. One brief that omits the constraints produces one post that violates them; multiplied over 30 posts a year, the brand voice erodes.

## Core concepts

- **The brief is the universal foundation.** Pillar, blog, evergreen, refresh, programmatic — all start with a brief. The shape varies; the discipline doesn't.
- **Brief depth scales with content depth.** A 1,500-word blog post needs a 1-2 page brief. A 4,500-word pillar needs a 4-6 page brief. A 20,000-page programmatic template needs a data-spec + template-design doc.
- **Brief encodes the SERP read.** What ranks at positions 1-5 for the primary keyword? What's the dominant format? What depth signals win? Briefs without SERP reads produce content that shadow-boxes against an imagined SERP.
- **Brief encodes intent.** Informational, commercial, transactional, navigational — different intents demand different content shapes. Brief locks in the intent before drafting.
- **Brief encodes the outline.** H1 + H2 + H3 structure. Section-by-section content hints. Internal links specified at the section level.
- **Brief encodes the brand-distinct angle.** What can THIS brand say that the SERP top 10 can't? If the brief doesn't have an angle, the content won't either.
- **Brief encodes the constraints.** Voice rules, FTC / FDA compliance, claim language, legal review needs. The brief's "do not say" list is as important as the "must say" list.
- **Brief encodes the acceptance criteria.** What does "done" look like, observably? Without acceptance criteria, "done" is a moving target.
- **Briefs go stale.** A brief written 6 months before the post ships may not match the current SERP. Briefs should ship within 4-8 weeks of writing.

## A worked example

> **Scenario:** Field & Sun has decided to ship a blog post on "is zinc oxide safe daily" as part of the sun-care cluster. The post is on the editorial calendar; a contractor will write it. Without a brief, the contractor will produce a generic explainer that misses the brand voice, doesn't fit the cluster, and doesn't reference Field & Sun's own product testing. With a brief, the contractor produces a draft that's 80% there on the first pass.
>
> **Step 1.** Run `generate-content-brief` with: cluster ID, primary keyword, target URL slug.
>
> **Step 2.** Skill produces:
>
> - **Header block:** primary keyword, search volume, intent (informational), target URL, word count (~1,500-2,000).
> - **SERP read:** top 5 are dermatologist-led explainers averaging 1,400-2,200 words. Common patterns: ingredient breakdown, FDA-approval context, comparison to other UV filters, FAQ block.
> - **Audience:** 28-45 sun-conscious skincare buyer; cares about ingredients; sceptical of claims; reads the back of the bottle.
> - **Outline:** H1 + 6 H2s with content hints per section. H2s mirror the spoke-relationship to the pillar.
> - **Brand-distinct angle:** Field & Sun publishes 20% non-nano zinc oxide percentages publicly; reference own product testing on three skin tones.
> - **Voice rules:** percentages over claims; no "non-toxic," "clean," "chemical-free"; reference dermatologist review status only if accurate.
> - **Internal links:** to mineral-sunscreen pillar (intro + closing); to "how mineral sunscreen works" (sibling spoke).
> - **Schema:** Article + FAQPage if FAQs included.
> - **Acceptance criteria:** observable list of 8 items.
>
> **Step 3.** Contractor writes the draft against the brief in 6-8 hours instead of 12-15. Editor's review focuses on prose-level issues, not structural ones (the brief prevented those). Post ships 60-70% faster than a brief-less production cycle.

## How to do it

1. **Decide which content needs a brief.** Trick question: all content. Even a 600-word announcement post benefits from a 1-page brief.
2. **Choose the brief shape based on content type.** Blog post → standard 2-page brief (this category). Pillar → use `design-pillar-page` (longer, hub-shaped brief). Cluster → use `design-topic-cluster` (architecture brief). Refresh → use `plan-content-refresh` (gap-analysis-based brief). Programmatic → use `design-programmatic-template` (data + template brief). Evergreen → use `brief-evergreen-content` (longevity-focused brief).
3. **Run the SERP read first.** Look at positions 1-5 for the primary keyword. Note word counts, format patterns, depth signals, "what wins." The brief's outline and word-count target are anchored to this read.
4. **Lock the intent.** Informational, commercial, transactional, navigational. Mismatch between intent and content shape is the single most common cause of underperformance.
5. **Write the brief.** Use `generate-content-brief` for the standard blog-post case. Output is a Markdown doc the writer works against.
6. **Pass the brief to the writer.** Brief should be self-contained — writer shouldn't need to ask follow-up questions to start drafting. If they do, the brief was incomplete.
7. **Edit against the brief.** Editorial review checks the draft against the brief's acceptance criteria. If the brief said "include FAQ section" and the draft doesn't, that's an edit (not a discussion).
8. **Save the brief alongside the published post.** The brief is the historical record of why the post is shaped the way it is. Useful 12 months later when refreshing.

## Common pitfalls

- **No brief.** Most common failure mode. Producing a brief takes 30-60 minutes; producing a post without a brief wastes 5-10 hours of writer + editor time and produces content that ranks worse.
- **Brief without SERP read.** The SERP is the only ground truth for what content shape wins for a given query. Skipping the SERP read produces briefs that shadow-box against imagined competition.
- **Brief without brand-distinct angle.** Generic "summarise what's already out there" briefs produce generic content that doesn't earn rankings or links. The angle is non-negotiable.
- **Brief without voice constraints.** For brands with strict voice (Field & Sun, regulated industries, distinctive tone), missing voice constraints produces drafts that read like every other brand's content.
- **Brief without internal-link plan.** Internal links specified at draft time are usually missed; they need to be in the brief, anchored to specific sections.
- **Brief without acceptance criteria.** "Make it good" isn't a criterion. "Includes 5-10 FAQ Q&As, references own product testing in at least one section, links to pillar in intro paragraph" is.
- **Brief that's too long.** A 12-page brief for a 1,500-word post is over-engineered. Brief depth should match content depth.
- **Brief that's stale.** A brief from 6 months ago may not match the current SERP. Refresh briefs that sit in the queue beyond 4-8 weeks.
- **Brief that's not used.** Briefs sitting unread by writers are worse than no briefs (pretend strategy). Make briefs short enough that writers actually read them.

## Skills in this toolkit

- **[generate-content-brief](skills/generate-content-brief/SKILL.md)** — produces a standard 2-page brief for a single blog post or short-form content piece. Pulls cluster context, SERP read, intent classification, outline, word count, brand-distinct angle, voice constraints, internal-link plan, schema requirements, and acceptance criteria. The universal foundation skill — every other Content SEO skill that produces "long-form content" expects this brief shape downstream.

## Related topics

- **[01. Blog Content](../01.%20Blog%20Content/README.md)** — every blog post on the editorial calendar needs a brief.
- **[02. Pillar Pages](../02.%20Pillar%20Pages/README.md)** — pillars get their own design brief via `design-pillar-page`; this skill produces the prose-level brief downstream of that.
- **[03. Topic Clusters](../03.%20Topic%20Clusters/README.md)** — cluster architecture decides what content to produce; briefs spec how each piece is built.
- **[05. Evergreen Content](../05.%20Evergreen%20Content/README.md)** — evergreen briefs are longer and emphasise longevity; uses `brief-evergreen-content` instead.
- **[07. Content Refresh](../07.%20Content%20Refresh/README.md)** — refresh work uses gap-analysis briefs via `plan-content-refresh`; this skill is for new content.
- **[01. Strategy / 02. Search Intent](../../../01.%20Strategy/02.%20Search%20Intent/README.md)** — intent classification is a brief input.
- **[01. Strategy / 04. Keyword Clustering](../../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — cluster placement is a brief input.
- **[02. On-page SEO / 07. Content Optimization](../../../02.%20On-page%20SEO/07.%20Content%20Optimization/README.md)** — on-page optimisation happens after the draft; brief inputs to it via the outline.

## Further reading

- [Animalz — Anatomy of a Content Brief](https://www.animalz.co/blog/) — the practitioner standard for brief shape and depth.
- [Aleyda Solis — Content Brief Templates](https://www.aleydasolis.com/) — practical reusable templates worth adapting.
- [Clearscope / MarketMuse / Frase — Brief-Generation Tools](https://www.clearscope.io/) — third-party tools that produce a starting-point brief from a keyword. Useful as input; don't replace human / AI judgment on brand-distinct angle.
- [Tom Critchlow — On Content Briefs](https://tomcritchlow.com/) — strategic framing on why briefs matter and where they fit in a content programme.
- [Ahrefs — How to Write a Content Brief](https://ahrefs.com/blog/content-brief/) — entry-level walkthrough; useful for onboarding new content team members.
