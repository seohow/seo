---
name: plan-keyword-research
description: Produces a scoped keyword research project plan for a specific business — what to research, in what order, with which tools, and what the deliverable should look like. Use whenever the user is starting SEO from scratch, launching a new product line, planning quarterly SEO work, asks how to "do keyword research," wants to "find keywords for my business," or is staring at a blank spreadsheet and doesn't know where to start. Also use when the user has done ad-hoc keyword work before but wants to do it properly this time. Do not use to generate the keywords themselves — that's `generate-seed-keywords` and the expansion that follows.
---

# Plan Keyword Research

This skill produces a written **project plan** for a keyword research effort. The deliverable is not the keywords themselves — it's the scope, sequence, tools, and acceptance criteria that turn keyword research from a vague intention into a 1-2 week project with a known endpoint.

A good plan answers: what's the business goal, what seed areas matter, which tools we'll use, who does what, what the final artifact looks like, and how we'll know we're done.

## When to use this skill

- The user says "I want to do keyword research" without a clear scope.
- The user is launching a new brand, product line, or market and needs to map demand.
- The user has tried keyword research before but it didn't turn into anything actionable.
- The user is briefing an agency, freelancer, or internal team member on a keyword research project.
- The user wants a quarterly or annual keyword research plan.

## When NOT to use this skill

- The user wants the actual keyword list — use `generate-seed-keywords` to produce seeds, then expand them in a tool like Ahrefs/Semrush.
- The user wants to classify intent on an existing keyword list — use `classify-keyword-intent`.
- The user wants to cluster existing keywords into pages — use `cluster-keywords`.

## Inputs required

Before producing the plan, gather:

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` like this: list the `businesses/` folder; if exactly one business folder exists, use it; if multiple, ask which business this is for; if none, recommend running `generate-business-profile` first and stop. The sections this skill cares about most are business model (2), products/services (3), customer (4), and goals (7). If any of those are blank or marked unknown in the profile, ask the user inline before producing output.
2. **Goal of this research** — why now? Possible goals: launch a new brand, support a new product line, refresh stale strategy, brief a freelancer, find quick-win opportunities. Different goals produce different plans.
3. **Constraints** — time budget (how many days/weeks), people involved, tool budget, language and geographic scope.
4. **Existing assets, if any** — past keyword lists, GSC export, current tracked keywords. The plan should build on these rather than start from zero.

If any of (1) or (2) are missing, ask before producing output. The plan is only as useful as the inputs.

## Process

1. **Restate the goal in business terms.** Do not start with "we will research keywords." Start with "the goal is to identify the 100-300 keywords most likely to drive qualified organic traffic to [business] over the next 6 months, segmented by [the segmentation that matters here]." This re-framing forces specificity and prevents scope creep.
2. **Identify the seed areas.** Map the business profile into 4-7 *seed areas* — the topical buckets the research will explore. For a D2C brand, these usually map to: each product category, each customer pain, each competitor, each top-of-funnel topic adjacent to the products. Name them explicitly so the team knows the surface area they're covering.
3. **Choose the toolchain.** Recommend a primary tool (Ahrefs/Semrush/Moz), a secondary tool for cross-validation (Google Keyword Planner, Google Search Console, AlsoAsked), and a workspace (Notion, Google Sheets, Airtable). If the user has tools already, work with what they have rather than recommending new spend.
4. **Sequence the work.** Break the project into phases with day-level estimates: Discovery (seeds → expansion → raw universe) → Annotation (volume, KD, intent tag) → Filtering (remove noise, apply business filters) → Tagging (page type) → Review (sign-off with stakeholders). Each phase should have a definition of done.
5. **Define the deliverable.** Specify exactly what comes out: a structured spreadsheet/database with columns (keyword, volume, KD, intent, page type, cluster placeholder, notes), a one-page strategy summary, and a flagged "quick wins" subset. Concrete deliverable = no ambiguity at handoff.
6. **Define acceptance criteria.** What "done" looks like. E.g.: 200+ keywords annotated, every keyword has a page-type tag, top 20 quick wins are flagged with effort estimate, the SEO lead has signed off in writing.
7. **Risks and mitigations.** Surface the predictable failure modes for this specific business (small domain trying to target head terms, English-only tooling for a non-English market, etc.) and how the plan addresses them.

## Output format

Produce a single Markdown document with this structure:

```markdown
# Keyword Research Plan — [Business Name]

## 1. Goal
One paragraph stating the business goal of this research, in business terms.

## 2. Scope
- In scope: [seed areas, languages, markets]
- Out of scope: [explicit exclusions]

## 3. Seed areas
Numbered list of 4-7 topical buckets the research will explore, each with 1-2 sentences on why it matters for this business.

## 4. Toolchain
- Primary tool: [tool] — used for [purpose]
- Secondary tool: [tool] — used for [purpose]
- Workspace: [tool] — where the artifact lives
- Notes on cost / access if relevant

## 5. Phases and timeline
| Phase | Goal | Activities | Definition of done | Owner | Days |
|-------|------|------------|--------------------|-------|------|
| Discovery | ... | ... | ... | ... | ... |
| Annotation | ... | ... | ... | ... | ... |
| Filtering | ... | ... | ... | ... | ... |
| Tagging | ... | ... | ... | ... | ... |
| Review | ... | ... | ... | ... | ... |

## 6. Deliverable
Description of the final artifact, with column-level spec for the keyword spreadsheet.

## 7. Acceptance criteria
Bulleted list of objective conditions for "done."

## 8. Risks and mitigations
Bulleted list, each with risk → mitigation.

## 9. Next steps after this project
Brief note on what comes after the keyword list exists: intent classification, competitor analysis, clustering, content briefs.
```

Save the produced file to `businesses/<slug>/keyword-research/plan.md`. Create the `keyword-research/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- The plan is specific to this business, not a generic template. Every section references the business profile.
- The timeline is realistic — for a typical D2C brand with one person, 1-2 weeks. Not "1 day" or "2 months."
- The toolchain matches what the user actually has access to.
- Acceptance criteria are objective ("200 keywords annotated") not subjective ("a good keyword list").
- The deliverable is described with enough detail that another person could pick it up and finish it.

## Common mistakes to avoid

- Don't produce a generic plan that could apply to any business. Every section should reflect the business profile inputs.
- Don't recommend tools the user doesn't have access to without flagging the cost.
- Don't underestimate the timeline. Keyword research that's worth doing takes longer than founders expect — be honest.
- Don't skip the seed areas. Without them, the team has no shared map of what's being explored.
- Don't blur this skill with the executor. This skill plans the work; it does not generate keywords.

## Example

**Input (abbreviated):** D2C beauty brand (skincare serums and sunscreen), 18 months old, 8 SKUs, US-only, Shopify, has Ahrefs and GSC, founder + marketing manager, goal is to scale organic to 2x current volume (from 8.4k to 17k monthly sessions), prior keyword research incomplete.

**Output (abbreviated):** A plan with seed areas (Daily Glow Serum, Mineral Sun Drops SPF 50, complementary serums, skin-type targeting, sunscreen positioning, ingredient-focused content, competitor analysis), a 10-day timeline split across 5 phases, deliverable spec for a 250-350-keyword Airtable base with 8 columns, acceptance criteria, and risks (mid-tier DR requires long-tail and mid-volume focus initially; seasonal SPF demand peaks spring/summer).
