---
name: seo-foundation
description: Builds or patches seo_foundation.md from business_context.md. Use before SEO skills that need goals, baseline, search competitors, platform, or priorities.
---

# SEO Foundation

This skill creates and maintains `businesses/<slug>/seo_foundation.md`: the SEO-specific operating context for a business. It reads `business_context.md` first, then adds search goals, baseline metrics, search competitors, platform constraints, topic priorities, and measurement context.

Use this after `business-context` and before topic-specific SEO skills.

## When to use this skill

- The user has business context and wants to start SEO work.
- The user wants to split an old `business_profile.md` into SEO-specific context.
- A downstream SEO skill is blocked because goals, baseline metrics, CMS/platform, search competitors, or topic priorities are missing.
- The user wants to update SEO goals, search competitors, target topics, analytics access, CMS/platform, or SEO operating constraints.

## When NOT to use this skill

- Use `business-context` when the missing information is company-wide context: products, services, customers, positioning, parent/product relationships, commercial competitors, or brand voice.
- Use a topic-specific skill when `seo_foundation.md` already exists and the user wants a concrete SEO artifact.

## Inputs required

1. **Business context** — read `businesses/<slug>/business_context.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first and stop.
2. **Existing SEO foundation** — if `businesses/<slug>/seo_foundation.md` exists, read it before patching.
3. **Legacy profile** — if `business_context.md` is missing but `business_profile.md` exists, recommend running `business-context` legacy split first. If the user explicitly asks for a direct migration, read `business_profile.md` and create the SEO foundation from the SEO-specific sections.

## Modes

### 1. Quick Start

Use when `business_context.md` exists but `seo_foundation.md` does not.

**Minimum viable SEO foundation:**

| Field | Why it matters |
|---|---|
| Target site / domain | Defines the SEO surface |
| Primary SEO market and language | Shapes keyword and SERP assumptions |
| Primary 6-month SEO goal | Prioritises every downstream skill |
| Priority products / topics | Anchors keyword and content work |
| Current site status | Separates new-site setup from optimisation |
| CMS / platform | Drives technical recommendations |
| 3-5 search competitors or alternatives | Grounds competitor and SERP analysis |
| Tools available | Determines what data can be trusted |
| Team / implementation constraints | Keeps recommendations realistic |

**Quick Start process:**

1. Read `business_context.md` and summarise the SEO-relevant business context.
2. Ask for target site/domain, primary SEO market/language, and the main 6-month SEO goal.
3. Ask for current search state: established site, new site, migration, or landing-page-only.
4. Ask for CMS/platform, analytics/GSC access, and known tools.
5. Ask for 3-5 search competitors or SERP alternatives. These may differ from commercial competitors in `business_context.md`.
6. Ask for implementation constraints: team, content capacity, developer capacity, budget, and timing risks.
7. Write `seo_foundation.md`. Mark omitted fields with `_(unknown — not yet captured; add via Patch mode)_`.
8. Recommend the next SEO skill based on readiness.

### 2. Patch

Use when the user wants to update SEO-specific context.

**Patch process:**

1. Read `business_context.md` and `seo_foundation.md`.
2. Identify whether the requested change belongs in SEO foundation, business context, or both.
3. Ask only for information needed to make the patch.
4. Update only the relevant SEO section(s). Refresh `Last updated`.
5. If the change belongs in `business_context.md`, tell the user to run `business-context` Patch or, if they asked for both, patch both files deliberately.

### 3. Gap Check

Use when the user asks what SEO setup information is missing.

**Gap Check process:**

1. Read `business_context.md` and `seo_foundation.md`.
2. Identify unknown, not-yet-captured, or thin SEO fields.
3. Rank the 3-5 highest-value gaps by downstream impact.
4. Name which skills each gap blocks or weakens.

### 4. Legacy Split

Use when an old `business_profile.md` exists and the user wants the SEO half of the new structure.

**Legacy Split process:**

1. Read `business_profile.md`.
2. Read `business_context.md` if it exists; if it does not, recommend running `business-context` first unless the user asked for a full split in one pass.
3. Move these legacy sections into `seo_foundation.md`: current SEO state, SEO goals, CMS/platform, SEO tools, search competitors, highest-traffic pages, ranking keywords, implementation constraints, and SEO-specific topic priorities.
4. Preserve the old `business_profile.md` as a migration source unless the user explicitly asks to remove it.

## Output files

### Quick Start / Patch / Legacy Split

- `businesses/<slug>/seo_foundation.md`

### Gap Check

- Chat output only.

## Quality bar

- SEO foundation clearly references `business_context.md`.
- Search competitors are separated from commercial competitors.
- Goals are concrete and tied to business outcomes.
- Technical platform and measurement access are explicit.
- Unknown data is marked with the standard unknown placeholder.
- Recommendations are realistic for the team, budget, and implementation capacity.
- Parent/product relationships from `business_context.md` are reflected when they affect SEO.

## Common mistakes to avoid

- Do not duplicate the whole business context inside `seo_foundation.md`; summarise and reference it.
- Do not treat commercial competitors as the full SERP competitor set.
- Do not accept "more traffic" as a goal without asking what business outcome the traffic should support.
- Do not invent rankings, traffic, or analytics access.
- Do not bury migration risks such as CMS changes; they drive technical SEO sequencing.

## Example

**Input:**
> Leaf Signal has business context. SEO is starting from a new Framer site and needs high-intent demand around conversion tracking accuracy.

**Output:**
> `businesses/leaf-signal/seo_foundation.md` records the SEO goal, Framer/custom-code migration risk, GSC/GA4/Ahrefs access, Elevar/Littledata/Stape as search competitors, and Connect/Watcher as priority page themes.
