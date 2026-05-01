# Page Speed UX

> Speed as humans experience it, not just as Lighthouse measures it. Field-data Core Web Vitals, perceived load, interaction responsiveness. The UX-side counterpart to Technical SEO's site-speed work — same data, different remediation lens.

## What it is

Page Speed UX is the discipline of making pages feel fast to humans, not just to Lighthouse. It overlaps with Technical SEO's [Site Speed](../../03.%20Technical%20SEO/03.%20Site%20Speed/README.md) leaf — both depend on Core Web Vitals — but the operating mode differs. Technical SEO chases CWV thresholds for ranking signal; UX chases the *felt* experience that turns visits into conversions. A page passing CWV with a green LCP can still feel sluggish if the hero image renders before content stabilises, the CTA button takes 300ms to respond, or the user perceives jank between sections. UX-side work catches those.

For Field & Sun, the page-speed-UX work is about ensuring sun-care PDPs and the new pillar pages convert at the rate the brand expects — not just rank where the brand expects. A pillar with 3-second LCP and 250ms INP passes CWV but feels sluggish; addressing the perceived-speed gap can lift conversion 5-15%.

## Why it matters

Three reasons. First, **felt speed is a conversion driver, not just a ranking signal**. Each second of perceived load time costs ~5-10% in conversion rate; INP > 200ms produces measurable rage-click + abandonment patterns. Field-data optimisation is conversion work, not ranking theatre.

Second, **lab metrics mislead**. A Lighthouse score of 95 means the page loads fast in a controlled environment with throttling chosen by Google. Real users on real networks with real ad-blockers experience differently. Field data (CrUX) is closer to what users feel.

Third, **the hardest UX-speed problems are the ones CWV doesn't catch**. CWV measures three signals (LCP, INP, CLS); reality is broader (slow font swap, jittery scroll, sluggish modal opens, unresponsive form fields). UX-side audit catches what CWV misses.

For Field & Sun: a UX-side speed audit on the top 10 organic landing pages is plausibly worth more in conversion lift than the next round of pure Technical-SEO speed work.

## Core concepts

- **Field-data vs lab-data.** Field data is real users' real measurements (CrUX, GSC CWV report). Lab data is controlled tests (Lighthouse, PageSpeed Insights). UX work prioritises field data.
- **Perceived performance.** Different from measured performance. Skeleton loaders that show structure during load *feel* faster than blank screens, even when measured load is identical. Designing for perception matters.
- **The interaction gap.** Time from user action (click, tap, type) to visible response. INP measures part of this; INP > 200ms is uncomfortable; > 500ms triggers abandonment.
- **Mobile network variance.** Mid-tier mobile devices on 4G are the calibration target; pages that test well on desktop high-bandwidth often fail on mobile mid-tier.
- **Above-the-fold priority.** Hero image, primary CTA, primary headline — these need to render fast or the user perceives the whole page as slow.
- **The 100ms / 1s / 10s threshold.** Cognitive thresholds: <100ms feels instant; <1s feels uninterrupted; >10s loses the user. UX work targets <1s for primary interactions.
- **Sluggish-but-passing CWV.** A page can pass CWV and still feel slow. Common causes: slow fonts, jittery scroll on long pages, slow modal opens, form-input lag.
- **JavaScript bundle bloat.** Often the root cause of mobile sluggishness. UX work involves auditing what JS is loading, why, and whether it can be deferred / removed.
- **The "rage click" pattern.** Users tapping repeatedly on unresponsive elements. Captured in session-replay tools (Hotjar, FullStory, Microsoft Clarity); diagnostic for UX-speed issues.

## A worked example

> **Scenario:** Field & Sun's mineral-sunscreen pillar has shipped and ranks position 9 for "mineral sunscreen guide." It passes CWV (LCP 2.4s, INP 180ms, CLS 0.05). But conversion rate from pillar → PDP is 4.1%, vs 7.2% on the brand's other long-form content. The team wants to identify and fix the UX-speed gap.
>
> **Step 1.** Run `audit-page-speed-ux`. Skill audits perceived speed, interaction lag, mobile-network behaviour, and rage-click patterns.
>
> **Step 2.** Findings:
>
> - **CWV (passing):** LCP 2.4s mobile, INP 180ms, CLS 0.05.
> - **Perceived speed gaps:**
>   - Hero image swaps from low-res to high-res ~1.2s after LCP fires; visible flicker.
>   - Methodology comparison-table renders below fold but causes layout shift on scroll-into-view (CLS missed because user has scrolled).
>   - Sticky nav animates in 200ms after scroll begins (sluggish feel).
>   - Custom font swaps from system to brand at 800ms; FOUT visible.
> - **Interaction issues:**
>   - "Shop SPF" CTA button has 240ms tap-response gap (within INP threshold but feels slow).
>   - Three FAQ accordion clicks logged in session replay show rage-click pattern (users tapping 3-4 times).
> - **Mobile network:** mid-tier 4G test shows hero load at 4.1s (vs 2.4s field-data median); ~25% of users likely experiencing the longer load.
>
> **Step 3.** Remediation list:
>
> - Pre-load high-res hero or remove low-res placeholder (eliminate swap).
> - Reserve space for comparison table (prevent post-fold CLS).
> - Defer sticky-nav animation OR make instant.
> - Self-host critical font; preload; use `font-display: optional`.
> - Audit "Shop SPF" CTA: defer tracking-pixel firing until after click handler completes.
> - Investigate FAQ accordion: confirm tap target hit area; reduce JS execution on click.
>
> **Step 4.** Result: 30 days post-fix, perceived speed materially improved (no more hero flicker, no font FOUT); conversion rate from pillar → PDP rises to 6.4%. CWV unchanged (was already passing) but the UX-felt difference is decisive.

