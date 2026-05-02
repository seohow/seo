---
name: audit-llm-visibility
description: Produces a quarterly LLM visibility audit by probing ChatGPT search, Claude search, Perplexity, Google Gemini, and Google AI Overviews with a structured set of brand-relevant queries, then capturing brand-mention rate, citation link presence, mention quality (named-with-context / named-without-context / in-list / paraphrased-without-mention), sentiment, and competitor share-of-voice. Output is a longitudinal-trackable audit covering per-engine breakdown, per-cluster breakdown, branded-vs-unbranded segmentation, comparison to prior audits, and recommendations for content / generative-SEO / NLP investment based on the gaps identified. Use whenever the user asks to "audit LLM visibility," "track AI search citations," "are we showing up in ChatGPT / Claude / Perplexity / Gemini," "AI Overview brand mentions," "GEO / AEO measurement," "competitor share of voice in AI search," "baseline before AI SEO investment," or runs a quarterly review. The skill is mandatory as a baseline before any generative-SEO investment (cross-reference `plan-generative-seo-strategy`) and is the core measurement skill for AI SEO. Do not use to design content (use `design-citation-magnet-content`), to audit prose-level patterns (use `audit-ai-content-readiness`), or to plan strategic citation investment (use `plan-generative-seo-strategy`).
---

# Audit LLM Visibility

This skill produces a structured probe of major AI search engines using a fixed-shape query set and captures brand visibility with quality + sentiment + competitor dimensions. The audit is built for longitudinal tracking — each quarter's run compares against the previous to surface direction, not just absolute state.

The skill is opinionated: query set must be balanced (branded + unbranded; head + long-tail; commercial + informational + comparative); per-engine reporting beats aggregation (different citation patterns per engine); 2-3 samples per query (LLM responses are stochastic); clean / fresh sessions (personalisation skews results); mention quality matters as much as presence (named-in-list ≠ named-with-context); sentiment is non-optional; competitor share-of-voice is paired with brand mention rate.

## When to use this skill

- Mandatory baseline before any AI SEO investment (Content / NLP / Generative / SERP Features).
- Quarterly cadence per priority cluster.
- Post-investment measurement (60-90 days after generative-SEO Pick ships).
- Competitor share-of-voice review.
- Strategic-review trigger when the user senses "are we showing up in AI?" but doesn't have a number.

## When NOT to use this skill

- The user wants to plan strategic citation investment — use `plan-generative-seo-strategy` (this skill is the input to that one).
- The user wants to design content — use `design-citation-magnet-content`.
- The user wants prose-level audit of existing pages — use `audit-ai-content-readiness`.
- The user wants entity / schema audit — use `audit-entity-optimisation`.
- The user has no priority cluster yet — recommend cluster mapping first; LLM visibility audits are scoped to a cluster set, not site-wide.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 1 (brand identity for branded queries), 3 (products for product-specific queries), 4 (customer pains + questions for unbranded queries), 6 (competitors for share-of-voice), 7 (markets — same query may behave differently in different markets).
2. **Cluster context** — required. Which clusters are in scope? Cross-reference `clusters/cluster-map.md`. Don't audit the whole site at once.
3. **Query set** — required (or built fresh on first audit). 30-100 queries balanced across:
   - **Branded:** "Field & Sun reviews," "Daily Glow Serum ingredients," "Mineral Sun Drops vs [competitor]."
   - **Unbranded — commercial:** "best mineral sunscreen for darker skin tones," "best vitamin c serum for dark spots."
   - **Unbranded — informational:** "what is L-ascorbic acid in skincare," "does mineral sunscreen leave a white cast."
   - **Unbranded — comparative:** "mineral vs chemical sunscreen," "vitamin c vs niacinamide."
   - **Per cluster:** representative coverage of each priority cluster.
   - **Sample size per cluster:** 5-15 queries per priority cluster.
4. **Prior audit** — optional. If `ai-seo/llm-visibility-audit-*.md` exists, the new audit compares quarter-over-quarter.
5. **Engine access** — required. ChatGPT search (free or Plus); Claude search (Pro recommended for search access); Perplexity (free or Pro); Google Gemini (free); Google search with AI Overview rollout for the markets in scope.
6. **Tooling preference** — optional. Manual probing (browser + spreadsheet) is sufficient for first audit + small query sets. For 50+ queries × 5 engines × quarterly, recommend dedicated tools (Profound, Goodie, Otterly.AI, Peec.ai, Brandy, AI Brand Rank — verify current state, vendors evolve).

