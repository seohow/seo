---
name: review-ux-design-for-seo
description: Produces a UX-design review of priority templates that organic visitors land on. Covers above-fold composition (hero, headline, primary CTA, trust signals, navigation), headline-promise alignment to search intent, CTA hierarchy (primary / secondary / tertiary placement and visual weight), information architecture + cluster-spoke linking visibility (table-of-contents, sidebar, cross-references), trust-signal placement (above-fold credibility surfaces), search-intent matching (informational / commercial / transactional), form / interaction component UX, cross-page-flow design (where each template sends visitors next), and a prioritised remediation list with conversion-impact estimates. Output is the design-side fix list — distinct from page-speed (Technical-felt) and mobile (device-felt) audits in focusing on structural design choices that determine whether ranking traffic converts. Use whenever the user asks to "review UX design," "audit our pillar / PDP / template UX," "why does our pillar not convert," "design review for SEO traffic," "above-fold review," "CTA placement audit," or has CWV-passing pages with low conversion that aren't device / speed issues. Also use as a quarterly cadence skill — design drift happens; quarterly review catches it. Do not use for page speed (use `audit-page-speed-ux`), mobile-specific UX (use `audit-mobile-ux`), accessibility (use `audit-accessibility`), or A/B test design (use `plan-ab-test`).
---

# Review UX Design for SEO

This skill produces a structured UX-design review of priority templates. Output covers above-fold, CTA, IA, trust signals, intent match, components, cross-page flow.

The skill is opinionated about a few things: above-the-fold determines stay-or-bounce; one primary CTA beats three equal CTAs; trust signals must be above-fold or they don't influence the stay decision; cluster-spoke linking should be visible (sidebar, TOC, cross-references), not just inline; intent match is non-negotiable.

## When to use this skill

- The user has CWV-passing, mobile-OK pages with conversion below expectation.
- The user is shipping new templates and wants a design baseline.
- The user is investigating why pillar / PDP / quiz isn't converting.
- The user is running a quarterly UX review.

## When NOT to use this skill

- The user wants page speed only — use `audit-page-speed-ux`.
- The user wants mobile-specific UX — use `audit-mobile-ux`.
- The user wants WCAG accessibility — use `audit-accessibility`.
- The user wants A/B testing — use `plan-ab-test`.
- The user wants funnel-stage diagnosis — use `analyse-conversion-funnel`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), brand voice (8).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster context informs cluster-spoke linking review.
3. **Priority templates** — required. 5-10 templates: pillars, tools, top PDPs, top blog posts.
4. **Search intent per template** — required. What queries does each template rank for; what intent dominates.
5. **Conversion data per template** — strongly preferred. CTR pillar→PDP, CR per template, time-on-page, bounce rate.
6. **Session-replay tooling** — strongly preferred. Hotjar, Microsoft Clarity, FullStory.
7. **Brand voice constraints** — read from business profile section 8.

If priority templates + search-intent mapping are missing, ask. The review is anchored to specific templates with specific intent.

## Process

1. **Per template: intent match.**
   - What query intent dominates? (Informational / commercial / transactional.)
   - Does the template shape match? (Informational pages serve information; commercial compares; transactional reduces friction.)
   - Flag mismatches.
2. **Above-fold audit.**
   - Hero image: brand-distinctive or generic? Aligned to search intent?
   - H1: matches search query? Sub-headline echoes intent?
   - Primary CTA: visible? Single-primary or competing-priorities?
   - Trust signals: visible above fold? (Dermatologist-reviewed, ratings, ingredient transparency, expert-byline.)
   - Navigation: clear; not dominating viewport.
3. **CTA-hierarchy audit.**
   - Primary CTA: identified, prominent, single (not competing).
   - Secondary CTAs: appropriate weight (visually subordinate).
   - Tertiary actions: low-priority, not stealing attention.
   - Above-fold CTA placement: visible to ~95% of visitors.
   - Repeat-CTA placement: appears at scroll points where users still engaged (typically section 2-3).
4. **IA + cluster-spoke linking audit.**
   - Table-of-contents present (sticky on desktop pillars)?
   - Sidebar / nav-aside linking to cluster spokes?
   - In-body links to spokes contextual + visible?
   - Pillar links visible from each spoke?
   - Cross-cluster bridges where contextually relevant?
