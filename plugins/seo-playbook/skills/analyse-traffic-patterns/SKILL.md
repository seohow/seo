---
name: analyse-traffic-patterns
description: Produces a structured quarterly traffic analysis covering channel mix (organic / direct / paid / social / email), page-type rollup (blog / PDP / collection / landing / tool / programmatic), cluster-level aggregation (mapping pages to clusters from the cluster map), segmentation (mobile vs desktop, new vs returning, geo), funnel analysis (session → engaged → conversion → revenue), anomaly detection (>20% MoM swings on important segments), "what changed" investigation (site / tracking / algorithm / campaign / seasonality / external events), and a prioritised action list with handoffs to other toolkit skills. Output is the analysis report stakeholders read — distinguishing pattern-recognition from dashboard reporting. Use whenever the user asks to "analyse our traffic," "do a quarterly traffic review," "what's happening with our traffic," "why is traffic up / down," "produce the QoQ analysis," "identify traffic patterns," or has data and wants insight beyond the dashboard. Also use as a quarterly cadence skill — the analysis-quality reporting cadence that drives strategic decisions. Do not use for monthly metrics rollup (less analysis, more dashboard — use `define-seo-kpis` to build the dashboard) or to audit GA4 setup (use `audit-ga4-setup`).
---

# Analyse Traffic Patterns

This skill produces a structured quarterly traffic analysis. Output is an insight-rich report — channel mix, page-type rollup, cluster aggregation, segmentation, anomaly investigation, prioritised actions.

The skill is opinionated about a few things: QoQ + YoY is the default comparison (28-day windows are too noisy); cluster-level rollup is where strategic insight lives (page-level alone is too granular); every meaningful pattern shift gets a "what changed" investigation; analysis without prioritised actions isn't analysis, it's reporting.

## When to use this skill

- The user wants a quarterly traffic analysis for stakeholders.
- The user is investigating an apparent surge or decline.
- The user is briefing strategy on which channels / pages / clusters are working.
- The user is preparing a board / executive update on marketing performance.
- The user wants to baseline traffic before launching a major initiative.

## When NOT to use this skill

- The user wants a monthly metrics dashboard — use `define-seo-kpis` to build the dashboard; this skill is heavier and quarterly.
- The user wants to audit GA4 / GSC config — use `audit-ga4-setup` / `audit-search-console-setup`.
- The user wants to analyse search-specific (query / position) data — use `analyse-search-performance`.
- The user wants to identify refresh candidates — use `plan-content-refresh`; this skill surfaces decay but the prioritised refresh list lives there.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), goals (7).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Pages → clusters mapping required.
3. **GA4 access (or exports)** — required. Sessions, users, engaged sessions, conversions, revenue. Last 90 days + prior 90 days minimum.
4. **GSC access (or exports)** — strongly preferred. Cross-reference impressions / clicks with sessions.
5. **Source-of-truth revenue** — preferred. Shopify / CRM / payment processor for triangulation.
6. **Comparison window** — required. Default: last 90 days vs prior 90 days. Add YoY (last 90 days vs same 90 days last year) if retention covers it.
7. **Recent changes** — strongly preferred. Site changes, marketing campaigns, algorithm-update timing, external events in the analysis period. Used for "what changed" investigation.

If GA4 access or cluster map is missing, ask. Both are foundational.

## Process

1. **Pull the data.**
   - GA4: sessions, users, engaged sessions, engagement rate, conversions, revenue. Dimensions: channel, page-type, page (URL), device, country, new/returning, audience.
   - GSC: clicks, impressions, position by query and page (for cross-reference layer).
   - Source-of-truth revenue: triangulate.
2. **Triangulation check.**
   - GA4 vs source-of-truth revenue: should match within 5% over the period.
   - If discrepancy >10%, flag as data-integrity issue and note caveat.
3. **Channel mix.**
   - Sessions / conversions / revenue by channel (current + prior).
   - Channel-level QoQ + YoY trends.
   - Channel mix shift: which channel grew share, which lost.
4. **Page-type rollup.**
   - Pages mapped to types: blog, PDP, collection, landing page, tool, programmatic, other.
   - Sessions / conversions / revenue per type.
   - Conversion-rate by type.
5. **Cluster-level rollup.**
   - Map every page in the analysis to a cluster from cluster-map.md.
   - For each cluster: sessions, conversions, revenue, conversion rate, organic-search share.
   - Identify clusters that gained / lost / are flat.
6. **Segmentation.**
   - Mobile vs desktop: sessions, conversions, conversion rate.
   - New vs returning: same metrics; identifies acquisition vs retention.
   - Geo (multi-market only): per-country breakdown.
   - Audience-based (if defined): per-audience.
