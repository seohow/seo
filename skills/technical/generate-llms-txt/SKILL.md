---
name: generate-llms-txt
description: Generates a /llms.txt file to guide large language models on how to use the site's content. Use when optimising for AI-mediated search or controlling LLM citation behaviour.
---

# Generate llms.txt

This skill produces a curated `/llms.txt` file — a Markdown summary of the site's content, structured per the llms.txt proposal at llmstxt.org. The output is the file, ready to publish at site root, plus an implementation note. The skill curates rather than dumps — listing the 10-30 highest-value URLs organised into sections, not all 612 indexed URLs.

The skill is opinionated: every entry has a one-line description, not a bare URL; sections reflect the site's actual structure, not a generic template; the description text is in the brand's voice; URLs in the file are validated as 200 / canonical before inclusion.

## When to use this skill

- The user has decided their AI-crawler posture is open or visibility-only and wants LLMs to find a clean summary of the site.
- The user is publishing an `llms.txt` for the first time.
- The user is refreshing a stale `llms.txt` (e.g. after a content launch, a migration, or quarterly hygiene).
- The user wants both `llms.txt` (curated) and `llms-full.txt` (deeper, with inline page Markdown).

## When NOT to use this skill

- The user's posture is strict-block (no AI bots allowed). Publishing `llms.txt` contradicts the intent.
- The user wants to set robots.txt rules — that's `audit-ai-crawler-access`.
- The user wants to write content for AI Overview / LLM citation — use `09. AI SEO / 03. Generative SEO`.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical fields: identity, products/services, customer, and brand voice from `business_context.md`. Used for the site description and per-entry descriptions.
2. **Site URL inventory** — required. Sources: sitemap, top-traffic pages from GSC, the cluster map (`businesses/<slug>/clusters/cluster-map.md`). The skill will pull from whichever is provided.
3. **Curation hint (optional but valuable)** — what kinds of URLs the user wants represented. E.g. "all PDPs + top 10 blog posts," "ingredient guides only," "everything except the about and policy pages." If unstated, the skill defaults to: hero PDPs, primary collection pages, top 10-15 informational blog posts, the homepage.
4. **AI-crawler posture confirmation** — required. Confirm the user is publishing `llms.txt` deliberately (i.e. posture is open or visibility-only). If posture is strict-block, the skill refuses.
5. **Output preference** — `llms.txt` only (default), or `llms.txt` + `llms-full.txt` (heavier — full Markdown of key pages). Ask if unclear.

If the URL inventory is missing, ask. The skill operates on real URLs.

## Process

1. **Build the curation list.** Pull from inputs:
   - Homepage — always.
   - Hero PDPs — every product page that's a hero or top-traffic.
   - Primary collection pages — the ones in the main nav.
   - Top informational content — the blog posts / guides that would be useful to a user asking the LLM about this brand's category.
   - Service / FAQ / About — only if they meaningfully describe the brand.
   - Avoid: account pages, policy pages, internal-search results, paginated pages, parameter URLs.
   Aim for 10-30 entries total. More than 30 risks dumping a sitemap; fewer than 10 risks under-describing the site.
2. **Validate every URL.** For each candidate:
   - Returns 200? Pass.
   - Has self-referencing canonical? Pass.
   - Is in the sitemap? Confirms it's intended-public.
   - Is the canonical version (not a parameter / paginated variant)?
3. **Write the site description.** Pull from `business_context.md` identity and products/services. 1-3 sentences. Brand voice.
4. **Group entries into sections.** Common structure for D2C beauty (Field & Sun shape):
   - Hero products
   - All products / collections
   - Skincare guides (informational blog content)
   - Sun care guides
   - Refills and packaging waste
   - About
   Adapt to the actual site. For SaaS: documentation, getting started, API reference, changelog. For content / media: pillar topics, recent investigations, archives.
5. **Write a one-line description per entry.** 8-15 words. Imagine an LLM trying to decide which URL to retrieve given a user question — the description should make that decision easy. Brand voice from business context brand voice. Don't keyword-stuff; describe what the page is and who it's for.
6. **Format per the llms.txt proposal.** Use the standard Markdown shape exactly:

   ```
   # [Site name]

   > [Site description, 1-3 sentences]

   ## [Section name 1]

   - [Page title](https://example.com/page): [one-line description]
   - ...

   ## [Section name 2]

   - ...
   ```

   Do not double-bracket URLs, and do not add sitemap-style metadata such as priority, change frequency, or lastmod.