5. **Trust-signal placement audit.**
   - What signals exist? (Reviews, ratings, dermatologist review, expert byline, ingredient transparency, awards, press mentions.)
   - Where do they appear? (Above-fold + relevant body sections + footer.)
   - Are they prominent enough? (Visible, not buried.)
6. **Form / interaction component audit.**
   - Forms: field count appropriate for value-of-conversion; multi-step where >5 fields; clear progress indicator.
   - Filters / sort: discoverable; behaviour predictable.
   - Search: surfaced; relevant results.
   - Modals: opened with intent; closeable; not auto-popping.
7. **Cross-page-flow audit.**
   - Where does each template send visitors next?
   - Pillar → spokes + PDP + collection: visible paths.
   - PDP → related products + reviews + cluster blog: visible paths.
   - Tool → recommended products + cluster pillar: clear post-completion flow.
8. **Brand voice / messaging check.**
   - Does the template honour brand-voice constraints?
   - For Field & Sun: percentages over claims; avoid vague category language; no unsupported safety claims.
9. **Session-replay friction patterns.**
   - Look for: rage clicks, dead clicks, low scroll-depth, high above-fold bounce.
10. **Prioritise remediations.**
    - Above-fold issues > below-fold.
    - High-traffic templates > low.
    - Quick-win design changes > large structural redesigns.
11. **Estimate conversion impact.** Honest ranges per remediation.
12. **Write the review.**

## Output format

```markdown
# UX Design Review for SEO Traffic — [Business name]

**Review date:** [date]
**Templates reviewed:** [n]
**Reviewer:** [name / role]

## Executive summary
- Templates with intent-match issues: [n].
- Templates with weak above-fold: [n].
- Estimated conversion lift if all P0 ship: [%].
- Estimated total fix effort: [days].
- **Headline:** [1-2 sentences].

## Per-template review

### [Template name + URL]

**Search intent + query patterns:**
- Dominant intent: [informational / commercial / transactional].
- Top queries: [list].
- Intent match: [pass / borderline / mismatch].

**Above-the-fold audit:**
- Hero: [observation; aligned / generic; intent-aligned / not].
- H1: [observation].
- Primary CTA: [observation; prominent / hidden; single / competing].
- Trust signals above-fold: [list; or "missing"].
- Navigation: [observation].

**CTA hierarchy:**
- Primary: [identified; placement; visual weight].
- Secondary: [list; weight].
- Tertiary: [list].
- Repeat CTA placement: [where; reaches what % of visitors].
- Choice-paralysis flag: [yes / no].

**IA + cluster-spoke linking:**
- Table of contents: [present / missing; links to spokes].
- Sidebar / nav-aside: [present / missing].
- In-body spoke links: [count; contextual placement].
- Pillar back-link from spokes: [present / missing].
- Cross-cluster bridge: [present where relevant / missing].

**Trust signals:**
- Above-fold: [list].
- Body: [list].
- Footer: [list].
- Prominence assessment: [appropriate / under-used].

**Form / component audit:**
- [Form / component]: [observation; field count, multi-step, etc.]
- ...

**Cross-page-flow:**
- Outbound paths: [pillar → ? / PDP → ? / etc.]
- Conversion-path visibility: [strong / weak].

**Brand voice check:**
- [Pass / borderline / fail]; specific concerns: [list].

**Session-replay patterns:**
- [List of friction patterns observed].

**Remediations:**
| # | Issue | Severity | Effort | Estimated lift |
|---|-------|----------|--------|----------------|
| 1 | [description] | P0 | [hrs] | [%] |
| ... | ... | ... | ... | ... |

[Repeat per priority template]

## Cross-template patterns
| Pattern | Templates affected | Root cause | Fix |
|---------|--------------------|------------|-----|
| Multiple equal-weight CTAs above fold | 5 | Design-system component default | Update CTA component to enforce single-primary |
| Trust signals below fold | 4 | Template default | Add above-fold trust-row to template |
| ... | ... | ... | ... |

## Prioritised fix list (one-page version)
| # | Template / Pattern | Issue | Severity | Effort | Lift |
|---|--------------------|-------|----------|--------|------|
| 1 | Mineral-sunscreen pillar | Generic hero (not three-skin-tone) + weak H1 | P0 | 1 day | 5-10% pillar→PDP CTR |
| 2 | All pillars | No table-of-contents / cluster nav | P0 | 2 days (template) | 3-7% |
| 3 | Top PDPs | Multiple competing CTAs above fold | P0 | 1 day (component) | 2-5% |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All P0 design changes shipped.
- [ ] Above-fold composition matches intent on every priority template.
- [ ] Single primary CTA per template (no competing).
- [ ] Trust signals visible above-fold on all priority templates.
- [ ] Cluster-spoke linking visible on pillars (TOC / sidebar / cross-refs).
- [ ] Brand-voice review passed.
- [ ] Conversion measured 30+ days post-deployment.
- [ ] Re-review scheduled in 90 days.

## Risks and watchouts
3-5 specific risks. E.g. "Above-fold redesign affects mobile + desktop differently — coordinate with mobile-UX audit"; "CTA-hierarchy reduction may push competing teams to negotiate which CTA wins (sales vs. content vs. quiz)"; "Cluster-spoke nav requires CMS support (sidebar component); coordinate with engineering"; "A/B test ambiguous changes (e.g., hero variant) before mass deployment"; "Brand-voice review may surface tension between conversion-optimised copy and brand voice; align with brand team early."

## Open questions
- [ ] Confirm priority templates (vs. wider site).
- [ ] Confirm session-replay tooling.
- [ ] Confirm A/B test infrastructure for ambiguous changes.
- [ ] Confirm design-system ownership for component-level fixes.
- [ ] Confirm brand-team review path for voice-affecting changes.
```

