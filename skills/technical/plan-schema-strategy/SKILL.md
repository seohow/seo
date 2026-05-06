---
name: plan-schema-strategy
description: Use to plan schema strategy; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Plan Schema Strategy

This skill produces a written **schema strategy** for a site. The deliverable is a per-page-type plan: which schema types to deploy, the priority property list per type, the implementation approach, and a sequencing plan that ships value in waves rather than trying to do everything at once.

The strategy is opinionated about a few things: start with the schema types that drive the most rich-result lift for the user's page mix; favour template-level implementation over per-page hand-coding; ship in waves with validation gates between each.

## When to use this skill

- The user is starting from zero / inconsistent schema and wants a roadmap before generating anything.
- The user is launching a new site, new content section, or new product category and wants schema decisions made up front.
- The user is briefing a dev team or agency on schema rollout.
- The user has shipped some schema ad-hoc and wants to consolidate to a coherent strategy.
- The user wants to evaluate which schema types are worth investing in given their page mix.

## When NOT to use this skill

- The user wants JSON-LD for a specific page — use `generate-schema-markup`.
- The user wants to debug a specific schema validation error — that's a Rich Results Test workflow, not a strategy plan.
- The user wants to audit existing schema across the site — recommend running `generate-schema-markup` against the priority pages and noting where existing markup is missing or invalid.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), products/services (3), CMS / platform (5).
2. **Site page-type inventory** — what page types the site has and approximately how many of each. For Field & Sun's stack: products (8), collections (4), blog posts (~25), FAQ pages, About, Contact. Ask if not clear from the profile.
3. **Existing rich-result performance (optional but valuable)** — GSC → Enhancements report shows which schema types Google has detected and any errors. If available, references the existing baseline.
4. **CMS / template constraints** — Shopify Sense theme has limited structured-data hooks; WooCommerce is more flexible; Webflow custom; etc. The plan adapts.
5. **Implementation capacity** — does the user have dev resources, paid app budget, or only Liquid-template tweaks? Affects sequencing.

If page-type inventory is unclear, ask. The plan is per-page-type; without clear types, the plan is hypothetical.

## Process

1. **Map page types to schema candidates.** For each page type the site has, list the eligible-for-rich-results schema types per Google's documentation:
   - **Product page** → Product (required for rich result), AggregateRating, Review, BreadcrumbList, optionally FAQPage if the page has FAQs, optionally Offer / OfferCatalog.
   - **Collection / category page** → BreadcrumbList, optionally ItemList (lower-impact).
   - **Blog post** → Article, BreadcrumbList, optionally FAQPage if FAQs exist, optionally HowTo for step-by-step content.
   - **FAQ page** → FAQPage, BreadcrumbList.
   - **Homepage** → Organization, WebSite (with SearchAction for sitelinks search box).
   - **About / contact** → Organization (or LocalBusiness for local ops).
   - **Recipe** → Recipe + AggregateRating + Video (if any).
   - **Tutorial / how-to** → HowTo + VideoObject (if any).
   - **Comparison / "best of"** → ItemList + Review (the comparison-list rich result is gone but markup still feeds entity understanding).
2. **Cross-reference with current eligibility.** Some rich-result types have been deprecated or restricted (e.g. FAQ rich results were removed from non-health/government domains in mid-2023; HowTo rich results were limited around the same time). Flag any schema type the user might still want for AI Overview / entity reasons even if the rich-result is no longer surfaced. Be honest about what Google currently shows.
3. **Prioritise by rich-result impact for this site.** Score each schema type by:
   - **Page mix coverage** — does this apply to many pages, or just one or two?
   - **Rich-result impact** — does Google still show a rich result for this type? How prominent?
   - **Implementation cost** — template-level (low) vs per-page (high)?
   - **Page-type criticality** — is this a high-traffic page type for the business?
   Result: a P0 / P1 / P2 list of schema types to deploy.
4. **Define mandatory properties per type.** For each schema type the strategy ships, list:
   - **Required properties** (Google's documented requirements — markup won't earn a rich result without them).
   - **Strongly recommended properties** (improve rich-result quality).
   - **Optional but valuable** (improve entity reasoning / AI Overview eligibility).
   These become the spec for `generate-schema-markup` to follow.
5. **Choose the implementation approach.** Per page type:
   - **Liquid / Twig / template-level** — best, scales, automatic. Default for product, collection, blog, breadcrumb.
   - **App-injected** (Shopify apps like JSON-LD for SEO, Yoast for WooCommerce) — works, has app-tax cost, sometimes inflexible. Backup option.
   - **Per-page hand-coded** — only for one-off pages (homepage, About). Don't scale this approach.