7. **Funnel analysis.**
   - Session → engaged session → key event(s) → purchase.
   - Drop-off rates per stage.
   - Compare current vs prior to identify funnel-stage regressions.
8. **Anomaly detection.**
   - >20% MoM swings on segments worth >5% of total traffic.
   - Date-specific anomalies (sharp drops / rises on specific days).
   - Cross-reference with known external events (algorithm updates, campaigns, site changes, holidays).
9. **"What changed" investigation.**
   - For each meaningful pattern shift, evaluate against the change-set:
     - Site changes (releases, redesigns, migrations, content launches).
     - Tracking changes (GA4 config, GTM, consent updates).
     - Algorithm updates (Google official + community-reported).
     - Marketing campaigns (paid, email, PR, social).
     - Seasonality (annual / category cyclicality).
     - External events (competitor launches, news cycles, regulatory shifts).
10. **Insights & decisions.**
    - 5-10 insights, each with: pattern observed, hypothesis, recommended action, handoff skill.
11. **Prioritised action list.**
    - Each action: skill / handoff, severity (P0 / P1 / P2), effort estimate, owner.
12. **Open questions.**
    - 3-5 questions for the user / team that the analysis raised but couldn't fully answer.
13. **Write the report.**

## Output format

```markdown
# Traffic Analysis — [Business name]

**Analysis period:** [start date] → [end date]
**Comparison period:** [start date] → [end date]
**Analysis date:** [date]

## Executive summary
- Total sessions: [n] ([+/- %] vs prior; [+/- %] YoY)
- Total conversions: [n] ([+/- %] vs prior)
- Total revenue (GA4-reported): [$n] ([+/- %] vs prior)
- Triangulated revenue (source-of-truth): [$n] (discrepancy [%])
- **Headline:** [1-2 sentences capturing the dominant story]

## Channel mix
| Channel | Sessions | Conversions | Revenue | Sessions Δ | Revenue Δ |
|---------|----------|-------------|---------|------------|-----------|
| Organic search | n | n | $n | +n% | +n% |
| Direct | ... | ... | ... | ... | ... |
| Paid search | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |

**Channel insight:** [observation about channel mix; e.g. "organic +24% QoQ vs paid +6% — organic now 38% of revenue (was 31%)"]

## Page-type rollup
| Page type | Sessions | Conversions | Conversion rate | Revenue | Sessions Δ |
|-----------|----------|-------------|-----------------|---------|------------|
| Blog | n | n | n% | $n | +n% |
| PDP | ... | ... | ... | ... | ... |
| Collection | ... | ... | ... | ... | ... |
| Landing page | ... | ... | ... | ... | ... |
| Tool | ... | ... | ... | ... | ... |
| Other | ... | ... | ... | ... | ... |

**Page-type insight:** [observation; e.g. "blog +40% but PDP organic flat — internal-link leak from blog → PDP"]

## Cluster rollup
| Cluster | Sessions | Conversions | Conversion rate | Sessions Δ | Notes |
|---------|----------|-------------|-----------------|------------|-------|
| Sun-care | n | n | n% | +47% | Pillar launch |
| Skincare-ingredients | ... | ... | ... | ... | ... |
| Refills | ... | ... | ... | -22% | Decay; refresh recommended |
| ... | ... | ... | ... | ... | ... |

**Cluster insight:** [observation about cluster-level dynamics]

## Segmentation

### Mobile vs desktop
| Segment | Sessions | Conversion rate | Sessions Δ | CR Δ |
|---------|----------|-----------------|------------|------|
| Mobile | n | n% | +n% | +/-pp |
| Desktop | n | n% | +n% | +/-pp |

**Segmentation insight:** [observation; e.g. "mobile sessions +28% but mobile CR dropped from 1.8% to 1.4% — checkout funnel investigation needed"]

### New vs returning
[same shape]

### Geo (if multi-market)
[same shape]

## Funnel analysis
| Stage | Current | Prior | Δ | Drop-off rate |
|-------|---------|-------|---|---------------|
| Sessions | n | n | +n% | — |
| Engaged sessions | n | n | +n% | n% drop |
| Product views | n | n | +n% | n% drop |
| Add-to-cart | n | n | +n% | n% drop |
| Begin checkout | n | n | +n% | n% drop |
| Purchase | n | n | +n% | n% drop |

**Funnel insight:** [stage with the most concerning drop-off change]

## Anomalies & "what changed"

### Anomaly 1: [name / date]
- **Pattern:** [what happened]
- **Hypothesis:** [likely cause]
- **Evidence:** [supporting data]
- **Action:** [what to do about it]

[Repeat for 2-4 anomalies if relevant]

## Insights & decisions

1. **[Insight title].** [Pattern observed; hypothesis; recommended action; handoff skill.]
2. **[Insight title].** [...]
3. **[Insight title].** [...]
4. **[Insight title].** [...]
5. **[Insight title].** [...]

## Prioritised action list
| # | Action | Skill / handoff | Severity | Effort | Owner |
|---|--------|-----------------|----------|--------|-------|
| 1 | Audit blog → PDP linking | `audit-page-internal-links` | P0 | 1 day | SEO |
| 2 | Investigate mobile checkout drop | UX / CRO handoff | P0 | 2-3 days | UX |
| 3 | Refresh refills cluster | `plan-content-refresh` | P1 | 4-6 days | Content |
| 4 | Standardise on DDA attribution | Reporting update | P1 | 4 hrs | Marketing |
| 5 | Schedule next quarterly analysis | Calendar | P2 | — | — |

## Open questions for the team
- [ ] Confirm the algorithm-update / external-event dates that may have driven the April anomaly.
- [ ] Confirm whether the mobile-CR drop coincides with a checkout flow change.
- [ ] Confirm the attribution-model decision (DDA vs last-click) for next quarter.
- [ ] Confirm the cluster-priority list for the next 90 days (drives next-quarter reporting).
```

