# Programmatic SEO

> Generating large numbers of pages from structured data + a template. The right approach for some businesses (location pages, comparison pages, glossary entries, filterable databases) and the wrong approach for most. Outsized returns when it fits; brand-damaging spam when it doesn't.

## What it is

Programmatic SEO is the practice of generating many pages — hundreds to hundreds of thousands — from a single template populated with structured data. Each page targets a slightly different long-tail query: `[city] [service]`, `[product] vs [competitor]`, `[company] [job-title] salary`, `[location] [date] [event]`, `[ingredient] benefits and side effects`. The template is the page; the data is the differentiator. With the right combination, a programmatic build can produce more organic traffic than years of editorial content.

For Field & Sun, programmatic candidates are limited but real: an ingredient glossary (`/ingredients/[ingredient-name]` for 30-80 ingredients), a comparison library (`/compare/[product-a]-vs-[product-b]` for cross-brand product matchups), or a "best for [skin condition]" library. Most D2C beauty brands shouldn't run programmatic; the ones that do (large catalogues, deep ingredient depth) earn outsized returns.

## Why it matters

Three reasons. First, **programmatic captures long-tail at a scale editorial can't match**. A single glossary template producing 50 ingredient pages can earn more cumulative organic traffic than 50 hand-written blog posts — at a fraction of the production cost. The keyword space programmatic addresses is too long-tail for editorial economics.

Second, **programmatic is the only viable approach for some categories**. Travel ("flights from [origin] to [destination]"), local services ("[service] in [city]"), comparison ("[product A] vs [product B]"), real estate, jobs, e-commerce filtering — these query classes are too vast and too structured to address with editorial. Programmatic is not a "nice-to-have" here; it's table-stakes.

Third, **programmatic is the most-likely-to-fail content investment**. Built without the right data, the right uniqueness, and the right quality controls, programmatic produces "thin content at scale" — exactly what Google's algorithms target with quality / Helpful Content / spam updates. The downside risk is severe: not just no traffic, but site-wide penalties that affect non-programmatic content too. The decision to run programmatic deserves more scrutiny than almost any other content decision.

For Field & Sun: programmatic is plausible for an ingredient glossary; not for product-vs-product (catalogue is too small to differentiate); not for "best for [condition]" (the editorial team should write those pieces). The decision is "yes for one specific use case, no for the others."

## Core concepts

- **Programmatic ≠ AI-generated.** Programmatic is template + data; the data must be unique, structured, and valuable. AI-generated content can be *part* of a programmatic pipeline but isn't synonymous with it.
- **Three viability tests.** A programmatic build needs all three: (1) **Unique data** the user can't easily find elsewhere; (2) **Structured data** that fills the template's slots cleanly; (3) **Searcher intent** — actual people search these queries.
- **Page archetypes.** Location pages, comparison pages, glossary entries, listing / database pages, "for [persona]" pages, "best [thing] for [use case]" pages, "[entity] vs [entity]" pages.
- **Page count discipline.** Programmatic isn't "more is better." 50 high-quality programmatic pages beat 50,000 thin pages. Start small (50-200 pages), prove the unit works, then scale.
- **The "thin content" risk.** Pages that are mostly template with little unique data are the canonical Google-penalty case. Each programmatic page needs *substantive* unique content per slot — not just "[city] is a great place for [service]."
- **Schema and structured data on programmatic pages.** Most programmatic pages benefit from per-page schema (LocalBusiness, Product, ItemList, FAQ). Schema is part of the template, not an afterthought.
- **Indexation control.** Programmatic builds need disciplined index management. Pages with insufficient data should be `noindex`ed rather than published-and-thin. XML sitemap segmentation by template type helps GSC analysis.
- **Quality control as ongoing operations.** Programmatic isn't "build once, leave alone." Data updates, page-level quality drift, and decay all need monitoring. Treat programmatic as a product with its own metrics.
- **Internal linking matters more for programmatic.** Hundreds of pages need orchestrated linking — typically a hub-and-spoke pattern (collection page links to individual pages; individual pages link back + sideways to peers).

