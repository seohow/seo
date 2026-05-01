---
name: audit-mobile-ux
description: Produces a mobile UX audit covering touch-target compliance (44×44 px WCAG minimum; 48×48 preferred), viewport meta correctness, responsive-layout integrity at 375 / 414 / 768 px breakpoints, sticky / fixed-element overflow (cookie banners, chat widgets, sticky CTAs covering content at small viewports), mobile-form configuration (input types like `type="email"` / `tel`, `inputmode`, `autocomplete`, sticky-keyboard auto-scroll-to-input), modal overflow on small viewports, hover-state fallbacks for touch (tooltips / mega-menus), GSC mobile-usability findings, and session-replay friction patterns (rage clicks on small targets, dead clicks on cover-overlapped elements). Output is the prioritised remediation list with conversion-impact estimates. Use whenever the user asks to "audit mobile UX," "fix mobile experience," "mobile conversion rate is low," "investigate mobile usability," "set up mobile-first design," or has a mobile-vs-desktop conversion gap. Also use as a quarterly cadence skill — mobile regressions ship with new templates. Do not use for mobile page speed only (use `audit-page-speed-ux`), broader UX design (use `review-ux-design-for-seo`), or full WCAG accessibility audit (use `audit-accessibility`).
---

# Audit Mobile UX

This skill produces a mobile UX audit. Output covers touch targets, viewport / breakpoints, sticky-element overflow, forms, modals, hover fallbacks, GSC findings, session-replay patterns, and a prioritised remediation list.

The skill is opinionated about a few things: real-device testing > emulator (on at least one mid-tier device); 375px viewport is the calibration target (iPhone SE / smaller modern phones); 44×44 px minimum touch target (48×48 preferred); sticky-element overflow at 375px is the most-overlooked failure mode.

## When to use this skill

- The user has a mobile-vs-desktop conversion gap.
- The user is shipping a redesign and wants a mobile-UX baseline.
- The user is investigating GSC mobile-usability errors.
- The user is running a quarterly UX review.

## When NOT to use this skill

- The user wants page speed only (mobile or desktop) — use `audit-page-speed-ux`.
- The user wants the full UX design review — use `review-ux-design-for-seo`.
- The user wants WCAG accessibility audit — use `audit-accessibility`.
- The user wants A/B test design — use `plan-ab-test`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`. Critical sections: products/services (3), customer (4).
2. **Priority pages** — required. Top organic landing pages, priority PDPs, conversion-funnel pages.
3. **GSC access** — required. Mobile-usability report.
4. **Real device** — preferred. iPhone SE / mid-tier Android. Emulator is a baseline.
5. **Session-replay tooling** — strongly preferred. Hotjar, Microsoft Clarity, FullStory.
6. **Existing mobile audit** — optional. If recent, build on it.

If priority pages + GSC are missing, ask. The audit needs anchors.

## Process

1. **Pull GSC mobile-usability report.** Flag pages with known issues.
2. **Test priority pages on real mid-tier mobile.** iPhone SE / mid-tier Android. Note any obvious UX issues (touch overlaps, keyboard cover, modal overflow).
3. **DevTools breakpoint audit.** Test at 375 / 414 / 768 px viewports per priority page.
4. **Touch-target audit.**
   - Minimum 44×44 px (WCAG); 48×48 preferred.
   - Audit primary CTAs, accordion / dropdown triggers, form-field controls, navigation items, size / variant selectors, FAQ toggles.
   - Flag below-threshold targets.
5. **Viewport meta audit.** `<meta name="viewport" content="width=device-width, initial-scale=1">`. Confirm present and correct.
6. **Sticky / fixed-element overflow audit.**
   - Cookie banner: covers what % of viewport at 375px?
   - Chat widget: position + z-index; covers CTAs?
   - Sticky CTA: covers content?
   - Sticky nav: appropriate height; doesn't dominate small viewport?
   - Combination test: cookie banner + chat widget + sticky CTA simultaneously — how much viewport is left?
7. **Form audit.**
   - Email field: `type="email"` (triggers email keyboard).
   - Phone: `type="tel"`.
   - Number: `type="number"` or `inputmode="numeric"`.
   - Autocomplete: `autocomplete="email"`, `street-address`, `postal-code`, etc.
   - Sticky-keyboard auto-scroll-to-input: when input focuses, page scrolls so input is visible above keyboard.
   - Validation feedback: visible above keyboard.
8. **Modal overflow audit.** Open every modal / overlay / lightbox at 375px viewport. Confirm no horizontal scroll, content not cut off, close-button accessible.
9. **Hover-state fallback audit.** Identify hover-only patterns (desktop tooltips, mega-menus, image-zoom). Confirm tap-equivalent exists.
10. **Carousel / swipe audit.** Image carousels, product galleries, accordion-style content — swipe gestures supported.
11. **Session-replay mobile patterns.** Filter session-replay tool to mobile traffic. Look for rage clicks, dead clicks, scroll-stutter, bounces from specific elements.
12. **Prioritise remediations.**
    - GSC-flagged issues first (Google sees them).
    - High-traffic templates next.
    - Conversion-funnel-blocking issues third.
13. **Estimate conversion impact.** Per remediation: best-estimate conversion lift.
14. **Write the audit.**

## Output format

```markdown
# Mobile UX Audit — [Business name]