If query set or cluster scope is missing, define it before probing. Don't run the audit against an undocumented or unbalanced query set.

## Process

1. **Build or refresh the query set.**
   - First audit: build from cluster map + customer questions + branded query inventory.
   - Subsequent audits: keep 80%+ of queries stable for longitudinal comparison; evolve 20% (new product launches, new clusters, retired queries).
   - Document the query set in the audit output.
2. **Set up clean sessions per engine.**
   - **ChatGPT:** new chat in a temporary / incognito context; logged out where possible.
   - **Claude:** new chat in a fresh project / context.
   - **Perplexity:** fresh session; standard mode.
   - **Gemini:** fresh session.
   - **Google AI Overview:** incognito browser with cleared cookies; verify market locale matches the brand's primary market (e.g. US for Field & Sun).
3. **Run probes.**
   - Per query, per engine: ask the query 2-3 times; capture each response.
   - Note: some engines may not surface AI answers for some queries (especially commercial / shopping queries on Google). Record "no AI answer" as a valid data point — it's still signal.
4. **Capture per query × engine:**
   - **Mention y/n:** is the brand named at all in any of the 2-3 samples?
   - **Citation link y/n:** is there a clickable citation link to the brand's site?
   - **Mention quality (4-tier):**
     - Named with context: brand named with specifics (product name, ingredient, evidence).
     - Named without context: brand named generically.
     - Mentioned in list: brand named alongside others without distinguishing detail.
     - Paraphrased without mention: brand's content / position implied without naming.
   - **Sentiment (3-tier):** positive / neutral / negative.
   - **Competitors named in same answer:** list.
   - **Citation source page:** which URL is cited?
5. **Aggregate and segment.**
   - **By engine:** mention rate, citation rate, quality distribution, sentiment.
   - **By cluster:** same dimensions, per cluster.
   - **By branded / unbranded:** branded mention rate should be high; unbranded is the meaningful measure.
   - **By query intent:** commercial / informational / comparative.
   - **Competitor share-of-voice:** for each competitor named in the query set, what % of unbranded mentions did they capture?
6. **Compare to prior audit (if exists).**
   - Per dimension: direction of change (up / flat / down).
   - Significant shifts (>10 percentage points) flagged with hypothesis (recent content launch? engine update? competitor surge?).
7. **Identify high-leverage gaps.**
   - Queries where brand has 0 mentions and competitors have moderate mentions = opportunity (brand could compete).
   - Queries where brand has 0 mentions and only Wirecutter / Strategist mention = publisher territory; skip.
   - Queries where brand mention quality is "in-list" only = quality lift opportunity (move to "named with context" via better content).
   - Sudden negative-sentiment mentions = investigate (review-bombing? misinformation?).
8. **Write the audit.**

## Output format

