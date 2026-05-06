---
name: plan-blog-content
description: Produces a blog content calendar: topic ideas, target keywords, intent tags, and publication cadence. Use when planning a blog quarter or building the editorial pipeline.
---

# Plan Blog Content

This skill turns a cluster map and current blog inventory into a 30/60/90-day editorial calendar. The output is a sequenced plan: which clusters get posts, in what order, with what archetype, matched against the team's content production capacity and the business's seasonal priorities.

The skill is opinionated about a few things: every planned post targets a cluster from the cluster map; cadence matches realistic team capacity (most teams over-plan); seasonality matters (don't ship sun-care posts in November); the calendar pairs new posts with refresh candidates rather than treating them separately.

## When to use this skill

- The user has a cluster map and asks how to convert it to a content calendar.
- The team is briefing content writers / contractors / agencies and needs the production plan.
- Quarterly editorial-calendar refresh as priorities shift.
- After a strategy update (new product launch, new market, seasonal pivot) where the calendar needs to reflect new priorities.
- The user is auditing blog coverage and wants to surface gaps.

## When NOT to use this skill

- The user wants the brief for a specific post — use `generate-content-brief`.
- The user wants to refresh existing posts — use `plan-content-refresh` (this skill includes refresh-vs-new trade-offs but the deep refresh analysis is its own workflow).
- The user wants to design the architectural relationship between posts (pillar + spokes) — use `design-topic-cluster`.
- The user wants to plan a single high-effort piece (pillar page, programmatic template, tool page) — those have their own dedicated skills.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), goals (7), brand voice (8). Goals (7) drive seasonal sequencing; brand voice (8) shapes archetype selection.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Required. Without it, the calendar is guesswork.
3. **Current blog inventory** — list of currently-published blog posts with URL, primary keyword, cluster (if mapped), publish date, current organic traffic. From sitemap export + GSC. If absent, ask for at least URLs + primary topics.
4. **Team capacity** — required. Realistic posts per month (in-house writer, contractor, AI-assisted). Most teams ship fewer than they plan; ask for the honest number.
5. **Seasonal priorities** — required. Field & Sun's example: Sun Drops cluster needs coverage *before* the May–August peak; vitamin-C cluster has no seasonality; refills cluster ramps for Q4 holiday gifting. Ask for the calendar shape.
6. **Brief stub depth** — optional. The skill defaults to producing minimal stubs (cluster, primary keyword, archetype, 1-line angle) per planned post; the user can request fuller stubs that would feed directly into `generate-content-brief` without further input.

If cluster map or capacity is missing, ask. The calendar is anchored to both.

## Process

