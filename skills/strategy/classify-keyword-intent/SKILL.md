---
name: classify-keyword-intent
description: Tags a keyword list with search intent (informational / navigational / commercial / transactional / local), recommends a page type for each keyword, and flags mixed-intent queries that need SERP verification. Use whenever the user has a keyword list and asks "what type of page should this be," "what's the intent of these keywords," or "how should I sort these for content vs. product pages." Also use when the user is preparing to brief content, needs to map keywords to URL structure, or is splitting a keyword list between SEO and paid. Do not use to generate keywords (that's `generate-seed-keywords`) or to cluster them (that's `cluster-keywords`). This skill produces the intent + page-type tags that are inputs to clustering and content briefing.
---

# Classify Keyword Intent

This skill takes a keyword list and produces a tagged version of the same list with three new columns: **intent**, **recommended page type**, and **confidence / SERP-check flag**. The output is the bridge between raw keyword research and the clustering / content-briefing work that follows.

The skill applies the four-intent taxonomy (plus local where relevant), maps each intent to a concrete page type, and is honest about ambiguity — flagging mixed-intent queries rather than forcing them into a bucket.

## When to use this skill

- The user has a keyword list and asks how to sort, prioritise, or assign page types.
- The user is briefing content and needs to know which keywords map to product/collection pages vs. blog posts vs. FAQs.
- The user has tool-generated intent labels and wants a sanity check.
- The user is splitting a list between SEO targets and paid-search targets — paid wants commercial/transactional, SEO wants the full mix.
- The user is preparing inputs for clustering, content planning, or a content brief.

## When NOT to use this skill

- The user wants to generate keywords — use `generate-seed-keywords`.
- The user wants to cluster keywords into page-level groups — use `cluster-keywords` (run intent classification *first* though, because clusters are intent-aware).
- The user wants to verify intent for a single high-priority keyword by manually inspecting the SERP — that's a manual SERP analysis, not a list-classification task. This skill works at list scale.

## Inputs required

1. **Keyword list** — a list of keywords. Pasted text, CSV, or a file. Required columns: keyword. Optional but useful: search volume, current ranking, market/geography. Ask for the list if not provided.
2. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. The profile is used to disambiguate borderline queries (e.g. is "supergoop" navigational for the user, or a competitor mention for a different brand?). If section 6 (competitors) is blank, ask before classifying competitor-branded queries.
3. **Market and language** — defaults from the profile; ask if not. Intent classification is market-specific.

If the keyword list isn't provided, ask. Don't fabricate keywords.

## Process

1. **Apply the taxonomy.** For each keyword, classify into one of:
   - **Informational** — query seeks knowledge. Markers: "how," "what," "why," "guide," "tips," "ideas," definitions, comparisons of concepts (not products).
   - **Navigational** — query seeks a specific destination. Markers: brand names alone, "[brand] login," "[brand] returns," "[brand] contact."
   - **Commercial** — query investigates before purchase. Markers: "best," "top," "review," "vs," "comparison," "[product] for [persona]," "is X worth it."
   - **Transactional** — query is ready to act. Markers: "buy," "shop," "discount," "free shipping," "near me" with commerce, exact product/SKU language.
   - **Local** (when relevant) — query has geographic implication. Markers: "near me," city/region modifier, "open now," "[service] in [place]."
2. **Map to page type.** Use this default map, adjusted for the business:
   - Informational → blog post, guide, FAQ, glossary
   - Navigational → existing brand or login page (usually nothing to build)
   - Commercial → comparison page, roundup post, "best of" landing page, category page with editorial layer
   - Transactional → product page, collection / category page, conversion landing page
   - Local → location page, store finder, locally-modified collection
3. **Flag confidence.** Tag each keyword with one of:
   - **High** — taxonomic markers are unambiguous, page type is clear.
   - **Medium** — fits a bucket but borderline; recommend a SERP check before committing.
   - **Mixed** — the query reads as multiple intents; SERP check is required, and the page type may need to be split across two URLs.
