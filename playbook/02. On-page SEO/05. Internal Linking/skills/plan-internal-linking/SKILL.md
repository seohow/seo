---
name: plan-internal-linking
description: Designs a site-wide internal-linking strategy from the keyword cluster map — identifies pillar pages, spoke pages, the hub-and-spoke linking matrix between them, anchor-text patterns, and the implementation sequence. Use whenever the user asks for an "internal linking strategy," "plan our internal links," "build a hub-and-spoke structure," "design topical clusters for linking," "improve our site architecture," or has just finished keyword clustering and wants to convert it into a linking plan. Also use when planning a new content section, doing a quarterly architecture review, or trying to lift topical authority around a key topic. Do not use to audit a single page's links — that's `audit-page-internal-links`. Do not use to crawl the site or fix broken links — those are technical-SEO operations.
---

# Plan Internal Linking

This skill turns a keyword cluster map into a written internal-linking strategy. The output identifies which pages are pillars, which are spokes, the linking matrix between them, anchor-text guidance per relationship, and the implementation sequence.

The plan is opinionated about a few things: hub-and-spoke is the default structural pattern; every spoke must link back to its pillar; sibling spokes link to 2-3 contextually-related spokes; anchor text varies naturally instead of repeating exact-match.

## When to use this skill

- The user has finished keyword clustering and wants to convert clusters into a site architecture.
- The user is launching a new content section and wants the linking structure designed before the first post.
- The user is doing an architectural review for an existing site and wants to identify hub-and-spoke opportunities.
- The user wants to lift topical authority around a specific topic and needs an internal-linking play.
- The user is briefing a content team and needs the linking matrix as part of the brief.

## When NOT to use this skill

- The user wants to audit one page's links — use `audit-page-internal-links`.
- The user wants to crawl the site for broken links, redirect chains, or orphan pages — that's a technical crawl operation (Screaming Frog, Sitebulb).
- The user wants to design URL structure — use `define-url-conventions`. Internal-linking strategy assumes URLs are stable.
- The user hasn't done keyword clustering yet — recommend running `cluster-keywords` first.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Section 3 (products/services) and section 7 (goals) drive which clusters to prioritise as hubs.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. The skill consumes this directly. If absent, recommend running `cluster-keywords` first.
3. **Existing pages list** — a list of currently published pages with URLs, page types, and (if available) the cluster they target. From a sitemap export, GSC export, or Shopify CMS. Helps identify orphan pages and cluster gaps.
4. **Existing internal-link state (optional but valuable)** — a Screaming Frog or Ahrefs Site Audit export showing internal-link counts per page. Without it, the plan can still be designed but execution priorities are less informed.
5. **Site scale** — small (under 50 pages), medium (50-300), large (300+). Affects how aggressively to design hubs.

If the cluster map is missing, ask before producing the plan. Without clusters there's nothing to architect.

## Process

1. **Identify hub topics.** Group clusters by topical proximity. A "hub topic" usually has 4-10 clusters under it (e.g. all the sun-care clusters, all the serum/skincare clusters, all the refill and packaging-waste informational clusters). Each hub becomes a pillar pattern. Recommend 3-7 hubs for a small/medium site; 5-15 for a large site.
2. **Pick a pillar per hub.** The pillar is the broadest-intent page in the hub. Often a collection page (transactional hubs) or a pillar blog post (informational hubs). If no suitable pillar page exists yet, flag it as "needs new pillar page" and feed back to content planning.
3. **Map spokes to pillar.** For each hub, list the 4-10 spoke pages — typically a mix of cluster-target pages (collection sub-pages, individual product pages, blog posts). Each spoke targets one cluster from the map.
4. **Design the linking matrix.** For each hub:
   - **Homepage → pillar** (always, via primary nav).
   - **Pillar → all spokes** (in body content + a "Related" module where supported).
   - **Each spoke → its pillar** (in intro paragraph + at least once in body).
   - **Each spoke → 2-3 sibling spokes** (contextual in-body links — the highest-leverage type).
   - **Pillar → 1-2 other pillars** (cross-hub links where topics genuinely overlap).
5. **Define anchor-text patterns per relationship type.** For each link direction, suggest 2-3 anchor variants so the team has a vocabulary, not a single exact-match phrase. Anchor diversity is a Google signal; this section enforces it.
6. **Identify orphan and underlinked pages.** From the existing-pages list, flag pages that aren't in any cluster, or are in a cluster but have no clear pillar/spoke role. Recommend either: link in from a relevant hub, repurpose into a hub, or de-publish.
7. **Sequence the implementation.** Plan in waves:
   - **Wave 1 (week 1):** CMS-level changes — primary nav, footer, related-content modules, breadcrumb wiring.
   - **Wave 2 (weeks 2-4):** Per-hub manual contextual linking, starting with the highest-priority hub.
   - **Wave 3 (weeks 5-8):** Remaining hubs.
   - **Wave 4 (ongoing):** Orphan-page cleanup, anchor-text diversification on legacy pages.
8. **Define the success metrics.** What will improve if this works: orphan-page count → 0; average click depth ↓; rank lifts on cluster pages within 60 days. Tie back to GSC and the rank tracker.

## Output format