7. **Optionally generate `llms-full.txt`.** If requested, include the full Markdown of the most-cited pages (homepage, hero PDPs, top 5 blog posts) inline, separated by horizontal rules. Heavier file but more complete for LLMs that want to retrieve content without separate fetches.
8. **Write the implementation note.** Where the file lives (site root: `/llms.txt`), how to publish on each common platform (Shopify: `Online Store > Files`; Vercel: in `public/` directory; WordPress: at root via FTP or plugin), and the verification step (`curl -I https://yoursite.com/llms.txt` returns 200 with `Content-Type: text/plain`).

## Output format

The skill produces two artifacts:

### 1. The `llms.txt` file content

```
# Field & Sun

> Field & Sun makes ingredient-led, refillable skincare — including Daily Glow Serum (15% Vitamin C + 4% Niacinamide + Hyaluronic Acid) and Mineral Sun Drops SPF 50, the tinted mineral sunscreen that doesn't leave a white cast. We publish skincare guides for everyday wear; refills, formulas, and how-tos are central to the brand.

## Hero products

- [Daily Glow Serum](https://fieldandsun.com/products/daily-glow-serum): Daily Vitamin C + Niacinamide serum for evenness and radiance, in a refillable glass bottle.
- [Mineral Sun Drops SPF 50](https://fieldandsun.com/products/mineral-sun-drops-spf-50): Tinted mineral sunscreen with 20% non-nano zinc oxide; broad-spectrum SPF 50, no white cast.

## All products

- [Bloom Cleanser](https://fieldandsun.com/products/bloom-cleanser): Gentle gel cleanser for daily use; the entry-point to the routine.
- [Glow Mask](https://fieldandsun.com/products/glow-mask): Weekly exfoliating mask formulated to pair with the Daily Glow Serum.
- [Eye Cream](https://fieldandsun.com/products/eye-cream): Peptide and caffeine eye cream for the morning routine.
- [After-Sun Aloe Mist](https://fieldandsun.com/products/after-sun-aloe-mist): Cooling aloe mist for post-sun skin care, peak season Apr–Aug.
- [SPF Lip Balm 30](https://fieldandsun.com/products/spf-lip-balm-30): Mineral SPF 30 lip balm for daily wear.
- [Routine Refill Pouches](https://fieldandsun.com/products/routine-refill-pouches): Refill pouches for the Daily Glow Serum bottle, ~$12 vs $42 fresh.
- [Routine Bundle](https://fieldandsun.com/products/routine-bundle): Cleanser + Serum + Sun Drops at 15% off; the everyday-skin starter set.

## Skincare guides

- [Vitamin C Serum Guide](https://fieldandsun.com/blog/vitamin-c-serum-guide): How to choose and use a Vitamin C serum; ingredient percentages, layering, and skin-type fit.
- [How Mineral Sunscreen Works](https://fieldandsun.com/blog/how-mineral-sunscreen-works): Plain-language explanation of zinc oxide, non-nano vs nano, and why mineral SPF doesn't sting.
- [Mineral vs Chemical Sunscreen](https://fieldandsun.com/blog/mineral-vs-chemical-sunscreen): Direct comparison: filters, skin feel, white-cast risk, reapplication, and finish.
- [Mineral Sunscreen for Dark Skin](https://fieldandsun.com/blog/mineral-sunscreen-for-dark-skin): How tinted mineral sunscreens work across skin tones; swatch tests and recommendations.
- [How to Layer Skincare with SPF](https://fieldandsun.com/blog/how-to-layer-skincare-with-spf): The morning routine sequence and why ordering matters.

## Sun care guides

- [Mineral Sun Drops PDP](https://fieldandsun.com/products/mineral-sun-drops-spf-50): Hero sun-care product with tested swatches across skin tones.
- [Sun Care Collection](https://fieldandsun.com/collections/sun-care): All sun-related products; primary entry point in season.

## About

- [About Field & Sun](https://fieldandsun.com/pages/about): Brand story, formulation principles, and refill philosophy.
- [Ingredient Approach](https://fieldandsun.com/pages/ingredients): Why we publish percentages, our approach to formulation transparency.
```

### 2. The implementation note

