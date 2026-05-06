---
name: audit-accessibility
description: Audits page accessibility for SEO impact: WCAG issues, alt text, heading structure, colour contrast, and keyboard navigation. Use to fix accessibility gaps that also harm rankings.
---

# Audit Accessibility

This skill produces a WCAG 2.1 AA accessibility audit. Output is a prioritised remediation list with WCAG-criterion mapping + legal-exposure assessment.

The skill is opinionated about a few things: automated tools catch ~30-50% (manual testing essential); native semantic HTML > ARIA (use ARIA only when needed); placeholder-only labels fail (use `<label>`); `outline: none` without alternative is critical fail; legal exposure is real (ADA / EU Accessibility Act).

## When to use this skill

- The user has not done an accessibility audit recently.
- The user has compliance pressure (ADA lawsuits, EU Accessibility Act, customer accessibility complaint).
- The user is shipping new templates and wants accessibility baseline.
- The user is running a quarterly UX review.

## When NOT to use this skill

- The user wants AAA-level conformance — outside this skill's scope.
- The user wants broader UX design review — use `review-ux-design-for-seo`.
- The user wants mobile-specific UX — use `audit-mobile-ux`.
- The user wants page speed — use `audit-page-speed-ux`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4).
2. **Priority templates** — required. Homepage, pillar, PDP, checkout, quiz / tool, blog, key landing pages.
3. **Geographic operations** — required. EU / UK presence triggers EU Accessibility Act review; US operations trigger ADA review.
4. **Conformance target** — typically WCAG 2.1 AA; confirm.
5. **Existing audit** — optional. If recent, build on it.
6. **Tooling access** — Axe DevTools, WAVE, Lighthouse, screen reader (VoiceOver / NVDA / JAWS).

If priority templates + geographic operations are missing, ask. Audit needs scope + legal-exposure context.

## Process

1. **Run automated tools.** Per priority template:
   - **Axe DevTools** browser extension (most comprehensive; best signal-to-noise).
   - **WAVE** browser extension (visual + summary).
   - **Lighthouse Accessibility** (built-in score).
   - **Pa11y** CLI (for CI / repeated checks).
   - Compile findings; deduplicate across tools.
2. **Manual keyboard test.** Per template:
   - Tab through entire page.
   - Confirm every interactive element reachable.
   - Confirm focus indicator visible on each.
   - Confirm logical tab order.
   - Confirm Enter / Space activates buttons; Escape closes modals.
   - No keyboard traps.
3. **Manual screen-reader test.** Per priority flow:
   - VoiceOver (Mac, iOS) is most accessible to test on; NVDA (Windows free) is the second.
   - Test priority flows (landing → product view → ATC → checkout → purchase; quiz completion).
   - Confirm: page-title announced, headings logical, form labels announced, button purposes clear, dynamic content updates announced.
4. **Zoom to 200%.** Browser zoom; confirm layout doesn't break (no horizontal scroll, no content cut off, no overlapping text).
5. **Contrast spot-check.** Use Chrome DevTools or WebAIM contrast checker. Audit:
   - Body text vs background (≥4.5:1 normal text, 3:1 large).
   - UI elements / borders (≥3:1).
   - Icon + button contrast.
6. **Per-issue WCAG criterion mapping.**
   - Each finding mapped to a specific WCAG 2.1 criterion (e.g. 1.4.3 Contrast Minimum, 2.1.1 Keyboard, 3.3.2 Labels or Instructions).
   - Documented per fix list.
7. **Severity ranking.**
   - **Critical:** blocks core user flows for users with disabilities (keyboard trap, no labels on critical forms, contrast on primary CTAs <3:1).
   - **High:** degrades UX significantly (missing focus indicators, missing alt text, non-semantic interactive elements).
   - **Medium:** compliance gaps that don't block users (sub-optimal heading structure, decorative-vs-content alt text inconsistency).
   - **Low:** best-practice improvements (extra ARIA, AAA criteria attempted at AA level).
