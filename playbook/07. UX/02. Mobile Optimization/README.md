# Mobile Optimization

> Mobile-specific UX. Touch targets, viewport, responsive layout, mobile-only failure modes. 60-80% of D2C traffic is mobile; the work compounds. Mobile-as-afterthought is the most common UX failure mode in 2026.

## What it is

Mobile optimization is the discipline of making the site work for mobile users — not just visually but interactively. It includes touch-target sizing, viewport configuration, responsive-layout integrity, mobile-specific interaction patterns (swipe, tap, pinch), mobile-network sensitivity, and the unique failure modes that mobile creates (sticky-keyboard issues, modal-overflow on small screens, fixed-position elements covering content). Distinct from page speed (which mobile shares with desktop), mobile UX is about whether the page actually *works* on mobile devices.

For Field & Sun, ~70% of organic-search traffic is mobile. A pillar page that ranks position 8 for "mineral sunscreen guide" but has a broken mobile experience converts at half the rate it should. Mobile is the primary surface for D2C traffic; mobile UX is the primary surface for D2C conversion.

## Why it matters

Three reasons. First, **mobile is the majority of traffic for D2C / consumer brands**. Designing for desktop and adapting to mobile is the wrong order. Mobile-first design produces better mobile UX *and* better desktop UX (constraints force discipline).

Second, **Google indexes mobile-first**. Since 2019, Google's crawler is mobile-first by default; mobile rendering issues affect indexability and rankings, not just user experience.

Third, **mobile failure modes are silent**. Desktop QA catches obvious bugs; mobile-specific issues (touch-target overlap, sticky-keyboard cover, modal-overflow on small screens, fixed-element layout breaks) often slip through and go uncaught for months. A regular mobile-UX audit catches them.

For Field & Sun: a mobile-UX audit on top organic landing pages is plausibly the highest-impact UX work the brand can do this quarter.

## Core concepts

- **Touch targets.** WCAG 2.1 AA recommends minimum 44×44 px tap area; 48×48 px is the better target. Smaller targets cause mis-taps + rage clicks.
- **Viewport meta.** `<meta name="viewport" content="width=device-width, initial-scale=1">` is required; missing or wrong values produce pinch-zoom + rendering issues.
- **Responsive layout integrity.** Breakpoints (375px / 414px / 768px) hit; content reflows correctly; images scale.
- **Sticky elements.** Fixed nav, sticky banners, chat widgets — each can cover content on small screens. Audit at 375px viewport (iPhone SE / smaller modern phones).
- **Sticky keyboard.** Mobile keyboards cover ~50% of viewport when active. Form-field positioning matters; auto-scroll-to-input behaviour matters.
- **Modal overflow.** Modals designed at desktop sizes overflow on mobile; require mobile-specific layout.
- **Tap delay (300ms historical).** Modern browsers eliminate this, but legacy patterns sometimes remain.
- **Hover states.** Hover doesn't exist on touch; hover-only navigation breaks. Always provide tap-equivalent.
- **Swipe gestures.** Carousels, image galleries, accordions — swipe support is expected on mobile.
- **Form UX on mobile.** Input types (`type="email"`, `tel`, `numeric`) trigger mobile keyboards. `autocomplete` attributes + `inputmode` matter.
- **Mobile-specific tooling.** GSC mobile-usability report, BrowserStack / Sauce Labs for real-device testing, Chrome DevTools device mode.
- **Network variance.** Mobile users on 4G / 5G / sometimes 3G; ensure pages work at slow connections.

## A worked example

> **Scenario:** Field & Sun's mobile conversion rate (1.4%) is meaningfully below desktop (2.7%). Founder suspects mobile UX issues but doesn't have specifics. The team wants a structured audit.
>
> **Step 1.** Run `audit-mobile-ux`. Skill audits priority templates on real mobile devices + DevTools across breakpoints; flags touch-target / viewport / layout / sticky-element / form / modal issues.
>
> **Step 2.** Findings:
>
> - **Mineral-sunscreen pillar:**
>   - Sticky CTA button at 375px viewport covers bottom of content (overlaps last paragraph + footer); user has to scroll past it.
>   - Three FAQ accordion tap targets are 36×40 px (below 44 px threshold).
> - **All PDPs:**
>   - Size-selector buttons 32×40 px (below threshold; rage-click pattern correlates).
>   - Chat-widget overlay covers "Add to cart" button on iPhone SE viewport.
> - **Checkout:**
>   - Email input doesn't trigger email keyboard on mobile (missing `type="email"`).
>   - Address autocomplete missing (no `autocomplete="street-address"` etc.).
>   - Form fields scroll under sticky keyboard when focused (no auto-scroll-to-input).
> - **Quiz:**
>   - Question buttons 38×38 px.
>   - Modal "Skip question" overflows viewport on iPhone SE.
> - **Across pages:**
>   - Hover-only desktop tooltips have no mobile equivalent (info icons appear unresponsive on tap).
> - **GSC mobile usability:** 12 URLs flagged with "Clickable elements too close together" warning.
>
> **Step 3.** Remediation list:
>
> - Resize touch targets across templates (PDP size-selector, quiz, FAQ accordions) to ≥44×44 px.
> - Move sticky CTA from "covers content" position to non-overlapping; consider showing only after scroll-past-fold.
> - Audit chat-widget z-index + position; constrain on small viewports.
> - Add `type="email"`, `tel`, `inputmode`, `autocomplete` attributes across forms.
> - Implement auto-scroll-to-input on form-field focus (mobile).
> - Fix quiz modal overflow at 375px.
> - Replace hover-only tooltips with tap-friendly versions.
>
> **Step 4.** Result: 30 days post-fix, mobile conversion rate climbs from 1.4% to 2.1%; GSC mobile-usability errors fall to 0; rage-click patterns resolved. Mobile-desktop conversion gap narrows from 1.3pp to 0.6pp.

