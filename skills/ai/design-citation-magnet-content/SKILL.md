---
name: design-citation-magnet-content
description: Use to design citation magnet content; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Design Citation-Magnet Content

This skill produces a content brief for a piece of content designed to win citation in AI-mediated search. The brief is more demanding than a standard content brief — it specifies primary-evidence requirements, comparative structure, source citations, schema, and per-engine targeting in addition to the usual outline / word count / internal-link spec.

The skill is opinionated: the brief requires a green-lit topic from `plan-generative-seo-strategy` (or a documented exemption); primary evidence (original photography / testing / surveys / data) is required where the strategic plan claimed the moat — without it, the brief defaults to generic explainer territory; sources are named, not gestured at; schema is specified; brand voice holds.

## When to use this skill

- A topic has been picked in `plan-generative-seo-strategy` and is ready to brief.
- The user wants a content brief specifically for AI-citation, not for generic ranking.
- The user has primary-evidence assets (or is prepared to produce them) for the topic.
- The user wants to bake citation patterns into a sibling content brief (the standard brief in Content SEO leaf 08 is a less-demanding template; this one is for citation-priority topics).

## When NOT to use this skill

- No `plan-generative-seo-strategy` output exists for the cluster — run that first. Briefing without strategy wastes budget.
- The topic was on the strategy's "skip" list — don't brief topics the planner explicitly rejected. If the user wants to override, surface the disagreement and require a documented rationale.
- The user wants a generic content brief — use `generate-content-brief` in Content SEO leaf 08.
- The user wants to audit / rewrite existing content — use `audit-ai-content-readiness`.
- The user has no capacity for primary evidence and the topic's defensibility argument requires it — flag the constraint; recommend either acquiring evidence first or picking a different topic.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `business-profile` first. Sections this skill cares about most: 3 (products), 4 (customer + questions), 6 (competitors), 8 (brand voice — non-negotiable for this skill).
2. **Strategic plan** — required. Path to the relevant `ai-seo/generative-seo-strategy-*.md`. The brief consumes the plan's defensibility argument, per-engine targets, and investment estimate. If absent, refuse and recommend running `plan-generative-seo-strategy` first.
3. **Topic** — required. Which pick from the strategic plan is being briefed? Cross-reference the plan's win-able picks; reject if the topic is on the skip list.
4. **Priority queries** — required. The 2-6 queries this content targets. From the strategic plan.
5. **Primary-evidence inventory** — required if the strategic plan's defensibility argument depends on primary evidence. What's available, what needs to be produced, what the production timeline looks like.
6. **Cluster + internal-link context** — required. Where in the cluster does this content sit (pillar / spoke / standalone)? What pages should it link to and from? Cross-reference `clusters/cluster-map.md` if it exists.
7. **SERP + competitor citation reference** — required. From the strategic plan; what are the currently-cited sources, and what's the brief's plan to displace or join them?

If the strategic plan is missing or the topic is on its skip list, refuse with a clear explanation and recommend the appropriate alternative.

## Process

1. **Verify the topic against the strategic plan.**
   - Is this topic on the strategic plan's win-able list?
   - If marginal: surface the marginality risk in the brief and proceed.
   - If skip-listed: refuse; the strategic plan said don't compete here.
2. **Frame the question.**
   - State the topic as the question a user would actually ask, not as a topic label.
   - Cross-reference the priority query phrasing — the H1 and H2s should match query phrasing.
3. **Design the answer block.**
   - **Definitive opening sentence:** the first sentence after the H1, answering the question directly. Specific, sourced, on-voice. Draft the actual sentence.
   - **TL;DR:** 3-5 bullet summary block immediately under the answer sentence. Bullets cover: the headline answer, the most-important nuance, the comparison context, the brand-evidence note.
4. **Plan the structural body.**
   - Question-led H2s. List 6-10 specific H2s the article should cover. Each H2 framed as a user question.
   - Per H2: a one-line direction, the key entities to name, the primary-evidence asset that supports the section (if applicable), the source citation list.
5. **Specify primary evidence.**
   - What original photography / testing / data / surveys is required?
   - What does production look like (photographer? Customer recruitment? Studio time? Survey instrument?)?
   - What's the timeline?
   - What does the asset look like in-page (table? Image grid? Embed? Downloadable?)?
   - This is the moat — under-specifying here wastes the budget.
6. **Specify comparative structure.**
   - Most citation-magnet content benefits from a comparative table or grid.
   - List the comparison axes (e.g. for sunscreen: SPF level, active ingredient, concentration, tint range, white-cast outcome per Fitzpatrick type, price-per-mL, certifications).
   - List the products / sources being compared (own product + 2-4 competitors).
