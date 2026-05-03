# The SEO Playbook

> A working curriculum of modern SEO, written for the people doing the work — founders building their first organic-acquisition channel and in-house marketers running the program day to day.

## What this playbook is

The playbook is the *knowledge layer* of the SEO Toolkit. Ten categories, 63 topic pages, no fluff. Each page tells you what a piece of SEO is, why it matters for the business, and how to do it. The runnable workflows that put each topic into action live in the sibling [`skills/`](../skills/README.md) package, and every business you work on gets its own workspace under [`businesses/`](../businesses/README.md).

Think of it this way:

- **Playbook** — *what to know.* Read this to learn the discipline.
- **Skills** — *what to run.* Use these to produce the artifacts (keyword maps, briefs, audits, backlogs) for your own business.
- **Businesses** — *where work lands.* Profile, decisions, learnings, and every artifact stay colocated per venture.

You can read the playbook end-to-end like a book, or jump to whichever leaf is in front of you. Each page links back into the topics that feed it and forward into the work it enables.

## What SEO actually is

Search Engine Optimisation is the practice of making sure that when your customer searches for the thing you sell — or the question that leads to the thing you sell — your site is the answer they find, and the experience they get when they click through is good enough to convert.

That's it. The discipline gets technical, but the goal is plain: be the most useful, credible, accessible result for the queries that matter to your business, on the surfaces your customers actually use.

In 2026, "search engines" doesn't only mean Google. It means Google, Google AI Overviews, ChatGPT search, Claude search, Perplexity, Gemini, and the long tail of vertical search inside YouTube, Amazon, App Store, and so on. The shape of search has changed: pages compete for *citation* in a synthesised answer as often as they compete for *position* on a list of blue links. The toolkit reflects that — there is a dedicated AI SEO category alongside the foundational disciplines.

## Why SEO matters

Three reasons, in business terms:

- **Compounding acquisition.** Paid media stops the moment the budget stops. Organic search keeps delivering. A page that ranks well for a high-intent query earns traffic month after month, often for years, with the marginal cost approaching zero. For D2C brands measuring CAC against LTV, that ratio can break the channel open.
- **Trust at the moment of intent.** Customers searching for "best mineral sunscreen for darker skin tones" are further down the funnel than customers scrolling a feed. Showing up there — credibly — is closer to a sale than almost any other top-of-funnel surface.
- **Defensible, hard to copy.** A finished SEO program is an inventory of pages, internal links, schema, technical hygiene, brand mentions, and topical authority that took months or years to build. A competitor can copy your ad creative in a week. They cannot copy your topical authority in a week.

The flip side is that SEO is *slow*. Most well-executed strategies show their first material lift in 3-6 months and compound from there. If your business needs paid traffic *now*, run paid alongside SEO. The point of this playbook is to make sure the SEO you run is the right SEO, so the slow lift actually arrives.

## The ten categories

The toolkit is organised into ten categories. They map roughly to the *operational sequence* of running an SEO program — Strategy first, then on-page, then technical, then content, and so on — rather than a generic topical taxonomy.

| # | Category | What you learn | Typical first-time effort |
|---|---|---|---|
| 01 | [Strategy](01.%20Strategy/README.md) | Decide what you're going after and why. Keyword research, search intent, competitor analysis, clustering, prioritised wins backlog. | 2-3 weeks |
| 02 | [On-page SEO](02.%20On-page%20SEO/README.md) | Make the pages you already have rank better. Titles, descriptions, headers, URLs, internal links, images, body copy. | 2-4 weeks across priority pages |
| 03 | [Technical SEO](03.%20Technical%20SEO/README.md) | Make sure search engines and AI crawlers can discover, crawl, render, index, and serve the site cleanly. Crawlability, indexing, site speed, schema, canonicals, sitemaps, JavaScript SEO, log file analysis, site migration, AI crawler management. | 2-6 weeks plus quarterly maintenance |
| 04 | [Content SEO](04.%20Content%20SEO/README.md) | Build the new pages your strategy calls for. Blogs, pillars, clusters, tools, evergreen, programmatic, refresh, briefing. | Ongoing |
| 05 | [Analytics](05.%20Analytics/README.md) | Measure what's working before you scale. GA4, Search Console, rank tracking, traffic analysis, KPIs, conversion tracking. | 1-2 weeks setup, then ongoing |
| 06 | [Off-page SEO](06.%20Off-page%20SEO/README.md) | Earn the authority that compounds. Link building, guest posting, digital PR, brand mentions, outreach, HARO, broken-link building, reputation management. | Ongoing |
| 07 | [UX](07.%20UX/README.md) | Convert the traffic you earn. Page speed, mobile, UX design, A/B testing, conversion funnels, accessibility. | 2-4 weeks across priority templates |
| 08 | [International SEO](08.%20International%20SEO/README.md) | Plan and audit multi-market SEO. Hreflang, language architecture, geo-targeting, localisation. | Project-shaped — only if you sell in multiple markets |
| 09 | [AI SEO](09.%20AI%20SEO/README.md) | Get cited in AI Overviews and LLM answers. Content optimisation, NLP, generative SEO, SERP features, LLM visibility. | Quarterly cycle |
| 10 | [Growth](10.%20Growth/README.md) | Move from operating SEO to compounding it. Topical authority, content scaling, link acquisition, SEO experiments. | Multi-quarter |