## How to do it

1. **Pull GSC mobile-usability report.** Identifies pages with known mobile issues.
2. **Identify priority pages.** Top organic landing pages, priority PDPs, key conversion-funnel steps.
3. **Run `audit-mobile-ux`.** Skill audits across priority templates on real device + DevTools at 375px / 414px / 768px viewports.
4. **Test on real devices.** iPhone SE / mid-tier Android. Emulator is a baseline; real device catches gestural / keyboard / network issues emulator misses.
5. **Audit forms specifically.** Mobile checkout / signup / lead-capture forms have outsized impact; fix early.
6. **Audit sticky / fixed elements.** Sticky nav + chat widget + cookie banner + sticky CTA — each can cover content on small viewports. Test at 375px.
7. **Prioritise touch targets.** Below-44px is the most common WCAG mobile violation.
8. **Test mobile keyboard interactions.** Email / tel / number input types; autocomplete; sticky-keyboard-cover-input behaviour.
9. **Cross-reference with session replay.** Hotjar / Clarity reveal mobile-specific friction (rage clicks on small targets, dead clicks on cover-overlapped CTAs).
10. **Re-test after deployment.** Mobile regressions happen with new template ships; quarterly cadence.

## Common pitfalls

- **Designing desktop-first.** The constraint of mobile-first produces better designs. Skipping the discipline creates mobile-as-afterthought.
- **Testing only on emulator.** Emulator misses keyboard, gesture, and network issues real devices have.
- **Ignoring sticky-element overflow.** Most teams test at 1440px desktop; 375px reveals overlaps.
- **Touch targets below 44px.** Most common WCAG violation; rage-click producer.
- **Hover-only desktop patterns.** Tooltips, mega-menus, image-zoom — all break on touch without explicit tap fallback.
- **Forms without proper input types.** Default `type="text"` for email / phone / number breaks mobile keyboard.
- **Modal overflow at small viewports.** Modals designed for desktop overflow at 375px.
- **Cookie banners covering CTAs.** Test cookie banner + sticky CTA + chat widget combo at 375px; often 60% of viewport is covered.
- **Skipping GSC mobile-usability report.** Free; surfaces issues; underused.
- **No real-device test.** BrowserStack / actual phone is the gold standard.

## Skills in this toolkit

- **[audit-mobile-ux](skills/audit-mobile-ux/SKILL.md)** — produces a mobile UX audit covering touch-target compliance (44×44 minimum), viewport meta, responsive-layout integrity at 375px / 414px / 768px breakpoints, sticky / fixed-element overflow, mobile-form configuration (input types, autocomplete, sticky-keyboard behaviour), modal overflow, hover-state fallbacks, GSC mobile-usability findings, and session-replay friction patterns. Output is the prioritised remediation list with conversion-impact estimates. Quarterly cadence.

## Related topics

- **[01. Page Speed UX](../01.%20Page%20Speed%20UX/README.md)** — overlaps; mobile speed is part of the UX layer.
- **[03. UX Design](../03.%20UX%20Design/README.md)** — mobile-first design discipline lives here.
- **[06. Accessibility](../06.%20Accessibility/README.md)** — touch-target + keyboard support overlaps with WCAG accessibility.
- **[03. Technical SEO / 03. Site Speed](../../03.%20Technical%20SEO/03.%20Site%20Speed/README.md)** — mobile CWV.
- **[03. Technical SEO / 02. Indexing](../../03.%20Technical%20SEO/02.%20Indexing/README.md)** — mobile-first indexing.
- **[05. Conversion Funnels](../05.%20Conversion%20Funnels/README.md)** — mobile funnel issues vs desktop.

## Further reading

- [Google — Mobile-First Indexing Best Practices](https://developers.google.com/search/mobile-sites/) — official guidance.
- [Luke Wroblewski — Mobile-First Design](https://www.lukew.com/) — foundational reference.
- [Smashing Magazine — Mobile UX Patterns](https://www.smashingmagazine.com/) — practitioner walkthroughs.
- [WebAIM — Mobile Accessibility Guide](https://webaim.org/) — touch-target + keyboard guidance.
- [Apple Human Interface Guidelines / Material Design — Mobile](https://developer.apple.com/design/human-interface-guidelines/) — platform-specific patterns worth respecting.
