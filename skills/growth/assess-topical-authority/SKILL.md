---
name: assess-topical-authority
description: Produces a multi-quarter topical-authority assessment for a priority cluster, measuring current authority across six dimensions (coverage breadth — % of priority cluster queries with substantive content; coverage depth — average word count + original-evidence presence + source-citation count per piece; earned link profile — topic-specific link velocity per quarter and source quality; AI citation share — % of priority queries citing the brand across ChatGPT / Claude / Perplexity / Gemini / AI Overview; brand-query volume — direct branded search volume in topic area, trending; entity-graph signals — Wikidata / Knowledge Panel / sameAs schema status). Output is the authority gap analysis (current vs "recognised authority" target), the defensibility check (real moat vs wishful thinking), an authority graveyard check (Wikipedia / Wirecutter / Healthline territory or not), and a multi-quarter investment plan to close the gap or an explicit recommendation to skip the cluster. Use whenever the user asks to "assess topical authority," "are we the authority on X," "build a content moat," "topical authority plan," "should we invest in cluster X long-term," or runs an annual / quarterly strategic review. Also mandatory before committing to multi-year cluster investment. Do not use to design specific content (use Content SEO leaf 02 / 03 skills + AI SEO `design-citation-magnet-content`), to plan link acquisition (use `plan-link-magnet-strategy`), or to plan content scaling capacity (use `plan-content-scaling-operation`).
---

# Assess Topical Authority

This skill produces a multi-quarter topical-authority assessment per priority cluster. Output is a rigorous gap analysis with explicit defensibility check, authority-graveyard check, and a multi-quarter investment plan — or an honest recommendation to skip the cluster.

The skill is opinionated: authority requires sustained 12-24+ month investment; clusters in authority graveyards (dominated by Wikipedia / Wirecutter / Strategist / Healthline / Verywell) are skip-by-default unless defensibility is exceptional; defensibility must be specific (named original evidence, named credentials, named primary research) — generic "we care about quality" doesn't pass; concentrate on 2-3 clusters maximum, not 5-10.

## When to use this skill

- Before committing to multi-year cluster investment.
- Annual strategic review of which clusters to invest authority capital in.
- Quarterly re-baseline once authority work is in flight.
- The user asks "should we go deep on cluster X" or "are we the authority on Y."
- Strategic-review trigger when the brand is debating breadth vs depth.

## When NOT to use this skill

- The user wants to design specific content — use Content SEO `generate-content-brief` (leaf 08) or AI SEO `design-citation-magnet-content`.
- The user wants to plan link-magnet asset production — use `plan-link-magnet-strategy`.
- The user wants to plan content production capacity — use `plan-content-scaling-operation`.
- The user wants to audit a single page — use AI SEO `audit-ai-content-readiness` or NLP `audit-entity-optimisation`.
- The user has no defined cluster — recommend cluster mapping (Strategy + Content SEO) first.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `business-profile` first. Sections this skill cares about most: 3 (products), 5 (current SEO state — DR + ranking baseline), 6 (competitors), 7 (goals + constraints — informs investment horizon), 8 (brand voice — authority work stays on-voice).
2. **Priority cluster** — required. Which cluster is being assessed? Cross-reference `clusters/cluster-map.md`. Don't assess multiple clusters in one audit; assess one at a time for depth.
3. **Cluster query inventory** — required. The full priority query list for the cluster (typically 20-50 queries from keyword research + cluster mapping).
4. **Existing content** — required. URLs of all pages currently targeting cluster queries.
5. **LLM visibility baseline** — strongly recommended. If `ai-seo/llm-visibility-audit-*.md` exists, consume it. Without it, AI citation share dimension is unmeasurable.
6. **Off-page audit** — strongly recommended. If `off-page/*` artifacts exist (link-building plan, branded SERP audit), consume for link-velocity + source-quality data. Else recommend running off-page audit first.
7. **Competitor analysis** — required. Top 10 organic + AI-cited competitors per cluster head term. Either `competitor-analysis/*` or fresh data.
8. **Defensibility candidates** — required from user (or surfaced from profile). What does the brand have that competitors in this cluster don't? Original research? Primary evidence? Founder credentials? Distinctive editorial voice? Customer-evidence library? If none specific, the assessment will likely recommend skipping.

