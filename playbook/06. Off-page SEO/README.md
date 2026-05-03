# 06. Off-page SEO

> Earn the authority that compounds. Backlinks, brand mentions, digital PR, and journalist outreach — the work that happens *off* your site but determines how your site competes. The most-misunderstood SEO category and one of the most-determinative.

## What this category covers

Off-page SEO is the practice of building credibility, authority, and visibility for the brand on *other people's websites and surfaces*. Unlike On-page (which optimises pages you control) and Technical (which optimises infrastructure you control), Off-page is the layer where the brand has to *earn* its place. The currency is backlinks, brand mentions, journalist citations, partner relationships, and the reputation that surfaces in branded SERP results.

For Field & Sun, off-page work is what eventually decides whether the brand competes credibly with Supergoop, Saie, ILIA in the SERPs. Cluster architecture, pillar pages, and content depth get the brand to the page-1 *threshold*; backlinks and brand authority decide where on page 1 the brand actually ranks. Both layers have to be in place; investing only in content (without authority) caps the brand at positions 8-15 on competitive keywords.

The eight sub-topics here cover the *tactical surfaces* (link building, guest posting, digital PR, HARO, broken-link building), the *operational layer* (outreach process, brand mentions tracking), and the *defensive layer* (reputation management for branded SERPs). Together they form the off-page programme.

## How the sub-topics fit together

```
Strategy + assets       Tactical channels                     Operational + defensive
─────────────────       ─────────────────                     ───────────────────────
01. Link Building       02. Guest Posting                     05. Outreach (process)
                        03. Digital PR                        04. Brand Mentions
                        06. HARO / Journalist Outreach        08. Reputation Management
                        07. Broken Link Building
```

1. **[01. Link Building](01.%20Link%20Building/README.md)** — the strategic layer: which links matter, which assets earn them, how to plan a link campaign tied to clusters and business goals. The category's anchor.
2. **[02. Guest Posting](02.%20Guest%20Posting/README.md)** — writing for other publications. A specific tactical channel with its own rules — quality of publication, anchor strategy, contributor relationships.
3. **[03. Digital PR](03.%20Digital%20PR/README.md)** — earning press coverage, journalist citations, and authority links via newsworthy stories, original data, expert commentary. The highest-value off-page channel for most brands.
4. **[04. Brand Mentions](04.%20Brand%20Mentions/README.md)** — monitoring where the brand is mentioned (linked or unlinked); converting unlinked mentions into links; tracking sentiment and reach.
5. **[05. Outreach](05.%20Outreach/README.md)** — the operational discipline that powers all of the above. Email templates, prospecting, response handling, relationship management, CRM hygiene.
6. **[06. HARO and Journalist Outreach](06.%20HARO%20and%20Journalist%20Outreach/README.md)** — reactive PR. Responding to journalist queries on HARO, Qwoted, Connectively, and direct journalist outreach. Distinct discipline from proactive PR.
7. **[07. Broken Link Building](07.%20Broken%20Link%20Building/README.md)** — finding broken outbound links on other sites and pitching the brand's content as the replacement. A specific tactical pattern with predictable yield.
8. **[08. Reputation Management](08.%20Reputation%20Management/README.md)** — managing the branded SERP and broader online reputation. Defensive but increasingly strategic — AI Overviews and LLM citations both pull from branded reputation surfaces.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Strategy + baselines (1-2 weeks):**

1. Run `plan-link-building-campaign` to establish strategy: which clusters need links, what assets you have / need, what target list looks like, what cadence is realistic.
2. Run `audit-branded-serp` to baseline the branded SERP (page 1 of "[brand name]" results) and identify defensive gaps.
3. Run `monitor-brand-mentions` to set up unlinked-mention tracking and the link-recovery flow.

**Pass 2 — Tactical channels (ongoing):**

1. Run `plan-guest-posting-campaign` for proactive contribution opportunities.
2. Run `plan-digital-pr-campaign` for the headline-generating angle (original data, expert commentary, newsworthy story).
3. Run `set-up-haro-response-system` to capture reactive opportunities.
4. Run `plan-broken-link-campaign` for systematic broken-link prospecting.

**Pass 3 — Operations (ongoing):**

1. Run `design-outreach-process` once to set up email templates, CRM, follow-up cadence, response handling.
2. Run `audit-branded-serp` quarterly to monitor reputation.

## Pre-requisites and dependencies

The Off-page category consumes outputs from earlier categories:

