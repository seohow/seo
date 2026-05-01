# UX Design

> Page-shape decisions for SEO-driven traffic. Above-the-fold structure, hero / nav / IA, content hierarchy, CTA placement, cross-page navigation. The design layer that turns a ranking page into a converting page.

## What it is

UX design in this category is the discipline of structuring the templates organic-search visitors land on so they convert. The work spans above-the-fold composition (what visitors see in the first 1-2 seconds), information architecture (how content nests + navigates), CTA placement strategy (when / where / what), cross-page flow (how visitors move from landing page to PDP to checkout), and component-level UX (forms, navigation, search, filters). Distinct from visual design (which is mostly about brand expression), UX design is about the visitor's path from arrival to action.

For Field & Sun, UX design decisions on the mineral-sunscreen pillar, the skin-type quiz, and the priority PDPs determine whether the brand's SEO investment pays off. A pillar that ranks position 6 but sends users off the page without exploring product / cluster content converts at half the rate it should. UX design is the work that closes that gap.

## Why it matters

Three reasons. First, **above-the-fold composition determines whether visitors stay**. The first 1-2 seconds of a visit produce the bounce-or-engage decision. Above-fold design — hero clarity, headline-promise alignment, primary CTA visibility — determines that decision more than any other factor.

Second, **CTA placement affects conversion as much as CTA copy**. A "Shop the SPF" button placed below the fold, hidden in a secondary nav, or styled as a tertiary link converts at a fraction of the rate of the same button placed prominently above the fold. Placement is the bigger lever than copy.

Third, **cross-page flow is where SEO traffic compounds or dies**. A pillar that doesn't have clear cluster-spoke linking sends visitors away. A PDP without related-product / collection / blog links leaves cluster-discovery on the table. Design-side cross-page strategy is part of the cluster pattern's UX manifestation.

For Field & Sun: a UX-design review of the pillar + quiz + top PDPs is plausibly the highest-impact UX work the brand can do at the design layer (vs. the technical-fix layer covered by mobile / page-speed audits).

## Core concepts

- **Above-the-fold composition.** Hero (image + headline + sub-headline), primary CTA, social-proof signal, navigation. Should match the visitor's intent within 1-2 seconds.
- **Headline-promise alignment.** The H1 + above-fold messaging should match the searcher's query intent. Mismatch = bounce.
- **CTA hierarchy.** Primary (most-wanted action), secondary (alternative path), tertiary (low-priority navigation). Each style + placement signals priority.
- **Information architecture (IA).** Nav structure; section flow; cluster-spoke linking. Visitors should never wonder "where am I in the site."
- **Cluster-aware design.** Pillar pages link prominently to spokes; spokes link back to pillar + sibling spokes. Design surfaces the structure (e.g. "spokes in this cluster" sidebar).
- **Search intent matching.** Informational pages serve information first; commercial pages compare options; transactional pages reduce friction. Designing wrong intent into a template = ranking-but-not-converting.
- **F-pattern + Z-pattern.** How users scan pages. Important content goes where the eye lands.
- **Trust signals above the fold.** For D2C: dermatologist-reviewed badge, ingredient transparency note, review-rating snippet. Below-fold isn't trusted yet.
- **Form UX.** Fewer fields = higher conversion (per field 5-10% drop-off typical). Multi-step better than long single-page for >5 fields.
- **Component-level patterns.** Filter / sort UI, search UX, image gallery, accordion, modal — each has design-language patterns worth respecting.
- **Page-shape vs visual-design.** UX design is about structure; visual design is about brand expression. Both matter; this leaf focuses on structure.

## A worked example

