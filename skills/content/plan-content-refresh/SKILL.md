---
name: plan-content-refresh
description: Use to plan content refresh; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Plan Content Refresh

This skill produces the prioritised refresh backlog for an existing content portfolio. Output covers: per-post action recommendation (refresh / rewrite / replace / prune), priority bucket (P0 / P1 / P2 / no-action), and refresh briefs for the top-priority candidates.

The skill is opinionated about a few things: not every decayed post deserves a refresh (pruning is part of the discipline); refresh should be quarterly cadence, not one-off; refresh ≠ date-bumping (substantive content change is what earns the lift); refresh briefs should include cluster-wiring updates, not just content updates.

## When to use this skill

- The user has an established content portfolio (50+ posts is when refresh ROI typically wins).
- The user is balancing new-content production against existing-content maintenance.
- The user has noticed traffic decay across the blog and wants a prioritised plan.
- The user runs a quarterly content review and wants the refresh backlog refreshed.
- The user is considering pruning old content and needs the prune / refresh / leave-alone decision per post.

## When NOT to use this skill

- The user wants to plan new content — use `plan-blog-content`.
- The user wants to brief one specific new post — use `generate-content-brief`.
- The user wants to design a topic cluster — use `design-topic-cluster`.
- The user wants to migrate / replatform the site — use `plan-site-migration`.
- The portfolio is very young (<20 posts); refresh ROI hasn't crossed over yet.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), goals (7), brand voice (8). Strategic-value scoring depends on goals.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster-active posts have higher refresh ROI than orphaned posts.
3. **Content inventory** — read `businesses/<slug>/blog-inventory.md` if it exists, or ask the user to provide a list of URLs. Each post: URL, primary keyword, publish date, last-modified date, target cluster (if known).
4. **GSC data** — required. 12-month traffic + position trend per URL. If not provided, ask the user to export (URL: gsc → Performance → Pages → Filter to last 16 months → Export CSV).
5. **Internal-link state** — optional but valuable. Output of `audit-page-internal-links` if available. Identifies which posts are linked from active pages vs. orphaned.
6. **Refresh budget** — optional. How many hours of refresh work is the team willing to invest this quarter? Affects how many P0 candidates get briefs.
7. **Pruning tolerance** — optional. Some teams prefer to refresh aggressively rather than prune; others prune freely. Ask if unclear.

If GSC data and content inventory are missing, ask. The analysis is data-driven; without data the skill is guessing.

## Process

1. **Build the per-post matrix.** For each URL in the inventory:
   - **Decay severity:** % traffic change vs. 12-month baseline. Buckets: severe (>50% loss), moderate (20-50% loss), mild (<20% loss), stable, growing.
   - **Strategic value:** is the post in an active cluster? Does it support a current business goal? Does it target a strategic keyword? Buckets: high / medium / low.
   - **Refresh effort:** how much work to refresh? Buckets: light (1-3 hrs), medium (4-8 hrs), heavy (12-20 hrs). Light = stats / examples / `dateModified`. Medium = partial restructure + new internal links. Heavy = substantial section rewrite + new assets.
2. **Apply the action matrix.**

   | Decay | Strategic value | Effort | Recommended action |
   |-------|-----------------|--------|--------------------|
   | Severe | High | Light/Medium | **Refresh — P0** |
   | Severe | High | Heavy | **Rewrite — P0** (high value justifies effort) |
   | Severe | Medium | Light/Medium | **Refresh — P1** |
   | Severe | Low | Any | **Prune** (merge / 301 / de-publish) |
   | Moderate | High | Light | **Refresh — P0** (cheap lift) |
   | Moderate | High | Medium | **Refresh — P1** |
   | Moderate | Medium | Light | **Refresh — P1** |
   | Moderate | Low | Any | **Prune or P2** |
   | Mild | High | Light | **Refresh — P2** (preventive) |
   | Mild | Medium-Low | Any | **No action** |
   | Stable/growing | Any | Any | **No action** (don't touch what's working) |

3. **Identify pruning candidates explicitly.** For each pruning recommendation, specify:
   - **Merge into**: which sibling URL absorbs the content; deploy 301 from old to new.
   - **De-publish**: 410 if no good redirect target; only for genuinely irrelevant posts.
   - **301 redirect**: to a closely related URL or category page.
4. **Cluster-wiring check.** For posts being refreshed, also note: missing pillar link, missing sibling-spoke links, broken internal links, opportunity to add transactional bridge to a PDP.
5. **Group into priority buckets.**
   - **P0 (refresh now):** 4-8 candidates typical. Severe / moderate decay × high strategic value × light/medium effort.
   - **P1 (refresh next quarter):** 6-10 candidates. Lower urgency, still worthwhile.
   - **P2 (defer or preventive):** 4-8 candidates. Worth considering but not critical.
   - **Prune:** posts to merge / redirect / de-publish.
   - **No action:** posts that are working — don't touch.