7. **Specify source citations.**
   - Name the specific authoritative sources to cite (FDA OTC Sunscreen Monograph; Skin Cancer Foundation; specific peer-reviewed studies — author + year + journal; established publications).
   - Don't gesture at "studies show" — name the studies.
   - 6-15 citations typical for a depth piece.
8. **Specify schema.**
   - `Article` with explicit `about` and `mentions` properties.
   - `ImageObject` per primary-evidence photograph with `caption`, `creator`, and `contentUrl`.
   - `FAQPage` *only* if the article contains a genuine FAQ section.
   - `Product` `mentions` if the article references named products (own + competitor).
   - `BreadcrumbList` for cluster context.
9. **Specify internal-linking plan.**
   - From this article: 3-6 outbound internal links with descriptive anchors (to PDPs, cluster pillar, related spokes).
   - Inbound: which existing pages should link to this article, with what anchor text.
   - This is part of the entity-graph signal — under-spec here weakens the citation eligibility.
10. **Specify freshness signals.**
    - Visible "Last updated: [planned publish date]" line.
    - For time-sensitive topics, a one-line update-reason note (e.g. "Updated 2026-05 with new FDA OTC monograph guidance and original photography across Fitzpatrick I-VI skin tones").
    - Quarterly review schedule baked into the brief.
11. **Specify per-engine targeting.**
    - Per priority query: which engines (AI Overviews / Perplexity / ChatGPT / Claude) we're targeting.
    - Currently cited sources we're trying to displace or join.
    - Citation-pattern notes (e.g. "Perplexity cites generously — 5+ citations means high probability of inclusion if structure is clean; ChatGPT cites sparingly — focus on definitive opening + sourced claims").
12. **Brand voice constraints.**
    - Quote the relevant section 8 voice rules from the profile.
    - Field & Sun: ingredient-led, plain-language, specific. Reject vague category language, unsupported safety claims, and inflated promise language.
13. **Quality gates + reviewer checklist.**
    - Pre-publish gates: legal review for claims; brand-voice review; technical-SEO review for schema; primary-evidence consent / rights confirmation.
14. **Production timeline + capacity check.**
    - Match the strategic plan's investment estimate.
    - Specify which week each component (photography / writing / design / schema / internal-link / promotion) lands.
15. **Write the brief.**

## Output format

