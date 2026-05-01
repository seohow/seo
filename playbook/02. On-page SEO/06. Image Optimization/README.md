# Image Optimization

> Alt text, file names, formats, dimensions, lazy-loading. Affects accessibility, page speed, and image-search traffic — all from work on assets that already exist on every page.

## What it is

Image optimization is the discipline of making the images on a page work for SEO, accessibility, and performance. It covers six elements:

- **Alt text** — the `alt` attribute that describes the image. Read by screen readers and indexed by Google.
- **File names** — descriptive, keyword-aware file names instead of `IMG_2381.jpg`.
- **Format** — modern formats (WebP, AVIF) over legacy ones (JPEG, PNG) for size/quality trade-offs.
- **Dimensions and compression** — sizing images appropriately and compressing them so they load fast.
- **Responsive serving** — `srcset` and `sizes` attributes so different devices get appropriate image sizes.
- **Lazy-loading** — deferring off-screen image loads until the user scrolls to them.

For a D2C ecommerce brand, images are the heaviest asset on most pages — a typical product page is 60-80% image weight. Getting image optimization right is one of the biggest single levers for Core Web Vitals (specifically LCP, the Largest Contentful Paint metric) and one of the easiest wins for accessibility.

## Why it matters

Three reasons. First, **page speed is a ranking factor**. Slow pages rank worse, especially on mobile. Image-heavy pages without compression and lazy-loading routinely fail Core Web Vitals — and Core Web Vitals feed directly into Google's page-experience signal.

Second, **alt text earns image-search traffic and supports accessibility**. Google Image Search drives meaningful traffic on visual products (clothing, home goods, food) — alt text is the primary signal of what an image shows. Beyond SEO, alt text is required for screen-reader accessibility and is increasingly a legal requirement (ADA, EAA).

Third, **alt text is a topical signal for the page itself**. Google reads alt text as part of the page's content. A product page with empty alt text on every image is leaking topical signal; a product page with descriptive alt text reinforces what Google already knows from the title and copy.

For a D2C brand on Shopify or WooCommerce, the default alt-text behaviour is usually empty or auto-generated (often just the product title, on every image). A 30-minute manual pass on the top 20 product pages is a high-leverage win.

## Core concepts

- **Alt text rules** — describe what's in the image, in plain language. Be specific. Don't keyword-stuff. If the image is purely decorative (a divider, a spacer), use an empty `alt=""` attribute (which signals "skip this" to screen readers) — never omit the attribute entirely.
- **File-name rules** — kebab-case, lowercase, descriptive, optionally including the primary keyword. `mineral-sun-drops-spf-50-tinted.jpg` beats `IMG_2381.jpg`.
- **Modern formats** — WebP is universally supported now; AVIF is supported in 90%+ of browsers and produces meaningfully smaller files. JPEG and PNG are legacy fallbacks.
- **Compression target** — most ecommerce images can be compressed to 60-80% of their original quality with no visible change. Tools like Squoosh, ImageOptim, or Shopify's built-in compression handle this automatically when configured.
- **Dimensions** — never serve a 4000×3000 image into a 600×400 display. Resize at upload, or use responsive serving (srcset).
- **LCP image** — the Largest Contentful Paint image is usually the page's hero or first product photo. It must NOT be lazy-loaded. Lazy-loading the LCP image is a common mistake that tanks Core Web Vitals.
- **Responsive `srcset`** — lets you provide multiple sizes of the same image and let the browser pick. Drastically reduces mobile data costs.
- **Lazy-loading** — `loading="lazy"` on `<img>` tags defers off-screen images. Native browser support is universal. Don't lazy-load the LCP image.

## A worked example

> **Scenario:** Field & Sun has 8 product pages. A page-speed audit shows mobile LCP is 4.8s on the Mineral Sun Drops PDP (failing — target is under 2.5s). Image weight is 3.2MB, all JPEG, all served at 2400×2400 even though display size is 600×600. Alt text on all 8 images on the page reads "Mineral Sun Drops" verbatim.
>
> **Step 1.** File-name audit. Source files are `IMG_2381.jpg`, `IMG_2382.jpg`, etc. Renamed to `mineral-sun-drops-spf-50-bottle.jpg`, `mineral-sun-drops-tinted-finish.jpg`, `mineral-sun-drops-on-skin.jpg`, etc.
>
> **Step 2.** Alt-text rewrite. Each image gets a unique, descriptive alt:
>
> - Hero: "30ml glass bottle of Mineral Sun Drops SPF 50 with a dropper, on a soft beige background"
> - Lifestyle: "Two drops of tinted mineral sunscreen blended into the back of a hand"
> - Swatch: "Mineral Sun Drops SPF 50 swatched on three skin tones — light, medium, deep — showing no white cast"
> - …etc. No keyword stuffing.
>
> **Step 3.** Format + compression. JPEGs converted to WebP. Compression to ~75% quality. Dimensions resized to 1200×1200 (still high-res for retina displays) and `srcset` added for mobile.
>
> **Step 4.** Lazy-loading. All non-hero images get `loading="lazy"`. Hero image (LCP) explicitly does NOT get the attribute.
>
> **Step 5.** Re-test. Mobile LCP now 2.1s (passing). Image weight dropped from 3.2MB to 480KB. Core Web Vitals pass. Bonus: page enters Google Image Search results for "tinted mineral sunscreen" within 14 days, surfaces in 4 image-search-positioned results within 30 days.

