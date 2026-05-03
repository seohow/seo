# Schema Markup

> Structured data — JSON-LD code that tells Google what each page *is*, not just what it says. The mechanism behind rich results, FAQ snippets, product cards, breadcrumbs, and AI Overview eligibility.

## What it is

Schema markup is a vocabulary maintained by Schema.org for describing entities on a webpage in a machine-readable way. It lets you tell Google explicitly: "this is a Product with this name, this price, this availability, these reviews," or "this is a Recipe with these ingredients and these steps," or "this is a FAQ with these questions and these answers."

Google reads this markup, validates it, and uses it to power **rich results** in the SERP — the visual elements beyond the standard blue-link-and-snippet (star ratings, price + availability, FAQ accordions, breadcrumb trails, recipe cards). Increasingly, schema also feeds AI Overviews and shopping carousels.

The standard format Google recommends is **JSON-LD** — a script tag in the page's `<head>` containing the structured data as JSON. Microdata and RDFa are alternatives but JSON-LD is the modern standard.

## Why it matters

Two reasons. First, **schema unlocks rich results**, which lift CTR. A product result with star ratings, price, and "in stock" labels gets significantly more clicks than the same result without — typical lift is 10-30% on CTR depending on the rich-result type and SERP context. For a D2C brand with PDPs ranking on commercial queries, this is one of the highest-leverage technical wins available.

Second, **schema is increasingly important for AI Overviews and entity understanding**. Google's shift to AI-mediated search relies on entity graphs — and your schema is the most direct signal you can send about what your pages represent. A site with thorough Product, Article, Organization, and FAQPage schema is structurally better-positioned for AI Overviews than a site that ships pages with no structured data.

For Field & Sun, the priority schema is: Product (every PDP), BreadcrumbList (every page), Article (every blog post), FAQPage (PDPs and informational blog posts), Organization (homepage), and Review/AggregateRating (every PDP that has reviews). Layered correctly, these unlock the SERP's full visual real estate.

## Core concepts

- **Schema.org vocabulary** — the open vocabulary defining types (Product, Article, Recipe, etc.) and properties (name, price, author, etc.). Reference: schema.org. Google supports a subset; what's *valid in schema* and what's *eligible for rich results* are not the same set.
- **JSON-LD** — JavaScript Object Notation for Linked Data. The format Google recommends. Lives in a `<script type="application/ld+json">` tag in `<head>` (or `<body>`). Doesn't affect rendered content.
- **Required vs recommended properties** — Google's documentation for each rich-result type lists *required* properties (no rich result without them) and *recommended* properties (improve rich-result quality). Hitting required is mandatory; recommended is strongly advised.
- **Validation: Rich Results Test + Schema Markup Validator** — Google's tools (<https://search.google.com/test/rich-results> and <https://validator.schema.org>). The first checks rich-result eligibility; the second checks schema validity. Run both.
- **Common rich-result types for ecom** — Product (price, availability, rating), BreadcrumbList (path crumbs in SERP), Review / AggregateRating (stars), FAQPage (question accordion), Article (publication date, author), HowTo (step-by-step), VideoObject (video previews), Organization (knowledge panel signals).
- **Schema isn't a ranking factor in itself** — it's an eligibility signal. Schema doesn't make a page rank higher; it makes the page eligible for richer SERP treatment, which lifts CTR, which then influences ranking through the click-through-rate signal.
- **Schema must reflect what's on the page** — markup that claims a product is "in stock" when the page shows "sold out" gets penalised (and rich results get suspended). Same for review counts, prices, and FAQ content. Markup is a description, not an enhancement.

## A worked example

> **Scenario:** Field & Sun's Mineral Sun Drops PDP ranks position 9 for "tinted mineral sunscreen." Currently has no schema markup. Audit reveals: no Product schema, no AggregateRating, no FAQPage despite having a strong FAQ section, no BreadcrumbList. Result: SERP listing shows just title + meta description, no rich elements. Competitors at positions 1-5 all have full Product schema with stars and price.
>
> **Step 1.** Plan the schema strategy. Decide per page type:
>
> - PDPs: Product + AggregateRating + Review + BreadcrumbList + FAQPage (where FAQs exist)
> - Collection pages: BreadcrumbList + ItemList (optional)
> - Blog posts: Article + BreadcrumbList + FAQPage (where FAQs exist)
> - Homepage: Organization + WebSite (with SearchAction for sitelinks)
>
> **Step 2.** Generate Product schema for the Mineral Sun Drops PDP. Properties: name ("Mineral Sun Drops SPF 50"), brand (Field & Sun), description, image (5 product photos), sku, offers (price $42, priceCurrency USD, availability InStock, priceValidUntil), aggregateRating (4.7 / 312 reviews), review (top 3 reviews with author + body + reviewRating). Add BreadcrumbList for Home → Sun Care → Mineral Sun Drops. Add FAQPage covering "Does it leave a white cast?", "Is zinc oxide safe for daily use?", "Can I use it under makeup?".
>
> **Step 3.** Validate. Run the Rich Results Test on the page URL. Confirm Product, BreadcrumbList, and FAQPage all show as eligible with no errors. Run the Schema Markup Validator for full schema validity.
>
> **Step 4.** Implement in Shopify theme. JSON-LD blocks injected in `<head>` via Liquid templates that pull from product data. Push live, request re-indexing.
>
> **Step 5.** After 14-30 days, GSC Enhancement reports show Product, FAQ, and Breadcrumb rich-result eligibility green. SERP listing now shows star rating (4.7), price ($42), availability ("in stock"), breadcrumb trail, and FAQ accordion. CTR rises from 1.8% to 3.6%. Click volume roughly doubles at the same position.

