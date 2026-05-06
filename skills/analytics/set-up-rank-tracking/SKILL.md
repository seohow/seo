---
name: set-up-rank-tracking
description: Designs a rank tracking setup: keyword set, tool selection, reporting cadence, and alert thresholds. Use when starting rank tracking or auditing whether an existing setup is fit for purpose.
---

# Set Up Rank Tracking

This skill produces the rank-tracking project spec — the brief that turns a generic tool subscription into a focused, decision-driving tracking project.

The skill is opinionated about a few things: 100-200 priority keywords is the right ceiling for most brands; tool choice matters less than keyword selection; SERP-feature tracking is non-negotiable in 2026 (position-only tracking misses too much); the dashboard exists for someone to look at on a schedule (otherwise the tool is theatre).

## When to use this skill

- The user is choosing a rank-tracking tool and wants the setup brief.
- The user has a tool but the keyword set was inherited / arbitrary; needs a curated rebuild.
- The user is running a quarterly review and the keyword set needs refresh.
- The user is briefing a new agency / consultant on existing rank-tracking project structure.

## When NOT to use this skill

- The user wants to analyse rank-tracking data over time — use `analyse-search-performance` for GSC analysis or KPI tracking for ongoing monitoring.
- The user wants to set up GSC — use `audit-search-console-setup`.
- The user wants to set up GA4 — use `audit-ga4-setup`.
- The user wants to do keyword research — use `plan-keyword-research` / `generate-seed-keywords`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), goals (7), markets (if international).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Source of priority keywords; tracking set is a curated subset.
3. **Competitor analysis** — read `businesses/<slug>/competitor-analysis/scope.md` if it exists. Defines which competitors to track.
4. **Existing tool** — optional. If the brand already has Ahrefs / Semrush / AccuRanker, the spec configures that tool; otherwise the spec recommends one.
5. **Budget** — optional. Affects tool recommendation. Common tiers: $0-100/mo (free / starter), $100-500/mo (mid-market — AccuRanker, SE Ranking), $500-2,000/mo (broad suites — Ahrefs, Semrush), $2,000+/mo (enterprise — Pi Datametrics, Conductor).
6. **Markets** — required. Single market or multi-market.

If cluster map is missing, ask. The keyword set is built from clusters.

## Process

1. **Tool recommendation.** Match budget + use case + market.
   - Single market, focused tracking: AccuRanker, Nightwatch, SE Ranking.
   - Tracking + broader competitive intelligence + content gap analysis: Ahrefs, Semrush.
   - Multi-market, enterprise: Sistrix, Pi Datametrics, Conductor.
   - If brand has existing tool: configure that one rather than re-shopping (continuity matters).
2. **Curate the keyword set.** Pull from cluster map; rank by priority; cap at 100-200 keywords.
   - **Cluster-priority head terms (40-60 keywords):** the head term for every priority cluster in the map. These are the ones that drive cluster-level visibility.
   - **Cluster-priority spoke / long-tail (40-80 keywords):** key long-tail variants for the highest-priority clusters. Typically 5-10 long-tail per priority cluster.
   - **Branded keywords (10-20 keywords):** brand name + product names + brand + product variant. Defensive monitoring.
   - **Comparison keywords (5-15 keywords):** "[brand] vs [competitor]" + "[product] vs [alternative]." Often high-intent commercial.
   - **Watch list (10-20 keywords):** emerging clusters, new product launches, opportunistic targets.
3. **Select competitors.** 3-6 direct + 1-2 publishers / aggregators.
   - **Direct competitors:** brands competing for the same customer in the same category. From competitor-analysis scope.
   - **Aspirational:** 1-2 brands you'd like to compete with at scale.
   - **Publishers / aggregators:** Wirecutter, NYT Wirecutter, EWG (for skincare), category-specific publishers. Often dominate top SERPs.
   - For Field & Sun: Supergoop, Saie, ILIA, EltaMD (direct) + Wirecutter, NYT (publishers).
