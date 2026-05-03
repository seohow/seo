# Geo Targeting

> Telling Google which market a page is for. Combines Hreflang, GSC settings, server location, ccTLD choice, and content cues. Distinct from language targeting — French Canadian and French French are the same language but different markets.

## What it is

Geo targeting is the practice of signalling to Google (and other search engines) the geographic market a page is intended for. It's distinct from *language targeting*: a page can be in French and target France (`fr-fr`), Quebec (`fr-ca`), Belgium (`fr-be`), or Switzerland (`fr-ch`) — same language, different markets. The signals combine: Hreflang (the strongest), URL pattern (subdirectory / subdomain / ccTLD), server / hosting location, GSC International Targeting setting (deprecated for ccTLDs but still useful for gTLD), local content cues (currency, addresses, phone numbers, market-specific imagery, local references), and local backlinks.

For Field & Sun, geo targeting matters when the brand operates in multiple markets, especially same-language markets (US English vs UK English vs Australian English) where Google's default targeting can fail. Without explicit signals, Google guesses — sometimes well, sometimes badly.

## Why it matters

Three reasons. First, **same-language markets need explicit geo signalling**. US English, UK English, Australian English, Canadian English, Indian English — same language, distinctly different markets, distinctly different SERPs. Without geo targeting, Google may serve US pages to UK users (or vice versa), with US pricing / shipping / availability mismatches.

Second, **geo targeting is not just Hreflang**. Hreflang is the strongest single signal but not sufficient. Other signals (URL, hosting, GSC, content cues, local backlinks) reinforce or contradict. Inconsistent signals confuse Google.

Third, **targeting wrong market is worse than no targeting**. A US page that ranks in UK SERPs but converts at half the rate damages revenue and aggregate ranking signals. Better to send UK visitors to a UK page than to a generic page mistargeted as US.

## Core concepts

- **Country targeting vs language targeting.** Country: which market (US, UK, FR). Language: which language (en, fr, de). Most pages target a specific language-region pair.
- **Geo signals (in roughly decreasing strength).**
  1. ccTLD (highest country signal).
  2. Hreflang (per page, explicit; covered separately).
  3. GSC International Targeting setting (deprecated for ccTLDs, still useful for gTLD subdirectories).
  4. Server location / hosting CDN.
  5. Local content cues (currency, phone, address, references).
  6. Local backlinks (per-market authority).
- **Hreflang strength.** Strongest single signal Google supports for language-region targeting on gTLDs (subdirectory or subdomain).
- **GSC International Targeting setting.** Set per property in GSC. Available for gTLD properties; not applicable to ccTLDs (which inherit country from the TLD itself).
- **Server location.** Used to be a strong signal; less so in 2026 (CDNs make server location ambiguous). Still considered weakly.
- **Currency display.** Strong content signal: USD vs GBP vs EUR per page tells Google + users which market.
- **Phone numbers, addresses, business hours.** Local content cues — UK phone number on a UK page, etc.
- **Local-language nuances.** US English vs UK English: spelling (color vs colour), terminology (cookie vs biscuit), units (miles vs km), measurements (oz vs ml). Google parses these as signal.
- **Local backlinks.** A UK page with primarily UK domain backlinks is recognised as UK-targeted. Per-market off-page strategy reinforces.
- **Multi-targeting risk.** Trying to target both US and UK with one page (no Hreflang, ambiguous content) usually under-performs in both.

## A worked example

> **Scenario:** Field & Sun has US + UK markets on subdirectories (`fieldandsun.com/en-us/`, `/en-gb/`). Hreflang is implemented (post-audit). UK conversion rate is improving but still 25% below US. Investigation suggests UK visitors are sometimes still landing on US pages despite Hreflang.
>
> **Step 1.** Run `plan-geo-targeting`. Skill audits all geo signals across UK pages.
>
> **Step 2.** Findings:
>
> - **Hreflang:** correct (post-audit).
> - **GSC International Targeting:** UK property has UK targeting set; US property has US targeting set. Healthy.
> - **Server / CDN:** Cloudflare global, no UK-specific endpoint. Acceptable but not optimal.
> - **Currency display:** UK pages show GBP. Good.
> - **Phone numbers:** UK PDPs display US support phone. Mismatch.
> - **Local content cues:**
>   - UK page imagery same as US (no UK-skin-tone diversity in product photography).
>   - "Free shipping over $35" displayed on UK pages (USD value).
>   - Spellings inconsistent (some pages use US "color", others UK "colour").
> - **Local backlinks:** UK-domain backlink share is 12% (vs 40% expected for UK-targeted pages); brand has been doing US-centric off-page.
>
> **Step 3.** Recommendations:
>
> - Update phone numbers on UK PDPs to UK support number.
> - Standardise UK pages on UK English (spelling pass).
> - Display GBP-currency shipping thresholds on UK pages.
> - Re-shoot UK product imagery with UK-relevant context (or use neutral imagery).
> - Run UK-specific off-page campaign (UK publications, UK journalists) to lift UK-domain backlink share.
> - Consider Cloudflare UK-specific endpoint (low priority).
>
> **Step 4.** Result: 90 days post-fix, UK conversion rate improves from 75% of US to 92%; UK organic non-branded traffic +18%.

