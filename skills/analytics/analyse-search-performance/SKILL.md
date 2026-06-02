---
name: analyse-search-performance
description: Produces a structured GSC performance analysis: patterns, wins, drops, and CTR opportunities by page and query cluster. Use for a quarterly review or to diagnose a traffic change.
---

# Analyse Search Performance

This skill produces a structured GSC performance analysis. Output is the report stakeholders read — pattern-rich, decision-oriented, anchored to clusters where possible.

The skill is opinionated about a few things: rolling up to cluster level produces more useful insights than page-level data alone; CTR vs benchmark is the highest-ROI optimisation lens; quarter-over-quarter is the right comparison window for most analyses (28-day windows are too noisy); decline detection should drive refresh prioritisation, not panic.

## When to use this skill

- The user wants a quarterly / monthly GSC review.
- The user is preparing a board / executive report on SEO performance.
- The user wants to identify refresh / optimisation candidates.
- The user is investigating an apparent decline / surge.
- The user is briefing strategy on which clusters are working / not.

## When NOT to use this skill

- The user wants to audit GSC configuration — use `audit-search-console-setup`.
- The user wants to set up rank tracking — use `set-up-rank-tracking`.
- The user wants to plan content refresh based on the analysis — that's the next step (handoff to `plan-content-refresh`).
- The user wants daily-granularity rank data — GSC reports averages; use a third-party rank tracker.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical sections: products/services (3), goals (7).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster rollup is part of the analysis.
3. **GSC access** — required (or exported CSV / API access).
4. **Comparison window** — required. Default: last 90 days vs prior 90 days. Alternative: YoY (last 90 days vs same 90 days last year), if data retention covers it.
5. **Analysis depth** — optional. "Standard" (top queries, top pages, decline detection, CTR opportunities) or "Deep" (adds query-page intersection, cluster rollup, segment analysis). Default: standard for monthly, deep for quarterly.

If GSC access or comparison window is missing, ask. The analysis is comparative.

## Process

1. **Pull the data.**
   - Performance report: queries × pages × dates. Last 90 days + prior 90 days (or YoY).
   - If site is large (>1,000 query rows): use API or BigQuery export.
2. **Top-queries summary.**
   - Top 25 queries by clicks (current period).
   - Top 25 queries by impressions (current period).
   - Top movers — queries that gained the most clicks vs prior period.
   - Top decliners — queries that lost the most clicks vs prior period.
3. **Top-pages summary.**
   - Top 25 pages by clicks.
   - Top 25 pages by impressions.
   - Top movers and decliners (page level).
4. **Decline detection.**
   - Queries that lost ≥30% impressions and were getting ≥100 impressions/mo prior — flagged for investigation.
   - Pages that lost ≥30% clicks and were getting ≥50 clicks/mo prior — flagged for refresh consideration.
   - Position drops ≥5 positions on previously-top-10 queries — flagged.
5. **CTR opportunities.**
   - Queries with position 4-15 and CTR ≥30% below position-benchmark — title/description rewrite candidates.
   - Position-CTR benchmarks: position 1 ~30%, 2 ~15%, 3 ~10%, 4 ~7%, 5 ~5%, 6-10 ~2-4%, 11-20 ~1-2%. Below-benchmark by ≥30% is the signal.
6. **Query ↔ page intersection.**
   - Identify cases where multiple pages are competing for the same query (cannibalisation): same query, multiple pages with non-trivial impressions. Flag for canonical / consolidation review.
   - Identify cases where a page ranks for queries the team didn't target (unexpected wins) — feed back to keyword research.
7. **Cluster rollup.**
   - For each cluster from the cluster map: total clicks, total impressions, average position, cluster-level WoW / MoM / QoQ trend.
   - Identify clusters that are gaining vs decaying.
   - Identify clusters with high impressions but low clicks (CTR opportunity at cluster level).
