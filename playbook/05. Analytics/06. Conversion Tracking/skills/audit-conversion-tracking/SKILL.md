---
name: audit-conversion-tracking
description: Produces a structured conversion-tracking audit covering event implementation (event firing correctness, parameter completeness), conversion / key-event definitions (right events marked; no double-counting), ecommerce parameters (`items`, `transaction_id`, `value`, `currency`), attribution-model choice and report alignment, Consent Mode v2 (EU/UK requirement), source-of-truth triangulation (GA4 vs Shopify / payment processor / CRM), cluster-attribution capability (custom dimension or BigQuery-side mapping), and server-side tracking (where applicable). Output is a prioritised fix list with severity (P0 / P1 / P2), each issue's user-visible impact, root cause, and effort estimate. Use whenever the user asks to "audit conversion tracking," "are our conversions tracking correctly," "GA4 numbers don't match Shopify," "verify our attribution," "review conversion measurement," "check Consent Mode," or before any SEO revenue claim is reported. Also use as a quarterly cadence skill — conversion tracking drifts and a quarterly audit catches drift before reports become unreliable. Do not use to set up conversion tracking from scratch (point the user to GA4 official docs) or to do a quarterly traffic analysis (use `analyse-traffic-patterns`).
---

# Audit Conversion Tracking

This skill produces a structured conversion-tracking audit. Output is a prioritised fix list with severity, root cause, impact, fix, and verification per issue.

The skill is opinionated about a few things: every brand should triangulate against source-of-truth (Shopify / payment processor / CRM); attribution model choice is a documented decision (not a default to ignore); Consent Mode v2 is non-negotiable in EU/UK; cluster-attribution capability is increasingly necessary for SEO ROI reporting; conversion tracking drifts and quarterly re-audit is the safety valve.

## When to use this skill

- The user is preparing to report SEO revenue and wants confidence in the data.
- The user has noticed GA4-vs-source-of-truth discrepancies.
- The user is launching a major SEO investment and wants the conversion measurement clean upfront.
- The user is running a quarterly analytics review.

## When NOT to use this skill

- The user wants to set up conversion tracking from scratch (point to GA4 official docs; this is an audit).
- The user wants to audit GA4 broadly — use `audit-ga4-setup` (overlaps; conversion-tracking is the deeper slice).
- The user wants to analyse conversion data — use `analyse-traffic-patterns`.
- The user wants the SEO KPI dashboard — use `define-seo-kpis`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`. Critical sections: products/services (3) for goal-event identification, goals (7).
2. **GA4 access** — required. Need to inspect events, conversions, attribution settings.
3. **Source-of-truth data source** — required for triangulation. Shopify / WooCommerce / payment processor / CRM. 30-day window of conversions and revenue.
4. **Tag manager / data layer access** — preferred. GTM container (Web + Server-side if applicable).
5. **Geographic operations** — required. EU / UK presence triggers Consent Mode v2 review.
6. **Reporting destinations** — list of dashboards / reports referencing conversion data (Looker Studio, internal reports). Audit needs to flag attribution-model mismatches.
7. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md` if available. Cluster-attribution capability is part of the audit.

If GA4 access or source-of-truth data is missing, ask. Audit can't proceed without both.

## Process

1. **Goal-event identification.** Confirm which events should be conversions for this business model.
   - Ecommerce: `purchase`.
   - Subscription / SaaS: `sign_up`, `start_trial`, `subscribe`.
   - B2B / services: `generate_lead`, `book_meeting`, `submit_form`.
   - Content / media: depends on monetisation model.
   - Verify only goal events are marked as conversions (funnel events should NOT be conversions).
2. **Event implementation.** For each goal event:
   - Event firing correctly (verify in DebugView / GTM Preview).
   - All required parameters populated.
   - Event firing once per real conversion (no duplicate fires).
   - Cross-domain handled if applicable.
3. **Ecommerce parameter audit.** For ecommerce specifically:
   - `purchase` event has `transaction_id`, `value`, `currency`, `items` array.
   - `items` array populated (item_id, item_name, item_category, price, quantity).
   - All 5 funnel events firing in order (`view_item_list`, `view_item`, `add_to_cart`, `begin_checkout`, `purchase`).
   - Refunds tracked if applicable.
4. **Attribution model.**
   - Reporting attribution model identified (DDA, last-click, first-click, linear, position-based, time-decay).
   - Document the decision: which model, why, where reported.
   - Cross-check downstream reports (Looker Studio, internal): do they all use the documented model? Flag mismatches.
   - For SEO specifically: compute organic-search revenue under DDA and last-click; compare; document the gap.