```markdown
# LLM Visibility Audit — [Business name] — [Quarter / Date]

**Audit date:** [date]
**Cluster scope:** [clusters]
**Query set size:** [n]
**Engines probed:** ChatGPT search, Claude search, Perplexity, Google Gemini, Google AI Overviews
**Samples per query:** 2-3
**Prior audit:** [link if exists]
**Auditor:** [name / role]

## Executive summary
- **Overall brand mention rate (unbranded queries):** [n]%
- **Overall citation link rate:** [n]%
- **Mention quality skew:** [% in each tier]
- **Competitor share-of-voice ranking:** [top 3 competitors]
- **Quarter-over-quarter direction:** [up / flat / down with delta]
- **Headline:** [1-2 sentences — the most-important finding].

## Query set
[Full query set, grouped by cluster + intent. Mark which queries are stable from prior audit and which are new this quarter.]

| # | Query | Cluster | Intent | Branded | New this quarter |
|---|-------|---------|--------|---------|------------------|
| 1 | tinted mineral sunscreen | Mineral SPF | Commercial | No | No |
| 2 | does mineral sunscreen leave a white cast | Mineral SPF | Informational | No | No |
| ... | ... | ... | ... | ... | ... |

## Per-engine results

### ChatGPT search

- **Mention rate (unbranded):** [n]% ([n] of [n] queries)
- **Citation link rate:** [n]%
- **Mention quality:**
  - Named with context: [n]%
  - Named without context: [n]%
  - In list: [n]%
  - Paraphrased without mention: [n]%
- **Sentiment:** [n]% positive / [n]% neutral / [n]% negative
- **Top cited sources (by URL):** [list]
- **Quarter-over-quarter:** [delta]

### Claude search
[Same structure]

### Perplexity
[Same structure]

### Google Gemini
[Same structure]

### Google AI Overviews
[Same structure]

## Per-cluster results

### Mineral sunscreen cluster
- **Mention rate (unbranded, all engines):** [n]%
- **Citation link rate:** [n]%
- **Best engine:** [which engine cited most]
- **Worst engine:** [which engine cited least]
- **Quarter-over-quarter:** [delta]
- **Notable shifts:** [e.g. "AI Overview citation went from 0% Q2 to 25% Q3 driven by Pick 1 publication on 2026-05"].

### Vitamin C cluster
[Same structure]

### Refill / sustainability cluster
[Same structure]

[Repeat per cluster]

## Branded vs unbranded
- **Branded mention rate:** [n]% (expected to be high — sense check that branded queries are being recognised correctly)
- **Unbranded mention rate:** [n]% (the meaningful measure)
- **Gap:** [n] percentage points
- **Sentiment in branded mentions:** [breakdown]
- **Notable:** [e.g. "Branded query 'Field & Sun reviews' produces a paraphrased neutral answer in ChatGPT but a positive cited summary in Perplexity — Perplexity's citation pattern is more favourable for the brand."]

## Competitor share-of-voice (unbranded queries)

| Competitor | Mentions across query set | % share | Quarter-over-quarter |
|------------|--------------------------|---------|----------------------|
| Wirecutter | [n] | [n]% | [delta] |
| Strategist | [n] | [n]% | [delta] |
| Supergoop | [n] | [n]% | [delta] |
| ILIA | [n] | [n]% | [delta] |
| Saie | [n] | [n]% | [delta] |
| Field & Sun | [n] | [n]% | [delta] |
| Healthline | [n] | [n]% | [delta] |
| ... | ... | ... | ... |

## Mention quality breakdown (Field & Sun, all engines, unbranded)
| Tier | Q2 baseline | Q3 audit | Direction |
|------|-------------|----------|-----------|
| Named with context | [n]% | [n]% | [delta] |
| Named without context | [n]% | [n]% | [delta] |
| In list | [n]% | [n]% | [delta] |
| Paraphrased without mention | [n]% | [n]% | [delta] |

## High-leverage gaps + opportunities
| Query | Current state | Opportunity / Skip | Reason |
|-------|---------------|---------------------|--------|
| does mineral sunscreen leave a white cast | 0% mention; cited sources Wirecutter, ILIA, Saie | **Opportunity** — defensible angle (Pick 1) | Brand has Fitzpatrick I-VI photography moat |
| best mineral sunscreen | 0% mention; cited sources Wirecutter, Strategist | **Skip** — publisher territory | Per generative-SEO strategy skip list |
| ... | ... | ... | ... |

## Notable findings
- [e.g. "Sentiment in Field & Sun mentions has shifted from 60% 'named without context' (Q2) to 75% 'named with context' (Q3) — entity-optimisation work is showing up in mention quality."]
- [e.g. "Perplexity citation rate jumped 18 percentage points on the mineral sunscreen cluster — Pick 1 publication is the likely driver."]
- [e.g. "Wikipedia is cited as a top source on 4 ingredient-explainer queries — knowledge-panel territory is structural; defer."]

## Recommendations
1. [e.g. "Continue mineral sunscreen Pick 1 follow-up content in Q4; cluster citation rate is climbing — invest in adjacent topics."]
2. [e.g. "Defer vitamin C unbranded territory until brand has DR 50+ and content moat — publisher dominance is structural."]
3. [e.g. "Invest in Wikidata brand entry — current 'named without context' mention quality on branded queries suggests entity-graph signal weakness."]
4. [e.g. "Re-baseline ingredient explainer cluster in Q1 next year — territory may shift as Healthline updates content."]

## Risks + watchouts
3-5 specific risks. E.g. "LLM responses are stochastic — single-quarter shifts may be noise; treat 2+ consecutive quarters of direction as signal"; "Engine personalisation may have leaked despite clean sessions; account-level signals can persist; consider running a parallel audit from a different machine / network for sanity check"; "Engine updates can shift citation patterns within weeks; a sudden mention-rate shift may reflect engine behaviour change, not brand-content change — investigate before reacting"; "Competitor share-of-voice numbers are sensitive to query-set composition; if the set evolves substantially quarter-over-quarter, Q-over-Q comparisons become noisy"; "Negative-sentiment mentions warrant investigation — review-bombing, misinformed AI summary, or genuine criticism each warrant different responses."

## Open questions
- [ ] Confirm next audit date (default: 90 days from this audit).
- [ ] Confirm whether to add new clusters to next quarter's query set.
- [ ] Confirm tooling decision (manual vs Profound / Goodie / Otterly.AI / Peec.ai) for next quarter — manual is reaching capacity ceiling at [n] queries.
- [ ] Confirm whether to expand to international markets (UK / Canada) in next quarter — market locale affects AI Overview citation.
```

