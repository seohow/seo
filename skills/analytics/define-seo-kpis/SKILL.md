---
name: define-seo-kpis
description: Defines the KPI set for an SEO program: metrics, targets, reporting cadence, and owners. Use when starting an SEO program or when current metrics are disconnected from business outcomes.
---

# Define SEO KPIs

This skill produces the SEO KPI definition + dashboard structure + cadence proposal. The output is the operating manual for ongoing SEO measurement, not just a list of metrics.

The skill is opinionated about a few things: 5 executive KPIs + 8-12 operating KPIs + 12-20 diagnostic KPIs is the right ceiling for most brands; every KPI needs a target, an owner, and a review cadence; dashboards without ownership get ignored; KPIs without targets are trackers, not commitments; the dashboard is the single source of truth (multiple disagreeing reports on the same KPI = chaos).

## When to use this skill

- The user is building SEO measurement from scratch.
- The user has dashboards but they're sprawling, vanity-heavy, or unread.
- The user is preparing for a leadership / board reporting cycle.
- The user is running an annual KPI-set review.
- The user is launching a major SEO investment and needs measurement upfront.

## When NOT to use this skill

- The user wants to audit GA4 / GSC config — use `audit-ga4-setup` / `audit-search-console-setup`.
- The user wants the quarterly traffic analysis — use `analyse-traffic-patterns`.
- The user wants the GSC quarterly report — use `analyse-search-performance`.
- The user wants to set up rank tracking — use `set-up-rank-tracking`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), goals (7), brand voice (8). Goals are the ladder KPIs roll up to.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster-level KPIs need the cluster set.
3. **Existing dashboards** — optional. If present, review for "what to keep, what to consolidate, what to remove."
4. **Stakeholder list** — required. Who reviews KPIs at what level? Typically: founder / CEO (executive), marketing lead (operating), SEO specialists (diagnostic).
5. **Existing data sources** — list of analytics sources flowing into the brand: GA4, GSC, rank tracker, Shopify / CRM / payment processor, ad-platform connectors. KPIs depend on data availability.
6. **Quarterly / annual revenue target** — preferred. Anchors executive KPIs.
7. **Known business priorities** — what's the brand betting on this year? (E.g. "double organic share to 50% of revenue.") Drives KPI weighting.

If business goals + cluster map are missing, ask. KPIs without anchors are vanity.

## Process

1. **Build the KPI hierarchy.** Three levels with audience-tailored views.

   **Executive KPIs (5).** Board / CEO / leadership audience. Review monthly + quarterly. Examples:
   - Organic-search revenue ($, QoQ + YoY).
   - Organic % of total revenue (%).
   - Organic-search conversion rate (%).
   - Branded vs non-branded revenue split (%).
   - Share of voice on cluster head terms (%, weighted by cluster priority).

   **Operating KPIs (8-12).** Marketing-team audience. Review weekly + monthly. Examples:
   - Cluster-level sessions (top 6 clusters).
   - Cluster-level conversions / revenue.
   - Pillar-page positions (top 3 pillar primary keywords).
   - CTR on top-15-position queries (CTR-opportunity tracker).
   - Decayed-page count (>30% YoY decline; refresh-trigger).
   - Refresh velocity (refreshes shipped / quarter; target).
   - Schema validation pass rate.
   - CWV mobile good %.
   - GSC clicks YoY (priority-cluster filtered).
   - Average position priority keywords.

   **Diagnostic KPIs (12-20).** Specialist audience. Review monthly or on-demand.
   - Per-page conversion rates.
   - Indexing coverage rate.
   - Broken-link count.
   - 404 rate.
   - Average page load time.
   - Mobile usability error count.
   - Schema-error URL count.
   - Internal-link orphan count.
   - Sitemap submission status.
   - Canonical-handling compliance rate.
   - Etc.

2. **Per KPI, define:**
   - **Formula:** how the KPI is calculated (e.g. organic-search revenue = Shopify revenue from sessions where last-non-direct-click = google/organic).
   - **Data source(s):** GA4, GSC, rank tracker, source-of-truth.
   - **Target:** quarterly target (number or % change).
   - **Owner:** name / role.
   - **Review cadence:** weekly / monthly / quarterly.
   - **Visualisation:** chart type recommendation (trend line, bar comparison, scorecard).

3. **Set targets.**
   - Anchored to business goals + historical baseline + market context.
   - Stretch targets are fine; aspirational-without-baseline is not.
   - Quarterly targets > annual targets (annual without quarterly = single-shot review).