5. **Consent Mode v2.**
   - EU/UK presence assessed (% of traffic).
   - Consent Mode v2 implementation status: yes / partial / no.
   - Test: verify GA4 receives `consent_default` and updates correctly.
   - If EU traffic >5% and Consent Mode v2 missing: flag as P0 (legal + measurement issue).
6. **Source-of-truth triangulation.**
   - 30-day window: conversions + revenue from GA4 vs Shopify / payment processor / CRM.
   - Acceptable: ≤5% discrepancy.
   - 5-10%: investigate but acceptable.
   - 10%: likely measurement issue; flag as P0 / P1 depending on cause.
7. **Cluster-attribution capability.**
   - Is there a way to attribute conversions to the cluster that brought the visitor in?
   - Options: custom dimension at session start; landing-page-to-cluster mapping in BigQuery; entry-page custom dimension.
   - If none: flag as P1 (limits SEO ROI reporting capability).
8. **Server-side tracking (large brands).**
   - GTM Server-side container in place?
   - Flag as P2 for small brands; P1 for ecom brands at scale (>$5m/yr).
9. **Cross-device / cross-session.**
   - User-ID setup if available (CRM-side ID linked to GA4).
   - Cookie-based stitching working.
10. **Conversion value population.**
    - `value` parameter populated on `purchase` and other goal events where applicable.
    - Currency consistent.
11. **Permissions hygiene.**
    - GA4 / GTM Editor access reviewed; remove stale.
12. **Write the audit.**

## Output format

```markdown
# Conversion Tracking Audit — [Business name]

**Audit date:** [date]
**GA4 property:** [ID]
**Source-of-truth:** [Shopify / Stripe / CRM / etc.]
**Auditor:** [name]

## Executive summary
- **P0 issues:** [n]
- **P1 issues:** [n]
- **P2 issues:** [n]
- **Triangulation:** GA4 [$n] vs source-of-truth [$n] → [n%] discrepancy
- **Estimated total fix effort:** [n] days
- **Headline:** [1-2 sentence summary]

## Findings

### P0 — Critical (data is wrong; reporting unreliable)

#### [Issue title]
- **Symptom:** [user-visible]
- **Root cause:** [technical reason]
- **Impact:** [reports / decisions affected]
- **Fix:** [steps]
- **Effort:** [hours / days]
- **Verification:** [how to confirm]

[Repeat]

### P1 — Material
[Same structure]

### P2 — Hygiene
[Same structure]

## Configuration summary

### Goal events
| Event | Firing? | Marked as conversion? | Parameters complete? |
|-------|---------|------------------------|----------------------|
| purchase | yes | yes | partial (`items` missing) |
| add_to_cart | yes | **incorrectly marked as conversion** | yes |
| ... | ... | ... | ... |

### Ecommerce parameter audit
| Event | items | transaction_id | value | currency |
|-------|-------|---------------|-------|----------|
| purchase | partial (~85%) | yes | yes | yes |
| view_item | yes | n/a | yes | yes |
| add_to_cart | yes | n/a | yes | yes |
| begin_checkout | yes | n/a | yes | yes |
| view_item_list | **missing** | n/a | yes | yes |

### Attribution
- **Reporting model in GA4:** DDA
- **Reporting model in Looker Studio reports:** last-click
- **30-day organic revenue (DDA):** [$n]
- **30-day organic revenue (last-click):** [$n]
- **Gap:** [n%]
- **Flag:** **mismatch** — Looker Studio reports under-credit organic by [n%]

### Consent Mode v2
- **EU/UK traffic share:** [%]
- **Implementation:** [yes / partial / no]
- **Estimated under-counted EU conversions:** [%]

### Source-of-truth triangulation
| Metric | GA4 (30d) | [Source-of-truth] | Discrepancy | Verdict |
|--------|-----------|-------------------|-------------|---------|
| Conversions | n | n | n% | Pass / Investigate |
| Revenue | $n | $n | n% | Pass / Investigate |
| AOV | $n | $n | n% | Pass / Investigate |

### Cluster attribution
- **Capability:** [yes (mechanism) / no]
- **Recommendation:** [implementation path if missing]

### Server-side tracking
- **Status:** [yes / no / N/A]
- **Estimated signal recovery if implemented:** [n%]

### Cross-device / user-ID
- **User-ID:** [yes / no]
- **Cross-device stitching:** [working / partial / unavailable]

### Permissions
- **Stale users:** [n]

## Prioritised fix list (one-page version)
| # | Issue | Severity | Effort | Owner |
|---|-------|----------|--------|-------|
| 1 | `items` missing on ~15% of purchases | P0 | 3-5 days | Dev |
| 2 | `add_to_cart` marked as conversion | P0 | 30 min | Marketing |
| 3 | Consent Mode v2 partial | P0 | 1-2 days | Dev |
| 4 | Looker Studio reports use last-click vs GA4 DDA | P1 | 4 hrs | Marketing |
| 5 | No cluster attribution capability | P1 | 2-3 days | Analytics |
| ... | ... | ... | ... | ... |

## Recommendations beyond fixes
- [ ] Re-audit in 90 days.
- [ ] Standardise attribution model across all reports.
- [ ] Document the choice in the per-business CLAUDE.md.
- [ ] Set up cluster-attribution before next strategic review.
- [ ] Schedule quarterly conversion-tracking re-audit.

## Open questions for the user
- [ ] Confirm preferred attribution model (DDA recommended for most).
- [ ] Confirm budget for server-side tracking (if applicable).
- [ ] Confirm cluster-attribution implementation owner.
- [ ] Confirm Consent Mode v2 implementation owner.
```

