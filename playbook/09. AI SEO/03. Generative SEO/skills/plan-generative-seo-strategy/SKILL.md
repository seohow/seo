---
name: plan-generative-seo-strategy
description: Produces a strategic plan for which queries and topics a brand should invest citation-magnet content against to earn citation in AI Overviews, Perplexity, ChatGPT search, Claude search, and Gemini. Forces honest assessment of competitor citation share per engine, defensibility of the brand's angle (original product testing, ingredient depth, primary research, customer evidence, founder expertise), publisher-vs-brand citation territory (publishers like Wirecutter / Strategist / Byrdie dominate commercial-review queries; brands can win ingredient-mechanism / real-evidence queries), and per-engine state per priority query (which engines surface AI answers, which competitors are cited, what the citation pattern looks like). Output is a prioritised topic investment plan: 2-4 picks with rationale, defensibility argument, expected effort, and engine-by-engine target. Use whenever the user asks to "plan generative SEO," "where should we invest in AI search," "decide which AI Overview queries to compete on," "GEO strategy," "AEO strategy," "answer engine optimisation plan," "should we compete with Wirecutter for AI citations," or has a defined budget for citation-magnet content investment. Also use as a quarterly cadence per priority cluster. Do not use to design specific content (use `design-citation-magnet-content`), to audit existing pages (use `audit-ai-content-readiness` or `audit-entity-optimisation`), or to measure current citation share (use `audit-llm-visibility`).
---

# Plan Generative SEO Strategy

This skill produces a strategic plan for citation-magnet content investment. Output is a prioritised topic plan — 2-4 picks, with rationale per pick, expected investment, and engine-by-engine targeting. The skill is conservative by design: not every topic is worth competing on, and the plan should explicitly *exclude* topics where the brand can't win.

The skill is opinionated: publishers (Wirecutter, Strategist, Byrdie, Refinery29) own commercial-review citation territory and brands can't out-resource them on that ground; brands win on angle (original evidence, ingredient depth, distinctive voice, primary research) or they don't win at all; 2-4 deep investments beats 20 shallow ones; baseline measurement is non-negotiable; topics without a defensible angle should be explicitly skipped, not silently dropped.

## When to use this skill

- The user wants to invest in generative SEO / AEO / GEO and needs to decide where.
- The user has a defined budget for citation-magnet content (writers, photography, primary research) and wants the highest-leverage allocation.
- Quarterly strategic review of generative-SEO investment per priority cluster.
- Before any `design-citation-magnet-content` engagement — the planner is the prerequisite.
- The user asks "should we compete with Wirecutter on AI Overviews" — this skill produces the honest answer.

## When NOT to use this skill