**Audit date:** [date]
**Pages audited:** [n]
**Devices used:** [iPhone SE / Android Pixel / DevTools]
**Auditor:** [name / role]

## Executive summary
- Mobile conversion vs desktop gap: [pp].
- GSC mobile-usability flags: [n] URLs.
- P0 issues: [n].
- Estimated conversion lift if all P0 ship: [%].
- Estimated total fix effort: [days].
- **Headline:** [1-2 sentences].

## GSC mobile-usability findings
| Issue | URL count | Examples |
|-------|-----------|----------|
| Clickable elements too close together | n | [list] |
| Text too small to read | n | [list] |
| Content wider than screen | n | [list] |

## Per-page mobile audit

### [Page URL]

**Viewport meta:** [present / correct / missing].
**Touch-target compliance:**
| Element | Size (px) | WCAG pass? | Notes |
|---------|-----------|-----------|-------|
| Primary CTA | 56×48 | ✅ | Healthy |
| Size selector | 32×40 | ❌ | Below 44 threshold |
| ... | ... | ... | ... |

**Sticky / fixed elements at 375px:**
- Cookie banner: covers [n%] viewport.
- Chat widget: covers [region]; conflicts with CTA at certain scroll positions.
- Sticky CTA: covers last paragraph + footer.
- Combined: [n%] viewport unobstructed.

**Forms (if present):**
- Email field: `type="email"` [yes / no].
- Phone: `type="tel"` [yes / no].
- Autocomplete attributes: [present / partial / missing].
- Sticky-keyboard auto-scroll: [yes / no].

**Modals / overlays:**
- [Modal name]: overflow at 375px [yes / no].
- ...

**Hover-only patterns:**
- [Element]: hover-only; tap fallback [present / missing].

**Session-replay mobile patterns:**
- Rage clicks: [where, frequency].
- Dead clicks: [where].
- Bounces from element: [if any].

**Remediations:**
| # | Issue | Severity | Effort | Estimated lift |
|---|-------|----------|--------|----------------|
| 1 | Resize size-selector to 48×48 | P0 | 2 hrs | 3-6% mobile CR |
| 2 | Move sticky CTA off content | P0 | 4 hrs | 1-3% |
| ... | ... | ... | ... | ... |

[Repeat per priority page]

## Cross-page patterns
| Pattern | Pages affected | Root cause | Fix |
|---------|----------------|------------|-----|
| Touch targets <44px | 8 templates | Default button size in design system | Update design tokens |
| Hover-only tooltips | All | Component default; no tap variant | Replace with tap-friendly tooltip component |
| Missing input types in forms | 4 templates | Forms ship without explicit type / autocomplete | Update form-field component |