Save the produced file to `businesses/<slug>/analytics/conversion-tracking-audit-[YYYY-MM-DD].md`. After writing, tell the user the file path so they can open it.

## Quality bar

- Every finding has severity, root cause, impact, fix, effort, and verification.
- P0 / P1 / P2 buckets used consistently (P0 = data wrong; P1 = data incomplete; P2 = hygiene).
- Triangulation done against source-of-truth on conversions, revenue, AOV.
- Attribution-model audit covers GA4 default + downstream reports; mismatch flagged.
- Consent Mode v2 status checked if EU/UK traffic >5%; flagged P0 if missing.
- Cluster-attribution capability assessed.
- Server-side tracking flagged as recommendation for ecom brands at scale.
- Output actionable for both technical and marketing owners.

## Common mistakes to avoid

- Don't trust GA4 numbers without source-of-truth triangulation. The discrepancy is the signal.
- Don't ignore last-click vs DDA mismatches. They materially change the SEO revenue story.
- Don't propose server-side tracking for tiny brands. Cost > benefit below ~$1m/yr ecom.
- Don't skip Consent Mode v2 in EU/UK. Legal + measurement.
- Don't over-mark conversions. Funnel events should NOT be conversions.
- Don't audit without checking attribution alignment in downstream reports. Single source of truth fails when reports disagree.
- Don't neglect cluster-attribution. SEO ROI reporting at the cluster level is increasingly the standard.
- Don't audit and walk away. Schedule re-audit in 90 days.

## Example

**Input (abbreviated):** Field & Sun. GA4 + Shopify + Looker Studio. EU + US operations.

**Output (abbreviated):**

P0 (3):

- `items` missing on ~15% of purchases (custom checkout flow); 3-5 days dev.
- `add_to_cart` marked as conversion; 30 min unmark.
- Consent Mode v2 partial; 1-2 days dev.

P1 (3):

- Looker Studio uses last-click while GA4 default is DDA; $124k vs $147k organic; 4 hrs to align.
- No cluster attribution; 2-3 days analytics work to add via BigQuery mapping.
- `view_item_list` event missing in Shopify-GA4 integration.

P2 (2):

- 3 ex-contractors retain GA4 Editor access.
- Server-side tracking absent; recommended for current scale; 4-6 weeks dev.

Triangulation: GA4 30-day revenue $124k vs Shopify $146k → 15% gap. Mostly explained by (a) ~3% under-count from missing `items` on ~15% of orders; (b) ~10% under-count from Consent Mode partial implementation; (c) ~2% other (cross-device).

Attribution: GA4 30-day DDA-organic $147k vs last-click $124k. Looker Studio reports last-click; team had been reporting "$124k organic" — should be $147k under DDA.

Cluster attribution: not currently possible. Recommend BigQuery-side landing-page → cluster mapping (2-3 days analytics).

Server-side: Field & Sun at $5-10m/yr is at the threshold; recommend P2 / next-quarter scoping.

Total fix effort: 6-7 days dev + 1 day marketing config + 2-3 days analytics.

Re-audit scheduled: 2026-08-01.

Saved to `businesses/field-and-sun/analytics/conversion-tracking-audit-2026-05-01.md`.