## A worked example

> **Scenario:** Field & Sun is considering an ingredient glossary at `/ingredients/[ingredient-slug]` (~50 entries: zinc oxide, titanium dioxide, niacinamide, hyaluronic acid, vitamin C, etc.). Goal: rank for long-tail ingredient queries ("is zinc oxide safe," "niacinamide benefits"), build topical authority, and capture upstream-of-purchase ingredient research traffic.
>
> **Step 1.** Run `plan-programmatic-seo` to evaluate viability:
>
> - **Unique data:** does Field & Sun have ingredient data nobody else has? Yes — the brand's percentage disclosures, three-skin-tone tolerance testing, and dermatologist-reviewed safety notes. Genuine differentiation.
> - **Structured data:** can the data be templated cleanly? Yes — 12-15 fields per ingredient (mechanism, common uses, safety notes, regulatory status, percentage in our products, dermatologist note, related products).
> - **Searcher intent:** real demand. "Is zinc oxide safe" alone gets 720/mo; long-tail of related queries adds another ~3,000/mo across 50 ingredients.
> - **Verdict:** viable. Run the build with 30-50 entries to start.
>
> **Step 2.** Run `design-programmatic-template` to produce the template + data spec:
>
> - **URL pattern:** `/ingredients/[slug]`.
> - **Template sections:** hero (name + safety status), mechanism, common uses, regulatory context, our percentage disclosure, dermatologist note, three-skin-tone tolerance findings, related ingredients, related products, FAQ.
> - **Data schema:** 18 fields per ingredient (some required, some optional).
> - **Index control:** ingredients with <80% of required fields populated → `noindex`.
> - **Schema markup:** Article + FAQPage + (where applicable) Product (for related-product cards).
> - **Internal linking:** glossary index page (`/ingredients/`) lists all entries; individual entries link to 3-5 related entries + 2-3 related products.
>
> **Step 3.** Engineering builds the template + CMS / data pipeline. Content team populates 30 entries with substantive unique data per slot. Dermatologist reviews safety notes.
>
> **Step 4.** Result: 12 months later, the glossary captures ~6,000 organic visits/mo (vs. ~1,500 if these were standalone blog posts), and the brand's topical authority on ingredients lifts the broader sun-care + skincare clusters by 1-2 ranking positions on average.

## How to do it

1. **Evaluate viability** with `plan-programmatic-seo`. Don't proceed without all three tests passing (unique data, structured data, searcher intent).
2. **Pick the page archetype.** Glossary entries, comparison pages, location pages, etc. Each archetype has different template conventions.
3. **Define the data schema.** What fields per page? Which are required, which optional? Where does the data come from (own database, manually entered, third-party API)?
4. **Design the template** with `design-programmatic-template`. Cover URL pattern, template sections, data slots, index-control rules, schema, internal-link strategy.
5. **Implement.** Engineering builds the template + data pipeline. CMS or static site generator depending on scale.
6. **Populate the first 30-50 pages.** Hand-curate quality (or AI-assisted with strict editorial review). The first batch is the proof; quality matters more than quantity.
7. **Index control.** Pages without enough unique data should be `noindex`ed. Don't publish thin pages "to see if they work."
8. **Wire internal links.** Glossary index → individual entries; individual entries → related entries + related products + relevant blog content.
9. **Submit XML sitemap segment** for the programmatic template. Helps GSC analysis.
10. **Monitor** at the cohort level (all pages in this template) not just per-page. Look for: indexation issues, ranking distribution, click-through-rate, dwell time. Quality drift is real; pages that performed at launch can decay.
11. **Iterate the template** as data improves. New fields, better schema, better internal linking. Programmatic is a product, not a project.
12. **Scale carefully.** Once the first 30-50 pages prove the unit works, scale to 100, then 200, etc. Each scaling step requires verification that quality holds.

## Common pitfalls