```markdown
# Internal Linking Plan — [Business Name]

**Clusters in scope:** [n]
**Hubs identified:** [n]
**Pillars:** [n existing / n needing creation]
**Spokes mapped:** [n]
**Plan date:** [date]

## Hub map

### Hub 1 — [Hub topic name]
- **Pillar:** [URL or "needs new pillar page"]
- **Spokes** (target cluster in parens):
  1. [URL] (cluster ID)
  2. [URL] (cluster ID)
  3. ...
- **Hub priority:** [P0 / P1 / P2] — [why]

### Hub 2 — ...

## Linking matrix

For each hub, an explicit table:

### Hub 1 — [Hub topic name]

| From | To | Link type | Recommended anchor patterns |
|------|-----|-----------|------------------------------|
| Homepage | Pillar | Primary nav | [exact pillar name] |
| Pillar | Spoke A | In-body + Related module | "[anchor variant 1]" / "[variant 2]" / "[variant 3]" |
| Pillar | Spoke B | In-body | ... |
| Spoke A | Pillar | Intro link + body | ... |
| Spoke A | Spoke B (sibling) | In-body contextual | ... |
| ... | ... | ... | ... |

### Hub 2 — ...

## Cross-hub links
| From hub | To hub | Reason | Suggested page-pair |
|----------|--------|--------|---------------------|
| ... | ... | ... | ... |

## Orphan and underlinked pages

| URL | Page type | Current cluster (if any) | Recommendation |
|-----|-----------|--------------------------|----------------|
| ... | ... | ... | Link in from [hub] / repurpose / de-publish |

## Implementation sequence

### Wave 1 — CMS / template (Week 1)
- [Task] — [owner]
- ...

### Wave 2 — Hub 1 contextual linking (Weeks 2-4)
- [Per-page task list]

### Wave 3 — Remaining hubs (Weeks 5-8)
- ...

### Wave 4 — Orphans + anchor-text cleanup (Ongoing)
- ...

## Success metrics
- Orphan pages: [current] → 0 within 60 days.
- Average click depth: [current] → [target].
- Rank change on cluster spokes: monitor in GSC + rank tracker; expect 30-60 day lift on the priority hub's spokes.
- Internal-link count on pillars: [current per pillar] → minimum [n] inbound from spokes.

## Risks and watchouts
3-5 specific risks: pillar pages that don't exist yet (creates content dependency); CMS limitations on Related modules; legacy pages with conflicting anchor text; rank exposure on currently-ranking pages during architecture changes.
```

Save the produced file to `businesses/<slug>/internal-linking/plan.md`. Create the `internal-linking/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every hub has a pillar (named or flagged as "needs creation"), at least 4 spokes, and an explicit linking matrix.
- Anchor-text patterns are listed per relationship — not a single exact-match phrase.
- Orphan and underlinked pages are surfaced with concrete recommendations, not just listed.
- Implementation is sequenced into waves with realistic timing — not a single "do everything" bucket.
- Success metrics are measurable, not aspirational.
- Cross-hub links are minimal and intentional, not a spaghetti graph.

## Common mistakes to avoid

- Don't design a hub structure with too many hubs. 3-7 for small/medium, 5-15 for large. More than 15 is rarely a coherent architecture.
- Don't put a single page in multiple hubs. A page that's a spoke in two clusters confuses the architecture and dilutes signal. If a page is genuinely cross-cluster, designate one as primary.
- Don't recommend exact-match anchor for every link. Anchor diversity matters; produce 2-3 variants per relationship.
- Don't ignore orphans. They're the easiest fix and the most-visible audit value.
- Don't propose linking from low-authority pages to high-authority pages as a strategy. Equity flows the other way.
- Don't recommend creating new pillar pages without flagging the content-creation dependency. The user needs to know "Hub 3 is blocked until we publish a pillar."
- Don't propose a wave 1 that requires both CMS work AND content writing. Separate the work types so each wave can ship.

## Example

**Input (abbreviated):** Cluster map with 28 clusters. Existing pages: 8 product pages, 4 collection pages, 22 blog posts. Site scale: medium. Goal: lift topical authority around sun care, skincare/serums, and refills.

**Output (abbreviated):**

3 hubs: Sun care (8 spokes — peak-season priority), Serums / skincare (7 spokes), Refills & packaging waste (4 spokes). Plus 1 cross-cutting hub: Ingredient education (5 informational spokes that link laterally across the product hubs).

Pillars:

- Sun care → existing collection page `/collections/sun-care` (P0).
- Serums / skincare → existing collection page `/collections/skincare` (P0).
- Refills → existing collection `/collections/refills` (P1).
- Ingredient education → needs new pillar blog post `/blog/skincare-ingredient-guide` (flagged — content dependency).

Linking matrix per hub: pillar links to all spokes (in body + Related module); each spoke links to pillar in intro + body; spokes link to 2-3 sibling spokes contextually.

Orphans: 4 blog posts with no inbound internal links. Recommendation: link 3 in from the relevant hub spokes; de-publish 1 (low traffic, off-topic).

Wave 1 (Wk 1): Add Related-content module to blog template; update breadcrumbs to reflect new hub structure.
Wave 2 (Wk 2-4): Sun care hub contextual linking (highest-priority — peak-season demand approaching).
Wave 3 (Wk 5-7): Serums + Refills hubs.
Wave 4 (Wk 8+): Ingredient education hub once pillar post is live; orphan cleanup.

Success metrics: orphans → 0 in 60 days; click depth from 4.2 avg → 3 avg; expect 5-10 of 19 spoke pages to lift in GSC over 30-60 days.

Saved to `businesses/field-and-sun/internal-linking/plan.md`.