Save the produced file to `businesses/<slug>/analytics/traffic-analysis-[YYYY-MM-DD].md`. After writing, tell the user the file path so they can open it.

## Quality bar

- Triangulation done with source-of-truth revenue; discrepancy quantified.
- Comparison windows are QoQ + YoY (where retention allows), not 28-day.
- Channel mix, page-type, and cluster rollups all present — none skipped.
- Segmentation covers mobile vs desktop, new vs returning at minimum.
- Funnel drop-offs identified and compared to prior period.
- Anomalies investigated with "what changed" hypothesis, not just observed.
- Insights have pattern + hypothesis + action + handoff skill — not just observations.
- Action list is prioritised + effort-estimated; not a wishlist.
- Open questions cover the 3-5 things the analysis surfaced but couldn't fully answer.

## Common mistakes to avoid

- Don't compare 28-day windows. Too noisy; QoQ + YoY are the right defaults.
- Don't skip triangulation. GA4-only revenue numbers in isolation aren't auditable.
- Don't aggregate across all pages. Page-type and cluster rollup are non-negotiable.
- Don't conflate correlation with causation. "What changed" investigation is the discipline.
- Don't produce 30 actions. Top 5-10 prioritised; everything else can wait.
- Don't ignore mobile/desktop and new/returning splits. Both routinely surface insights aggregate metrics hide.
- Don't omit the funnel analysis. It's where conversion-side insights live.
- Don't skip the open-questions section. Honest analysis ends with "I don't know," not "everything's clear."

## Example

**Input (abbreviated):** Field & Sun. Last 90d (2026-02 to 2026-04) vs prior 90d (2025-11 to 2026-01) and YoY.

**Output (abbreviated):**

Headline: organic search drove most of the QoQ growth (+24% sessions / +38% revenue), driven by sun-care cluster (+47%); however, blog → PDP linking is leaking and mobile conversion-rate dropped — both worth investigating before scaling.

Channel mix: organic 38% of revenue (was 31%); direct grew with organic (halo); paid +6%.

Page-type: blog +40% sessions; PDP organic flat; collection +12%. Blog → PDP CTR dropped 8.2% → 5.1%.

Cluster rollup: sun-care +47% / +38% conversions (pillar launch effect); refills -22% (decay); skincare-ingredients +18%; vitamin-C flat.

Segmentation: mobile sessions +28% but mobile CR 1.8% → 1.4% (desktop steady); new users 71% of organic growth.

Funnel: sessions → engaged session healthy; PDP → ATC drop is sharper than prior (3pp wider drop-off).

Anomalies: April 12-14 organic dip correlates with public reports of algorithm update; recovered by April 20.

Triangulation: GA4 revenue $124k vs Shopify $130k → 4.6% discrepancy (within tolerance). Note: DDA attribution; team had been reporting last-click ($96k); standardise.

Top 5 actions:

1. Audit blog → PDP linking (P0; `audit-page-internal-links`).
2. Investigate mobile checkout (P0; UX handoff).
3. Refresh refills cluster (P1; `plan-content-refresh`).
4. Standardise on DDA attribution (P1; reporting update).
5. Schedule next quarterly analysis (calendar).

Open questions: confirm the April algorithm-update timing; confirm whether mobile-CR drop coincides with a checkout flow change; confirm attribution-model decision.

Saved to `businesses/field-and-sun/analytics/traffic-analysis-2026-05-01.md`.
