---
name: audit-images
description: Audits alt text, file names, compression, and lazy loading across a page set. Use to fix image SEO issues or when accessibility or page-speed improvements are the goal.
---

# Audit Images

This skill takes one page (or a batch) and produces a structured image audit. The output is a per-image scorecard plus a rewritten alt-text + file-name recommendation, with explicit flags for LCP image (must NOT be lazy-loaded), format conversions, and dimension fixes.

The audit is opinionated about a few things: every non-decorative image gets unique, descriptive alt text; the LCP image is identified and protected; file names are kebab-case keyword-aware; and the recommendations include implementation specifics (CMS-level vs per-image).

## When to use this skill

- The user asks to audit images on a page or fix alt text.
- A page is failing Core Web Vitals (specifically LCP) and image weight is suspected.
- The user is doing on-page SEO at scale on top product or collection pages.
- The user wants to earn Google Image Search traffic on visual products.
- The user is preparing for accessibility (ADA, EAA) compliance.

## When NOT to use this skill

- The user wants to optimise page content / copy / headers — separate skills (`optimize-page-content`, `audit-header-structure`).
- The user wants to fix general site-speed issues beyond images — that's broader Technical SEO work.
- The user wants to generate alt text for one image without context — recommend running the full page audit instead; alt text is only good when written with the page's purpose in mind.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical fields: products/services, customer, and brand voice from `business_context.md`. Voice affects alt-text phrasing.
2. **Page(s) to audit** — URL plus the image inventory. The image inventory needs, per image: file name (URL of the image asset), current alt text, current dimensions (intrinsic and display), file size, format (jpg/png/webp/avif), and lazy-loading status. The user can pull this from DevTools (Network + Inspector) or from a Screaming Frog crawl ("Images" report).
3. **LCP identification** — if the user has run a page-speed test (PageSpeed Insights, Lighthouse, WebPageTest), they should know which image is the LCP. If not, ask which image appears first / largest above the fold and note that the LCP designation is provisional until verified.
4. **Cluster / page intent** — read `businesses/<slug>/clusters/cluster-map.md` if available. The cluster's primary keyword affects file-name and (lightly) alt-text vocabulary.

If the image inventory is missing, ask. The audit operates on real images, not on inferred ones.

## Process

For each image on the page:

1. **Score on six dimensions:**
   - **Alt text quality** — present? Unique vs other images on page? Descriptive (not stuffed)? Pass/partial/fail.
   - **File name** — descriptive kebab-case? Or `IMG_2381.jpg`? Pass/fail.
   - **Format** — modern (WebP/AVIF)? Or legacy (JPG/PNG photo)? Pass/upgrade-recommended/fail.
   - **Compression / dimensions** — file size reasonable for displayed dimensions? Or oversize? Pass/fail with measured ratio.
   - **Responsive serving** — has `srcset` and `sizes` attributes? Pass/partial/fail.
   - **Lazy-loading** — `loading="lazy"` present? Correctly excluded from LCP image? Pass/fail.
2. **Identify the LCP image.** Mark it explicitly. Flag it as "do NOT lazy-load." If currently lazy-loaded, this is a P0 fix.
3. **Identify decorative-only images.** Spacers, dividers, background-position icons. These should have `alt=""` (empty), not omitted, and don't need descriptive alt text. Mark them explicitly so the user doesn't waste time writing alt for them.
4. **Generate alt text rewrites.** For each non-decorative image:
   - Describe what's in the image, in plain language.
   - 8-15 words is the typical sweet spot.
   - Include relevant context (e.g. "in a washing machine drum," "on a white background") that helps both Google and screen-reader users.
   - Don't stuff keywords. The primary keyword may appear naturally in 1-2 alt texts on the page; don't repeat across all 8.
   - Match brand voice (warm-conversational vs clinical-expert).
5. **Generate file-name rewrites.** Kebab-case, descriptive, optionally include the page's primary keyword in 30-50% of files (not all). Examples: `mineral-sun-drops-spf-50-bottle.webp`, `mineral-sun-drops-on-skin.webp`.
6. **Recommend format / compression / dimensions.** Specific actions per image:
   - Convert to WebP if currently JPEG/PNG photo.
   - Compress to ~75% quality target.
   - Resize to display-appropriate intrinsic dimensions (often 2× the display size for retina).
   - Add `srcset` with mobile/tablet/desktop variants.
7. **Recommend lazy-loading.** Add `loading="lazy"` to all images except the LCP candidate.
8. **Group recommendations.** Some are per-image (alt text, file name); some are CMS-level (default format, compression quality, lazy-loading template). Surface the CMS-level fixes first because they cascade across all pages.

## Output format

