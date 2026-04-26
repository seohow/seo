# CLAUDE.md

> Working notes for any Claude session opening this repo. Read this before making changes.

## What this repo is

A working SEO toolkit for business owners and marketers. Two layers in one repo: a structured curriculum of modern SEO topics (in `docs/`) and installable AI skills (`SKILL.md` files) that plan, execute, or track the work for a specific business. Each business gets its own workspace under `businesses/<slug>/` where the profile and all generated artifacts live colocated.

The toolkit is designed for extensibility: the frameworks are business-model-agnostic; the examples lean D2C e-commerce in v1 because that's the founder's domain. Adapting to other business types (SaaS, B2B services, local, content/media) should mostly be a matter of populating new business profiles and rewriting examples — the underlying structure stays.

## Repo layout

```
seo/
├── README.md                            ← user-facing front door
├── CLAUDE.md                            ← this file
├── businesses/                          ← per-business workspaces
│   ├── README.md                        ← workspace convention
│   └── <slug>/                          ← one folder per business
│       ├── business_profile.md          ← input (created by generate-business-profile)
│       ├── CLAUDE.md                    ← per-business memory (decisions, learnings, quirks)
│       └── <artifact-subfolders>/       ← outputs from skills
├── skills/                              ← repo-level setup skills
│   └── generate-business-profile/SKILL.md
├── templates/                           ← format references
│   ├── README_TEMPLATE.md
│   ├── SKILL_TEMPLATE.md
│   ├── business_profile_template.md
│   └── business_claude_template.md
└── docs/                                ← the curriculum
    ├── 01. Strategy/
    │   ├── README.md                    ← category overview
    │   └── <NN>. <Topic>/
    │       ├── README.md                ← leaf topic
    │       └── skills/<skill-name>/SKILL.md
    └── ... 02–10 (other categories)
```

## Conventions to follow when adding to the toolkit

These are non-negotiable — deviating creates inconsistency that compounds across 50+ topics. If a convention isn't working for a specific case, raise it with the user before deviating.

### Topic READMEs

- Follow `templates/README_TEMPLATE.md` exactly. Sections: What it is, Why it matters, Core concepts, A worked example, How to do it, Common pitfalls, Skills in this toolkit, Related topics, Further reading.
- Examples in v1 lean a single D2C cleaning brand (refillable laundry / dish / surface cleaners) for narrative consistency. Don't pick a different example brand mid-toolkit.
- "Further reading" caps at 5 references. High-signal sources only — official docs, foundational research, well-known practitioner essays. No listicles.
- Cross-link to related topics across categories. The toolkit's depth comes from the connections, not just the leaves.
- Tone: direct, business-impact-first, plain language. Avoid SEO jargon without inline definition.

### Skills

- Follow `templates/SKILL_TEMPLATE.md`. Frontmatter requires `name` (kebab-case) and `description` (specific, slightly pushy to combat under-triggering — see `skill-creator` guidance).
- Skills go in two places only:
  - **Setup / meta utilities** — repo root under `skills/<skill-name>/SKILL.md` (e.g. `generate-business-profile`).
  - **Topic-specific skills** — inside the relevant topic folder under `docs/<category>/<topic>/skills/<skill-name>/SKILL.md`.
- Two archetypes: **planner** (scopes a project, produces a brief) and **executor** (produces a specific artifact). Some topics need one, some need both, some need a tracker — pick based on what the topic actually requires. Don't force every topic into the same shape.
- Every topic skill reads inputs from `businesses/<slug>/business_profile.md` and writes outputs to `businesses/<slug>/<artifact-subfolder>/`. The subfolder names are conventionalised — see existing skills for the pattern (`keyword-research/`, `intent-classification/`, `competitor-analysis/`, `clusters/`, `backlog/`, etc.).
- Skill description should explicitly resolve the slug: list `businesses/`, default to the only folder if there's one, ask if there are multiple, recommend `generate-business-profile` if there are none.

### File naming and slugs

- Skill folders: kebab-case (`plan-keyword-research`, not `plan_keyword_research` or `Plan-Keyword-Research`).
- Business slugs: lowercase, hyphen-separated, no apostrophes, no leading articles when avoidable. `generate-business-profile` enforces this — match its rules manually if creating a slug by hand.
- Topic folder names: keep the existing `NN. Topic Name` numbered convention. Don't renumber without coordinating across all cross-links.

### Format bar (the slice in `01. Strategy` is the reference)

Before writing a new topic README or skill, read at least one Strategy leaf for tone calibration (e.g. `docs/01. Strategy/01. Keyword Research/README.md` and one of its skills). The format and depth of that slice was deliberately designed and reviewed; new content should match.

## How to add a new category or topic

1. Read this file (you're here) and `templates/README_TEMPLATE.md` + `templates/SKILL_TEMPLATE.md`.
2. Read at least one full Strategy leaf for calibration.
3. Write the category overview README (at `docs/NN. Category/README.md`) before the leaves — it forces you to think about how the leaves fit together.
4. For each leaf, write the README first, then 1-2 skills. Don't write skills before the README — the README defines the shape of the work.
5. Cross-link to related topics in other categories (e.g. Internal Linking links to Topic Clusters and Site Architecture).
6. Update root `README.md` only if the category structure changed (it shouldn't for v1).

## How to update the toolkit (vs. adding to it)

- Conventions changes → update this file *and* `templates/`. If the convention affects existing skills, refactor all of them (don't leave the toolkit half-old, half-new).
- Tone or format adjustments → re-read the Strategy slice first; if the change applies retroactively, apply it to the slice and document the reason in the decisions log below.
- Adding a new business category to the v1 D2C-leaning examples → discuss with the user first; this is a vertical scope expansion, not a tweak.

## Decisions log

*Append new entries chronologically. Format: ### YYYY-MM-DD — title*
*Capture the decision, the reason, and what it means for future work. Keep entries terse — this isn't a changelog, it's a why-log.*

### 2026-04-26 — Toolkit foundations and Strategy slice complete
- Decided format: README + 1-2 skills per leaf, parent README per category, examples lean D2C cleaning brand for v1, frameworks stay business-agnostic.
- Decided structure: `templates/` for templates, `skills/` for setup utilities, `docs/<category>/<topic>/skills/` for topic skills.
- Decided per-business workspace convention: `businesses/<slug>/` holds profile + artifacts; never store inputs/outputs at repo root.
- Decided front-door skill: `generate-business-profile` is the entry point and must run before any topic skill is usable.
- Decided audience: D2C-first examples, but architecture should support adding business types later via different profiles + example overrides.
- Strategy slice (5 leaves, 1 category overview, 7 skills) is the format reference for the remaining 9 categories.

### 2026-04-26 — Per-business CLAUDE.md introduced
- Decided every business workspace gets its own `CLAUDE.md` from `templates/business_claude_template.md`.
- Decided `generate-business-profile` drops the stub on workspace creation; users don't have to remember.
- Decided per-business CLAUDE.md captures: decisions, learnings, constraints/quirks, active experiments — distinct from artifact files (which capture *what was produced*).

## Learnings about working in this repo

*Add notes here as patterns emerge from working sessions. Keep terse. Useful for future Claude sessions navigating the same repo.*

- The Strategy slice was built vertical-first (full slice before scaling) on purpose. When extending to new categories, do the same: complete one category before moving to the next, so format drift gets caught early.
- Examples reference the same fictional D2C brand throughout. New writers (Claude or human) should reuse the same brand fixture rather than introducing new ones — keeps the toolkit feeling like one document, not 10.
