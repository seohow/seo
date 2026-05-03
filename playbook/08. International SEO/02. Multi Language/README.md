# Multi Language

> The architectural decision: subdomain (`fr.brand.com`) vs subdirectory (`brand.com/fr/`) vs ccTLD (`brand.fr`). Three competing trade-offs in SEO equity, operational cost, and brand integrity. Hard to reverse without major migration cost.

## What it is

Multi-language architecture is the choice of how alternate-language and alternate-market versions of the site are URL-structured. The three patterns are:

1. **Subdirectory** (`brand.com/fr/`, `brand.com/en-gb/`): all markets under one domain.
2. **Subdomain** (`fr.brand.com`, `uk.brand.com`): each market on a separate subdomain.
3. **ccTLD** (`brand.fr`, `brand.co.uk`, `brand.de`): each market on a separate country-code top-level domain.

Each pattern has different SEO equity, geo-signal strength, operational cost, and brand-integrity implications. The choice is hard to reverse — migrating from subdomain to subdirectory (or vice versa) involves redirect work, signalling resets, and 6-12 months of ranking volatility. Brands routinely under-invest in this decision and pay for it for years.

For Field & Sun, the question arises when the brand expands beyond the home market. Currently single-domain (`fieldandsun.com`); if the brand adds EU markets, the architecture decision is upcoming and consequential.

## Why it matters

Three reasons. First, **the decision is structural and hard to reverse**. Migrating between architectures costs 6-12 months of ranking volatility and substantial dev effort. Picking right the first time avoids the cost.

Second, **each architecture has different SEO equity inheritance**. Subdirectories inherit domain authority from the parent; subdomains and ccTLDs build their own. For brands without significant domain authority, the choice matters less; for established brands, subdirectories often produce faster ranking growth in new markets.

Third, **architecture interacts with operations + brand integrity**. ccTLDs are most expensive operationally (separate domains, separate hosting, separate CDN, separate compliance) but produce the strongest local-market signals + clearest brand presence. Subdirectories are cheapest operationally but weakest geo-signals.

The decision involves real trade-offs. There's no universally-right choice; the right answer depends on the brand's stage, budget, market priorities, and operational capability.

## Core concepts

- **Subdirectory (`brand.com/fr/`).** Cheapest operationally; inherits parent domain authority; weakest country-targeting signal (Google relies on Hreflang + content + GSC settings).
- **Subdomain (`fr.brand.com`).** Medium operational cost; treated as separate site by Google for some signals; cleaner separation; weaker authority inheritance than subdirectory.
- **ccTLD (`brand.fr`).** Highest operational cost (separate domain, separate hosting / SSL / CDN, separate compliance); strongest country signal (Google trusts ccTLDs heavily); strongest local brand presence; no authority inheritance from parent (each ccTLD builds independently).
- **Generic TLD (gTLD).** `.com`, `.net`, `.org` — not country-targeted by default. `brand.com` is gTLD; `brand.fr` is ccTLD.
- **Authority inheritance.** Subdirectory inherits parent authority for indexing speed + ranking velocity; subdomains and ccTLDs build separately. Big factor for new markets when parent domain is strong.
- **Hreflang requirement.** Every architecture choice needs Hreflang (covered separately). Not optional.
- **Operational cost.** ccTLD = separate everything (~3-5x cost); subdomain = some shared infrastructure (~1.5-2x); subdirectory = single deployment (~1x).
- **Brand integrity.** Some markets / customers expect ccTLDs (Germany, France traditionally; Japan; some emerging markets). Others are comfortable with subdomain or subdirectory (most English-speaking markets).
- **CMS / platform constraints.** Some platforms (Shopify, certain ecom platforms) limit architectural choice. Verify CMS supports the desired pattern.
- **Migration cost.** Moving between architectures = full URL change for affected market = major migration with redirect work + 6-12 months ranking re-stabilisation.

## A worked example

> **Scenario:** Field & Sun (US + UK on `fieldandsun.com`) is planning EU expansion: France, Germany, Italy. Founder asks the team to recommend an architecture.
>
> **Step 1.** Run `decide-multi-language-architecture`. Skill walks the trade-off framework: SEO equity inheritance, operational cost, geo-signal strength, brand integrity, market-specific norms, CMS compatibility.
>
> **Step 2.** Output:
>
> - **Subdirectory (`fieldandsun.com/fr/`, `/de/`, `/it/`):** authority inheritance fastest; operational cost lowest; weakest country signal but compensated by Hreflang + content. Recommended for early-stage EU expansion when parent authority matters more than local-market brand integrity.
> - **Subdomain (`fr.fieldandsun.com`):** medium cost; cleaner separation; some authority inheritance. Useful when brand wants market-specific operational separation.
> - **ccTLD (`fieldandsun.fr`, `.de`, `.it`):** highest cost; strongest country signal; brand-integrity strong in markets where ccTLDs are expected (DE, FR, IT all mid-strong on this).
> - **CMS check:** Shopify supports all three but ccTLD requires Shopify Markets feature; Shopify Plus required for full ccTLD support.
> - **Recommendation:** **Subdirectory** for first EU launch — fastest to ship, lowest operational cost, captures parent-domain authority. Migrate to ccTLD selectively (e.g. France only) if + when local-market brand presence becomes the bottleneck (typically year 2-3).
>
> **Step 3.** Field & Sun ships EU expansion on subdirectories. 18 months later, France hits a brand-presence ceiling; brand acquires `fieldandsun.fr` and migrates France to ccTLD (with redirect work). Germany and Italy stay on subdirectories.

