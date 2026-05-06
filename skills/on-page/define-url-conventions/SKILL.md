---
name: define-url-conventions
description: Use to define url conventions; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Define URL Conventions

This skill produces a written URL-structure standard for a site. The deliverable is a per-page-type pattern document with examples and edge-case rules — not an audit of existing URLs. New sites, new content types, and IA redesigns are the natural use cases.

A clear convention pays for itself many times over. The cost of inconsistent URLs gets paid every time the site adds content, every time a marketer has to ask "what's the URL pattern for this?", and especially when a future migration has to fix the inconsistency.

## When to use this skill

- The user is launching a new site or new section and needs to set URL conventions before content is published.
- The user is adding a new content type (e.g. "we're starting a blog," "we're adding location pages") and needs a pattern.
- The user is briefing a CMS implementation or a developer and needs the URL spec.
- The user has inconsistent URL patterns and wants to define the forward-going standard before cleaning up legacy.
- The user is doing a site redesign / re-platform and needs URL decisions made before migration.

## When NOT to use this skill

- The user wants to audit existing URLs — use `audit-urls`.
- The user wants to plan a redirect migration — use `audit-urls` (the audit produces the redirect map).
- The user wants help with parameter handling, canonical tags, or sitemap generation — those are Technical SEO territory.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), business model (2), CMS/platform (5).
2. **Page types in scope** — which content types the site has or will have. Default ecom set: products, collections, blog. Optional: FAQ, comparison, location pages, landing pages, glossary, tools, account pages. Ask if unclear.
3. **CMS / platform** — Shopify, WooCommerce, Webflow, WordPress, custom. The conventions adapt to platform constraints (e.g. Shopify can't fully drop the `/collections/` and `/products/` prefixes without theme work).
4. **Geographic / language scope** — single market vs. multi-market. Multi-market introduces hreflang, country/language subfolders or subdomains.
5. **Existing constraints** — any URLs that can't change (legacy traffic, bookmark equity, hardcoded internal/external links). The convention has to live alongside these.

If the page types or platform are unclear, ask before producing the document.

## Process

1. **Anchor on the platform.** Each platform has built-in URL behaviours that constrain the convention. Note them up front so the user understands which rules are platform-imposed vs. opinionated.
2. **Define a pattern per page type.** For each:
   - **Pattern** — the URL template (e.g. `/products/<slug>` or `/blog/<slug>` or `/collections/<parent-slug>/<child-slug>`).
   - **Slug source** — how the slug is derived (page title? primary keyword? both, with manual override?).
   - **Slug rules** — kebab-case, lowercase, max length (e.g. 50 chars), stop-words to drop, characters to escape.
   - **Examples** — 2-3 real examples for this site (use products/collections from the business profile).
   - **Edge cases** — what happens when a product is in multiple collections? What about long slugs? Special characters? Non-ASCII?
3. **Define cross-cutting rules.** These apply across all page types:
   - Trailing slash policy (with or without; pick one and enforce).
   - Capitalisation policy (lowercase always; redirect any capitalised variants).
   - Date inclusion (no for blog; case-by-case for news).
   - Parameter handling (filter, sort, pagination URLs — `rel=canonical` policy).
   - Geographic / language routing (subfolder vs subdomain vs ccTLD).
   - URL versioning policy (avoid `/v2/` patterns; use redirects on changes).
4. **Define migration policy.** What happens when a URL needs to change?
   - 301 redirect required, no exceptions.
   - No chain redirects (collapse multi-hop).
   - Internal link sweep within 7 days of migration.
   - Re-index in GSC.
5. **Document forbidden patterns.** Things that should never appear: query strings in canonical URLs, capitalised slugs, underscore-separated slugs, slugs over a max length, slugs with stop-word stuffing.
6. **Add an enforcement note.** How will this convention be enforced? CMS settings, content guidelines, code review of URL changes, occasional audit cadence.

## Output format

```markdown
# URL Conventions — [Business Name]

**Platform:** [Shopify / WooCommerce / Webflow / etc.]
**Markets / languages:** [list]
**Created:** [date]

## Cross-cutting rules

- **Slug format:** kebab-case, lowercase, ASCII-only, max [n] chars.
- **Trailing slash:** [with / without] — enforced via [mechanism].
- **Capitalisation:** lowercase only; capitalised variants 301 to canonical.
- **Dates in URLs:** [no, except for...] — rationale.
- **Parameters:** filter / sort / pagination URLs use `rel=canonical` pointing to the clean version. Tracking parameters (UTM, fbclid) ignored by canonical.
- **Geographic routing:** [subfolder / subdomain / ccTLD pattern].
- **No chain redirects.** Migrations collapse multi-hop chains.

## Per-page-type patterns

### Products
- **Pattern:** `/products/<slug>`
- **Slug source:** product title → kebab-case, drop stop-words.
- **Slug rules:** primary keyword first; max 50 chars; no SKU codes; no year stamps.
- **Examples:**
  - `/products/mineral-sun-drops-spf-50`
  - `/products/daily-glow-serum`
  - `/products/bloom-cleanser`
- **Edge cases:**
  - Product in multiple collections: keep `/products/<slug>` flat; use breadcrumbs and `rel=canonical` to handle context.
  - Long titles: trim to primary-keyword + 1-2 modifier words.

### Collections / categories
- **Pattern:** `/collections/<slug>`
- **Slug source:** category name → kebab-case → primary keyword if different.
- **Slug rules:** singular vs plural — use plural for category names ("collections/serums" not "serum"); skip the word "products" if the category implies it.
- **Examples:** ...
- **Edge cases:** ...

### Blog posts
- **Pattern:** `/blog/<slug>`
- **Slug source:** post title → primary keyword (keyword-led slug, not title-verbatim).
- **Slug rules:** no dates; no `/news/` or `/articles/` parent.
- **Examples:** ...
- **Edge cases:** ...

### FAQ pages (if applicable)
...

### Comparison pages (if applicable)
...

### Location pages (if applicable)
...

### Landing pages
...

## Forbidden patterns

- Query strings in canonical URLs.
- Capitalised slugs (`/Sun-Care`).
- Underscores or camelCase (`/sun_care`, `/sunCare`).
- Slugs over [n] chars.
- Date-stamped URLs (except news/timely content).
- SKU or internal IDs in URLs (`/products/sku-12345`).
- Stop-word-stuffed slugs (`/the-best-tinted-mineral-sunscreen-spf-50-for-you`).

## Migration policy
- 301 redirect required for every URL change.
- No chain redirects; collapse to a single hop.
- Internal links updated within 7 days of migration.
- URL submitted to GSC for re-indexing.
- Track recovery for 60-90 days.

## Enforcement
- CMS-level: [URL pattern locked in theme/template; auto-slugification on save].
- Content guidelines: published in the team's content brief template (link).
- Audit cadence: quarterly URL audit using `audit-urls` skill.
- Code review: URL changes require approval from [role].
```

Save the produced file to `businesses/<slug>/urls/conventions.md`. Create the `urls/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every page type relevant to this business has a pattern, slug source, slug rules, examples, and edge cases.
- Examples use real products/collections from the business profile, not generic placeholders.
- Cross-cutting rules cover trailing slash, case, dates, parameters, and geography explicitly.
- Forbidden patterns list is concrete, not vague.
- Migration policy is a hard rule, not a suggestion.
- Platform constraints are honest. If Shopify forces `/collections/` and `/products/` prefixes, the document doesn't pretend otherwise.

## Common mistakes to avoid

- Don't propose URL patterns the platform can't enforce. Shopify can't easily drop the `/products/` prefix; saying so in the convention doc creates false expectations.
- Don't treat this as an audit. The deliverable is rules, not a list of URLs to fix.
- Don't pad the document with theory. Each rule is a decision; each decision is concrete.
- Don't forget multi-language / multi-market. If the profile mentions multiple markets, the convention has to handle hreflang routing.
- Don't write generic examples ("/products/example-product"). Use the business's actual product/collection names.
- Don't introduce slug-versioning patterns (e.g. `/v2/products/...`). Versioning belongs in API URLs, not content URLs.

## Example

**Input (abbreviated):** Field & Sun. Shopify. Single market (US, English). Page types: products, collections, blog, FAQ.

**Output (abbreviated):**

Cross-cutting rules: kebab-case, lowercase, no trailing slash (Shopify default), no dates in URLs, parameters canonicalised to clean version, single-market so no geographic routing.

Products: `/products/<slug>`, slug = product title kebab-cased with stop-words dropped, max 50 chars. Examples: `/products/mineral-sun-drops-spf-50`, `/products/daily-glow-serum`. Edge case: products in multiple collections stay flat at `/products/<slug>` (Shopify creates duplicate `/collections/<x>/products/<slug>` URLs by default — handle with `rel=canonical` pointing at the flat URL).

Collections: `/collections/<slug>`, slug = primary keyword (e.g. `/collections/sun-care`), drop the word "products" since the category implies it.

Blog: `/blog/<slug>` (note: NOT Shopify's default `/blogs/news/<slug>` — recommend re-routing the blog handle in Shopify settings to drop the `/news/` parent and switch from `/blogs/` to `/blog/`).

FAQ: `/faq/<slug>` for individual FAQ pages, with a parent index at `/faq` if there are 5+ entries.

Forbidden patterns include `/Sun-Care`, `/products/sku-238`, `/blogs/news/2025/12/15/...`, slugs over 60 chars.

Migration policy: 301 always, no chains, internal-link sweep within 7 days, GSC re-index.

Enforcement: Shopify auto-slugification on save; quarterly audit; URL changes require Marketing Lead approval. Saved to `businesses/field-and-sun/urls/conventions.md`.