## Prioritised fix list (one-page version)
| # | Page / Pattern | Issue | Severity | Effort | Lift |
|---|----------------|-------|----------|--------|------|
| 1 | All PDPs | Size-selector touch target 32×40 | P0 | 1 day (template) | 3-6% |
| 2 | Pillar | Sticky CTA covers content at 375px | P0 | 4 hrs | 1-3% |
| 3 | All forms | Missing `type="email"`/`tel`/autocomplete | P0 | 1 day | 1-2% |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All P0 remediations shipped.
- [ ] GSC mobile-usability errors resolved.
- [ ] Touch-target audit re-passes (≥44×44 across primary controls).
- [ ] Sticky-element overflow tested at 375px and resolved.
- [ ] Form fields have correct types + autocomplete.
- [ ] Mobile conversion rate measured 30+ days post-deployment.
- [ ] Re-audit scheduled in 90 days.

## Risks and watchouts
3-5 specific risks. E.g. "Resizing touch targets may shift layout — coordinate with design tokens"; "Sticky-CTA repositioning may reduce visibility; A/B test if there's risk"; "Form-field changes may break legacy auto-fill; QA payment + checkout flows post-deploy"; "Hover-fallback patterns require interaction-design decision (tap-to-toggle vs always-visible)"; "Real-device testing requires BrowserStack subscription or physical devices."

## Open questions
- [ ] Confirm real-device access (iPhone SE / mid-tier Android).
- [ ] Confirm session-replay tooling.
- [ ] Confirm mobile-vs-desktop conversion-rate baseline.
- [ ] Confirm design-system ownership for template-level fixes.
```

Save the produced file to `businesses/<slug>/ux/mobile-ux-audit-[YYYY-MM-DD].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Real-device test or DevTools-with-mid-tier-mobile-emulation; not desktop-only.
- 375px viewport explicitly tested (smallest modern phones).
- Touch-target audit covers primary controls with measured sizes.
- Sticky-element overflow tested with combined cookie + chat + CTA scenario.
- Form audit covers input types + autocomplete + sticky-keyboard.
- Modal overflow tested at 375px.
- GSC mobile-usability cross-referenced.
- Session-replay mobile patterns surfaced.
- Cross-page patterns identified for template-level fixes.

## Common mistakes to avoid

- Don't test only on emulator. Real device for at least one phone.
- Don't ignore 375px. Smaller modern phones (iPhone SE) live at this width.
- Don't audit touch targets only on primary CTA. Secondary controls (selectors, accordions) often violate.
- Don't skip the cookie + chat + CTA combo test. Real users hit all three.
- Don't propose individual-page fixes for template-level issues. Identify pattern; fix once.
- Don't omit hover-fallback audit. Hover-only desktop patterns silently break mobile.
- Don't skip session replay. Mobile rage clicks are diagnostic.
- Don't audit and walk away. Mobile regressions ship; quarterly cadence.

## Example

**Input (abbreviated):** Field & Sun. Mobile CR 1.4% vs desktop 2.7%. Priority pages: pillar, quiz, top 3 PDPs, checkout. Microsoft Clarity available.

**Output (abbreviated):**

GSC mobile-usability: 12 URLs flagged ("Clickable elements too close together").

Pillar findings: sticky CTA covers content at 375px; FAQ accordion 36×40 px; chat widget conflicts with sticky CTA.

PDPs: size-selector 32×40 px (rage-click pattern correlates); chat-widget overlay covers Add-to-cart on iPhone SE.

Quiz: question buttons 38×38 px; "Skip" modal overflows.

Checkout: missing `type="email"`/`tel`; autocomplete absent; no sticky-keyboard auto-scroll-to-input.

Cross-page patterns: touch targets <44px on 8 templates; hover-only tooltips on all templates; missing input types on 4 form templates.

Prioritised fix list: 8 P0 items + 5 P1 items; total effort ~7 days dev + design-token update; estimated mobile conversion lift 30-50% if all P0 ship (1.4% → 2.0-2.1%).

Saved to `businesses/field-and-sun/ux/mobile-ux-audit-2026-05-01.md`.