## How to do it

1. **Run `decide-multi-language-architecture`.** Skill produces the structured trade-off analysis + recommendation.
2. **Stage decision in time.** Most brands should start with subdirectories (fastest, cheapest), and migrate selectively to ccTLDs only when the brand is established enough that local-market presence is the bottleneck.
3. **Verify CMS supports the pattern.** Shopify, WordPress, custom-built — each has different patterns + limitations.
4. **Coordinate with branding / legal.** ccTLD acquisition requires domain availability + sometimes local registration requirements + sometimes physical presence.
5. **Plan Hreflang upfront.** Architecture choice doesn't replace Hreflang; both are required.
6. **Plan local hosting / CDN.** ccTLDs benefit from local-market hosting / CDN endpoints; subdirectories on global CDN are usually fine.
7. **Plan per-market analytics.** GA4 / GSC properties — separate or shared, decide upfront.
8. **Plan per-market off-page strategy.** Each market needs own link-building (covered in Off-page).
9. **Document the decision.** In per-business CLAUDE.md decisions log.
10. **Re-evaluate every 18-24 months.** As brand grows, architecture choice may shift.

## Common pitfalls

- **No analysis; default-pick subdirectory.** Sometimes correct, but should be reasoned, not assumed.
- **ccTLD without operational capability.** ccTLD is expensive; brands without ops capability ship slower-than-needed and risk inconsistency.
- **Subdomain treated as subdirectory mentally.** Subdomain is closer to a separate site; doesn't inherit authority cleanly.
- **Skipping Hreflang because architecture "should" handle it.** No architecture replaces Hreflang.
- **Mixed architecture without justification.** US + UK on subdirectories, France on ccTLD — sometimes correct (France-specific brand presence) but should be reasoned.
- **Wrong ccTLD code.** `.uk` doesn't exist (use `.co.uk`); `.us` rare for US presence; `.gb` doesn't exist as ccTLD.
- **Ignoring CMS limits.** Some platforms limit architectural patterns; verify before deciding.
- **Not planning per-market hosting.** ccTLDs in some markets benefit from local hosting; subdirectories rarely do.
- **Migration without redirect plan.** Architecture migration without 301 mapping destroys ranking.

## Skills in this toolkit

- **[decide-multi-language-architecture](../../../skills/international/decide-multi-language-architecture/SKILL.md)** — produces the architectural decision document covering trade-off analysis (SEO equity inheritance, operational cost, geo-signal strength, brand integrity, CMS compatibility), market-specific norms, recommendation per market, and migration-cost forecast if change is implied. Output is the decision artefact stored in the per-business CLAUDE.md decisions log. Run before any multi-market expansion.

## Related topics

- **[01. Hreflang](../01.%20Hreflang/README.md)** — Hreflang is required regardless of architecture.
- **[03. Geo Targeting](../03.%20Geo%20Targeting/README.md)** — architecture is one of several geo-signals.
- **[04. Localization](../04.%20Localization/README.md)** — content layer that fills the architecture.
- **[02. On-page SEO / 04. URL Structure](../../02.%20On-page%20SEO/04.%20URL%20Structure/README.md)** — multi-market URL conventions live here.
- **[03. Technical SEO / 09. Site Migration](../../03.%20Technical%20SEO/09.%20Site%20Migration/README.md)** — architecture migration is a major migration event.

## Further reading

- [Google — International and Multilingual Sites](https://developers.google.com/search/docs/specialized/international/) — canonical Google guidance.
- [Aleyda Solis — International SEO Architecture Decision Tree](https://www.aleydasolis.com/) — practitioner gold standard with worked examples.
- [Search Engine Journal — ccTLD vs Subdirectory vs Subdomain](https://www.searchenginejournal.com/) — comparison content with case studies.
- [Bartosz Goralewicz — Multi-Region SEO Strategy](https://www.onely.com/) — strong on the trade-off discipline.
- [Moz — International SEO Architecture Guide](https://moz.com/) — fundamentals reference.
