---
name: audit-javascript-seo
description: Analyses a page for JavaScript rendering risks — compares source HTML against the rendered DOM, identifies SEO-critical content that's only available after JS executes, audits internal links for real `<a href>` anchors vs onClick handlers, flags JS-based redirects, and surfaces JS-injected widget content (reviews, FAQs, chat) that won't reliably index. Produces a prioritised remediation list with specific fixes per finding. Use whenever the user asks to "audit JavaScript SEO," "check if Google can render our pages," "investigate why content isn't indexing on our React/Next.js site," "we have a headless storefront and want to validate SEO," or shares a JS-heavy site URL. Also use when GSC reports "Crawled – currently not indexed" on a JS-heavy site, when FAQPage schema isn't earning rich results despite being present, or when a brand is migrating to a headless front-end. Do not use for pure-Liquid Shopify sites, default WordPress themes, or other server-rendered stacks where JS is decorative — the audit doesn't earn its time there.
---

# Audit JavaScript SEO

This skill takes a page (or small batch) and a comparison of source HTML vs rendered DOM, then produces a structured JS-SEO audit. The output: which SEO-critical content is missing from source, which internal links don't have real anchors, which redirects are JavaScript-based, and which third-party widgets create rendering risk. Every finding has a specific fix.

The skill is opinionated about a few things: SEO-critical content (H1, main copy, primary internal links, schema markup) must be in source HTML, not JS-injected; internal links must be real `<a href>` anchors; redirects must be HTTP, not JS; third-party widgets that inject content are a watch-list, not a deal-breaker.

## When to use this skill

- The user has a JS-heavy site (Next.js, Hydrogen, React, Vue, custom SPA) and wants to validate SEO.
- GSC reports rising "Crawled – currently not indexed" on a JS-heavy site.
- FAQPage / Product / Review schema isn't earning rich results despite being technically present.
- The user is migrating to a headless front-end and wants to confirm SEO before launch.
- After a framework upgrade (Next.js major version, React major version) where rendering behaviour can regress.

## When NOT to use this skill

- The site is on Shopify default theme, WordPress with a default theme, Webflow, or another server-rendered stack. The audit won't surface meaningful findings.
- The user wants to fix Core Web Vitals — use `audit-core-web-vitals`. (JS rendering issues sometimes cause INP failures; if so, the speed audit will surface them.)
- The user wants to debug one specific GSC indexing reason — use `audit-indexing-status`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: CMS / platform (5). If the platform is server-rendered (Shopify default, WordPress default), confirm with the user that the audit is still warranted — usually it isn't.
2. **Page URL** — required. Single URL (or small batch).
3. **Source HTML** — required. The user pulls this with right-click → "View Page Source" in the browser, or `curl -A "Googlebot" <url>` from a terminal. Paste the output (or the head + body skeleton if the full HTML is too long).
4. **Rendered DOM** — required. The user pulls this from Chrome DevTools → Elements panel (right-click → "Edit as HTML" on the `<html>` element, or copy from the Elements tree). Alternatively, use GSC URL Inspection → "Test live URL" → "View tested page" → HTML — that's the version Googlebot's actually using.
5. **Framework / rendering mode (if known)** — Next.js with SSG/SSR/ISR, Remix, Hydrogen, Nuxt, pure React SPA, custom Vue, etc. Affects which fixes apply.
6. **Specific concerns (optional)** — e.g. "FAQ schema isn't working," "we just migrated and lost rankings," "reviews don't show up in cached version." Sharpens the audit's focus.

If source HTML or rendered DOM is missing, ask. The audit is a comparison, not a guess.

## Process

For each page:

1. **Compare source HTML against rendered DOM.** Look for:
   - **`<title>`** — should be identical in both. Flag if different.
   - **`<h1>`** — should be in source. Flag if only in rendered DOM.
   - **Primary body copy** — first 1-2 paragraphs of main content should be in source. Flag if only rendered.
   - **Internal navigation links** — primary nav, breadcrumbs, related-content links. Flag if `<a href>` is missing in source.
   - **Schema markup `<script type="application/ld+json">`** — should be in source. Flag if only in rendered.
   - **Meta tags** (description, robots, canonical, og:*/ twitter:* tags) — should be in source.
