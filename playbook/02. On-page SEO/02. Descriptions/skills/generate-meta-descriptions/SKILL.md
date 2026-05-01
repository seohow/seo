---
name: generate-meta-descriptions
description: Produces 3-4 scored meta-description variants for a specific page (or list of pages), tuned to the page's target cluster, search intent, brand voice, and the SERP it competes in. Each variant comes with length and mobile-truncation checks, primary-keyword presence, intent fit, brand-voice fit, call-to-action quality, and a recommendation. Use whenever the user asks to "rewrite a description," "fix the meta description on [URL]," "optimize descriptions for these pages," "what should the snippet say for [page]," or "generate descriptions to lift CTR." Also use when the user is rewriting titles in batch (descriptions ship in the same pass), when a page's CTR is below SERP average for its position, or when Google is rewriting the description in the SERP and the user wants a version Google will keep. Do not use to generate page titles (`generate-title-tags`) or to write social/OG descriptions — those are separate.
---

# Generate Meta Descriptions

This skill produces meta-description variants for one page or a batch. Each variant is scored on length (with mobile-truncation flag), primary-keyword presence, intent fit, brand voice, and call-to-action quality, with a clear recommendation at the end. Output is meant to be implemented directly.

The skill always pairs naturally with `generate-title-tags` — both are SERP-facing CTR levers and they're typically run together on the same priority pages.

## When to use this skill

- The user asks to rewrite or improve a page's meta description.
- The user is running titles + descriptions together on a batch of priority pages.
- A page's CTR is below SERP average for its position (a classic signal a description rewrite is overdue).
- Google is rewriting the description in the SERP and the user wants a version Google will display.
- The user is launching new pages and needs descriptions set right from publish.

## When NOT to use this skill

- The user wants the page title — use `generate-title-tags`.
- The user wants Open Graph / Twitter Card descriptions specifically — those overlap but are optimised for different audiences (social click vs. search click). Recommend reusing the meta description as a starting point and tuning OG separately.
- The user wants page body content optimised — use `optimize-page-content`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections for this skill: products/services (3), customer (4), brand voice (8). If section 8 is blank, ask for the tone in 1-2 sentences before generating.
2. **Page(s) to optimise** — one URL or a list. For each: page URL, page purpose, current description (if known), and current title. The current title matters because the description has to complement it (no redundancy).
3. **Target cluster** — primary keyword + 3-8 supporting keywords for each page. Default source: `businesses/<slug>/clusters/cluster-map.md`.
4. **Intent** — informational / commercial / transactional / navigational. Default source: same cluster map.
5. **Active offer or proof point (optional)** — free shipping threshold, current promo, return policy, customer-count proof. If the page genuinely has these, surface them in the variants — they lift CTR materially on transactional pages.

If cluster or intent is missing, ask before producing variants. Without them you'll write plausible-but-wrong copy.

## Process

For each page:

1. **Read the SERP.** Run the page's primary keyword in incognito, target country. Read the descriptions of the top 10. Note: dominant patterns (offer-led, proof-led, differentiator-led), average length, what each result is implicitly promising. The goal is to differentiate within format.
2. **Anchor on intent.** Intent dictates description shape:
   - **Transactional** — lead with what's offered + the offer/promise (free shipping, returns, included items). 1 CTA.
   - **Commercial** — lead with the comparison-frame ("compare X options," "find the right Y for Z") or the proof point. CTA is "Compare" / "Read review" / "See picks."
   - **Informational** — lead with what the page will explain or solve, in the searcher's language. CTA is implicit ("Learn how X" / "Find out why Y").
   - **Navigational** — usually the brand's own page; description matters less but should still be deliberate.
3. **Generate 3-4 variants from different angles:**
   - **Variant A — Differentiator-led.** What makes this page distinct in the SERP, with primary keyword naturally placed.
   - **Variant B — Benefit-led.** Lead with the customer outcome / problem solved.
   - **Variant C — Offer-led** (transactional only, when relevant). Lead with the concrete offer/proof.
   - **Variant D — Pattern-matched.** Use the SERP's dominant pattern, vary substance.
4. **Score each variant:**
   - **Length** — target 140-155 chars; flag if it'll truncate on desktop or mobile. Compute the mobile cut (~120 chars) explicitly.
   - **First-sentence stand-alone** — does the first 120 chars work as a complete pitch even if the rest is cut? Yes/no.
   - **Primary keyword presence** — present? Naturally placed?
   - **Intent fit** — does the description match the intent's expected shape? Yes/partial/no.
   - **Brand-voice fit** — matches profile section 8? Yes/partial/no.
   - **Call to action** — strong, clear, single? Yes/no/missing.
   - **SERP differentiation** — what's distinct vs. the top 10 descriptions? One sentence.
   - **Composite** — high / medium / low.
5. **Recommend one.** Two-sentence reason. Name a runner-up if the top two are close — useful if the first variant doesn't lift CTR after 30 days.
6. **For batch runs**, repeat per page; lead the deliverable with a summary table.

## Output format

For a **single-page run**:

```markdown
# Meta Description — [URL or page name]

**Page:** [URL]
**Cluster:** [Primary keyword] (intent: [intent])
**Current title:** [as published]
**Current description:** [as-is, with character count]
**Target length:** 140-155 chars (mobile cut at ~120)

## SERP read
3-4 sentences on the top 10's description patterns.

## Variants

### Variant A — [angle name]
> [Description text]
- Length: [n] chars (mobile cut at: "[first 120 chars]")
- First-sentence stand-alone: [yes / no]
- Primary kw: [present, placement]
- Intent fit: [yes / partial / no]
- Brand-voice fit: [yes / partial / no]
- CTA: [verb used, or "missing"]
- SERP differentiation: [one-sentence note]
- Composite: [high / medium / low]

### Variant B ... (etc.)

## Recommendation
**Ship:** Variant [letter] — full text.
[2-sentence reasoning.]
**Alternative:** Variant [letter] (if the first doesn't lift CTR after 30 days).

## Implementation checklist
- [ ] Update meta description in CMS
- [ ] Verify on live page (View Source or browser inspector)
- [ ] Submit URL to GSC for re-indexing
- [ ] After 30 days: check whether Google is using your description (search the primary query and compare); check CTR change in GSC
```

For a **batch run**, lead with:

```markdown
# Meta Description Batch — [Business Name]
*Pages: [n]*

## Summary

| URL | Current description | Recommended description | Cluster | Intent | Composite |
|-----|---------------------|-------------------------|---------|--------|-----------|

## Per-page detail
(Variants + scoring + recommendation per page.)
```

Save the produced file to `businesses/<slug>/descriptions/<page-slug-or-batch-name>.md`. Create the `descriptions/` sub-folder if it doesn't already exist. For single-page runs name the file after the page slug; for batches use `batch-<YYYY-MM-DD>.md`. After writing, tell the user the file path so they can open it.

## Quality bar

- Every variant has all eight scoring fields filled in.
- Length is character-counted (and mobile cut shown explicitly), not eyeballed.
- The first 120 characters of the recommended variant work as a stand-alone pitch.
- The SERP read references the actual top 10 descriptions, not a generic statement.
- CTAs are real verbs ("Shop," "Compare," "Discover," "Learn"), not "Click here" or absent.
- Brand voice is honoured. If the profile says warm-and-conversational, no variant reads like aggressive direct-response copy.
- For transactional pages with a known offer, at least one variant uses it.
- Implementation checklist is included.

## Common mistakes to avoid

- Don't write generic "welcome to our store" descriptions. They get rewritten by Google (or worse, used as-is and earn no clicks).
- Don't stuff the primary keyword. Once is enough.
- Don't forget mobile. If the CTA or proof point lives in characters 130-155, mobile users won't see it.
- Don't promise something the page doesn't deliver. The CTR uplift is short-term; the bounce penalty is permanent.
- Don't ignore the current title. Description has to complement, not duplicate. If the title says "Mineral Sun Drops SPF 50," the description shouldn't lead with the exact same phrase again.
- Don't use the same description across many pages. Generic templated descriptions are a Google-rewrites-them-all signal.
- Don't add year stamps unless the page is genuinely fresh. Year-stamping in descriptions ages worse than year-stamping in titles.

## Example

**Input (abbreviated):** Page = `/products/daily-glow-serum`. Current title (just rewritten) = `Hydrating Serum for Radiance — Daily Glow | Field & Sun`. Current description = "Welcome to our serum collection. Shop our range of hydrating serum products including daily glow and more skincare options for your routine." (170 chars, generic, will be rewritten by Google). Cluster T01: primary `hydrating serum`, transactional intent. Active offer: free shipping on orders over $60, 30-day returns.

**Output (abbreviated):**

SERP read: top 10 descriptions are dominated by benefit + proof combinations ("brightens skin," "vitamin-enriched," "specific ingredient percentages"). Average length 142 chars. Two listicles read as comparison-led. Brand product pages tend to lead with the benefit and end with the offer.

**Variant A — Benefit-led:** "Hydrating serum for radiance — 15% vitamin C, 4% niacinamide, and hyaluronic acid in a refillable daily routine." (119 chars). Mobile cut at full length. First-sentence stand-alone: yes. KW: front. Intent fit: yes. Voice: yes. CTA: implicit (Shop). Differentiation: strong (specific percentages are distinct in this SERP). **Composite: high.**

**Variant B — Proof-led:** "Hydrating serum with vitamin C, niacinamide, and hyaluronic acid. Lightweight texture for everyday morning routines." (116 chars). Mobile cut at full length. First-sentence stand-alone: yes. KW: front. Intent fit: yes. Voice: yes. CTA: implicit. Differentiation: moderate. Composite: medium-high.

[…2 more variants…]

**Recommendation:** Ship Variant A. It earns the click in this SERP because the specific ingredient percentages are distinct, credible, and aligned with Field & Sun's ingredient-led voice. Variant B is the alternative — keep it on file if A doesn't lift CTR after 30 days; the simpler routine framing may resonate better with shoppers who want plain-language skincare guidance.

Implementation checklist: update Shopify, verify, submit URL to GSC, monitor.
