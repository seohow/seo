# 04. Content SEO

> Produce the new pages your strategy clusters call for. The discipline of designing, briefing, and shipping content that actually ranks — not just content that exists.

## What this category covers

Content SEO is the *production layer* of the toolkit. Strategy decided what to target. On-page made existing pages rank better. Technical made sure those pages are crawlable, indexable, and fast. Content SEO produces the *new* pages — pillar pages, blog posts, tool pages, comparison pages, programmatic templates — that fill out the cluster map and earn rankings on queries you don't currently address.

The eight sub-topics here cover the shapes content takes (blog content, pillars, tools, evergreen, programmatic), the architecture that ties content together (topic clusters), the lifecycle of content (refresh), and the universal foundation (content briefing). For Field & Sun, this is where the cluster-mapped topics that don't yet have a page get built.

## How the sub-topics fit together

```
Architecture                Content shapes              Lifecycle              Foundation
────────────                ──────────────              ─────────              ──────────
02. Pillar Pages    ←→     01. Blog Content           05. Evergreen           08. Content Briefing
03. Topic Clusters         04. Tools Content          07. Content Refresh    (feeds every shape)
                           06. Programmatic SEO
```

1. **[01. Blog Content](01.%20Blog%20Content/README.md)** — the editorial workhorse. The largest single category of content most brands ship. Educational, comparison, how-to, roundup, ingredient/feature explainers.
2. **[02. Pillar Pages](02.%20Pillar%20Pages/README.md)** — comprehensive hub pages that cover a topic broadly and link to spoke pages covering subtopics in depth. The architectural backbone of the topic-cluster pattern.
3. **[03. Topic Clusters](03.%20Topic%20Clusters/README.md)** — the pillar-and-spoke content architecture. How a hub page and 5-10 supporting pages collectively cover a topic and earn topical authority.
4. **[04. Tools Content](04.%20Tools%20Content/README.md)** — interactive tools (calculators, quizzes, finders) that earn links and rank for utility queries. Higher build cost but higher long-term value than blog content for the right brands.
5. **[05. Evergreen Content](05.%20Evergreen%20Content/README.md)** — content designed to remain relevant for years. Foundational topics, definitive guides, principle-led explainers. The compounding-value content type.
6. **[06. Programmatic SEO](06.%20Programmatic%20SEO/README.md)** — generating large numbers of pages from structured data + a template. The right approach for some businesses (location pages, comparison pages, glossary entries, filterable databases) and the wrong approach for most.
7. **[07. Content Refresh](07.%20Content%20Refresh/README.md)** — the systematic update of existing content to recover decayed traffic. Often higher ROI than new content for established sites.
8. **[08. Content Briefing](08.%20Content%20Briefing/README.md)** — the brief is the universal foundation of every content type above. A good brief is the difference between content that ranks and content that doesn't, regardless of who writes it.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Foundation (1 week):**

1. Run `generate-content-brief` once per priority cluster to establish what your briefs look like. The brief format is universal across blog, pillar, evergreen, and refresh work.

**Pass 2 — Architecture (1-2 weeks):**

2. Run `design-topic-cluster` to convert your cluster map into hub-and-spoke architectures. Decide which clusters get pillars, which spokes, which are blog-only.
3. Run `design-pillar-page` for the 2-3 highest-priority hub topics. These are the long-form anchor pages.

**Pass 3 — Production (ongoing):**

4. Run `plan-blog-content` to build a 90-day editorial calendar from the cluster map's blog-shaped clusters. Most clusters land here.
5. Run `brief-evergreen-content` for the topics that warrant deep, longevity-first treatment.
6. Run `plan-tool-page` if interactive tools fit the brand and the audience.
7. Run `plan-programmatic-seo` only if you have structured data and a defensible programmatic angle. Most D2C brands don't; the ones that do (multi-SKU, multi-location, multi-variant) earn outsized returns.

**Pass 4 — Lifecycle (ongoing):**

8. Run `plan-content-refresh` quarterly on existing content that has decayed traffic. On established sites, refresh ROI often beats new-content ROI.