```markdown
# Citation-Magnet Brief — [Topic name]

**Brief date:** [date]
**Cluster:** [cluster name].
**Strategic plan:** [path to `ai-seo/generative-seo-strategy-*.md`].
**Pick reference:** [Pick N from the strategic plan].
**Author:** [name / role].
**Target publish date:** [date].

## Topic + question framing
**Topic:** [topic name].
**User question (H1):** [actual question phrasing].
**Priority queries this content targets:**
- [query 1] (vol [n]/mo)
- [query 2] (vol [n]/mo)
- [query 3] (vol [n]/mo)
- [query 4] (vol [n]/mo)

## Defensibility argument (from strategic plan)
[1-2 paragraphs from the plan: what does the brand have that competitors don't? What's the moat? What's the citation strategy — displace, join, or expand the cited-sources set?]

## Per-engine targeting
| Query | AI Overview | Perplexity | ChatGPT | Claude | Currently cited (to displace / join) |
|-------|-------------|------------|---------|--------|--------------------------------------|
| ... | ... | ... | ... | ... | ... |

## Answer block (draft)

**Definitive opening sentence:**
> [Draft the actual sentence. Specific, sourced, on-voice. ~25-40 words.]

**TL;DR:**
- [Bullet 1: headline answer.]
- [Bullet 2: most-important nuance.]
- [Bullet 3: comparison context.]
- [Bullet 4: brand-evidence note (if applicable).]

## Structural body — H2 outline

### H2 1: [Question phrasing]
- **Direction:** [one-line on what the section establishes].
- **Entities to name:** [specific entities, with concentrations / qualifiers where relevant].
- **Primary evidence:** [photo / table / data point].
- **Source citations:** [named sources with link or full reference].

### H2 2: [Question phrasing]
[Same structure]

[6-10 H2s total]

## Primary-evidence specification
**Asset 1: Original photography across Fitzpatrick I-VI skin tones**
- **Production:** photographer [N] week(s); 8 customer participants recruited; consistent lighting methodology.
- **Output:** 24 photographs (8 customers × 3 product applications); side-by-side comparison grid.
- **Timeline:** weeks 1-2 of production.
- **Rights:** written consent for editorial use from each customer.
- **In-page treatment:** comparison grid with caption per photo specifying customer Fitzpatrick type, product applied, lighting condition.

**Asset 2: Comparative table**
- **Axes:** SPF level | Active ingredient | Concentration | Tint range | White-cast outcome (Fitzpatrick I-VI) | Price-per-mL | Certifications
- **Products compared:** Field & Sun Mineral Sun Drops SPF 50; Supergoop Mineral Mattescreen; ILIA Super Serum SPF 40; Saie Sunvisor SPF 35.
- **Source for competitor data:** product packaging / brand site / certification database (cited inline).

[Repeat per asset]

## Comparative structure
[Specify the table or grid structure that the body will use. Most citation-magnet content benefits from at least one comparative element — extract-friendly for AI systems.]

## Source citations (named)
| # | Source | Type | Use in article |
|---|--------|------|----------------|
| 1 | FDA OTC Sunscreen Monograph (2024) | Regulator | Active-ingredient classification + concentration limits |
| 2 | [Author et al, 2023, Journal] — "Iron oxide tinting in mineral SPF formulations" | Peer-reviewed study | Tinting-mechanism section |
| 3 | Skin Cancer Foundation — "Mineral vs Chemical Sunscreen Guide" | Authority | Mechanism context |
| ... | ... | ... | ... |

## Schema specification
- **`Article`:** `about: "Tinted Mineral Sunscreen for Darker Skin Tones"`; `mentions: [Mineral sunscreen, iron oxide, zinc oxide, Fitzpatrick scale, Daily Glow Serum, Mineral Sun Drops SPF 50]`; `dateModified: [planned publish date]`.
- **`ImageObject` per photograph:** `caption`, `creator`, `contentUrl`, `representativeOfPage` for hero image.
- **`Product` `mentions`:** named products in the comparative table.
- **`BreadcrumbList`:** Home > Sun Care > [Cluster pillar] > [This article].
- **No `FAQPage`** unless a genuine FAQ section is included; do not manufacture Q&A for schema eligibility.

## Internal-linking plan
**Outbound links (from this article):**
| # | Anchor | Target |
|---|--------|--------|
| 1 | "Mineral Sun Drops SPF 50" | /products/mineral-sun-drops-spf-50 |
| 2 | "no white cast guide" (cluster pillar) | /blog/mineral-vs-chemical-sunscreen |
| 3 | "iron oxide tinting in skincare" (related spoke) | /blog/iron-oxide-tinting-explainer |
| ... | ... | ... |

**Inbound links (to update):**
| # | From page | Anchor |
|---|-----------|--------|
| 1 | Cluster pillar | "tinted mineral sunscreen for darker skin tones" |
| 2 | Sun Care collection page | "no white cast on darker skin tones" |
| ... | ... | ... |

## Freshness specification
- **Visible last-updated line:** "Last updated: [date]" displayed under H1.
- **Update-reason note:** "Updated 2026-05 with original photography across Fitzpatrick I-VI skin tones and current FDA OTC monograph guidance."
- **Review cadence:** quarterly (next: Q3 2026).

## Brand voice constraints (non-negotiable)
- Ingredient-led, plain-language, specific. Reject vague category language, unsupported safety claims, and inflated promise language.
- Use specific concentrations (15% L-ascorbic acid; 20% non-nano zinc oxide) rather than gestural ingredient claims.
- Tone: warm, knowledgeable, plain-language. Confident without being preachy.

## Quality gates / reviewer checklist
- [ ] Definitive opening sentence drafted and approved.
- [ ] TL;DR drafted and approved.
- [ ] All H2s framed as user questions.
- [ ] Primary-evidence assets produced and consent on file.
- [ ] All factual claims have named source citations.
- [ ] Schema spec implemented and validated (no schema-content mismatch).
- [ ] Internal links wired in both directions.
- [ ] Last-updated date and update-reason note rendered visibly.
- [ ] Brand voice review passed (no vague category-language or unsupported-claims residue).
- [ ] Legal review passed (FDA OTC drug claims; customer photography rights).
- [ ] Technical SEO review passed (schema validation; canonical alignment; mobile rendering).
- [ ] Pre-publish QA: read on mobile and desktop; verify TL;DR renders cleanly; verify comparative table is responsive.

## Production timeline
| Week | Activity | Owner |
|------|----------|-------|
| 1 | Photographer recruitment + customer recruitment | Marketing lead |
| 2 | Photography shoot + post-production | Photographer |
| 3 | First-draft writing | Writer |
| 4 | Comparative-table research + data validation | Writer + founder |
| 5 | Editorial review + brand-voice review + legal review | Marketing lead + founder |
| 6 | Schema implementation + internal-linking + technical SEO review | Dev (contracted) |
| 6 | Publish + GSC submission + promotion brief | Marketing lead |

## Success metrics + measurement plan
- **At 30 days post-publish:** confirm indexing; track ranking on priority queries.
- **At 60 days post-publish:** re-run `audit-llm-visibility` for the priority queries; capture per-engine citation rate.
- **At 90 days post-publish:** evaluate against strategic plan's expected lift; decide whether to invest in adjacent topics in the cluster.

## Risks + watchouts
3-5 specific risks. E.g. "Customer photography consent must be in writing per customer; legal review pre-publish — without consent, the moat asset cannot ship"; "Photographer / production capacity is on the critical path; build a 1-week buffer"; "Schema must validate cleanly — `ImageObject` schema with broken `contentUrl` invalidates the entire article schema"; "The comparative table makes specific claims about competitor products; verify product details from current packaging / brand site to avoid misrepresentation"; "If retrieval bots are blocked at robots.txt, the moat asset cannot be cited — verify Technical SEO leaf 10 audit before publishing"; "FDA OTC drug claim language must be reviewed — Sun Drops cannot be marketed with medical / dermatological claims per profile section 7."

## Open questions
- [ ] Confirm photographer / production capacity for the photography shoot.
- [ ] Confirm customer recruitment plan and consent process.
- [ ] Confirm whether marginal Pick 3 from the strategic plan will be briefed in this engagement or deferred.
- [ ] Confirm legal review owner and turnaround for FDA / customer-photography claims.
```