If LLM visibility baseline / off-page audit / defensibility candidates are missing, ask before proceeding. Don't invent defensibility for the brand.

## Process

1. **Map cluster query inventory.**
   - Pull the full priority query list (20-50 queries) for the cluster.
   - Classify by intent: commercial-review, informational-explainer, comparative, problem-solution, brand-specific.
   - Note priority queries vs supporting queries (a cluster can have 10 priority + 30 supporting).
2. **Authority graveyard check.**
   - For each priority query, identify top 5 organic + AI-cited sources.
   - Categorise the cluster: **Wikipedia-dominated** (generic ingredient / concept queries), **Wirecutter / Strategist-dominated** (commercial review queries on broad categories), **Healthline / Verywell / Mayo-dominated** (medical / dermatology generic content), **mixed** (no single source dominates), **brand-friendly** (D2C brands already cited; territory contestable).
   - Graveyard verdict: skip vs invest.
3. **Defensibility check.**
   - List the brand's specific defensibility levers for this cluster.
   - Test each against the criterion: would a competitor describe this as "they have [X] that we don't"?
   - **Pass:** original research / primary evidence / named credentials / distinctive customer-evidence library.
   - **Fail:** "good products," "better ingredients," "we care about quality," "customer reviews."
   - If all defensibility levers fail the test, the assessment recommends skip.
4. **Measure dimension 1 — Coverage breadth.**
   - Count: priority queries with substantive content vs total priority queries in cluster.
   - Coverage tiers: comprehensive (80%+), strong (60-80%), partial (40-60%), thin (20-40%), absent (<20%).
5. **Measure dimension 2 — Coverage depth.**
   - Per piece: word count, original-evidence presence (yes/no), source-citation count, last-updated date, entity coverage, schema presence.
   - Depth tiers per piece: deep (3,000+ words + original evidence + 8+ citations), medium (1,500-3,000 + some evidence + 3-7 citations), thin (<1,500 + no original evidence + <3 citations).
   - Aggregate: % of cluster pages in each tier.
6. **Measure dimension 3 — Earned link profile.**
   - Topic-specific link velocity per quarter (links from sources in the topic area).
   - Source quality distribution (DR + topical relevance per linking source).
   - Authority brands have rising / stable topic-specific link velocity; non-authority brands have flat / declining.
7. **Measure dimension 4 — AI citation share.**
   - % of priority cluster queries where brand is cited across ChatGPT / Claude / Perplexity / Gemini / AI Overview.
   - From `ai-seo/llm-visibility-audit-*.md`. Per-engine + aggregate.
   - Authority brands have rising citation share; non-authority brands have flat / falling.
8. **Measure dimension 5 — Brand-query volume.**
   - Direct branded search volume in topic area: "[brand] [topic]" / "[brand] [product]" / "[brand] vs [competitor]" / "[brand] reviews."
   - From GSC / Ahrefs / Semrush.
   - Authority brands grow brand-query volume in topic area; pure-SEO brands don't.
9. **Measure dimension 6 — Entity-graph signals.**
   - Wikidata entry: present / absent / approved-but-thin.
   - Wikipedia presence: present (notability check passed) / absent / not eligible.
   - Schema `sameAs` on `Organization`: present / absent.
   - Knowledge Panel for branded query: present / absent.
   - Authority brands have aligned entity-graph signals; non-authority brands don't.