8. **Conformance estimate.** % of WCAG 2.1 AA criteria the priority templates pass.
9. **Legal-exposure assessment.**
   - ADA (US): general lawsuit risk; ~4,000+/yr suits; conformance materially reduces.
   - EU Accessibility Act: mandatory for ecom selling in EU as of June 2025.
   - AODA (Canada): if Canadian operations.
   - Document exposure level + conformance gap.
10. **Prioritise remediations.**
    - Critical: ship within 2-4 weeks.
    - High: ship within 8-12 weeks.
    - Medium: next quarter.
    - Low: backlog.
11. **Coordinate with design + engineering.**
    - Design-token fixes: contrast, focus indicators (single change, broad impact).
    - Component-level fixes: form labels, keyboard accessibility, ARIA (component-team).
    - Template-level fixes: heading structure, skip-link, landmarks (template-team).
12. **Re-test plan.** Post-fix; both automated + manual; confirm conformance.
13. **Write the audit.**

## Output format

```markdown
# Accessibility Audit (WCAG 2.1 AA) — [Business name]

**Audit date:** [date]
**Templates audited:** [n]
**Auditor:** [name / role]
**Conformance target:** WCAG 2.1 AA
**Geographic exposure:** [US — ADA / EU — Accessibility Act / Canada — AODA / etc.]

## Executive summary
- **Estimated conformance:** [%] WCAG 2.1 AA.
- **Critical issues:** [n].
- **High-severity issues:** [n].
- **Legal-exposure level:** [high / medium / low; reasoning].
- **Estimated total fix effort:** [days].
- **Headline:** [1-2 sentences].

## Per-template audit

### [Template URL]

**Automated tool findings:**
- Axe: [n] violations — [summary].
- WAVE: [n] errors / [n] alerts — [summary].
- Lighthouse Accessibility score: [n]/100.

**Keyboard-test findings:**
- [Issue 1]: [description; WCAG criterion]; severity = critical / high / medium / low.
- ...

**Screen-reader test findings:**
- [Issue 1]: [description; WCAG criterion]; severity.
- ...

**Zoom-to-200% test:**
- [Issues if any].

**Contrast findings:**
- [Element]: [contrast ratio]; minimum = 4.5:1 / 3:1; WCAG 1.4.3 / 1.4.11.
- ...

**Remediations:**
| # | Issue | WCAG criterion | Severity | Fix | Effort |
|---|-------|----------------|----------|-----|--------|
| 1 | Hero text contrast 3.8:1 | 1.4.3 | High | Update text colour token | 2 hrs |
| 2 | "Shop SPF" `<div onclick>` | 2.1.1, 4.1.2 | Critical | Replace with `<button>` | 1 hr |
| 3 | FAQ accordion focus indicator missing | 2.4.7 | High | Restore focus outline | 30 min (template) |
| ... | ... | ... | ... | ... | ... |

[Repeat per priority template]

## Cross-template patterns

| Pattern | Templates affected | WCAG criterion | Root cause | Fix |
|---------|--------------------|----------------|------------|-----|
| `outline: none` without alternative | All | 2.4.7 | Global CSS reset | Update CSS to provide alternative focus style |
| Placeholder-only labels | 4 form templates | 3.3.2 | Form-component default | Update form-field component to render `<label>` |
| Mouse-only size selector | All PDPs | 2.1.1 | Custom component without keyboard handlers | Add keyboard event handlers to component |

## Conformance estimate
- Pass: [%].
- Fail: [%].
- Common gaps: [list of top 3-5 by frequency].

## Legal-exposure assessment

### ADA (US)
- Exposure level: [high / medium / low].
- Reasoning: [conformance gap, common-litigation patterns present].

### EU Accessibility Act (June 2025)
- Applicable: [yes / no — based on EU sales].
- Exposure level: [...]
- Reasoning: [...]

### Other jurisdictions (if relevant)
- AODA (Canada): [...]
- Country-specific: [...]

## Prioritised remediations (one-page version)
| # | Issue / Pattern | WCAG | Severity | Effort | Owner |
|---|-----------------|------|----------|--------|-------|
| 1 | All `<div onclick>` → `<button>` | 2.1.1 + 4.1.2 | Critical | 2 days (component) | Engineering |
| 2 | Hero text contrast site-wide | 1.4.3 | High | 4 hrs (design tokens) | Design |
| 3 | Form `<label>` everywhere | 3.3.2 | Critical | 2 days (form component) | Engineering |
| 4 | Focus indicators restored | 2.4.7 | High | 1 day (CSS) | Design + Eng |
| 5 | Skip-to-content link added | 2.4.1 | Medium | 2 hrs | Engineering |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All Critical remediations shipped within 2-4 weeks.
- [ ] All High remediations shipped within 8-12 weeks.
- [ ] Conformance re-tested; ≥90% pass on priority templates.
- [ ] Legal-exposure assessment shared with leadership.
- [ ] Re-audit scheduled in 90 days.

## Risks + watchouts
3-5 specific risks. E.g. "Contrast fixes may affect brand-colour application; coordinate with brand team"; "Replacing `<div onclick>` with `<button>` may shift CSS layout — QA visual regression"; "EU Accessibility Act deadline (June 2025) is firm; sequence Critical work to land before"; "Custom screen-reader testing requires accessibility-team capability or external contractor"; "Some accessibility fixes require design-token updates that touch every page; coordinate deployment timing."

## Open questions
- [ ] Confirm WCAG 2.1 AA target (vs 2.2 AA for new builds).
- [ ] Confirm legal-exposure ownership (in-house counsel / external).
- [ ] Confirm screen-reader testing capability (in-house vs contractor).
- [ ] Confirm design-system ownership for token-level fixes.
```

