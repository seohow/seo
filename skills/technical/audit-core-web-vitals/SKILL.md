---
name: audit-core-web-vitals
description: Use to audit core web vitals; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Audit Core Web Vitals

This skill takes one page (or a small batch of priority pages), reads field + lab Core Web Vitals data from PageSpeed Insights, plus the page's image inventory and third-party-script list, and produces a structured speed audit. The output is a prioritised remediation list — what to fix first, what's a regression watch, what's safe to defer — with effort and expected metric movement per fix.

The skill is opinionated about a few things: trust field data (CrUX) over lab data for "is this a problem"; identify and protect the LCP element from lazy-loading; treat third-party scripts as the default cause of INP failures until proven otherwise; reserve space (don't remove animations) for CLS fixes.

## When to use this skill

- The user shares a PageSpeed Insights URL/screenshot and asks for a speed audit.
- GSC Core Web Vitals report shows failing URLs the user wants to fix.
- A theme update, app install, or migration has regressed page speed.
- The user has a mobile conversion gap and suspects speed is part of the cause.
- The user is doing on-page work and wants to confirm speed is in shape before shipping.

## When NOT to use this skill

- The user wants only image-level analysis — use `audit-images`. (This skill consumes its output.)
- The user wants to diagnose JavaScript-rendering gaps (Googlebot vs user view) — use `audit-javascript-seo`.
- The user wants site-wide speed strategy across hundreds of pages — recommend running this skill on the top 10-20 pages first; site-wide patterns will emerge.
- The user wants to fix server-side TTFB only — that's a hosting/CDN conversation, not really speed-audit territory.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), CMS / platform (5).
2. **Page URL(s)** — one URL or a list (5-10 max). For each, the user runs PageSpeed Insights at <https://pagespeed.web.dev/> and pastes/exports the result.
3. **PageSpeed Insights data** — required, both lab and field if available. Specifically: the four Core Web Vitals (LCP, INP, CLS) from field data, plus FCP and TTFB; and the lab-data Diagnostics section (LCP element, total blocking time, render-blocking resources, unused JS/CSS, image-related opportunities).
4. **Image inventory (optional but valuable)** — output of `audit-images` for the same page, OR a list of images with file size, format, and dimensions. If absent, the audit will recommend running `audit-images` as a follow-up.
5. **Third-party-script list (optional but valuable)** — list of scripts the page loads (chat widgets, review apps, analytics, A/B-test tools, ad pixels). The user can pull this from the Shopify theme's `<head>` injection list, the Network tab in DevTools, or a tool like Request Map Generator. If absent, the audit will flag third-party scripts as a likely cause of INP failures and ask for the list before recommending specific defers.
6. **Device priority** — default to mobile (Google's index is mobile-first). Ask if the user has a specific reason to focus on desktop.

If the PageSpeed Insights data is missing, ask. The audit operates on real metrics, not assumptions.

## Process

For each page:

1. **Read the field-data verdict.** Each Core Web Vital is "Good," "Needs Improvement," or "Poor." Tabulate against thresholds:
   - LCP: Good ≤ 2.5s, Poor > 4.0s
   - INP: Good ≤ 200ms, Poor > 500ms
   - CLS: Good ≤ 0.1, Poor > 0.25
   - TTFB: Good ≤ 800ms (informational, not Core Web Vital)
   - FCP: Good ≤ 1.8s (informational, not Core Web Vital)
   Note: if "Insufficient data," the page doesn't have enough real-user traffic. Use lab data as the proxy and flag this limitation.
2. **Read the lab-data diagnostics** (Lighthouse). Look for:
   - **LCP element** — explicitly named in the Diagnostics. Critical to identify.
   - **Render-blocking resources** — CSS / JS files blocking first paint.
   - **Total Blocking Time (TBT)** — proxy for INP; high TBT signals heavy main-thread work.
   - **Unused JavaScript / Unused CSS** — bytes loaded but not used; usually third-party.
   - **Image-related opportunities** — "Properly size images," "Serve images in next-gen formats," "Defer offscreen images," "Efficiently encode images."
3. **Diagnose by metric:**
   - **If LCP > 2.5s:** check (a) is the LCP image oversized / unoptimised? (b) is it lazy-loaded? (c) is there render-blocking CSS / fonts? (d) is TTFB bad (server-side issue)? Most common cause on ecom: oversized hero image.
   - **If INP > 200ms:** check (a) third-party scripts running on first interaction; (b) heavy JS event handlers (chat widgets, hover-reveal menus, A/B test tooling); (c) excessive React/Vue hydration on mount.
   - **If CLS > 0.1:** check (a) images without explicit dimensions; (b) fonts that swap mid-load (FOUT/FOIT); (c) ads or widgets injected after first paint with no reserved space; (d) sticky-banner promo bars.
4. **Identify the highest-impact fixes per metric.** For each diagnosed cause, estimate metric movement (e.g. "switching hero JPEG to WebP at 1200×1200: -1.8s LCP estimated"). Keep estimates conservative.
5. **Cross-reference with image audit if available.** If `audit-images` output exists for this page, pull the LCP image's status: is it already on the to-fix list? If yes, the speed fix and image fix are the same change; bundle them.
6. **Cross-reference with third-party-script list if available.** Categorise scripts: essential (analytics for measurement), user-facing (chat, reviews), background (heatmap, A/B test). Recommend deferring or async-loading the second and third categories.
7. **Score effort.** Per fix:
   - **Low** (≤ 1 hour) — image format conversion, image dimensions, adding `loading` / `fetchpriority` attributes, adding explicit image dimensions, `font-display` change.
   - **Medium** (2-8 hours) — third-party script defer / async / lazy-load, theme template adjustment, font subsetting, critical CSS extraction.
   - **High** (1+ days) — server-side TTFB work (CDN, caching, hosting tier), framework-level JS optimisation, removing/replacing a heavy app.
8. **Build the prioritised remediation list.** Order by impact / effort. Each row: fix, target metric, expected movement, effort, dependencies, owner.

## Output format

```markdown
# Core Web Vitals Audit — [Page name]

**URL:** [URL]
**Page type:** [PDP / collection / blog / homepage / etc.]
**Device priority:** mobile (default) / desktop
**Audit date:** [date]

## Field-data verdict (Google's ranking-relevant data)

| Metric | Value | Verdict | Threshold |
|--------|------:|--------:|----------:|
| LCP | ... | Good / NI / Poor | ≤ 2.5s |
| INP | ... | Good / NI / Poor | ≤ 200ms |
| CLS | ... | Good / NI / Poor | ≤ 0.1 |
| FCP | ... | Good / NI / — | ≤ 1.8s |
| TTFB | ... | Good / NI / — | ≤ 800ms |

**Overall:** [pass / fail] — [n of 3 Core Web Vitals failing]

If field data was insufficient, note here and proceed with lab data as proxy.

## Lab-data diagnostics

- **LCP element:** [filename / URL of the element]
- **LCP currently lazy-loaded?:** [yes / no]
- **Render-blocking resources:** [list]
- **Total Blocking Time:** [n ms]
- **Unused JS bytes:** [n KB] from [scripts]
- **Unused CSS bytes:** [n KB]
- **Image opportunities flagged:** [list]
- **Other key diagnostics:** [list]

## Diagnoses by metric

### LCP ([value])
- **LCP element:** [filename]
- **Likely causes:** [list]
- **Recommended fixes:** [list with expected metric movement]

### INP ([value])
- **Likely causes:** [list]
- **Recommended fixes:** [list]

### CLS ([value])
- **Likely causes:** [list]
- **Recommended fixes:** [list]

### TTFB ([value]) — informational
- [Brief note, only if relevant]

## Prioritised remediation list

| # | Fix | Target metric | Expected movement | Effort | Dependencies | Owner |
|---|-----|--------------|-------------------|--------|--------------|-------|
| 1 | Convert hero JPEG to WebP at 1200×1200 + add fetchpriority="high" | LCP | -1.8s estimated | Low | Theme edit | Marketing/Dev |
| 2 | Defer chat widget mount to user scroll | INP | -80ms estimated | Medium | Theme edit | Dev |
| 3 | Add explicit width/height to all PDP images | CLS | -0.10 estimated | Low | Theme template | Dev |
| ... | ... | ... | ... | ... | ... | ... |

## Implementation checklist
- [ ] Apply Low-effort fixes first (target: this week).
- [ ] Re-run PageSpeed Insights immediately for lab confirmation.
- [ ] Apply Medium-effort fixes (target: next 2-3 weeks).
- [ ] Wait 28 days, then re-pull GSC Core Web Vitals report to verify field-data movement.
- [ ] If LCP still failing, consider High-effort fixes (TTFB / framework-level work).
- [ ] Set quarterly re-audit cadence to catch regressions.

## Risks and watchouts
3-5 specific watchouts: e.g. "the chat widget is critical to support workflow — defer-on-scroll requires UX validation"; "moving to WebP requires testing on older Safari versions if EU traffic includes a meaningful share"; "TTFB is theme-template-driven and won't fully fix until Liquid optimisation work is done."
```

For batch runs, lead with a per-page summary table; per-page detail follows.

Save the produced file to `businesses/<slug>/site-speed/<page-slug>.md`. Create the `site-speed/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Field-data verdict is shown first; lab data is positioned as the diagnostic tool.
- LCP element is explicitly named — the audit doesn't recommend lazy-loading it under any circumstances.
- Each metric has its own diagnosis section with concrete causes and fixes.
- Remediation list is sorted by impact / effort, not by metric.
- Effort estimates use defined ranges (Low / Medium / High); expected metric movement uses ranges, not false precision.
- Mobile is the default focus. Desktop is mentioned only if the user explicitly asked.
- Implementation checklist closes the loop with re-measurement timing (lab immediate, field at 28 days).
- Cross-references to `audit-images` and `audit-javascript-seo` are made when relevant.

## Common mistakes to avoid

- Don't trust lab data alone. Lab can pass while real users fail; field is the ranking signal.
- Don't recommend lazy-loading the LCP element under any circumstances. Common error; non-negotiable.
- Don't propose vague "make the site faster" recommendations. Each fix targets a specific metric and has an expected movement.
- Don't ignore third-party scripts. They're the default cause of INP failures on D2C sites.
- Don't fix CLS by removing animations. Smooth, expected animations don't count as layout shift; reserve space instead.
- Don't audit lab data on a fast laptop without mobile-throttled tests. The user's customers aren't on a fast laptop.
- Don't recommend uninstalling business-critical apps without flagging the trade-off. The chat widget might be slowing the page and driving 12% of revenue; the user picks.
- Don't audit a page without PageSpeed Insights data. The audit operates on real metrics.

## Example

**Input (abbreviated):** Page = `/products/mineral-sun-drops-spf-50`. PageSpeed Insights mobile field data: LCP 4.8s (Poor), INP 240ms (Poor), CLS 0.15 (Poor). Lab diagnostics name the LCP element as `IMG_2381.jpg` (2400×2400 JPEG, 410KB, currently NOT lazy-loaded — correct). Render-blocking: Yotpo CSS, Google Fonts. Unused JS: 220KB from Yotpo + 180KB from Gorgias chat. Image-inventory shows 8 oversized JPEGs; third-party scripts include Gorgias (chat), Yotpo (reviews), Microsoft Clarity (heatmap), Klaviyo (email).

**Output (abbreviated):**

Field-data verdict: 3 of 3 Core Web Vitals failing on mobile. Overall: Fail.

Lab diagnostics: LCP element identified as hero image at 4× display dimensions, JPEG. TBT high (640ms) driven by Yotpo + Gorgias init. CLS driven by missing image dimensions + font swap.

Diagnoses:

- **LCP**: oversized hero image (P0). Convert to WebP at 1200×1200 with `srcset` + `fetchpriority="high"`. Expected: -1.8s.
- **INP**: third-party scripts on init. Defer Gorgias chat to scroll-or-tap. Async-load Microsoft Clarity. Expected: -90ms.
- **CLS**: missing image `width`/`height`. Add explicitly site-wide via theme template. Switch font-display to `optional`. Expected: -0.10.

Remediation (top 3):

1. Hero image rework (LCP -1.8s, Low effort, theme + image asset re-upload)
2. Defer Gorgias chat (INP -80ms, Medium effort, theme JS edit + UX validation)
3. Explicit image dimensions in PDP template (CLS -0.10, Low effort, theme template)

Implementation: ship 1+3 this week (low effort, immediate metric confirm in lab), ship 2 next sprint after UX confirms chat-widget defer. Re-pull field data at 28 days for ranking-signal confirmation.

Risks: chat widget defer needs support-team sign-off; remaining INP gap may require framework-level work if Yotpo init is unavoidable.

Saved to `businesses/field-and-sun/site-speed/mineral-sun-drops-spf-50.md`.
