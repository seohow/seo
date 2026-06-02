---
name: business-profile
description: Legacy helper for old business_profile.md workspaces. Use to migrate an existing profile into business_context.md and seo_foundation.md.
---

# Business Profile (Legacy Migration)

`business-profile` is now a legacy compatibility helper. The toolkit has split the old all-in-one `business_profile.md` into two files:

1. `businesses/<slug>/business_context.md` — durable company-wide AI context.
2. `businesses/<slug>/seo_foundation.md` — SEO-specific operating context that references the business context.

For new work, use `business-context` first, then `seo-foundation`. Use this legacy skill only when an old workspace still has `business_profile.md` or when the user explicitly invokes `business-profile`.

## When to use this skill

- The user asks for `business-profile` by name.
- A workspace contains `businesses/<slug>/business_profile.md` and needs migration.
- The user asks to split an existing generated profile into business context and SEO foundation.
- A downstream skill references the old file contract and you need to route the user to the new setup.

## When NOT to use this skill

- For new business setup, use `business-context`.
- For SEO setup after business context exists, use `seo-foundation`.
- For ordinary company-wide patches, use `business-context`.
- For ordinary SEO-specific patches, use `seo-foundation`.

## Modes

### 1. Route New Setup

Use when no old `business_profile.md` exists and the user wants to set up a business.

1. Tell the user the toolkit now uses two setup steps.
2. Run `business-context` to create `business_context.md`, `AGENTS.md`, and `CLAUDE.md`.
3. Run `seo-foundation` if the user is ready to create the SEO-specific layer.

### 2. Legacy Split

Use when `business_profile.md` exists and the user wants the new structure.

1. Resolve the slug by listing `businesses/`. If exactly one folder exists, use it; if multiple, ask which business; if none, stop and recommend `business-context`.
2. Read `businesses/<slug>/business_profile.md`.
3. Create or update `businesses/<slug>/business_context.md` with the durable business facts:
   - identity and website
   - entity type and parent/product relationships
   - company history
   - business model
   - products, services, and capabilities
   - customers, buyers, pains, red flags, markets, and languages
   - positioning and messaging
   - commercial competitors and alternatives
   - brand voice and editorial guardrails
   - operational constraints and source notes
4. Create or update `businesses/<slug>/seo_foundation.md` with the SEO-specific facts:
   - target site / domain
   - SEO goals and priorities
   - current search baseline
   - CMS/platform and measurement tools
   - search competitors and SERP alternatives
   - topic, keyword, and page priorities
   - SEO operating constraints
   - readiness gaps
5. Preserve `business_profile.md` as a legacy source unless the user explicitly asks to remove it.
6. Refresh `Last updated` in any file you write.

### 3. Legacy Gap Check

Use when the user asks what would be needed before migration.

1. Read `business_profile.md`.
2. Identify which fields are strong enough to move cleanly into `business_context.md`.
3. Identify which SEO foundation fields are missing or too thin.
4. Present the highest-impact gaps and recommend whether to migrate now or patch first.

## Slug rules

Use the same slug rules as `business-context`:

- Lowercase the business name.
- Replace whitespace and punctuation with single hyphens.
- Strip leading/trailing hyphens and collapse consecutive hyphens.
- Remove apostrophes.
- Confirm before creating a new folder.

## Quality bar

- New work is routed to `business-context` and `seo-foundation`.
- Migration separates company-wide context from SEO-specific context.
- Parent/product relationships are explicit.
- Search competitors are not mixed with commercial competitors unless clearly labelled.
- `business_profile.md` is not deleted during migration unless explicitly requested.
- `AGENTS.md` and `CLAUDE.md` are preserved.

## Common mistakes to avoid

- Do not continue creating new all-in-one `business_profile.md` files.
- Do not duplicate the whole old profile into both new files.
- Do not lose useful source notes during migration.
- Do not overwrite business memory.

## Example

> **User:** Split my old Leaf Signal business profile into the new format.

> **Skill:** Read `businesses/leaf-signal/business_profile.md`, create `business_context.md` for the product/company facts and `seo_foundation.md` for the search setup, then leave the old file in place as a legacy source.