Save the produced file to `businesses/<slug>/ux/accessibility-audit-[YYYY-MM-DD].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Automated + manual testing both performed.
- Per-issue WCAG criterion mapping present.
- Severity (critical / high / medium / low) explicit.
- Cross-template patterns identified for component-level fixes.
- Conformance estimate quantified.
- Legal-exposure assessment with jurisdiction-specific framing.
- Remediation list prioritised + effort + owner.
- Re-audit scheduled.

## Common mistakes to avoid

- Don't rely on automated tools alone. ~30-50% coverage.
- Don't ignore manual screen-reader test. Surfaces issues no tool catches.
- Don't conflate ADA with WCAG. ADA references WCAG but isn't WCAG itself; document clearly.
- Don't recommend ARIA-everywhere. Native HTML first.
- Don't propose AAA-level fixes when target is AA.
- Don't skip legal-exposure framing. Compliance pressure is real and operational.
- Don't audit and walk away. Quarterly cadence.
- Don't propose fixes without component-level coordination. Token / component fixes have broad impact; coordinate.

## Example

**Input (abbreviated):** Field & Sun. WCAG 2.1 AA target. US + EU operations (EU Accessibility Act applicable June 2025). Priority templates: homepage, pillar, top 3 PDPs, quiz, checkout, blog. No prior audit.

**Output (abbreviated):**

Estimated conformance: 65-70% (typical for un-audited brand).

Critical issues: 8 — `<div onclick>` patterns (replaceable with `<button>`); placeholder-only form labels in checkout; keyboard trap in quiz "Skip" modal; size-selector mouse-only on PDPs.

High issues: 14 — hero contrast 3.8:1 (across multiple pages); focus indicators removed via global `outline: none`; image-gallery alt text missing; FAQ accordion focus indicator missing; skip-to-content link missing.

Medium / low: ~25 issues across templates.

Cross-template patterns: 3 dominant — `outline: none` site-wide; placeholder-only labels in 4 form templates; mouse-only custom components on PDPs.

Conformance estimate: ~67% pass.

Legal exposure: high (US ADA pre-existing exposure; EU Accessibility Act applicable June 2025 — 30 days from audit date).

Prioritised remediations: 8 Critical + 14 High; total effort ~12-15 days dev + design-token coordination; ship Critical in 2-4 weeks (before EU deadline); High in 8-12 weeks.

Re-audit scheduled: 2026-08-01.

Saved to `businesses/field-and-sun/ux/accessibility-audit-2026-05-01.md`.
