---
name: analyse-conversion-funnel
description: Produces a conversion-funnel diagnosis report covering stage-by-stage drop-off for organic-search visitors (landing → engaged → product view → ATC → checkout-begin → purchase), cohort splits (mobile vs desktop, new vs returning, by cluster, by geo), anomaly detection (stage drops vs prior period with magnitude + direction), correlation with site deploys / external events / SERP shifts, leak hypotheses per anomalous stage (UX design issue / speed issue / mobile regression / tracking break / intent mismatch / external factor), routing to specific fix skills (UX design review, mobile audit, speed audit, conversion-tracking audit), and a prioritised action plan. Output is the diagnostic + action plan — turning "conversion is below target" into a list of specific, fixable leaks. Use whenever the user asks to "diagnose conversion funnel," "where does our funnel leak," "PDP conversion is flat — investigate," "find the funnel drop," "investigate organic conversion gap," "stage-by-stage funnel analysis," or has a conversion-rate signal but no specific cause. Also use as a quarterly cadence skill — funnel anomalies surface every 90 days; a quarterly diagnosis catches them. Do not use to fix a specific UX issue (use `review-ux-design-for-seo`), test a candidate change (use `plan-ab-test`), or audit tracking implementation (use `audit-conversion-tracking`).
---

# Analyse Conversion Funnel

This skill produces a conversion-funnel diagnosis. Output covers stage-by-stage drop-off, cohort splits, anomaly detection, leak hypotheses, fix-skill routing, prioritised action.

The skill is opinionated about a few things: organic-traffic visitors are isolated from paid / direct (different funnel behaviour); QoQ is the default comparison; cohort splits (mobile vs desktop, by cluster) reveal hidden patterns; leak hypotheses route to specific fix skills (don't generic-recommend "improve conversion"); funnel work assumes reliable conversion tracking (re-run `audit-conversion-tracking` if doubt).

## When to use this skill

- The user has a conversion-rate signal (flat vs traffic growth, dropping QoQ, mobile gap) without specific cause.
- The user is investigating funnel after a site change / deploy.
- The user is preparing a quarterly UX / Analytics review.
- The user is routing engineering / design work but doesn't know where to focus.

## When NOT to use this skill

- The user wants to fix a specific known issue — route to the right skill (`review-ux-design-for-seo`, `audit-mobile-ux`, etc.).
- The user wants to test a candidate change — use `plan-ab-test`.
- The user wants tracking-implementation audit — use `audit-conversion-tracking`.
- The user wants traffic-analysis (broader) — use `analyse-traffic-patterns`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), goals (7).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster cohorting depends on it.
3. **GA4 access (or exports)** — required. Funnel-stage data, segmented by traffic source.
4. **Comparison window** — required. Default: last 90 days vs prior 90 days.
5. **Recent site changes / deploys** — required. List of major UX / template / checkout / tracking changes in the period.
6. **Conversion-tracking-audit confidence** — strongly preferred. Reliable per recent `audit-conversion-tracking`?
7. **Industry benchmarks** — optional. Baymard / Statista category benchmarks.

If GA4 + deploy log are missing, ask. Funnel diagnosis depends on both.

## Process

1. **Define the funnel stages.** Standard ecom: session → engaged session (>10s engagement) → product view (`view_item`) → add-to-cart → begin checkout → purchase. Custom: include quiz completion / lead-form / account if material.
2. **Pull data: organic-search isolated.**
   - Filter to `sessionDefaultChannelGrouping = Organic Search` (or equivalent).
   - Per stage: visitor count + drop-off %.
   - Last 90 days vs prior 90 days (or YoY where retention allows).
3. **Stage-by-stage drop-off analysis.**
   - Per stage: current % drop-off; prior % drop-off; delta.
   - Flag stages with ≥3pp absolute drop-off increase OR ≥15% relative.
4. **Cohort splits.** Per stage:
   - Mobile vs desktop.
   - New vs returning.
   - By landing-page cluster (pillar landings, PDP landings, blog landings, etc.).
   - By geo (multi-market).
   - Identify cohort-specific leaks.
5. **Anomaly detection.**
   - Stages with significant drop-off increase.
   - Cohort-specific drops not visible in aggregate.
   - Date-specific drops correlating with deploys / external events.