> **Scenario:** Field & Sun's mineral-sunscreen pillar ranks position 9. Traffic is 4,200 visits/mo from organic. Pillar → PDP click-through is 5.1% (vs 8.2% on the brand's other long-form content). Conversion to purchase is below expectation. Founder suspects design issues; team wants a structured UX-design review.
>
> **Step 1.** Run `review-ux-design-for-seo`. Skill audits above-fold, headline-promise, CTA hierarchy, IA, cluster-spoke linking, trust signals, intent match.
>
> **Step 2.** Findings:
>
> - **Above-the-fold:** hero is a stock-style imagery shot (not Field & Sun's three-skin-tone test). Headline is "Mineral Sunscreen 101" (generic). Primary CTA is a vague "Learn more" with no clear destination. Social-proof badge missing.
> - **Headline-promise alignment:** SERP query is "mineral sunscreen guide" (informational); page delivers it but H1 doesn't echo the search intent.
> - **CTA hierarchy:** primary CTA placement weak (above fold but small); 4 secondary CTAs of equal weight create choice paralysis; "Shop the SPF" tertiary CTA buried in section 8.
> - **IA:** no cluster-spoke navigation visible. Pillar links to spokes only inline in body content; no sidebar / nav-aside / table-of-contents linking to spokes.
> - **Trust signals:** dermatologist-reviewed badge not visible; review-rating snippet not present; "20% non-nano zinc oxide" badge buried.
> - **Intent match:** pillar serves informational intent (correct) but undersells the commercial bridge (PDP linking).
> - **Funnel friction:** "Shop SPF" tertiary placement at section 8 is where most visitors never reach (only 35% scroll past section 5).
>
> **Step 3.** Remediation list:
>
> - Replace hero with three-skin-tone test imagery; surface "Dermatologist-reviewed" badge top-right.
> - Rewrite H1 to "The Complete Guide to Mineral Sunscreen" + sub-headline echoing search intent.
> - Reduce CTA hierarchy to 1 primary ("Find your SPF" → quiz/PDP) + 1 secondary ("Shop our SPF" → collection). Remove tertiary clutter above-fold.
> - Add table-of-contents sidebar (sticky on desktop) linking to all 8 spokes.
> - Surface "20% non-nano zinc oxide" + dermatologist-reviewed badges in trust-signal row above fold.
> - Move "Shop SPF" CTA to also appear at section 3 (where 78% of visitors reach).
>
> **Step 4.** Result: 60 days post-fix, pillar → PDP CTR climbs from 5.1% to 9.4%; sun-care cluster organic-conversion-rate up 32%. The design changes paid for the work in the first 6 weeks.

## How to do it

1. **Identify priority templates.** Pillar pages, tools, top PDPs, top blog posts. 5-10 templates typical.
2. **Match templates to search intent.** What's the dominant intent for the queries each template ranks for? Informational / commercial / transactional / navigational.
3. **Run `review-ux-design-for-seo`** on priority templates. Skill produces the structured review.
4. **Above-fold audit per template.** Hero, headline, CTA, trust signals, navigation.
5. **CTA-hierarchy audit.** Primary / secondary / tertiary placement; visual weight; choice paralysis.
6. **IA + cluster-linking audit.** How visitors discover sibling content; how cluster structure manifests visually.
7. **Trust-signal audit.** Where credibility surfaces appear; whether they're above-fold; whether they're prominent enough.
8. **Form / interaction component audit.** Forms, filters, search — UX patterns.
9. **Cross-page-flow audit.** Where each template sends visitors next; whether the flow matches conversion goals.
10. **Prioritise remediations.** High-traffic templates first; above-fold issues first within each.
11. **Coordinate with brand voice.** Design changes that violate brand voice need brand-team review.
12. **Measure post-deployment.** Conversion-rate change; flow-through to PDP; bounces.

## Common pitfalls

- **Visual design without UX design.** Pretty pages that don't convert. UX design is the structural work that visual design dresses up.
- **Above-fold packed with everything.** Trying to show hero + 3 CTAs + 2 trust signals + nav + cookie banner all simultaneously creates noise. Hierarchy.
- **Multiple equal-priority CTAs.** Choice paralysis; conversion drops vs. single primary CTA.
- **Hero misaligned with search intent.** "Welcome to Field & Sun" hero on a page ranking for "mineral sunscreen guide" — visitor expected guide content; hero says brand-marketing. Bounce.
- **Trust signals below-fold.** First 1-2 seconds is where trust matters; below-fold trust signals don't influence stay-or-bounce.
- **No cluster-spoke navigation visible.** Pillars without table-of-contents / cluster nav undersell the cluster pattern.
- **Form with too many fields.** Each non-essential field costs 5-10% conversion. Audit ruthlessly.
- **Below-the-fold-only CTAs.** "Shop SPF" only appearing at section 8 misses 65%+ of visitors.
- **Ignoring search intent.** Designing the same template shape for informational + commercial + transactional queries fails most of them.
- **No A/B testing for ambiguous changes.** When in doubt, test (per `plan-ab-test`).
- **Designing without measuring post-deployment.** Without before/after measurement, "improvement" is anecdote.

## Skills in this toolkit

- **[review-ux-design-for-seo](skills/review-ux-design-for-seo/SKILL.md)** — produces a UX-design review of priority templates covering above-fold composition, headline-promise alignment, CTA hierarchy, IA + cluster-spoke linking, trust signals, intent match, form / interaction components, cross-page-flow design, and a prioritised remediation list with conversion-impact estimates. Output is the design-side fix list — distinct from page-speed (Technical-felt) and mobile (device-felt) audits in focusing on structural design choices.

## Related topics

- **[01. Page Speed UX](../01.%20Page%20Speed%20UX/README.md)** — perceived speed is a design choice (skeleton loaders, font strategy).
- **[02. Mobile Optimization](../02.%20Mobile%20Optimization/README.md)** — mobile-first design discipline overlaps.
- **[05. Conversion Funnels](../05.%20Conversion%20Funnels/README.md)** — funnel optimisation is the operational counterpart to design review.
- **[04. A/B Testing](../04.%20AB%20Testing/README.md)** — test ambiguous design changes.
- **[04. Content SEO / 02. Pillar Pages](../../04.%20Content%20SEO/02.%20Pillar%20Pages/README.md)** — pillar UX-design overlaps with pillar architectural design.
- **[02. On-page SEO / 03. Header Structure](../../02.%20On-page%20SEO/03.%20Header%20Structure/README.md)** — header structure (H1-H6) is part of UX design.

## Further reading

- [Nielsen Norman Group — Web UX Research Library](https://www.nngroup.com/) — practitioner gold standard.
- [Luke Wroblewski — Web Form Design + Mobile-First](https://www.lukew.com/) — foundational on form UX.
- [Edward Tufte — Information Design](https://www.edwardtufte.com/) — strong on hierarchy + scannability.
- [Vitaly Friedman / Smashing — UX Patterns](https://www.smashingmagazine.com/) — comprehensive practitioner reference.
- [Baymard Institute — E-commerce UX Research](https://baymard.com/research) — research-backed e-commerce UX patterns.
