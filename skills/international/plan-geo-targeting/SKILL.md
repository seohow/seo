---
name: plan-geo-targeting
description: Produces a geo-targeting strategy: GSC International Targeting settings, server signals, local content cues, and per-market signal plan. Use when targeting multiple countries.
---

# Plan Geo Targeting

This skill produces the geo-targeting strategy + audit. Output covers all geo signals + per-market remediation list.

The skill is opinionated about a few things: Hreflang is required but not sufficient; same-language markets need explicit signalling; mixed signals (US currency + UK phone) are worse than absent signals; per-market off-page is part of geo targeting; quarterly re-audit catches drift.

## When to use this skill

- The user operates same-language multi-market (US + UK + AU English).
- The user has Hreflang in place but suspects mis-targeting.
- The user is investigating UK / AU / CA conversion gaps vs US.
- The user is running a quarterly international review.

## When NOT to use this skill

- The user wants to audit Hreflang specifically — use `audit-hreflang`.
- The user wants architecture decision — use `decide-multi-language-architecture`.
- The user wants content localisation (translation, cultural adaptation) — use `plan-localisation`.
- The user has single-market site — geo targeting doesn't apply.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical sections: products/services (3), markets / geographic operations.
2. **Markets in scope** — required.
3. **Architecture** — required (subdirectory / subdomain / ccTLD per market).
4. **Existing Hreflang audit** — strongly preferred. From `audit-hreflang`.
5. **Priority pages per market** — required. Homepage, pillar, top PDPs, key landing pages.
6. **GSC access** — required. International Targeting setting per property.
7. **Per-market conversion data** — strongly preferred. Conversion rate by market.

If markets + architecture are missing, ask. Geo targeting is anchored to specific markets.

## Process

1. **Hreflang reinforcement.**
   - Cross-reference `audit-hreflang` if recent. Confirm clean.
   - If issues remain, flag and route to Hreflang remediation first.
2. **GSC International Targeting.**
   - Per gTLD property (subdirectory / subdomain): set International Targeting to specific country.
   - For ccTLD: not applicable (Google infers country from TLD).
   - Document settings + verify.
3. **Server / CDN audit.**
   - Server location.
   - CDN endpoints per market (Cloudflare / Fastly / etc.).
   - Note: weak signal in 2026; flag if obviously sub-optimal but not high-priority.
4. **Currency display audit.**
   - Per priority page per market: which currency is shown?
   - Flag mismatches (USD on UK page = critical fail).
5. **Local content cues audit.**
   - Phone numbers (UK pages → UK phone; US pages → US phone).
   - Addresses (if displayed).
   - Shipping thresholds (£35 vs $35 vs €35).
   - Units (oz vs ml; miles vs km; °F vs °C).
   - Spelling (US English vs UK English vs Australian English).
6. **Imagery audit.**
   - Generic-global imagery (acceptable cross-market).
   - US-centric imagery on UK pages (neutral or culturally specific).
   - Recommend market-specific imagery where conversion gap is large.
7. **Local backlink share.**
   - Per market: % of backlinks from same-country domains.
   - UK pages should have ≥30% UK-domain backlinks.
   - Flag if share is low; recommend per-market off-page campaign.
8. **Per-market signal consistency.**
   - Aggregate signal review per market: Hreflang + GSC + server + currency + local cues + imagery + backlinks.
   - Flag any mixed signal (US currency + UK phone, etc.).
9. **Per-market priority + remediation.**
   - Rank markets by conversion gap vs primary market.
   - Highest-gap market = highest-priority remediation.
10. **Write the plan.**

## Output format