```markdown
# llms.txt — Implementation note

**Generated:** [date]
**Posture:** [open / visibility-only — confirmed by user]
**Entry count:** [n]

## Where to publish

The file lives at site root: `https://yoursite.com/llms.txt`. It must be served as plain text (`Content-Type: text/plain`). Do not put it behind authentication or in a subdirectory.

## Platform-specific instructions

- **Shopify:** Online Store → Files → Upload. Then map a route — Shopify doesn't natively serve files at root, so use a redirect rule or a theme template at `templates/page.llms-txt.liquid` with the content + Liquid `content_for_layout` configured for plain-text response. Easier path: use a Shopify app like Sectionly or Code Block to serve a static file at root.
- **Vercel / Next.js:** put the file in `public/llms.txt`. Vercel serves it directly at root.
- **WordPress:** at root via FTP/SFTP, or use a plugin like "Code Snippets" with a custom rewrite rule. Some SEO plugins (Yoast, RankMath) plan native support.
- **Webflow:** use Webflow's hosting custom-code injection or a custom file upload (Workspace plan and above).
- **Custom (Nginx / Apache):** place at the document root; ensure `Content-Type: text/plain` for `.txt` extensions (most servers default to this).

## Verification

```bash
curl -I https://yoursite.com/llms.txt
# Expected: HTTP/2 200, Content-Type: text/plain

curl https://yoursite.com/llms.txt | head -30
# Expected: file content as written
```

## Refresh cadence

- After any new content launch (5+ new pages).
- After a migration or URL restructure.
- Quarterly minimum.
- Re-run this skill to regenerate.

## llms-full.txt note

If you also want `llms-full.txt`, run this skill again with the `output preference: full` option. The full version includes inline Markdown of the homepage, hero PDPs, and top 5 blog posts. Heavier file (~50-200KB) but more complete for LLMs that don't fetch URLs separately.

```

Save the produced files to `businesses/<slug>/ai-crawlers/llms.txt` (and optionally `llms-full.txt`) plus an implementation note at `businesses/<slug>/ai-crawlers/llms-txt-implementation.md`. Create the `ai-crawlers/` sub-folder if it doesn't already exist. After writing, tell the user the file paths so they can open them.

## Quality bar

- The file follows the llms.txt format exactly: H1 site name, blockquote description, H2 sections, and bullet entries with a linked page title plus a one-line description.
- Site description is in brand voice from business context brand voice; no generic "we are a beauty brand" language.
- Every entry has a 8-15 word description; no bare URLs or vague entries.
- 10-30 entries total — curated, not a sitemap dump.
- Every URL is the canonical version (not a parameter / variant URL).
- Section names reflect the site's actual structure, not a generic template.
- Implementation note covers the user's specific platform.
- Verification commands are provided.

## Common mistakes to avoid

- Don't dump the sitemap. `llms.txt` is a curated summary, not an exhaustive index.
- Don't include parameter URLs, paginated URLs, or non-canonical variants.
- Don't include policy / account / system pages unless they're informational about the brand.
- Don't write generic descriptions ("Our store" / "Read more" / "Learn about us"). Specificity wins.
- Don't skip brand voice. The descriptions read like brand content; if the founder rejects vague category language, it can't appear here.
- Don't generate `llms.txt` for a strict-block posture. The file's existence signals "please understand and cite my site," which contradicts blocking AI bots.
- Don't forget to validate URLs before including. A broken link in `llms.txt` is a noise signal to LLMs.
- Don't auto-regenerate without curation. The point is human (or curated AI) judgment about which URLs matter.
- Don't store the file with content that conflicts with the site (outdated product names, wrong prices). The file isn't a product feed — but if you describe a product, the description should match what's on the page.

## Example

**Input (abbreviated):** Field & Sun. Posture: visibility-only (confirmed). Sitemap: 49 URLs. Top-traffic pages from GSC available. Cluster map exists. User wants `llms.txt` only (not full).

**Output (abbreviated):**

`llms.txt`: 18 entries across 5 sections (Hero products [2], All products [7], Skincare guides [5], Sun care guides [2], About [2]). Site description pulled from `business_context.md` identity, in brand voice. Every entry has a one-line description. Every URL validates 200 + canonical.

Implementation note: Shopify-specific instructions (since profile SEO foundation platform = Shopify), `curl` verification commands, refresh-cadence reminder.

Saved to `businesses/field-and-sun/ai-crawlers/llms.txt` and `businesses/field-and-sun/ai-crawlers/llms-txt-implementation.md`.