```markdown
# Image Audit — [Page name]

**URL:** [URL]
**Page type:** [PDP / collection / blog / etc.]
**Target cluster:** [primary keyword] (if available)
**Images on page:** [n]
**Audit date:** [date]

## Summary

| Dimension | Pass | Partial | Fail |
|-----------|-----:|--------:|-----:|
| Alt text | ... | ... | ... |
| File name | ... | ... | ... |
| Format | ... | ... | ... |
| Compression / dimensions | ... | ... | ... |
| Responsive serving | ... | ... | ... |
| Lazy-loading | ... | ... | ... |

**LCP image:** [filename / URL] — [currently lazy-loaded? yes/no]

Brief 2-4 sentence read on the shape of the audit and the highest-leverage fixes.

## CMS-level recommendations (fix once, applies sitewide)

- [Recommendation, e.g. "Enable WebP conversion in Shopify image settings — affects all images sitewide."]
- [Recommendation, e.g. "Update product-page template to add `loading='lazy'` to all images except the first."]
- ...

## Per-image audit

### Image 1 — [filename]
- **Display:** [X x Y px on page]
- **Intrinsic:** [X x Y px source]
- **File size:** [N KB]
- **Format:** [jpg/png/webp/avif]
- **Current alt:** "[current alt or '(empty)']"
- **Current file name:** [filename]
- **Lazy-loading:** [yes/no]
- **LCP:** [yes/no]
- **Decorative:** [yes/no]

**Scores:**
- Alt text: [pass/partial/fail] — [why]
- File name: [pass/fail] — [why]
- Format: [pass/upgrade/fail] — [why]
- Compression / dimensions: [pass/fail] — [why; cite the ratio if oversize]
- Responsive serving: [pass/partial/fail]
- Lazy-loading: [pass/fail] — [why]

**Recommended changes:**
- New alt text: "[suggested]"
- New file name: `[suggested].webp`
- Format: convert to [WebP/AVIF]
- Compression: [target quality]
- Dimensions: resize to [X x Y] + `srcset` for mobile/desktop
- Lazy-loading: [add `loading="lazy"` / KEEP eager — this is the LCP image]

### Image 2 — ...

(Repeat for each image.)

## Implementation checklist
- [ ] Apply CMS-level changes first (format, default compression, template lazy-loading rule)
- [ ] Per-image: update alt text in CMS for all non-decorative images
- [ ] Per-image: re-upload images with new file names + WebP format
- [ ] Verify LCP image is NOT lazy-loaded (DevTools Network panel)
- [ ] Re-run PageSpeed Insights / Core Web Vitals; expect mobile LCP improvement
- [ ] Submit URL to GSC for re-indexing
- [ ] Monitor image-search traffic in GSC Performance > Image filter for 30-60 days
```

For batch runs, lead with a per-page summary table; per-image detail follows in collapsible sections (or a single appendix file).

Save the produced file to `businesses/<slug>/images/<page-slug>.md`. Create the `images/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every image on the page has a row.
- LCP image is explicitly identified and flagged not-to-lazy-load (or the audit calls out that LCP couldn't be determined and asks the user to verify).
- Alt text suggestions are unique per image — no copy-paste across the page.
- Decorative images are marked and given `alt=""` recommendation, not descriptive alt.
- File-name suggestions are kebab-case and topically relevant.
- CMS-level recommendations are surfaced first so users get the cascading fix before per-image work.
- Implementation checklist closes with re-indexing and image-search monitoring.

## Common mistakes to avoid

- Don't generate the same alt text for multiple images on the same page. Variation is the point.
- Don't keyword-stuff alt text. Describe the image first; if the keyword fits naturally, fine.
- Don't recommend lazy-loading the LCP image. This is a load-bearing exclusion. If the user disagrees, push back.
- Don't ignore decorative images. Empty `alt=""` is a deliberate choice; omitting the attribute is an accessibility failure.
- Don't recommend WebP/AVIF without confirming the CMS supports it. Most modern CMSs (Shopify, WordPress, Webflow) do, but some custom stacks don't.
- Don't recommend dimensions smaller than 2× the display size on retina-aware brands. Crisp product photos matter for D2C trust.
- Don't audit a page without the image inventory data. Speculation is worse than no audit.
- Don't compress every image to the same quality target without reading the use case. Hero / lifestyle images sometimes warrant a higher quality target than thumbnails.

## Example

**Input (abbreviated):** Page = `/products/mineral-sun-drops-spf-50`. 8 images. Hero (LCP) is `IMG_2381.jpg` (2400×2400, 410KB JPEG, alt="Mineral Sun Drops", currently NOT lazy-loaded — correct). Other 7 images are JPEGs at 2400×2400, 380-450KB each, all alt="Mineral Sun Drops", all eager-loaded.

**Output (abbreviated):**

Summary: alt text 0/8 pass; file name 0/8 pass; format 0/8 pass (all JPEG); compression/dimensions 0/8 pass (all 4× the display size); responsive serving 0/8; lazy-loading 1/8 (the eager-loaded LCP is correct, but the other 7 should be lazy and aren't).

LCP image: `IMG_2381.jpg` — currently eager (correct). Keep eager.

CMS-level recommendations: enable Shopify's auto-WebP conversion; update PDP template to add `loading="lazy"` to all images except the first.

Per-image:

- Image 1 (LCP, hero): rename to `mineral-sun-drops-spf-50-hero.webp`, new alt "30ml glass bottle of Mineral Sun Drops SPF 50 with a dropper, on a soft beige background," resize to 1200×1200 + `srcset`, KEEP eager-loaded.
- Image 2 (lifestyle): rename to `mineral-sun-drops-blended-on-hand.webp`, new alt "Two drops of tinted mineral sunscreen blended into the back of a hand," lazy-load.
- Image 3 (swatch): rename to `mineral-sun-drops-three-skin-tones.webp`, new alt "Mineral Sun Drops SPF 50 swatched on three skin tones — light, medium, deep — showing no white cast," lazy-load.
- … etc for remaining 5 images, each with unique alt text describing what's actually in the photo.

Implementation checklist included. Saved to `businesses/field-and-sun/images/mineral-sun-drops-spf-50.md`.
