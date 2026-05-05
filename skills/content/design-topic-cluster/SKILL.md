---
name: design-topic-cluster
description: Converts a hub topic from the cluster map into a full pillar + spoke architecture. Identifies which spokes exist already vs. need to be built, produces the bidirectional internal-linking matrix (pillar→spokes, spokes→pillar, spoke↔spoke cross-links), flags duplicate or overlapping spokes for merge / re-scope, and outputs a sequencing plan. Use whenever the user asks to "design a topic cluster," "build the cluster around [topic]," "wire up our [topic] hub-and-spoke," "convert these blog posts into a topic cluster," "what should our cluster architecture look like for [topic]," or has decided a cluster is worth building and needs the architectural spec before commissioning content. Also use when consolidating a set of standalone blog posts into a structured cluster (the most common Field & Sun-style scenario). Do not use to design only the pillar (use `design-pillar-page` for that) or to plan blog content broadly (use `plan-blog-content`).
---

# Design Topic Cluster

This skill produces the architectural spec for a topic cluster — pillar + spokes + linking matrix + sequencing plan. The output is the artefact the team uses to coordinate pillar build, spoke updates, and new-spoke production.

The skill is opinionated about a few things: clusters are 1 pillar + 5-10 spokes (anything outside that range warrants different treatment); linking is bidirectional (spokes link to pillar; pillar links to spokes); spokes don't compete with each other for the same query (de-duplication is part of the design); architecture decisions should be sequenced (don't try to build the whole cluster in week one).

## When to use this skill

- The user has a cluster map and wants to architect a specific cluster.
- The user has a pile of existing blog posts that informally cover one topic and wants to turn it into a structured cluster.
- The user is briefing a team / agency on a multi-quarter content build for one topic area.
- The user wants to coordinate pillar + spoke work and needs the linking matrix.
- The user is auditing existing clusters for de-duplication / over-overlap.

## When NOT to use this skill

- The user wants to design only the pillar page (no spokes context) — use `design-pillar-page`.
- The user wants a 90-day blog calendar across multiple clusters — use `plan-blog-content`.
- The user is doing keyword research / clustering — use `cluster-keywords`.
- The user wants to brief one specific blog post — use `generate-content-brief`.
- The user wants to refresh existing content — use `plan-content-refresh`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), goals (7), brand voice (8).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Required. The hub topic must be present in the cluster map; if it isn't, ask whether to add it or run `cluster-keywords` first.
3. **Hub topic / cluster ID** — required. Which cluster is being architected.
4. **Existing blog inventory** — read `businesses/<slug>/blog-inventory.md` if it exists, or ask the user to list current blog posts. Spokes are usually a mix of existing and to-be-built; the skill identifies which is which.
5. **Editorial calendar** — read `businesses/<slug>/editorial-calendar.md` if it exists. Spokes that are *planned but not yet written* are part of the cluster too.
6. **Pillar status** — does a pillar already exist for this cluster, or will one need to be built? Affects sequencing.
7. **Cluster format preference** — optional. "Tight cluster" (5-7 spokes, narrow scope) or "broad cluster" (8-10 spokes, wider topic surface). Default: tight, unless the cluster map shows a clearly broad topic.

If cluster map or hub topic is missing, ask. The architecture is anchored to a specific cluster.

## Process

1. **Validate the cluster.** Confirm it meets cluster criteria:
   - 5+ spoke-shaped sub-topics (existing or planned). Below this, treat as a "loose cluster" — sibling posts that link to each other but don't yet warrant a pillar.
   - Hub topic has meaningful head-term volume (typically 500+/mo). Below this, the pillar may not earn its build cost.
   - Brand has the depth to cover the topic substantively across 5-10 pages.
   If criteria aren't met, flag and recommend deferring or treating as standalone.
2. **Inventory the spokes.** From cluster map + blog inventory + editorial calendar:
   - Spokes already published. List with current URL.
   - Spokes on the calendar (planned but not written). List with target ship date.
   - Spokes implied by the cluster map but not yet on the calendar. These are gaps.