- The user wants to design a specific piece of content — use `design-citation-magnet-content` (after this planner has run).
- The user wants prose-level audit of existing pages — use `audit-ai-content-readiness`.
- The user wants entity / schema audit — use `audit-entity-optimisation`.
- The user wants to measure current citation share — use `audit-llm-visibility` (this planner consumes that audit's output).
- The user has no defined budget or capacity for primary-evidence content — surface that as a constraint in the plan; don't pretend the constraint doesn't exist.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 3 (products / services), 4 (customer pains + questions), 6 (competitors), 7 (goals + constraints — informs realistic investment), 8 (brand voice — citation work stays on-voice).
2. **Cluster context** — required. Which cluster(s) is this plan scoped to? Cross-reference `clusters/cluster-map.md` if it exists. Don't plan generative SEO for the whole site at once; cluster-by-cluster is the right unit.
3. **LLM visibility baseline** — strongly recommended. If `ai-seo/llm-visibility-audit-*.md` exists, consume it. If not, recommend running `audit-llm-visibility` first — without baseline, the plan can't assess whether investment moves the needle.
4. **Competitor analysis** — recommended. If `competitor-analysis/*.md` exists, use it for competitor citation share + content depth assessment.
5. **Defensibility candidates** — required from the user (or surfaced from the profile). What does the brand have that competitors don't? Original photography / testing? Ingredient-mechanism depth? Primary research? Founder expertise? Distinctive customer evidence? If the answer is "nothing specific," flag it as a critical constraint — generative SEO without an angle is generic content that doesn't earn citation.
6. **Investment capacity** — required. How much writer / photographer / research budget is available? Citation-magnet content is expensive (original evidence + depth + production); a plan that ignores capacity is a fantasy plan.

If LLM visibility baseline or defensibility candidates are missing, ask before producing the plan. Don't invent a defensibility argument for the brand.

## Process

1. **Inventory the cluster's priority queries.**
   - Pull the cluster's head query + supporting queries (5-15 typical).
   - Classify each by intent: commercial-review (lists / best-of), informational-explainer (what / how), comparative (X vs Y), problem-solution (e.g. "no white cast on darker skin"), brand-specific.
2. **Audit per-engine state per priority query.**
   - **AI Overviews:** present? If yes, which sources cited? Citation card format?
   - **Perplexity:** which sources cited? Citation depth (3 vs 12)?
   - **ChatGPT search:** which sources cited? Often paraphrased without citation?
   - **Claude search:** which sources cited?
   - **Gemini:** if AI Overview present, Gemini matches.
   - Capture as a query-by-engine matrix.
3. **Identify publisher-vs-brand citation territory per query.**
   - **Publisher territory:** queries where Wirecutter / Strategist / Byrdie / Refinery29 / NYMag cite-share is dominant. Commercial-review intent. D2C brands rarely win.
   - **Brand territory:** queries where ingredient-mechanism, real-evidence, original-photography, or founder-expertise content can defensibly win. Often informational, problem-solution, or comparative-with-evidence.
   - **Mixed territory:** queries where both compete. D2C can win if angle is strong.
4. **Assess the brand's defensible angle.**
   - What does the brand have that competitors don't? Be specific.
   - **Examples of real angles:** original product testing on diverse customer skin tones; primary research / surveys; founder dermatologist credentials; six months of ingredient-formulation expertise; distinctive customer-evidence library.
   - **Examples of fake angles:** "we care about quality"; "we use better ingredients"; "our customers love us." Marketing copy is not a defensibility lever.
   - If no specific angle: flag as critical constraint. Plan the investment differently (or recommend skipping generative SEO until the angle exists).
5. **Match priority queries to defensible angles.**
   - Per priority query: does the brand have a real angle to win citation here? Be honest.
   - Mark each query: **Win-able** (angle is real) / **Marginal** (angle is partial; depends on execution) / **Skip** (publisher territory; no angle; investment unlikely to pay off).
6. **Estimate investment per win-able pick.**
   - Citation-magnet content with original evidence: 2-6 weeks of work. Photography + testing + writing + design + schema + internal linking + promotion.
   - Without original evidence (e.g. ingredient explainer with depth + sources): 1-3 weeks.
   - Compare to brand's stated capacity (input 6).
7. **Sequence picks by leverage.**
   - Lower-competition / higher-defensibility queries first (highest probability of citation lift in 60-90 days).
   - Cluster-spanning content (one piece earns citation across 5-15 related queries) before single-query content.
   - Original-evidence picks before generic explainers (moat is durable).
8. **Per pick, produce the strategic brief.**
   - Pick name + the priority queries it targets.
   - Defensibility argument (what's the angle?).
   - Per-engine target (which engines we're targeting; current cited sources we're displacing or joining).
   - Investment estimate (effort + cost).
   - Success metrics (citation rate per engine; brand-mention quality; ranking lift on supporting queries).
   - Linked-to skill: `design-citation-magnet-content` for the per-topic brief.
9. **Produce the explicit "do not invest" list.**
   - Queries the brand should not compete on, with the reason. This is as important as the invest list.
10. **Sense-check against capacity.**
    - Does the plan fit the budget / writer / photographer capacity? If not, cut picks until it does.
    - Defer rather than dilute. 2 deep investments beat 4 shallow ones.
11. **Write the plan.**

## Output format

```markdown
# Generative SEO Strategy — [Business name] — [Cluster name]

**Plan date:** [date]
**Cluster scope:** [cluster name + priority queries]
**Plan horizon:** [Q2 2026 / next 90 days / next quarter]
**LLM visibility baseline:** [link to audit, or "not available — recommend running first"]
**Author:** [name / role]

## Executive summary
- **Cluster citation baseline:** [n]% of priority queries currently mention the brand
- **Win-able picks recommended:** [n]
- **Marginal picks recommended:** [n]
- **Skip list:** [n]
- **Total investment:** [weeks of work] / [budget estimate]
- **Expected citation lift at 90 days:** [reasoned estimate]
- **Headline:** [1-2 sentences — the strategic call].

## Cluster query inventory + per-engine state

| Query | Intent | AI Overview | Perplexity | ChatGPT | Claude | Currently cited | Brand cited |
|-------|--------|-------------|------------|---------|--------|-----------------|-------------|
| tinted mineral sunscreen | Commercial-review | Yes (cites Wirecutter, Strategist, ILIA, Supergoop, Saie) | Yes (12 sources) | Yes (4 sources) | Yes (3 sources) | Wirecutter, Strategist, ILIA, Supergoop, Saie | No |
| ... | ... | ... | ... | ... | ... | ... | ... |

## Citation territory analysis
| Query | Territory | Reason |
|-------|-----------|--------|
| best mineral sunscreen | Publisher | Wirecutter / Strategist citations dominate; commercial-review intent |
| tinted mineral sunscreen for darker skin | Mixed | Publisher present but evidence-thin; brand can win with original photography |
| does mineral sunscreen leave a white cast | Brand territory | Mechanism explainer; ingredient depth and customer evidence beat publisher review |
| ... | ... | ... |

## Defensibility assessment
**Brand's defensible angles for this cluster:**
- Six months of own-product testing on Fitzpatrick I-VI skin tones with consistent lighting / methodology.
- Founder is dermatologist-adjacent (cite specific credentials).
- Ingredient depth: 20% non-nano zinc oxide formulation specifics; iron oxide tinting mechanism explained at clinical depth.
- Customer evidence library: 200+ before-and-after photos with consent for editorial use.

**Brand's NON-angles for this cluster (do not lean on):**
- "We care about quality" — generic.
- "Better ingredients" — every brand claims this.
- "Customer reviews" — table stakes; doesn't differentiate at AI-citation level.

## Win-able picks

### Pick 1: "Mineral sunscreen white cast on darker skin tones" — original-photography moat

**Target queries (priority):**
- "tinted mineral sunscreen for darker skin tones"
- "mineral SPF no white cast"
- "tinted SPF for medium-to-deep skin tones"
- "mineral sunscreen Fitzpatrick V-VI"
- (Cluster: 4 priority queries; expected halo across 8-12 supporting queries.)

**Defensibility:** original photography across Fitzpatrick I-VI on 8 customers; side-by-side with 3 named competitor products; consistent lighting methodology documented in the post.

**Per-engine target:**
- AI Overviews: displace 1 of 5 cited sources (likely the weakest evidence-thin source) on at least 2 of 4 priority queries.
- Perplexity: enter top 5 cited sources on all 4.
- ChatGPT: enter cited sources on at least 2 of 4.
- Claude: enter cited sources on at least 1 of 4.

**Investment:** 4-6 weeks. Photographer (1 week shooting + post-production), writer (2 weeks), design (1 week), schema + technical (3 days), promotion (1 week ongoing).

**Expected lift:** brand-mention rate 0% → 40-60% across the 4 priority queries within 60-90 days; ranking lift on supporting queries.

**Success metrics + measurement plan:** quarterly `audit-llm-visibility` re-run; per-engine citation tracking; ranking on the 4 priority queries; organic traffic to the published page; downstream PDP traffic.

**Risks:**
- Photography production may slip; build buffer.
- AI Overview citation behaviour can change with engine updates; not all of 90-day window is in our control.
- Customer-photography consent must be in writing for every photo used; legal review pre-publish.

**Linked skill:** `design-citation-magnet-content` for the per-topic brief.

### Pick 2: [Pick name]

[Same structure]

## Marginal picks

### Pick 3: [Pick name] — assess after Pick 1 ships

[Description of why this is marginal — angle is partial, or depends on Pick 1's success, or capacity-constrained.]

## Skip list

| Query | Why we're skipping | Revisit when |
|-------|--------------------|--------------|
| best mineral sunscreen (head term) | Wirecutter / Strategist territory; we cannot out-resource publisher review depth | Brand DR reaches 50+ AND we have a multi-year content moat |
| best vitamin c serum (head term) | Same — already on the brand's existing skip list per Q2 2026 strategy | — |
| ... | ... | ... |

## Capacity check
- **Plan total effort:** [n] weeks of writer + [n] weeks of photographer + [n] of design + [n] of dev.
- **Available capacity:** per profile section 7 — content writer 4 long-form / month; founder splits time; no dedicated dev.
- **Verdict:** [plan fits / plan exceeds capacity by X — recommend cutting Pick N or extending timeline].

## Operating rhythm
- Pick 1 kicks off [date]; ships [date].
- Pick 2 kicks off [date] (after Pick 1 publication, to learn from it).
- Mid-engagement check-in at 30 days into Pick 1 production.
- Post-publication LLM visibility audit at 60 days post-publish per pick.
- Quarterly strategy review at [date] — re-run this skill.

## Open questions
- [ ] Confirm photographer / production capacity for Pick 1 timeline.
- [ ] Confirm legal review path for customer-photography consent.
- [ ] Confirm budget allocation across picks (deeper investment in Pick 1 vs spreading across picks).
- [ ] Confirm whether marginal Pick 3 is in scope or out of scope this quarter.
```

Save the produced file to `businesses/<slug>/ai-seo/generative-seo-strategy-[cluster-slug]-[YYYY-Qn].md` (e.g. `generative-seo-strategy-mineral-sunscreen-2026-Q2.md`). Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Cluster-scoped, not site-wide.
- Per-engine state captured per priority query (AI Overview / Perplexity / ChatGPT / Claude / Gemini).
- Citation-territory analysis explicitly distinguishes publisher / brand / mixed territory.
- Defensibility assessment is honest — names specific brand angles, names specific non-angles, doesn't paper over absence with marketing language.
- Win-able / Marginal / Skip classification per query, not just a list of picks.
- Skip list is explicit (not silent omission). Includes the reason.
- Investment estimates ground in capacity per profile section 7.
- Success metrics linkable to `audit-llm-visibility` follow-ups.
- 2-4 picks (not 10). Concentration over breadth.
- Plan fits capacity; if it doesn't, recommend cutting picks.
- Brand voice respected — Field & Sun: ingredient-led, plain-language, no "clean beauty" / "non-toxic" / "chemical-free" framing.

## Common mistakes to avoid

- Don't recommend competing on publisher head-terms — Wirecutter territory is unwinnable for D2C without a multi-year content moat.
- Don't manufacture a defensibility angle — if the brand doesn't have one, say so and flag it as the critical constraint.
- Don't produce 10 picks — concentrate to 2-4.
- Don't skip the per-engine state audit — different engines have different citation patterns; one-engine planning is brittle.
- Don't ignore capacity — a plan that needs 12 weeks of work in a quarter with 4 weeks of writer capacity is fantasy.
- Don't omit the skip list — what we don't compete on is part of the strategy.
- Don't drift into content design — that's `design-citation-magnet-content`. The planner's output is the strategic brief, not the content brief.
- Don't drift from Field & Sun voice — recommendations stay on-voice.
- Don't recommend AI-generated citation-magnet content — the moat is original evidence, not LLM output.
- Don't promise specific citation outcomes — engine behaviour shifts; reasoned estimates only.

## Example

**Input (abbreviated):** Field & Sun. Cluster: mineral sunscreen. Defensibility candidates: original Fitzpatrick I-VI photography library; founder dermatologist-adjacent; six months of formulation work documented; 200+ customer before-after photos. LLM visibility baseline: 0% across 7 priority queries.

**Output (abbreviated):**

Win-able picks (2):

- **Pick 1: "Mineral sunscreen white cast on darker skin tones"** — original-photography moat. 4 priority queries. 4-6 week investment. Expected brand-mention rate 0% → 40-60% at 90 days.
- **Pick 2: "Iron oxide tinting mechanism in mineral SPF"** — ingredient-mechanism depth. 3 priority queries. 2-3 week investment. Lower production cost; smaller halo but durable.

Marginal pick (1, defer):

- **Pick 3: "Mineral SPF for sensitive skin"** — partial angle (we have customer evidence but not formulation specifics); revisit after Pick 1 ships.

Skip list (3 explicitly):

- "best mineral sunscreen" — Wirecutter territory.
- "tinted mineral sunscreen review" — Strategist territory; commercial-review intent.
- "best SPF for face" — head-term commercial-review; publishers dominate.

Capacity check: plan fits — 6-9 weeks of work over Q2; brand has 8 weeks of writer + 2 weeks of photographer capacity.

Saved to `businesses/field-and-sun/ai-seo/generative-seo-strategy-mineral-sunscreen-2026-Q2.md`.
