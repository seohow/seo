# Topic Clusters

> The pillar-and-spoke content architecture. How a hub page and 5-10 supporting pages collectively cover a topic and earn topical authority. The architectural pattern that makes a pile of blog posts compound into something more than the sum of its parts.

## What it is

A topic cluster is a structured group of pages — one *pillar* (the hub) and 5-10 *spokes* (supporting pages, usually blog posts) — that collectively cover one parent topic. The pages link together in a deliberate pattern: every spoke links to the pillar; the pillar links to every spoke; spokes link to each other where contextually relevant. The cluster pattern was popularised by HubSpot in 2017 and has since become the default architectural unit for content-led SEO.

The pattern matters because Google's ranking has moved from "match a keyword to a page" toward "rank pages on sites that demonstrate topical depth." A standalone blog post on "is zinc oxide safe daily" rarely ranks well in 2026. The same post published as a spoke under a "mineral sunscreen guide" pillar — with bidirectional links and sibling-spoke context — ranks substantially better. The architecture is the lift.

For Field & Sun, candidate clusters include the sun-care cluster (mineral sunscreen pillar + 8 spokes), the skincare-ingredients cluster (ingredients pillar + spokes on niacinamide, vitamin C, hyaluronic acid, etc.), and the refills cluster (sustainability pillar + spokes on packaging, lifecycle, environmental claims). Two or three well-built clusters typically outperform a dozen disconnected blog posts.

## Why it matters

Three reasons. First, **clusters concentrate topical-authority signals on the pillar's head term, then redistribute to spokes**. The pillar ranks for "mineral sunscreen guide" partly because 8 spokes link to it with topical-relevant anchors. The spokes rank better for their long-tail queries because the pillar links back with topical-relevant context. The architecture is bidirectional ranking lift.

Second, **clusters make content production sequencing more strategic**. Once a cluster is mapped, the team knows which 8-10 pages they need to ship over the next two quarters and how each one slots in. Without the cluster frame, content production drifts — "let's write about X" without knowing whether X belongs in an existing cluster, warrants a new one, or is just orphan content that won't compound.

Third, **clusters are the unit Google increasingly rewards as AI Overview / AI search expand**. AI overviews cite sites with demonstrated topical depth more than sites with one good standalone post. The cluster pattern is precisely how that depth is signalled at the architectural level. Brands without cluster discipline are unlikely to compete in AI Overview / LLM-citation surfaces over the next 2-3 years.

For Field & Sun, mapping the cluster architecture before shipping more standalone content is plausibly worth more than the next 6 months of new posts combined.

## Core concepts

- **Pillar** = hub. The central long-form page that covers the parent topic broadly. Targets the broadest head term.
- **Spoke** = supporting page. Each spoke covers one specific sub-topic in depth. Targets a long-tail variant.
- **Cluster size.** Typical: 1 pillar + 5-10 spokes. Below 5 spokes, the cluster is thin; above 10, it sprawls and dilutes.
- **Bidirectional linking.** Every spoke links to the pillar (intro paragraph + at least one body section). The pillar links to every spoke (in the contextually relevant section, not in a "see also" list). Spokes link to each other where naturally relevant.
- **Cluster map** vs **cluster architecture.** The cluster *map* (output of `cluster-keywords`) tells you which queries belong together. The cluster *architecture* (output of `design-topic-cluster`) decides which page covers what, in what shape, and how they link.
- **Not every cluster needs the full pillar treatment.** Small clusters (3-4 spokes) can run as a "loose cluster" — sibling blog posts that link to each other but don't have a pillar yet. This is fine as a starting state; pillar can be added later if the cluster grows.
- **Cluster-internal canonicalization.** Spokes shouldn't compete with each other for the same query. If two spokes target overlapping keywords, one is dominant (pillar links to it) and the other gets de-scoped or merged.
- **Cluster boundaries are judgment calls.** "Is this a sun-care cluster spoke or a skincare-ingredients cluster spoke?" — sometimes the answer is both, sometimes neither cluster is the right home. Don't over-engineer.

## A worked example

> **Scenario:** Field & Sun has 25 published blog posts and a `cluster-map.md` with 28 clusters. Several clusters have 5+ spoke-shaped sub-topics (sun care, vitamin C, niacinamide). The brand wants to convert these from "loose collections of blog posts" into structured topic clusters.
>
> **Step 1.** Run `design-topic-cluster` on the sun-care cluster (the highest-priority candidate per the editorial calendar).
>
> **Step 2.** Skill output:
>
> - **Pillar:** `/guides/mineral-sunscreen` (new page; brief produced via `design-pillar-page`).
> - **Spokes:** 8 posts identified — 5 already published (need internal-link updates), 3 on the editorial calendar.
> - **Linking matrix:** 26 internal-link changes specified — 8 spoke-to-pillar links, 8 pillar-to-spoke links, plus 10 spoke-to-spoke cross-links where contextually relevant.
> - **De-duplication:** flagged that "mineral sunscreen for sensitive skin" and "best mineral sunscreen for eczema" are near-duplicates targeting overlapping queries; recommended merging into one consolidated spoke.
> - **Sequencing:** which spokes to ship first to lock in cluster wiring before pillar launches.
>
> **Step 3.** Build the pillar (via `design-pillar-page` → write → publish) and update all 5 published spokes' internal links in parallel. Three remaining spokes ship over the next 6 weeks per editorial calendar.
>
> **Step 4.** Result: 6 months later, sun-care cluster pages collectively earn ~3x more organic traffic than they did pre-cluster. The pillar reaches position 9 for "mineral sunscreen guide." Spoke rankings lift 2-5 positions on average. The cluster's topical authority is signalled cleanly to Google.

