---
name: decide-multi-language-architecture
description: Produces the architectural decision document for multi-market SEO covering subdirectory vs subdomain vs ccTLD trade-off analysis (SEO equity inheritance, operational cost, geo-signal strength, brand integrity, market-specific norms, CMS compatibility), per-market recommendation with reasoning, migration-cost forecast if change is implied (currently single-market site moving to multi-market), staging plan (most brands should start subdirectory and migrate selectively to ccTLD when brand presence becomes the bottleneck), and required dependencies (Hreflang, per-market hosting, per-market analytics, per-market off-page strategy). Output is the decision artefact stored in the per-business CLAUDE.md decisions log. Use whenever the user asks to "decide multi-language architecture," "subdomain vs subdirectory," "should we use ccTLDs," "international architecture for [market]," "we're expanding to [new markets]," or is about to launch in new markets and needs the architecture decision before any URL choices are baked in. Also use when re-evaluating an existing architecture (every 18-24 months as the brand grows). Do not use to audit Hreflang implementation (use `audit-hreflang`), broader geo-targeting (use `plan-geo-targeting`), or content localisation (use `plan-localisation`).
---

# Decide Multi-Language Architecture

This skill produces the architectural decision document. Output is the trade-off analysis + recommendation per market.

The skill is opinionated about a few things: most brands should start with subdirectories (fastest, cheapest, captures parent authority); ccTLDs are valuable but expensive and should be staged in selectively; subdomain is the middle ground rarely chosen for the right reasons; CMS limits are real and should be verified upfront; the decision is hard to reverse, so deliberation matters.

## When to use this skill

- The user is planning multi-market expansion and needs architecture before launch.
- The user has multi-market operations on suboptimal architecture and is considering migration.
- The user is briefing leadership / engineering on the architecture decision.

## When NOT to use this skill

- The user wants to audit Hreflang — use `audit-hreflang`.
- The user wants broader geo-targeting strategy — use `plan-geo-targeting`.
- The user wants content localisation — use `plan-localisation`.
- The user wants to migrate platforms — use `plan-site-migration` (Technical SEO).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), goals (7).
2. **Markets in scope** — required. Current markets + planned new markets.
3. **Current architecture** — required if existing. Single-domain or already multi-domain.
4. **CMS / platform** — required. Shopify, WordPress, custom — each has different multi-market support.
5. **Operational capacity** — strongly preferred. Engineering / ops headcount; budget for separate domains / hosting / SSL / compliance.
6. **Domain rating** — preferred. Strong parent-domain authority favours subdirectory; weak / new brands less so.
7. **Per-market priority** — required. Which markets are critical (revenue / strategic) vs experimental.

If markets + CMS are missing, ask. The decision is anchored to specific markets + technical capability.

## Process

1. **Map current state.**
   - Domain(s) currently in use.
   - Markets currently served + how (single domain, multi-language pages, etc.).
   - Current SEO equity (Domain Rating, traffic, ranking history).
2. **Map planned state.**
   - Markets being added.
   - Priority per market (P0 = critical now, P1 = next 12 months, P2 = exploratory).
3. **Trade-off analysis per architecture.**

   **Subdirectory (`brand.com/fr/`):**
   - SEO equity: high (inherits parent).
   - Operational cost: low (single deployment).
   - Geo signal: weak (relies on Hreflang + GSC + content).
   - Brand integrity: medium (single domain visible).
   - CMS support: most platforms support natively.
   - Migration cost from current state: low if currently single-domain.

   **Subdomain (`fr.brand.com`):**
   - SEO equity: medium (some inheritance; treated as separate property by some signals).
   - Operational cost: medium (some shared infrastructure).
   - Geo signal: medium.
   - Brand integrity: medium.
   - CMS support: most platforms support; fewer than subdirectory.
   - Migration cost: medium.

   **ccTLD (`brand.fr`, `brand.de`):**
   - SEO equity: low (each ccTLD builds independently from zero).
   - Operational cost: high (separate domain registration, SSL, hosting, CDN, compliance, sometimes local-presence requirement).
   - Geo signal: highest (Google trusts ccTLDs strongly for country targeting).
   - Brand integrity: highest in markets where ccTLDs are expected (DE, FR, IT, JP).
   - CMS support: limited; Shopify requires Markets/Plus tier; WordPress requires multisite plus configuration; some platforms don't support natively.
   - Migration cost: highest.