## Pre-requisites and dependencies

The Content SEO category consumes outputs from earlier categories:

- `businesses/<slug>/clusters/cluster-map.md` — defines what to build. Every new page should target a cluster.
- `businesses/<slug>/intent-classification/classified-keywords.md` — intent dictates page type. Informational → blog/pillar; commercial → comparison/roundup; transactional → product/collection (handled in On-page).
- `businesses/<slug>/business_profile.md` — sections 4 (customer), 7 (goals), 8 (brand voice) drive the content strategy.

It produces inputs for downstream categories:

- New pages → consumed by **[02. On-page SEO](../02.%20On-page%20SEO/README.md)** for title, description, header, content optimisation.
- New pages → consumed by **[03. Technical SEO / 04. Schema Markup](../03.%20Technical%20SEO/04.%20Schema%20Markup/README.md)** for structured-data deployment.
- New pages → consumed by **[02. On-page SEO / 05. Internal Linking](../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** to wire into the linking plan.

## Skills you'll use in this category

The full inventory across the 8 sub-topics:

- **plan-blog-content** — produce a 30/60/90-day blog editorial calendar from cluster map + business goals.
- **design-pillar-page** — produce a pillar-page brief: scope, outline, supporting spoke targets, cross-link strategy.
- **design-topic-cluster** — convert a hub topic into a pillar + 5-10 spoke architecture.
- **plan-tool-page** — design a free-tool page (calculator, quiz, finder, generator) tied to a topical cluster.
- **brief-evergreen-content** — brief a longevity-first piece designed to compound for 3-5 years.
- **plan-programmatic-seo** — evaluate whether programmatic SEO fits, design the data model + template approach if so.
- **design-programmatic-template** — produce the actual template + data spec for programmatic page generation.
- **plan-content-refresh** — analyse existing content for refresh candidates; produce a prioritised refresh backlog.
- **generate-content-brief** — universal content brief for any single piece (blog post, pillar, evergreen, refresh) — the foundation skill.

## Common pitfalls

- **Producing content without a cluster.** Every page should target a cluster from `clusters/cluster-map.md`. Content that exists outside the cluster strategy rarely earns sustained traffic.
- **One-keyword-per-post thinking.** A good post serves a *cluster* of related queries. Briefs and outlines should reflect that.
- **Skipping the brief.** Without a structured brief, writers (human or AI) produce generic content. The brief is the difference.
- **Treating pillar pages as long blog posts.** A pillar is a hub that links out to spokes; a blog post is a leaf in that hub. Different shapes, different goals, different success metrics.
- **Choosing programmatic SEO when the data isn't there.** Programmatic only works if the underlying data is unique, structured, and useful. Without that it's content spam at scale — Google penalises it accordingly.
- **Refreshing the wrong pages.** Not every old post deserves a refresh. Prioritise pages with decayed traffic + recoverable intent fit + strategic value. Most other old posts should be de-published or merged.
- **Producing content faster than the team can promote and link to it.** Content that ships and gets buried earns nothing. Coordinate with [Internal Linking](../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md) and Off-page work.
- **Ignoring the AI-search shift.** Content that ranks in 2026 looks different from content that ranked in 2022 — more direct answers, more entity-rich structure, more demonstrated experience. Content briefs need to reflect this.

## Where to go after this

Once new content is shipping:

- **[02. On-page SEO](../02.%20On-page%20SEO/)** — every new page needs title, description, header, image, and content optimisation.
- **[03. Technical SEO / 04. Schema Markup](../03.%20Technical%20SEO/04.%20Schema%20Markup/)** — schema deployment on the new pages.
- **[02. On-page SEO / 05. Internal Linking](../02.%20On-page%20SEO/05.%20Internal%20Linking/)** — wire new pages into the linking plan.
- **[05. Analytics](../05.%20Analytics/)** — measure ranking, traffic, and conversion on the new content.
- **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/)** — close the loop: refresh the wins backlog with what's been shipped and what's next.
