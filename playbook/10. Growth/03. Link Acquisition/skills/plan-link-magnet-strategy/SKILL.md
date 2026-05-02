---
name: plan-link-magnet-strategy
description: Produces a quarterly link-magnet asset programme tied to the priority topical-authority cluster(s) — identifies 4-6 link-magnet asset candidates across the defensibility ladder (original research / primary data; definitive guides; free tools / calculators; comparative resources; visual / data assets; curated lists / databases), evaluates per-asset defensibility and link potential, specs each asset (defensibility argument, target queries, production team and timeline, promotion plan, anchor publications, link target, measurement plan), sequences across a 12-24 month production calendar, estimates total cost, and defines per-asset KPIs. Use whenever the user asks to "plan link acquisition," "design link-magnet assets," "what assets should we build for links," "link-bait strategy," "link velocity plan," "build assets that earn links," or has a topical-authority play that needs external-signal feeding. Also quarterly cadence per priority cluster. Do not use to plan tactical outreach (use Off-page leaf 01 link-building skills), to design Digital PR pitches (use Off-page leaf 03), to design specific content (use AI SEO `design-citation-magnet-content` or Content SEO `generate-content-brief`), or to assess topical authority strategy (use `assess-topical-authority`).
---

# Plan Link-Magnet Strategy

This skill produces a 12-24 month link-magnet asset programme — 4-6 assets, sequenced, spec'd, costed, with promotion + measurement built in. The skill is opinionated about which asset types compound and which produce one-off links without defensibility.

The skill is opinionated: link acquisition tied to topical authority compounds; random-topic asset programmes earn links without strategic compounding; defensibility ladder matters (original research > definitive guides > free tools > comparative > visual > curated lists); promotion is part of the asset, not an afterthought; refresh cadence is mandatory; no anti-patterns (paid links, PBNs, link exchanges, scaled guest posting); per-asset measurement is non-negotiable.

## When to use this skill

- Topical-authority assessment (Growth leaf 01) recommends investment and external-signal feeding is required.
- The user is debating "what link-magnet assets should we build."
- Annual / quarterly review of link-acquisition programme.
- The user has a Digital PR / Off-page outreach engine but lacks linkable assets to feed it.
- Pre-budget-cycle scoping for the asset-production line item.

## When NOT to use this skill

- The user wants tactical outreach planning — use Off-page leaf 01 link-building skill.
- The user wants Digital PR pitch design — use Off-page leaf 03.
- The user wants specific content design — use `generate-content-brief` (Content SEO leaf 08) or `design-citation-magnet-content` (AI SEO leaf 03).
- The user wants topical-authority assessment — use `assess-topical-authority`.
- The user has no priority cluster — recommend cluster mapping + topical-authority assessment first.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 3 (products), 6 (competitors), 7 (goals + constraints — informs production budget), 8 (brand voice).
2. **Topical-authority assessment** — required. From `growth/topical-authority-assessment-*.md`. Identifies the priority cluster(s) the asset programme is feeding.
3. **Cluster context** — required. Cluster query inventory; current pillar / cluster pages; existing original-evidence / research assets (if any).
4. **Off-page outreach manual** — recommended. From `off-page/outreach-manual.md` if it exists. Asset programme should integrate with the outreach pipeline.
5. **Production capacity** — recommended. From `growth/content-scaling-plan-*.md` if it exists. Asset production needs capacity allocation distinct from cluster-fill content.
6. **Defensibility candidates** — required. What does the brand have / can produce that competitors can't? Original photography, customer-evidence library, founder credentials, primary research, proprietary datasets, brand-distinctive methodology.
7. **Budget constraint** — required. Total link-magnet production budget per quarter / year.

If topical-authority assessment or defensibility candidates are missing, ask before producing the plan.

## Process

1. **Ground in topical authority.**
   - Pull the priority cluster(s) from the topical-authority assessment.
   - Note the gap dimensions (coverage breadth, depth, link velocity, AI citation share, entity-graph signals) — link-magnet assets should target the dimensions where investment makes sense.
2. **Inventory existing link-acquisition state.**
   - Current quarterly link velocity (cluster-relevant).
   - Existing assets (any link-magnet candidates already in the catalogue?).
   - Outreach manual capacity.
   - Defensibility-candidate inventory.
3. **Brainstorm asset candidates across the defensibility ladder.**
   - **Original research / primary data.** Surveys, customer testing, photographic libraries, longitudinal datasets. List 2-4 candidates.
   - **Definitive guides.** Comprehensive, evidence-rich, source-cited deep dives. List 2-4 candidates.
   - **Free tools / calculators.** Single-purpose utilities. List 2-4 candidates.
   - **Comparative resources.** Side-by-side product / ingredient comparisons. List 1-2 candidates.
   - **Visual / data assets.** Infographics, photographic libraries, datasets. List 1-2 candidates.
   - **Curated lists / databases.** "Every brand using X" / "all FDA-approved Y." List 1-2 candidates.
