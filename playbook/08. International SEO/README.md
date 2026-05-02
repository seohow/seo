# 08. International SEO

> Operating SEO across multiple markets, languages, and currencies. The discipline of telling Google "this version of the page is for these users in this market" — and getting it right. The most failure-prone category in the toolkit, and one of the most-rewarding when it works.

## What this category covers

International SEO is the practice of ranking the right content for the right audience in the right market. It spans architectural decisions (subdomains vs subdirectories vs ccTLDs), Hreflang signalling (telling Google which version is for which market), geo-targeting (country / region intent), and localisation (translation + cultural adaptation + market-specific currency / pricing / regulatory). Done well, the brand earns rankings in multiple markets without cannibalising itself; done badly, the brand creates duplicate content, confuses Google, and ranks nowhere properly.

For Field & Sun, international SEO matters when the brand expands beyond its home market. The brand currently sells in the US + UK; if it adds EU markets (France, Germany, Italy) or new English markets (Australia, Canada), the site architecture, Hreflang implementation, and localisation strategy all need to be in place from launch. Teams that skip international SEO planning and "just add country pages" routinely produce duplicate-content problems, inconsistent rankings, and currency / shipping / pricing surprises that damage trust.

## How the sub-topics fit together

```
Architecture                Signalling             Adaptation
────────────                ──────────             ──────────
02. Multi Language          01. Hreflang           04. Localization
03. Geo Targeting           (tells Google
                             which version)
```

1. **[01. Hreflang](01.%20Hreflang/README.md)** — the technical signal that tells Google which page is for which language / market. The most-failure-prone implementation in international SEO; small mistakes compound across hundreds of pages.
2. **[02. Multi Language](02.%20Multi%20Language/README.md)** — the architectural decision: subdomain (`fr.brand.com`) vs subdirectory (`brand.com/fr/`) vs ccTLD (`brand.fr`). Each has trade-offs in SEO equity, operational cost, and brand integrity. Hard to reverse.
3. **[03. Geo Targeting](03.%20Geo%20Targeting/README.md)** — telling Google which market a page is for. Combines Hreflang, GSC settings, server location, ccTLD choice, and content cues. Distinct from language targeting.
4. **[04. Localization](04.%20Localization/README.md)** — the content layer. Translation (machine vs human), cultural adaptation, currency / pricing, regulatory compliance per market, market-specific brand voice. Where international SEO becomes international UX.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Architecture (before launch):**

1. Run `decide-multi-language-architecture` to choose subdomain vs subdirectory vs ccTLD. Hard to reverse; pick deliberately.
2. Run `plan-geo-targeting` to decide which markets are in scope, what intent each version targets.

**Pass 2 — Implementation:**

1. Run `audit-hreflang` once Hreflang is implemented to validate the signalling is correct (or fix it).
2. Run `plan-localisation` to design the content adaptation per market — translation method, cultural adaptation, currency / pricing, regulatory.

**Pass 3 — Operations (ongoing):**

1. Quarterly Hreflang audit — international setups drift as new pages ship.
2. Quarterly localisation review — market-specific content quality, regulatory compliance.

## Pre-requisites and dependencies

The International SEO category consumes outputs from earlier categories:

- `businesses/<slug>/business_profile.md` — markets in scope (section 7 / new "markets" section if applicable).
- `businesses/<slug>/clusters/cluster-map.md` — cluster strategy may be market-specific or shared.
- `businesses/<slug>/competitor-analysis/scope.md` — competitors are market-specific; international competitor analysis is a different exercise.

It produces inputs for downstream categories:

- Per-market Analytics (separate GSC / GA4 properties or shared with country segmentation).
- Per-market Off-page (separate link-building per market — local publications + local journalists).
- Per-market Content SEO (per-market editorial calendars).

## Skills you'll use in this category

The full inventory across the 4 sub-topics:

- **[audit-hreflang](01.%20Hreflang/skills/audit-hreflang/SKILL.md)** — validate Hreflang implementation (consistency, return-tags, correct codes, x-default).
- **[decide-multi-language-architecture](02.%20Multi%20Language/skills/decide-multi-language-architecture/SKILL.md)** — choose between subdomain, subdirectory, or ccTLD; document trade-offs.
- **[plan-geo-targeting](03.%20Geo%20Targeting/skills/plan-geo-targeting/SKILL.md)** — define market scope, GSC settings, server / ccTLD strategy, market-specific signals.
- **[plan-localisation](04.%20Localization/skills/plan-localisation/SKILL.md)** — design content adaptation per market; translation method; cultural adaptation; currency / regulatory.

## Common pitfalls

- **Treating international SEO as "translate the site."** Translation is a third of the work. Architecture, Hreflang, geo-targeting, and cultural adaptation are the rest.
- **Wrong architecture choice early.** Subdomain vs subdirectory vs ccTLD is hard to reverse without major migration cost. Decide deliberately.
- **Hreflang implementation errors.** Most international sites have at least one Hreflang issue (missing return tags, wrong codes, x-default omitted). Audit regularly.
- **Machine-translated content treated as final.** Google detects low-quality machine translation and ranks accordingly. Either invest in human translation (or quality-reviewed machine output) or skip the market.
- **Currency / pricing mismatches.** US pages displaying USD to UK visitors, UK shipping rates surprised at checkout, etc. Damages trust + conversion.
- **Regulatory / compliance gaps.** EU GDPR, EU Cookie Directive, EU Accessibility Act, country-specific consumer-protection laws all apply per market.
- **No per-market analytics segmentation.** Aggregate analytics hides market-specific patterns; a UK-failing market looks fine in global rollup.
- **Duplicate content across markets.** UK English vs US English pages without Hreflang look like duplicates; Google picks one and ignores the other.
- **Forgetting cultural adaptation.** Beyond language: imagery, examples, references, claims, payment methods, shipping language. "We ship to your door" reads differently in markets where home delivery is uncommon.
- **Ignoring local search engines.** Outside English-language markets: Yandex (Russia, declining), Baidu (China, distinct ecosystem), Naver (Korea), Seznam (Czech Republic). Google isn't always dominant.

## Where to go after this

Once international setup is shipping:

- **[03. Technical SEO / 02. Indexing](../03.%20Technical%20SEO/02.%20Indexing/README.md)** — international Hreflang issues surface in GSC indexing reports.
- **[02. On-page SEO / 04. URL Structure](../02.%20On-page%20SEO/04.%20URL%20Structure/README.md)** — multi-market URL conventions live here.
- **[06. Off-page SEO](../06.%20Off-page%20SEO/)** — per-market link-building requires local publications.
- **[05. Analytics](../05.%20Analytics/)** — per-market segmentation in GA4 / GSC.
- **[04. Content SEO](../04.%20Content%20SEO/)** — per-market editorial calendars.