10. **Compute authority-tier verdict.**
    - **Recognised authority:** comprehensive coverage, depth-rich, rising link velocity, citation share 50%+, brand-query growth, entity-graph aligned.
    - **Approaching authority:** strong coverage, mostly medium depth, rising link velocity, citation share 25-50%, brand-query growth visible, entity-graph partial.
    - **Foundational:** partial coverage, mixed depth, modest link velocity, citation share 10-25%, brand-query baseline, entity-graph weak.
    - **Pre-authority:** thin coverage, mostly thin depth, low link velocity, citation share <10%, no brand-query growth, entity-graph absent.
11. **Cross-reference with goals.**
    - Does the cluster matter commercially? (From profile section 7 — goals + customer pains.)
    - If commercially low-priority + non-trivial investment required, surface the trade-off.
12. **Produce the multi-quarter plan.**
    - If invest: roadmap covering content production (cluster fill), original-evidence creation, link-magnet plan, off-page outreach, entity-graph foundation, AI citation strategy. 4-8 quarters typical.
    - If skip: explicit recommendation with reasons + alternative use of capacity.
    - If conditional: which conditions need to be true for the cluster to become invest-worthy (e.g. "build the photography moat first; revisit in 6 months").
13. **Write the assessment.**

## Output format

```markdown
# Topical Authority Assessment — [Business name] — [Cluster name]

**Assessment date:** [date]
**Cluster:** [cluster name]
**Investment horizon under consideration:** [12-24 months / 6-12 months / etc.]
**Author:** [name / role]

## Executive summary
- **Current authority tier:** [Recognised authority / Approaching authority / Foundational / Pre-authority]
- **Authority graveyard:** [Yes / No — with reason]
- **Defensibility verdict:** [Real / Partial / Wishful thinking]
- **Recommendation:** [Invest 18 months / Skip / Conditional — see plan]
- **Headline:** [1-2 sentences].

## Cluster query inventory
| Query | Intent | Priority | Top 5 organic / AI-cited |
|-------|--------|----------|--------------------------|
| ... | ... | ... | ... |

## Authority graveyard check
- **Cluster category:** [Wikipedia-dominated / Wirecutter-Strategist-dominated / Healthline-Verywell-Mayo-dominated / Mixed / Brand-friendly]
- **Reason:** [explain the dominance pattern].
- **Implication:** [if graveyard, the bar for defensibility rises sharply; if mixed / brand-friendly, the cluster is contestable].

## Defensibility check
**Brand's defensibility levers (specific):**
- [Lever 1: e.g. "Fitzpatrick I-VI photography library — 200+ customer photos, consistent methodology, consent on file"]
- [Lever 2: e.g. "Founder dermatology adjacency — specific credentials"]
- [Lever 3: e.g. "Six months of formulation work on iron oxide tinting — primary research available for publication"]

**Brand's NON-levers (do not lean on):**
- [Generic claims: e.g. "good ingredients," "customer love"]

**Verdict:** [Real / Partial / Wishful — with reasoning].

## Six-dimension measurement

### Coverage breadth
- **Priority queries with substantive content:** [n] of [n] ([%])
- **Tier:** [Comprehensive / Strong / Partial / Thin / Absent]
- **Notable gaps:** [list 5-10 priority queries with no / weak coverage]

### Coverage depth
| Tier | % of cluster pages |
|------|---------------------|
| Deep (3,000+ words + original evidence + 8+ citations) | [%] |
| Medium (1,500-3,000 + some evidence + 3-7 citations) | [%] |
| Thin (<1,500 + no original evidence + <3 citations) | [%] |

- **Notable depth gaps:** [list pages where depth could be lifted].

### Earned link profile
- **Topic-specific link velocity (last 4 quarters):** [n / Q1, n / Q2, n / Q3, n / Q4]
- **Trend:** [rising / stable / declining]
- **Source quality:** [DR distribution; topical relevance summary]
- **Comparison to top 3 cluster competitors:** [their link velocity; gap analysis]

### AI citation share
- **Aggregate across engines:** [%]
- **Per engine:**
  - ChatGPT: [%]
  - Claude: [%]
  - Perplexity: [%]
  - Gemini: [%]
  - AI Overview: [%]
- **Trend (Q-over-Q if prior data):** [direction]
- **Cited competitors in same cluster:** [list]

### Brand-query volume
- **Cluster brand-query volume (last 4 quarters):** [n / Q1, ..., n / Q4]
- **Trend:** [rising / stable / declining]
- **Notable queries:** [list top brand+topic queries]

### Entity-graph signals
- **Wikidata entry:** [present / absent / pending]
- **Wikipedia presence:** [present / absent / not eligible (notability)]
- **`Organization.sameAs` schema:** [present / absent]
- **Knowledge Panel for branded query:** [present / absent]
- **Trend:** [improving / static]

## Authority gap analysis

**Current state:** [Tier — see executive summary].
**Target state (for "Recognised authority" verdict):** [criteria summarised].
**Gap, by dimension:**

| Dimension | Current | Target | Gap | Effort to close |
|-----------|---------|--------|-----|-----------------|
| Coverage breadth | [%] | 80%+ | [n] more pieces | [estimated quarters] |
| Coverage depth | [%] deep | 60%+ deep | Lift / refresh [n] pieces | [estimated quarters] |
| Link velocity | [n / Q] | [n / Q] | + [n] / Q | [estimated quarters] |
| AI citation share | [%] | 50%+ | + [n] points | [estimated quarters] |
| Brand-query volume | [n] | [n target] | [growth %] | [estimated quarters] |
| Entity-graph signals | [partial] | [aligned] | [Wikidata + sameAs + ...] | [estimated quarters] |

## Multi-quarter investment plan

**Horizon:** [n] quarters.
**Total investment:** [content production weeks + original-evidence production + link-magnet production + outreach capacity + entity-graph work].

### Quarter 1 (Q[n] [year])
- **Content production:** [n] cluster spokes; [n] pillar refresh; [n] supporting evergreen.
- **Original evidence:** [original-research / primary-evidence asset spec — cross-reference `plan-link-magnet-strategy`].
- **Link-magnet production:** [asset spec].
- **Off-page:** topic-specific outreach to [n] target publications.
- **Entity-graph:** [Wikidata draft / sameAs schema implementation / etc.].
- **Measurement:** quarterly re-run of `audit-llm-visibility` for the cluster; rank tracking; brand-query volume.

### Quarter 2 (Q[n] [year])
[Same structure]

[Repeat per quarter through end of horizon]

## Skip-list (if applicable)
- **Recommended:** skip this cluster.
- **Reason:** [authority graveyard / defensibility weak / commercially low-priority / etc.]
- **Alternative use of capacity:** [redirect to which cluster].
- **Revisit when:** [conditions that would change the call].

## Cross-references
- Off-page link acquisition for this cluster: cross-reference `plan-link-magnet-strategy` (Growth leaf 03).
- Content production capacity for the multi-quarter plan: cross-reference `plan-content-scaling-operation` (Growth leaf 02).
- Per-content-piece briefs: cross-reference `generate-content-brief` (Content SEO leaf 08) and `design-citation-magnet-content` (AI SEO leaf 03).
- AI citation strategy: cross-reference `plan-generative-seo-strategy` (AI SEO leaf 03).
- Entity-graph work: cross-reference `audit-entity-optimisation` (AI SEO leaf 02).

## Risks + watchouts
3-5 specific risks. E.g. "Authority work has 6-18 month feedback loops — leadership patience required; document the bet in AGENTS.md so quarterly pressure doesn't pivot the strategy"; "Defensibility moats erode if competitors invest in the same direction — re-test annually"; "If retrieval bots are blocked at robots.txt, AI citation share dimension is unmeasurable — verify Technical SEO leaf 10 audit before relying on it as a KPI"; "Brand-query volume is a lagging indicator — expect 12+ months of investment before meaningful brand-query growth"; "Entity-graph signals (Wikidata) are reviewer-gated and can be rejected on notability — plan for that contingency."

## Open questions
- [ ] Confirm investment-horizon decision (12 / 18 / 24 months).
- [ ] Confirm capacity allocation per quarter (content + photography + link-magnet + outreach).
- [ ] Confirm whether to defer or proceed with parallel work in adjacent clusters.
- [ ] Confirm executive-level documentation of the multi-year bet.
```