Save the produced file to `businesses/<slug>/ai-seo/llm-visibility-audit-[YYYY-Qn].md` (e.g. `llm-visibility-audit-2026-Q2.md`). Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Query set documented (full list, grouped, with cluster + intent + branded/unbranded tagging).
- 2-3 samples per query × engine; modal behaviour captured, not single sample.
- Clean / fresh sessions per engine.
- Per-engine results reported, not just aggregated.
- Per-cluster results reported.
- Branded vs unbranded segmentation explicit.
- Mention quality reported on 4-tier scale, not just yes/no.
- Sentiment reported on 3-tier scale.
- Competitor share-of-voice ranked across the query set.
- Quarter-over-quarter comparison if prior audit exists.
- High-leverage gaps explicitly listed (opportunity vs skip).
- Recommendations grounded in findings (not generic).
- Risks + watchouts called out (especially stochasticity + personalisation).
- Acceptance criteria not applicable here (this is a measurement audit, not a remediation plan); open questions section maintains the cadence.

## Common mistakes to avoid

- Don't rely on single-sample probing — LLM responses are stochastic.
- Don't audit in your own logged-in session — personalisation skews results.
- Don't aggregate engines — per-engine reporting is the right unit.
- Don't count branded queries as wins — they're sense checks, not measurements.
- Don't ignore mention quality — "named in list" ≠ "named with context."
- Don't skip sentiment — negative-sentiment mentions are operational signals.
- Don't compare audits with substantially different query sets — keep 80%+ stable for longitudinal validity.
- Don't promise specific citation outcomes from interventions — engine behaviour is volatile.
- Don't drift from the cluster scope — site-wide audits dilute insight.
- Don't use the audit as a vanity metric — it's an operational input to strategy and content decisions.
- Don't forget to verify retrieval-bot access (Technical SEO leaf 10) — if bots are blocked, no mention is possible regardless of content.

## Example

**Input (abbreviated):** Field & Sun. Inaugural audit (Q2 2026). Cluster scope: mineral sunscreen, vitamin C, refills, ingredient explainer. Query set: 42 queries balanced.

**Output (abbreviated):**

Overall unbranded mention rate: 4% across all engines.

Per engine:
- Perplexity: 6% (highest — generous citation pattern).
- AI Overview: 5%.
- Claude: 4%.
- ChatGPT: 3%.
- Gemini: 3%.

Per cluster:
- Refills: 50% (only cluster with strong brand presence — explicit "refillable beauty" queries cite Field & Sun positively).
- Mineral sunscreen: 8% (mostly in-list mentions; opportunity — Pick 1 candidate).
- Vitamin C: 0% (publisher dominance; skip per generative-SEO strategy).
- Ingredient explainer: 0% (Healthline / Verywell / Wikipedia territory; defer).

Competitor share-of-voice: Wirecutter 38% / Strategist 24% / Supergoop 22% / ILIA 18% / Healthline 14% / Saie 11% / Field & Sun 4%.

Mention quality (Field & Sun): 70% in-list, 20% named without context, 10% named with context.

High-leverage gaps: 4 mineral sunscreen "white cast" queries (defensible angle); 4 refill queries (already strong, push to 70%).

Recommendations: launch generative-SEO Pick 1 (white cast cluster); defer vitamin C and ingredient explainer; invest in refill cluster content; baseline locked for Q3 comparison.

Saved to `businesses/field-and-sun/ai-seo/llm-visibility-audit-2026-Q2.md`.