- **Building programmatic without unique data.** Templates filled with publicly-available scraped data produce content Google has explicitly targeted in spam updates.
- **Publishing thin pages "to see if they work."** Once thin pages are indexed, they damage site-level signals. Better to `noindex` until the data is sufficient.
- **Confusing programmatic with mass-produced AI content.** AI can populate template slots, but the *data* must be unique. AI-generated text on top of public data isn't programmatic — it's spam.
- **No internal linking strategy.** Hundreds of pages without orchestrated linking are crawl-budget waste and link-equity black holes.
- **No index control.** Publishing every page generated by the template, regardless of data quality, is the canonical programmatic failure mode.
- **No quality monitoring.** Programmatic isn't "set and forget." Quality drift, decay, indexing issues all need ongoing attention. Treat programmatic as a product with metrics.
- **Underestimating engineering cost.** Building a robust programmatic pipeline takes 6-16 weeks for the first launch. Templates that "we'll throw together quickly" almost always ship as thin spam.
- **Programmatic without schema.** Most programmatic pages benefit substantially from structured data. Skipping schema leaves rich-result eligibility on the table.
- **Site-wide penalty risk on the rest of the site.** Bad programmatic affects non-programmatic pages too via site-level quality signals. The downside extends beyond the programmatic pages themselves.
- **Building for the wrong query class.** Some queries genuinely want hand-written editorial. Forcing programmatic onto an editorial-shaped query class produces pages that read template-ish and rank poorly.

## Skills in this toolkit

- **[plan-programmatic-seo](../../../skills/content/plan-programmatic-seo/SKILL.md)** — evaluates whether programmatic SEO fits the use case. Tests three viability gates (unique data, structured data, searcher intent), recommends archetype if viable, recommends against if not. Output is a go / no-go decision with reasoning, plus archetype recommendation if green-lit.
- **[design-programmatic-template](../../../skills/content/design-programmatic-template/SKILL.md)** — produces the template + data spec for an approved programmatic build. Covers URL pattern, template sections, per-slot data requirements, index-control rules, schema strategy, internal-link plan, and acceptance criteria. The handoff document for engineering.

## Related topics

- **[03. Topic Clusters](../03.%20Topic%20Clusters/README.md)** — programmatic templates can sometimes function as cluster spokes (glossary entries within an ingredients cluster).
- **[03. Technical SEO / 02. Indexing](../../03.%20Technical%20SEO/02.%20Indexing/README.md)** — index control is critical for programmatic; thin pages should be `noindex`ed.
- **[03. Technical SEO / 04. Schema Markup](../../03.%20Technical%20SEO/04.%20Schema%20Markup/README.md)** — most programmatic pages benefit from schema; deploy as part of the template.
- **[03. Technical SEO / 06. XML Sitemaps](../../03.%20Technical%20SEO/06.%20XML%20Sitemaps/README.md)** — segment programmatic into its own sitemap for GSC analysis.
- **[02. On-page SEO / 04. URL Structure](../../02.%20On-page%20SEO/04.%20URL%20Structure/README.md)** — programmatic URL patterns deserve deliberate design.
- **[02. On-page SEO / 05. Internal Linking](../../02.%20On-page%20SEO/05.%20Internal%20Linking/README.md)** — programmatic linking is more complex than editorial; needs orchestrated patterns.
- **[03. Technical SEO / 08. Log File Analysis](../../03.%20Technical%20SEO/08.%20Log%20File%20Analysis/README.md)** — programmatic crawl-budget consumption is real; logs help validate.

## Further reading

- [Bear Blog / Tom Critchlow — On Programmatic SEO Done Right](https://tomcritchlow.com/) — strategic framing of when programmatic fits.
- [Eli Schwartz — Product-Led SEO](https://www.eliseo.com/) — the canonical book chapter on programmatic; treats it as a product decision not a content decision.
- [Lars Lofgren — Programmatic SEO Case Studies](https://growandconvert.com/) — practitioner deep-dives with revenue numbers.
- [Aleyda Solis — Programmatic SEO Templates](https://www.aleydasolis.com/) — practical templates for evaluating programmatic candidates.
- [Google Search Central — Auto-Generated Content Guidelines](https://developers.google.com/search/docs/essentials/spam-policies) — Google's explicit guidance on what crosses the line into spam.