4. **Design the dashboard.** Looker Studio standard; Tableau / PowerBI for enterprise.

   **Page 1 — Executive view.**
   - 5 KPI scorecards (current value + target + Δ vs prior + status indicator).
   - 1-2 trend charts (organic revenue + share of voice).
   - 1 cluster-rollup table (sessions + revenue per priority cluster).
   - Audience: CEO / leadership.

   **Page 2 — Operating view.**
   - 8-12 KPI scorecards.
   - Cluster-rollup tables.
   - Top winners / decliners (queries + pages).
   - Refresh / wins backlog status.
   - Audience: marketing team.

   **Pages 3+ — Diagnostic drill-downs.**
   - Per-cluster breakdown.
   - Indexing coverage, schema, CWV detail.
   - Page-level performance.
   - Audience: specialists.

5. **Establish cadence.**
   - **Weekly (15-30 min).** Marketing team. Alert review + top-mover scan + operating KPIs glance. Monday morning typical.
   - **Monthly (60-90 min).** Marketing team + leadership invited. KPI review against targets + decay flags + insights from Traffic Analysis. First Tuesday typical.
   - **Quarterly (3-4 hr).** Full team + leadership. Deep traffic analysis + KPI recalibration + strategy adjustments. Two weeks before quarter-end.
   - **Annually (half-day).** KPI-set review — what worked, what didn't, what to add / remove.

6. **Document ownership + agenda templates.**
   - Each KPI has an owner who flags / explains movement.
   - Each meeting has an agenda template + decision-log convention.
   - Decisions get captured back into the per-business AGENTS.md.

7. **Recalibration plan.**
   - Quarterly: targets adjusted based on results + new strategic priorities.
   - Annually: KPI set revisited — add / remove / restructure.

8. **Write the document.**

## Output format

```markdown
# SEO KPI Definition — [Business name]

**Definition date:** [date]
**Effective period:** [Q1 2026 / annual / etc.]
**Owner:** [marketing lead / SEO lead]
**Next recalibration:** [date]

## Executive KPIs (5)

### KPI 1: [name]
- **Definition:** [formula]
- **Data source:** [GA4 / GSC / Shopify / blended]
- **Target ([period]):** [number or % change]
- **Current baseline:** [number]
- **Owner:** [name]
- **Review cadence:** monthly + quarterly
- **Visualisation:** [scorecard / trend line / etc.]

[Repeat for 5 executive KPIs]

## Operating KPIs (8-12)

[Same structure for each]

## Diagnostic KPIs (12-20)

[Same structure, terser]

## Dashboard structure (Looker Studio)

### Page 1 — Executive view
- 5 KPI scorecards (current / target / Δ / status)
- Organic-revenue trend (12-month line)
- Share-of-voice trend (cluster-weighted)
- Cluster rollup table

### Page 2 — Operating view
- 8-12 KPI scorecards
- Cluster sessions + revenue + conversion table
- Pillar-page position trends
- Top winners / decliners (query and page)
- Refresh velocity tracker

### Pages 3+ — Diagnostic drill-downs
- [list pages by cluster / metric]

### Connectors required
- [ ] GA4 connector
- [ ] GSC connector
- [ ] Rank-tracker API
- [ ] Shopify / CRM / payment connector
- [ ] BigQuery (optional, for >1000-row queries)

## Review cadence

### Weekly (15-30 min)
- **When:** [day, time]
- **Attendees:** [list]
- **Agenda:**
  1. Alert review (rank-tracker, GSC anomalies, GA4 anomalies).
  2. Top movers (queries + pages).
  3. Operating KPIs glance.
  4. Action items for the week.
- **Decision log:** captured in [shared doc / per-business AGENTS.md].

### Monthly (60-90 min)
- **When:** [day, time]
- **Attendees:** [list including leadership]
- **Agenda:**
  1. KPI review against targets.
  2. Cluster-rollup review.
  3. Decay flag review (refresh candidates).
  4. Open question / blocker discussion.
  5. Action items for the month.

### Quarterly (3-4 hrs)
- **When:** [date]
- **Attendees:** [full team + leadership]
- **Agenda:**
  1. Full traffic-analysis review (`analyse-traffic-patterns` output).
  2. GSC performance analysis (`analyse-search-performance` output).
  3. KPI target recalibration for next quarter.
  4. Strategic adjustments / new priorities.
  5. Capacity / resourcing for next quarter.

### Annual (half-day)
- **When:** [date — typically Q4]
- **Agenda:**
  1. KPI-set review — what worked, what didn't.
  2. Strategy adjustment — major shifts in priority.
  3. Tooling / dashboard refresh.
  4. KPI definition for next year.

## Recalibration plan
- Quarterly: targets adjusted based on results + new priorities.
- Annual: full KPI-set review.

## Acceptance criteria
- [ ] Dashboard built in Looker Studio (or chosen platform).
- [ ] All KPIs have data flowing (no broken connectors).
- [ ] All KPIs have explicit targets for the current period.
- [ ] All KPIs have named owners.
- [ ] Cadence is on the team calendar.
- [ ] Agenda templates documented.
- [ ] Decision log convention established.
- [ ] First weekly + monthly review scheduled.
- [ ] Quarterly recalibration on calendar.

## Risks and watchouts
- "Dashboard drift" — six months in, dashboards typically grow to 30+ charts. Annual review is the safety valve.
- "No-cadence dashboards" — if reviews don't happen, the dashboard is shelfware.
- "Disagreeing numbers" — multiple reports on the same KPI with different numbers create chaos. Single source of truth.
- "Vanity metric creep" — sessions / pageviews / impressions sneak back in. Pull them out at recalibration.

## Open questions for the team
- [ ] Confirm executive-KPI priorities for the period.
- [ ] Confirm meeting cadence + attendees.
- [ ] Confirm tooling / dashboard platform decision.
- [ ] Confirm KPI ownership across the team.
```