4. **Per-market recommendation.**
   - For each market: which architecture, why.
   - Mixed architecture acceptable (subdirectory for most, ccTLD for one priority market) if reasoned.
5. **Staging plan.**
   - Phase 1 (next 6 months): typically subdirectory for fastest launch.
   - Phase 2 (12-24 months): selective ccTLD migration for markets where brand presence has become the bottleneck.
   - Phase 3 (24+ months): re-evaluate.
6. **CMS compatibility check.**
   - Confirm chosen architecture is supported by current CMS / platform.
   - If not: either change CMS (major) or choose supported architecture.
7. **Operational dependencies.**
   - Hreflang: required regardless of architecture.
   - Per-market hosting / CDN: ccTLDs benefit; subdirectories rarely.
   - Per-market analytics: GSC + GA4 — separate or shared decision.
   - Per-market off-page: each market needs own link strategy.
   - Per-market legal / compliance: GDPR (EU), Cookie Directive (EU), country-specific consumer protection.
8. **Migration-cost forecast** (if change implied).
   - Existing market on architecture A migrating to architecture B: 6-12 months ranking volatility, redirect work, GSC re-verification, Hreflang re-implementation. Substantial.
9. **Risks.**
   - ccTLD acquisition: domain availability + sometimes local-presence requirement.
   - Operational ramp: ccTLD operations are 3-5x cost of subdirectory.
   - Brand fragmentation: multiple ccTLDs can dilute brand search if not coordinated.
10. **Write the decision.**

## Output format

```markdown
# Multi-Language Architecture Decision — [Business name]

**Decision date:** [date]
**Markets in scope:** [list]
**Current architecture:** [description]
**Planned architecture:** [recommendation per market]
**Owner:** [name / role]

## Current state
- Domain(s): [list]
- Markets currently served: [list]
- Domain Rating / SEO equity: [observation]
- Hreflang status: [present / absent / partial]

## Planned state
| Market | Priority | Recommended architecture | URL example |
|--------|----------|---------------------------|-------------|
| US | P0 | Subdirectory (existing) | brand.com/en-us/ or brand.com/ |
| UK | P0 | Subdirectory (existing) | brand.com/en-gb/ |
| France | P1 | Subdirectory (Phase 1) → ccTLD (Phase 2 if needed) | brand.com/fr/ → brand.fr |
| Germany | P1 | Subdirectory | brand.com/de/ |
| Italy | P2 | Subdirectory | brand.com/it/ |

## Trade-off analysis

### Subdirectory
- **SEO equity:** [analysis]
- **Operational cost:** [analysis]
- **Geo signal:** [analysis]
- **Brand integrity:** [analysis]
- **CMS support:** [verified for current CMS]
- **Recommendation:** [where it fits]

### Subdomain
[same structure]

### ccTLD
[same structure]

## Per-market reasoning

### [Market 1]
- **Recommendation:** [architecture]
- **Reasoning:** [why this fits this market specifically]
- **Trade-offs accepted:** [what we're giving up]
- **Trigger to re-evaluate:** [signal that suggests architecture change is needed]

[Repeat per market]

## Staging plan

### Phase 1 (next 6 months)
- Launch [markets] on [architecture].
- Implement Hreflang.
- Set up per-market GSC / GA4.

### Phase 2 (12-24 months)
- Re-evaluate based on:
  - Per-market brand presence.
  - SEO equity ramp in each market.
  - Operational capability.
- Migrate [specific market] to ccTLD if [trigger condition].

### Phase 3 (24+ months)
- Full architecture review.
- Refactor where structural change makes sense.

## CMS compatibility verification
- Current CMS: [name + version].
- Supports subdirectory: [yes / no].
- Supports subdomain: [yes / no / requires additional config].
- Supports ccTLD: [yes / no / requires premium tier].
- Recommendation: [confirms feasibility].

## Operational dependencies
- [ ] Hreflang implementation (per `audit-hreflang`).
- [ ] Per-market hosting / CDN strategy.
- [ ] Per-market GSC + GA4 setup.
- [ ] Per-market off-page strategy.
- [ ] Per-market legal / compliance review (GDPR, Cookie Directive, etc.).

## Migration-cost forecast (if applicable)
- Affected market: [if migrating from current to new].
- Estimated ranking volatility: 6-12 months.
- Redirect work: [scope].
- GSC re-verification: required.
- Hreflang re-implementation: required.
- Cost: [days / weeks of dev + ranking risk].

## Risks + watchouts
3-5 specific risks. E.g. "ccTLD `fieldandsun.fr` may not be available — verify before committing"; "EU regulatory complexity (GDPR, Cookie Directive, Consumer Protection) requires legal review per market"; "Brand-presence bottleneck in France may not materialise; Phase 2 migration is conditional, not committed"; "Per-market analytics adds operational overhead; budget for analyst capability"; "Mixed architecture (subdirectory for most + ccTLD for France) requires consistent Hreflang implementation across both."

## Open questions
- [ ] Confirm operational capacity for chosen architecture.
- [ ] Confirm CMS compatibility (verify with engineering).
- [ ] Confirm legal review per market.
- [ ] Confirm Phase 2 trigger condition for any ccTLD migration.
- [ ] Confirm staging timeline matches business launch plans.
```