4. **Evaluate per candidate.**
   - **Defensibility:** real moat or replicable?
   - **Cluster fit:** does it support the priority cluster's authority play?
   - **Production cost:** estimated weeks / dollars.
   - **Link potential:** estimated links over 24-month lifetime (10-20 / 30-60 / 60-120 / 100+ ranges).
   - **Promotion path:** which publications / journalists / channels?
   - **Refresh cadence:** annual / biennial / one-time.
   - **Cross-category compounding:** does it also serve as citation-magnet (AI SEO), pillar / evergreen content (Content SEO), brand asset (Off-page)?
5. **Score and sequence.**
   - Rank candidates by (defensibility × cluster fit × link potential) / production cost.
   - Pick 4-6 for the programme. Concentrate, don't spread.
   - Sequence by production-cost / cluster-priority.
6. **Spec each picked asset (one-page brief per asset).**
   - Name + asset type.
   - Defensibility argument (specific).
   - Target queries the asset answers.
   - Production team (in-house vs contractor; photography / dev / research / writing).
   - Timeline (weeks).
   - Cost estimate.
   - Promotion plan: pre-launch outreach to anchor publications (3-5 named); launch-day social / newsletter / email; post-launch outreach over 60-90 days; cross-reference outreach manual.
   - Anchor publications (named).
   - Link target (number of links over 24 months; rationale).
   - Measurement plan: per-asset link tracker (Ahrefs / Semrush); citation tracking in AI search (`audit-llm-visibility`); cluster link-velocity contribution.
   - Refresh cadence.
   - Cross-category compounding (citation-magnet / pillar / Off-page).
7. **Production-calendar sequencing.**
   - Map assets across 12-24 months.
   - Stagger to avoid resource bottlenecks (one photography-heavy + one writing-heavy in parallel; no two photography-heavy at once).
   - Cross-reference scaling plan capacity (Growth leaf 02).
8. **Cost summary.**
   - Per asset + total programme.
   - Compare to current outreach-only spend; surface ratio.
9. **Per-asset + programme KPIs.**
   - Per asset: links over 12 / 24 months; AI citation rate lift on related queries; organic traffic to the asset; secondary brand mentions.
   - Programme: cluster link velocity quarter-over-quarter; cluster topical-authority KPI movement; AI citation share lift.
10. **Anti-pattern reminder.**
    - No paid link schemes, PBNs, link exchanges, scaled guest posting, comment-stuffing.
    - These produce short-term velocity at long-term penalty risk.
11. **Write the plan.**

## Output format

