---
name: plan-localisation
description: Produces a per-market localisation plan: translation method, cultural adaptation, regulatory compliance, and SEO keyword strategy per locale. Use before launching in a new language market.
---

# Plan Localisation

This skill produces the per-market localization plan. Output covers translation method, cultural adaptation, regulatory, brand voice, pricing, formats, SEO-specific research, sequencing, QC.

The skill is opinionated about a few things: machine translation alone is insufficient for production-quality SEO content in 2026; cultural adaptation matters as much as translation; regulatory compliance per market is non-optional (especially EU); per-market keyword research is required (don't translate keywords); native-speaker review is the QC gate; translation memory pays for itself within 3-6 months on active sites.

## When to use this skill

- The user is launching new markets and needs the localization plan.
- The user has machine-translated content and is upgrading to higher quality.
- The user is briefing translation agency / freelancers / in-house team.
- The user is running an annual localization review.

## When NOT to use this skill

- The user wants to audit Hreflang — use `audit-hreflang`.
- The user wants architecture decision — use `decide-multi-language-architecture`.
- The user wants geo-targeting signals — use `plan-geo-targeting`.
- The user wants per-market content briefing (single piece) — use `generate-content-brief` after localization is in place.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), brand voice (8).
2. **Markets in scope** — required.
3. **Architecture decision** — required. From `decide-multi-language-architecture`.
4. **Budget tier** — required. Affects translation method.
5. **Existing localized content** — optional. If any market already has content, audit quality.
6. **Regulatory exposure** — required. EU presence triggers GDPR / Cookie Directive / EU Accessibility Act / country-specific.
7. **Brand voice constraints** — read from business profile.

If markets + budget are missing, ask. Localization plan is anchored to specific markets with specific budget.

## Process

1. **Translation method per market.** Match budget + quality requirement.
   - **Machine (DeepL / Google Translate):** lowest cost; lowest quality; rarely production-ready alone.
   - **Machine + native-speaker review:** mid-cost; acceptable quality for most cases. Most-recommended pattern for mid-stage brands.
   - **Human professional (translation agency):** highest cost ($0.10-0.30/word); highest single-source quality; longer turnaround.
   - **Native-speaker in-house:** best brand-voice fidelity; slowest scale.
2. **Translation memory tooling.**
   - For brands with 50+ pages or ongoing content: Smartling, Crowdin, Lokalise, Phrase.
   - Reduces cost over time + maintains consistency across new content.
   - Mid-stage brands typically benefit; small / one-off translations don't.
3. **Cultural adaptation per market.**
   - Imagery: market-specific or neutral-global.
   - Examples / customer references: localised.
   - Brand positioning per market: emphasis varies (dermatologist credibility, ingredient transparency, sustainability, family / tradition — different markets weight differently).
   - Holidays / seasonal references: per-market relevance.
4. **Regulatory + legal compliance per market.**
   - **EU (all member states):** GDPR (data protection), Cookie Directive (consent banners), EU Accessibility Act (June 2025 already active), CE marking implications.
   - **France:** Toubon Law (French primary on French market).
   - **Germany:** Verbraucherschutz (consumer protection — long-form returns policy, cooling-off rights).
   - **Italy:** VAT display + shipping disclosure language requirements.
   - **UK (post-Brexit):** UK GDPR (similar to EU GDPR but separate); UK consumer law.
   - **US:** ADA, state-specific (California CCPA / CPRA, Colorado, Virginia).
   - **Canada:** PIPEDA, Quebec Bill 96 (French primacy in Quebec).
   - Coordinate with legal counsel per market.
5. **Brand-voice variation guide.**
   - Same brand identity; per-market formality / tone variation.
   - German market: more formal, technical, ingredient-detailed.
   - French market: sophisticated, dermatologist-credibility-led.
   - Italian market: warmer, family / tradition-anchored.
   - US market: direct, claims-led with FDA compliance.
   - UK market: similar to US but with UK conventions.
   - Document per-market style guide.
6. **Currency + pricing.**
   - Display in local currency.
   - Pricing convention per market (€19.99 vs €20.00 round vs €19,99 EU number format).
   - VAT display: EU = "incl. VAT" by law; US = pre-tax.
   - Shipping language: free shipping thresholds in local currency.
   - Payment methods: market-appropriate (iDEAL NL, Klarna SE / DE, Sofort DE, Bancontact BE).
7. **Date + number formats.**
   - US: `5/1/2026`, `5,000.00`.
   - EU: `01/05/2026` or `2026-05-01`, `5.000,00`.
   - UK: `01/05/2026`, `5,000.00`.
8. **SEO-specific keyword research per market.**
   - **Don't translate keywords literally.**
   - Per market: fresh keyword research.
   - For Field & Sun: French "crème solaire minérale", "écran solaire minéral", "crème solaire bébé minérale" — different volumes, different long-tail intents than English equivalents.
   - Title tags, meta descriptions, H1s — translated and locally optimised.
   - URL slugs: localized where appropriate (`/fr/guide-creme-solaire-minerale/`).
