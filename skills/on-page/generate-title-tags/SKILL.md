---
name: generate-title-tags
description: Use to generate title tags; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Generate Title Tags

This skill produces title-tag variants for one page or a batch of pages. Each variant is scored on length, primary-keyword placement, intent fit, SERP differentiation, and brand-voice fit, with a clear recommendation at the end. The output is meant to be implemented directly — no further interpretation needed.

The skill is opinionated: it always produces multiple variants (forces comparison), it always scores them (forces honesty), and it always recommends one (saves the user from decision fatigue).

## When to use this skill

- The user asks to rewrite or improve a page's title tag.
- The user has a list of priority pages (from the SEO Wins backlog or top-traffic pages) and wants titles updated at scale.
- A page is in striking distance (ranking 11-30) and needs a CTR-driven nudge to page 1.
- The user is briefing a CMS team or freelancer on title updates and needs the spec.
- The user is launching new pages and needs the title set right from publish.

## When NOT to use this skill

- The user wants meta descriptions — use `generate-meta-descriptions`. They're often run together but they're separate outputs.
- The user wants to restructure H1/H2/H3 on a page — use `audit-header-structure`.
- The user wants to define site-wide title-tag conventions (templates per page type) — that's a smaller scoping exercise, not list-scale variant generation. Recommend deriving conventions from a few hand-crafted examples produced by this skill.
- The user wants to A/B test titles — this skill produces the variants; the testing is a separate workflow (CMS-dependent).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections for this skill: products/services (3), customer (4), brand voice (8). If section 8 is blank, marked unknown, or marked `not yet captured`, ask for the tone in 1-2 sentences before generating variants.
2. **Page(s) to optimise** — one URL or a list. For each: the page URL, the page's purpose / what it sells or covers, and the current title (if it exists). If the user has a list of pages without context, ask whether to fetch the current titles from a sitemap export or to operate with just URLs.
3. **Target cluster** — for each page, the primary keyword and 3-8 supporting keywords. Default source: `businesses/<slug>/clusters/cluster-map.md`. If a cluster doesn't exist for the page, ask the user for the primary keyword (and ideally intent) inline before generating.
4. **Intent** — informational / commercial / transactional / navigational. Default source: same cluster map. If unclear, run a quick SERP read with the user before generating titles.

If the cluster or intent is missing, ask before producing titles. Without them you'll generate plausible-but-wrong outputs.

## Process

For each page:

1. **Read the SERP.** Run the page's primary keyword in incognito, target country. Read the top 10 titles. Note: dominant patterns (e.g. "Best [X] for [Y]," product-led, brand-led, year-stamped), the average length, the modifiers in use. The goal isn't to copy — it's to understand the format that's winning so we can differentiate within format.
2. **Anchor on the cluster + intent.** The primary keyword must appear, ideally in the first 50 characters. Intent dictates the surrounding language:
   - **Transactional** → product-led, specific (e.g. "Hydrating Serum for Radiance — Daily Glow | Brand").
   - **Commercial** → comparison or roundup pattern ("Best Hydrating Serums 2026").
   - **Informational** → question or how-to pattern ("How Hydrating Serums Work — Brand").
   - **Navigational** → brand-led (homepage, login, contact).
3. **Generate 4-6 variants.** Each from a different angle:
   - **Variant A — Direct + benefit.** Primary keyword + one strong benefit/modifier + brand.
   - **Variant B — Differentiator-led.** What makes this page unique within the SERP, primary keyword in second half.
   - **Variant C — Audience-narrowed.** Primary keyword + customer segment (e.g. "for sensitive skin," "for babies").
   - **Variant D — Benefit-first.** Lead with the customer outcome, keyword in second half.
   - **Variant E — Pattern-matched to SERP winners.** Use the dominant SERP pattern as a template, vary the wording.
   - **Variant F (optional)** — Brand-first (only for homepage or strong-brand pages).
4. **Score each variant** across these dimensions:
   - **Length** — target 50-60 characters; flag anything that will truncate.
   - **Primary keyword placement** — front of title (1-30 chars) > middle > end. Flag if missing entirely.
   - **Intent fit** — does the title pattern match the intent? Yes/no/partial.
   - **Brand-voice fit** — does the wording match the user's brand-voice section of the profile?
   - **SERP differentiation** — is this title visually distinct enough to earn the click in this SERP? Note any near-duplicates with current top 10.
   - **CTR triggers** — modifiers used (year, specificity, comparison, benefit, audience). Note count and whether they feel earned or stuffed.
   - **Composite score** — high / medium / low for the variant overall.
5. **Recommend one.** State which variant the user should ship and why, in two sentences. If the top two are close, name the runner-up as the alternative.
6. **For batch runs**, repeat for each page; produce one row per page in a table summarising the recommended title and the reason.

## Output format

For a **single-page run**:

