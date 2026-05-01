# Brand Mentions

> Monitoring where the brand is mentioned online — linked or unlinked. Converting unlinked mentions into links. Tracking sentiment and reach. The lowest-effort, highest-yield off-page work most brands are leaving on the table.

## What it is

A brand mention is any reference to the brand on another website — sometimes accompanied by a link, often not. "Field & Sun's Mineral Sun Drops use 20% non-nano zinc oxide" can appear in a publication article without a link to fieldandsun.com; that's an *unlinked* mention. A workflow that monitors these mentions, identifies high-quality ones, and reaches out to the publication to request a link conversion is one of the most efficient off-page tactics available — typical conversion rate is 50-70% (vs. 1-3% for cold outreach).

For Field & Sun, brand-mention work is operational rather than strategic. Once set up, it runs in the background producing a steady 5-15 link conversions per quarter at minimal effort. It also produces a brand-monitoring layer that surfaces sentiment trends, viral moments, and reputation issues before they show up in branded search anomalies.

## Why it matters

Three reasons. First, **unlinked-mention conversion is the highest-conversion-rate outreach in SEO**. Conversion rates of 50-70% (vs. 1-3% on cold outreach) reflect the warm context — the publication has already chosen to mention the brand; adding the link is a small ask. The hours-per-link cost is dramatically lower than any other channel.

Second, **brand mentions feed AI Overview and LLM citation signals**. Mention frequency, sentiment, and authoritativeness of mentioning sources are inputs to LLM training data and AI search citation. Brands that invest in mention growth — earned mentions, not paid placements — compound visibility in AI surfaces.

Third, **brand monitoring catches reputation issues early**. Negative mentions, viral complaints, mis-information, or competitor-driven attack content all surface in mention monitoring before they reach branded SERP results. Early visibility = early intervention.

The trade-off: brand-mention monitoring requires tooling (Google Alerts, Brand24, Mention, Talkwalker) and operational discipline (someone reviewing mentions weekly). Without the discipline, the tooling produces noise nobody acts on.

## Core concepts

- **Linked vs unlinked mention.** Linked mentions count as backlinks (the brand has them). Unlinked mentions are the conversion target — they exist; they just need to be linked.
- **Mention quality.** Tier 1 publication unlinked mention is a high-priority conversion target; obscure forum mention is rarely worth the time.
- **Sentiment.** Positive mentions (good outreach candidate). Neutral mentions (depends on context). Negative mentions (defensive — sometimes worth engaging, sometimes worth ignoring).
- **Conversion outreach.** Polite, short, specific request: "Saw you mentioned Field & Sun in [piece]. Would you be open to adding a link to our homepage / specific page? Here's the URL: [url]." 50-70% conversion typical.
- **Branded vs product mentions.** Brand-name mentions ("Field & Sun") and product-name mentions ("Mineral Sun Drops") both count. Product mentions are sometimes more linkable to a specific PDP.
- **Tooling.** Free: Google Alerts. Paid: Brand24, Mention, Talkwalker, Meltwater, Awario. Free is enough for small brands; paid adds historical search, sentiment analysis, social monitoring, alerts.
- **Cadence.** Weekly mention review (15-30 min) + monthly conversion-outreach batch (1-2 hours) + quarterly sentiment review.
- **Branded SERP separation.** Brand-mention monitoring (where the brand is mentioned across the web) is distinct from branded-SERP monitoring (what shows up on page 1 of "Field & Sun" search results — covered in `08. Reputation Management`).

## A worked example

> **Scenario:** Field & Sun has not set up brand-mention monitoring. The team suspects there are mentions in the wild they haven't tracked or capitalised on. They want to set up a programme.
>
> **Step 1.** Run `monitor-brand-mentions`. Skill produces the monitoring + conversion plan covering tooling, alert keywords, review cadence, outreach template, and sentiment-tracking schema.
>
> **Step 2.** Output:
>
> - **Tooling:** Brand24 ($79/mo) for paid; Google Alerts for backup. Skips Mention because of duplicate-feature overlap.
> - **Alert keywords:** "Field & Sun" (brand), "Field and Sun" (variant), "Mineral Sun Drops" (product), "Daily Glow Serum" (product), [founder name].
> - **Review cadence:** Friday 30-min review; flag conversion candidates; flag negative mentions for response decision.
> - **Outreach template:** short, polite, specific (3-paragraph max).
> - **Sentiment schema:** positive / neutral / negative buckets; track quarterly trend.
> - **Initial backfill:** 90-day historical search produces ~140 mentions; ~38 unlinked mentions; ~28 are publications worth pitching for conversion.
>
> **Step 3.** Initial backfill outreach: 28 conversion pitches sent week 1; 19 conversions land in 4 weeks (68% conversion rate). Steady-state: 5-12 unlinked mentions / month; 3-9 conversions.
>
> **Step 4.** Result: 12 months later, the brand has earned ~80 link conversions from mention recovery alone — equivalent to a quarter of the broken-link channel's annual yield, at one-fifth the effort.

