---
name: generate-seed-keywords
description: Produces an initial seed keyword list (50-150 candidates) tailored to a specific business, ready to be expanded in a keyword tool. Use whenever the user needs starting keywords, asks "what keywords should I target," is staring at an empty Ahrefs/Semrush search box, is launching a new product or category, wants to brainstorm SEO angles, or needs to feed a keyword tool with seeds. Also use when the user wants to identify customer-language phrases, question-style queries, or competitor-adjacent terms. Do not use to do tool-based expansion (volume, KD, SERP analysis) — that's for the user to run in their preferred tool. This skill produces the high-quality starter list a tool would otherwise produce poorly from a one-word input.
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

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` like this: list the `businesses/` folder; if exactly one business folder exists, use it; if multiple, ask which business this is for; if none, recommend running `generate-business-profile` first and stop. The critical sections for this skill are products/services (3), customer (4), competitors (6), and goals (7). If any of those are blank or marked unknown, ask the user inline before producing seeds.
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
   - **Adjacent / top-of-funnel topics** — things the customer reads about *before* they're ready to buy. For a D2C cleaning brand, that's "non-toxic cleaning tips," "how to reduce plastic at home" — informational queries that earn trust upstream of purchase intent.
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
- Customer-language phrasing dominates over corporate phrasing. "Non-toxic laundry detergent" beats "sustainable surfactant solutions."
- All six dimensions are populated, not just products.
- Priority seeds are explicitly justified.
- The list is tailored to this business — at least one seed in each dimension references something specific from the business profile (a product name, a competitor, a customer pain).

## Common mistakes to avoid

- Don't produce only product-name seeds. The most missed dimension is *customer pains and questions* — these are the seeds that unlock long-tail content opportunities.
- Don't pad the list. 50 thoughtful seeds beat 200 generic ones.
- Don't invent competitor names. If the business profile doesn't list competitors, ask.
- Don't try to estimate volume or difficulty — that's what the keyword tool is for. Stay in your lane.
- Don't translate seeds into a language without confirming. If the market is non-English, ask for the user's preferred starting language.

## Example

**Input (abbreviated):** D2C refillable cleaning brand. Products: laundry detergent strips, dish soap concentrate, all-purpose cleaner refills. Customer: eco-conscious parents. Customer pains: plastic waste from cleaning products, harsh chemicals around kids. Competitors: Blueland, Cleancult, Branch Basics. US market, English.

**Output (abbreviated):**

Priority seeds: refillable laundry detergent, laundry detergent strips, non-toxic all-purpose cleaner, blueland alternative, eco-friendly dish soap, baby-safe cleaning products, refill cleaning products.

Customer pains: plastic-free cleaning, kid-safe cleaning products, no-rinse all purpose cleaner, fragrance-free dish soap, biodegradable laundry detergent.

Customer questions: are laundry strips as good as liquid, is blueland actually non-toxic, how do refill cleaning products work, what cleaners are safe for babies, can you use dish soap on dishes if you have a septic tank.

[…and so on across all six dimensions]
