---
name: design-programmatic-template
description: Produces the template + data spec for an approved programmatic SEO build. Covers URL pattern, page-level template sections, per-slot data requirements (required vs. optional fields), index-control rules (which pages publish vs. `noindex`), schema strategy per page type, internal-link orchestration (hub-and-spoke, peer linking), XML sitemap segmentation, analytics instrumentation, and acceptance criteria. Output is the engineering + content handoff document — the spec the build is implemented against. Use whenever the user has a green-lit programmatic build (from `plan-programmatic-seo`) and is ready to spec the template, OR asks "design our programmatic template," "spec the [archetype] pages," "what does the [glossary / comparison / location] page look like," "what data do we need per page," "how do we internally link the programmatic pages," "build the template for our [use case] pages." This skill assumes the viability evaluation is done; if not, route the user to `plan-programmatic-seo` first. Do not use to evaluate viability (use `plan-programmatic-seo`), to brief editorial content (use `generate-content-brief`), or to build the actual template code (that's engineering's job; this produces the spec).
---

# Design Programmatic Template

This skill produces the template + data spec for a green-lit programmatic build. Output is the handoff document engineering + content + design teams build against.

The skill is opinionated about a few things: every page needs substantive unique content per slot (templates that are mostly boilerplate produce thin pages); index-control rules are non-negotiable (publish only when data threshold is met); internal-link orchestration is part of the template (hub-and-spoke + peer linking), not an afterthought; schema is per-template, not per-page.

## When to use this skill

- The user has a green-lit programmatic build (from `plan-programmatic-seo`) and is ready to spec the template.
- Engineering is ready to build and needs the template + data spec.
- Content team is ready to populate and needs the field-by-field spec.
- The team is iterating on an existing programmatic template and needs the redesign spec.

## When NOT to use this skill

- Programmatic viability hasn't been evaluated — run `plan-programmatic-seo` first.
- The user wants to brief a single editorial piece — use `generate-content-brief`.
- The user wants the template *code* — that's engineering's job; this produces the spec.
- The user wants to design a single pillar / blog post — use `design-pillar-page` / `generate-content-brief`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), brand voice (8).
2. **Programmatic evaluation** — read `businesses/<slug>/programmatic/<use-case-slug>-evaluation.md` (output of `plan-programmatic-seo`). Required. Confirms the build is green-lit.
3. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Programmatic pages often anchor to a topic cluster.
4. **Archetype** — confirmed from the evaluation (glossary, comparison, location, listing, "for [persona]").
5. **Data sample** — strongly preferred. 3-5 example entries with the data the user has available. If unavailable, ask what fields exist; the spec is harder to design without sample data.
6. **Existing schema patterns** — if the brand has an existing schema strategy (per `plan-schema-strategy`), build on it.
7. **CMS / tech stack** — optional but useful. Affects template implementation patterns.

If evaluation document or archetype is missing, ask. The template is anchored to a specific approved build.

## Process

1. **Confirm the archetype** and load archetype-specific conventions.
   - **Glossary:** entry per term; hub at `/[type]/`; sections: definition, mechanism, uses, related entries, related products.
   - **Comparison:** entry per pair; URL pattern `/compare/[a]-vs-[b]`; sections: side-by-side table, deep-dive per item, recommendation, related comparisons.
   - **Location:** entry per location; URL pattern `/[service]/[location]`; sections: service description, local context, location-specific data, related locations.
   - **Listing / database:** index page with filters; entry per item; URL pattern `/[type]/[slug]`.
   - **For [persona]:** entry per persona; URL pattern `/for/[persona]`; sections: persona description, recommendations, social proof, related personas.
2. **Design the URL pattern.** Lowercase, hyphen-separated, no year stamps, no UTM-style query parameters. URL is the most stable element of the template; design carefully.
3. **Build the page section spec.** What sections does every page have? For each section: required vs. optional, content requirements, length range, data slots, fallback behaviour when data is missing.
4. **Define the data schema.** Field-by-field. For each field:
   - Name + type (string / number / boolean / array / structured object).
   - Required or optional.
   - Validation rules (length, format, allowed values).
   - Source (own database, manually curated, third-party API).
   - Maintainer (team / role).