Save the produced file to `businesses/<slug>/analytics/seo-kpis-[YYYY].md`. Create the `analytics/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- 5 executive + 8-12 operating + 12-20 diagnostic — three levels, audience-tailored.
- Every KPI has a formula, a data source, a target, an owner, and a cadence.
- Targets are anchored (baseline + business goal + market context); not "aim higher."
- Dashboard structure has named pages with audiences.
- Cadence has explicit times, attendees, and agenda templates.
- Recalibration plan is calendared.
- Acceptance criteria are observable (dashboard live, connectors verified, cadence on calendar).
- No vanity-only metrics in the executive set.

## Common mistakes to avoid

- Don't propose 30 KPIs. The set should be small, focused, business-aligned.
- Don't omit targets. KPIs without targets are trackers.
- Don't propose KPIs without data sources. If GA4 isn't tracking it, it's not a KPI yet.
- Don't show diagnostic KPIs to executives. Audience-tailored views.
- Don't conflate weekly / monthly / quarterly cadence. Each has its own purpose.
- Don't skip ownership. Anonymous KPIs drift.
- Don't propose KPIs that aren't connected to business goals. They get ignored.
- Don't forget the recalibration cycle. KPIs decay.

## Example

**Input (abbreviated):** Field & Sun. Goals (from profile section 7): grow organic revenue from $400k → $700k QoQ; double sun-care cluster traffic; lift PDP organic conversion rate from 1.4% to 1.8%. Cluster map: 28 clusters; 6 priority.

**Output (abbreviated):**

Executive KPIs (5):

1. Organic-search revenue (DDA-attributed) — target $550k Q2, $700k Q3.
2. Organic % of total revenue — target 35%.
3. Organic conversion rate — target 1.8%.
4. Non-branded vs branded revenue split — track non-branded growth.
5. Share of voice on priority cluster head terms — target +5pp QoQ.

Operating KPIs (10):

1. Sun-care cluster sessions (target +50% QoQ).
2. Skincare-ingredients cluster sessions.
3. Refills cluster sessions (target stabilise).
4. Pillar 1 ("mineral sunscreen guide") position (target ≤10).
5. CTR-opportunity count (queries position 4-15 below benchmark).
6. Refresh velocity (target 4 P0 refreshes / quarter).
7. Decayed-page count.
8. Schema validation pass rate (target 98%).
9. CWV mobile good % (target 85%).
10. Priority-keyword average position (top 50).

Diagnostic KPIs (12): per-page conversion rates, indexing coverage, schema-error count, average load time, mobile-usability errors, internal-link orphan count, sitemap status, canonical compliance, etc.

Dashboard: Looker Studio. 3 pages (Executive / Operating / Diagnostic). 4 connectors (GA4 / GSC / AccuRanker / Shopify).

Cadence: Weekly Mon 9 AM (marketing, 30 min); Monthly first Tuesday (marketing + leadership, 90 min); Quarterly two weeks before quarter-end (3-4 hrs); Annual Q4 (half-day).

Recalibration: Q3-end target review + annual Q4 review.

Saved to `businesses/field-and-sun/analytics/seo-kpis-2026.md`.
