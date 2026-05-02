---
name: generate-business-profile
description: Interviews the user to produce a complete business profile for a specific venture and creates a workspace folder at businesses/<slug>/ containing both business_profile.md (the structured profile) and CLAUDE.md (the working-memory file for that business, shared by AI collaborators). Use whenever the user is starting with the SEO toolkit, says "let's set up a new business," "I want to add a brand," "create a profile for [company]," "onboard a new client," asks where to begin with SEO, or wants to update an existing business profile. Also use when any other skill in the toolkit can't find a business profile to operate on, or when the user says they have multiple brands and wants to register one. Do not use to actually do SEO work — this skill only sets up the workspace; downstream skills consume it.
---

# Generate Business Profile

This skill is the front door of the SEO toolkit. It interviews the user, builds a complete `business_profile.md` for one specific venture, and saves it to `businesses/<business-slug>/business_profile.md`. Every other skill in the toolkit reads from this file, so getting it right unlocks the rest of the system.

The skill is conversational — it doesn't dump a form on the user and ask them to fill it in. It walks through the eight sections in chunks, suggests answers when it can infer from context, skips sections that don't apply to the business model, and produces a polished, ready-to-use profile at the end.

It supports two modes: **create new** (default — interview from scratch and create a new workspace folder) and **update existing** (load an existing profile, ask what's changed, write back).

## When to use this skill

- The user is new to the toolkit and `businesses/` is empty.
- The user wants to add a new business, brand, or client to the toolkit.
- The user says "let's set up SEO for [company]," "create a profile for X," "onboard a new venture."
- Another skill needs a business profile and the user hasn't produced one yet.
- The user wants to update an existing profile (e.g. a new product line launched, the goals changed, the team grew).
- The user has multiple businesses and wants to add another to the workspace.

## When NOT to use this skill

- The user wants to do actual SEO work (keyword research, content, audits) — point them at the relevant topic skill once a profile exists.
- The user wants to consume an existing profile to plan a project — that's the relevant downstream skill (`plan-keyword-research`, `scope-competitor-analysis`, etc.) that reads the profile.
- The user wants to edit only one section of an existing profile — that's update mode of this same skill, just narrowed.

## Inputs and prerequisites

1. **Read the template.** Start by reading `templates/business_profile_template.md` to know the section structure. The interview is built around it.
2. **Check for existing businesses.** List `businesses/`. If the user hasn't named a business yet, ask. If a folder for that business already exists, ask whether to update the existing profile or pick a different name.
3. **Mode** — derive from the request:
   - User says "create" / "new" / "set up" → create-new mode.
   - User says "update" / "edit" / "refresh" → update-existing mode (load the existing file first).
   - Ambiguous → check if the named business folder exists and infer; if still ambiguous, ask.

## Process

### Phase 1 — Identify the business and slug it

Ask for the **business name** if not provided. Generate a slug:

- Lowercase the name.
- Replace whitespace and punctuation with single hyphens.
- Strip leading/trailing hyphens, collapse runs of hyphens.
- Remove apostrophes (don't keep them as letters or hyphens).
- Strip articles only if the name is unwieldy ("The X Company" → `x-company` is fine, `the-x-company` is also fine — pick the cleaner option and confirm).

Confirm the slug with the user before creating any folders. Examples:

- "Field & Sun" → `field-and-sun`
- "Acme SaaS" → `acme-saas`
- "Joe's Plumbing" → `joes-plumbing`

If `businesses/<slug>/` already exists, ask whether to update or pick a new slug. Don't silently overwrite.

### Phase 2 — Walk the interview in chunks

Don't dump all 8 sections at once. Walk in roughly five conversational batches, each covering 1-2 sections. After each batch, briefly reflect back what was captured before moving on. This rhythm keeps the user engaged and gives you natural moments to clarify ambiguity.

**Batch 1: Identity + business model (sections 1 and 2).** Business name, URL, one-line description, year founded, team size, business type (D2C / SaaS / marketplace / local services / B2B / content / hybrid), revenue source, AOV/contract value, gross margin, sales cycle. Most of these are factual and quick. Probe the one-line description until it's customer-facing — "we make refillable cleaning products" beats "consumer products company in the cleaning space."

**Batch 2: Products / services + customer (sections 3 and 4).** Product/service categories with hero items. Primary customer description. Top 3 customer pains. Top 3 questions customers ask before buying. Geographic markets. Languages. The customer-pains and customer-questions fields are the most valuable for downstream SEO work — invest the time to get them in the customer's actual language, not corporate language. If the user struggles, prompt: "if a customer was talking to a friend about why they bought this, what would they say?"

**Batch 3: Current SEO state + competitors (sections 5 and 6).** Monthly organic sessions, indexed pages, domain rating, top 5 ranking keywords, top 5 highest-traffic landing pages, tools they have access to, CMS / platform. Then 3-5 competitors with URLs, mixed direct + aspirational + content-competitor. If the user doesn't know their numbers from GSC/GA, fine — mark "unknown" and recommend they pull a baseline this week. Don't block the interview on missing analytics.

**Batch 4: Goals + brand voice (sections 7 and 8).** Primary 6-month SEO goal, secondary goal, constraints, tone, words/phrases to avoid, on-brand words/phrases, style references. Push back on vague goals — "more traffic" isn't a goal; "2x organic revenue by Q4" or "rank top 3 for [keyword cluster]" is. Tone is best illustrated by 2-3 reference URLs the user admires; ask for them.

**Batch 5: Reflect and write.** Summarise the profile back in 5-7 sentences. Ask if anything's missing or wrong. Then write the file.

### Phase 3 — Adapt the interview to the business model

Some sections matter more or less depending on the business type. Adapt — don't rigidly walk every question:

- **Local services** — section 4's geographic markets becomes critical (specific cities, service areas). Section 3 might just be one service line. Section 6's competitors are local, not national.
- **SaaS** — section 2's contract value and sales cycle matter more than AOV. Section 3 might be feature areas, not products. Section 6 should include both direct competitors and content/SEO publishers ranking for relevant terms.
- **B2B services** — sales cycle in section 2 is load-bearing. Section 4's customer pains tend to be operational/financial rather than consumer.
- **Content / media** — section 3 is content categories or verticals, not products. Section 4's customer pains are information needs. Revenue model in section 2 matters (ads vs subscription).
- **Marketplace** — section 4 should describe both supply-side and demand-side users. Section 6 may include both other marketplaces and aggregator publishers.

Acknowledge the shape of the business and tailor the interview accordingly. Don't force a SaaS founder to invent an AOV.

### Phase 4 — Write the profile and the workspace memory file

Create two files in the workspace:

1. **`businesses/<slug>/business_profile.md`** — the structured profile, populated from the interview. Use the structure from `templates/business_profile_template.md`. For sections the user marked as "unknown," leave a clear placeholder like `_(not yet known — see [GSC / GA4 / Ahrefs] to pull this)_` rather than blank — this signals the gap to downstream skills.

   Add a short header:

   ```markdown
   # Business Profile — [Business Name]

   *Created: [date]*
   *Last updated: [date]*
   *Slug: `<slug>`*
   ```

2. **`businesses/<slug>/CLAUDE.md`** — the per-business working-memory file, populated from `templates/business_claude_template.md`. Pre-fill: business name in the H1 and intro sentence, slug, created date, last-updated date. Leave the Decisions log, Learnings, Constraints/quirks, and Active experiments sections empty (with their inline `*(Empty — populate as ...)*` notes intact). The "How AI collaborators should update this file" and "How the user can interact with this file" sections come straight from the template — keep them verbatim. Don't pre-fill any decisions or learnings, even if the interview surfaced things that *could* be logged — those should accumulate as the user actually works in the workspace, not from the onboarding interview.

   In **update mode**, do NOT touch the existing CLAUDE.md. It's the user's accumulated memory; only `business_profile.md` gets updated by this skill.

### Phase 5 — Confirm and point to next steps

After writing, tell the user:

1. The exact path of the profile file.
2. Any gaps marked unknown that they should fill in soon.
3. The recommended next skill — usually `plan-keyword-research` or `generate-seed-keywords` from the Strategy category, depending on whether they want to scope a project or jump to seed generation.

If this is the user's first business in the workspace, mention that they can register additional businesses later by running this skill again.

## Update mode

When updating an existing profile:

1. Read the existing file at `businesses/<slug>/business_profile.md`.
2. Briefly summarise what's currently captured (3-5 sentences).
3. Ask the user what's changed — open question first ("anything new since last update?"), then walk through the 8 sections quickly, asking only about each section: "any updates to [section]?"
4. Apply the changes. Update the `Last updated` date in the header. Preserve sections that haven't changed.
5. Confirm the diff to the user verbally (e.g. "I updated sections 3, 6, and 7 — competitors changed, goal shifted, you launched two new categories. Other sections unchanged.").

Don't rewrite the whole file from scratch when updating — preserve the user's existing answers and only change what they tell you has changed.

## Output format

The output is two Markdown files in the workspace:

1. `businesses/<slug>/business_profile.md` — populated profile. Follows `templates/business_profile_template.md`.
2. `businesses/<slug>/CLAUDE.md` — populated working-memory stub. Follows `templates/business_claude_template.md`. Empty content sections, but the pre-fill (business name, slug, dates, intro line) is filled in.

In create-new mode both files are created. In update mode only `business_profile.md` is touched — CLAUDE.md is preserved as-is.

No additional chat output beyond the confirmation summary, both file paths, and the suggested next skill.

## Quality bar

- Every section is either populated or explicitly marked unknown — no half-filled sections that look like they got abandoned mid-interview.
- The "one-line description" is customer-facing, not corporate-speak.
- Customer pains and questions are in the customer's language, not the user's marketing copy.
- Competitors include URLs, not just names.
- Goals are concrete (numbers, dates, ranking targets) — not "more traffic."
- The slug matches the kebab-case convention exactly.
- The folder is created at `businesses/<slug>/` and nowhere else.
- Both `business_profile.md` and `CLAUDE.md` exist in the new workspace after create-new mode runs.
- In update mode, the existing CLAUDE.md is untouched.
- After writing, the user knows both file paths and the recommended next skill.

## Common mistakes to avoid

- Don't dump the whole 8-section template at once and ask the user to fill it in. The interview is the product.
- Don't skip the slug confirmation. Slug mistakes cause path mismatches across the toolkit.
- Don't accept "more traffic" as a goal. Push back politely until it's specific.
- Don't translate the user's customer-pain language into marketing-speak. Leave it raw.
- Don't fabricate analytics numbers. If the user doesn't know their organic sessions, mark unknown.
- Don't silently overwrite an existing folder. Always check `businesses/<slug>/` first; if it exists, ask.
- Don't overwrite an existing CLAUDE.md in update mode. It's the user's accumulated memory — only the profile gets updated.
- Don't pre-fill the per-business CLAUDE.md content sections (Decisions, Learnings, Constraints, Experiments) from the interview. Those accumulate from real work, not onboarding.
- Don't forget the header — created/updated dates make the file traceable.
- Don't pretend to be exhaustive. If the business is unusual (a hybrid, a non-profit, a personal brand), acknowledge the shape and adapt the interview.

## Example interaction (compressed)

> **User:** I want to set up SEO for my D2C beauty brand.
>
> **Skill:** Great. Let me grab a few details and we'll build the profile.
>
> What's the business called and the website URL?
>
> **User:** Field & Sun, fieldandsun.example
>
> **Skill:** Got it. The folder will be `businesses/field-and-sun/` — sound right?
>
> **User:** Yes
>
> **Skill:** Quick batch on identity and business model: when did you launch, how many people work on SEO/marketing, and what's the business type — D2C e-comm I'm guessing? AOV and gross margin if you know them, plus the typical sales cycle (instant for D2C, longer if there's a club/subscription).
>
> *[continues through 5 batches, ~10-15 messages total]*
>
> **Skill:** Here's the summary: D2C beauty brand, US, Shopify, hero products across daily serum and mineral SPF, ingredient-aware customers, 3 main pains (finding gentle daily products, understanding SPF, building a simple routine), 4 competitors (Supergoop, Summer Fridays, Drunk Elephant, plus Byrdie as a content competitor), Q4 goal of 2x organic revenue, warm-and-expert tone. Anything missing?
>
> **User:** Nope, looks right.
>
> **Skill:** Saved two files in your new workspace:
>
> - `businesses/field-and-sun/business_profile.md` — the populated profile.
> - `businesses/field-and-sun/CLAUDE.md` — your working-memory file. Future AI collaborators will read this and update it as decisions, learnings, and constraints surface — you don't need to manage it manually unless you want to log something explicitly.
>
> A few profile sections I marked unknown — current organic sessions, indexed pages, top ranking keywords — pull those from GSC this week so the next round of skills can be precise. Recommended next: run `generate-seed-keywords` for the mineral SPF category to start building your keyword universe, or `plan-keyword-research` if you want a full project plan first.