3. **De-duplicate.** Are two spokes targeting overlapping queries? Common patterns:
   - "Best mineral sunscreen for sensitive skin" + "Mineral sunscreen for eczema" — overlapping; recommend consolidation into one canonical spoke that covers both intents.
   - "How does mineral sunscreen work" + "What is mineral sunscreen" — near-identical intent; one canonical post.
   For each duplicate, recommend: (a) merge content into one URL, redirect the other; (b) re-scope one to a clearly different angle; or (c) leave both if intents are genuinely distinct.
4. **Decide pillar status.** If a pillar already exists, use it. If not, recommend building (or note that this cluster doesn't warrant a pillar yet — keep it as a loose cluster).
5. **Build the linking matrix.** For each spoke ↔ pillar pair, specify the link direction, anchor pattern, and where in the body. For spoke ↔ spoke pairs, only specify cross-links where the topics naturally overlap (don't force every spoke to link to every other spoke).
6. **Plan cross-cluster links.** Where does this pillar link to other pillars on the site? Where do other pillars link to this one? E.g. mineral sunscreen pillar ↔ skincare ingredients pillar.
7. **Sequence the build.** What order should the work ship in? Typical pattern:
   - Wave 1 (week 0): de-duplication of existing spokes (merge, redirect, re-scope).
   - Wave 2 (week 1-3): pillar brief via `design-pillar-page`; existing spokes updated to link to the upcoming pillar URL.
   - Wave 3 (week 3-7): pillar drafted, photographed, schema'd, launched.
   - Wave 4 (week 7-12): new spokes ship per editorial calendar, each with cluster wiring at publish time.
8. **Decide cluster-level success metrics.** What does "this cluster is working" look like in 6 months?
9. **Write the architectural spec.** Output is a structured Markdown doc the team can execute against.

## Output format

```markdown
# Topic Cluster Architecture — [Hub topic]

**Cluster ID:** [from cluster map]
**Pillar topic:** [topic name]
**Pillar primary keyword:** [head term + volume]
**Pillar URL:** [existing URL or proposed URL]
**Spoke count:** [n existing + n planned + n new = total]
**Architecture date:** [date]

## Cluster validation
- Spoke count: [n] (criterion: 5+) → [pass / fail]
- Hub-term volume: [n/mo] (criterion: 500+/mo) → [pass / fail]
- Brand depth: [yes / borderline / no] → [pass / fail]
- Verdict: [build / loose-cluster-only / defer]

## Pillar
- **Status:** [exists at URL / to be built]
- **Primary keyword:** [head term]
- **Brief:** [link to pillar brief if produced via `design-pillar-page`]

## Spokes

### Existing (published)
| URL | Primary keyword | Cluster role | Notes |
|-----|-----------------|--------------|-------|
| /blog/how-mineral-sunscreen-works | how does mineral sunscreen work | Foundational explainer | Performing well — keep, link to pillar |
| /blog/zinc-oxide-safe-daily | is zinc oxide safe daily | Safety / FAQ | ... |

### Planned (on editorial calendar)
| Slug | Primary keyword | Target ship date | Cluster role |
|------|-----------------|------------------|--------------|
| /blog/mineral-vs-chemical | mineral vs chemical sunscreen | 2026-05-15 | Comparison |
| ... | ... | ... | ... |

### Recommended new (not yet on calendar)
| Slug (proposed) | Primary keyword | Cluster role | Priority |
|-----------------|-----------------|--------------|----------|
| /blog/spf-application-guide | how to apply mineral sunscreen | How-to | P1 |
| ... | ... | ... | ... |

## De-duplication recommendations
- **Merge:** [URL A] + [URL B] → consolidate at [URL A]; redirect [URL B] → [URL A]. Reason: overlapping intent.
- **Re-scope:** [URL C] currently targets [keyword X]; recommend re-scoping to [keyword Y] to avoid overlap with [URL D].
- **No action:** [URLs that look similar but actually serve distinct intents].

## Linking matrix

### Pillar ↔ spokes (bidirectional, required)
| Direction | From → To | Anchor pattern | Where in body |
|-----------|-----------|----------------|---------------|
| Pillar → spoke 1 | /guides/mineral-sunscreen → /blog/how-mineral-sunscreen-works | "how mineral sunscreen works" | Section 2 body |
| Spoke 1 → pillar | /blog/how-mineral-sunscreen-works → /guides/mineral-sunscreen | "complete mineral sunscreen guide" | Intro paragraph + closing CTA |
| Pillar → spoke 2 | /guides/mineral-sunscreen → /blog/zinc-oxide-safe-daily | "is zinc oxide safe daily" | Section 4 body |
| Spoke 2 → pillar | /blog/zinc-oxide-safe-daily → /guides/mineral-sunscreen | "mineral sunscreen guide" | Intro + body |
| ... | ... | ... | ... |

### Spoke ↔ spoke cross-links (selective)
| From | To | Anchor pattern | Reason |
|------|----|----|--------|
| /blog/mineral-vs-chemical | /blog/zinc-oxide-safe-daily | "zinc oxide safety" | Comparison post naturally references safety post |
| /blog/sensitive-skin-spf | /blog/spf-application-guide | "how to apply" | Sensitive-skin post benefits from application detail |
| ... (only where topics genuinely overlap) | | | |

### Cross-cluster links
| From | To | Reason |
|------|----|----|
| /guides/mineral-sunscreen | /guides/skincare-ingredients | Pillars share ingredient overlap (zinc oxide) |
| /guides/skincare-ingredients | /guides/mineral-sunscreen | Reciprocal |

## Sequencing plan

### Wave 1 (week 0): De-duplication
- [ ] Merge [URL A] into [URL B]; deploy 301 redirect.
- [ ] Re-scope [URL C] per recommendation; update title, headers, body.
- [ ] Verify in GSC: redirected URLs not orphaned.

### Wave 2 (weeks 1-3): Pillar prep
- [ ] Run `design-pillar-page` for pillar brief.
- [ ] Update existing spokes to link to pillar's planned URL (placeholder allowed; will go live with pillar).
- [ ] Photography / asset shoot scheduled.

### Wave 3 (weeks 3-7): Pillar launch
- [ ] Pillar drafted (3 weeks).
- [ ] Photography + schema (1 week).
- [ ] Edit + ship (1 week).
- [ ] Confirm spoke→pillar links resolve correctly post-launch.
- [ ] Submit pillar URL to GSC for re-indexing.

### Wave 4 (weeks 7-12+): Spoke production + ongoing
- [ ] New spokes ship per editorial calendar with cluster wiring at publish time.
- [ ] Pillar receives internal-link prominence (homepage / nav / footer).
- [ ] Cluster-level dashboard set up in analytics.

## Cluster-level success metrics (6-month horizon)
- Pillar primary keyword position: [target — e.g. top 10]
- Cluster total organic traffic: [target — e.g. 3x baseline]
- Average spoke-keyword position: [target — e.g. lift of 2-5 positions]
- Internal-link integrity: 100% of pillar↔spoke links resolve (no 404s, no broken anchors)
- Cluster-internal cannibalisation: 0 (post-de-duplication)

## Risks and watchouts
3-5 specific risks. E.g. "If pillar launch slips beyond week 7, existing spokes' placeholder links will be broken — set up a fallback"; "Vitamin-C cluster also needs architecture work — sequence so the same writer / photographer isn't double-booked"; "Cluster has 12 candidate spokes — recommend tightening to 8 to avoid sprawl"; "Two existing spokes have decayed traffic — recommend `plan-content-refresh` in parallel rather than just adding cluster wiring."

## Implementation checklist
- [ ] Run `design-pillar-page` to produce pillar brief.
- [ ] Run `generate-content-brief` per new spoke (for new content).
- [ ] Run `plan-content-refresh` on existing spokes if any are decayed.
- [ ] Update internal-link audit (`audit-page-internal-links`) post-cluster-build.
- [ ] Schedule cluster review at 3 months, 6 months.

## Open questions for the user
- [ ] Is the proposed cluster scope correct (or should we split / merge)?
- [ ] Are there spokes I should include / exclude that the cluster map missed?
- [ ] Is the sequencing realistic given the team's content production capacity?
- [ ] Confirm the pillar URL pattern (`/guides/...` vs `/blog/...`).
```

Save the produced file to `businesses/<slug>/topic-clusters/<cluster-slug>.md`. Create the `topic-clusters/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Cluster validation is performed against criteria (5+ spokes, 500+/mo head term, brand depth); if criteria fail, the spec flags and recommends.
- Spoke inventory cleanly distinguishes existing / planned / recommended-new.
- De-duplication recommendations are specific and actionable, not generic.
- Linking matrix covers both directions (pillar ↔ spokes) and selective spoke ↔ spoke; doesn't force linking where topics don't overlap.
- Cross-cluster links are identified where genuinely relevant, not bolted on.
- Sequencing plan respects realistic timelines (pillars take 4-8 weeks, not 1).
- Success metrics are observable and concrete (positions, traffic multiples, link integrity), not "make it good."
- Risks section covers ops dependencies (writer capacity, photo shoots, double-booking), not just SEO factors.

## Common mistakes to avoid

- Don't recommend a full cluster build when the cluster has only 3-4 spokes. Loose cluster (sibling-link-only) is the right pattern at that size.
- Don't force spoke ↔ spoke cross-links where topics don't naturally overlap. Forced internal links read badly to readers and signal poorly to Google.
- Don't ignore existing decayed spokes. A cluster wired into decayed pages doesn't earn the architectural lift; refresh the spokes in parallel.
- Don't skip the de-duplication step. Cluster-internal cannibalisation is the single most common cluster failure mode.
- Don't propose a sequencing plan that assumes the team can produce 8 spokes in 4 weeks. Realistic cadence is 2-4 substantive posts per month.
- Don't omit the cross-cluster linking. Site-wide topical structure depends on pillars linking to each other where genuinely relevant.
- Don't year-stamp pillar URLs. `/guides/mineral-sunscreen` is evergreen; `/guides/mineral-sunscreen-2026` ages quickly.
- Don't confuse cluster map (output of `cluster-keywords`) with cluster architecture (output of this skill). They're sequential artefacts; this one builds on the first.

## Example

**Input (abbreviated):** Field & Sun. Cluster I-PILLAR-1 from cluster map (sun-care informational hub). Existing blog inventory: 5 sun-care posts. Editorial calendar: 3 more sun-care posts planned for the next 90 days.

**Output (abbreviated):**

Cluster validation: passes (8 spokes, 1,200 vol, brand depth strong on sun care).

Pillar: to be built at `/guides/mineral-sunscreen`. Brief queued via `design-pillar-page`.

Spokes — existing (5): how-mineral-sunscreen-works, zinc-oxide-safe-daily, mineral-sunscreen-sensitive-skin, sunscreen-application-mistakes, daily-spf-routine. Planned (3): mineral-vs-chemical, tinted-vs-untinted, non-nano-zinc-oxide-explained. Recommended new (0 for now — cluster is right-sized at 8).

De-duplication: "mineral-sunscreen-sensitive-skin" and an older draft "best-spf-for-eczema" overlap. Recommend merge: keep sensitive-skin URL, redirect eczema URL.

Linking matrix: 8 spoke→pillar links, 8 pillar→spoke links, 6 spoke↔spoke cross-links (where topics overlap), 2 cross-cluster links to skincare-ingredients pillar.

Sequencing: Wave 1 — merge eczema redirect this week. Wave 2 — pillar brief + spoke link updates over next 2 weeks. Wave 3 — pillar launch in 5 weeks. Wave 4 — 3 new spokes ship over weeks 6-12.

Success metrics at 6 months: pillar position ≤10 for "mineral sunscreen guide"; cluster traffic 3x baseline; average spoke position lift 2-5.

Risks: vitamin-C cluster also queued for architecture; sequence to avoid same-writer overload. Pillar photography (three-skin-tone swatch test) is a critical-path dependency — schedule in week 2.

Saved to `businesses/field-and-sun/topic-clusters/sun-care.md`.
