# Conversion Funnels

> Diagnose where the conversion path leaks for organic visitors. Stage-by-stage analysis from landing → engagement → consideration → conversion. The discipline that turns "conversion is below target" into a list of specific, fixable leaks.

## What it is

Conversion-funnel work is the diagnosis + remediation of the path from organic visit to conversion. It treats the path as a sequence of stages — landing → engaged session → product view → add-to-cart → checkout begin → purchase — and identifies where the leaks are. Distinct from generic "improve conversion" projects, funnel work is forensic: each stage's drop-off is measured, anomalies surfaced, hypotheses formed, fixes prioritised.

For Field & Sun, conversion-funnel diagnosis is what answers "the sun-care content drove 30% more sessions but PDP conversion is flat — where did the funnel leak?" The answer might be: pillar→PDP click-through dropped (UX design issue), or PDP→add-to-cart held but checkout-begin→purchase dropped (mobile-checkout issue), or add-to-cart→purchase held but the visitor mix shifted to lower-intent (intent issue). Different leaks need different fixes.

## Why it matters

Three reasons. First, **funnel-specific diagnosis is what enables funnel-specific fixes**. "Conversion is low" produces vague projects. "PDP→ATC dropped from 3.2% to 1.8% over the past quarter, concentrated on mobile, after the new size-selector shipped" produces a specific fix. Funnel work narrows the problem.

Second, **organic-traffic funnels behave differently from paid-traffic funnels**. Organic visitors arrive with informational intent more often; the funnel needs to bridge informational → commercial → transactional. Paid traffic typically lands on commercial intent already. Generic conversion-funnel advice misses this nuance; SEO-aware funnel work handles it.

Third, **funnel anomalies signal upstream issues**. A sudden PDP→ATC drop often correlates with a UX change, a tracking break, a mobile regression, or a SERP-mix shift. Funnel monitoring catches these signals weeks before they show up in revenue reports.

For Field & Sun: a funnel diagnosis on the organic-traffic path quarterly, plus monitoring during major changes, is plausibly the highest-impact UX-operational work.

## Core concepts

- **Funnel stages.** Standard ecom: session → engaged session → product view → add-to-cart → begin checkout → purchase. Custom stages may apply (quiz completion, account creation, lead-form submit).
- **Stage drop-off rate.** % of visitors at stage N who don't reach stage N+1. Diagnostic: compare to baseline + competitor benchmarks.
- **Cohort analysis.** Segment funnel by traffic source (organic vs paid), device (mobile vs desktop), landing-page cluster, geo, new vs returning. Hidden patterns surface in cohorts.
- **Funnel leak hypotheses.**
  - **UX design issue:** stage drop-off correlates with a UX change.
  - **Speed / mobile issue:** stage drop-off concentrated on mobile.
  - **Tracking issue:** stage drop-off correlates with tracking-implementation change.
  - **Intent mismatch:** earlier stages healthy but late-stage drop suggests visitor-intent mismatch.
  - **External factor:** competitor launch / SERP shift / seasonal pattern.
- **Cluster-aware funnel.** Different clusters produce different funnel behaviour. Pillar visitors behave differently from PDP visitors. Roll up cluster-by-cluster.
- **Funnel benchmarks.** Industry / category benchmarks exist (Baymard Institute, Statista, vendor reports). Use as directional, not absolute.
- **Multi-session funnels.** Most ecom conversions involve 2-5 sessions. Single-session funnel analysis misses the cross-session pattern. Cohort by user-ID where available.
- **Friction surfaces.** Form fields, loading states, modal interruptions, surprise-cost reveals (shipping at checkout), trust-signal timing — each is a specific friction worth measuring.

## A worked example

> **Scenario:** Field & Sun's traffic analysis flagged: organic-search sessions +24% QoQ, but organic-search PDP conversion rate flat. Team wants to diagnose where the funnel leaks before shipping more new content.
>
> **Step 1.** Run `analyse-conversion-funnel`. Skill walks through stage-by-stage drop-off for organic visitors, segments by cohort, and identifies leak hypotheses.
>
> **Step 2.** Findings:
>
> - **Stage 1 (landing → engaged session):** 71% engaged-session rate (healthy; matches benchmark).
> - **Stage 2 (engaged → product view / cluster discovery):** 18% (flagged — was 28% three months ago). Concentrated on pillar landings; pillar→PDP CTR dropped 5.1% (vs prior 7.8%).
> - **Stage 3 (product view → add-to-cart):** 5.4% (steady; matches benchmark).
> - **Stage 4 (ATC → begin checkout):** 71% (healthy).
> - **Stage 5 (begin checkout → purchase):** 38% (flagged — was 52% prior; concentrated on mobile from 28% → 22%).
> - **Cohort splits:** mobile checkout-begin → purchase dropped sharply post-March-shipping-of-new-checkout. Desktop steady.
> - **Leak hypotheses:** (1) pillar→PDP UX design issue (above-fold mismatch); (2) mobile checkout regression post-March-deploy.
>
> **Step 3.** Action plan:
>
> - Run `review-ux-design-for-seo` on pillar — confirms above-fold + CTA hierarchy issues.
> - Run `audit-mobile-ux` on checkout — surfaces sticky-keyboard cover + missing input types.
> - Sequence: ship mobile checkout fixes (P0) + pillar above-fold fixes (P0) over next 4 weeks.
>
> **Step 4.** Result: 60 days post-fix, organic mobile checkout-begin → purchase recovers 22% → 41% (close to prior baseline + new highs); pillar→PDP CTR 5.1% → 9.4%; organic conversion rate +47%.