9. **Priority template sequence.**
   - Phase 1: homepage, pillar, top PDPs, checkout flow.
   - Phase 2: top blog posts, top collections, key landing pages.
   - Phase 3: full backlog, refresh existing localized content.
10. **Quality-control plan.**
    - Native-speaker review of all priority templates pre-launch.
    - Spot-check (10% sample) post-launch.
    - Per-market style guide adherence check.
    - Regulatory / legal sign-off pre-launch.
11. **Per-market keyword + content alignment.**
    - Cluster strategy may shift per market — verify cluster-map applies; create per-market clusters where divergence is meaningful.
12. **Write the plan.**

## Output format

```markdown
# Localisation Plan — [Business name]

**Plan date:** [date]
**Markets in scope:** [list]
**Architecture:** [from architecture decision]
**Owner:** [name / role]

## Translation method per market
| Market | Method | Cost estimate | Timeline |
|--------|--------|---------------|----------|
| France | Machine + native review | $4-7k upfront | 8 weeks |
| Germany | Machine + native review | $4-7k upfront | 8 weeks |
| Italy | Machine + native review | $3-5k upfront | 6 weeks |

## Translation memory tooling
- **Recommended:** [Smartling / Crowdin / Lokalise / Phrase]
- **Cost:** $/mo
- **ROI timeline:** [3-6 months break-even on translation cost savings]

## Cultural adaptation per market

### France
- **Brand positioning emphasis:** dermatologist credibility, French skincare tradition.
- **Imagery:** neutral-global acceptable Phase 1; consider French-specific imagery Phase 2.
- **Examples / references:** local skincare context.
- **Holidays / seasonal:** French seasonal cycle (la rentrée, summer Riviera focus, etc.).

### Germany
- **Brand positioning emphasis:** ingredient transparency, technical specs, sustainability.
- **Imagery:** neutral-global; Germans value substance over visual glamour.
- **Examples / references:** German ingredient regulations, German skin-tone diversity.
- **Brand voice:** more formal, more technical.

### Italy
- **Brand positioning emphasis:** Mediterranean climate, family / tradition, Italian beauty norms.
- **Imagery:** Italian-specific where possible.
- **Examples / references:** Italian climate considerations.
- **Brand voice:** warmer, family-anchored.

## Regulatory + legal compliance

### Per market
| Market | Required | Notes |
|--------|----------|-------|
| France | GDPR, Cookie Directive, EU Accessibility Act, Toubon Law | French primary required |
| Germany | GDPR, Cookie Directive, EU Accessibility Act, Verbraucherschutz | Long-form returns policy |
| Italy | GDPR, Cookie Directive, EU Accessibility Act, VAT display | Specific shipping language |
| UK | UK GDPR, UK consumer law | Post-Brexit separate regime |
| US | ADA, state-specific privacy (CCPA / CPRA / etc.) | |

### Legal sign-off owner
[Counsel / firm per market]

## Brand-voice variation guide
[Per market: tone, formality, banned terms, preferred terms]

### France
- Tone: sophisticated, evidence-led.
- Banned terms: [translate Field & Sun's rejected category-language and unsupported-claims rules to French equivalents].
- Preferred terms: [French equivalents of brand voice].

### Germany
- Tone: formal, technical, transparent.
- Banned terms: [equivalents].
- Preferred terms: [equivalents].

### Italy
- Tone: warm, family-anchored.
- Banned terms: [equivalents].
- Preferred terms: [equivalents].

## Currency + pricing
| Market | Currency | Format | VAT | Payment methods |
|--------|----------|--------|-----|-----------------|
| France | EUR | €19,99 (EU number format) | "TTC" (incl.) | Card + Bancontact + Klarna |
| Germany | EUR | €19,99 | "inkl. MwSt." | Card + Klarna + Sofort + SEPA |
| Italy | EUR | €19,99 | "IVA inclusa" | Card + Klarna |

## Date + number formats
- EU markets: `dd/mm/yyyy`, `5.000,00 €`.
- UK: `dd/mm/yyyy`, `£5,000.00`.

## SEO-specific keyword research

### Per-market head terms
| Market | Head term equivalent | Volume | Notes |
|--------|----------------------|--------|-------|
| France | "crème solaire minérale" | 1,800/mo | French preference for "crème" over "écran" |
| Germany | "mineralische Sonnencreme" | 2,400/mo | "Sonnenschutz" common variant |
| Italy | "crema solare minerale" | 900/mo | Smaller market |

### Per-market long-tail
- Conduct full keyword research per market via Ahrefs / Semrush / native local tools (Sistrix for DE).
- Build per-market cluster map (or extend existing cluster map per market).

## Priority template sequence

### Phase 1 (weeks 1-8)
- Homepage.
- Mineral-sunscreen pillar.
- Top 3 PDPs.
- Checkout flow.

### Phase 2 (weeks 9-16)
- Top 5 blog posts.
- Top 2 collections.
- About / methodology page.
- FAQ.

### Phase 3 (weeks 16+)
- Full backlog.
- Per-market editorial calendar (handoff to Content SEO).

## Quality-control plan
- **Pre-launch:** native-speaker review of every Phase 1 template.
- **Pre-launch:** legal sign-off per market.
- **Post-launch:** 10% spot-check of Phase 2 + 3 content.
- **Ongoing:** per-market style-guide adherence check.

## Translation memory strategy
- Set up [tool] before Phase 1 production.
- Build initial term base from Field & Sun brand-voice glossary.
- Reuse across markets where applicable; track per-market adaptation.

## Acceptance criteria
- [ ] Translation method confirmed per market with budget approval.
- [ ] Translation memory tooling configured.
- [ ] Per-market style guides drafted + native-speaker reviewed.
- [ ] Per-market regulatory checklists complete with legal sign-off.
- [ ] Per-market keyword research conducted.
- [ ] Phase 1 priority templates translated, reviewed, signed off.
- [ ] Currency / pricing / VAT display configured per market.
- [ ] Date / number formats configured per market.
- [ ] Brand-voice variation guide documented.
- [ ] Re-review scheduled in 12 months.

## Risks + watchouts
3-5 specific risks. E.g. "EU Accessibility Act deadline (June 2025) is past — non-compliance is current legal exposure"; "Toubon Law in France strict on French primary; plan content production accordingly"; "German Verbraucherschutz long-form returns policy is template-level work; budget legal time"; "Per-market keyword research reveals different cluster boundaries — cluster map may need per-market versions"; "Native-speaker review capacity is the bottleneck; budget contractor or in-house"; "Translation memory tooling has setup cost; ROI takes 3-6 months."

## Open questions
- [ ] Confirm translation method per market with budget.
- [ ] Confirm translation memory tooling decision.
- [ ] Confirm legal counsel per market.
- [ ] Confirm native-speaker review capacity (in-house, freelance, agency).
- [ ] Confirm per-market cluster strategy (extend existing or per-market).
- [ ] Confirm payment-method support per market (Stripe / payment processor capabilities).
```

