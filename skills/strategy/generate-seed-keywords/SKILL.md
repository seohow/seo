---
name: generate-seed-keywords
description: Generates 50–100 seed keywords from the business context and SEO foundation, ready for tool-based expansion. Use when starting keyword research cold or when the initial keyword set is missing.
---

# Generate Seed Keywords

This skill produces a structured **seed keyword list** for a specific business — the starting universe of 50-150 keywords from which a real research project expands. The output is meant to be pasted into Ahrefs, Semrush, Google Keyword Planner, or similar so the tool's expansion produces high-signal results instead of noise.

The reason this skill exists: keyword tools amplify whatever you put in. Feed them "shoes" and you get garbage. Feed them a thoughtful, business-specific seed list and you get a usable universe in one expansion pass. Most keyword research projects fail because the seeds were lazy.

## When to use this skill

- The user is starting keyword research for a new business, brand, or product line.
- The user asks "what keywords should I target?" or "where do I start with SEO?"
- The user has a keyword tool open and doesn't know what to type.
- The user is briefing a freelancer who needs starting points.
- The user wants to brainstorm beyond the obvious product names — including question queries, comparison queries, and customer-language phrases.

## When NOT to use this skill

- The user wants the *full* keyword universe with volume and difficulty — that needs a keyword tool. Produce seeds here, then point the user at their tool.
- The user wants to scope the keyword research project — use `plan-keyword-research`.
- The user has a list and wants to classify intent — use `classify-keyword-intent`.
- The user has a list and wants to cluster it — use `cluster-keywords`.

## Inputs required

Before producing the list, gather:

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. The critical fields for this skill are products/services and customer pains from `business_context.md`, plus SEO goals and search competitors from `seo_foundation.md`. If any of those are blank, marked unknown, or marked `not yet captured`, ask the user inline before producing seeds.
2. **Focus area** (optional but useful) — is this for the whole business, or a specific category, product launch, or content theme? A focused seed list outperforms a broad one.
3. **Language and market** — defaults from the profile if set; ask if not.

If products/services or customer pains are missing, ask before producing output. Without them you'll generate generic seeds.

## Process

1. **Read the inputs and identify seed dimensions.** Every seed list draws from the same six dimensions. Cover all six explicitly:
   - **Products / services** — direct names of what the business sells, plus category and sub-category names.
   - **Customer pains** — phrases that describe the problem the customer is trying to solve, in their language.
   - **Customer questions** — question-form queries the customer asks before buying ("how does X work," "is X safe for Y," "X vs Y").
   - **Comparison and modifier queries** — "best X," "cheapest X," "X for [persona]," "X without [thing]," "X near me," "X reviews."
   - **Competitor and alternative queries** — "[competitor] alternative," "[competitor] vs [other competitor]," "[competitor] review."
   - **Adjacent / top-of-funnel topics** — things the customer reads about *before* they're ready to buy. For a D2C beauty brand, that's "vitamin C serum benefits," "how mineral sunscreen works," "how to layer skincare with SPF" — informational queries that earn trust upstream of purchase intent.
2. **Generate 8-15 seeds per dimension.** Aim for variety, not exhaustiveness — the tool will expand. Use customer language, not corporate language. If you'd be embarrassed to read it aloud as a customer, rewrite it.
3. **Tag each seed.** Each seed gets a dimension tag and a quick intent guess (informational / commercial / transactional / navigational). The intent guess is provisional — `classify-keyword-intent` does this properly later.
4. **Flag the high-priority seeds.** Mark the 10-20 seeds most likely to be the highest-leverage starting points for this business. These are typically: direct product/category names, the top 1-2 customer pain phrases, and "best [category]" / "[category] for [persona]" patterns.
5. **Sanity check.** Read the list as if you were the customer. Cross out anything that sounds like jargon. Add anything that's clearly missing. Confirm the list reflects this business, not a template.
6. **Add expansion guidance.** End the output with a short "next steps" block explaining how to expand the seeds in the user's tool of choice — typically: paste seeds into the matching-terms or keyword-ideas report, set the country, filter by KD relative to the domain rating, and export to the keyword annotation spreadsheet.

## Output format

```markdown
# Seed Keywords — [Business Name]

**Focus:** [whole business / category / launch]
**Market:** [country], [language]
**Total seeds:** [n]

## Priority seeds (top 10-20)
The starting points most likely to be high-leverage for this business. Expand these first.

| Seed | Dimension | Provisional intent | Why prioritised |
|------|-----------|--------------------|-----------------|
| ... | ... | ... | ... |

## Full seed list

### Products / services
- seed 1 (intent guess)
- seed 2 (intent guess)
- ...

### Customer pains
- ...

### Customer questions
- ...

### Comparison and modifier queries
- ...

### Competitor and alternative queries
- ...

### Adjacent / top-of-funnel topics
- ...

## How to expand these seeds
Brief, tool-aware instructions for taking this list into the user's keyword tool. Mention: country/language settings, KD filtering relative to their domain rating, the matching-terms / keyword-ideas / questions reports, and the People Also Ask cross-reference.
```

Save the produced file to `businesses/<slug>/keyword-research/seed-keywords.md`. Create the `keyword-research/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every seed is plausible — would actually be searched by a real customer.
- Customer-language phrasing dominates over corporate phrasing. "Vitamin C serum for dark spots" beats "bioactive radiance complex."
- All six dimensions are populated, not just products.
- Priority seeds are explicitly justified.
- The list is tailored to this business — at least one seed in each dimension references something specific from the business context and SEO foundation (a product name, a competitor, a customer pain).

## Common mistakes to avoid

- Don't produce only product-name seeds. The most missed dimension is *customer pains and questions* — these are the seeds that unlock long-tail content opportunities. For example, "does mineral sunscreen leave white cast" unlocks more value than just "mineral sunscreen."
- Don't pad the list. 50 thoughtful seeds beat 200 generic ones.
- Don't invent competitor names. If the business context and SEO foundation doesn't list competitors, ask.
- Don't try to estimate volume or difficulty — that's what the keyword tool is for. Stay in your lane.
- Don't translate seeds into a language without confirming. If the market is non-English, ask for the user's preferred starting language.

## Example

**Input (abbreviated):** Field & Sun, a D2C beauty brand. Products: Daily Glow Serum, Mineral Sun Drops SPF 50, Bloom Cleanser, complementary serums. Customer: skincare-literate women 28-45, concerned with ingredient specifics, sun protection, refill value, and packaging waste. Customer pains: sunscreen that doesn't leave white cast, vitamin C serums that oxidize quickly, and refillable products that should save money without feeling clunky. Competitors: Supergoop, Saie, ILIA, Glossier, Byrdie. US market, English.

**Output (abbreviated):**

Priority seeds: best mineral sunscreen, mineral sunscreen no white cast, vitamin C serum dark spots, vitamin C serum for sensitive skin, sunscreen for dark skin, refillable serum, tinted mineral sunscreen.

Customer pains: mineral sunscreen no chalky finish, serum that doesn't oxidize, mineral sunscreen for oily skin, refillable serum pouch, ingredient-led skincare.

Customer questions: is mineral sunscreen better than chemical sunscreen, does mineral sunscreen leave white cast, what's the best vitamin C serum for dark spots, how long does vitamin C serum last, can you use sunscreen under makeup.

[…and so on across all six dimensions]