```markdown
# Geo Targeting Strategy + Audit — [Business name]

**Plan date:** [date]
**Markets in scope:** [list]
**Architecture:** [subdirectory / subdomain / ccTLD per market]
**Auditor:** [name / role]

## Executive summary
- Markets with consistent geo signals: [list].
- Markets with signal mismatches: [list].
- Highest-priority remediation market: [market + reasoning].
- Estimated fix effort: [days].
- **Headline:** [1-2 sentences].

## Per-market signal audit

### [Market: e.g. UK / en-gb]

**Architecture:** subdirectory at `brand.com/en-gb/`.

| Signal | Status | Notes |
|--------|--------|-------|
| Hreflang | ✅ correct (per audit) | |
| GSC International Targeting | ✅ set to UK | |
| Server / CDN | ⚠ no UK-specific endpoint | Low priority |
| Currency display | ✅ GBP on PDPs | |
| Phone number | ❌ US support number on UK PDPs | Critical |
| Address | ✅ no US address shown | |
| Shipping threshold | ❌ "$35" displayed (USD) | Critical |
| Units | ✅ ml + °C | |
| Spelling | ⚠ inconsistent (some "color", some "colour") | High |
| Imagery | ⚠ US-centric on PDPs | Medium |
| Local-backlink share | 12% (target 30%+) | High |

**Per-market verdict:** signal mismatch on phone + shipping; spelling inconsistency; imagery + backlinks need work.

**Remediations (priority order):**
| # | Issue | Severity | Effort |
|---|-------|----------|--------|
| 1 | UK phone numbers on UK PDPs | Critical | 2 hrs (template) |
| 2 | UK shipping threshold (£) on UK pages | Critical | 4 hrs (template) |
| 3 | UK English spelling pass | High | 1 day (content) |
| 4 | UK-specific imagery (or neutral) | Medium | 2-4 weeks (photo shoot) |
| 5 | Per-market off-page campaign | High | Q2 deliverable (per `plan-link-building-campaign`) |

[Repeat per priority market]

## Cross-market patterns
| Pattern | Markets affected | Root cause | Fix |
|---------|------------------|------------|-----|
| Currency display defaults to USD | UK, FR, DE | CMS default | Update CMS market-specific currency config |
| Phone shows US number globally | UK, FR, DE, IT | Single phone field in PDP template | Add per-market phone field |
| Spelling US English globally | UK, AU | Content-system default | Add per-market style guide + linter |

## Per-market off-page strategy
| Market | Current local-backlink share | Target | Action |
|--------|------------------------------|--------|--------|
| UK | 12% | 30% | UK PR campaign + UK guest posting (handoff to Off-page) |
| France | n/a (new) | 30% | French PR + French publications |
| Germany | n/a (new) | 30% | German PR + German publications |

## Server / CDN
- Current: Cloudflare global.
- Recommendation: acceptable for current scale; consider regional endpoints if conversion gaps persist after content remediations.

## Acceptance criteria
- [ ] Per-market signal consistency: no mixed signals on priority pages.
- [ ] Currency, phone, address, shipping all market-specific.
- [ ] Spelling consistent per market.
- [ ] GSC International Targeting set per property.
- [ ] Per-market off-page campaign initiated.
- [ ] Re-audit scheduled in 90 days.

## Risks + watchouts
3-5 specific risks. E.g. "Per-market imagery requires photo budget"; "Spelling pass requires content-team capacity + ongoing linter discipline"; "Per-market off-page lifts take 6-12 months to materialise — plan patience"; "CMS may not support per-market phone numbers natively; verify before estimating effort"; "GSC International Targeting setting requires Owner permission per property."

## Open questions
- [ ] Confirm per-market off-page priority + budget.
- [ ] Confirm CMS support for per-market content fields.
- [ ] Confirm photo budget for market-specific imagery.
- [ ] Confirm content-team capacity for spelling pass.
```

Save the produced file to `businesses/<slug>/international/geo-targeting-plan-[YYYY-MM-DD].md`. Create the `international/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Per-market audit covers all signals (Hreflang, GSC, server, currency, content cues, imagery, backlinks).
- Mixed-signal flags explicit (US currency + UK phone).
- Cross-market patterns identified for template-level fixes.
- Per-market off-page strategy referenced.
- Server / CDN flagged but not over-prioritised.
- Remediations prioritised + effort-estimated.

## Common mistakes to avoid

- Don't audit Hreflang twice — cross-reference `audit-hreflang`.
- Don't over-prioritise server location. Weak signal in 2026.
- Don't ignore per-market off-page. Local backlinks are part of geo targeting.
- Don't skip imagery audit. Cultural fit affects conversion.
- Don't audit only homepage. Per-market signals must apply across templates.
- Don't propose imagery-shoot for low-priority markets. Effort vs return.
- Don't audit and walk away. Quarterly cadence.

## Example

**Input (abbreviated):** Field & Sun. US + UK on subdirectories. Hreflang clean post-audit. UK conversion rate 25% below US. UK Hreflang correct.

**Output (abbreviated):**

UK signal audit: Hreflang ✅; GSC ✅ UK targeting set; server/CDN acceptable; currency ✅ GBP; phone ❌ US number on UK PDPs (Critical); shipping ❌ "$35" displayed (Critical); spelling ⚠ inconsistent (High); imagery ⚠ US-centric (Medium); UK-domain backlink share 12% vs 30% target (High).

Cross-market: phone-field + shipping-field templates default to US values; spelling lacks per-market style enforcement.

Remediations: 5 items; total effort ~1-2 weeks dev + content + 4 weeks photo + ongoing off-page work.

Estimated UK conversion lift if all remediations ship: 10-20%.

Saved to `businesses/field-and-sun/international/geo-targeting-plan-2026-05-01.md`.