```markdown
# Link-Magnet Strategy — [Business name] — [Cluster name]

**Plan date:** [date]
**Cluster scope:** [cluster name(s)]
**Investment horizon:** [12 / 18 / 24 months]
**Total programme cost:** $[n]
**Author:** [name / role]

## Executive summary
- **Asset programme:** [n] link-magnet assets over [horizon]
- **Total link target:** [n]-[n] links over 24 months
- **Cluster authority impact:** [headline]
- **Total programme cost:** $[n]
- **Headline:** [1-2 sentences].

## Topical-authority context
- **Priority cluster(s):** [list]
- **Authority assessment date:** [date]
- **Gap dimensions to feed:** [coverage breadth / depth / link velocity / AI citation share / etc.]
- **Defensibility candidates:** [list specific brand levers]

## Existing state
- **Current quarterly link velocity (cluster):** [n / Q]
- **Existing link-magnet candidates:** [list any]
- **Outreach manual capacity:** [from Off-page leaf 05]

## Asset candidate inventory (across defensibility ladder)

| # | Type | Candidate | Defensibility | Cluster fit | Cost | Link potential | Score | Picked? |
|---|------|-----------|---------------|-------------|------|----------------|-------|---------|
| 1 | Original research | Fitzpatrick I-VI photographic study | High (proprietary library) | High (mineral cluster) | 6 wk / $X | 60-100 links | 9 | YES |
| 2 | Original research | Refill efficacy + waste primary research | High (proprietary survey + customer cohort) | High (refill cluster) | 6 wk / $Y | 40-70 links | 8 | YES |
| 3 | Definitive guide | Iron oxide tinting mechanism guide | Medium (evidence-rich; replicable in principle) | High (mineral cluster) | 4 wk / $Z | 30-50 links | 7 | YES |
| 4 | Free tool | SPF cost-per-day calculator | High (utility; refillable angle) | High (refill + mineral cluster) | 3 wk / $W | 50-80 links | 8 | YES |
| 5 | Comparative resource | Mineral SPF formulation database | High (curation + ongoing maintenance) | High (mineral cluster) | 8 wk / $V | 80-120 links | 9 | YES |
| 6 | Definitive guide | Refillable beauty buyers' guide | Medium-High (multi-brand methodology) | High (refill cluster) | 6 wk / $U | 50-80 links | 7 | YES |
| 7 | Listicle | Top 10 mineral SPFs of [year] | Low (replicable) | Medium | 1 wk / $T | 5-15 links | 3 | NO |
| 8 | ... | ... | ... | ... | ... | ... | ... | ... |

## Picked asset programme — per-asset specs

### Asset 1: Original Fitzpatrick I-VI Photographic Study

- **Type:** Original research / primary data.
- **Defensibility argument:** 200+ photos across 8 customers × 3 product applications under consistent lighting methodology; documented consent; reproducible / extensible. No competitor in the cluster has equivalent.
- **Target queries:** "tinted mineral sunscreen for darker skin tones," "mineral SPF white cast Fitzpatrick V VI," "best mineral SPF for medium-to-deep skin tones," + ~12 supporting queries.
- **Production team:** photographer (1 wk shooting + 1 wk post-production); customer recruitment (marketing lead, 1 wk); writer (2 wk); design / layout (1 wk); legal review (1 wk). Total 6 wk.
- **Cost:** ~$[n] (photographer + customer compensation + production).
- **Promotion plan:**
  - Pre-launch (week -2 to 0): outreach to 5 anchor publications (Allure, Byrdie [yes / not always — verify cluster fit], dermatology trade press, sustainability publications, Refinery29 beauty).
  - Launch day: blog publication + social (Instagram primary; X / Twitter / LinkedIn secondary) + newsletter feature + email-to-list.
  - Post-launch (60-90 days): outreach to 30 publications + journalists + influencers via outreach manual; HARO responses where relevant.
- **Anchor publications:** [list 5 named, with rationale per pub].
- **Link target:** 60-100 links over 24 months; 30-40 in first 6 months.
- **Measurement plan:** per-asset Ahrefs link tracker; quarterly link-velocity contribution; AI citation tracking via `audit-llm-visibility` on the 4 priority queries; organic traffic to the asset; brand-query volume on cluster.
- **Refresh cadence:** annual — extend with new customer cohort / new products tested.
- **Cross-category compounding:** also serves as the citation-magnet asset for AI SEO Pick 1 (`design-citation-magnet-content`); also serves as the visual content for the cluster pillar; also feeds Off-page Digital PR campaign.

### Asset 2: [Asset name]
[Same structure]

[Repeat per picked asset — typically 4-6 assets]

## Production calendar

| Quarter | Asset 1 | Asset 2 | Asset 3 | Asset 4 | Asset 5 | Asset 6 |
|---------|---------|---------|---------|---------|---------|---------|
| Q3 2026 | Production | Production | — | — | — | — |
| Q4 2026 | Launched + promotion | Launched + promotion | Production | — | — | Production |
| Q1 2027 | Sustained outreach | Sustained outreach | Launched + promotion | Production | — | Launched + promotion |
| Q2 2027 | Refresh prep | Refresh prep | Sustained outreach | Launched + promotion | Production | Sustained outreach |
| Q3 2027 | Refresh shipped | Refresh shipped | Sustained outreach | Sustained outreach | Launched + promotion | Sustained outreach |

## Programme cost summary

| Asset | Production cost | Promotion cost | Total |
|-------|----------------|----------------|-------|
| 1 | $[n] | $[n] | $[n] |
| 2 | $[n] | $[n] | $[n] |
| 3 | $[n] | $[n] | $[n] |
| 4 | $[n] | $[n] | $[n] |
| 5 | $[n] | $[n] | $[n] |
| 6 | $[n] | $[n] | $[n] |
| **Total programme** | $[n] | $[n] | $[n] |

**Vs current outreach-only spend:** [ratio]

## Programme KPIs

| KPI | Target | Tracking |
|-----|--------|----------|
| Total links over 24 months | [n]-[n] | Per-asset Ahrefs trackers |
| Cluster link-velocity (Q-over-Q growth) | + [n] / Q | Cluster filter on Ahrefs |
| AI citation share lift (cluster) | + [n] points / Q | `audit-llm-visibility` quarterly |
| Brand-query volume growth (cluster) | + [n]% / Q | GSC + Ahrefs |
| Organic traffic to assets | [n] sessions / month aggregate | GA4 + GSC |
| Secondary brand mentions | [n] / quarter | Brand-mention monitoring (Off-page leaf 04) |

## Anti-patterns (do not do)
- Paid link schemes / link buying.
- PBNs (private blog networks).
- Link exchanges / reciprocal-link schemes.
- Scaled guest posting (low-quality publications, syndicated content).
- Comment / forum link-stuffing.
- Pitches with disguised commercial intent.

These produce short-term link velocity at long-term penalty risk. The programme above produces durable, defensible link velocity instead.

## Risks + watchouts
3-5 specific risks. E.g. "Original-research production costs can blow through budget if customer recruitment / photographer scope creeps — lock the scope before kickoff"; "Anchor publication outreach has variable response rates; pre-launch relationships should be warmed (Off-page leaf 03 + leaf 06) before relying on cold pitches"; "Free-tool assets require ongoing maintenance (data updates; bug fixes); under-budgeting maintenance produces decay"; "Curated database / formulation database asset has high upkeep — annual refresh is non-negotiable; without refresh, link velocity declines"; "Refusing anti-patterns can feel slow when leadership wants link velocity now — protect the discipline."

## Open questions
- [ ] Confirm budget commitment for the $[n] programme cost.
- [ ] Confirm photographer / dev capacity for primary-evidence assets.
- [ ] Confirm legal review path for primary research with customer participants.
- [ ] Confirm priority anchor publications for outreach (warm-relationship prerequisites).
- [ ] Confirm whether asset programme is integrated with Digital PR engagement (Off-page leaf 03).
```