6. **Correlation with site changes.**
   - Map deploys to funnel anomalies.
   - "Did stage X drop after deploy Y?" — investigate.
   - Tracking changes vs UX changes vs content changes — different leak types.
7. **Leak-hypothesis generation.** Per anomalous stage:
   - **UX design issue:** above-fold mismatch, CTA hierarchy, missing trust signals → `review-ux-design-for-seo`.
   - **Speed / mobile issue:** speed regression, mobile-specific failure → `audit-page-speed-ux` / `audit-mobile-ux`.
   - **Tracking issue:** stage drop matches tracking-implementation change → `audit-conversion-tracking`.
   - **Intent mismatch:** healthy upstream, late-stage drop, visitor-mix shift → cluster / strategy review.
   - **External factor:** competitor launch, SERP shift, seasonality → out-of-scope but flagged.
8. **Prioritise leaks.**
   - High-volume stage × significant drop = top priority.
   - Cohort-specific leaks important even if aggregate is OK.
   - Recent-onset (post-deploy) leaks > long-standing.
9. **Route to fix skills.** Per leak hypothesis, specify the skill / handoff for execution.
10. **Action plan + sequencing.**
    - Critical fixes first (P0).
    - Investigations needed before action (gather more data).
    - Coordinate where multiple leaks share root causes.
11. **Define re-measurement plan.**
    - 30+ days post-fix to confirm.
    - Cohort-specific re-measurement where applicable.
12. **Write the report.**

## Output format

```markdown
# Conversion Funnel Diagnosis — [Business name]

**Analysis period:** [last 90 days]
**Comparison period:** [prior 90 days]
**Diagnosis date:** [date]
**Analyst:** [name / role]

## Executive summary
- Overall organic conversion rate: [%] (vs prior [%]).
- Funnel anomalies flagged: [n].
- Estimated impact if all P0 leaks fixed: [%] conversion lift.
- **Headline:** [1-2 sentences on dominant leak].

## Stage-by-stage drop-off (organic search isolated)

| Stage | Current visitors | Prior visitors | Current drop-off | Prior drop-off | Δ | Flag |
|-------|------------------|----------------|------------------|----------------|---|------|
| Sessions | n | n | — | — | — | — |
| Engaged sessions | n | n | n% | n% | +n pp | ✅ healthy |
| Product views | n | n | n% | n% | +n pp | ⚠ flagged |
| Add-to-cart | n | n | n% | n% | +n pp | ✅ |
| Begin checkout | n | n | n% | n% | +n pp | ✅ |
| Purchase | n | n | n% | n% | +n pp | ⚠ flagged |

**Flagged stages:** [list].

## Cohort splits

### Mobile vs desktop
| Stage | Mobile drop-off | Desktop drop-off | Δ vs prior (mobile) | Δ vs prior (desktop) |
|-------|-----------------|------------------|---------------------|----------------------|
| Engaged sessions | n% | n% | +n pp | +n pp |
| ... | ... | ... | ... | ... |

**Mobile-specific anomalies:** [list].

### By cluster
| Cluster | Sessions | Conversion rate | Δ vs prior |
|---------|----------|-----------------|------------|
| Sun-care | n | n% | +n pp |
| ... | ... | ... | ... |

### New vs returning
[same shape]

### By geo (if multi-market)
[same shape]

## Anomalies + correlation with site changes

### Anomaly 1: [stage / cohort / magnitude]
- **What:** [stage drop description; magnitude]
- **When:** [date or window]
- **Correlated change:** [deploy / launch / external event in same window]
- **Hypothesis:** [most likely cause]
- **Confidence:** [high / medium / low]

[Repeat per anomaly]

## Leak hypotheses + fix-skill routing

### Leak 1: [stage / cohort]
- **Hypothesis:** [type — UX design issue / speed / mobile / tracking / intent / external]
- **Evidence:** [supporting signals]
- **Fix skill:** [`review-ux-design-for-seo` / `audit-mobile-ux` / `audit-page-speed-ux` / `audit-conversion-tracking` / cluster-strategy review]
- **Severity:** P0 / P1 / P2
- **Estimated lift if fixed:** [%]

[Repeat per leak]

## Prioritised action plan

| # | Leak | Hypothesis | Fix skill | Owner | Severity | Lift est. |
|---|------|------------|-----------|-------|----------|-----------|
| 1 | Mobile checkout drop (begin → purchase) | Mobile UX regression post-March deploy | `audit-mobile-ux` (focus checkout) | UX / Eng | P0 | 5-10% |
| 2 | Pillar → PDP CTR drop | Above-fold UX design issue | `review-ux-design-for-seo` (pillar) | Design | P0 | 3-7% |
| 3 | (Investigation) Verify tracking integrity | Possible tracking-side noise | `audit-conversion-tracking` | Analytics | P1 | n/a (precondition) |
| ... | ... | ... | ... | ... | ... | ... |

## Re-measurement plan
- 30 days post-deployment of fixes: re-run `analyse-conversion-funnel`.
- Cohort-specific monitoring: mobile checkout-begin → purchase rate.
- Cluster-specific monitoring: sun-care cluster conversion lift.

## Risks + watchouts
3-5 specific risks. E.g. "Conversion-tracking confidence: re-run audit before relying on attribution"; "Seasonality: Q3 sun-care peak may inflate baseline mid-fix"; "Multiple changes shipping simultaneously will muddy cause-effect attribution"; "External factors (competitor, SERP shift) may produce stage drops not addressable by UX work — flag, don't over-fit hypotheses."

## Open questions
- [ ] Confirm conversion-tracking is reliable (run `audit-conversion-tracking` if uncertain).
- [ ] Confirm deploy log is complete.
- [ ] Confirm priority cluster for cohort-specific monitoring.
- [ ] Confirm fix-skill ownership across UX / Eng / Analytics teams.
```