Save the produced file to `businesses/<slug>/international/architecture-decision-[YYYY-MM-DD].md`. Create the `international/` sub-folder if it doesn't already exist. Update the per-business CLAUDE.md decisions log with a brief reference to this document. After writing, tell the user the file path.

## Quality bar

- Trade-off analysis covers all three architectures (subdirectory / subdomain / ccTLD) with reasoning.
- Per-market recommendation is reasoned (not generic).
- Staging plan with Phase 1 / 2 / 3 is concrete.
- CMS compatibility verified explicitly.
- Operational dependencies (Hreflang, hosting, analytics, off-page, legal) identified.
- Migration-cost forecast present if change implied.
- Risks acknowledged including ccTLD availability + brand-presence triggers.
- Open questions cover capacity / compatibility / legal.

## Common mistakes to avoid

- Don't recommend ccTLD by default. Highest cost; should be earned.
- Don't recommend subdomain without specific reason. Often the wrong middle-ground choice.
- Don't skip CMS compatibility check.
- Don't omit Hreflang from dependencies; it's required regardless.
- Don't propose mixed architecture without reasoning per market.
- Don't underestimate migration cost. 6-12 months ranking volatility is real.
- Don't skip the staging plan. Architecture should evolve as brand grows.
- Don't forget per-market legal / compliance dependencies.

## Example

**Input (abbreviated):** Field & Sun. Current: single domain `fieldandsun.com`, US + UK on same domain. Planned: France, Germany, Italy launch. CMS: Shopify (Plus tier). DR: 45 (mid-stage).

**Output (abbreviated):**

Recommendation: subdirectory for all 5 markets in Phase 1. `fieldandsun.com/en-us/`, `/en-gb/`, `/fr/`, `/de/`, `/it/`. Reasoning: parent authority (DR 45) inherits to subdirectories; operational cost lowest; CMS supports natively; Hreflang handles country signalling.

Phase 2 trigger: France brand-presence ceiling. If after 18 months France market hits a plateau attributable to local-presence (local journalists won't link to .com, French customers prefer .fr), migrate France to `fieldandsun.fr` (with redirect work). Germany + Italy stay on subdirectory unless similar plateau.

CMS check: Shopify Plus supports all three; subdirectory implementation via Shopify Markets feature confirmed.

Migration cost (current state to subdirectory): ~2-3 weeks dev (URL restructure + Hreflang + GSC re-verification).

Operational dependencies: Hreflang per `audit-hreflang`; per-market GSC + GA4; per-market off-page strategy (separate from US / UK plans); EU legal review (GDPR, Cookie Directive, EU Accessibility Act all applicable).

Risks: `fieldandsun.fr` availability uncertain; EU Accessibility Act compliance is critical-path (June 2025 deadline already past); per-market analytics adds operational overhead.

Saved to `businesses/field-and-sun/international/architecture-decision-2026-05-01.md`.
