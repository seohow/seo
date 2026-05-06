---
name: audit-ga4-setup
description: Use to audit ga4 setup; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Audit GA4 Setup

This skill produces a structured GA4 configuration audit. Output is a prioritised fix list — each issue has severity, root cause, user-visible impact, and effort estimate.

The skill is opinionated about a few things: GA4 setup drifts (audit quarterly); 50-70% of mid-size sites have at least one P0 / P1 issue (an audit will almost always find something); Consent Mode v2 is non-negotiable in EU / UK (no exceptions); ecommerce events without full `items` parameter are functionally broken (most common P0 issue); attribution model choice matters and should be documented (DDA vs last-click changes the org-search revenue attribution materially).

## When to use this skill

- The user has GA4 in place and wants confidence it's measuring correctly.
- The user is noticing data discrepancies (GA4 vs Shopify, GA4 vs CRM, GA4 vs ad platforms).
- The user just migrated from UA and wants to verify the migration is clean.
- The user is about to invest in SEO / paid / CRO and needs trustworthy baseline data.
- The user is running a quarterly analytics review.

## When NOT to use this skill

- The user wants to set up GA4 from scratch (point them to GA4's official setup docs; this is an audit, not setup).
- The user wants to analyse GA4 data — use `analyse-traffic-patterns`.
- The user wants to build a reporting dashboard — use `define-seo-kpis`.
- The user wants to audit GSC (not GA4) — use `audit-search-console-setup`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), goals (7). Goals shape which conversions matter.
2. **GA4 property access** — required (or screenshots / config exports). The skill needs visibility into property setup, events, conversions, audiences, ecommerce, attribution settings.
3. **Comparison data source** — strongly preferred. Shopify, WooCommerce, internal CRM, payment processor (Stripe). Used to triangulate GA4 conversion / revenue numbers.
4. **Geographic operations** — optional. EU / UK presence triggers Consent Mode v2 review.
5. **Existing reports** — optional. Looker Studio dashboards, monthly board reports. Helps identify what numbers stakeholders trust today (and which will move when fixes ship).

If GA4 access (or equivalent config visibility) is missing, ask. Audit can't proceed without seeing the actual configuration.

## Process

1. **Property structure.**
   - One GA4 property per business (cross-subdomain). Flag multi-property setups and recommend consolidation.
   - Stream(s) configured: web stream URL matches site URL; app streams included if mobile app exists.
   - Domain configuration: cross-domain measurement set up if site spans multiple domains.

2. **Internal traffic filtering.**
   - Internal IPs filtered (office, VPN, dev environments).
   - Developer-traffic filter set up (test users, QA accounts).
   - Filter is *active* (not just "testing" mode).

3. **Events audit.**
   - Default events firing (page_view, scroll, click, view_search_results, video_*).
   - Custom events for business-critical actions (newsletter signup, account creation, etc.).
   - Use DebugView to verify events fire with expected parameters.
   - Flag events that fire but never get used (clutter).

4. **Conversions audit.**
   - Conversions are *goal events*, not funnel events. Common error: `add_to_cart` marked as conversion.
   - Right conversions for the business: `purchase` (ecom), `generate_lead` (B2B), `sign_up` (subscription / freemium).
   - No double-counting (one event per real conversion; deduplication handled if events fire from multiple sources).
   - Conversion value populated where applicable.

5. **Ecommerce tracking.**
   - All 5 events firing in correct order: `view_item_list` → `view_item` → `add_to_cart` → `begin_checkout` → `purchase`.
   - `items` parameter populated on every event (item_id, item_name, item_category, price, quantity).
   - `currency` set on `purchase`.
   - `transaction_id` unique per purchase (no duplicate purchases in reports).
   - Refunds tracked if applicable.
   - Compare GA4 ecommerce revenue to Shopify / payment processor; flag >5% discrepancy.

6. **Audiences.**
   - Default audiences (All users, Purchasers) defined.
   - Business-specific audiences: organic-visitors, high-intent-non-purchasers, returning-customers, cluster-X-visitors.
   - Audiences linked to Google Ads if used (for retargeting).
   - Flag absence of audiences (most teams under-define).