6. **Sequence the rollout in waves.** A typical sequencing:
   - **Wave 1 (Wk 1-2):** BreadcrumbList sitewide + Product schema on PDPs (highest leverage; most pages affected).
   - **Wave 2 (Wk 3-4):** AggregateRating + Review on PDPs (depends on review system being in place).
   - **Wave 3 (Wk 5-6):** Article schema on blog posts; FAQPage on blog posts where FAQs exist.
   - **Wave 4 (Wk 7-8):** Organization + WebSite on homepage.
   - **Wave 5 onwards:** Niche types — HowTo, Recipe, VideoObject as relevant.
7. **Define validation gates.** Each wave: run Rich Results Test on 5+ representative pages; run Schema Markup Validator. No wave proceeds until the previous one is clean in GSC Enhancements.
8. **Identify dependencies and risks.** A few common ones: AggregateRating depends on a review system that publishes review counts; HowTo schema depends on the content following a step format; Recipe schema requires structured ingredient + step lists; FAQPage rich results have shrunk and may not be worth deep effort.

## Output format

```markdown
# Schema Strategy — [Business Name]

**Platform:** [Shopify / WooCommerce / etc.]
**Page-type inventory:** [counts per type]
**Implementation capacity:** [dev / app / template only]
**Plan date:** [date]

## Per-page-type plan

### Product (PDP)
- **Schema types:** Product (P0), AggregateRating (P0), Review (P0), BreadcrumbList (P0), FAQPage (P1, if FAQs present)
- **Required Product properties:** name, image (multiple), description, sku or productID, brand, offers (price, priceCurrency, availability, priceValidUntil)
- **Recommended:** mpn, gtin, color, size, weight, additionalProperty, hasMerchantReturnPolicy, shippingDetails
- **Implementation:** Liquid template at `theme.liquid` and `product.liquid`; auto-populated from product data. Aggregate review count + average pulled from Yotpo via Liquid.
- **Validation:** Rich Results Test on top 3 PDPs after each rollout.

### Collection / category
- **Schema types:** BreadcrumbList (P0)
- **Note:** ItemList is technically possible but Google's collection rich result is minimal; not worth investing.

### Blog post
- **Schema types:** Article (P0), BreadcrumbList (P0), FAQPage (P1 — only on posts with question H2s)
- **Required Article properties:** headline, image, datePublished, author (with name + url)
- **Recommended:** dateModified, mainEntityOfPage, publisher (with name + logo)
- **Implementation:** Liquid template at `article.liquid`.

### Homepage
- **Schema types:** Organization (P0), WebSite (P0)
- **Required Organization properties:** name, url, logo, sameAs (social profile links)
- **Recommended:** contactPoint, founder, founding date, description.
- **WebSite:** url, potentialAction (SearchAction for sitelinks search box).
- **Implementation:** Hand-coded in `theme.liquid` (homepage-only) or app-injected.

### FAQ page (if standalone)
- **Schema types:** FAQPage (P1 — Google shrunk FAQ rich results in 2023; deploy for entity reasons but expect modest CTR lift), BreadcrumbList (P0)
- **Required FAQPage properties:** mainEntity (Question array, each with name + acceptedAnswer.text)
- **Implementation:** Liquid template; pull questions from page sections.

### About / contact
- **Schema types:** Organization (matches homepage); link `sameAs` to social profiles.

## Prioritisation across waves

### Wave 1 — Foundation (Wk 1-2)
- BreadcrumbList sitewide
- Product schema on PDPs (basic: name, image, description, offers)
- Validation: Rich Results Test on 5 sample PDPs

### Wave 2 — Reviews (Wk 3-4)
- AggregateRating + Review on PDPs (depends on Yotpo / review system being live)
- Validation: GSC Enhancements > Product report; expect "Eligible" status within 14 days

### Wave 3 — Content (Wk 5-6)
- Article schema on blog posts
- FAQPage on blog posts with question-form H2s
- Validation: Rich Results Test on 5 sample posts

### Wave 4 — Brand entity (Wk 7-8)
- Organization + WebSite on homepage
- Validation: GSC Enhancements; sitelinks search box may take 60-90 days to appear

### Wave 5+ — Niche (as relevant)
- HowTo, Recipe, VideoObject — only if content types support them

## Implementation approach
- Default: Liquid templates that pull from product / page / blog data automatically.
- Hand-coded: homepage and About only.
- Apps: avoid unless dev capacity is genuinely zero. App-injected schema is harder to debug and adds vendor risk.

## Validation policy
- Every schema type validates in Rich Results Test (rich-result eligibility) and Schema Markup Validator (vocabulary correctness) before going live.
- After each wave, monitor GSC Enhancements for the schema types deployed. Expect "Eligible" status within 14-28 days.
- Set quarterly re-validation cadence to catch template regressions.

## Dependencies and risks

- **AggregateRating depends on a working review system** — without Yotpo / Loox / Judge.me publishing review counts and averages to the page DOM, the schema can't pull the values. Dependency on review-system rollout.
- **FAQPage rich-result shrinkage (2023)** — Google reduced FAQ rich-result eligibility to health and government domains. We're deploying FAQPage anyway for entity / AI Overview value, but don't expect SERP CTR lift on this type alone.
- **Schema must reflect page content** — markup that diverges from what's visible (review count inflation, fake availability) gets penalised. Templates have to wire to live data, not static placeholders.
- **Theme updates can break schema** — every Shopify theme update is a re-validation event. Add to the regression checklist.
- **AI Overview eligibility is opaque** — schema is *one* of several signals. Don't promise AI Overview placement from schema alone.

## Recommended next steps
1. Apply this plan to `generate-schema-markup` for one priority PDP and validate end-to-end.
2. Roll out Wave 1 templates (BreadcrumbList + basic Product).
3. Monitor GSC Enhancements; iterate on errors.
```