1. **Read the cluster map.** Identify which clusters are blog-shaped: informational and commercial intents. Transactional clusters belong on PDPs / collections; navigational on branded pages — exclude these from blog scope.
2. **Audit current inventory.** Cross-reference every existing blog post against cluster IDs. Output:
   - **Cluster covered + post performing well** (organic traffic > 100/mo): no action needed.
   - **Cluster covered + post performing poorly** (organic traffic < 50/mo or position > 30): refresh candidate. Flag for `plan-content-refresh`, don't re-plan as new content.
   - **Cluster covered + post unmapped to current strategy** (off-strategy, low traffic, doesn't fit cluster map): de-publish or re-purpose candidate. Flag.
   - **Cluster uncovered**: gap. Candidate for new content.
3. **Score uncovered clusters by priority.** For each:
   - **Strategic fit** — does it serve a current business goal? (Field & Sun goals: 2x organic by Q4, sun-care top-3 before peak. Clusters tied to those = high fit.)
   - **Seasonal urgency** — does the topic have demand seasonality? When does it peak?
   - **Difficulty** — realistic for the brand's DR? Long-tail or head term?
   - **Cluster volume** — total monthly searches across the cluster.
   - **Brand-distinct angle available** — can THIS brand say something distinctive? Or is it a commodity topic?
4. **Decide cadence.** Multiply team capacity by 90 days. E.g. 2 posts/month = 6 posts in 90 days. Most teams overestimate capacity; round down. Reserve 20-30% of slots for refresh work (which `plan-content-refresh` will fill out separately). So 6 new-post slots becomes 4 new + 2 refresh.
5. **Sequence the calendar.** Match seasonality + priority + capacity:
   - High-priority + high-seasonal-urgency clusters get earliest slots.
   - Mix archetypes across the calendar (don't ship 4 explainers in a row; alternate explainer + comparison + how-to + ingredient deep-dive).
   - Pair some new posts with refresh work in the same week (often the same writer can do both).
6. **Pick an archetype per planned post.** Common archetypes:
   - **Explainer** — "how does X work" (informational, mid-funnel)
   - **Comparison** — "X vs Y" (commercial, mid-funnel)
   - **Roundup** — "best X for Y" (commercial, hard to win against publishers but high-volume)
   - **How-to / tutorial** — "how to X" (informational, action-oriented)
   - **Ingredient / feature deep-dive** — "what is X" / "why X matters" (educational, evergreen)
   - **Persona-targeted** — "X for [persona]" (commercial, narrower competition)
   - **Opinion / take** — founder-led perspective (educational, distinctive)
7. **Identify the brand-distinct angle per post.** Each post should have an angle the brand can credibly own — own product testing, customer evidence, founder expertise, market specifics. Generic angles produce generic content.
8. **Generate brief stubs.** For each planned post: cluster ID, primary keyword + supporting keywords, archetype, brand-distinct angle, target word count, publish week, owner. These stubs feed into `generate-content-brief` when the post is ready to be briefed in full.
9. **Surface unmapped existing posts.** Posts that don't fit any cluster in the current map — flag for de-publish, merge, or re-purpose decisions. The calendar isn't just additive; pruning is part of the plan.

## Output format

```markdown
# Blog Content Calendar — [Business Name]

**Window:** Next 90 days (rolling)
**Cadence:** [n] new posts/month + [n] refresh efforts/month
**Plan date:** [date]

## Coverage audit

### Cluster coverage matrix
| Cluster | Cluster type | Current post? | Performance | Action |
|---------|-------------|---------------|-------------|--------|
| I01 — how mineral sunscreen works | Informational | No | n/a | New (P0, seasonal) |
| I02 — mineral vs chemical sunscreen | Informational | Yes — `/blog/mineral-vs-chemical-sunscreen` | 480/mo, pos 6 | No action |
| I04 — is zinc oxide safe daily | Informational | No | n/a | New (P0) |
| ... | ... | ... | ... | ... |

### Decay candidates (flagged for `plan-content-refresh`)
- [Post URL] — [primary keyword] — current traffic, suggested refresh angle.

### Off-strategy candidates (flagged for de-publish / merge)
- [Post URL] — [reason — doesn't fit any current cluster, low traffic, off-brand].

## Editorial calendar

### Wk 1-2
| Wk | Post (working title) | Cluster | Primary keyword | Archetype | Brand-distinct angle | Word count | Owner | Notes |
|----|----------------------|---------|-----------------|-----------|---------------------|------------|-------|-------|
| 1 | How does mineral sunscreen actually work? | I01 | how does mineral sunscreen work | Explainer | Own-product zinc-oxide testing on three skin tones | 1,800 | Writer A | Snippet candidate |
| 2 | Is zinc oxide safe for daily use? | I04 | is zinc oxide safe daily | Explainer | Field & Sun publishes ingredient percentages | 1,500 | Writer A | — |

### Wk 3-5
[Same structure]

### Wk 6-8
[Same structure]

### Wk 9-12
[Same structure]

## Brief stubs

For each planned post, a stub that feeds into `generate-content-brief`:

```yaml
- post: How does mineral sunscreen actually work?
  cluster: I01
  primary_keyword: how does mineral sunscreen work
  supporting_keywords:
    - what is mineral sunscreen
    - how do mineral filters work
    - zinc oxide vs titanium dioxide
  archetype: Explainer
  intent: Informational
  brand_angle: Own-product zinc-oxide testing on three skin tones; ingredient-led plain language
  word_count: 1,800
  internal_links_to:
    - /products/mineral-sun-drops-spf-50 (PDP)
    - /blog/mineral-vs-chemical-sunscreen (sibling spoke, if published)
  pillar: /blog/skincare-ingredient-guide (if exists; flag if needs creation)
  publish_week: 1
  owner: Writer A
- post: ...
```

## Capacity check

- Total posts in 90-day plan: [n new] + [n refresh] = [total]
- Team-capacity assumption: [n / month] = [n in 90 days]
- Reality check: [match / overplanned / underplanned]
- Recommendation if overplanned: [drop X posts from Wk 9-12 or extend to 120 days].

## Risks and watchouts

3-5 specific risks: e.g. "Writer A vacation in Wk 5-6 — re-sequence or commission contractor"; "sun-care peak begins Wk 8; Wk 1-7 is the publication window — late posts won't index in time"; "seasonal calendar assumes May launch; if delayed past mid-May, pull peak-cluster posts forward."

## Implementation checklist

- [ ] Brief Wk 1-2 posts via `generate-content-brief` (run separately for each).
- [ ] Confirm writer capacity match.
- [ ] Set up content calendar in [Notion / Airtable / Asana / etc.].
- [ ] Schedule monthly review of plan vs actual.
- [ ] Pair refresh efforts with new content per the cadence.
- [ ] Update the per-business AGENTS.md decisions log with strategic shifts (priority cluster changes, capacity changes).

```

Save the produced file to `businesses/<slug>/blog-content/calendar-<YYYY-MM-DD>.md`. Create the `blog-content/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every planned post has a cluster ID, primary keyword, archetype, brand-distinct angle, word count, and owner.
- Coverage audit is complete (every cluster checked) and surfaces both gaps and decay candidates.
- Cadence assumption is honest about team capacity — overplanning is the most common failure mode.
- Seasonality is reflected in the sequencing — sun-care posts ship before sun-care peak, not after.
- Brief stubs are formatted to feed cleanly into `generate-content-brief`.
- Refresh candidates are surfaced as part of the same plan (not deferred to a separate workflow).
- Off-strategy posts are flagged for pruning, not silently ignored.

## Common mistakes to avoid

- Don't plan more posts than the team can ship. Calendars that overpromise produce thin work.
- Don't fill the calendar with same-archetype posts. Mix explainer + comparison + how-to + deep-dive.
- Don't ignore seasonality. Sun-care posts in November earn nothing.
- Don't skip the audit step. Without coverage analysis, the calendar might re-plan clusters that already have great-performing posts.
- Don't treat refresh as a separate workflow. Refresh and new content compete for the same writer hours and should sit in the same calendar.
- Don't ignore the cluster map. "Let's write about X" without a cluster anchor produces low-traffic content.
- Don't omit the brand-distinct angle. "Generic explainer of mineral sunscreen" doesn't differentiate; "Field & Sun's three-skin-tone swatch test" does.
- Don't year-stamp evergreen topics in the calendar's working titles. The actual title is decided in the brief; year-stamping during planning bakes it in unnecessarily.

## Example

**Input (abbreviated):** Field & Sun. Cluster map with 28 clusters (15 informational, 5 commercial, 8 transactional). Current inventory: 25 blog posts, 6 mapped to clusters with strong performance, 8 mapped but performing poorly (refresh candidates), 11 unmapped (off-strategy). Team capacity: 1 writer at ~3 posts/month, AI-assisted. Seasonal priority: sun-care before May–August peak.

**Output (abbreviated):**

Coverage matrix: 6 clusters covered well, 8 decay-candidate, 11 off-strategy posts. 14 clusters uncovered — 8 sun-care, 6 vitamin-C / serum-routine.

Calendar: 9 new posts + 3 refresh efforts in 90 days, sequenced by priority + seasonality:
- Wk 1-2: 2 sun-care explainers (peak-pre-launch).
- Wk 3-5: 1 sun-care comparison + 1 sun-care ingredient deep-dive + 1 refresh of an existing sun-care post.
- Wk 6-8: 2 vitamin-C-cluster posts + 1 refresh.
- Wk 9-12: 1 sun-care persona post (sensitive skin) + 2 vitamin-C posts + 1 refresh.

Brief stubs generated for all 9 new posts. 11 off-strategy posts flagged for de-publish/merge decision.

Capacity check: 12 total efforts in 90 days = 4/month. Team capacity is 3/month. Recommendation: drop or push to Wk 13+ the lowest-priority post (a vitamin-C persona piece). Adjusted plan = 11 efforts.

Risks: writer's known PTO in Wk 6 (re-sequence Wk 6 post to Wk 7); sun-care peak May 15 (Wk 1-7 must be published and indexed by then).

Saved to `businesses/field-and-sun/blog-content/calendar-2026-05-01.md`.