7. **Attribution model.**
   - Reporting attribution model: data-driven (default), last-click, first-click, linear, position-based, time-decay.
   - Document which model is being used in reports.
   - Flag mismatch between GA4 default (DDA) and downstream Looker Studio reports (often last-click).
   - For SEO specifically: DDA usually credits more revenue to organic than last-click (which under-credits content / earlier touchpoints).

8. **Data retention.**
   - User and event data retention: should be 14 months (max). Default is 2 months.
   - Reset on new activity: enabled (default).
   - Critical: 2-month default makes YoY comparison impossible.

9. **Search Console integration.**
   - GSC linked to GA4 property.
   - "Search Console" reports available in GA4.
   - Note: requires Owner permission on both properties.

10. **BigQuery export.**
    - For sites doing meaningful SEO analysis: BigQuery export should be enabled (free).
    - Streaming or daily export depending on use case.
    - Flag absence; not P0 for small sites, P1 for mid-large.

11. **Consent Mode v2.**
    - Required in EU / UK (legal requirement, not optional).
    - Implementation via GTM consent template or direct config.
    - Test: verify GA4 receives `consent_default` and updates correctly.
    - Flag missing implementation as P0 if EU traffic > 5%.

12. **Cross-account hygiene.**
    - Property linked to right Google Ads account(s).
    - Property not linked to *wrong* Google Ads account (data leak risk).
    - Permission audit: who has Edit / Admin access; remove ex-employees / contractors.

13. **Triangulation.**
    - Compare GA4 conversion count vs source-of-truth (Shopify, CRM): should match within 5% over a 30-day window.
    - If discrepancy > 10%, flag a deeper investigation (often Consent Mode, deduplication, or `items` parameter).

14. **Write the audit.** Output is a structured Markdown doc with prioritised fix list.

## Output format

```markdown
# GA4 Setup Audit — [Business name]

**Audit date:** [date]
**Property ID:** [GA4 property ID]
**Auditor:** [name / "AI-assisted"]
**Comparison source:** [Shopify / CRM / etc.]

## Executive summary
- **P0 issues:** [n]
- **P1 issues:** [n]
- **P2 issues:** [n]
- **Estimated total fix effort:** [n] days
- **Headline finding:** [1-2 sentence summary of biggest issue]

## Findings

### P0 — Critical (data is wrong; trust is broken)

#### [Issue title]
- **Symptom:** [what the user sees, e.g. "GA4 reports 40% lower revenue than Shopify"]
- **Root cause:** [technical reason, e.g. "`purchase` event fires without `items` parameter; ecommerce reports incomplete"]
- **Impact:** [what reports / decisions are affected]
- **Fix:** [specific implementation steps]
- **Effort:** [n hours / days]
- **Verification:** [how to confirm the fix worked, e.g. "DebugView shows `items` populated on next purchase"]

[Repeat for each P0]

### P1 — Material (data is incomplete or misleading)

[Same structure]

### P2 — Hygiene (cleanup; doesn't break reports)

[Same structure]

## Configuration summary

### Property
- Property ID: [n]
- Streams: [list]
- Cross-domain: [yes / no / N/A]
- Internal traffic filter: [active / inactive / not configured]

### Events
- Default events firing: [yes / partial / no]
- Custom events defined: [n]
- Custom events firing correctly: [n / n]
- Notable gaps: [list]

### Conversions
- Total conversions: [n]
- Conversions correctly mapped to goals: [yes / partial / no]
- Notable issues: [list, e.g. "`add_to_cart` marked as conversion"]

### Ecommerce
- All 5 events firing: [yes / partial / no]
- `items` parameter populated: [yes / partial / no]
- 30-day GA4 revenue: [$n]
- 30-day [Shopify / processor] revenue: [$n]
- Discrepancy: [%]

### Audiences
- Total audiences: [n]
- SEO-specific audiences defined: [list]
- Linked to Google Ads: [yes / no]

### Attribution
- Reporting attribution model: [DDA / last-click / etc.]
- Looker Studio / downstream report alignment: [aligned / mismatch]
- 30-day organic-credited revenue: [$n] (DDA), [$n] (last-click)

### Retention
- User retention: [2 months / 14 months]
- Event retention: [2 months / 14 months]

### Integrations
- GSC linked: [yes / no]
- BigQuery export: [enabled / disabled]
- Google Ads linked: [yes / no — verify intentional]

### Consent
- Consent Mode v2 implemented: [yes / no / N/A]
- EU traffic share: [%]
- Tracked rate (EU): [%]

## Triangulation summary
| Metric | GA4 | Source-of-truth | Discrepancy | Verdict |
|--------|-----|-----------------|-------------|---------|
| Conversions (30d) | n | n | n% | Pass / Investigate |
| Revenue (30d) | $n | $n | n% | Pass / Investigate |
| Average order value | $n | $n | n% | Pass / Investigate |

## Prioritised fix list (one-page version for stakeholders)

| # | Issue | Severity | Effort | Owner |
|---|-------|----------|--------|-------|
| 1 | `purchase` event missing `items` | P0 | 4 hrs | Dev |
| 2 | `add_to_cart` marked as conversion | P0 | 30 min | Marketing |
| ... | ... | ... | ... | ... |

## Recommendations beyond fixes
- [ ] Re-audit in [n] months.
- [ ] Document attribution model decision; align Looker Studio.
- [ ] Set up BigQuery export for advanced analysis.
- [ ] Define [n] additional SEO audiences for retargeting + reporting.
- [ ] Establish quarterly GA4 audit cadence.
```