Save the produced file to `businesses/<slug>/international/localisation-plan-[YYYY-MM-DD].md`. Create the `international/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Translation method per market matched to budget + quality requirement.
- Cultural adaptation per market specified (not generic).
- Regulatory + legal compliance per market with named regulations.
- Brand-voice variation guide drafted per market.
- Currency + pricing + VAT + payment methods per market.
- Date / number formats per market.
- Per-market keyword research is required (don't translate).
- Priority template sequence with phasing.
- QC plan includes native-speaker review + legal sign-off.
- Translation memory strategy if scale warrants.

## Common mistakes to avoid

- Don't propose machine translation alone for production. Underperforms in 2026.
- Don't translate keywords literally. Per-market research required.
- Don't skip cultural adaptation. Translation alone isn't localization.
- Don't ignore regulatory. EU / per-country compliance is non-optional.
- Don't use one brand-voice across all markets. Localised variation matters.
- Don't display USD on EU pages. Currency mismatch is hard fail.
- Don't propose Phase 1 = entire site. Sequencing protects launch quality.
- Don't skip native-speaker review. Machine + non-native review produces awkward content.
- Don't forget translation memory for active brands. Cost compounds without it.
- Don't propose Toubon Law / Verbraucherschutz / etc. without legal review. Counsel sign-off required.

## Example

**Input (abbreviated):** Field & Sun. Markets: France, Germany, Italy. Architecture: subdirectory. Budget: ~$25k upfront for full translation across 3 markets.

**Output (abbreviated):**

Translation method: machine (DeepL) + native-speaker review per market. ~$8-15k per market for full Phase 1 + Phase 2 templates.

Translation memory: Smartling ($300/mo); ROI 4-5 months on multi-market scale.

Cultural adaptation: France emphasises dermatologist credibility; Germany emphasises ingredient transparency + technical specs; Italy emphasises warmth + Mediterranean climate context.

Regulatory: GDPR, Cookie Directive, EU Accessibility Act (already active) for all 3; Toubon Law (FR) requires French primary; Verbraucherschutz (DE) requires long-form returns; Italian VAT display + shipping language. Legal counsel per market.

Brand voice: per-market style guide drafted; rejected category-language and unsupported-claims rules translated to local-language equivalents.

Currency: EUR with EU number format (€19,99); VAT-inclusive display; payment methods include Klarna (DE major), Bancontact (BE-adjacent), card universally.

Per-market keyword research: ~$1.5-3k per market via native tools (Sistrix DE, Semrush FR / IT).

Phase 1: homepage + pillar + top 3 PDPs + checkout. Weeks 1-8.

Phase 2: top blog + collections + About + FAQ. Weeks 9-16.

QC: native-speaker review per template + legal sign-off pre-launch.

Risks: EU Accessibility Act deadline past; Toubon Law strict; native-speaker capacity is the bottleneck.

Saved to `businesses/field-and-sun/international/localisation-plan-2026-05-01.md`.