8. **Page-type rollup.**
   - Blog vs PDP vs collection vs other: clicks, impressions, position, conversions if joinable to GA4.
   - Often surfaces structural insight (e.g. blog grew 40% but PDPs flat).
9. **Branded vs non-branded.**
   - Approximate split (queries containing brand name vs not).
   - Branded growth = brand awareness; non-branded growth = SEO contribution.
   - Flag if branded grew but non-branded didn't (often signals over-attribution to SEO of brand-driven gains).
10. **Country / device segmentation (where relevant).**
    - For brands operating in multiple markets: country-level breakdown.
    - Device split: mobile vs desktop CTR / position differences.
11. **Insights & recommendations.**
    - What's working (continue / double down).
    - What's decaying (refresh / fix).
    - What's surprising (investigate / capitalise).
    - Top 5-10 prioritised actions, each tied to an existing toolkit skill (refresh, title rewrite, canonical fix, etc.).
12. **Write the report.**

## Output format

```markdown
# GSC Performance Analysis — [Business name]

**Analysis period:** [start date] → [end date]
**Comparison period:** [start date] → [end date]
**Analysis date:** [date]

## Executive summary
- Total clicks: [n] ([+/- %] vs prior)
- Total impressions: [n] ([+/- %] vs prior)
- Average position: [n] ([+/- ] vs prior)
- Average CTR: [%] ([+/- pp] vs prior)
- **Headline:** [1-2 sentences on the dominant story]

## Top 10 winners (queries)
| Query | Current clicks | Δ vs prior | Current position | Driver |
|-------|----------------|------------|------------------|--------|
| ... | ... | ... | ... | ... |

## Top 10 decliners (queries)
| Query | Current clicks | Δ vs prior | Current position | Hypothesis |
|-------|----------------|------------|------------------|------------|
| ... | ... | ... | ... | ... |

## Top 10 winners (pages)
[same shape]

## Top 10 decliners (pages)
[same shape; "Hypothesis" column flags refresh candidate / SERP shift / etc.]

## CTR opportunities
Queries with position 4-15 and CTR ≥30% below benchmark:
| Query | Position | CTR | Benchmark CTR | Page | Action |
|-------|----------|-----|---------------|------|--------|
| ... | 7 | 1.8% | 4.5% | /blog/... | Rewrite title (`generate-title-tags`) |

## Query ↔ page intersection
- Cannibalisation flags (same query, multiple pages): [list]
- Unexpected wins (pages ranking for non-targeted queries): [list]

## Cluster rollup
| Cluster | Clicks (current) | Δ vs prior | Avg position | Trend |
|---------|------------------|------------|--------------|-------|
| Sun-care | n | +n% | 12 | 📈 |
| Skincare-ingredients | n | +n% | 18 | 📈 |
| Refills | n | -n% | 22 | 📉 |
| ... | ... | ... | ... | ... |

## Page-type rollup
| Page type | Clicks | Impressions | Avg position | Δ clicks |
|-----------|--------|-------------|--------------|----------|
| Blog | n | n | n | +n% |
| PDP | n | n | n | -n% |
| Collection | n | n | n | +n% |
| Other | n | n | n | n% |

## Branded vs non-branded
| Segment | Clicks (current) | Δ vs prior |
|---------|------------------|------------|
| Branded (queries with "field and sun") | n | +n% |
| Non-branded | n | +n% |
| **SEO-driven contribution:** non-branded movement
| Verdict: [...]

## Insights & recommendations
1. **[Insight 1].** [What we see; why it matters; recommended action; next-step skill.]
2. **[Insight 2].** [...]
3. **[Insight 3].** [...]
4. **[Insight 4].** [...]
5. **[Insight 5].** [...]

## Prioritised action list

| # | Action | Skill / handoff | Severity | Effort |
|---|--------|-----------------|----------|--------|
| 1 | Refresh /blog/how-to-apply-mineral-sunscreen (lost 50% clicks) | `plan-content-refresh` | P0 | 6 hrs |
| 2 | Rewrite titles on 8 CTR-opportunity queries | `generate-title-tags` | P0 | 2 days |
| 3 | Investigate refills cluster decline (-22% QoQ) | Strategy review | P1 | 4 hrs |
| ... | ... | ... | ... | ... |

## Open questions
- [ ] Confirm seasonality / market context (e.g. is the SPF impressions surge due to seasonal demand or SEO)?
- [ ] Confirm any algorithm-update timing (Google issued [update] on [date]; correlate?).
- [ ] Confirm any technical changes (migration, redesign, JS rendering) in the period.
```