Save the produced file to `businesses/<slug>/analytics/ga4-audit-[YYYY-MM-DD].md`. Create the `analytics/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every finding has severity, root cause, impact, fix, effort, and verification — no vague "looks broken."
- P0 / P1 / P2 buckets are used consistently (P0 = data is wrong; P1 = data is incomplete; P2 = hygiene).
- Triangulation table compares GA4 vs source-of-truth on at least 3 metrics.
- Configuration summary covers all 13 audit areas.
- Fix list is prioritised and effort-estimated, not a wishlist.
- Consent Mode v2 is checked if EU traffic > 5%; flagged as P0 if missing.
- Attribution model is documented; mismatch with downstream reports is flagged.

## Common mistakes to avoid

- Don't skip triangulation. GA4 numbers in isolation aren't auditable; compare to source-of-truth.
- Don't recommend "fix everything." Prioritise; some P2 issues can wait quarters.
- Don't trust DebugView alone. Some events fire only in production environments; check live reports too.
- Don't ignore the GA4-vs-UA mental model trap. UA-trained users misread "Sessions" and "Engagement" in GA4; audit reports for translation errors.
- Don't recommend BigQuery export for tiny sites. Below ~10k monthly users, the BigQuery overhead may exceed the analysis value.
- Don't skip Consent Mode v2 if EU presence exists. Legal requirement; not "nice to have."
- Don't propose attribution-model changes without documenting downstream effects. Switching from last-click to DDA materially changes channel-level revenue attribution; coordinate with the team.
- Don't audit and walk away. Schedule a re-audit in 90 days; setup drifts.

## Example

**Input (abbreviated):** Field & Sun. GA4 in place since 2023. Marketing notices conversion-rate gap between GA4 and Shopify (~40%). EU operations.

**Output (abbreviated):**

P0 (3 issues):

- `purchase` event missing `items` — product-level analytics broken; 4 hrs to fix.
- `add_to_cart` marked as conversion — inflates conversion count; 30 min to unmark.
- Consent Mode v2 not implemented — ~15% EU users untracked; 2 days dev work.

P1 (4 issues):

- Shopify-GA4 integration missing `view_item` event.
- 2-month retention; should be 14 months.
- Looker Studio reports use last-click while GA4 default is DDA — undocumented mismatch.
- No SEO-specific audiences (organic visitors, cluster-X visitors).

P2 (2 issues):

- 3 ex-employees retain Edit access.
- BigQuery export disabled; recommended for SEO analysis.

Triangulation: 30-day GA4 revenue $185k vs Shopify $312k → 41% discrepancy (matches user observation; root cause is the missing `items` + Consent Mode).

Total fix effort: 6 days dev + 1 day marketing config.

Re-audit scheduled: 2026-08-01.

Saved to `businesses/field-and-sun/analytics/ga4-audit-2026-05-01.md`.