```markdown
# Title Tag — [URL or page name]

**Page:** [URL]
**Cluster:** [Primary keyword] (intent: [intent])
**Current title:** [as-is, with character count]
**Target length:** 50-60 characters

## SERP read
3-4 sentence read of the top 10: dominant pattern, average length, modifiers in use, what wins.

## Variants

### Variant A — [angle name]
> [Title text]
- Length: [n] chars
- Primary kw placement: [front / mid / end / missing]
- Intent fit: [yes / partial / no]
- Brand-voice fit: [yes / partial / no]
- SERP differentiation: [strong / moderate / weak]
- CTR triggers: [list]
- Composite: [high / medium / low]

### Variant B — [angle name]
... (same structure)

### Variant C ... (etc.)

## Recommendation
**Ship:** Variant [letter] — `[Title text]`
[2-sentence reasoning.]
**Alternative:** Variant [letter] — `[Title text]` (if first variant doesn't perform after 30 days)

## Implementation checklist
- [ ] Update title in CMS at [URL]
- [ ] Verify on live page
- [ ] Submit URL to GSC for re-indexing
- [ ] Monitor CTR + position in GSC after 30 days
```

For a **batch run** (multiple pages), still produce per-page detail (above), but lead with a summary table:

```markdown
# Title Tag Batch — [Business Name]
*Pages: [n]*

## Summary

| URL | Current title | Recommended title | Cluster | Intent | Composite |
|-----|---------------|-------------------|---------|--------|-----------|
| ... | ... | ... | ... | ... | ... |

## Per-page detail

(Variants + scoring + recommendation for each page.)
```

Save the produced file to `businesses/<slug>/titles/<page-slug-or-batch-name>.md`. Create the `titles/` sub-folder if it doesn't already exist. For single-page runs name the file after the page slug (e.g. `mineral-sun-drops-spf-50.md`); for batches use `batch-<YYYY-MM-DD>.md`. After writing, tell the user the file path so they can open it.

## Quality bar

- Every variant has all six scoring fields filled in.
- The recommendation is decisive — one variant named, with a one-paragraph reason.
- Length checks are character-counted, not eyeballed.
- The SERP read references the actual top 10 in the user's target country, not a generic statement.
- Variants are genuinely distinct — not 4 versions of the same wording with synonym swaps.
- Brand voice is honoured — if the profile says "warm, confident, plain-language," variants don't read like aggressive direct-response copy.
- Implementation checklist is included. The deliverable is meant to be shipped, not admired.

## Common mistakes to avoid

- Don't pick the keyword-stuffed variant just because it has the keyword three times. Modern Google reads naturally.
- Don't ignore the SERP read. Variants that don't match the SERP's dominant pattern often fail to earn clicks regardless of how clever they are.
- Don't propose titles longer than 60 characters without flagging the truncation explicitly. The variant might still win — but the user should know what gets cut.
- Don't fabricate a brand voice the user didn't specify. If section 8 of the profile is blank, marked unknown, or marked `not yet captured`, ask. Don't infer.
- Don't recommend a year-stamped title for evergreen product or service pages. Year stamping is a commercial-content tactic, not a universal one.
- Don't generate variants for a page without an intent. Intent dictates the pattern; without it, you're guessing.
- Don't assume the H1 must match the title. They can; they don't have to. Note the relationship in the recommendation if relevant.

## Example

**Input (abbreviated):** Page = `/products/daily-glow-serum`. Current title = `Serum — Field & Sun` (18 chars). Cluster T01 from cluster map: primary = `hydrating serum`, supporting = `glow serum`, `vitamin c serum`, `skin brightening serum`, `radiance serum`. Intent: transactional. Brand voice: warm, confident, plain-language.

**Output (abbreviated):**

SERP read: top 10 are 6 brand product pages, 2 prestige-brand pages, 2 dermatologist listicles. Average length 54 chars. Common modifiers: "hydrating," "brightening," "glow-boosting." No year stamps in transactional results. Benefit-led titles dominate (8 of 10 lead with primary keyword + benefit at the end).

**Variant A — Direct + benefit:** `Hydrating Serum for Radiance — Daily Glow | Field & Sun` (54 chars). Length ✓, kw front ✓, intent ✓ (transactional/product-led), voice ✓, differentiation moderate (consistent with SERP winners), 1 CTR trigger (radiance). **Composite: high.**

**Variant B — Differentiator-led:** `Vitamin-Enriched Hydrating Serum for Bright Skin` (48 chars). Length ✓, kw mid ⚠️ (not front), intent ✓, voice ✓, differentiation strong, 2 CTR triggers. Composite: medium-high.

[…3 more variants…]

**Recommendation:** Ship Variant A. It leads with the primary keyword exactly as searchers type it, includes one earned benefit modifier ("radiance") that matches the SERP winners, and ends with brand for trust. Variant B is the alternative if A doesn't move CTR after 30 days — keyword placement is the only weak signal there, and we can test whether the stronger differentiation overcomes it.

Implementation checklist: update Shopify, verify on live page, submit URL to GSC, monitor 30 days.