2. **Audit internal links.** Walk the rendered DOM (or source if internal links are server-rendered). For each link:
   - Is it a real `<a href="/url">` anchor? Pass.
   - Is it a `<div>` / `<span>` / `<button>` with an `onClick` handler that programmatically navigates? Fail.
   - Is it a Next.js `<Link>` / similar framework component? Validate by viewing the rendered output — most modern frameworks do produce real `<a href>` underneath. Pass if confirmed.
3. **Audit redirects.** Pull the page with `curl -I -L <url>`. If the page hits a 301/302 in HTTP, that's correct. If the user navigates and the URL changes via `window.location` JS code, that's a JS redirect. Flag.
4. **Catalogue JS-injected content.** Anything in the rendered DOM that's NOT in source is JS-injected. Categorise:
   - **SEO-critical (must be in source):** H1, main body copy, primary internal links, schema markup, FAQ content if FAQPage schema is in use.
   - **SEO-relevant but tolerable (with caveats):** product reviews, related products, secondary content. JS-inject is OK; expect 14-day-plus delay before this content reflects in SERPs.
   - **Not SEO-relevant:** chat widgets, A/B-test variants, personalised modules, analytics. JS-inject is fine.
5. **Cross-reference with GSC URL Inspection (if available).** If the user has the "tested page" HTML from URL Inspection, compare it against the page's source AND the user's rendered DOM. The tested-page HTML is what Googlebot actually saw — discrepancies between rendered DOM and tested page reveal first-vs-second-wave indexing gaps.
6. **Diagnose and prioritise:**
   - **P0**: SEO-critical content missing from source HTML (H1, main copy, schema).
   - **P0**: Primary internal links are not real `<a href>` anchors.
   - **P0**: JS redirects on indexed URLs.
   - **P1**: SEO-relevant content (reviews, FAQ) is JS-injected when an SSR/SSG path exists.
   - **P2**: Tolerable JS-injected content where the user accepts the delay.
7. **Write the remediation list** with specific framework-aware fixes (e.g. "move FAQ data fetch from `useEffect` to `getStaticProps` in Next.js" rather than "make this server-rendered").

## Output format

```markdown
# JavaScript SEO Audit — [Page name]

**URL:** [URL]
**Framework / rendering mode:** [Next.js SSG / Hydrogen / React SPA / etc.]
**Audit date:** [date]

## Summary
**Status:** [Pass / Concerns / Fail]

Brief 2-3 sentence read on the rendering posture of the page.

## Source HTML vs rendered DOM gap

| SEO-critical element | In source HTML? | In rendered DOM? | Risk |
|----------------------|:---------------:|:----------------:|------|
| `<title>` | yes | yes | — |
| `<meta description>` | yes | yes | — |
| `<h1>` | [yes/no] | yes | [P0 if no] |
| Primary body copy | [yes/no] | yes | [P0 if no] |
| Schema markup (Product/FAQPage/etc.) | [yes/no] | [yes/no] | [P0 if missing from source] |
| `rel=canonical` | yes | yes | — |
| Primary nav links | [yes/no] | yes | [P0 if no] |

## JS-injected content inventory

| Element | Source / rendered | SEO-critical? | Recommendation |
|---------|------------------|:-------------:|----------------|
| FAQ accordion | rendered only | yes (FAQPage schema lives here) | Move to SSR/SSG |
| Yotpo reviews widget | rendered only | tolerable | Accept second-wave indexing delay |
| Gorgias chat | rendered only | no | No action |

## Internal-link audit

- Total internal links: [n]
- Real `<a href>` anchors: [n] ([%]%)
- onClick / programmatic navigation only: [n]

If any non-anchor links found:
| Element | Location | Recommendation |
|---------|----------|----------------|
| ... | ... | ... |

## Redirect audit

- Redirects observed: [HTTP / JS]
- Recommendation if any are JS-based.

## Diagnoses

### P0 — Critical findings
- [Finding] — [why P0] — [specific fix with framework reference]

### P1 — High
- ...

### P2 — Hygiene
- ...

## Remediation list

| # | Fix | Target | Framework-specific guidance | Effort | Verification |
|---|-----|--------|------------------------------|--------|--------------|
| 1 | Move FAQ content to server render | Source HTML includes FAQ before hydration | Next.js: switch from `useEffect` fetch to `getStaticProps` | Medium | View Source confirms FAQ in HTML; Rich Results Test confirms FAQPage eligibility |
| ... |

## Implementation checklist
- [ ] Implement P0 fixes first.
- [ ] Re-pull source HTML for affected pages and confirm SEO-critical content is now in source.
- [ ] Run GSC URL Inspection on representative pages to confirm Googlebot's rendered version matches.
- [ ] Submit URLs for re-indexing.
- [ ] Monitor GSC "Crawled – currently not indexed" bucket for 30-60 days; expect decrease.
- [ ] Schedule next audit on framework / theme upgrade.

## Risks and watchouts
3-5 specific watchouts: e.g. "the team's React patterns favour client-side data fetching — moving to SSR/SSG requires a broader pattern conversation, not just one page"; "Yotpo's review widget can't be SSR'd without their headless integration ($$); accept the indexing delay for now"; "if framework upgrades change rendering behaviour, re-audit before promoting to production."
```