Save the produced file to `businesses/<slug>/analytics/gsc-performance-[YYYY-MM-DD].md`. After writing, tell the user the file path so they can open it.

## Quality bar

- Comparison period explicit (last 90d vs prior 90d, or YoY).
- Top winners + top decliners are both surfaced (not just one direction).
- Decline thresholds documented (≥30% decline + ≥100 impressions/mo prior).
- CTR-opportunity table uses position-CTR benchmarks; benchmarks documented.
- Cluster rollup matches the brand's cluster map; not just generic page-type splits.
- Branded vs non-branded approximation present; insights distinguish brand growth from SEO contribution.
- Action list is prioritised, effort-estimated, and links to specific toolkit skills for execution.
- Open questions cover seasonality / algorithm updates / technical changes.

## Common mistakes to avoid

- Don't anchor on absolute numbers without comparison. SEO moves slowly; trend matters more than snapshot.
- Don't compare 28-day windows as the primary unit. Too noisy; QoQ and YoY are the right defaults.
- Don't ignore the position-CTR-benchmark lens. CTR opportunities are some of the highest-ROI fixes.
- Don't conflate branded growth with SEO contribution. Branded growth comes from PR / paid / brand awareness; non-branded is the SEO signal.
- Don't recommend refresh on every decay. Some decay is seasonal / SERP-shift / algorithm-update — investigate before reflexively refreshing.
- Don't skip the cluster rollup. Page-level data alone produces noisy reports; cluster-level produces strategic insight.
- Don't propose 30 actions. Top 5-10 prioritised actions; everything else can wait.
- Don't ignore unexpected wins. Pages ranking for non-targeted queries are research signal — feed back to Strategy.

## Example

**Input (abbreviated):** Field & Sun. Last 90d (2026-02 to 2026-04) vs prior 90d (2025-11 to 2026-01).

**Output (abbreviated):**

Headline: clicks +24% QoQ driven by sun-care cluster surge (+47%); refills cluster contracting (-22%); CTR opportunities on 8 mid-page-1 queries worth ~30% click lift.

Top winners: "is zinc oxide safe daily" +320% clicks (cluster-effect from new pillar); "mineral sunscreen guide" +∞% (new pillar launched mid-period).

Top decliners: "winter skincare trends" -85% (off-strategy seasonal content; recommend prune); "/blog/how-to-apply-mineral-sunscreen" -50% clicks (refresh candidate).

CTR opportunities (8): mostly sun-care queries at position 6-12 with CTR < 2.5% (benchmark 3-5%) — title rewrites recommended.

Cluster rollup: sun-care 📈 +47%; skincare-ingredients 📈 +18%; refills 📉 -22%; vitamin-C 📊 stable.

Page-type: blog +38%, PDP +12%, collections flat — pillar / spoke architecture is paying off.

Branded vs non-branded: branded +8%, non-branded +29% — SEO contribution is real, not brand-driven.

Top actions: (1) Refresh `/blog/how-to-apply-mineral-sunscreen` via `plan-content-refresh`; (2) Rewrite 8 titles via `generate-title-tags`; (3) Prune off-strategy refills content via `plan-content-refresh`; (4) Investigate refills cluster strategically (Strategy review).

Open questions: any seasonal effect we should adjust for; March 2026 spam update timing.

Saved to `businesses/field-and-sun/analytics/gsc-performance-2026-05-01.md`.