## How to do it

1. **Audit current schema.** Pull your top 10-20 pages by traffic. Run each through the Rich Results Test and the Schema Markup Validator. Note: which pages have no schema, which have invalid schema, which have valid schema but missing recommended properties.
2. **Plan the schema strategy.** Decide per page type which schema types to ship. Don't try to ship everything everywhere — start with the rich-result types most relevant to your content. The `plan-schema-strategy` skill produces this plan.
3. **Generate schema per priority page.** Use the `generate-schema-markup` skill to produce JSON-LD with all required properties + as many recommended as the page genuinely supports. Don't fabricate data (rating counts, prices) you don't have.
4. **Validate every schema before shipping.** Rich Results Test confirms eligibility; Schema Markup Validator confirms vocabulary correctness. No schema goes live without validation.
5. **Implement at template level for scale.** Per-page hand-coded JSON-LD doesn't scale. On Shopify, schema lives in Liquid templates that pull from product / page / blog data automatically. One template change ships across hundreds of pages.
6. **Monitor GSC Enhancement reports.** Search Console → Enhancements has a section for each schema type Google detected. Watch for errors and validate when GSC flags issues.
7. **Re-validate when product data or page content changes.** Schema must reflect the page. When prices change, when products go out of stock, when FAQ copy changes, the schema needs to update too — usually automatic if the template wires it correctly, but worth occasional spot-checks.
8. **Layer additional schema as the site matures.** Start with Product + BreadcrumbList + AggregateRating + FAQPage. Add Article on blog posts next. Add Organization on the homepage. Add HowTo on tutorial-style content. Don't try to do everything at once.

## Common pitfalls

- **Marking up content that isn't visible to users.** Schema must reflect what's on the page. Adding 50 fake FAQ items in JSON-LD when only 3 are visible gets penalised — Google calls this "deceptive markup."
- **Inflating review counts or ratings.** Easiest way to get rich results suspended. AggregateRating must match what's published on the page.
- **Missing required properties.** Every rich-result type has a list of must-have properties. A Product without `offers.price` or `offers.availability` won't earn the rich result. Check the requirements per type.
- **Using deprecated types or properties.** Google deprecates rich-result types occasionally (e.g. removed FAQ rich results from non-government/health domains in mid-2023). Check current eligibility before investing in a schema type.
- **Hand-coding JSON-LD per product page.** Doesn't scale. Always template-level.
- **Forgetting BreadcrumbList.** Cheap to add, lifts SERP visibility on every page. Often the most under-deployed schema type.
- **Marking up purely-decorative or off-strategy pages.** Don't add Product schema to a sold-out, discontinued PDP. Either remove the page or keep schema in sync with reality (e.g. `availability: Discontinued`).
- **Not validating after launch.** Templates can break silently. Set a quarterly schema audit cadence.

## Skills in this toolkit

- **[plan-schema-strategy](../../../skills/technical/plan-schema-strategy/SKILL.md)** — produces a site-wide structured-data plan: which schema types per page type, which properties are mandatory vs nice-to-have, implementation approach (Liquid template vs app vs hand-coded), and a sequencing plan. Run this first before generating any specific schema.
- **[generate-schema-markup](../../../skills/technical/generate-schema-markup/SKILL.md)** — generates valid JSON-LD for a specific page (PDP, collection, blog post, FAQ, homepage), with all required properties populated from page data, recommended properties where the data supports it, and explicit validation steps before deploy.

## Related topics

- **[02. Indexing](../02.%20Indexing/README.md)** — schema doesn't fix indexing problems but rich-result eligibility depends on indexing.
- **[02. On-page SEO / 03. Header Structure](../../02.%20On-page%20SEO/03.%20Header%20Structure/README.md)** — FAQPage schema works best when the page has matching question-form H2s.
- **[02. On-page SEO / 06. Image Optimization](../../02.%20On-page%20SEO/06.%20Image%20Optimization/README.md)** — Product schema requires image URLs; image quality and dimensions matter for the rich-result presentation.
- **[09. AI SEO / 04. SERP Features](../../09.%20AI%20SEO/04.%20SERP%20Features/)** — featured snippets, knowledge panels, AI Overviews — all of which schema increasingly feeds.
- **[09. AI SEO / 05. LLM Visibility](../../09.%20AI%20SEO/05.%20LLM%20Visibility/)** — entity-rich schema is one of the strongest signals for LLM-mediated visibility.

## Further reading

- [Schema.org](https://schema.org) — the canonical vocabulary reference. Cluttered but authoritative.
- [Google Search Central — Structured Data](https://developers.google.com/search/docs/appearance/structured-data) — Google's specific guidance on which types are eligible for rich results, with required and recommended property lists.
- [Google Rich Results Test](https://search.google.com/test/rich-results) — the tool you'll use every time you ship schema.
- [Schema Markup Validator](https://validator.schema.org) — for full vocabulary validation beyond Google's rich-result subset.
- [Aleyda Solis — Schema Markup Strategy at Scale](https://www.aleydasolis.com/) — practitioner-level guidance on rolling out structured data across large product catalogues.
