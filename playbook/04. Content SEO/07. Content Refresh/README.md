# Content Refresh

> The systematic update of existing content to recover decayed traffic and ranking. On established sites, refresh ROI often beats new-content ROI — by a wide margin. The discipline of looking at what you already have before writing more.

## What it is

Content refresh is the practice of identifying existing posts that have decayed in traffic or ranking and updating them rather than writing new content on the same topic. The update can range from light (refresh stats, swap dated examples, update internal links, bump `dateModified`) to heavy (rewrite the introduction, restructure the outline, add new sections, commission new assets, expand from 1,200 to 2,500 words). The depth of refresh depends on the gap between what the current post is and what the SERP now rewards.

For Field & Sun, refresh candidates are everywhere: the 25-post archive includes early posts written in a thin "let's just publish something" mode, posts whose ranking has slipped 5-15 positions over 18 months, posts with stale internal links pointing to retired pages, and posts whose topic the SERP now wants in a different shape. Refreshing these is often higher-ROI than writing more new posts.

## Why it matters

Three reasons. First, **refresh is dramatically cheaper than new content**. A 4-hour refresh on an existing 1,500-word post can lift it 5-10 positions; producing an equivalent new post takes 12-15 hours and starts from zero authority. For sites with 50+ existing posts, the refresh queue is often the highest-leverage content investment available.

Second, **decayed pages drag site-wide ranking signals**. Google evaluates topical authority partly through the freshness, depth, and engagement of the site's body of content. A site with 20 decayed posts looks weaker than a site with 10 well-maintained ones. Pruning + refreshing is part of how site-level authority is preserved.

Third, **refresh closes the gap between strategy and reality**. Two years ago you published a post on a keyword; today the SERP has shifted, the cluster architecture is different, internal links have moved, the brand voice has evolved. Refresh re-aligns the content with current strategy without requiring a re-write from scratch.

For Field & Sun: a quarterly refresh sweep across the existing 25 posts is plausibly worth more in next-12-month traffic than the next 6 new posts. Established sites under-invest in this and over-invest in new production.

## Core concepts

- **Refresh ≠ rewrite.** Refresh keeps the URL, the indexing history, the backlink profile. Rewrite changes substantial structure / content but keeps the URL. Replace creates a new URL and 301s the old one. Different cost / risk profiles.
- **Decay signals.** Traffic loss vs. baseline. Position loss in GSC. Click-through-rate decline. Increase in bounce / decrease in dwell. Absence of internal links. Stale facts. Each is a candidate signal; a refresh decision is usually triggered by 2-3.
- **Refresh ROI vs. new-content ROI.** On established sites (50+ posts), refresh ROI typically wins until the content base is well-maintained. On young sites (under 20 posts), new content ROI wins. The crossover varies but is real.
- **Three refresh shapes.** Light (1-3 hours): stats, examples, links, `dateModified`. Medium (4-8 hours): partial restructure, expanded sections, new internal links. Heavy (12-20 hours): substantial rewrite of multiple sections, new assets, possible URL change. Most refreshes should be light or medium; heavy is for high-value pieces.
- **Pruning.** Some old posts shouldn't be refreshed — they should be de-published / merged / 301'd. Pruning is part of the refresh discipline, not a separate operation.
- **Refresh signals freshness to Google.** Updating `dateModified` (with substantive content changes — not just a date bump) is a freshness signal. Google has stated content quality matters more than recency, but for time-sensitive queries freshness matters meaningfully.
- **Refresh the cluster, not just the post.** A refreshed post that doesn't fit the cluster's current architecture is a half-job. Refresh = update content + verify cluster wiring + update internal links.
- **Refresh frequency.** Evergreen pillar / anchor pieces: annually. Standard blog posts: every 18-24 months or on decay trigger. Time-bound posts: quarterly or replace.

## A worked example

> **Scenario:** Field & Sun has 25 published posts. The team is about to commission 5 new posts for next quarter. Before doing so, they audit the existing portfolio for refresh candidates.
>
> **Step 1.** Run `plan-content-refresh`. Skill pulls GSC data + cluster map + current internal-link state, scores each existing post on a refresh-priority matrix (decay severity × strategic value × refresh effort).
>
> **Step 2.** Output is a prioritised refresh backlog:
>
> - **P0 (refresh now, 4-6 candidates):** posts that have lost 30%+ traffic, are in active clusters, refresh effort is medium. Includes "how to apply mineral sunscreen" (lost 50% traffic over 12 months; cluster-active; needs new application photo + restructured outline).
> - **P1 (refresh next quarter, 6-8 candidates):** posts that have plateaued, are in active clusters, refresh effort is light. Includes "what's in our SPF" (stable but stale facts).
> - **P2 (defer or prune, 8-10 candidates):** posts that are outside active clusters, low traffic, low strategic value. Recommended action: merge into stronger sibling or 301-redirect.
> - **No action (3-4 candidates):** evergreen pieces performing well.
>
> **Step 3.** Skill produces refresh briefs for the 4 P0 candidates. Each brief covers what's decayed, what to update, target word count, internal-link updates, asset refresh, and acceptance criteria.
>
> **Step 4.** Team executes the 4 P0 refreshes over the next 4 weeks (16-24 hours total work). Defers 2 of the 5 planned new posts in favour of refresh.
>
> **Step 5.** Result: 90 days post-refresh, the 4 refreshed posts collectively recover ~70% of their lost traffic, ranking lifts 4-7 positions on average. Crucially, this happened with about half the production hours of writing 4 new posts from scratch — and with much lower forecasting risk.

