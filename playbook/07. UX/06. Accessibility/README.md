# Accessibility

> WCAG-compliant UX. Screen-reader-friendly markup, keyboard navigation, semantic HTML, sufficient contrast. Increasingly legal-required (ADA, EU Accessibility Act); increasingly SEO-overlapping; always good UX. ~15-20% of users have accessibility needs.

## What it is

Web accessibility is the discipline of making web content usable for people with disabilities — visual (low vision, blindness, colour-blindness), motor (limited dexterity, switch-only access), cognitive (dyslexia, attention differences), and auditory (deafness, hearing loss). The standard reference is WCAG (Web Content Accessibility Guidelines), with WCAG 2.1 AA as the operational target for most jurisdictions and WCAG 2.2 AA increasingly required.

Accessibility overlaps with SEO meaningfully (semantic HTML, alt text, heading structure, keyboard navigation, focus management), but it's a distinct discipline with distinct compliance requirements. For Field & Sun, accessibility is both a legal requirement (ADA-compliance for US sales; EU Accessibility Act 2025 for EU) and a UX-quality signal — accessible sites convert better even for non-disabled users (better keyboard nav helps power users; better contrast helps everyone in bright sunlight; semantic HTML helps screen-reader and assistive-tech experiences).

## Why it matters

Three reasons. First, **accessibility is increasingly legally required**. ADA Title III in the US (lawsuits ~4,000+/year against websites), EU Accessibility Act 2025 (mandatory for ecom websites of EU-trading brands), AODA in Canada. Brands without compliance discipline face legal + reputational risk.

Second, **accessibility is good UX for everyone**. Sufficient contrast helps users in sunlight; keyboard navigation helps power users; semantic HTML helps screen readers + voice assistants + AI agents. Accessible sites measurably out-convert inaccessible ones.

Third, **accessibility increasingly overlaps with SEO**. Semantic HTML (proper headings, landmarks, lists) helps Google parse content. Alt text helps image SEO. Keyboard / focus management aligns with mobile-touch patterns. AI agents (which interact with sites programmatically) depend on accessibility-compliant markup.

For Field & Sun: a quarterly accessibility audit on priority templates is plausibly the lowest-cost / highest-coverage UX work — fixes most of the legal exposure + improves UX broadly + supports SEO indirectly.

## Core concepts

- **WCAG 2.1 AA.** Most-common operational target. ~50 success criteria across four principles: Perceivable, Operable, Understandable, Robust (POUR).
- **WCAG 2.2 AA.** 2023 update; adds 9 new criteria. Increasingly the target for new builds.
- **AAA level.** Stricter; most teams target AA, not AAA.
- **Automated tools.** Axe, WAVE, Lighthouse Accessibility, Pa11y. Catch ~30-50% of accessibility issues; not sufficient alone.
- **Manual testing.** Keyboard navigation (Tab, Shift+Tab, Enter, Escape), screen-reader testing (VoiceOver / NVDA / JAWS), zoom-to-200% test, contrast spot-checks.
- **Common WCAG failures.** Insufficient colour contrast (1.4.3); missing alt text (1.1.1); missing form labels (3.3.2); keyboard traps (2.1.1, 2.1.2); missing focus indicators (2.4.7); insufficient touch-target size (2.5.5 — 24×24 minimum AA, 44×44 AAA / mobile).
- **Semantic HTML.** Proper element use: `<button>` for buttons (not `<div onclick>`), `<nav>` for nav, `<main>`, `<article>`, `<aside>`, `<header>`, `<footer>`. Heading structure (single H1, no skipped levels).
- **ARIA.** Accessible Rich Internet Applications. Used sparingly + correctly; over-used / misused ARIA is worse than no ARIA.
- **Focus management.** Visible focus indicator on every interactive element; logical tab order; focus moves correctly on modal-open / route change.
- **Form accessibility.** Every input has a label; error messages announced; required fields indicated.
- **Image alt text.** Descriptive for content images; empty `alt=""` for decorative; complex images may need long descriptions.
- **Video / audio accessibility.** Captions, transcripts, audio descriptions where applicable.
- **Legal exposure.** ADA compliance is operational; EU Accessibility Act applies from June 2025; lawsuits are real and frequent.

## A worked example

> **Scenario:** Field & Sun has not done an accessibility audit. The brand sells in the US and EU; the EU Accessibility Act applies as of June 2025. The team wants to baseline + remediate.
>
> **Step 1.** Run `audit-accessibility`. Skill audits priority templates against WCAG 2.1 AA — automated tools + manual testing.
>
> **Step 2.** Findings:
>
> - **Mineral-sunscreen pillar:**
>   - Hero text contrast 3.8:1 (fail; minimum 4.5:1 for normal text).
>   - Three FAQ accordion buttons have no visible focus indicator.
>   - "Shop SPF" button is a `<div onclick>` (not keyboard-accessible).
> - **Top PDPs:**
>   - Image gallery: missing alt text on swatch images.
>   - Size selector: not keyboard-navigable (mouse-only).
>   - Add-to-cart button has 240ms tap-response delay (some screen readers fail to announce).
> - **Quiz:**
>   - Question buttons lack labels for screen readers.
>   - "Skip question" modal: focus doesn't move into modal on open; keyboard trap on close.
> - **Checkout:**
>   - Email field missing `<label>` (placeholder-only — fail).
>   - Error messages not associated with fields (`aria-describedby` missing).
>   - Required fields not marked with `aria-required`.
> - **Site-wide:**
>   - Skip-to-content link missing.
>   - Focus indicator removed via `outline: none` without alternative.
> - **Automated tool results:** Axe identifies 47 violations; WAVE finds 12 contrast issues + 8 form-label issues; Lighthouse scores 68/100.
> - **Estimated WCAG 2.1 AA conformance:** 65-70% (typical for un-audited mid-size brand).
>
> **Step 3.** Remediation plan:
>
> - Fix contrast issues (typically design-token update + a few one-off fixes).
> - Replace `<div onclick>` patterns with `<button>`; restore focus indicators.
> - Add alt text to image gallery; sweep across PDPs.
> - Make size selector keyboard-navigable.
> - Add labels to forms; associate error messages.
> - Add skip-to-content link.
> - Quiz: focus management + ARIA labels for question buttons.
> - Cap legal exposure: target WCAG 2.1 AA conformance ~95% within 90 days.
>
> **Step 4.** Result: 90 days post-fix, conformance ~92%; Lighthouse Accessibility score 94/100; legal exposure dramatically reduced; mobile + keyboard UX improved as side effect (touch-target compliance, focus indicators help all users).