Save the produced file to `businesses/<slug>/ux/ux-design-review-[YYYY-MM-DD].md`. Create the `ux/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Per-template review covers all 9 audit areas.
- Intent match flagged explicitly.
- Above-fold audit covers hero / H1 / CTA / trust / nav.
- CTA hierarchy assessed for choice-paralysis pattern.
- Cluster-spoke linking visible-design assessed (not just internal-link audit).
- Trust signals checked for above-fold prominence.
- Cross-template patterns identified for component-level fixes.
- Remediation list prioritised + effort + lift estimate.

## Common mistakes to avoid

- Don't audit visual design (brand colours, fonts) — that's a different review.
- Don't audit only above-fold. Below-fold structure matters for engagement + scroll-depth.
- Don't propose individual-template fixes for component-level issues.
- Don't ignore intent match. Most-overlooked source of low conversion.
- Don't skip session-replay. Friction patterns are diagnostic.
- Don't conflate UX design with page speed or mobile UX (covered in other leaves).
- Don't promise specific lifts without A/B testing for ambiguous changes.
- Don't audit and walk away. Quarterly cadence.

## Example

**Input (abbreviated):** Field & Sun. Priority templates: mineral-sunscreen pillar, skin-type quiz, top 3 PDPs. Pillar→PDP CTR 5.1% (vs 8.2% benchmark). Microsoft Clarity available.

**Output (abbreviated):**

Pillar findings: hero is stock-style (not three-skin-tone test); H1 generic ("Mineral Sunscreen 101"); 4 secondary CTAs of equal weight above-fold create paralysis; "Shop SPF" tertiary CTA at section 8 (only 35% reach); no cluster TOC / sidebar; trust signals (dermatologist-reviewed, 20% non-nano zinc oxide) buried.

Quiz findings: above-fold healthy; CTA hierarchy clean; "results page" weak CTA flow to PDP.

PDP findings: 3 competing CTAs above-fold (Add to cart, Subscribe, View reviews); trust signals (ingredient list, percentages) below fold.

Cross-template patterns: multiple equal-weight CTAs (5 templates); trust signals below fold (4 templates); cluster-spoke nav missing on all pillars.

Prioritised fixes: 7 P0 items; total effort ~5 days design + dev; estimated combined lift on pillar 8-15% pillar→PDP CTR.

Saved to `businesses/field-and-sun/ux/ux-design-review-2026-05-01.md`.
