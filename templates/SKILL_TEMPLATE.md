---
name: skill-name-in-kebab-case
description: One sentence on what the skill produces, followed by explicit triggering contexts. Lead with the output. Then list the kinds of user phrasings that should invoke it. Be specific and a little pushy — AI collaborators can under-trigger skills, so make it clear when this one applies. Pattern to follow — "Generates X for a business. Use whenever the user asks for X, mentions [keyword 1], [keyword 2], or wants to [outcome]. Also use when they're working on [adjacent task] and need X as an input."
---

# Skill Name (Human-Readable)

One paragraph: what this skill does, what artifact it produces, and the situation it's built for. Imagine the reader is a business owner who just installed the toolkit — they need to know if this is the right tool in 30 seconds.

## When to use this skill

- Trigger 1: phrasing or context that should invoke this skill.
- Trigger 2.
- Trigger 3.

## When NOT to use this skill

- Adjacent skill X handles [other case]. Use that instead when [condition].
- This skill is for [scope]; if the user wants [out-of-scope thing], suggest [alternative].

## Inputs required

Before producing output, gather:

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` for durable business facts and `businesses/<slug>/seo_foundation.md` for SEO-specific context. Resolve `<slug>` like this: list the `businesses/` folder; if exactly one business folder exists, use it; if multiple, ask which business this is for; if none, recommend running `business-context` first and stop. If `business_context.md` is missing, recommend `business-context`; if `seo_foundation.md` is missing and this is an SEO skill, recommend `seo-foundation`. The context this skill cares about most is: [list specific fields, not legacy section numbers]. If any required field is blank or marked unknown, ask the user inline before producing output.
2. **[Other input]** — what it is, what good looks like, where to get it.
3. **[Other input]** — what it is, what good looks like, where to get it.

If any required input is missing, ask the user before producing output. Do not invent details about the business.

## Process

Walk through the steps to produce the output. Use imperative form. Explain *why* at each step so the AI collaborator can adapt to edge cases.

1. **Step.** Do X. The reason this matters is Y.
2. **Step.** Do X. The reason this matters is Y.
3. **Step.** Do X. The reason this matters is Y.

## Output format

Specify the exact output structure. Be opinionated — a structured, predictable output is easier for the user to act on.

```markdown
# [Output title]

## Section 1
...

## Section 2
...
```

Save the produced file to `businesses/<slug>/<artifact-subfolder>/<filename>.md`. Pick a subfolder name that matches the topic (e.g. `keyword-research/`, `competitor-analysis/`, `clusters/`, `backlog/`, `on-page/`, `technical/`). Create the sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

What "good" looks like for this skill's output. List the checks the AI collaborator should run before delivering.

- Output is specific to the user's business (not generic).
- [Other criterion].
- [Other criterion].

## Common mistakes to avoid

- Don't [mistake] — it leads to [consequence].
- Don't [mistake] — it leads to [consequence].

## Example

Optional but recommended. Show a compact before/after or input/output pair so the AI collaborator has a concrete target.

**Input:**
> Brief example input.

**Output:**
> Brief example output.