## How to do it

1. **Pick a page or batch.** Image optimization scales — work in batches of 10-30 pages, prioritising high-traffic / commercial pages.
2. **Audit current state.** For each page, check: image count, total weight, format mix, dimensions vs display size, alt-text quality, file-name quality, lazy-loading status, LCP image identification.
3. **Plan the actions.** Per-image: rename file, rewrite alt, convert format, compress, resize, add lazy-loading attribute (except LCP).
4. **Implement.** This is partly CMS work (Shopify-level settings for compression/format), partly per-image work (alt text, file names). Most CMSs let you bulk-edit alt text via API or CSV; one-off uploads require manual entry at upload time.
5. **Verify.** Re-run a page-speed audit (PageSpeed Insights or Core Web Vitals report in GSC). Verify LCP is under 2.5s on mobile. Verify lazy-loading is working (Network panel in DevTools).
6. **Monitor image-search traffic.** GSC's Performance report has an "Image" filter — track image-search clicks over 30-60 days post-optimization.
7. **Set forward-going standards.** Document the conventions (alt-text format, file-name format, format + size targets) so new images uploaded by anyone follow them.

## Common pitfalls

- **Empty or auto-generated alt text.** The most common mistake. Default Shopify alt is often the product title, repeated on every image — this tells Google nothing.
- **Keyword stuffing alt text.** "Tinted mineral sunscreen SPF 50 zinc oxide reef-safe vegan" — reads as spam to Google and to screen-reader users. Describe the image, naturally.
- **Lazy-loading the LCP image.** Tanks mobile LCP scores. The hero / first-fold image must not be lazy-loaded.
- **Ignoring format.** Serving 4MB JPEGs in 2026 is leaving Core Web Vitals points on the table. Convert to WebP or AVIF.
- **Serving full-resolution images everywhere.** A 4000×3000 image displayed at 600×400 on mobile wastes 90% of the bytes. Use responsive `srcset` or upload at appropriate dimensions.
- **Using PNG for photographs.** PNG is for graphics with sharp edges and few colours. JPEG/WebP/AVIF are for photographs.
- **Skipping alt text on "decorative" images and just omitting the attribute.** Empty attribute (`alt=""`) is correct for decorative; omitting entirely is an accessibility failure.
- **Optimising once and forgetting.** Every new image upload defaults to bad. Without forward-going standards, the audit's gains decay over months.

## Skills in this toolkit

- **[audit-images](skills/audit-images/SKILL.md)** — analyses a page's images on six dimensions (alt text, file names, format, compression/dimensions, responsive serving, lazy-loading), produces a per-image action list, and identifies the LCP image so it doesn't get lazy-loaded by mistake. Runs at single-page or batch scale.

## Related topics

- **[03. Technical SEO / 03. Site Speed](../../03.%20Technical%20SEO/03.%20Site%20Speed/)** — image optimization is the single largest lever for Core Web Vitals on most ecom sites.
- **[07. UX / 01. Page Speed UX](../../07.%20UX/01.%20Page%20Speed%20UX/)** — performance and the user-experience signal that flows from it.
- **[07. UX / 02. Mobile Optimization](../../07.%20UX/02.%20Mobile%20Optimization/)** — mobile-first means image optimization first.
- **[03. Technical SEO / 04. Schema Markup](../../03.%20Technical%20SEO/04.%20Schema%20Markup/)** — image-rich snippets (Product, Recipe) require structured data + optimized images.
- **[09. AI SEO / 04. SERP Features](../../09.%20AI%20SEO/04.%20SERP%20Features/)** — Google Image Search and image-rich results in AI Overviews.

## Further reading

- [Google Search Central — Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) — the canonical guidance, including file-name and alt-text recommendations.
- [Web.dev — Optimize Images](https://web.dev/articles/fast#optimize_your_images) — performance-first walkthrough; especially strong on format selection (WebP/AVIF).
- [W3C — Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) — accessibility-first guidance on when to use descriptive alt, empty alt, or omit.
- [Smashing Magazine — Comprehensive Guide to Lazy Loading](https://www.smashingmagazine.com/2022/03/complete-guide-image-lazy-loading-performance/) — covers the LCP-exclusion gotcha that catches most teams.
- [Cloudinary / Squoosh blog — Modern image formats](https://web.dev/articles/serve-images-webp) — WebP and AVIF format trade-offs, with measured comparisons.