## How to do it

1. **Pull field data.** GSC CWV report; CrUX dashboard; PageSpeed Insights field-data section. Distinct from lab data.
2. **Identify priority pages.** Top organic landing pages, especially pillars + tools + high-converting PDPs.
3. **Run `audit-page-speed-ux`.** Skill goes deeper than CWV — perceived speed gaps, interaction lag, mobile network variance, rage-click patterns.
4. **Layer session-replay data.** Hotjar / Microsoft Clarity / FullStory show actual user friction. Look for rage clicks, dead clicks, scroll-stutter, slow-modal patterns.
5. **Test on mid-tier mobile + 4G.** Different from a desktop test. Use Chrome DevTools network throttling or actual device testing.
6. **Prioritise remediations by impact.** Above-the-fold issues > below-the-fold issues; primary CTAs > secondary; high-traffic templates > low.
7. **Coordinate with Technical SEO.** Some fixes overlap; coordinate to avoid duplicate work.
8. **Re-test after deployment.** Field data lags 28 days; deploy + monitor + confirm.
9. **Iterate quarterly.** Speed regressions happen; quarterly UX-speed review catches drift.
10. **Connect to A/B testing.** When in doubt about whether a perceived-speed change actually moves conversion, test it.

## Common pitfalls

- **Anchoring on Lighthouse score.** Lighthouse 100 ≠ fast for users. Field data is the better target.
- **Ignoring perceived speed.** Skeleton loaders, font-display strategy, optimistic UI all affect felt speed without changing measured speed.
- **No mid-tier mobile test.** Desktop tests miss most of the real-user experience.
- **Optimising CWV without UX layer.** Page passes CWV thresholds but still feels slow; the conversion gap stays.
- **Skipping session replay.** Heatmaps + replays surface rage-click patterns no metric catches.
- **Over-investing in marginal gains.** Going from LCP 2.4 → 2.0 on a passing page is 0% conversion lift typically; fixing perceived-speed gaps is 5-15%.
- **No baseline.** Without measuring conversion before / after, "the fix worked" is anecdote.
- **Shipping fixes in batches.** Hard to attribute outcome to specific change. Ship + measure + ship.
- **Forgetting accessibility intersection.** Some speed fixes (e.g., aggressive lazy-load, conditional rendering) break screen-reader behaviour. Coordinate.

## Skills in this toolkit

- **[audit-page-speed-ux](skills/audit-page-speed-ux/SKILL.md)** — produces a UX-focused page-speed audit covering field-data CWV, perceived-speed gaps (font swap, image swap, layout-shift below fold, sluggish nav animation, slow modal opens), interaction lag (CTAs, form fields, accordions), rage-click + dead-click patterns from session replay, mobile mid-tier network behaviour, and a prioritised remediation list with conversion-impact estimates. Output is the operational fix list for SEO-driven traffic. Quarterly cadence.

## Related topics

- **[03. Technical SEO / 03. Site Speed](../../03.%20Technical%20SEO/03.%20Site%20Speed/README.md)** — same Core Web Vitals data, different lens. Coordinate to avoid duplicate work.
- **[02. Mobile Optimization](../02.%20Mobile%20Optimization/README.md)** — mobile-specific speed + UX overlaps significantly.
- **[03. UX Design](../03.%20UX%20Design/README.md)** — design decisions affect perceived speed (skeleton loaders, font choice, image strategy).
- **[05. Conversion Funnels](../05.%20Conversion%20Funnels/README.md)** — speed issues surface as funnel-stage drop-off.
- **[04. A/B Testing](../04.%20AB%20Testing/README.md)** — perceived-speed changes are testable.
- **[05. Analytics / 04. Traffic Analysis](../../05.%20Analytics/04.%20Traffic%20Analysis/README.md)** — conversion-rate decay can correlate with speed regressions; cross-reference.

## Further reading

- [web.dev — Core Web Vitals](https://web.dev/vitals/) — Google's canonical reference.
- [Addy Osmani — User-Perceived Performance](https://addyosmani.com/) — strong on the perceived-speed side.
- [Vitaly Friedman / Smashing Magazine — Front-End Performance Checklists](https://www.smashingmagazine.com/) — practical checklists.
- [Tim Kadlec — Performance Beyond CWV](https://timkadlec.com/) — strong on what CWV misses.
- [Microsoft Clarity / Hotjar Guides — Session-Replay-Driven UX](https://clarity.microsoft.com/) — practitioner reference for friction-spotting.