## How to do it

1. **Define the funnel stages.** Standard ecom or custom (quiz / lead / account). Document.
2. **Segment by traffic source.** Isolate organic-search visitors. Compare to paid / direct / email.
3. **Pull stage data.** GA4 funnel exploration; per-stage drop-off rates; trend over 90 days.
4. **Run `analyse-conversion-funnel`.** Skill identifies stage drop-offs, anomalies, cohort splits, leak hypotheses.
5. **Cohort the funnel.** Mobile vs desktop, new vs returning, by cluster, by geo. Surface hidden patterns.
6. **Cross-reference with site changes.** Funnel anomalies that correlate with deploys / launches / external events.
7. **Form leak hypotheses.** Per stage, what's the most likely cause? UX, speed, mobile, tracking, intent, external?
8. **Route to fix skills.**
   - UX design issue → `review-ux-design-for-seo` then `plan-ab-test` if ambiguous.
   - Speed issue → `audit-page-speed-ux`.
   - Mobile issue → `audit-mobile-ux`.
   - Tracking issue → `audit-conversion-tracking`.
   - Intent issue → cluster strategy review.
9. **Prioritise by impact.** Stages with biggest drop-off + biggest user volume → first.
10. **Re-measure post-fix.** 30+ days; confirm leak repaired.
11. **Quarterly cadence.** Funnel anomalies surface in 90-day windows.

## Common pitfalls

- **Generic "improve conversion" without funnel diagnosis.** Too vague to act on; teams ship random changes hoping for lift.
- **Single-session-only analysis.** Most ecom conversions are multi-session. Single-session view distorts.
- **Aggregate-only data.** Mobile vs desktop, by cluster, by geo all hide in the aggregate.
- **Confusing correlation with causation.** Funnel drop correlates with deploy ≠ deploy caused drop. Investigate.
- **Ignoring tracking-side leaks.** "Funnel drop" can be a measurement bug, not a real conversion issue.
- **Not cross-referencing with deploys.** Knowing what shipped when is essential for diagnosis.
- **Skipping cohort analysis.** Hidden patterns surface only in cohorts.
- **No baseline.** Without prior-period data, "the funnel leaks at stage 3" lacks meaning.
- **Treating funnel work as one-off.** Anomalies surface continuously; quarterly + on-deploy is the right cadence.
- **Optimising upstream when downstream is the leak.** ATC → purchase optimisation matters more than landing → engagement when the landing stage is healthy.

## Skills in this toolkit

- **[analyse-conversion-funnel](../../../skills/ux/analyse-conversion-funnel/SKILL.md)** — produces a funnel diagnosis report covering stage-by-stage drop-off (organic-traffic isolated), cohort splits (mobile / desktop, new / returning, cluster, geo), anomaly detection (stage drops vs prior period), correlation with deploys / external events, leak hypotheses per anomalous stage, and routing to fix skills (UX design, mobile, page speed, conversion tracking). Output is the diagnostic + action plan. Quarterly cadence + ad-hoc on suspected anomalies.

## Related topics

- **[03. UX Design](../03.%20UX%20Design/README.md)** — UX-design issues are common funnel-leak causes.
- **[02. Mobile Optimization](../02.%20Mobile%20Optimization/README.md)** — mobile funnel issues often dominate.
- **[01. Page Speed UX](../01.%20Page%20Speed%20UX/README.md)** — speed regressions cause funnel anomalies.
- **[04. A/B Testing](../04.%20AB%20Testing/README.md)** — ambiguous leak fixes are testable.
- **[05. Analytics / 04. Traffic Analysis](../../05.%20Analytics/04.%20Traffic%20Analysis/README.md)** — funnel work consumes traffic-analysis output.
- **[05. Analytics / 06. Conversion Tracking](../../05.%20Analytics/06.%20Conversion%20Tracking/README.md)** — funnel data depends on reliable tracking.
- **[06. Accessibility](../06.%20Accessibility/README.md)** — accessibility issues sometimes manifest as funnel drops in specific cohorts.

## Further reading

- [Baymard Institute — Checkout UX Research](https://baymard.com/research) — research-backed funnel benchmarks; gold standard for ecom checkout work.
- [Avinash Kaushik — Funnel Analysis Frameworks](https://www.kaushik.net/avinash/) — strategic framing for funnel work.
- [CXL — Conversion Optimisation Library](https://cxl.com/) — practitioner reference.
- [Statista / industry funnel benchmarks](https://www.statista.com/) — directional benchmarks per vertical.
- [Andy Crestodina — Conversion Funnel Patterns](https://www.orbitmedia.com/blog/) — practical content-side funnel framing.
