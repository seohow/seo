# 05. Analytics

> Measure what's working before you scale. The discipline of turning data into decisions — what to ship next, what to refresh, what to retire, what's broken. Analytics is where SEO stops being aspirational and starts being operational.

## What this category covers

Analytics is the *measurement layer* of the toolkit. Strategy decided what to target. On-page, Technical, and Content shipped the work. Analytics tells you whether it's working — at the page level, the cluster level, and the business level — and feeds the decisions about what to do next. Every other category eventually depends on analytics; without it, the toolkit's outputs are fire-and-forget.

The six sub-topics here cover the data sources (GA4, Search Console, rank-tracking tools), the analysis disciplines (traffic analysis, KPI tracking), and the conversion / attribution layer that connects SEO to revenue. For Field & Sun, this is where the brand finds out whether the new sun-care content is producing PDP traffic, where the cluster pillar is ranking, which posts are decaying, and whether SEO is contributing to revenue at a rate that justifies the investment.

## How the sub-topics fit together

```
Data sources               Analysis discipline           Business connection
────────────               ───────────────────           ───────────────────
01. Google Analytics      04. Traffic Analysis          06. Conversion Tracking
02. Search Console        05. KPI Tracking              (attribution → revenue)
03. Rank Tracking         (turning data → decisions)
```

1. **[01. Google Analytics](01.%20Google%20Analytics/README.md)** — GA4 setup, event tracking, audience definition, the foundational web-analytics platform. Where on-site behaviour is measured.
2. **[02. Search Console](02.%20Search%20Console/README.md)** — Google's first-party search data — impressions, clicks, position, query-level performance, indexing status, Core Web Vitals reporting. The most reliable SEO-specific data source available.
3. **[03. Rank Tracking](03.%20Rank%20Tracking/README.md)** — third-party rank tracking (Ahrefs, Semrush, AccuRanker, etc.). Daily-granularity position data, share-of-voice analysis, competitor tracking. Complements GSC's average-position data with daily snapshots.
4. **[04. Traffic Analysis](04.%20Traffic%20Analysis/README.md)** — turning raw traffic data into pattern recognition: what's growing, what's decaying, what changed when, which channels matter. The analysis discipline that converts data into decisions.
5. **[05. KPI Tracking](05.%20KPI%20Tracking/README.md)** — defining the right SEO KPIs for the business, building dashboards, establishing reporting cadence. The discipline of *what to look at, when, and what to do about it*.
6. **[06. Conversion Tracking](06.%20Conversion%20Tracking/README.md)** — connecting SEO to revenue: conversion event setup, attribution modelling (multi-touch, last-click, linear, data-driven), revenue measurement per cluster / page / channel. The category's connection back to the business P&L.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Foundation (1-2 weeks):**

1. Run `audit-ga4-setup` to confirm GA4 is correctly configured (events firing, audiences defined, ecommerce data flowing). 80% of SEO measurement issues trace back to broken GA4 setup.
2. Run `audit-search-console-setup` to confirm GSC is verified, sitemaps submitted, no major coverage issues. GSC is the most reliable single data source for SEO; if it's not set up cleanly, downstream analysis is unreliable.

**Pass 2 — Analysis baseline (1-2 weeks):**

3. Run `analyse-search-performance` to baseline current GSC performance — which queries / pages / clusters are working, which aren't.
4. Run `set-up-rank-tracking` if a third-party tool is in scope. Track the cluster-priority keywords daily.
5. Run `analyse-traffic-patterns` to baseline GA4 traffic — channel mix, growth / decay trends, page-level winners and losers.

**Pass 3 — KPI discipline (ongoing):**

6. Run `define-seo-kpis` to set the right metrics for the business and build the reporting dashboard.
7. Run `audit-conversion-tracking` to confirm conversion events fire correctly and attribution is set up sensibly.

**Pass 4 — Operating cadence (ongoing):**

8. Weekly: scan GSC + rank tracking for anomalies; track top-priority keyword movement.
9. Monthly: review KPI dashboard; identify decay candidates; feed insights back into Strategy / Content.
10. Quarterly: full traffic + conversion analysis; refresh KPIs; recalibrate.

## Pre-requisites and dependencies