6. **Produce refresh briefs for P0 candidates.** Each brief covers: what's decayed, what to update (specific sections / assets / links), target effort, acceptance criteria.
7. **Estimate the quarter's refresh budget.** Sum P0 effort estimates; recommend deferral if budget is exceeded.
8. **Calendar the next refresh review.** Quarterly cadence — note next review date.
9. **Write the backlog + briefs.** Output is one Markdown doc with the backlog summary + a sub-doc per P0 brief.

## Output format

```markdown
# Content Refresh Plan — [Business name]

**Plan date:** [date]
**Inventory size:** [n] posts analysed
**GSC data range:** [start date] → [end date]
**Next review date:** [date + 90 days]

## Summary
| Bucket | Count | Estimated effort |
|--------|-------|------------------|
| P0 (refresh now) | n | n hours |
| P1 (refresh next quarter) | n | n hours |
| P2 (defer / preventive) | n | n hours |
| Prune | n | n hours (admin) |
| No action | n | 0 |
| **Total** | n | n hours |

## Action recommendations

### P0 — Refresh now
| URL | Cluster | Decay | Value | Effort | Action |
|-----|---------|-------|-------|--------|--------|
| /blog/how-to-apply-mineral-sunscreen | I-PILLAR-1 (sun-care) | -50% (severe) | High | Medium | **Refresh** |
| /blog/zinc-oxide-safe-daily | I-PILLAR-1 | -35% (moderate) | High | Light | **Refresh** |
| /blog/best-spf-daily-routine | I-PILLAR-1 | -45% (severe) | High | Medium | **Refresh** |
| /blog/sunscreen-myths-debunked | I-PILLAR-1 | -38% (moderate) | High | Light | **Refresh** |

### P1 — Refresh next quarter
| URL | Cluster | Decay | Value | Effort | Action |
|-----|---------|-------|-------|--------|--------|
| /blog/whats-in-our-spf | I-PILLAR-1 | Plateau | Medium | Light | **Refresh** |
| ... | ... | ... | ... | ... | ... |

### P2 — Defer or preventive
| URL | Cluster | Decay | Value | Effort | Action |
|-----|---------|-------|-------|--------|--------|
| /blog/skincare-routine-basics | I-PILLAR-2 | Mild | High | Light | **Preventive refresh — Q3** |
| ... | ... | ... | ... | ... | ... |

### Prune
| URL | Reason | Action | Notes |
|-----|--------|--------|-------|
| /blog/2023-summer-trends | Time-bound, decayed, low strategic value | **301 → /collections/sun-care** | Old trend post; redirect to category |
| /blog/old-winter-skincare-trends | Off-topic seasonal article | **De-publish (410)** | No good redirect target; was off-strategy from day 1 |
| /blog/skincare-101 | Overlaps with stronger /blog/what-is-mineral-sunscreen | **Merge → /blog/what-is-mineral-sunscreen + 301** | Consolidate; current piece is the canonical |

### No action — performing well
- /blog/how-mineral-sunscreen-works — stable +5% YoY
- /blog/three-skin-tone-test — growing +18% YoY
- ... (3-8 posts typical)

## Refresh briefs (P0 candidates)

---

### Refresh brief — /blog/how-to-apply-mineral-sunscreen

**Current state:**
- Primary keyword: "how to apply mineral sunscreen"
- Current ranking: position 14 (was position 6 12 months ago)
- Traffic: 320 visits/mo (down from 640)
- Last modified: 18 months ago
- Cluster: I-PILLAR-1 (sun-care)

**What's decayed / why:**
- SERP top 5 has shifted to longer how-to content with step-by-step photos. Current post is 800 words, no photos.
- Top-5 average word count has grown from ~900 to ~1,400.
- Stale internal links: pointed to retired `/blog/spf-types` URL.
- No link to the (new) sun-care pillar.

**Refresh actions (medium effort, ~6 hours):**
- [ ] Expand to 1,400 words: add step-by-step "how to apply" section with sub-sections.
- [ ] Commission 3 application-step photos (own product on three skin tones).
- [ ] Add link to sun-care pillar (intro + closing).
- [ ] Update internal link from `/blog/spf-types` (retired) to `/blog/how-mineral-sunscreen-works`.
- [ ] Add FAQ section (5 question-form H3s).
- [ ] Update schema: dateModified, add FAQPage schema.
- [ ] Update title tag to align with current SERP patterns ("How to Apply Mineral Sunscreen Correctly: Step-by-Step Guide").
- [ ] Update meta description.
- [ ] Submit to GSC for re-indexing.

**Acceptance criteria:**
- [ ] Word count is 1,300-1,500.
- [ ] At least 3 own-photography assets in body.
- [ ] Pillar link present in intro + closing.
- [ ] FAQ section with 5+ questions.
- [ ] No broken internal links.
- [ ] `dateModified` updated; FAQPage schema validates.

**Expected outcome (60-90 days):**
- Recover to position 7-10 for primary keyword.
- Traffic recover to 500-600 visits/mo.

---

### Refresh brief — /blog/zinc-oxide-safe-daily

[similar structure for each P0 candidate]

---

## Pruning execution checklist
- [ ] Build redirect map for all 301 candidates (use `build-redirect-map` skill if needed).
- [ ] Deploy redirects.
- [ ] Update internal links pointing to pruned URLs (update to redirect target).
- [ ] Submit redirect-source URLs to GSC for re-crawling.
- [ ] Verify in GSC after 14 days: source URLs show as redirected, not 404.
- [ ] For 410 (de-published) URLs: confirm 410 status in GSC; remove from XML sitemap.

## Quarterly review schedule
- Next review: [date + 90 days]
- Trigger: GSC data export + cluster map sync + this skill re-run.
- Owner: [name / role]

## Open questions for the user
- [ ] Confirm refresh budget for the quarter (P0 estimate is [n] hours).
- [ ] Confirm willingness to prune [n] posts.
- [ ] Confirm photographer / asset budget for the medium-effort refreshes.
- [ ] Confirm cluster assignments for any orphaned candidates.
```

