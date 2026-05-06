---
name: generate-schema-markup
description: Use to generate schema markup; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Generate Schema Markup

This skill produces valid JSON-LD for one page or a small batch of pages. Each output includes: the JSON-LD code (ready to paste into a `<script type="application/ld+json">` block), the property-by-property mapping showing where each value came from, validation instructions (Rich Results Test + Schema Markup Validator), and an implementation checklist.

The skill is opinionated: never fabricate data; always link required-property values to actual page content; flag any property the user can't supply with a placeholder + a "needs source data" note; always recommend template-level implementation over per-page hand-coding for repeating page types.

## When to use this skill

- The user wants JSON-LD for a specific page (PDP, blog post, FAQ, homepage).
- The user is implementing their schema strategy page-by-page.
- The user has a page with broken / invalid schema and wants a clean rewrite.
- The user wants the markup as a Liquid template snippet for Shopify or similar.
- The user wants to add a new schema type (e.g. FAQPage) to an existing page.

## When NOT to use this skill

- The user wants the site-wide strategy decision — use `plan-schema-strategy`.
- The user wants to debug a Rich Results Test error message — recommend pasting the JSON-LD + the error and asking for a targeted fix; the Rich Results Test interface itself is the right tool for one-off debugging.
- The user wants to validate existing schema across many pages — that's a crawl + validation tool task (Screaming Frog has a structured-data extraction feature; or use Validator.schema.org via API).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: identity (1) for Organization data; products/services (3) for Product schema.
2. **Schema strategy (optional but valuable)** — read `businesses/<slug>/schema/strategy.md` if it exists. Aligns the generated schema to the strategic plan.
3. **The page** — URL + the data the schema needs:
   - **For Product schema:** product name, description, images (URLs), SKU, brand, price, currency, availability, review count + average rating (if AggregateRating is included).
   - **For Article schema:** headline, author name, author URL, publication date, last-modified date, hero image URL, brief description.
   - **For FAQPage schema:** the actual question + answer pairs from the page (must match what's visible).
   - **For BreadcrumbList:** the breadcrumb path (Home → Category → Subcategory → Page).
   - **For Organization:** brand name, URL, logo URL, social profile URLs.
4. **Schema type(s) to generate** — Product, Article, FAQPage, BreadcrumbList, Organization, etc. If unclear from the strategy, ask.
5. **Implementation target** — raw JSON-LD (one-off pages), or Liquid / Twig / template snippet (scaling page types). Default: ask.

If the page-data inputs are missing for required properties, ask. The skill will not invent data.

## Process

1. **Read Google's current requirements for each schema type the user wants.** The required + recommended property lists are non-trivial and Google updates them periodically. Always pull from Google's "Structured data type definitions" pages (developers.google.com/search/docs/appearance/structured-data). If unsure of a current requirement, flag it for the user to verify.
2. **Map page data to schema properties:**
   - Required properties (Google's list) → mandatory; if data is missing, can't generate the schema. Ask for the data.
   - Recommended properties → fill in where data is available; flag any missing as "improvement opportunity" but proceed.
   - Optional / valuable for entity reasoning → fill in where data is available; don't block on these.
3. **Generate the JSON-LD.** Strict JSON. UTF-8. Wrap in:

   ```html
   <script type="application/ld+json">
   { ... }
   </script>
   ```

   For pages with multiple schema types, generate multiple `<script>` blocks (one per type) — easier to validate and update than nested `@graph` structures.
4. **Apply schema-specific best practices:**
   - **Product** — image array with at least 3 images at 1200×1200+. Offers nested as object (single product) or array (variants). Availability uses Schema.org enums (`InStock`, `OutOfStock`, `Discontinued`). priceValidUntil should be a real date, not a placeholder.
   - **Article** — author should be a Person object with `name` and `url`, not a bare string. datePublished and dateModified in ISO 8601 (`2026-05-01T08:00:00-05:00`).
   - **FAQPage** — every Question's `acceptedAnswer.text` must match the visible answer on the page exactly (or close to it). No inflating the question count.
   - **BreadcrumbList** — itemListElement is an array of ListItem objects; each has `position` (1-based), `name`, and `item` (URL). Last item is the current page.
   - **Organization** — `sameAs` should be social profile URLs. logo should be at least 112×112 (Google's minimum).
5. **For Liquid template output** (Shopify): wrap the JSON-LD in Liquid syntax, pulling values from `{{ product.title }}`, `{{ product.featured_image }}`, `{{ shop.url }}`, etc. Comment which fields pull from where.
6. **Validate.** Generate two validation steps:
   - **Rich Results Test** — paste the URL (or the rendered HTML) into <https://search.google.com/test/rich-results>. Confirms rich-result eligibility per Google's current rules.
   - **Schema Markup Validator** — paste into <https://validator.schema.org>. Confirms vocabulary correctness even where rich-result eligibility doesn't apply.
7. **Document the property-source mapping.** A table showing where each value came from (page data, profile, hard-coded constant). Helps the dev/CMS team when wiring the template.

## Output format

```markdown
# Schema Markup — [Page name]

**URL:** [URL]
**Page type:** [PDP / collection / blog / FAQ / homepage]
**Schema types generated:** [list]
**Implementation target:** [raw HTML / Liquid template / etc.]
**Generation date:** [date]

## Property-source mapping

| Schema property | Value | Source | Required? | Notes |
|----------------|-------|--------|-----------|-------|
| Product.name | "Mineral Sun Drops SPF 50" | Product title | Required | — |
| Product.image | [4 URLs] | Product images 1-4 | Required | All ≥ 1200×1200 |
| Product.offers.price | "42.00" | Product variant price | Required | — |
| Product.offers.availability | "https://schema.org/InStock" | Inventory status | Required | Reflects current state |
| Product.aggregateRating.ratingValue | "4.7" | Yotpo product rating | Required for AggregateRating | Live data |
| Product.aggregateRating.reviewCount | "312" | Yotpo review count | Required for AggregateRating | Live data |
| ... | ... | ... | ... | ... |

Note any property where data is missing or placeholder.

## Generated JSON-LD

### Product + AggregateRating

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mineral Sun Drops SPF 50",
  "image": [
    "https://fieldandsun.com/cdn/shop/products/mineral-sun-drops-hero.webp",
    "https://fieldandsun.com/cdn/shop/products/mineral-sun-drops-blended.webp",
    ...
  ],
  "description": "Tinted mineral sunscreen with 20% non-nano zinc oxide, no white cast, broad-spectrum SPF 50.",
  "sku": "FS-SPF50-30ML",
  "brand": {
    "@type": "Brand",
    "name": "Field & Sun"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://fieldandsun.com/products/mineral-sun-drops-spf-50",
    "priceCurrency": "USD",
    "price": "42.00",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "312",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://fieldandsun.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sun Care",
      "item": "https://fieldandsun.com/collections/sun-care"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mineral Sun Drops SPF 50",
      "item": "https://fieldandsun.com/products/mineral-sun-drops-spf-50"
    }
  ]
}
</script>
```

(Repeat per schema type as needed.)

## Liquid template version (if requested)

```liquid
{%- comment -%} Product + AggregateRating schema {%- endcomment -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": [
    {%- for image in product.images limit: 5 -%}
      "{{ image | image_url: width: 1200 }}"{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
  ],
  "description": {{ product.description | strip_html | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "brand": {
    "@type": "Brand",
    "name": {{ shop.name | json }}
  },
  "offers": {
    "@type": "Offer",
    "url": "{{ shop.url }}{{ product.url }}",
    "priceCurrency": {{ shop.currency | json }},
    "price": "{{ product.selected_or_first_available_variant.price | money_without_currency | replace: ',', '' }}",
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  }
}
</script>
```

## Validation steps

1. Paste the URL (post-deploy) into [Rich Results Test](https://search.google.com/test/rich-results). Expect: 0 errors, all schema types showing as "Eligible."
2. Paste the JSON-LD into [Schema Markup Validator](https://validator.schema.org). Expect: 0 errors. Warnings may be acceptable; review each.
3. After 14-28 days, check GSC → Enhancements for the schema types deployed. Expect "Eligible" status with 0 errors.

## Implementation checklist

- [ ] Add JSON-LD to page `<head>` (or via theme template).
- [ ] Verify on live page (View Source).
- [ ] Run Rich Results Test on live URL.
- [ ] Run Schema Markup Validator.
- [ ] Submit URL to GSC for re-indexing.
- [ ] After 14-28 days: check GSC Enhancements report; confirm rich-result eligibility.
- [ ] Set quarterly re-validation cadence (catch theme updates that break schema).

## Risks and watchouts

2-4 specific watchouts: e.g. "if Yotpo isn't deployed yet, AggregateRating schema will fail validation — sequence after Yotpo wiring"; "priceValidUntil must update annually, otherwise Google ignores Offer"; "Liquid template version uses `selected_or_first_available_variant` — for products with widely-varying variant prices, consider per-variant schema instead."

```

Save the produced file to `businesses/<slug>/schema/<page-slug>.md`. Create the `schema/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every required property is present with a real value or a clearly-flagged placeholder.
- Property-source mapping table shows where every value comes from.
- JSON is strict and valid (no trailing commas, proper escaping, valid Schema.org types and enums).
- For Liquid output: `| json` filter is used on every interpolated string to handle escaping; price filtering is correct; image URLs use the right Liquid filter.
- BreadcrumbList includes the current page as the last item.
- AggregateRating values match what's actually visible on the page (no inflation).
- Validation steps reference both Rich Results Test and Schema Markup Validator.
- Implementation checklist closes with re-validation cadence.

## Common mistakes to avoid

- Don't fabricate values. If the user can't supply review count, AggregateRating doesn't ship.
- Don't use deprecated property names (e.g. `priceCurrency` is current; `price.priceCurrency` was a different deprecated nesting).
- Don't omit `@context: "https://schema.org"`. Required.
- Don't add `@type` values that aren't in Schema.org's vocabulary. The Schema Markup Validator will flag them but better to catch upfront.
- Don't put non-product types in `mainEntity` of a Product schema. Cross-pollinated types confuse Google.
- Don't put markup that contradicts visible content. If the page says "out of stock" and the schema says "InStock," the schema is wrong and Google penalises.
- Don't forget that Schema.org enums use full URLs (`https://schema.org/InStock`), not bare strings (`"InStock"`).
- Don't generate schema types the strategy didn't approve. If FAQPage isn't in the strategy and the user wants it, surface that as a strategy revision rather than silently extending scope.

## Example

**Input (abbreviated):** Page = `/products/mineral-sun-drops-spf-50`. Schema types: Product + AggregateRating + BreadcrumbList. Page data supplied: name "Mineral Sun Drops SPF 50", description, 4 image URLs, SKU "FS-SPF50-30ML", brand "Field & Sun", price $42, currency USD, availability InStock, Yotpo rating 4.7 (312 reviews). Implementation target: Liquid template.

**Output (abbreviated):**

Property-source mapping shows every value tied to product data or shop config; no fabrications.

JSON-LD generated for all three types as separate `<script>` blocks. Liquid version pulls `product.title`, `product.images`, `product.selected_or_first_available_variant`, `shop.name`, `shop.url`, `shop.currency` with `| json` filter on all string interpolations. AggregateRating Liquid version pulls from Yotpo's `{{ product.metafields.yotpo.* }}` (note: Yotpo Liquid integration must be enabled).

Validation: Rich Results Test on a deployed sample PDP confirms all 3 schema types eligible. Schema Markup Validator returns 0 errors, 1 warning (priceValidUntil is set to year-end; recommend updating annually).

Risks: Yotpo metafields must be enabled before AggregateRating ships; price filter strips currency formatting (verified for USD; would need adjustment for currencies with comma decimal separators).

Saved to `businesses/field-and-sun/schema/mineral-sun-drops-spf-50.md`.
