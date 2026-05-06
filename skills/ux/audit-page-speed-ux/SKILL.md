---
name: audit-page-speed-ux
description: Use to audit page speed ux; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Audit Page Speed UX

This skill produces a UX-focused page-speed audit. Output is a prioritised remediation list with conversion-impact estimates.

The skill is opinionated about a few things: field data > lab data; perceived speed > measured speed (when they conflict); mid-tier mobile + 4G is the calibration target; CWV-passing-but-feels-slow is the most common pattern in 2026 (and the most-overlooked).

## When to use this skill

- The user has CWV-passing pages but conversion is below expectation.
- The user has shipped new templates and wants a UX-speed baseline.
- The user is investigating session-replay rage-click patterns.
- The user is running a quarterly UX review.

## When NOT to use this skill

- The user wants the CWV / ranking-side speed audit — use Technical SEO's `audit-core-web-vitals`.
- The user wants broader mobile UX — use `audit-mobile-ux`.
- The user wants A/B testing of a specific change — use `plan-ab-test`.
- The user wants to design a new template — use `review-ux-design-for-seo`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4).
2. **Priority pages** — required. Top organic landing pages (pillars, tools, top blog posts, top PDPs). 5-15 pages typical.
3. **GSC + CrUX access** — required. Field-data CWV.
4. **Session-replay tooling** — strongly preferred. Hotjar, Microsoft Clarity (free), FullStory. Without it, rage-click pattern detection is harder.
5. **Existing technical-SEO speed audit** — optional. If `audit-core-web-vitals` has run recently, build on it.
6. **Conversion data** — strongly preferred. Per-page conversion rate over 30 days (from GA4).
7. **Mobile device for testing** — preferred. Mid-tier device on actual 4G.

If priority-page list + GSC access are missing, ask. The audit needs anchors.

## Process

1. **Pull field-data baselines.**
   - GSC CWV report (mobile + desktop) per page or page-group.
   - CrUX dashboard for page-level (where available).
   - PageSpeed Insights field-data tab.
2. **Identify CWV-passing-but-slow.**
   - Pages passing all three thresholds (LCP < 2.5s, INP < 200ms, CLS < 0.1) where conversion is below expected.
   - These are the prime targets for UX-speed work.
3. **Audit perceived-speed gaps.** Per priority page:
   - **Hero / above-the-fold:** image swap (low-res → high-res); font swap (system → custom); layout shift on initial render.
   - **Below-fold layout shifts:** images / embeds without reserved space; ad slots; lazy-loaded elements.
   - **Animation feel:** sticky nav, modal opens, dropdown reveals — measure ms; >150ms is sluggish.
   - **Skeleton loaders:** present and well-designed, or blank screens that feel slow?
   - **Optimistic UI:** does the UI respond before server confirms? (Form submits, add-to-cart, filter changes.)
4. **Audit interaction lag.** Per page:
   - Primary CTA tap response time.
   - Form-field input lag (typing should feel instant).
   - Accordion / dropdown / tabs response time.
   - Filter / sort responsiveness.
   - Scroll smoothness.
5. **Session-replay friction patterns.** From Hotjar / Clarity / FullStory:
   - Rage clicks: 3+ taps on same element in <2 seconds.
   - Dead clicks: clicks on non-interactive elements.
   - Scroll-stutter: jittery scroll behaviour.
   - Quick-back signal: user lands, looks for ~3 seconds, clicks back. Often correlates with above-fold speed issues.
6. **Mobile mid-tier + 4G test.** Throttle network in DevTools (mid-tier mobile preset) or test on real device. Compare to lab CWV.
7. **JavaScript bundle audit.**
   - Total JS shipped to page (kB).
   - Render-blocking scripts.
   - Third-party scripts (analytics, ads, chat) and their cost.
   - Code-splitting status.
8. **Image audit (post-Technical-SEO).**
   - Format (WebP / AVIF over JPEG).
   - Responsive `srcset` and `sizes`.
   - Lazy-load implementation (sufficient threshold, not above-fold).
9. **Font strategy audit.**
   - `font-display: swap` vs `optional` vs `block`.
   - Font preload status.
   - FOIT vs FOUT vs FOFT.
10. **Prioritise remediations.**
    - Above-fold > below-fold.
    - Primary CTAs > secondary.
    - High-traffic templates > low.
    - Quick-win remediation (1-3 hrs) ahead of structural ones.
11. **Estimate conversion impact.** Each remediation: best estimate of conversion lift. Honest ranges (e.g., "1-3% conversion lift expected").
12. **Write the audit.**

## Output format

