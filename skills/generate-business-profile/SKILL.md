---
name: generate-business-profile
description: Creates or iteratively updates a business profile for use across the SEO toolkit. Use whenever the user is setting up a new business, wants to add or update information about their business, says "let's set up SEO for X," "I want to update my profile," "I launched a new product," "my goals changed," "here's more about my business," or when any other skill can't find a profile to work with. Also use when a profile exists but has gaps that are blocking a downstream skill. Supports three modes — Quick Start (new profile, minimal viable), Patch (add or change specific info), Gap Check (surface what's missing and why it matters).
---

# Generate Business Profile

This skill creates and maintains the `business_profile.md` that every other toolkit skill reads from. The profile is a **living document** — you're not expected to complete it in one sitting. Start with the minimum needed to run downstream skills, then feed it more detail as your business evolves or as you have the time.

The profile has eight sections. Most skills only need three or four of them. You can add a first-draft profile in under five minutes, run keyword research the same day, and come back to fill gaps when it's useful.

## Modes

### 1. Quick Start (new business)

Use when there's no profile yet. Capture the minimum viable set — enough to unlock most downstream skills — in one short conversation. Target: under 10 messages, 5–8 minutes.

**Minimum viable profile (what Quick Start captures):**

| Field | Why it's needed |
|---|---|
| Business name + slug | All file paths depend on this |
| URL | Competitor and audit skills need it |
| One-line description | Every skill uses this for context |
| Business type | Tailors the interview and downstream templates |
| Hero product(s) / service(s) | Keyword and content skills need at least one concrete thing to optimise for |
| Primary customer | Shapes search intent assumptions |
| 1–2 customer pains | The most valuable SEO seed material |
| Primary goal | Prioritisation across all downstream skills |

Everything else (SEO metrics, full competitor list, brand voice details, secondary goals) is optional at this stage and can be added via Patch mode later.

**Quick Start process:**

1. Ask for the business name. Generate and confirm the slug before creating any folders.
2. Ask three quick questions in one message: URL, one-liner, and business type. Suggest a one-liner if you can infer it; let the user correct it.
3. Ask about the hero product(s) or service(s) — just names and a sentence each. Don't probe for exhaustive lists.
4. Ask for the primary customer in one sentence and 1–2 pains in the customer's own language.
5. Ask for the primary 6-month goal. Push back gently if it's vague ("more traffic" → "traffic to what end — revenue, leads, brand awareness?").
6. Write the profile. Mark every omitted field with `_(not yet captured — add via Patch mode)_`. Do not leave blank sections.
7. Create the workspace (profile + AGENTS.md + CLAUDE.md symlink). Confirm paths and suggest the next skill.

If the user offers more detail during Quick Start, capture it — but don't prompt for it. The goal is to get them to a working profile fast, not to exhaust the section list.

---

### 2. Patch (update specific info)

Use when the user wants to add or change something specific: a new product launched, a goal changed, they now have GSC data, a new competitor appeared, their brand voice shifted. Also use when a downstream skill flags a missing field that's blocking its output.

**Patch process:**

1. Identify what's being updated. The user may state it directly ("I launched a new product") or a downstream skill may surface a specific gap ("this skill needs your top 5 ranking keywords to proceed").
2. Read the existing profile. Briefly confirm the current value of the section being patched (e.g. "Your current hero products are X and Y — you're adding Z, right?").
3. Ask only what's needed to fill the gap. Don't re-walk the whole section unless the user asks.
4. Apply the change. Update the `Last updated` date. Preserve everything else.
5. Confirm the diff verbally: "Updated section 3 — added Mineral Lip Balm SPF 30 to the sun care category. Nothing else changed."

**Common patch triggers:**

- New product or service launched → Section 3
- Goals changed (new quarter, new strategy) → Section 7
- New competitor identified → Section 6
- GSC / analytics data now available → Section 5
- Brand voice rules evolved → Section 8
- Customer insight from sales/support → Section 4
- Business model changed (added subscription, entered new market) → Section 2
- Anything a downstream skill says is missing

**Important:** Never rewrite the whole profile in Patch mode. Only change the stated section(s).