## How to do it

1. **Decide which clusters from the map warrant cluster architecture.** Not every cluster needs the full treatment. Criteria:
   - 5+ spoke-shaped sub-topics (existing or planned).
   - Strategically important to the business (revenue cluster, seasonal cluster, brand-defining cluster).
   - Pillar topic is realistically rankable for the head term.
   For Field & Sun: sun-care meets all three; refills is borderline (small head term volume); vitamin-C is dominated by publishers (pillar would be a stretch but the cluster pattern still applies).
2. **Run `design-topic-cluster`.** Skill produces the architectural spec: pillar topic + URL, list of spokes (existing + planned), linking matrix, de-duplication flags, sequencing recommendation.
3. **Build or commission the pillar.** Brief via `design-pillar-page` → write → publish. Pillar typically ships 4-8 weeks after brief.
4. **Update existing spokes.** Add the spoke-to-pillar link in intro + body. Add spoke-to-spoke cross-links where the architecture calls for them. Re-publish with `dateModified` updated.
5. **Build new spokes per editorial calendar.** Each new spoke briefed via `generate-content-brief`. Each one ships with the pillar links already wired.
6. **De-duplicate.** If two spokes target overlapping queries, merge them or re-scope one. The `audit-page-internal-links` skill's pattern can be useful here.
7. **Wire schema.** Article schema on the pillar (FAQPage if FAQs included) + BreadcrumbList. Spokes get standard Article schema. The cluster doesn't have its own schema type, but the consistent BreadcrumbList structure helps Google understand the hierarchy.
8. **Monitor as a unit.** Track cluster-level metrics: total cluster traffic, pillar-keyword position, average spoke-keyword position, internal-link integrity (no broken pillar↔spoke links). Most analytics is page-level; cluster-level requires custom dashboards or tagging.
9. **Maintain.** Add new spokes as the topic grows. Refresh the pillar annually. De-duplicate as the cluster matures.

## Common pitfalls

- **Building the pillar without the spokes.** A pillar in isolation underperforms. Either build pillar + at least 3-4 spokes simultaneously, or stage the work so spokes ship first and the pillar launches into a populated cluster.
- **Spokes that don't link back.** The architectural payoff requires bidirectional linking. A pillar with outbound links but no inbound links from spokes is just a long page on the blog.
- **Over-clustering.** Trying to force every blog post into a cluster. Some posts are genuinely standalone; that's fine. The pattern works for *core* clusters; not every page needs to fit it.
- **Cluster-internal cannibalisation.** Two spokes targeting overlapping queries compete with each other in the SERP and dilute the cluster. Audit and merge / re-scope.
- **Cluster sprawl.** A cluster with 20 spokes is no longer a cluster — it's a topic the brand is over-investing in. Split into sub-clusters or de-prioritise.
- **Treating cluster wiring as a one-off.** Every new spoke needs to be wired into the cluster *at publish time*, not in some future sweep. The cluster is a living architecture.
- **Confusing cluster map with cluster architecture.** The cluster map (from `cluster-keywords`) tells you which queries belong together. The architecture decides which page each cluster gets. They're different artefacts.
- **Forgetting cross-cluster links.** Pillars link to *other* pillars where genuinely relevant. The mineral sunscreen pillar should link to the skincare-ingredients pillar where the topics overlap. This cross-cluster wiring matters for site-wide topical structure.

## Skills in this toolkit

- **[design-topic-cluster](skills/design-topic-cluster/SKILL.md)** — converts a hub topic from the cluster map into a full pillar + spoke architecture. Identifies which spokes exist vs. need to be built, produces the bidirectional linking matrix, flags duplicate / overlapping spokes, and outputs the sequencing plan. The architectural counterpart to `design-pillar-page` (which designs only the pillar itself).

## Related topics

- **[02. Pillar Pages](../02.%20Pillar%20Pages/README.md)** — the pillar is one page in the cluster architecture. Pair the two.
- **[01. Blog Content](../01.%20Blog%20Content/README.md)** — most spokes are blog posts. The editorial calendar should be cluster-aware.
- **[01. Strategy / 04. Keyword Clustering](../../../01.%20Strategy/04.%20Keyword%20Clustering/README.md)** — provides the cluster map; cluster architecture is the next step on top of it.
- **[02. On-page SEO / 05. Internal Linking](../../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — cluster architecture *is* an internal-linking architecture. The two categories overlap heavily.
- **[02. On-page SEO / 03. Header Structure](../../../02.%20On-page%20SEO/03.%20Header%20Structure/README.md)** — pillar headers should mirror the spoke set; consistent header structure across the cluster is part of the topical-authority signal.
- **[09. AI SEO / 01. Topical Authority](../../../09.%20AI%20SEO/01.%20Topical%20Authority/README.md)** — clusters are how brands compete in AI Overview and LLM citation surfaces.

## Further reading

- [HubSpot — The Pillar-Cluster Model](https://blog.hubspot.com/marketing/topic-clusters-seo) — the canonical reference. Worth reading even if dated; established the vocabulary.
- [Animalz — Topic Clusters in Practice](https://www.animalz.co/) — practitioner-focused; good on the editorial side.
- [Aleyda Solis — Content Hub Architecture](https://www.aleydasolis.com/) — connects cluster architecture to information architecture and site structure.
- [Backlinko — Topic Cluster Examples and Templates](https://backlinko.com/hub/seo/topic-clusters) — examples with screenshots; useful for showing a team what "good" looks like.
- [Cyrus Shepard — Internal Linking and Topic Clusters](https://zyppy.com/) — pairs cluster work with internal-linking research; highly practical.