5. **Set index-control rules.** What constitutes "enough data to publish"? Typically: 80%+ of required fields populated, all required fields meeting minimum-content thresholds, no banned-content flags.
6. **Plan schema markup.** Per-template schema:
   - Glossary entries: Article + DefinedTerm (where supported) + FAQPage.
   - Comparison pages: Article + ItemList (the comparison) + Product (per item) + FAQPage.
   - Location pages: LocalBusiness (if appropriate) + Article + FAQPage.
   - Listing pages: ItemList + Article.
7. **Plan internal linking.**
   - **Hub:** index page (`/[type]/`) lists all entries. The hub is the highest-equity page; should rank for the head term.
   - **Spoke (each entry):** links back to hub; links to 3-5 related entries; links to 2-3 related products / cluster posts.
   - **Peer linking:** entries link to topically-related peers (related ingredients, related comparisons, etc.).
   - **Cluster-bridge linking:** programmatic entries link to cluster pillar / blog spokes where contextually relevant.
8. **Plan XML sitemap segmentation.** Dedicated sitemap for the programmatic template (e.g. `sitemap-ingredients.xml`). Helps GSC analysis at the cohort level.
9. **Plan analytics.** Page-template-level events. Cohort-level dashboards (all pages in this template) for ranking, traffic, engagement, indexing.
10. **Define acceptance criteria.** Per-page criteria + cohort-level criteria.
11. **Plan Phase 1 production.** First-batch population (30-50 entries). Editorial review. Quality gates before launch.
12. **Plan ongoing operations.** Data maintenance cadence. Quality monitoring (cohort-level). Quarterly reviews.
13. **Write the spec.** Output is a structured Markdown doc covering all of the above.

## Output format

