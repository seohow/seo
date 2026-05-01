---
name: plan-ab-test
description: Produces an A/B test plan covering hypothesis statement, variant specification (control + treatment(s)), primary + secondary success metrics, sample-size calculation (with minimum detectable effect / MDE based on current traffic + baseline conversion rate), significance threshold (typically 95% confidence), SEO-safety review (verify no cloaking; canonical preserved across variants; client-side rendering acceptable), runtime estimate, decision rules (ship / kill / keep current with explicit thresholds), pre-registration discipline (sample size locked before launch; no mid-test peeking), A/A instrumentation check plan, business-significance threshold, and risks. Output is the operational test brief. Use whenever the user asks to "plan an A/B test," "set up split test," "test [variant change]," "test our pillar / PDP / quiz design change," "should we A/B test [feature]," "experiment plan for [hypothesis]," or has a candidate design change with ambiguous direction. Also use when filtering candidate tests — some don't warrant testing (bug fixes / obvious wins / low traffic). Do not use for testing infrastructure setup (vendor docs handle that), for A/B test result analysis post-completion (run vendor's own analysis), or for tests on pages with insufficient traffic (recommend skip or aggregate templates).
---

# Plan A/B Test

This skill produces an A/B test plan. Output is the operational test brief — hypothesis, variants, metrics, sample size, decision rules, risks.

The skill is opinionated about a few things: pre-registered sample size + no mid-test peeking; A/A instrumentation check pre-launch; SEO-safety verification (no cloaking); business-significance threshold separate from statistical significance; some candidates don't warrant testing (obvious wins, bug fixes, legal changes — just ship).

## When to use this skill

- The user has a candidate design change with ambiguous direction.
- The user is choosing between multiple variants.
- The user wants to validate a UX-design recommendation before site-wide deployment.
- The user wants to filter a backlog of candidate tests.

## When NOT to use this skill

- The user wants vendor / infrastructure setup help — point to vendor docs.
- The user wants test-result analysis post-completion — vendor's own analysis (or stats consultant) handles it.
- The user has a bug fix / legal-required / obvious-win change — just ship.
- The user wants UX design review — use `review-ux-design-for-seo`.
- The user wants funnel diagnosis — use `analyse-conversion-funnel`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), goals (7).
2. **Hypothesis** — required. What's being tested + why + expected outcome.
3. **Page / template + URL** — required. Where the test runs.
4. **Current traffic on page** — required. Visitors / month or week.
5. **Baseline conversion rate** — required. Current rate of the primary metric.
6. **A/B testing tool** — required. Optimizely / VWO / Convert / etc. or stack-specific.
7. **Conversion-tracking confidence** — required. Reliable per `audit-conversion-tracking`?
8. **Brand voice constraints** — read from business profile.

If hypothesis + traffic + baseline are missing, ask. Test plan can't be calculated without them.

## Process