## How to do it

1. **Pull the inventory of existing content.** All published posts with their primary keyword, current URL, current ranking, current traffic, last-modified date.
2. **Pull GSC data.** 12-month traffic + position trend per URL. Identify decline patterns.
3. **Cross-reference cluster map.** Which posts are in active clusters vs. orphaned? Cluster-active posts have higher refresh ROI.
4. **Score posts on the refresh matrix.** Decay severity × strategic value × refresh effort. Skill `plan-content-refresh` automates this.
5. **Decide refresh / rewrite / prune.** For each candidate:
   - **Refresh** (most common): keep URL, update content, signal freshness.
   - **Rewrite** (rare): keep URL, substantially change content. Risks: temporary ranking dip during re-evaluation.
   - **Replace + 301** (rare): new URL, 301 from old. Use when the old URL pattern is wrong or the content is being relocated to a new cluster.
   - **Prune** (de-publish / merge / 301): for low-value posts that don't deserve refresh investment.
6. **Brief each refresh.** `plan-content-refresh` produces per-post refresh briefs covering what's decayed, what to update, target effort.
7. **Execute the refreshes.** Update content, internal links, assets, schema (`dateModified`). Re-publish.
8. **Submit URLs to GSC for re-indexing.** Speed up the re-evaluation.
9. **Monitor for 60-90 days.** Refresh effects take 4-12 weeks to materialise in ranking.
10. **Calendar the next refresh sweep.** Quarterly is the right cadence for established sites.

## Common pitfalls

- **Date-bumping without content change.** Updating `dateModified` without substantive content change is "freshness theatre." Google has gotten better at detecting this; the lift is modest at best and risks damaging trust.
- **Refreshing low-value posts.** Not every decayed post deserves refresh. Posts outside active clusters with low strategic value should be pruned, not refreshed.
- **Refreshing without checking the SERP.** The SERP may have shifted shape since the post was published; refresh that doesn't realign with current SERP wins fails to recover.
- **Refreshing without updating internal links.** Posts with stale links to retired pages or pre-cluster architecture leak ranking signal. Refresh = content + linking.
- **Refreshing in isolation from the cluster.** A refreshed post that doesn't link cleanly to the cluster's pillar / siblings is a half-job.
- **Heavy refresh when light would work.** Most refreshes are 4-8 hours. Don't rewrite from scratch when targeted updates would do.
- **Skipping the prune decision.** Old posts that don't earn refresh shouldn't sit there decaying. Merge, 301, or de-publish. Pruning improves site-level signals.
- **Rewriting without ranking risk awareness.** Substantial structural rewrites can cause temporary ranking drops while Google re-evaluates. For high-value pages, soft-launch the change or prepare for a 4-8 week dip.
- **Running refresh as a one-off project.** Refresh works as a quarterly cadence. One-time refresh project + then 18 months of new content = the same problem rebuilds.

## Skills in this toolkit

- **[plan-content-refresh](skills/plan-content-refresh/SKILL.md)** — analyses existing content for refresh candidates and produces a prioritised refresh backlog. Pulls GSC data + cluster map + internal-link state, scores each post on the refresh matrix (decay × value × effort), recommends action per post (refresh / rewrite / replace / prune), and produces refresh briefs for P0 / P1 candidates. Output is the prioritised work list the content team executes against.

## Related topics

- **[01. Blog Content](../01.%20Blog%20Content/README.md)** — refresh and new content compete for the same content-team capacity. Balance them deliberately.
- **[05. Evergreen Content](../05.%20Evergreen%20Content/README.md)** — evergreen anchors are the highest-ROI refresh candidates. Annual refresh on evergreen is part of the contract.
- **[03. Topic Clusters](../03.%20Topic%20Clusters/README.md)** — refreshes are an opportunity to wire previously-orphaned posts into clusters.
- **[02. On-page SEO / 07. Content Optimization](../../../02.%20On-page%20SEO/07.%20Content%20Optimization/README.md)** — refresh execution at the on-page level (title, description, headers, body) uses these skills.
- **[02. On-page SEO / 05. Internal Linking](../../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — refresh + internal-link updates go together.
- **[03. Technical SEO / 09. Site Migration](../../../03.%20Technical%20SEO/09.%20Site%20Migration/README.md)** — replace-and-301 refreshes touch redirect-mapping discipline.
- **[05. Analytics](../../../05.%20Analytics/README.md)** *(planned)* — GSC data is the trigger for most refresh decisions.

## Further reading

- [Animalz — Content Refresh as Strategy](https://www.animalz.co/blog/) — practitioner walkthrough of refresh-vs-new tradeoffs.
- [Ahrefs — Content Decay and Refresh Studies](https://ahrefs.com/blog/) — data on refresh ROI across thousands of sites.
- [Backlinko — Content Refresh Methodology](https://backlinko.com/) — Brian Dean's specific refresh playbook with case studies.
- [HubSpot — Historical Optimization](https://blog.hubspot.com/marketing/historical-optimization) — the original framing for refresh as a programme; HubSpot's case study famously moved 30%+ of organic traffic.
- [Aleyda Solis — Refresh / Prune / Merge Decision Framework](https://www.aleydasolis.com/) — practical templates for the refresh-or-prune call.