```markdown
# Programmatic Template Spec — [Use case]

**Use case:** [from evaluation]
**Archetype:** [glossary / comparison / location / listing / "for [persona]"]
**Phase 1 page count:** [n]
**Spec date:** [date]
**Engineering owner:** [name / TBD]
**Data owner:** [name / role]

## URL pattern
- **Index (hub):** `/[type]/`
- **Entry:** `/[type]/[slug]`
- **Slug rules:** lowercase, hyphen-separated, no special characters, no year stamps.
- **Examples:** `/ingredients/zinc-oxide`, `/ingredients/niacinamide`, `/ingredients/hyaluronic-acid`.

## Page section spec

### Section 1 — Hero
- **H1:** [pattern, e.g. `What is {{ingredient.name}}?`]
- **Subtitle:** [pattern, e.g. `{{ingredient.summary_short}}`]
- **Required:** `name`, `summary_short`.
- **Length range:** [n words].
- **Fallback:** if data missing, page should be `noindex`ed.

### Section 2 — Mechanism / Definition
- **Heading:** [pattern, e.g. `How {{ingredient.name}} works`]
- **Body content:** [pattern]
- **Required:** `mechanism_explanation` (200-400 words).
- **Optional:** `mechanism_diagram_url` (illustration).
- **Length range:** [n words].
- **Fallback:** if `mechanism_explanation` is < 150 words, page is below threshold → `noindex`.

### Section 3 — [Section name]
- **Heading:** [...]
- **Required:** [...]
- **Optional:** [...]
- ...

[Repeat for each section in the template — typically 6-10 sections per page]

### Section N — FAQ
- **Heading:** "Frequently asked questions about {{name}}"
- **Body:** 3-6 question / answer pairs.
- **Required:** at least 3 Q&A pairs.
- **Schema:** populates FAQPage schema.

### Section N+1 — Related entries
- **Heading:** "Related [archetype]"
- **Body:** 3-5 cards linking to related entries (peer linking).
- **Required:** at least 3 related entries.
- **Selection logic:** rule-based (same category, similar mechanism, etc.) or curated.

### Section N+2 — Related products / blog
- **Heading:** "Find this in our products" / "Read more"
- **Body:** 2-3 product cards + 1-2 cluster blog links.
- **Required:** at least 1 link, but not blocking — leave empty if no good match.

## Data schema

| Field | Type | Required | Source | Maintainer | Validation |
|-------|------|----------|--------|------------|------------|
| `name` | string | ✅ | manual | content | 2-50 chars |
| `slug` | string | ✅ | derived | system | lowercase-hyphenated |
| `summary_short` | string | ✅ | manual | content | 80-160 chars |
| `mechanism_explanation` | text (markdown) | ✅ | manual + dermatologist review | content + reviewer | 150-400 words |
| `regulatory_status` | enum | ✅ | manual | content | one of: FDA-approved, EU-approved, multi-region, restricted |
| `our_percentage` | number (or null) | optional | own database | product | 0-100, % |
| `our_products` | array of product IDs | optional | own database | system (sync) | 0-10 entries |
| `tolerance_three_skin_tones` | structured (object) | optional | own testing | product testing | structured fields |
| `dermatologist_note` | text | optional + reviewed | dermatologist | reviewer | up to 200 words |
| `related_ingredients` | array of slugs | ✅ | manual | content | 3-5 entries |
| `faqs` | array of {question, answer} | ✅ | manual | content | 3-6 pairs |
| `last_reviewed` | date | ✅ (system) | system | system | ISO-8601 |
| `last_reviewed_by` | string | ✅ for credibility-sensitive | manual | reviewer | name + credentials |

## Index-control rules

A page **publishes** (status: indexable) only if all of the following are true:
- All ✅ required fields are populated.
- `mechanism_explanation` is ≥ 150 words.
- `faqs` has ≥ 3 Q&A pairs.
- `related_ingredients` has ≥ 3 entries.
- For credibility-sensitive content: `dermatologist_note` is populated and `last_reviewed_by` is set.

If any condition fails:
- Page is generated but `noindex,follow` (still findable via internal links, not indexed).
- Page is excluded from XML sitemap.
- Daily report flags the page for content team to populate / review.

## Schema markup

Per-template schema implementation:

### Article
- `@type`: "Article"
- `headline`: `{{name}}`
- `datePublished`: `{{first_published}}`
- `dateModified`: `{{last_reviewed}}`
- `author`: `{{last_reviewed_by}}` (or default brand author)
- `image`: hero image URL
- `mainEntityOfPage`: page URL

### FAQPage
- Populated from `faqs` array.
- One `Question` + `acceptedAnswer` per Q&A.

### DefinedTerm (where supported)
- `@type`: "DefinedTerm"
- `name`: `{{name}}`
- `description`: `{{summary_short}}`

### BreadcrumbList
- Home → [Type Index] → [Entry]

### Reference
- See [generate-schema-markup](../../technical/generate-schema-markup/SKILL.md) for implementation.

## Internal linking strategy

### Hub linking
- `/[type]/` (index) lists all published entries with thumbnail + summary.
- Hub is linked from main nav and footer.
- Each entry links back to hub in breadcrumb.

### Peer linking
- Each entry links to 3-5 related entries (selected by category match + manual curation).
- Anchor pattern: entry name + descriptive context.

### Cluster bridging
- Each entry links to relevant cluster pillar (where applicable).
- Each entry links to 1-2 sibling blog posts in the cluster.
- Cluster pillar links to relevant entries in body content.

### Product bridging
- Each entry with `our_products` populated displays product cards with link to PDP.
- Anchor pattern: product name (not generic "shop now").

## XML sitemap segmentation
- Dedicated sitemap: `sitemap-[type].xml`.
- Updated on every entry publish / unpublish.
- Submitted to GSC.
- Referenced from sitemap index (`sitemap.xml`).

## Analytics instrumentation
- **Page-template-level events:** page view, scroll depth, internal-link clicks, product-card clicks, FAQ expand.
- **Cohort dashboards:** all pages in the template — average ranking, total traffic, average engagement, indexing rate.
- **GSC analysis:** filter by URL prefix `/ingredients/` (or template path) for cohort GSC queries.
- **Quality metrics:** % of pages publishing vs. `noindex`ed; % of pages with all required fields; data freshness (last reviewed > 12 months).

## Acceptance criteria

### Per-page
- [ ] Page publishes only if index-control rules pass.
- [ ] All required fields populated.
- [ ] `mechanism_explanation` ≥ 150 words.
- [ ] FAQ has ≥ 3 Q&A pairs.
- [ ] Related-entries section has ≥ 3 entries.
- [ ] Schema (Article + FAQPage + BreadcrumbList) deployed and validates in Rich Results Test.
- [ ] Page LCP ≤ 2.5s, INP ≤ 200ms.
- [ ] No broken internal links.

### Cohort (Phase 1, 30 pages)
- [ ] At least 25 of 30 entries pass index-control and are indexable.
- [ ] All 30 entries have dermatologist review for credibility-sensitive fields.
- [ ] Hub page (`/[type]/`) is linked from main nav.
- [ ] Sitemap `sitemap-[type].xml` is submitted to GSC.
- [ ] Cohort dashboard is set up in analytics.
- [ ] At month 4 post-launch: average ranking is at position 25 or better; cohort traffic is on track for 12-month target.

## Phase 1 production plan

### Engineering (weeks 1-4)
- [ ] Template implementation (HTML / CMS / static-gen).
- [ ] Data schema in CMS or database.
- [ ] Index-control logic.
- [ ] Schema markup.
- [ ] Sitemap segmentation.
- [ ] Analytics instrumentation.

### Data population (weeks 3-7, parallel)
- [ ] Curate first-batch list (30 entries).
- [ ] Populate required fields for each entry.
- [ ] Add optional fields where data exists.

### Editorial / dermatologist review (weeks 5-8, parallel)
- [ ] Editorial review of all entries for voice + clarity.
- [ ] Dermatologist review of credibility-sensitive fields (mechanism, safety, dermatologist note).

### QA (weeks 7-9)
- [ ] Index-control tests (verify thin pages are `noindex`ed correctly).
- [ ] Schema validation across all 30 entries.
- [ ] Internal-link audit.
- [ ] Rich Results / mobile / accessibility tests.

### Launch (week 9-10)
- [ ] Submit sitemap to GSC.
- [ ] Enable hub from main nav.
- [ ] Internal-link sweep from cluster pillar / blog.
- [ ] PR / outreach if applicable.

## Ongoing operations

### Data maintenance
- Quarterly review of all entries: factual accuracy, internal-link health, freshness.
- Annual full re-review (refresh `last_reviewed` dates).

### Quality monitoring
- Weekly cohort dashboard review (ranking, traffic, indexing).
- Monthly review of pages flagged below threshold.
- Quarterly programmatic review (run `plan-programmatic-seo` again to validate Phase 2 trigger).

### Phase 2 / scaling
- Trigger criteria from evaluation document. Don't scale until met.

## Risks and watchouts
3-5 specific risks. E.g.:
- "Dermatologist review is the critical-path dependency. Schedule 4-6 weeks ahead; gate launch on review completion for credibility-sensitive content."
- "Index-control bug risk — if rules are misimplemented, thin pages publish and damage cohort + site signals. QA this first."
- "Internal linking from cluster pillar is essential — without it, programmatic entries are orphaned. Pre-launch sweep is non-negotiable."
- "Schema validation across 30 pages — tooling matters. Spot-check, don't assume."
- "Analytics instrumentation — if missing at launch, the team can't validate Phase 2 trigger criteria. Build from day 1."

## Open questions for engineering / content
- [ ] Confirm CMS / tech stack pattern for the template.
- [ ] Confirm data source(s) and pipeline for sync.
- [ ] Confirm dermatologist review workflow.
- [ ] Confirm cohort dashboard tooling (analytics platform).
- [ ] Confirm Phase 2 scaling decision-maker.
```