Save the produced file to `businesses/<slug>/javascript-seo/<page-slug>.md`. Create the `javascript-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- The source-vs-rendered comparison is grounded in the actual HTML the user provided, not assumed.
- Every JS-injected element is categorised SEO-critical / tolerable / not relevant.
- Internal-link audit gives both a count and per-finding detail.
- Recommendations are framework-aware (Next.js fixes mention `getStaticProps`; React Router fixes mention loaders, etc.).
- Effort estimates are explicit (Low / Medium / High).
- Verification steps are concrete (View Source, GSC URL Inspection, Rich Results Test).
- The skill doesn't produce findings if no JS-rendering risk exists. A clean Shopify-default-theme page returns "no concerns; SEO-critical content is server-rendered."

## Common mistakes to avoid

- Don't audit a server-rendered platform without first confirming with the user. Wasted time.
- Don't fail an internal link just because it's a Next.js `<Link>`. Modern frameworks usually emit real `<a href>` underneath; verify in the rendered output before flagging.
- Don't recommend "make everything SSR" as a blanket fix. Most stacks have hybrid options that preserve interactivity for non-SEO-critical components.
- Don't ignore the GSC URL Inspection rendered view if it's available — it's the authoritative ground truth.
- Don't conflate Core Web Vitals with JS-SEO rendering. They're related but separate audits.
- Don't recommend Dynamic Rendering. Google deprecated that guidance.
- Don't audit without the actual HTML / DOM. Speculation based on framework alone produces false positives.

## Example

**Input (abbreviated):** A hypothetical brand on Next.js + Shopify Storefront API. PDP at `/products/example-product`. Source HTML pulled via `curl`: contains `<title>`, `<meta description>`, `<h1>`, product description, breadcrumb anchors, Product schema. Rendered DOM additionally contains: Yotpo reviews section, FAQ accordion (3 questions), "Recommended products" carousel. GSC URL Inspection's tested page shows: review section rendered (Yotpo), FAQ section blank (the API call to fetch FAQs failed during render).

**Output (abbreviated):**

Status: Concerns. Source covers core SEO-critical content; FAQ section is JS-injected AND failing to render in Googlebot's view, breaking FAQPage schema eligibility.

Source vs rendered: title/H1/description/canonical all in source ✓. Product schema in source ✓. FAQPage schema in source BUT the actual FAQ Q&A pairs are JS-rendered after a fetch — ✗. Internal links all real `<a href>` ✓. Reviews are JS-rendered (tolerable, accept delay).

JS-injected inventory:

- FAQ accordion: SEO-critical (schema depends on it). Recommendation: move from `useEffect` to `getStaticProps`. Medium effort.
- Yotpo reviews: tolerable. Recommendation: accept second-wave delay.
- Recommended products: not SEO-critical. No action.

Internal links: 24 / 24 are real anchors ✓.

Redirects: HTTP, no JS redirects observed ✓.

P0: FAQ content not in source HTML; FAQPage schema can't validate against the missing content. Move to `getStaticProps`.
P1: Reviews JS-injected — accept delay, but track via GSC for visibility.
P2: None.

Implementation: 1 P0 fix at medium effort. Verification via View Source + Rich Results Test post-deploy.

Saved to `businesses/<slug>/javascript-seo/example-product.md`.