## How to do it

1. **Set up tooling.** Free (Google Alerts) is enough to start. Paid (Brand24, Mention, Talkwalker) for richer monitoring + sentiment + historical search.
2. **Configure alert keywords.** Brand name + variants + product names + founder/key-person names.
3. **Establish review cadence.** Weekly 15-30 min review; monthly 1-2 hr conversion batch; quarterly sentiment review.
4. **Define quality filter.** Tier 1-2 publications get conversion outreach; Tier 3 only if topically valuable; spam / irrelevant skip.
5. **Build outreach template.** Short, polite, specific. Include the URL where the link should go.
6. **Run initial backfill.** 90-day historical search; identify all unlinked mentions; pitch the high-value ones.
7. **Track conversion rate.** 50-70% is healthy; <40% suggests outreach quality issue.
8. **Track sentiment.** Quarterly trend; identify any negative-mention patterns.
9. **Hand off mentions to other categories.** Negative mentions → Reputation Management. Newsworthy mentions → Digital PR (follow-on coverage opportunity). Positive mentions → marketing for testimonials / social proof.
10. **Iterate.** Some publications are reliable converters (always say yes); others never. Adjust outreach effort accordingly.

## Common pitfalls

- **No tooling.** Without alerts, mentions are missed. Even free Google Alerts is meaningfully better than nothing.
- **Tool noise without discipline.** Tooling produces mentions; if nobody reviews them, the value is zero.
- **Generic outreach.** "Hi, you mentioned us, please add a link" works less well than "Hi [Name], I saw your piece on [specific topic]; would you be open to linking the Field & Sun mention to [specific URL]?"
- **Outreach to wrong contact.** Editor / journalist contact preferred; "info@" address rarely works.
- **No quality filter.** Pursuing every mention wastes time. Tier 1-2 priority; Tier 3 selectively.
- **Ignoring negative mentions.** Some negative mentions deserve response (factual errors, mis-information); some deserve to be ignored. Have a triage rule.
- **No sentiment tracking.** Mentions in aggregate produce a sentiment trend that's diagnostic; without tracking, the trend is invisible.
- **Confusing brand-mention monitoring with branded-SERP monitoring.** Different surfaces, different work. See `08. Reputation Management`.

## Skills in this toolkit

- **[monitor-brand-mentions](skills/monitor-brand-mentions/SKILL.md)** — produces a brand-mention monitoring + conversion plan covering tooling selection, alert keyword set, review cadence, quality filter, outreach template, sentiment-tracking schema, backfill plan (90-day historical), and conversion-rate targets. Output is the operating brief for the brand-mention programme. Annual cadence to refresh keywords as products / brand names evolve.

## Related topics

- **[01. Link Building](../01.%20Link%20Building/README.md)** — mention-recovery is one channel within the link-building strategy.
- **[05. Outreach](../05.%20Outreach/README.md)** — operational layer (CRM, templates).
- **[08. Reputation Management](../08.%20Reputation%20Management/README.md)** — negative mentions and broader reputation work.
- **[03. Digital PR](../03.%20Digital%20PR/README.md)** — PR creates mentions; mention monitoring catches and capitalises on them.
- **[09. AI SEO](../../09.%20AI%20SEO/)** *(planned)* — brand mention signals feed AI Overview / LLM citation visibility.

## Further reading

- [Brand24 — Brand-Mention-to-Backlink Workflow](https://brand24.com/blog/) — practitioner playbook with conversion-rate data.
- [Mention.com — Brand Monitoring Guide](https://mention.com/) — strong on the sentiment side.
- [Aleyda Solis — Mention Recovery Templates](https://www.aleydasolis.com/) — practical outreach templates.
- [Andy Crestodina — Brand Monitoring + SEO](https://www.orbitmedia.com/blog/) — strategic framing for content-led brands.
- [Rand Fishkin — On Brand Mentions as a Ranking Signal](https://sparktoro.com/) — discussion of unlinked-mention impact on rankings.