Save the produced file to `businesses/<slug>/programmatic/<use-case-slug>-template-spec.md`. After writing, tell the user the file path so they can open it.

## Quality bar

- URL pattern is specific (with examples), no ambiguity.
- Page section spec covers every section with required vs. optional + length ranges + fallbacks.
- Data schema is field-by-field with type + required + source + maintainer + validation — not "we'll figure out fields later."
- Index-control rules are explicit and testable.
- Schema strategy is per-template, with concrete @types and field mappings.
- Internal-link plan covers hub + peer + cluster-bridge + product-bridge — orchestrated, not vague.
- Analytics instrumentation includes cohort dashboards, not just page-level events.
- Acceptance criteria are observable (word counts, validation tests, ranking thresholds), not "make it good."
- Phase 1 production plan has weekly cadence with parallel work where possible.
- Risks include the critical-path dependencies (dermatologist review, index-control QA, internal linking sweep).

## Common mistakes to avoid

- Don't design templates with mostly-boilerplate sections. Every section needs to drive substantive unique content per slot.
- Don't omit index-control rules. Pages without sufficient data must `noindex`; otherwise the cohort drifts toward thin content over time.
- Don't propose schema types Google has narrowed. FAQ rich results have narrowed in 2024-25; HowTo similarly. Use them when semantically correct, not for SEO theatre.
- Don't skip cohort-level analytics. Per-page analytics aren't enough — cohort metrics are how you spot drift.
- Don't forget the cluster-bridge linking. Programmatic entries that don't link to cluster pillar / blog content are orphans, regardless of internal hub linking.
- Don't underestimate data population time. 30 entries × 2 hours of content = 60 hours. Plan accordingly.
- Don't propose programmatic for credibility-sensitive content without expert review. Skincare / health / finance / legal needs review built into the template requirements, not bolted on.
- Don't mass-launch. Phase 1 = 30-50 pages with quality. Scaling without validating quality is the canonical programmatic failure mode.