Save the produced file to `businesses/<slug>/growth/topical-authority-assessment-[cluster-slug]-[YYYY-MM-DD].md`. Create the `growth/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Cluster-scoped, not site-wide.
- Authority graveyard check explicit.
- Defensibility check forces specificity (no "good ingredients" passes).
- All six dimensions measured (no skipping).
- Authority tier verdict assigned (not vague).
- Multi-quarter plan covers 4-8 quarters with per-quarter detail.
- Skip recommendation is explicit when warranted (not silently dropped).
- Cross-references to adjacent skills (rather than duplicating their work).
- Brand voice respected — Field & Sun: ingredient-led, plain-language, no rejected framing.
- Risks + watchouts surface the 6-18-month-feedback-loop and leadership-patience challenge.
- Open questions section maintains the operational cadence.

## Common mistakes to avoid

- Don't assess multiple clusters in one audit — depth per cluster matters.
- Don't pass weak defensibility — generic claims should fail the test.
- Don't recommend invest in authority graveyards without exceptional defensibility.
- Don't aggregate engines on AI citation share — per-engine reporting is more revealing.
- Don't skip the brand-query volume dimension — it's the most lagging but most diagnostic indicator.
- Don't propose 1-2 quarter plans — authority is multi-quarter.
- Don't drift into content design — that's Content SEO + AI SEO territory.
- Don't drift from Field & Sun voice — recommendations stay on-voice.
- Don't promise authority by quarter N — authority emerges over time and is measurable, not promiseable.
- Don't treat one quarter of measurement as conclusive — direction over multiple quarters is the signal.

## Example

**Input (abbreviated):** Field & Sun. Cluster: mineral sunscreen. Investment horizon: 18 months. LLM visibility baseline + competitor analysis + defensibility candidates available.

**Output (abbreviated):**

Authority graveyard: mixed — Wirecutter dominates head terms, but problem-solution queries ("white cast on darker skin tones") are contestable. Verdict: contestable.

Defensibility: real. Fitzpatrick I-VI photography library (200+ photos, consent on file); founder dermatology adjacency; six months of iron oxide tinting formulation work documented. Verdict: real.

Six-dimension current state:

- Coverage breadth: 24% (6 of 25 priority queries) — Thin → Partial.
- Coverage depth: 30% deep, 40% medium, 30% thin.
- Link velocity: 1 / Q — flat.
- AI citation share: 8% aggregate (0% Q1; 8% Q2 — early lift from Pick 1).
- Brand-query volume: rising slowly (+15% Q-over-Q).
- Entity-graph: weak — Wikidata absent; sameAs partial; no Knowledge Panel.

Authority tier: Pre-authority → approaching foundational.

Recommendation: **Invest 18 months.** Defensibility passes; cluster is contestable on the problem-solution / evidence-based subset (not the head-term commercial-review subset, which goes on the skip list).

Multi-quarter plan: Q3 — pillar refresh + 5 spokes + Pick 2 (iron oxide tinting mechanism); Q4 — 6 spokes + 1 link-magnet asset (original Fitzpatrick research) + Wikidata draft + 5 publication outreach. Q1-Q2 next year — 8 spokes + 1 original-research piece + sameAs schema + 10 publications outreach. Q3-Q4 next year — refresh + adjacency expansion + measurement re-baseline.

Saved to `businesses/field-and-sun/growth/topical-authority-assessment-mineral-sunscreen-2026-05-02.md`.
