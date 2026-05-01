---
name: build-seo-wins-backlog
description: Consolidates the outputs of keyword research, intent classification, competitor analysis, and clustering into a scored, sequenced SEO wins backlog. Tags each opportunity by archetype (striking-distance, content gap, on-page, technical, refresh, link), applies ICE or RICE scoring, defines "done" per win, and produces a 90-day sequence. Use whenever the user asks "what should we work on first," "turn this into a backlog," "prioritise these opportunities," "build me a 90-day SEO plan," "what are the quick wins," or has finished strategy work and needs to convert it into action. Also use when reviewing existing SEO work and deciding what to ship next quarter. Do not use to do the underlying research — that's covered by the upstream skills (`generate-seed-keywords`, `classify-keyword-intent`, `audit-competitor-seo`, `cluster-keywords`).
---

# Build SEO Wins Backlog

This skill turns the messy outputs of strategy work — cluster maps, competitor reports, GSC exports, technical audits — into a single, scored, sequenced backlog. The backlog is the artifact the team actually works against. Each row is a discrete win with an archetype, a score, a definition of done, an owner, and a planned ship window.

The skill is opinionated about a few things: every win has a definition of done; quick wins ship alongside deep work, not after; scoring is honest (not everything is high impact); and the output sequences into a 90-day plan, not just an unranked list.

## When to use this skill

- The user has finished strategy work (any combination of keyword research, intent classification, competitor analysis, clustering) and asks how to convert it into action.
- The user asks "what should we ship first," "what are the quick wins," "give me a 90-day SEO plan," or similar prioritisation framing.
- The user is briefing a team, agency, or freelancer and needs a concrete, sequenced workplan.
- The user is doing a quarterly SEO review and consolidating opportunities.
- The user has multiple sources of opportunities (cluster map + competitor audit + GSC export + technical findings) and needs them merged into one backlog.

## When NOT to use this skill

- The underlying strategy work hasn't been done — use the upstream skills first (`generate-seed-keywords`, `classify-keyword-intent`, `audit-competitor-seo`, `cluster-keywords`).
- The user wants to track ongoing work execution after the backlog exists — that's project management, not this skill. Recommend pasting the backlog into the user's PM tool of choice.
- The user wants a content calendar specifically — produce the backlog and recommend deriving the calendar from it.

## Inputs required

1. **Strategy inputs** — any combination of: cluster map (from `cluster-keywords`), competitor opportunity list (from `audit-competitor-seo`), striking-distance keyword list (typically a GSC queries export filtered to positions 11-30), technical audit findings, refresh candidates (existing pages with traffic decay), link prospects.
2. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. The profile drives Impact scoring (alignment to goals in section 7) and Fit scoring (alignment to brand voice in section 8 and team/resourcing constraints).
3. **Time horizon** — default to 90 days. Ask if the user wants a different horizon (30/60/180).
4. **Resourcing** — how many hours/week the team can dedicate, who can do content vs technical vs link work. Drives realistic sequencing.
5. **Scoring framework preference** — ICE (default) or RICE. Ask only if it matters; default to ICE.

If the only strategy input is a vague "we want more SEO," push back and recommend at least running `generate-seed-keywords` and one competitor audit first. The backlog needs raw material.

## Process

1. **Consolidate inputs into a single working list.** Each opportunity becomes one row, regardless of source. A cluster from the cluster map = 1 row (or split into multiple rows if it implies a hub and spokes). A competitor opportunity = 1 row. A striking-distance keyword = 1 row. Don't try to be clever about merging at this stage — get everything into a flat list first.
2. **Tag each row with archetype.** One of:
   - **Striking-distance** — page already ranking 11-30 for a relevant keyword. Almost always quickest to ship.
   - **Content-gap** — competitor ranks, you don't, you should build a page.
   - **On-page** — improve a live page (title, H1, headers, internal links, schema, copy).
   - **Technical** — crawl, index, speed, structured data, canonical, sitemap fix.
   - **Refresh** — existing page with traffic decay; update content, expand sections, re-publish.
   - **Link** — outreach to a specific publication, partnership, or digital PR opportunity.
3. **Score each row on Impact / Effort / Confidence (ICE).** Use 1-5 scales:
   - **Impact** — expected traffic / revenue lift if it succeeds. Calibrate against the business profile (a P0 product cluster scoring 5; a low-volume informational refresh scoring 2).
   - **Effort** — total person-hours, where 1 = under a day and 5 = multi-week project. Lower is better.
   - **Confidence** — how sure you are it will work. 5 = high (e.g. striking-distance with strong on-page signals), 1 = speculative.
   - Compute **Score = Impact × Confidence / Effort**. (For RICE: Reach × Impact × Confidence / Effort.) Don't fake precision — Score is for ordering, not absolute valuation.