Each category folder has a `README.md` overview that explains how its sub-topics fit together, plus one Markdown page per leaf topic. Every leaf ends with a `Skills in this toolkit` section that links to the runnable workflows in [`skills/`](../skills/README.md).

## A suggested order to read in

If you've never run SEO before, work through the categories roughly in number order. Strategy first because everything downstream depends on knowing what you're going after. On-page next because it's the highest-leverage work on pages you already have. Technical third because the foundation needs to be sound before content scales. Content fourth because that's where new inventory comes from. Analytics fifth because you need measurement in place before you scale anything. Off-page sixth because authority compounds and is best invested in once your content has somewhere to send link equity. UX, International, AI SEO, and Growth go where they fit your business — pick based on which bottleneck is actually limiting you.

If you've run SEO before and just want the answer to a specific question, jump to the relevant leaf. The cross-links at the end of each page will pull you back into anything you're missing.

## How the playbook expects you to work

The toolkit assumes you're working on a real business, not in the abstract. Examples throughout reference **Field & Sun**, the canonical sample business that ships with the toolkit ([profile here](../businesses/field-and-sun/business_profile.md)). It's a fictional D2C beauty brand with two hero products — Daily Glow Serum and Mineral Sun Drops SPF 50 — built to demonstrate every skill against a fully populated profile. Field & Sun is the *Northwind* of this toolkit: when you see it in a worked example, that's the same brand every time.

When you're ready to apply this to your own venture, run [`generate-business-profile`](../skills/generate-business-profile/SKILL.md) to set up your own workspace under `businesses/<your-slug>/`. Every skill in the toolkit then reads your profile and produces output tailored to your business — your customers, your competitors, your goals, your voice.

## Common mistakes the playbook tries to prevent

A handful of patterns repeat across early-stage SEO programs that this curriculum is opinionated about:

- **Skipping Strategy and going straight to writing.** Months of content for keywords nobody types or for intents your page type cannot serve. Always cheaper to spend the week on Strategy first.
- **Optimising the wrong pages.** A 30-traffic blog post is not where rewriting effort pays back. Prioritise by current traffic, commercial value, and the role of the page in the cluster map.
- **Chasing head terms you cannot win.** "Best vitamin C serum" is not a winnable target for a domain rating 28 D2C brand against Wirecutter and The Strategist. The wins are in long-tail, intent-rich variations and brand-distinct angles. The Strategy and Growth categories say so explicitly and provide tests to keep you honest.
- **Building without measurement.** SEO improvements are slow enough that without a measurement loop, the team loses confidence and the budget gets cut. Set up Analytics before you scale execution.
- **Treating AI search and traditional search as separate disciplines.** They share the underlying content, schema, and authority signals. The AI SEO category is integrated into the toolkit, not bolted on.

Each leaf has its own pitfalls section calling out the mistakes specific to that topic — read them before you ship.

## Where to go next

- **First time here?** Start with [01. Strategy](01.%20Strategy/README.md). It's the smallest commitment and the highest leverage.
- **Already have a strategy and want to execute?** Jump to [02. On-page SEO](02.%20On-page%20SEO/README.md) or [04. Content SEO](04.%20Content%20SEO/README.md) depending on whether you're improving existing pages or building new ones.
- **Inheriting a site and not sure what's wrong?** Run the audits in [03. Technical SEO](03.%20Technical%20SEO/README.md) and [05. Analytics](05.%20Analytics/README.md) first.
- **Ranking but not converting?** Skip ahead to [07. UX](07.%20UX/README.md).
- **Wondering why ChatGPT keeps citing your competitors?** [09. AI SEO](09.%20AI%20SEO/README.md) is the dedicated category.

When you know where to spend your time, browse the corresponding category README. Each one ends with a workflow that walks you through its sub-topics in the right order.