4. **Apply business filters.** Cross-reference with the business profile:
   - If the brand has no comparison content yet, flag commercial keywords as "needs new content."
   - If a transactional keyword references a product the business doesn't sell, mark it `out of scope`.
   - If a navigational keyword references a competitor, mark it `competitor-branded` — these can occasionally be earned via a "[competitor] alternative" page.
5. **Sort and summarise.** Group the output by intent so the user can see the shape of the list at a glance: how much of the universe is informational vs commercial vs transactional. Imbalanced lists (e.g. 90% informational) are a strategic flag worth surfacing.

## Output format

```markdown
# Intent Classification — [Business Name]

**Total keywords:** [n]
**Market:** [country, language]

## Distribution
| Intent | Count | % |
|--------|------:|--:|
| Informational | ... | ...% |
| Navigational | ... | ...% |
| Commercial | ... | ...% |
| Transactional | ... | ...% |
| Local | ... | ...% |
| Mixed (flagged) | ... | ...% |

Brief 2-3 sentence read on what the distribution implies for the business.

## Tagged list

| Keyword | Volume | Intent | Page type | Confidence | Notes |
|---------|-------:|--------|-----------|-----------|-------|
| ... | ... | ... | ... | ... | ... |

Order the table: transactional first, then commercial, then informational, then navigational, then mixed/out-of-scope at the bottom.

## Flags
- **SERP check recommended (medium / mixed):** [count] keywords. List them.
- **Out of scope:** [count] keywords. List them with reason.
- **Competitor-branded:** [count] keywords. List them.

## Recommended next steps
2-4 sentences pointing to clustering, content briefing, and SERP checks for the flagged keywords.
```

Save the produced file to `businesses/<slug>/intent-classification/classified-keywords.md`. Create the `intent-classification/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

If the list is large (>100 keywords), still produce the full table — it's the working artifact. The user can sort/filter from there.

## Quality bar

- Every keyword has all three tags (intent, page type, confidence).
- Mixed-intent and out-of-scope are honestly flagged, not bucketed for tidiness.
- Intent labels reflect the markers in the query, not assumptions about the business.
- Distribution summary surfaces strategic implications (e.g. "85% of your list is informational — you have a top-of-funnel-heavy strategy with limited bottom-funnel coverage; consider expanding seed coverage of comparison and product queries").
- Page-type recommendations are concrete (e.g. "comparison page," not just "content").

## Common mistakes to avoid

- Don't infer intent from search volume. High-volume queries are not always commercial.
- Don't classify everything as transactional because the business sells products. Most keyword universes are informational-heavy.
- Don't merge commercial and transactional. They map to different page types and sit at different funnel stages.
- Don't skip the confidence flag. The user needs to know which keywords to manually SERP-check before committing to content.
- Don't translate the keywords to a different language unless the user explicitly asks.

## Example

**Input (abbreviated):** 5 keywords from the D2C beauty brand list.

| Keyword | Volume |
|---------|-------:|
| best mineral sunscreen | 2,800 |
| buy mineral sunscreen SPF 50 | 420 |
| does mineral sunscreen leave white cast | 1,600 |
| supergoop | 45,200 |
| mineral sunscreen near me | 110 |

**Output (abbreviated):**

| Keyword | Intent | Page type | Confidence | Notes |
|---------|--------|-----------|-----------|-------|
| buy mineral sunscreen SPF 50 | Transactional | Product / collection | High | Map to existing PDP if SKU exists, else collection. |
| best mineral sunscreen | Commercial | Comparison / roundup blog | High | Brand-led roundup including own product. |
| mineral sunscreen near me | Local + Commercial | Local landing or store finder | Medium | Mostly Amazon SERP — niche local play. |
| does mineral sunscreen leave white cast | Informational | Blog post / explainer | High | Top-of-funnel; link to PDPs. |
| supergoop | Navigational | n/a — competitor brand | High | Out of scope unless building a "[competitor] alternative" page. |