4. **Geography.**
   - Single-market: one country / region.
   - Multi-market: separate tracking projects per market (don't combine; SERPs differ enough that combined data is misleading).
5. **Device.**
   - Default: mobile-primary. Track desktop in parallel for D2C / consumer brands where intent differs.
   - For B2B: desktop-primary.
6. **Cadence.**
   - **Daily:** top 50 priority keywords. Catches early signals.
   - **Weekly:** remaining 70-150 keywords. Sufficient resolution; reduces tool cost.
   - **Monthly:** watch-list keywords. Lowest urgency.
7. **SERP-feature tracking.** Configure tracking for every keyword on:
   - Featured Snippet.
   - AI Overview / Search Generative Experience.
   - "People Also Ask."
   - Image Pack.
   - Video.
   - Local Pack (if applicable; currently parked for Field & Sun).
   - Sitelinks (branded).
8. **Alert thresholds.**
   - Position drop ≥5 on priority keywords (notify within 24 hrs).
   - SERP-feature loss on previously-won keyword (notify weekly).
   - Competitor wins SERP feature on tracked keyword (notify weekly).
   - Position-1 loss on branded keyword (notify immediately — possible brand-protection issue).
9. **Dashboard.**
   - Looker Studio + tool API the standard.
   - Top-level: cluster-level share of voice, position trends, top winners / decliners weekly.
   - Drill-down: per-cluster, per-keyword, per-competitor.
   - Public / shareable URL for stakeholders.
10. **Integrations.**
    - Connect to GSC (cross-reference rank-tracker positions with GSC clicks).
    - Connect to GA4 (cross-reference with traffic and conversions).
    - Optionally: connect to brand monitoring / PR tools.
11. **Review cadence.**
    - Weekly: 15-min alert review + top movers.
    - Monthly: cluster-level review + competitor comparison.
    - Quarterly: keyword-set review — add / remove keywords based on strategy.
12. **Write the spec.**

## Output format

```markdown
# Rank-Tracking Project Spec — [Business name]

**Spec date:** [date]
**Tool:** [recommended / existing tool]
**Markets:** [list]
**Total keywords tracked:** [n]
**Competitors tracked:** [n]
**Project owner:** [name / role]

## Tool decision

### Recommendation
[Tool name and tier]

### Reasoning
[2-3 sentences on why this tool fits]

### Alternatives considered
- [Tool A] — [why not chosen]
- [Tool B] — [why not chosen]

### Approximate cost
$[n]/mo

## Keyword set ([n] total)

### Cluster-priority head terms ([n])
| Keyword | Cluster | Priority | Cadence |
|---------|---------|----------|---------|
| mineral sunscreen | sun-care | P0 | daily |
| ... | ... | ... | ... |

### Cluster-priority spokes / long-tail ([n])
[same shape]

### Branded ([n])
[same shape]

### Comparison ([n])
[same shape]

### Watch list ([n])
[same shape]

## Competitors ([n])

### Direct
1. [Brand]: [why tracked]
2. ...

### Aspirational
1. [Brand]: [why tracked]

### Publishers / aggregators
1. [Publication]: [why tracked]

## Geographic + device config
- Markets: [list]
- Devices: [mobile / desktop / both]

## SERP-feature tracking
For every keyword in the project, track:
- [ ] Featured Snippet
- [ ] AI Overview / SGE
- [ ] People Also Ask
- [ ] Image Pack
- [ ] Video
- [ ] Local Pack: [enabled / disabled]
- [ ] Sitelinks (branded keywords)

## Alert thresholds

| Trigger | Threshold | Notification |
|---------|-----------|--------------|
| Position drop on priority keyword | ≥5 positions | Within 24 hrs (Slack / email) |
| SERP-feature loss | Lost a previously-won feature | Weekly digest |
| Competitor wins feature on tracked keyword | New SERP-feature claim | Weekly digest |
| Branded position-1 loss | Position 1 → other | Immediate |

## Dashboard design

### Top-level cards
- Total keywords tracking
- Avg position (cluster-weighted)
- Share of voice (cluster-weighted)
- WoW / MoM trend

### Cluster rollups
| Cluster | Avg position | SoV | WoW Δ | Top mover |
|---------|--------------|-----|-------|-----------|
| Sun-care | 12 | 18% | +2 | "is zinc oxide safe daily" |
| ... | ... | ... | ... | ... |

### Competitor comparison
SoV chart over time per competitor.

### Top winners / decliners (weekly)
| Keyword | Position change | Cluster | Likely cause |
|---------|-----------------|---------|--------------|
| ... | ... | ... | ... |

### SERP-feature tracker
| Feature | Brand share | Top competitor share |
|---------|-------------|----------------------|
| Featured Snippet | n/n keywords | competitor wins n |
| AI Overview | n/n | n |
| ... | ... | ... |

## Integrations
- [x] GSC: associate via tool's GSC connector.
- [x] GA4: cross-reference via Looker Studio data blend.
- [ ] Slack: alert webhook configured.
- [ ] Brand monitoring (if relevant).

## Review cadence
- **Weekly (15 min):** alert review + top movers + SERP-feature changes.
- **Monthly (60 min):** cluster-level review + competitor share-of-voice trends + handoff to refresh / wins backlog.
- **Quarterly (2-3 hrs):** keyword-set review — add new clusters, remove decommissioned ones, recalibrate priorities.

## Acceptance criteria
- [ ] Tool subscribed and configured per spec.
- [ ] All [n] keywords loaded and tracking.
- [ ] All [n] competitors loaded.
- [ ] SERP-feature tracking enabled across all features.
- [ ] Alerts configured at specified thresholds.
- [ ] Looker Studio dashboard live with cluster rollups.
- [ ] GSC + GA4 connections verified.
- [ ] First weekly review scheduled.
- [ ] Quarterly review on calendar at [date + 90 days].

## Risks and watchouts
- "Daily noise" — encourage 7-day rolling-average analysis, not daily-spike chasing.
- "Tool data drift vs GSC" — when they disagree, GSC is closer to ground truth on long-term trends.
- "Keyword-set staleness" — strategy evolves; the set must evolve.
- "Dashboard nobody opens" — review cadence is non-negotiable; otherwise the tool is theatre.

## Open questions for the user
- [ ] Confirm budget tier.
- [ ] Confirm priority cluster weighting (which clusters get more keyword slots).
- [ ] Confirm competitor list (any missed; any unwanted).
- [ ] Confirm review cadence + owner.
```

Save the produced file to `businesses/<slug>/analytics/rank-tracking-setup-[YYYY-MM-DD].md`. Create the `analytics/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Tool recommendation matches budget + market + use case (not "buy the most expensive").
- Keyword set is curated, capped at 100-200, allocated across cluster-priority / branded / comparison / watch-list.
- Competitors are 3-6 direct + 1-2 publishers (not 25 random brands).
- SERP-feature tracking enabled across at least Featured Snippet, AI Overview, "People Also Ask," Image Pack.
- Alert thresholds are specific (position drops ≥5; not "watch for changes").
- Dashboard design covers cluster rollup + competitor SoV + top movers + SERP-feature tracker.
- Review cadence is calendared (weekly / monthly / quarterly) with owners.
- Acceptance criteria are observable.

## Common mistakes to avoid

- Don't track 1,000+ keywords. Dashboards stop being readable; reviewers stop reviewing.
- Don't recommend the most expensive tool by default. Match tool to need.
- Don't skip SERP-feature tracking. Position-only tracking is incomplete in 2026.
- Don't combine markets in one project. Separate per country / region.
- Don't track 20 random competitors. 3-6 direct + 1-2 publishers is the right shape.
- Don't skip the dashboard. Raw rank data without a dashboard rarely gets reviewed.
- Don't omit the quarterly keyword-set review. The set decays as strategy evolves.
- Don't skip the GSC integration. Cross-referencing with first-party data catches tool-side anomalies.

## Example

**Input (abbreviated):** Field & Sun. US + UK markets. ~$300/mo budget. Cluster map with 28 clusters; 6 priority sun-care + skincare-ingredients clusters.

**Output (abbreviated):**

Tool: AccuRanker. Reasoning: matches mid-market budget; daily updates; strong SERP-feature coverage; not over-engineered for a single-brand consumer use case.

Keyword set (122): cluster-priority head (52) + cluster-priority long-tail (40) + branded (15) + comparison (10) + watch list (5).

Competitors (5): Supergoop, Saie, ILIA, EltaMD (direct) + Wirecutter (publisher).

Geography: US (primary, daily on top 50) + UK (secondary, weekly on top 30).

SERP-feature tracking: Featured Snippet, AI Overview, PAA, Image Pack on every keyword.

Alerts: 5-position drop on priority → Slack within 24 hrs; SERP-feature loss → weekly digest; branded position-1 loss → immediate.

Dashboard: Looker Studio with sun-care / skincare-ingredients / refills cluster rollups + competitor SoV trend + top-mover weekly + Featured Snippet vs AI Overview share-tracker.

Cost: $250-300/mo (AccuRanker tier appropriate for keyword volume).

Risks: daily-noise temptation; flag review cadence to head off panic moves on single-day swings.

Saved to `businesses/field-and-sun/analytics/rank-tracking-setup-2026-05-01.md`.