## How to do it

1. **Run `plan-geo-targeting`.** Skill audits all geo signals per market.
2. **Confirm Hreflang.** Per `audit-hreflang`. Required.
3. **Set GSC International Targeting.** Per gTLD property; UK property → UK; US property → US.
4. **Audit currency display.** Each market sees its currency.
5. **Audit local content cues.** Phone numbers, addresses, shipping thresholds, units, spelling.
6. **Audit imagery.** Generic-global vs market-specific.
7. **Plan local backlink strategy.** Per market off-page (handoff to Off-page).
8. **Server / CDN review.** Acceptable for most brands; high-priority for ccTLDs in some markets.
9. **Document decisions.** Per market, which signals are reinforced.
10. **Re-audit quarterly.** New pages ship without all signals; quarterly catches drift.

## Common pitfalls

- **Relying only on Hreflang.** Strongest signal but not sufficient; reinforce with content cues + local off-page.
- **Currency mismatch.** USD on UK pages, GBP on US pages. Hard fail for trust + conversion.
- **Phone-number / address mismatch.** UK PDP showing US phone number signals US targeting + damages trust.
- **Same imagery globally.** Acceptable if neutral; problematic if culturally US-centric on UK pages.
- **No local backlink strategy.** UK pages with all-US backlinks signal weak UK targeting.
- **GSC International Targeting forgotten.** Free signal; underused.
- **Same-language ambiguity.** US English vs UK English without explicit signalling — Google guesses, often badly.
- **Server location obsession.** CDN ubiquity makes server location a weak signal; don't over-invest.
- **Targeting too many markets with one page.** "Global" pages targeting EN broadly tend to under-perform vs market-specific pages.
- **Mixing market signals.** UK page with US currency + UK phone is contradictory; clean up.

## Skills in this toolkit

- **[plan-geo-targeting](../../../skills/international/plan-geo-targeting/SKILL.md)** — produces a geo-targeting strategy + audit covering Hreflang reinforcement, GSC International Targeting setting, server / CDN strategy, currency display, local content cues (phone / address / units / spelling), imagery, local backlink-strategy plan, and per-market signal-consistency check. Output is the per-market geo-signal plan with prioritised remediations. Quarterly cadence.

## Related topics

- **[01. Hreflang](../01.%20Hreflang/README.md)** — strongest single geo signal.
- **[02. Multi Language](../02.%20Multi%20Language/README.md)** — architecture choice underpins geo targeting.
- **[04. Localization](../04.%20Localization/README.md)** — content layer that fills geo signals.
- **[06. Off-page SEO](../../06.%20Off-page%20SEO/README.md)** — local backlinks per market.
- **[02. On-page SEO](../../02.%20On-page%20SEO/README.md)** — currency / address / spelling cues live here.

## Further reading

- [Google — International Targeting Documentation](https://developers.google.com/search/docs/specialized/international/managing-multi-regional-sites) — canonical reference.
- [Aleyda Solis — Geo-Targeting Decision Framework](https://www.aleydasolis.com/) — practitioner-grade trade-off analysis.
- [Greg Gifford — Local + International Crossover](https://www.searchenginejournal.com/) — strong on same-language multi-market patterns.
- [Distilled / Tom Anthony — Multi-Region Strategies](https://www.tomanthony.co.uk/) — fundamentals reference.
- [Sistrix — International SERP Analysis](https://www.sistrix.com/) — useful for monitoring per-market visibility.