## Example

**Input (abbreviated):** Field & Sun. Use case: ingredient glossary (green-lit by `plan-programmatic-seo`). Phase 1 = 30 entries.

**Output (abbreviated):**

URL pattern: `/ingredients/[slug]`. Hub: `/ingredients/`. Examples: `/ingredients/zinc-oxide`, `/ingredients/niacinamide`.

Sections (10): hero, definition, mechanism, common uses, regulatory status, our percentage, our products, three-skin-tone tolerance findings, dermatologist note, related ingredients, FAQ.

Data schema: 14 fields. 7 required. Critical sources: own product database (percentages, products), own testing (tolerance findings), dermatologist review (safety notes, dermatologist note).

Index-control rules: required fields populated + mechanism ≥ 150 words + FAQ ≥ 3 + related ingredients ≥ 3 + dermatologist review for credibility-sensitive fields. Pages failing → `noindex,follow` (not in sitemap).

Schema: Article + FAQPage + DefinedTerm + BreadcrumbList.

Internal linking: hub at `/ingredients/`; peer linking to 3-5 related ingredients per entry; cluster-bridge to sun-care pillar + 2 sibling blog posts where applicable; product cards link to PDP.

Sitemap: `sitemap-ingredients.xml`. Cohort analytics dashboard set up in GA4.

Phase 1 production: 9-10 weeks calendar. Engineering 4 weeks; data population 4 weeks parallel; dermatologist review 3 weeks parallel + critical path on credibility-sensitive fields; QA 2 weeks; launch week 9-10.

Acceptance: ≥ 25 of 30 entries indexable at launch; all 30 dermatologist-reviewed; LCP ≤ 2.5s, INP ≤ 200ms; cohort dashboard live.

Risks: dermatologist review schedule; index-control QA; cluster-bridge linking sweep critical pre-launch.

Saved to `businesses/field-and-sun/programmatic/ingredient-glossary-template-spec.md`.