Save the produced file to `businesses/<slug>/growth/link-magnet-strategy-[YYYY-Qn].md` (e.g. `link-magnet-strategy-2026-Q3.md`). Create the `growth/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Tied to topical-authority cluster(s); not random-topic.
- Defensibility ladder explicit (asset types ranked).
- 4-6 picked assets, not 12 (concentration over breadth).
- Per-asset spec is one-page detailed (defensibility, target queries, production team, timeline, cost, promotion, anchor publications, link target, measurement, refresh, cross-category compounding).
- Production calendar staggers resource bottlenecks.
- Cost estimated per asset + programme.
- Programme KPIs defined with specific targets.
- Anti-pattern reminder explicit (paid links, PBNs, etc.).
- Cross-references to Off-page leaves (1, 3, 5, 6), AI SEO leaf 3, Growth leaves (1, 2).
- Brand voice respected — Field & Sun: ingredient-led, plain-language, specific.

## Common mistakes to avoid

- Don't recommend random-topic assets — tie to topical authority.
- Don't pick 10 assets — 4-6 concentrates resources.
- Don't pick listicles or thin assets — defensibility ladder filter.
- Don't skip promotion plans — the asset is half the work.
- Don't skip refresh cadence — assets decay.
- Don't recommend anti-patterns under pressure (paid links, PBNs, exchanges, scaled guest posting).
- Don't ignore cross-category compounding — citation-magnet / pillar / Off-page synergies are part of the value.
- Don't drift from Field & Sun voice in asset framing.
- Don't promise specific link counts — give ranges grounded in asset type + competitive context.
- Don't bundle this into general content scaling — asset production is a separate capacity stream.

## Example

**Input (abbreviated):** Field & Sun. Priority clusters: mineral sunscreen + refills (per topical-authority assessment). Defensibility: Fitzpatrick I-VI photography library; founder dermatology adjacency; refill primary-research opportunity. Budget: $30,000 over 12 months for asset programme.

**Output (abbreviated):**

Picked 6 assets:
1. Fitzpatrick I-VI photographic study (mineral, original research, 6 wk, ~$8k, link target 60-100, also citation-magnet for AI SEO Pick 1).
2. Refill efficacy + waste primary research (refills, original research, 6 wk, ~$5k, link target 40-70).
3. Iron oxide tinting mechanism guide (mineral, definitive guide, 4 wk, ~$3k, link target 30-50).
4. SPF cost-per-day calculator (mineral + refill, free tool, 3 wk + dev, ~$4k, link target 50-80, indefinite refresh).
5. Mineral SPF formulation database (mineral, comparative resource, 8 wk, ~$6k, link target 80-120, annual refresh).
6. Refillable beauty buyers' guide (refills, definitive guide, 6 wk, ~$4k, link target 50-80, biennial refresh).

Total programme cost: ~$30k production + ~$5k promotion = ~$35k over 12 months.
Total link target: 310-500 over 24 months.

Calendar: Q3 2026 — Assets 1+2 production; Q4 2026 — Assets 3+6 production; Q1 2027 — Asset 4 production + Asset 1+2 launch + sustained outreach; Q2 2027 — Asset 5 production + Asset 3+6 launch; Q3 2027 — Asset 4+5 launch + Asset 1+2 refresh prep; Q4 2027 — Asset 1+2 refresh shipped.

KPIs: cluster link velocity 1/Q → 8-10/Q over 12 months; AI citation share +30 points (cluster); brand-query volume +50% over 18 months.

Anti-patterns explicitly off the table: no paid links, PBNs, exchanges, scaled guest posting.

Saved to `businesses/field-and-sun/growth/link-magnet-strategy-2026-Q3.md`.