Save the produced file to `businesses/<slug>/ux/conversion-funnel-diagnosis-[YYYY-MM-DD].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Organic-traffic isolated from paid / direct.
- Stage-by-stage drop-off analysed with QoQ comparison.
- Cohort splits done (mobile vs desktop, cluster, new / returning at minimum).
- Anomalies correlated with site-change log.
- Leak hypotheses routed to specific fix skills (not generic recommendations).
- Action plan prioritised P0 / P1 with owners.
- Re-measurement plan calendared.
- Risks acknowledged (tracking-confidence, seasonality, external factors).

## Common mistakes to avoid

- Don't analyse without traffic-source isolation. Aggregate funnel hides organic-specific patterns.
- Don't skip cohort splits. Hidden patterns surface only in cohorts.
- Don't generic-recommend "improve conversion." Specific leak → specific fix.
- Don't conflate correlation with causation on deploy events. Investigate, don't assume.
- Don't ignore tracking integrity. Stage drops can be measurement bugs.
- Don't propose 30 fixes. Top P0 / P1 prioritised; everything else can wait.
- Don't skip re-measurement plan. Funnel work without before / after isn't accountable.
- Don't analyse single-session funnels only when multi-session matters (account-creation flows, considered purchases).

## Example

**Input (abbreviated):** Field & Sun. Organic sessions +24% QoQ; organic conversion rate flat. GA4 access + deploy log + Microsoft Clarity available. Last 90 days vs prior 90 days.

**Output (abbreviated):**

Headline: two leaks dominate — pillar→PDP CTR dropped 7.8% → 5.1% (UX design hypothesis); mobile checkout-begin → purchase dropped 28% → 22% (mobile UX regression post-March deploy).

Stage analysis: engaged-session healthy; product view drop flagged (cluster effect — pillar landings); ATC steady; checkout-begin healthy; purchase drop flagged on mobile only.

Cohort splits: mobile checkout drop concentrated post-March; desktop steady. Sun-care cluster pillar landings show CTR drop; other clusters steady.

Anomaly correlation: March 12 deploy of new checkout flow correlates with mobile begin-checkout → purchase drop (high confidence). Pillar UX issues pre-existing (no specific deploy correlation).

Leak hypotheses + fix routing: (1) mobile checkout regression → `audit-mobile-ux` focus on checkout flow; (2) pillar UX design issue → `review-ux-design-for-seo` on pillar; (3) precondition: re-run `audit-conversion-tracking` to rule out measurement bug on mobile checkout.

Action plan: P0 — audit-mobile-ux on checkout (1 day) + review-ux-design-for-seo on pillar (1 day) + audit-conversion-tracking refresh (0.5 day). P1 — cluster-strategy review.

Estimated lift: combined 8-15% conversion lift if both leaks fixed.

Saved to `businesses/field-and-sun/ux/conversion-funnel-diagnosis-2026-05-01.md`.