---

### 3. Gap Check (what's missing and why it matters)

Use when the user asks "what's missing from my profile?" or "what should I fill in next?" or when preparing to run a new category of skills for the first time.

**Gap Check process:**

1. Read the existing profile.
2. Identify every field marked `_(not yet captured)_` or left blank.
3. Group gaps by downstream impact — which missing fields block the most skills.
4. Present 3–5 of the highest-value gaps, ranked by how much they unlock, with a one-sentence explanation for each.
5. Ask if the user wants to fill any of them now (which triggers Patch mode for those specific fields).

Don't present every gap as equally urgent. Some omissions (like brand voice style references) are nice to have; others (like hero product names) block almost everything.

---

## Determining which mode to use

| Signal | Mode |
|---|---|
| No profile exists for the business | Quick Start |
| User says "create," "set up," "new business," "onboard" | Quick Start |
| Profile exists and user mentions a specific change | Patch |
| Profile exists and a downstream skill flagged a gap | Patch |
| User asks "what's missing" or "what should I add next" | Gap Check |
| User says "update my profile" with no specific change | Gap Check → then Patch for the gaps they choose |
| Profile exists but is mostly empty (Quick Start was rushed) | Gap Check → then Patch |

If ambiguous, check whether a profile exists. If yes, default to Patch or Gap Check. If no, use Quick Start.

---

## Slug rules

Generate the slug from the business name:

- Lowercase the name.
- Replace whitespace and punctuation with single hyphens.
- Strip leading/trailing hyphens; collapse consecutive hyphens.
- Remove apostrophes (don't keep them as letters or hyphens).
- Strip leading articles only if the result is cleaner ("The Linen Co" → `linen-co` is fine; `the-linen-co` is also acceptable — confirm with the user).

Confirm the slug before creating any folders. Examples: "Field & Sun" → `field-and-sun`, "Joe's Plumbing" → `joes-plumbing`, "Acme SaaS" → `acme-saas`.

If `businesses/<slug>/` already exists, don't silently overwrite — ask whether to update or use a different slug.

---

## Inputs

1. **Business name** (Quick Start) or **slug** (Patch / Gap Check) — derive slug from name; confirm before writing.
2. **Existing profile** (Patch / Gap Check) — read `businesses/<slug>/business_profile.md` before doing anything.

---

## Output files

### Quick Start — three files created:

1. **`businesses/<slug>/business_profile.md`** — populated from the interview. Follows the template structure (8 sections). Omitted fields marked `_(not yet captured — add via Patch mode)_`, never blank.

   Header format:
   ```markdown
   # Business Profile — [Business Name]

   *Created: [date]*
   *Last updated: [date]*
   *Slug: `<slug>`*
   *Profile completeness: [quick-start / partial / full]*
   ```

   Use `quick-start` when only the minimum viable fields are filled. Update to `partial` or `full` as gaps are filled via Patch mode.

2. **`businesses/<slug>/AGENTS.md`** — working-memory stub from `skills/generate-business-profile/templates/business_agents_template.md`. Pre-fill: business name, slug, created date. Leave Decisions, Learnings, Constraints, and Experiments sections empty with their `*(Empty — populate as ...)*` notes intact. Do not pre-fill from the interview.

3. **`businesses/<slug>/CLAUDE.md`** — symlink pointing to `AGENTS.md` (`ln -s AGENTS.md businesses/<slug>/CLAUDE.md`).

### Patch — one file updated:

- **`businesses/<slug>/business_profile.md`** — the stated section(s) updated, `Last updated` date refreshed. AGENTS.md and CLAUDE.md are never touched in Patch mode.

### Gap Check — no files written:

- Chat output only: ranked list of gaps + offer to fill them now.

---

## Quality bar

- Quick Start produces a usable profile in one short conversation — not a mostly-blank file.
- Omitted fields are explicitly marked, not silently blank.
- The one-line description is customer-facing, not corporate-speak.
- Customer pains are in the customer's language, not marketing copy.
- Goals are concrete. Push back on "more traffic" — "more traffic to what end?"
- In Patch mode, only the stated section(s) change. Everything else is preserved verbatim.
- In Gap Check mode, gaps are ranked by downstream impact — not listed exhaustively in section order.
- The slug is confirmed before any folder is created.
- `business_profile.md` exists and has a valid header after any write.
- AGENTS.md is never overwritten in Patch mode.

---

## Common mistakes to avoid

- Don't run the full 8-section interview as the default. Quick Start stops after the minimum viable fields.
- Don't leave blank fields — use `_(not yet captured — add via Patch mode)_` as the placeholder.
- Don't accept "more traffic" as a goal without probing.
- Don't translate the user's customer-pain language into marketing-speak. Leave it in their words.
- Don't fabricate analytics numbers. Mark unknown explicitly.
- Don't silently overwrite an existing folder or profile.
- Don't touch AGENTS.md in Patch mode.
- Don't rewrite the whole profile when only one section needs updating.
- Don't present every gap as urgent in Gap Check mode — rank by actual downstream impact.
- Don't forget to update the `Last updated` date on every write.
- Don't forget to update `Profile completeness` in the header as fields fill in.

---

## Example: Quick Start (compressed)

> **User:** I want to start doing SEO for my skincare brand.
>
> **Skill:** Let's get a profile set up — that's what all the toolkit skills read from. What's the business called and the website URL?
>
> **User:** Field & Sun, fieldandsun.com
>
> **Skill:** The folder will be `businesses/field-and-sun/` — works for you?
>
> **User:** Yes.
>
> **Skill:** Three quick ones: one-sentence description of what Field & Sun does (I'll draft one if easier), business type (D2C e-comm?), and are you selling direct-only or also through other channels?
>
> **User:** D2C mostly, also on Amazon. "Skincare for daily life and bright days — minimalist, ingredient-led, refillable."
>
> **Skill:** Great description, I'll use that. What are your hero products — just names and a sentence on each?
>
> **User:** Daily Glow Serum (vitamin C + niacinamide) and Mineral Sun Drops SPF 50. The Serum is our reorder engine, the SPF peaks in spring/summer.
>
> **Skill:** Who's the main customer, and what's the top problem they come to you to solve?
>
> **User:** Women 28–45, skincare-literate. Big one: most mineral SPFs leave a white cast.
>
> **Skill:** What's the main thing you want SEO to do for you in the next 6 months?
>
> **User:** Double organic traffic and make search a meaningful acquisition channel.
>
> **Skill:** Saved a quick-start profile at `businesses/field-and-sun/business_profile.md`. SEO metrics, full competitor list, brand voice details, and secondary goals are marked for later — fill them via Patch mode when you have them, or run a Gap Check before your next skill session. Recommended next: `generate-seed-keywords` to start building your keyword universe, or `plan-keyword-research` for a full project scope.

---

## Example: Patch

> **User:** I just launched a Glow Mask — weekly exfoliating treatment.
>
> **Skill:** Got it. Current product list has Daily Glow Serum and Mineral Sun Drops SPF 50. Adding Glow Mask as a complementary SKU in the skincare category — is it a hero product or a secondary/AOV booster?
>
> **User:** AOV booster, bundles well with the Serum.
>
> **Skill:** Updated Section 3 in `businesses/field-and-sun/business_profile.md` — Glow Mask added as a complementary SKU. Nothing else changed.

---

## Example: Gap Check

> **User:** What's missing from my profile?
>
> **Skill:** Four gaps worth filling before you run more skills:
>
> 1. **SEO metrics (Section 5)** — organic sessions, domain rating, top keywords. Blocks: competitor-analysis ranking, keyword difficulty calibration.
> 2. **Competitors (Section 6)** — you have none listed yet. Blocks: competitor-analysis skill, SERP gap skills.
> 3. **Brand voice (Section 8)** — no tone guidelines or words to avoid. Blocks: title tag, meta description, and content skills from matching your voice.
> 4. **Secondary goals (Section 7)** — primary goal is set; secondary is blank. Lower priority — the primary goal unlocks most skills.
>
> Want to fill any of these now?