```markdown
# Page Speed UX Audit — [Business name]

**Audit date:** [date]
**Pages audited:** [n]
**Auditor:** [name / role]

## Executive summary
- Pages CWV-passing but UX-flagged: [n]
- Estimated conversion lift if all P0 remediations ship: [%]
- Estimated total fix effort: [n] days
- **Headline:** [1-2 sentence summary]

## Per-page audit

### [Page URL]

**Field data (GSC / CrUX):**
- LCP (mobile): [n.ns] — pass / needs improvement / poor
- INP (mobile): [nms] — pass / needs improvement / poor
- CLS (mobile): [n.nn] — pass / needs improvement / poor

**Perceived-speed gaps:**
- [Issue 1]: [description]; impact = high / medium / low.
- [Issue 2]: [...]
- ...

**Interaction lag:**
- [CTA / element]: [tap-response time]; threshold breach.
- ...

**Session-replay patterns:**
- Rage clicks observed: [where, frequency].
- Dead clicks: [where].
- Quick-back signal: [%].

**Mobile mid-tier test:**
- LCP: [n.ns] (vs field [n.ns]).
- INP: [nms].
- Notes: [any mobile-specific issues].

**Remediations:**
| # | Issue | Severity | Effort | Estimated conversion lift |
|---|-------|----------|--------|---------------------------|
| 1 | [Fix description] | P0 | [hrs] | [1-3%] |
| 2 | [...] | P1 | [hrs] | [<1%] |

[Repeat per priority page]

## Cross-page patterns
[Issues that appear across multiple pages — usually template-level]
- [Pattern 1]: appears on [n] pages; root cause = [...]; remediation = [...].
- [Pattern 2]: ...

## JavaScript bundle audit
- Total JS shipped (priority pages avg): [n] kB.
- Top 5 third-party scripts by size: [list].
- Render-blocking scripts: [list].
- Recommendations: [defer / remove / code-split / etc.]

## Font strategy
- Current: [observation].
- Issues: [FOUT / FOIT / no preload].
- Recommendations: [self-host / preload / `font-display`].

## Prioritised fix list (one-page version for stakeholders)
| # | Page / Pattern | Issue | Severity | Effort | Lift |
|---|----------------|-------|----------|--------|------|
| 1 | Mineral-sunscreen pillar | Hero image swap (low-res → high-res) | P0 | 4 hrs | 2-4% |
| 2 | All pillars | Custom font FOUT | P0 | 1 day (template-level) | 1-2% |
| 3 | Skin-type quiz | "Shop SPF" CTA tap-lag (240ms) | P0 | 2 hrs | 3-6% |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All P0 remediations shipped.
- [ ] Field-data CWV remains passing post-deployment.
- [ ] Session-replay rage-click rate decreased on fixed pages.
- [ ] Conversion lift on fixed pages: track for 30+ days.
- [ ] Re-audit scheduled in 90 days.

## Risks and watchouts
3-5 specific risks. E.g. "Aggressive lazy-load can break above-fold rendering on slow connections — preserve above-fold from lazy-load"; "Font self-hosting requires CDN setup; coordinate with infra"; "JS bundle reduction may break tracking pixels; verify each removed script"; "INP fixes can interact with click-tracking — test analytics events post-deploy."

## Open questions for the team
- [ ] Confirm session-replay tooling access.
- [ ] Confirm mid-tier mobile device for testing.
- [ ] Confirm conversion-tracking is reliable (per `audit-conversion-tracking`).
- [ ] Confirm A/B test infrastructure for ambiguous fixes.
```

Save the produced file to `businesses/<slug>/ux/page-speed-ux-audit-[YYYY-MM-DD].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Field data is primary; lab data is secondary reference.
- Per-page audit covers perceived-speed gaps + interaction lag + session-replay patterns + mid-tier mobile.
- Cross-page patterns identified separately (template-level fixes).
- JS bundle + font strategy audited.
- Remediations prioritised P0 / P1 / P2 with effort + lift estimate.
- Conversion-impact estimates are honest ranges, not single numbers.
- Remediation list is actionable for both engineering and design.

## Common mistakes to avoid

- Don't anchor on Lighthouse. Field-data > lab data.
- Don't audit only above-fold. Below-fold layout shifts (post-scroll) miss CWS but affect feel.
- Don't propose marginal lab-metric improvements. UX-speed work targets perceived gaps.
- Don't skip session replay. Rage-click patterns are diagnostic.
- Don't test only on desktop. Mid-tier mobile + 4G is the user's experience.
- Don't ignore third-party JS. Often the dominant cost.
- Don't promise specific conversion lifts. Ranges + measurement post-deployment.
- Don't skip the re-audit. Speed regresses; quarterly cadence catches drift.

## Example

**Input (abbreviated):** Field & Sun. Priority pages: mineral-sunscreen pillar (passing CWV; conversion 4.1%), skin-type quiz, top 3 PDPs. Session replay via Microsoft Clarity. Mid-tier mobile available for testing.

**Output (abbreviated):**

Pages CWV-passing but UX-flagged: 3 (pillar, quiz, top PDP).

Mineral-sunscreen pillar findings:

- Field LCP 2.4s, INP 180ms, CLS 0.05 — all passing.
- Hero image swap (low-res placeholder → high-res actual ~1.2s after LCP) → perceived flicker.
- Methodology table CLS issue post-fold (not in CWV measurement window).
- Custom font FOUT 800ms.
- Sticky-nav animation 200ms (sluggish).

Skin-type quiz: "Shop SPF" CTA 240ms tap-response (within INP threshold but feels slow).

Top PDP: rage-click pattern on size-selector.

Cross-page pattern: custom font FOUT on every template — fix at theme level.

JS bundle: 480kB shipped on pillar; 3 third-party scripts (analytics, chat, review widget) account for 180kB; review widget render-blocking.

Prioritised fixes: 5 P0 items + 4 P1 items; total effort ~6 days dev; estimated combined conversion lift on flagged pages: 8-15%.

Saved to `businesses/field-and-sun/ux/page-speed-ux-audit-2026-05-01.md`.