1. **Filter testability.**
   - **Skip if:** bug fix (just ship); legal-required (just ship); brand-voice violation (just ship correct); obvious win (just ship); page traffic <5k visitors/month (insufficient sample); expected effect <1pp on conversion (won't reach significance).
   - **Test if:** ambiguous direction; high-impact change; sufficient traffic; reliable conversion tracking.
2. **Sharpen the hypothesis.**
   - Format: "If we change [X] to [Y], then [primary metric] will [increase / decrease] by [magnitude] because [reasoning]."
   - Specific. Falsifiable.
3. **Specify variants.**
   - Control: current state.
   - Treatment(s): clearly described change(s); single change ideal (multivariate is harder to interpret).
   - Visual mockups + behaviour spec.
4. **Pick the primary metric.**
   - Single primary metric — usually conversion-event most aligned with business goal.
   - Examples: pillar→PDP CTR, PDP→add-to-cart, add-to-cart→purchase, total revenue per visitor.
5. **Pick secondary metrics.**
   - Engagement / scroll depth / time on page / bounce rate.
   - Counter-balance metrics: ensure treatment doesn't accidentally tank a non-primary metric.
6. **Calculate sample size.**
   - Inputs: baseline conversion rate, MDE (minimum detectable effect), significance level (95%), power (80%).
   - Most A/B testing tools have built-in calculators; verify the inputs.
   - If sample required > traffic available within 4-6 weeks → MDE too small; either accept lower power or pick a different test.
7. **Estimate runtime.**
   - Sample size ÷ weekly traffic = weeks to complete.
   - Add 1-2 weeks buffer for traffic variance.
   - Cap at 6 weeks; longer means MDE / traffic mismatch.
8. **Pre-register the sample size + stopping rule.**
   - Sample N decided before launch.
   - No mid-test peeking + early-stopping (inflates false-positive rate).
   - Document in test plan.
9. **SEO-safety review.**
   - Verify A/B tool doesn't serve different content to crawlers (cloaking).
   - Canonical URL preserved across variants.
   - Variant URL parameters (if used) blocked from index via robots / canonical.
   - Client-side rendering generally safe; server-side requires careful canonical handling.
   - For Field & Sun: confirm cluster-spoke linking preserved across variants (don't break SEO architecture).
10. **A/A instrumentation check.**
    - Before launching the actual A/B, run two identical variants for 24-48 hrs.
    - Confirm: ~95% of metrics show no significant difference.
    - If "significant" differences appear: instrumentation bug; fix before A/B.
11. **Define decision rules.**
    - **Ship treatment:** if treatment beats control by ≥[business-significance threshold] at ≥95% confidence.
    - **Kill treatment:** if treatment loses to control by ≥[threshold] at ≥95% confidence.
    - **Keep current (no change):** if no significant difference.
    - **Business-significance threshold:** smallest effect size worth shipping (e.g., +1.5pp conversion lift; below that, engineering cost may exceed return).
12. **Identify risks.**
    - Seasonality / external factors during runtime.
    - Other tests / launches running simultaneously (interference).
    - Underpowered if traffic dips.
    - Conversion-tracking reliability (re-run `audit-conversion-tracking` if doubt).
13. **Write the plan.**

## Output format

```markdown
# A/B Test Plan — [Test name]

**Test name:** [working title]
**Plan date:** [date]
**Owner:** [name / role]
**Test platform:** [Optimizely / VWO / Convert / etc.]
**Page / template:** [URL]
**Hypothesised launch date:** [date]

## Hypothesis
"If we change [X] to [Y], then [primary metric] will [increase / decrease] by [magnitude] because [reasoning]."

## Variants

### Control (current)
- Description: [observation of current state]
- Mockup / screenshot: [URL]

### Treatment 1
- Description: [change being tested]
- Mockup / screenshot: [URL]
- Single change: [yes / no — flag if multivariate]

[Repeat for additional treatments if any]

## Metrics

### Primary (decision)
- **Metric:** [e.g., pillar→PDP CTR]
- **Baseline:** [current rate]
- **Definition:** [exact event / formula]
- **Source:** [GA4 / Shopify / etc.]

### Secondary (counter-balance)
- [Engagement / scroll / bounce / etc.]
- [Revenue per visitor — flag separately if revenue is tested]

## Sample size + runtime

| Input | Value |
|-------|-------|
| Baseline primary metric | [%] |
| Minimum detectable effect (MDE) | [pp absolute or % relative] |
| Significance level | 95% |
| Power | 80% |
| Sample size per variant | [n] |
| Total sample size (2 variants) | [n] |
| Available weekly traffic on page | [n] |
| Estimated runtime | [n] weeks |

**Pre-registration:** sample size locked at [N] visitors total. No mid-test peeking + early stopping.

## SEO-safety review
- [ ] A/B tool serves identical content to crawlers (no cloaking).
- [ ] Canonical URL preserved across variants.
- [ ] No URL-parameter variants leaked to index.
- [ ] Cluster-spoke linking preserved (or change is part of test).
- [ ] Client-side rendering verified non-cloaking pattern.

## A/A instrumentation check
- Run two identical (control × control) variants for 24-48 hrs pre-launch.
- Validate: metrics show no significant difference.
- If issues: fix instrumentation before A/B launch.

## Decision rules
- **Ship treatment:** treatment beats control by ≥[X pp] at ≥95% confidence.
- **Kill treatment:** treatment loses to control by ≥[X pp] at ≥95% confidence.
- **Keep current:** no significant difference (or below business-significance threshold).
- **Business-significance threshold:** [+ X pp] minimum to justify engineering ship cost.

## Operational plan
- **Pre-launch (week 0):** A/A test + tooling verification.
- **Launch (week 1):** treatment goes live; verify both variants serving + tracking firing.
- **Mid-test (weekly):** confirm sample tracking; do NOT peek at outcome metrics.
- **End (week n):** analyse; apply decision rules; document outcome.
- **Post-launch:** if shipping treatment, monitor 30 days for sustained effect.

## Risks + watchouts
3-5 specific risks. E.g.:
- "Seasonal effect (Q3 sun-care peak) may inflate baseline conversion mid-test; document if relevant."
- "Pillar redesign coincides with the digital-PR campaign launch — both could affect baseline; either run sequentially or accept noise."
- "Mobile vs desktop traffic mix may shift; segment analysis if total is ambiguous."
- "Conversion-tracking dependency: re-confirm `audit-conversion-tracking` is current."
- "If competitor runs a major SERP move during the test, ranking shift could affect traffic mix."

## Acceptance criteria
- [ ] Test plan approved.
- [ ] Variant mockups + behaviour spec'd.
- [ ] A/A instrumentation check passes.
- [ ] SEO-safety review passes.
- [ ] Sample size + decision rules pre-registered.
- [ ] Test launches.
- [ ] Test runs to completion (no early stopping).
- [ ] Decision applied per rules.
- [ ] Outcome documented.

## Open questions
- [ ] Confirm primary metric is the right one (vs. revenue / secondary).
- [ ] Confirm business-significance threshold.
- [ ] Confirm A/B tool is configured + variant routing works.
- [ ] Confirm no other tests / launches conflict during runtime.
```

Save the produced file to `businesses/<slug>/ux/ab-test-[test-slug].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Hypothesis stated in if-then format (specific, falsifiable).
- Variants specified with mockup / behaviour, single-change ideal.
- Primary metric is single + specific (not "engagement").
- Sample size calculated with explicit MDE; runtime estimated.
- Pre-registration discipline explicit (no mid-test peeking).
- SEO-safety review covers cloaking, canonical, URL parameters, cluster-link preservation.
- A/A instrumentation check planned.
- Decision rules concrete with thresholds.
- Business-significance threshold separate from statistical significance.

## Common mistakes to avoid

- Don't accept underpowered tests. If MDE > expected effect, the test is wasted.
- Don't allow mid-test peeking. Pre-register sample + run to completion.
- Don't skip A/A check. Instrumentation bugs ruin tests silently.
- Don't run multiple tests on same page simultaneously without isolation. Muddied signal.
- Don't conflate statistical significance with business significance. 0.5% lift at 95% confidence often isn't worth shipping.
- Don't test obvious wins, bug fixes, or legal-required changes. Just ship.
- Don't test on pages below sample threshold. Skip or aggregate.
- Don't skip SEO-safety review. Cloaking is a Google penalty trigger.
- Don't cherry-pick metrics post-test. Pre-specified primary is the decision metric.

## Example

**Input (abbreviated):** Field & Sun. Hypothesis: replacing generic hero on mineral-sunscreen pillar with three-skin-tone-test imagery + brand-distinct H1 will lift pillar→PDP CTR. Page traffic 4,200/mo. Baseline CTR 5.1%. Tool: Optimizely.

**Output (abbreviated):**

Hypothesis: "If we replace the generic hero + 'Mineral Sunscreen 101' H1 with a three-skin-tone-test hero + 'The Complete Guide to Mineral Sunscreen' H1, then pillar→PDP CTR will increase by ≥1.5pp because the brand-distinct above-fold matches search intent better."

Variants: Control (current generic) vs Treatment (three-skin-tone hero + new H1). Single change in two coordinated parts.

Primary: pillar→PDP CTR. Baseline 5.1%. MDE 1.5pp absolute. Sample needed: ~6,000 per variant; ~12,000 total; ~3 weeks at current traffic.

Secondary: scroll depth, bounce rate, time on page (counter-balance).

SEO-safety: Optimizely client-side rendering preserves canonical + cluster-spoke linking; A/A test scheduled pre-launch.

Decision rules: ship if treatment beats by ≥1.5pp at 95%; kill if loses by ≥1pp at 95%; keep current otherwise.

Risks: Q3 sun-care seasonality may inflate baseline; digital-PR campaign launching same week as test — sequence to avoid.

Saved to `businesses/field-and-sun/ux/ab-test-pillar-hero-variant.md`.
