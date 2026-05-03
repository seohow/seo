# 07. UX

> The user-experience layer that determines whether the traffic SEO earns actually converts. Page speed felt by humans, mobile usability, conversion-funnel hygiene, accessibility, A/B testing — the discipline of turning visits into outcomes.

## What this category covers

UX in this toolkit is *SEO-adjacent UX* — the user-experience work that sits between earning the click and producing the conversion. It overlaps with Technical SEO (page speed, mobile usability) but sits in a different operating mode: Technical SEO chases Core Web Vitals thresholds for ranking signal, UX chases the *felt* speed and usability that make humans complete a purchase. The same metric, viewed through different lenses.

The six sub-topics here cover infrastructure-felt-by-users (page speed, mobile, accessibility), conversion architecture (UX design, conversion funnels), and the experimentation discipline (A/B testing) that closes the loop on what actually works. For Field & Sun, this category answers questions like: "the sun-care content is driving 30% more sessions but PDP conversion is flat — where's the leak?" UX work is where those leaks get found and fixed.

## How the sub-topics fit together

```
Performance + access            Conversion architecture          Experimentation
────────────────────            ──────────────────────           ────────────────
01. Page Speed UX               03. UX Design                    04. A/B Testing
02. Mobile Optimization         05. Conversion Funnels          (closes the loop)
06. Accessibility
```

1. **[01. Page Speed UX](01.%20Page%20Speed%20UX/README.md)** — speed as humans experience it, not just lab metrics. Field-data CWV, perceived speed, interaction responsiveness. Distinct from Technical SEO's site-speed work in audience and remediation.
2. **[02. Mobile Optimization](02.%20Mobile%20Optimization/README.md)** — mobile-specific UX (touch targets, viewport, responsive layout, mobile-only failure modes). 60-80% of D2C traffic is mobile; the work compounds.
3. **[03. UX Design](03.%20UX%20Design/README.md)** — page-shape decisions for SEO-driven traffic: above-the-fold structure, hero / nav / IA, content hierarchy, CTA placement, cross-page navigation.
4. **[04. A/B Testing](04.%20AB%20Testing/README.md)** — disciplined experimentation for organic-traffic landing pages. SEO-safe testing patterns; sample-size discipline; what to test vs. what's not worth testing.
5. **[05. Conversion Funnels](05.%20Conversion%20Funnels/README.md)** — funnel diagnosis and optimisation specifically for organic-search visitors. Where the funnel leaks, why, and what to fix.
6. **[06. Accessibility](06.%20Accessibility/README.md)** — WCAG compliance, screen-reader-friendly markup, keyboard navigation. Increasingly legal-required in many jurisdictions; SEO-overlapping (semantic HTML, alt text, headings) but distinct enough to deserve its own discipline.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Diagnostic (1-2 weeks):**

1. Run `audit-page-speed-ux` to baseline felt-speed across priority pages (different from Technical SEO's CWV audit — UX-focused remediation).
2. Run `audit-mobile-ux` on top organic landing pages — touch targets, viewport, mobile failure modes.
3. Run `audit-accessibility` on priority templates (homepage, PDP, blog, pillar). WCAG 2.1 AA baseline.

**Pass 2 — Architecture (2-4 weeks):**

1. Run `review-ux-design-for-seo` on priority templates — above-fold, hierarchy, CTA placement, cross-page nav.
2. Run `analyse-conversion-funnel` on the organic-search funnel. Identify leaks.

**Pass 3 — Experimentation (ongoing):**

1. Run `plan-ab-test` for the highest-impact funnel-leak hypothesis. Run; analyse; ship or kill.
2. Iterate.

## Pre-requisites and dependencies

The UX category consumes outputs from earlier categories:

- `businesses/<slug>/clusters/cluster-map.md` — UX work prioritised on cluster-priority pages.
- `businesses/<slug>/analytics/traffic-analysis-*.md` — funnel-leak signals identified in traffic analysis feed UX work.
- Technical SEO Core Web Vitals data — UX page-speed work builds on the same field-data baselines.
- Conversion-tracking audit (`audit-conversion-tracking`) — without working conversion data, A/B test outcomes can't be measured.

It produces inputs for downstream categories:

- A/B-tested winners → ship to live; measured via Analytics.
- Funnel improvements → lift in conversion KPIs ([05. Analytics / 05. KPI Tracking](../05.%20Analytics/05.%20KPI%20Tracking/README.md)).
- Mobile / accessibility fixes → reflected in Technical SEO's CWV + GSC mobile-usability reports.

## Skills you'll use in this category

The full inventory across the 6 sub-topics:

- **[audit-page-speed-ux](../../skills/ux/audit-page-speed-ux/SKILL.md)** — UX-focused page-speed audit; perceived speed + INP / interaction lag + remediation.
- **[audit-mobile-ux](../../skills/ux/audit-mobile-ux/SKILL.md)** — mobile-specific UX issues across priority templates.
- **[review-ux-design-for-seo](../../skills/ux/review-ux-design-for-seo/SKILL.md)** — UX-design review of the templates organic visitors land on.
- **[plan-ab-test](../../skills/ux/plan-ab-test/SKILL.md)** — A/B test design for SEO-driven traffic; SEO-safe patterns; sample-size discipline.
- **[analyse-conversion-funnel](../../skills/ux/analyse-conversion-funnel/SKILL.md)** — diagnose funnel leaks in the organic-search conversion path.
- **[audit-accessibility](../../skills/ux/audit-accessibility/SKILL.md)** — WCAG 2.1 AA accessibility audit on priority templates.

## Common pitfalls

- **Treating UX as separate from SEO.** Visitors who can't use the page don't convert; conversion rate is the second half of SEO ROI. UX work is part of the SEO programme.
- **Optimising lab metrics, not field metrics.** Lighthouse 100 doesn't mean the user has a fast experience. Field-data CWV (CrUX) is what matters.
- **Mobile-as-afterthought.** 60-80% of D2C traffic is mobile; designing-then-adapting is the wrong order. Mobile-first discipline matters.
- **A/B testing every change.** Some changes aren't testable (sample size); some aren't worth testing (low impact); some are obvious wins (just ship). Tested-everything teams under-ship.
- **Ignoring accessibility.** WCAG 2.1 AA is legally required in many jurisdictions (ADA / EU Accessibility Act). It's also good UX; ~15-20% of users have accessibility needs.
- **Skipping the funnel diagnosis.** Generic "improve conversion" projects waste effort. Funnel analysis surfaces the actual leak; fix the leak.
- **Shipping UX changes that break SEO.** Lazy-load above-the-fold content; collapse important content behind tabs; remove H2 structure for visual reasons. Coordinate UX changes against SEO requirements.
- **Tooling sprawl.** Heatmaps, session replay, on-site survey, A/B testing, accessibility scanner — each tool has a use case but together they cost $1k+/mo. Pick the few that match your scale.
- **No baseline.** Without measuring before, "improvement" can't be claimed afterward. Baseline before any UX work.

## Where to go after this

Once UX work is shipping:

- **[05. Analytics](../05.%20Analytics/)** — measure conversion-rate lift, funnel-leak repair, A/B-test outcomes.
- **[03. Technical SEO / 03. Site Speed](../03.%20Technical%20SEO/03.%20Site%20Speed/)** — UX speed work feeds back into the Technical SEO CWV story.
- **[06. Off-page SEO](../06.%20Off-page%20SEO/)** — UX-improved pages convert visitors that off-page work delivered.
- **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/)** — close the loop; refresh the wins backlog with UX work shipped.