Save the produced file to `businesses/<slug>/ai-seo/citation-magnet-[topic-slug]-[YYYY-MM-DD].md`. Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- The brief refuses to proceed without a strategic plan (or a documented exemption).
- Definitive opening sentence drafted, not just specced.
- TL;DR bullets drafted, not just specced.
- H2s framed as user questions; outline 6-10 H2s with direction + entities + evidence + sources per H2.
- Primary-evidence specification is concrete — production owner, timeline, output, in-page treatment.
- Source citations are named (specific authority, study, publication), not gestured at.
- Schema spec is explicit per type; no schema theatre.
- Internal-linking plan covers both outbound and inbound.
- Freshness signals specced (visible last-updated, update-reason, review cadence).
- Brand voice constraints quoted from profile section 8.
- Quality gates / reviewer checklist included.
- Production timeline matches strategic plan's investment estimate.
- Success metrics linkable to `audit-llm-visibility` follow-up.

## Common mistakes to avoid

- Don't proceed without a strategic plan — it's the prerequisite.
- Don't brief a skip-listed topic — the planner said no.
- Don't gesture at "studies show" — name the studies.
- Don't manufacture FAQ schema — it's schema theatre.
- Don't propose AI-generated body content — moat is original; LLM rewrites homogenise.
- Don't skip primary-evidence specification — under-specifying here wastes the budget.
- Don't drift from brand voice — Field & Sun rejects vague category language, unsupported safety claims, and inflated promise language.
- Don't promise specific citation outcomes — engine behaviour shifts.
- Don't omit legal review — FDA OTC drug claims and customer-photography rights require it.
- Don't skip the freshness specification — citation eligibility decays without freshness signals.

## Example

**Input (abbreviated):** Field & Sun. Topic: "Mineral sunscreen white cast on darker skin tones." Strategic plan: `ai-seo/generative-seo-strategy-mineral-sunscreen-2026-Q2.md` — Pick 1, win-able. Priority queries: 4. Defensibility: Fitzpatrick I-VI photography library + ingredient-mechanism depth. Production capacity: 6 weeks.

**Output (abbreviated):**

H1: "Does mineral sunscreen leave a white cast on darker skin tones?"

Definitive opening: "Mineral sunscreens can leave a white cast on darker skin tones, but tinted mineral SPFs — those formulated with iron oxides for visual matching — minimise it on Fitzpatrick III-VI skin types when concentrations and shade range are designed for medium-to-deep skin."

TL;DR (4 bullets covering headline, mechanism, evidence, comparison context).

H2 outline (8 H2s — all question-phrased): "How does mineral SPF actually work?"; "Why does it leave a white cast?"; "Does iron oxide tinting solve the white-cast problem?"; "What does white cast look like on Fitzpatrick I-VI?" (with photography); "How do tinted mineral SPFs compare?" (with comparative table); "What concentrations matter?"; "Is broader-spectrum coverage available in tinted mineral?"; "What should you look for if you have darker skin?"

Primary evidence: 24 photographs across 8 customers × 3 products + comparative table across 4 products × 7 axes.

Source citations: 12 named (FDA Monograph, 4 peer-reviewed studies, Skin Cancer Foundation, 3 dermatology references, 3 product certifications).

Schema: `Article` (with about + mentions) + `ImageObject` per photo + `BreadcrumbList`. No `FAQPage`.

Internal-linking: 5 outbound + 4 inbound.

Production timeline: 6 weeks; publishes [date].

Saved to `businesses/field-and-sun/ai-seo/citation-magnet-mineral-sunscreen-darker-skin-2026-05-02.md`.
