---
name: plan-programmatic-seo
description: Evaluates whether a programmatic SEO build fits the use case and produces a go / no-go decision with reasoning. Tests three viability gates (unique data, structured data, real searcher intent), evaluates archetype fit (glossary, comparison, location, listing, "for [persona]" page), estimates page count and search-demand ceiling, identifies thin-content risk, and recommends scope (start at 30-50 pages, scale based on quality). Output is the strategic decision document — green-light with archetype + scope recommendation, or red-light with reasoning. Use whenever the user asks to "evaluate programmatic SEO," "should we build a programmatic [pages]," "we want to scale our content with programmatic," "is programmatic right for [topic / business]," "what would programmatic look like for [use case]," or has heard about programmatic and is considering it. Also use to push back on aggressive programmatic ambitions when the data / intent / quality bar isn't there. Do not use to design the actual template (use `design-programmatic-template` after a green-light) or to plan editorial content (use `plan-blog-content`).
---

# Plan Programmatic SEO

This skill produces a go / no-go decision on a proposed programmatic SEO build. The skill is *deliberately conservative* — programmatic is the highest-downside-risk content investment in this toolkit, and the default recommendation when the viability gates aren't clearly met is "don't build."

The skill is opinionated about a few things: programmatic without unique data is spam (regardless of how cleverly the template is designed); programmatic without real search demand is a vanity exercise; programmatic without quality controls damages site-wide signals; starting small (30-50 pages) is always the right scaling discipline.

## When to use this skill

- The user has heard about programmatic SEO and is considering it.
- The user wants to scale content faster than editorial allows and is wondering if programmatic is the answer.
- The user has a structured database (ingredients, products, locations, comparisons) and wonders if programmatic fits.
- The user is evaluating one of multiple growth strategies and needs the programmatic option fairly evaluated (or fairly rejected).
- The user is considering programmatic across multiple use cases and needs them prioritised.

## When NOT to use this skill

- The user has already decided to build and needs the template — use `design-programmatic-template`.
- The user wants to write editorial content — use `plan-blog-content` / `generate-content-brief`.
- The user wants to build interactive tools — use `plan-tool-page`.
- The user wants to scale via AI-generated content (without structured data) — that's not programmatic SEO; it's content automation, and this skill should explicitly discourage it.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), goals (7).
2. **Use case** — required. What's the proposed programmatic build? "Ingredient glossary," "product comparison library," "city pages for our wholesale program," etc.
3. **Data source** — required. Where does the data come from? Own database, manually curated, third-party API, scraped public sources. Source dramatically affects viability.
4. **Page count estimate** — optional. How many pages would the build produce? 30, 300, 30,000? Wildly different decisions.
5. **Engineering capacity** — optional but valuable. Programmatic builds take 6-16 weeks; if engineering is unavailable, defer.
6. **Existing programmatic** — optional. Does the brand already have a programmatic build (good or bad)? Affects baseline confidence and risk assessment.

If use case + data source are missing, ask. The decision is anchored to a specific build proposal.

## Process