Save the produced file to `businesses/<slug>/refresh/refresh-plan-[YYYY-QQ].md`. Create the `refresh/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Decay severity, strategic value, and effort are evaluated for every post in the inventory — no posts skipped.
- Action matrix is applied consistently; recommendations are not arbitrary.
- Pruning recommendations are specific (merge into X, redirect to Y, de-publish) not vague.
- P0 briefs are concrete: specific sections to update, specific assets to commission, specific links to add.
- Acceptance criteria per brief are observable (word count, link count, schema validation), not "make it good."
- Cluster-wiring updates are part of every refresh, not an afterthought.
- Quarterly cadence is calendared; refresh isn't framed as a one-off project.
- Prune-to-redirect mapping references `build-redirect-map` skill for execution.

## Common mistakes to avoid

- Don't recommend refresh on every decayed post. Some posts deserve to be pruned; recommending refresh for low-strategic-value posts wastes the team's content budget.
- Don't propose date-bumping without content change. Google has gotten better at detecting freshness theatre; the lift is modest at best.
- Don't omit cluster-wiring updates. A refreshed post that doesn't fit the current cluster architecture is half-refreshed.
- Don't underestimate refresh effort. "Quick refresh" often runs 2-3x longer than estimated. Bias estimates upward by 25-50% for unfamiliar posts.
- Don't recommend heavy refresh / rewrite for posts with substantial backlinks. Risk of temporary ranking dip during re-evaluation; for high-link pages, prefer light/medium refresh.
- Don't skip GSC re-indexing requests. Refreshes take 4-12 weeks to propagate without prompting; with prompting, 2-6 weeks.
- Don't run refresh as a one-off. Without quarterly cadence, the same decay rebuilds.
- Don't propose pruning posts with substantial backlinks without setting up 301s. Delete-without-redirect destroys the link profile.

## Example

**Input (abbreviated):** Field & Sun. Inventory: 25 posts. GSC data: 12 months. Cluster map: 28 clusters; sun-care most active.

**Output (abbreviated):**

Inventory analysed: 25 posts. Buckets:

- P0: 4 posts (16-24 hours of refresh effort).
- P1: 6 posts (12-20 hours, deferred to next quarter).
- P2: 5 posts (preventive, deferred).
- Prune: 4 posts (3 are off-strategy legacy posts; 1 overlaps with a stronger sibling).
- No action: 6 posts (performing well, leave alone).

P0 list: how-to-apply-mineral-sunscreen, zinc-oxide-safe-daily, best-spf-daily-routine, sunscreen-myths-debunked. All in sun-care cluster, all losing traffic, all medium-effort.

Pruning: 2 legacy posts to be 301'd into category pages, 1 to merge into the canonical "what is mineral sunscreen," 1 to de-publish (410).

Quarterly review scheduled: 2026-08-01.

Saved to `businesses/field-and-sun/refresh/refresh-plan-2026-Q2.md`.