- `businesses/<slug>/clusters/cluster-map.md` — link building should target clusters; non-cluster-aligned links are usually wasted.
- `businesses/<slug>/competitor-analysis/scope.md` — competitor link profiles are the starting point for prospect lists.
- `businesses/<slug>/business_profile.md` — sections 4 (customer), 6 (competitors), 7 (goals), 8 (brand voice) all drive off-page strategy.
- `businesses/<slug>/pillars/` and `businesses/<slug>/tools/` — pillar pages and tool pages are the most-linkable assets; off-page strategy depends on them existing.

It produces inputs for downstream categories:

- Backlinks earned → measured via Analytics ([05. Analytics](../05.%20Analytics/README.md)).
- Branded reputation → influences AI Overview / LLM citation ([09. AI SEO](../09.%20AI%20SEO/) — planned).
- Authority signals → feed [10. Growth](../10.%20Growth/) — planned (compound investments).

## Skills you'll use in this category

The full inventory across the 8 sub-topics:

- **[plan-link-building-campaign](../../skills/off-page/plan-link-building-campaign/SKILL.md)** — strategic plan for a quarterly link-building effort, anchored to clusters + business goals.
- **[plan-guest-posting-campaign](../../skills/off-page/plan-guest-posting-campaign/SKILL.md)** — guest-post target identification + pitch-angle planning.
- **[plan-digital-pr-campaign](../../skills/off-page/plan-digital-pr-campaign/SKILL.md)** — design a digital PR campaign around an original-data / expert-commentary / newsworthy angle.
- **[monitor-brand-mentions](../../skills/off-page/monitor-brand-mentions/SKILL.md)** — set up brand-mention tracking + unlinked-mention conversion flow.
- **[design-outreach-process](../../skills/off-page/design-outreach-process/SKILL.md)** — email templates, CRM, follow-up cadence, response handling.
- **[set-up-haro-response-system](../../skills/off-page/set-up-haro-response-system/SKILL.md)** — reactive PR system: inbox monitoring, response templates, query filtering, response triage.
- **[plan-broken-link-campaign](../../skills/off-page/plan-broken-link-campaign/SKILL.md)** — broken-link prospecting + replacement-content pitch.
- **[audit-branded-serp](../../skills/off-page/audit-branded-serp/SKILL.md)** — branded-SERP audit + reputation-management plan.

## Common pitfalls

- **Building links to pages that don't deserve them.** Links to thin / orphan pages waste link equity. Build links to pillar pages, anchor evergreen pieces, tools, and high-priority spokes.
- **Buying links.** Google has detection systems and the downside (manual penalty, deindexing) is severe. Don't.
- **Spam outreach.** Bulk-templated emails to thousands of sites earn 0.5-1% conversion and damage sender reputation. Quality over quantity, always.
- **Anchor-text over-optimisation.** Exact-match anchors at high frequency look manipulated. Mix branded, naked URL, partial-match, and exact-match anchors.
- **No off-page strategy at all.** Most brands invest 80%+ of SEO budget in content and 20% in off-page. For competitive verticals, that ratio is usually backwards.
- **Treating links as the only signal.** Brand mentions (linked or unlinked), expert citations, and SERP-reputation patterns all matter — not just dofollow links from DR-50+ domains.
- **Ignoring reputation management.** Branded SERPs that surface negative reviews, lawsuits, or wrong-information AI overviews damage brand trust and conversion rate. Defensive work matters.
- **No cluster-level linking strategy.** Treating link building as "get any links" misses the higher-leverage move of "get links to the pillar of cluster X to lift cluster X's rankings."
- **Underinvesting in digital PR.** Newsworthy stories with original data earn 5-50x the links of cold outreach for the same effort.
- **No measurement.** Off-page work is hard to measure cleanly; teams often skip measurement and the budget gets cut. Even imperfect measurement (link counts, brand-mention growth, branded-search lift) is better than none.

## Where to go after this

Once off-page is operational:

- **[05. Analytics](../05.%20Analytics/)** — measure link velocity, brand-mention growth, branded-search lift, and the contribution to non-branded organic traffic.
- **[09. AI SEO](../09.%20AI%20SEO/)** *(planned)* — branded reputation is increasingly an input to AI Overview and LLM citation; off-page work compounds with AI-search visibility.
- **[10. Growth](../10.%20Growth/)** *(planned)* — sustained off-page programmes are part of the compounding-growth flywheel.
- **[01. Strategy / 05. SEO Wins](../01.%20Strategy/05.%20SEO%20Wins/)** — close the loop: refresh the wins backlog with what off-page has earned and what's next.