Save the produced file to `businesses/<slug>/schema/strategy.md`. Create the `schema/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every page type the site has appears in the per-page-type plan.
- Each schema type has a P0/P1/P2 priority and a list of required + recommended properties.
- Implementation approach is realistic for the user's stack (don't recommend Liquid edits if they don't have dev capacity).
- Sequencing is staged in waves — not a single "do everything" bucket.
- FAQ rich-result shrinkage is acknowledged honestly.
- Risks section is specific to this business, not generic.
- Implementation checklist closes with validation policy and re-audit cadence.

## Common mistakes to avoid

- Don't recommend schema types that no longer earn rich results without saying so explicitly.
- Don't ship FAQPage on every page just because you can — Google has narrowed its eligibility.
- Don't recommend per-page hand-coding for any page type that scales beyond ~10 pages. It always becomes maintenance debt.
- Don't fabricate schema requirements. Pull required vs recommended properties from Google's current docs (linked above).
- Don't ignore the page-mix reality. If the site has 4 collection pages and 8 product pages, BreadcrumbList everywhere is still right, but ItemList on collections might not be worth the effort.
- Don't recommend deploying every schema type at once. Sequence in waves so each wave can validate before the next ships.
- Don't promise specific SERP outcomes. Schema unlocks *eligibility*; SERP results depend on Google's algorithms.

## Example

**Input (abbreviated):** Field & Sun. Shopify (Sense theme). Page mix: 8 PDPs, 4 collection pages, 25 blog posts, FAQ page, About, Contact. Existing schema: none. GSC Enhancements: empty (no current rich-result eligibility). Implementation capacity: theme tweaks + Yotpo (already installed for reviews).

**Output (abbreviated):**

Per-page-type plan:

- PDPs: Product + AggregateRating + Review + BreadcrumbList (P0); FAQPage (P1 on PDPs with FAQs)
- Collection pages: BreadcrumbList (P0)
- Blog posts: Article + BreadcrumbList (P0); FAQPage (P1 on posts with question H2s)
- Homepage: Organization + WebSite (P0)
- FAQ page: FAQPage + BreadcrumbList (P0)
- About: Organization (matches homepage)

Wave 1 (Wk 1-2): BreadcrumbList sitewide + Product on PDPs (basic).
Wave 2 (Wk 3-4): AggregateRating + Review on PDPs (depends on Yotpo wiring).
Wave 3 (Wk 5-6): Article + FAQPage on blog posts.
Wave 4 (Wk 7-8): Organization + WebSite on homepage.

Implementation: Liquid templates everywhere (product.liquid, article.liquid, theme.liquid). Yotpo data pulled into AggregateRating via Liquid hooks.

Risks: FAQ rich-result eligibility narrowed in 2023 — deploy FAQPage for entity value, expect modest CTR lift. AggregateRating waits on Yotpo wiring. Theme updates require re-validation.

Saved to `businesses/field-and-sun/schema/strategy.md`.