## How to do it

1. **Establish target.** WCAG 2.1 AA for most brands; 2.2 AA for new builds.
2. **Identify priority templates.** Homepage, pillar, PDP, checkout, quiz, blog post, search results.
3. **Run automated tools.** Axe DevTools (browser extension), WAVE, Lighthouse Accessibility, Pa11y CLI for CI integration. ~30-50% of issues caught.
4. **Run manual tests.**
   - Keyboard navigation: Tab through entire page; can every interactive element be reached + activated? No keyboard traps?
   - Screen reader: VoiceOver (Mac/iOS), NVDA (Windows), JAWS. Test priority flows.
   - Zoom to 200%: layout breaks?
   - Contrast spot-check: priority text + UI elements.
5. **Run `audit-accessibility`.** Skill compiles the audit findings + prioritised remediation list.
6. **Prioritise remediations.** Critical (blocks core user flows) → high (degrades UX significantly) → medium (compliance gaps) → low (best-practice).
7. **Coordinate with design + engineering.** Some fixes are design-token updates (contrast); some are component-level (keyboard accessibility); some are template-level (skip-link, semantic structure).
8. **Re-test post-fix.** Automated + manual.
9. **Quarterly cadence.** Regressions ship with new components; quarterly audit catches drift.
10. **Track legal exposure separately.** Document for compliance / insurance.

## Common pitfalls

- **Relying only on automated tools.** Catch ~30-50% of issues; manual testing essential.
- **Treating accessibility as an end-of-project add-on.** Costs 5-10x more to retrofit than to design accessibility-first.
- **Overusing ARIA.** Misused ARIA is worse than none. Native semantic HTML first; ARIA only when needed.
- **Removing focus indicators.** `outline: none` without alternative breaks keyboard navigation.
- **Placeholder-as-label.** Placeholder disappears on input; users with cognitive / vision needs lose context.
- **Mouse-only interactions.** Drag-and-drop, hover-only menus, click-to-reveal — all need keyboard equivalents.
- **Inaccessible custom components.** Custom dropdowns / modals / carousels often miss screen-reader / keyboard support; use libraries (Radix, ARIA Authoring Practices) that handle it correctly.
- **Skipping screen-reader testing.** Visual checks miss most accessibility issues; screen-reader testing surfaces them.
- **No skip-to-content link.** Forces keyboard users to tab through nav on every page.
- **Forms without labels.** Most-common WCAG violation; trivial to fix; routinely missed.
- **Ignoring legal exposure.** ADA / EU Accessibility Act lawsuits are real and frequent.

## Skills in this toolkit

- **[audit-accessibility](skills/audit-accessibility/SKILL.md)** — produces a WCAG 2.1 AA accessibility audit covering priority templates. Combines automated tool runs (Axe, WAVE, Lighthouse) with manual testing (keyboard navigation, screen-reader, zoom-to-200%, contrast spot-checks). Output is a prioritised remediation list with severity (critical / high / medium / low), WCAG criterion mapping per issue, fix recommendations, and legal-exposure assessment. Quarterly cadence.

## Related topics

- **[02. Mobile Optimization](../02.%20Mobile%20Optimization/README.md)** — touch-target sizing overlaps with WCAG 2.5.5.
- **[03. UX Design](../03.%20UX%20Design/README.md)** — accessibility constraints inform UX design choices.
- **[02. On-page SEO / 06. Image Optimization](../../02.%20On-page%20SEO/06.%20Image%20Optimization/README.md)** — alt text overlaps SEO + accessibility.
- **[02. On-page SEO / 03. Header Structure](../../02.%20On-page%20SEO/03.%20Header%20Structure/README.md)** — heading structure overlaps semantic HTML.
- **[03. Technical SEO / 02. Indexing](../../03.%20Technical%20SEO/02.%20Indexing/README.md)** — semantic HTML helps both indexing + accessibility.
- **[09. AI SEO](../../09.%20AI%20SEO/)** *(planned)* — AI agents depend on accessibility-compliant markup to interact with pages.

## Further reading

- [WCAG 2.1 (W3C)](https://www.w3.org/WAI/WCAG21/Understanding/) — canonical specification.
- [WebAIM — Practitioner Reference](https://webaim.org/) — practical accessibility guidance + WAVE tool.
- [Deque — Axe Tool + Knowledge Base](https://www.deque.com/axe/) — automated tooling + extensive education resources.
- [GOV.UK Service Manual — Accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service) — best-practice operational reference.
- [ADA / EU Accessibility Act — Official Resources](https://www.ada.gov/) — legal-exposure reference.