1. **Run the three viability gates.** All three must pass.

   **Gate 1 — Unique data.** Is the data the user can put on these pages genuinely differentiated from what's publicly available?
   - **Pass:** the brand has proprietary data (own product testing, internal sales / customer data, original research, expert-reviewed methodology, brand-distinct percentages or specifications).
   - **Fail:** data is publicly scraped, AI-generated without primary source, or exists on Wikipedia / authoritative publishers in better form.
   - For Field & Sun ingredient glossary: pass (own percentage disclosures, three-skin-tone tolerance testing, dermatologist-reviewed safety notes).
   - Counterexample for Field & Sun: city pages ("`mineral sunscreen [city]`") — fail (no city-specific unique data; brand isn't local).

   **Gate 2 — Structured data.** Can the data be templated cleanly across pages?
   - **Pass:** 8-20 fields per page, consistent across entries, clear required vs. optional split.
   - **Fail:** data is unstructured (free-form descriptions vary wildly per entry), too few fields (3-4 per page), or too many fields (>30, suggests editorial).
   - For Field & Sun ingredient glossary: pass (mechanism, common uses, regulatory status, percentage in our products, tolerance findings, related ingredients, related products — 12-15 fields).

   **Gate 3 — Searcher intent.** Do real people search the long-tail queries the build would target?
   - **Pass:** at least 30-50% of the planned pages have measurable search volume (10+/mo each, or 50+/mo for a head-term variant).
   - **Fail:** no measurable demand on the long-tail; pages would target queries nobody searches.
   - For Field & Sun ingredient glossary: pass ("is zinc oxide safe" 720/mo + similar long-tail across 50 ingredients; ~3,000-4,000 long-tail volume in aggregate).

2. **If any gate fails, recommend against.** Specify which gate(s) failed and why; recommend alternatives (editorial content, refresh existing posts, defer until data improves).

3. **If all three pass, identify the archetype.** Glossary, comparison, location, listing, "for [persona]," "best [thing] for [use case]." Each has different template conventions.

4. **Estimate scope.** How many pages can ship at quality? Start small.
   - **Phase 1 (proof):** 30-50 pages. All hand-curated or strict editorial review. Validates the unit works.
   - **Phase 2 (scale):** 100-300 pages, only if Phase 1 ranking + engagement holds.
   - **Phase 3 (cap):** larger scale only if quality controls are battle-tested.
   Don't recommend launching at 5,000+ pages; thin-content risk explodes at scale.

5. **Estimate search-demand ceiling.** What's the realistic 12-24-month traffic ceiling? Helps the user decide if the build is worth the engineering investment.

6. **Identify thin-content risk.**
   - For each archetype, what's the minimum unique-data threshold per page?
   - What % of planned pages will likely fall below threshold (insufficient data)?
   - Recommend `noindex` rules, page-creation gates, or page-not-published rules.

7. **Identify dependencies.**
   - **Engineering:** template + CMS / static-gen pipeline. 6-16 weeks for first launch.
   - **Data:** if data source is own database, who maintains it? If manually curated, who curates the first 30-50 entries?
   - **Editorial review:** who reviews the first batch for quality?
   - **Schema implementation:** which schema types? Reference `generate-schema-markup`.
   - **Indexation:** XML sitemap segmentation; index-control rules.

8. **Estimate build cost.** Engineering + data + editorial. Be honest. Programmatic is consistently underestimated.

9. **Write the decision document.** Output is the go / no-go memo with archetype + scope recommendation if green-lit; clear reasoning if red-lit.

## Output format

```markdown
# Programmatic SEO Evaluation — [Use case]

**Use case:** [proposed build, in 1-2 sentences]
**Evaluation date:** [date]
**Recommendation:** ✅ Green-light Phase 1 / 🟡 Conditional / ❌ Red-light

## Viability gates

### Gate 1 — Unique data
**Status:** [pass / fail]
**Evidence:**
- [Specific data the brand has]
- [Why it's differentiated from public sources]
- [Source: own database / manually curated / third-party / mixed]

### Gate 2 — Structured data
**Status:** [pass / fail]
**Evidence:**
- [Field count per page: n required + n optional]
- [Field consistency across entries]
- [Where the data lives / how it's maintained]

### Gate 3 — Searcher intent
**Status:** [pass / fail]
**Evidence:**
- [Head-term volumes for representative pages: keyword + monthly volume × 5-10 examples]
- [Aggregate long-tail volume estimate]
- [% of planned pages with measurable demand]

## Recommendation

### If green-light:
- **Archetype:** [glossary / comparison / location / listing / "for [persona]"]
- **Phase 1 scope:** [30-50 pages]
- **Phase 1 page count:** [n]
- **Phase 1 timeline:** [weeks for engineering + weeks for data population + weeks for editorial review]
- **Search-demand ceiling (12-24 months):** [n] visits/mo
- **Phase 2 trigger:** Phase 1 average ranking ≥ position [n]; engagement metrics ≥ [threshold]; no Google Search Console quality issues.
- **Cap recommendation:** [n] pages until quality controls battle-tested.

### If conditional:
- **What's missing:** [specific gates / dependencies that need attention]
- **What to do first:** [interim actions before the build]
- **Re-evaluate when:** [trigger event]

### If red-light:
- **Failed gate(s):** [which gates failed and why]
- **Why programmatic doesn't fit:** [reasoning, 2-3 sentences]
- **What to do instead:** [recommended alternative — editorial content, refresh existing posts, tools content, etc.]

## Thin-content risk assessment
- **Minimum unique-data threshold per page:** [field count + content depth requirement]
- **Estimated % of planned pages likely below threshold:** [n%]
- **Mitigation:** index-control rules; page-creation gates; editorial review of first batch.

## Dependencies (if green-light)

### Engineering
- Template + data pipeline: [n] weeks at [n] FTE.
- CMS / static-gen pattern: [recommendation].

### Data
- Source: [own database / manual / third-party].
- Maintainer: [team / role].
- First-batch population: [n] hours.

### Editorial
- First-batch review: [n] hours.
- Ongoing quality monitoring: [hours/quarter].

### Schema
- Required schema types: [Article + FAQPage + Product + ItemList as applicable].
- Reference: see [generate-schema-markup](../../technical/generate-schema-markup/SKILL.md).

### Indexation
- XML sitemap segmentation: dedicated programmatic sitemap.
- Index-control rules: pages below data threshold → `noindex`.
- Reference: see [audit-indexing-status](../../technical/audit-indexing-status/SKILL.md).

## Build cost estimate (if green-light)
- Engineering: [n] weeks calendar.
- Data population: [n] weeks calendar (parallel where possible).
- Editorial review: [n] weeks calendar.
- Total Phase 1 calendar time: [n] weeks.

## Risks and watchouts
3-5 specific risks. E.g.:
- "Data maintenance burden — if [team] doesn't keep ingredient data current, pages decay and risk thin-content drift in 12-18 months."
- "Engineering timeline is the critical path — confirm available capacity before committing to launch date."
- "Ingredient research authority is a high bar — first-batch dermatologist review is non-negotiable for credibility-sensitive content."
- "Site-wide quality signal exposure — bad programmatic affects rest of the site too. Quality controls are existential, not nice-to-have."

## Open questions for the user
- [ ] Confirm data source and maintainer.
- [ ] Confirm engineering capacity for [n] weeks.
- [ ] Confirm editorial / expert review ownership.
- [ ] Confirm Phase 1 scope (recommended: [n] pages; not more).
- [ ] Confirm acceptance to start small and scale based on quality, not page count.

## Next step
- If green-light: run `design-programmatic-template` with this evaluation as input.
- If conditional: address the gaps; re-run this skill in [n] weeks.
- If red-light: route to [recommended alternative].
```

Save the produced file to `businesses/<slug>/programmatic/<use-case-slug>-evaluation.md`. Create the `programmatic/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- All three gates evaluated explicitly with specific evidence — not glossed.
- Red-light recommendations are reasoned, not dismissive; user understands what would change the decision.
- Green-light recommendations include scope discipline (Phase 1 = 30-50 pages, not 5,000).
- Search-demand ceiling is data-anchored, not aspirational.
- Thin-content risk is quantified (% of planned pages below threshold) with mitigation.
- Engineering / editorial dependencies are concrete, with hours / weeks estimates.
- Reference to `design-programmatic-template` for green-light next step is explicit.
- Reference to alternatives (editorial / refresh / tools) for red-light is explicit.

## Common mistakes to avoid

- Don't approve programmatic when the unique-data gate fails. Cleverness in the template doesn't substitute for differentiated data.
- Don't approve mass scale on Phase 1. Even when all gates pass, recommend 30-50 pages first; scale based on quality, not ambition.
- Don't conflate AI-generated content with programmatic SEO. Spell out the difference; AI on top of public data isn't programmatic.
- Don't underestimate engineering. "We can build the template in 2 weeks" almost always misses; bias estimates upward.
- Don't recommend programmatic for query classes that are editorial-shaped. Some queries genuinely want hand-written takes; forcing template ranks worse and reads template-ish.
- Don't omit the site-wide risk. Bad programmatic damages the rest of the site too; this is part of the downside.
- Don't pass on the Phase 2 trigger discipline. Without explicit scaling triggers, Phase 1 quality erodes when scaling pressure hits.
- Don't propose programmatic without dermatologist / expert review for credibility-sensitive content. Health / beauty / finance / legal programmatic without expert review is a thin-content disaster waiting to happen.

## Example

**Input (abbreviated):** Field & Sun. Use case: ingredient glossary at `/ingredients/[slug]`, ~50 entries.

**Output (abbreviated):**

Recommendation: ✅ Green-light Phase 1 (30 entries to start).

Gate 1 (unique data): pass. Brand has 20% non-nano zinc oxide percentage disclosure; three-skin-tone tolerance testing data; dermatologist-reviewed safety notes — none of this is publicly available in this combination.

Gate 2 (structured data): pass. 14 fields per ingredient (mechanism, common uses, regulatory status, our products, percentage disclosure, tolerance findings, dermatologist note, related ingredients, related products, FAQ).

Gate 3 (searcher intent): pass. Top 10 ingredients alone (zinc oxide, niacinamide, vitamin C, hyaluronic acid, etc.) carry ~3,000 monthly searches across head + long-tail. Phase 1 30 entries should hit ~4,000-5,000 monthly searches in aggregate.

Archetype: glossary.

Phase 1: 30 entries; ~10 weeks calendar (4 weeks engineering + 4 weeks content population + 2 weeks dermatologist review parallel).

Phase 2 trigger: average ranking ≤ position 12 across Phase 1 pages at month 4; no GSC quality issues.

Cap: 50 entries until Phase 2 trigger validates; only then scale toward 80-100.

Dependencies: in-house dermatologist review (critical path); engineering 4 weeks; ingredient-data population 4 weeks at ~2 hrs/entry.

Risks: dermatologist availability; data maintenance burden; site-wide quality risk if first batch doesn't hit threshold.

Saved to `businesses/field-and-sun/programmatic/ingredient-glossary-evaluation.md`. Next: run `design-programmatic-template`.