The Analytics category consumes outputs from earlier categories:

- `businesses/<slug>/clusters/cluster-map.md` — clusters are the analysis unit; KPIs and traffic patterns are most useful at the cluster level, not just the page level.
- `businesses/<slug>/keyword-research/seed-keywords.md` and `intent-classification/classified-keywords.md` — the keyword universe being measured.
- `businesses/<slug>/business_profile.md` — sections 7 (goals) and 9 (revenue model if present) drive which KPIs matter.

It produces inputs for downstream categories:

- Decay signals → consumed by **[04. Content SEO / 07. Content Refresh](../04.%20Content%20SEO/07.%20Content%20Refresh/README.md)** for refresh prioritisation.
- Cluster performance data → consumed by **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/README.md)** for backlog refresh.
- Conversion data → informs **[01. Strategy](../01.%20Strategy/README.md)** about which clusters are revenue-aligned vs. traffic-only.
- Indexing / coverage findings → consumed by **[03. Technical SEO / 02. Indexing](../03.%20Technical%20SEO/02.%20Indexing/README.md)** for technical fixes.

## Skills you'll use in this category

The full inventory across the 6 sub-topics:

- **audit-ga4-setup** — verify GA4 is correctly configured; flag missing events, broken ecommerce, audience gaps.
- **audit-search-console-setup** — verify GSC verification, sitemap submission, property coverage, IPv6 / domain-property setup.
- **analyse-search-performance** — produce a structured GSC analysis: top queries, top pages, decline detection, query-cluster intersection.
- **set-up-rank-tracking** — design a rank-tracking project: which keywords, which competitors, what cadence, how it feeds into the KPI dashboard.
- **analyse-traffic-patterns** — produce a structured GA4 / traffic analysis: channel mix, growth / decay trends, anomaly detection, segmentation.
- **define-seo-kpis** — set the right SEO KPIs for the business and design the reporting dashboard.
- **audit-conversion-tracking** — verify conversion events fire correctly; review attribution model; identify revenue-data leaks.

## Common pitfalls

- **Measuring without a strategy.** Tracking everything that moves produces dashboards nobody reads. The KPIs that matter are anchored to business goals (cluster traffic, revenue contribution) — not vanity metrics (sessions, pageviews).
- **Trusting one data source.** GA4, GSC, and rank-tracking tools all disagree to some degree. Triangulate; don't anchor on one source.
- **Ignoring the GSC-vs-GA4 discrepancy.** GA4 reports "organic traffic" differently from GSC's "clicks." Both are valid; understand the difference rather than treating them as equivalent.
- **No reporting cadence.** Without weekly / monthly / quarterly rhythm, analytics becomes ad-hoc firefighting. The dashboard exists for someone to look at on a schedule.
- **Conversion tracking that's broken.** ~30-50% of brands' conversion events don't fire correctly somewhere — duplicate events, missing parameters, wrong attribution model. Audit before trusting the data.
- **Treating every metric drop as a problem.** Seasonal patterns, algorithm updates, SERP layout changes, and tracking-side bugs all cause apparent drops. Investigate before reacting.
- **Not closing the loop.** Analytics is only useful if it changes what gets shipped. Insights without follow-through are reports, not analytics.
- **Rank tracking obsession.** Daily rank-tracking volatility doesn't matter; weekly / monthly trend matters. Don't let rank tracking drive panic moves.
- **Underinvesting in setup.** GA4 + GSC setup is the foundation. Cutting corners here means every downstream decision is built on bad data.

## Where to go after this

Once analytics is operational:

- **[04. Content SEO / 07. Content Refresh](../04.%20Content%20SEO/07.%20Content%20Refresh/README.md)** — decay signals from analytics feed the refresh backlog.
- **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/README.md)** — close the loop; refresh the wins backlog with what's been shipped and the data that confirms (or contradicts) it worked.
- **[06. Off-page SEO](../06.%20Off-page%20SEO/README.md)** — link-building ROI is hard to measure without analytics; once it's set up, off-page work has a feedback loop.
- **[09. AI SEO](../09.%20AI%20SEO/README.md)** *(planned)* — AI Overview / LLM citation visibility requires its own measurement layer; complements the traditional analytics set.