4. **Write a definition of "done" per row.** Specific and observable. Examples: "Title and meta updated to [new], indexed within 7 days, GSC click-through monitored for 30 days." "FAQPage schema added to /products/X, validated in Rich Results Test, no GSC errors after 14 days." "Pillar page /guides/mineral-sunscreen published, 8 spoke posts internally linked, 3 external links earned within 60 days." Vague rows become zombies — push back if Done can't be stated.
5. **Sort by score descending.** Then do a sanity pass: surface the top 10-15 and confirm they include a mix of archetypes (you want striking-distance and on-page wins shipping in week 1, even if a content-gap project ranks higher on raw score).
6. **Sequence into time horizons.** Map rows to: Weeks 1-2 (quick wins), Weeks 3-6 (mid-effort), Weeks 7-12 (deep work). Constrain by the user's resourcing: total scheduled effort across all weeks ≤ available hours. If the backlog overflows the horizon, rows below the line stay in the backlog as "next quarter."
7. **Assign owners.** Match each row to a likely owner based on the archetype and the user's team. Even with one person, write the name. Unowned rows don't ship.
8. **Define a weekly review cadence.** Recommend a 30-minute weekly review: ship from the top, log outcomes on shipped wins (rank/traffic/clicks 30-60 days later), prune stale rows, add new opportunities. Without this loop the backlog goes stale.

## Output format

```markdown
# SEO Wins Backlog — [Business Name]

**Horizon:** [n] days  | **Scoring:** ICE  | **Created:** [date]
**Total opportunities:** [n]  | **Scheduled:** [n]  | **Backlog (unscheduled):** [n]

## Distribution by archetype
| Archetype | Count | Avg Score |
|-----------|------:|----------:|
| Striking-distance | ... | ... |
| Content-gap | ... | ... |
| On-page | ... | ... |
| Technical | ... | ... |
| Refresh | ... | ... |
| Link | ... | ... |

## Backlog (sorted by score)

| # | Win | Archetype | Impact | Effort | Confidence | Score | Owner | Window | Definition of done |
|---|-----|-----------|-------:|-------:|-----------:|------:|-------|--------|-------------------|
| 1 | ... | ... | ... | ... | ... | ... | ... | Wk 1 | ... |
| 2 | ... | ... | ... | ... | ... | ... | ... | Wk 1 | ... |
| ... |

## 90-day sequence

### Weeks 1-2 — Quick wins (ship velocity)
Bulleted list of the rows scheduled for these weeks, with owner.

### Weeks 3-6 — Mid-effort projects
Bulleted list.

### Weeks 7-12 — Deep work
Bulleted list.

## Backlog (next quarter)
Rows that didn't fit in this horizon, listed for visibility.

## Weekly review cadence
2-3 sentences specifying when the team reviews the backlog, who runs the review, and what gets logged on shipped wins (rank, traffic, clicks at 30/60-day check-in).

## Risks and watchouts
3-5 specific risks for this backlog given the user's business and resourcing. e.g. "Content-gap items rely on a writer who isn't yet hired — if not in place by Wk 3, slide content rows by 4 weeks."
```

Save the produced file to `businesses/<slug>/backlog/seo-wins-backlog.md`. Create the `backlog/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it. If the user re-runs this skill later (e.g. quarterly review), the new backlog should overwrite the previous file — but recommend the user keep a dated copy in the same folder if they want history (e.g. `seo-wins-backlog-2026-q3.md`).

## Quality bar

- Every row has an archetype, a score, an owner, a window, and a definition of done. No exceptions.
- Score distribution is honest. Not every row is a 5. The point is ordering.
- Weeks 1-2 are dominated by quick wins (striking-distance, on-page) so the team gets visible momentum.
- Total scheduled effort fits in the user's stated capacity.
- The 90-day sequence reads like a credible workplan, not a wishlist.

## Common mistakes to avoid

- Don't dump every input row into the backlog without filtering. Score everything, but cut the bottom — items below a threshold (e.g. Score < 1) are noise.
- Don't schedule only deep work. Without weekly velocity the team loses momentum within a month.
- Don't write vague Done criteria. "Improve the page" is not Done. Push back until each row has an observable change.
- Don't ignore the link archetype because it's harder to score. Link wins compound; include them even if Confidence is lower.
- Don't pretend the backlog is final. Recommend the weekly review explicitly.

## Example

**Inputs (abbreviated):** Cluster map with 32 clusters (17 already mapped to existing URLs, 15 needing new pages); competitor audit with 12 opportunities; GSC export showing 23 striking-distance keywords; 3 technical findings (duplicate canonicals on collection pages); 6 stale blog posts >18 months old.

**Output (abbreviated):** Consolidated backlog of 51 rows across 6 archetypes. Top 10 by score: 6 striking-distance keyword updates (each Effort 1, Score 8-12), 2 on-page wins (FAQPage schema, internal linking from blog hub, Score 6-8), 1 collection-page revamp for /collections/mineral-sunscreen (Impact 5, Effort 3, Confidence 4, Score 6.7), 1 [ingredient] science pillar page launch (Impact 5, Effort 5, Confidence 3, Score 3 but high strategic priority). 90-day sequence: Wk 1-2 ships 6 striking-distance + 2 on-page + 1 technical (10 wins). Wk 3-6 builds the collection revamp + 3 spoke posts. Wk 7-12 ships the pillar + remaining spokes + outreach to 8 publications. Weekly review every Monday, owner = founder. Risks include writer capacity and a flag that the technical canonical fix needs dev time not yet scoped.
