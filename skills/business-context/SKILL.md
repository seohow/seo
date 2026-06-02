---
name: business-context
description: Creates or patches company-wide AI context for a business workspace. Use when setting up a business, parent company, product, service line, or brand for AI-assisted work before SEO-specific setup.
---

# Business Context

This skill creates and maintains `businesses/<slug>/business_context.md`: the durable company-wide context file that any AI skill can use, whether the task is SEO, positioning, sales collateral, product marketing, website copy, or strategy.

Use this before `seo-foundation`. The business context captures what the business is; the SEO foundation captures how search should use that context.

## When to use this skill

- The user wants to set up a new business workspace.
- The user wants AI-targeted business context for a company, product, service line, or brand.
- The user wants to patch company facts, positioning, products, customers, competitors, voice, or parent/product relationships.
- The user has an old `business_profile.md` and wants to split it into business context plus SEO foundation.

## When NOT to use this skill

- Use `seo-foundation` when the user already has business context and wants SEO goals, search baseline, keyword direction, search competitors, CMS/platform, or measurement context.
- Use topic-specific SEO skills when both `business_context.md` and `seo_foundation.md` already exist and the user wants an artifact such as keyword research, schema, briefs, audits, or a backlog.

## Modes

### 1. Quick Start

Use when no `business_context.md` exists. Capture the minimum useful context in one short conversation.

**Minimum viable context:**

| Field | Why it matters |
|---|---|
| Business name + slug | All workspace paths depend on this |
| Website URL | Needed for entity identity and downstream audits |
| Entity type | Distinguishes parent company, product, service line, and brand |
| One-line description | Gives every skill a grounding summary |
| Business model | Helps downstream skills reason about commercial priorities |
| Core products / services | The main things the business sells |
| Primary customer | Shapes messaging and prioritisation |
| 1-2 customer pains | High-signal context for positioning and SEO |
| Voice / positioning note | Prevents generic output |

**Quick Start process:**

1. Ask for the business name. Generate and confirm the slug before creating any folders.
2. Ask whether this is a parent company, product, service line, or standalone brand. If it has a parent or child entity, capture the relationship.
3. Ask for URL, one-line description, and business type in one message.
4. Ask for core products/services and the primary customer.
5. Ask for 1-2 customer pains in the customer's language and one positioning or voice rule.
6. Write `business_context.md`. Mark omitted fields with `_(unknown — not yet captured; add via Patch mode)_`.
7. Create `AGENTS.md` from `skills/business-context/templates/business_agents_template.md` if it does not exist. If this template is unavailable, use the legacy template at `skills/business-profile/templates/business_agents_template.md`.
8. Create `CLAUDE.md` as a symlink to `AGENTS.md` if it does not exist.
9. Recommend `seo-foundation` as the next step for SEO work.

### 2. Patch

Use when the user wants to add or change specific business context.

**Patch process:**

1. Resolve the slug by listing `businesses/`. If exactly one folder exists, use it; if multiple, ask which business; if none, ask the user to run Quick Start.
2. Read `businesses/<slug>/business_context.md`.
3. If the patch depends on parent/child context, read the linked parent or child context too.
4. Ask only for the missing information needed to make the requested patch.
5. Update only the relevant section(s). Refresh `Last updated`.
6. Do not touch `seo_foundation.md` unless the user explicitly asks to cascade a changed business fact into SEO context.

### 3. Gap Check

Use when the user asks what is missing from the business context.

**Gap Check process:**

1. Read `business_context.md`.
2. Identify unknown, not-yet-captured, or thin fields.
3. Rank the 3-5 highest-value gaps by downstream impact.
4. Separate company-wide gaps from SEO-only gaps. Recommend `seo-foundation` for SEO-only gaps.

### 4. Legacy Split

Use when `businesses/<slug>/business_profile.md` exists and the user wants the new two-part structure.

**Legacy Split process:**

1. Read the old `business_profile.md`.
2. Create `business_context.md` from identity, business model, products/services, customers, commercial competitors, positioning, voice, constraints, and parent/product relationships.
3. Leave SEO metrics, SEO goals, CMS/platform, search competitors, and search-specific readiness out of `business_context.md` except where they are needed as source notes.
4. Tell the user to run `seo-foundation` or continue into it immediately if they asked for a full migration.
5. Do not delete `business_profile.md`; leave it as a legacy source unless the user explicitly asks to remove it.

## Slug rules

Generate the slug from the business name:

- Lowercase the name.
- Replace whitespace and punctuation with single hyphens.
- Strip leading/trailing hyphens; collapse consecutive hyphens.
- Remove apostrophes.
- Strip leading articles only if the result is cleaner, then confirm.

If `businesses/<slug>/` already exists, do not silently overwrite. Ask whether to update that workspace or use a different slug.

## Output files

### Quick Start

1. `businesses/<slug>/business_context.md`
2. `businesses/<slug>/AGENTS.md`
3. `businesses/<slug>/CLAUDE.md`

### Patch

- `businesses/<slug>/business_context.md`

### Gap Check

- Chat output only.

### Legacy Split

- `businesses/<slug>/business_context.md`

## Quality bar

- The file is useful outside SEO.
- Parent/product relationships are explicit rather than implied.
- Inherited facts and entity-specific overrides are separated.
- Customer pains stay in the customer's language.
- Voice and positioning rules are concrete enough to guide writing.
- Omitted fields are marked with the standard unknown placeholder.
- `business_context.md` has a valid header after every write.
- `AGENTS.md` is never overwritten if it already exists.

## Common mistakes to avoid

- Do not put SEO baseline metrics, keyword lists, or rank-tracking data in `business_context.md`.
- Do not collapse parent and product context into one vague profile when separate workspaces exist.
- Do not invent product relationships or pricing.
- Do not overwrite existing business memory.
- Do not delete legacy `business_profile.md` during migration unless the user explicitly asks.

## Example

**Input:**
> Leaf Signal is a product under Leaf. It sells managed conversion tracking and AI monitoring for D2C brands.

**Output:**
> `businesses/leaf-signal/business_context.md` records Leaf Signal as a product workspace, links to the Leaf parent context, captures Signal-specific positioning and buyers, and marks SEO-specific search data for `seo-foundation`.
