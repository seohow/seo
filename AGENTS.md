# AGENTS.md

> Shared working notes for any AI collaborator opening this repo, including Codex and Claude CoWork. Read this before making changes.

## What this repo is

A working SEO toolkit for business owners and marketers. Two layers in one repo: a structured curriculum of modern SEO topics (in `playbook/`) and installable AI skills (`SKILL.md` files) that plan, execute, or track the work for a specific business. Each business gets its own workspace under `businesses/<slug>/` where the profile and all generated artifacts live colocated.

The toolkit is designed for extensibility: the frameworks are business-model-agnostic; the examples lean D2C e-commerce in v1 because that's the founder's domain. Adapting to other business types (SaaS, B2B services, local, content/media) should mostly be a matter of populating new business profiles and rewriting examples — the underlying structure stays.

## Repo layout

```
seo/
├── README.md                            ← user-facing front door
├── AGENTS.md                            ← shared agent instructions
├── CLAUDE.md                            ← compatibility pointer to AGENTS.md
├── businesses/                          ← per-business workspaces
│   ├── README.md                        ← workspace convention
│   └── <slug>/                          ← one folder per business
│       ├── business_profile.md          ← input (created by generate-business-profile)
│       ├── AGENTS.md                    ← per-business working memory (decisions, learnings, quirks)
│       ├── CLAUDE.md                    ← symlink → AGENTS.md (for Claude-specific workflows)
│       └── <artifact-subfolders>/       ← outputs from skills
├── skills/                              ← distributable skill package
│   ├── README.md                        ← skill catalogue, grouped by playbook category / leaf
│   ├── generate-business-profile/       ← setup / meta utility
│   │   ├── SKILL.md
│   │   └── templates/                   ← business profile + business memory templates
│   └── <category-slug>/<skill-name>/    ← topic skills (category slug omits "SEO")
│       └── SKILL.md
├── templates/                           ← format references
│   ├── README_TEMPLATE.md
│   └── SKILL_TEMPLATE.md
└── playbook/                                ← the curriculum
    ├── 01. Strategy/
    │   ├── README.md                    ← category overview
    │   └── <NN>. <Topic>.md             ← leaf topic; links to root skills
    └── ... 02–10 (other categories)
```

## Conventions to follow when adding to the toolkit

These are non-negotiable — deviating creates inconsistency that compounds across 50+ topics. If a convention isn't working for a specific case, raise it with the user before deviating.

### Topic pages

- Follow `templates/README_TEMPLATE.md` exactly. Sections: What it is, Why it matters, Core concepts, A worked example, How to do it, Common pitfalls, Skills in this toolkit, Related topics, Further reading.
- Examples in v1 use the single Field & Sun sample business for narrative consistency. Don't pick a different example brand mid-toolkit.
- "Further reading" caps at 5 references. High-signal sources only — official docs, foundational research, well-known practitioner essays. No listicles.
- Cross-link to related topics across categories. The toolkit's depth comes from the connections, not just the leaves.
- Tone: direct, business-impact-first, plain language. Avoid SEO jargon without inline definition.

### Skills

- Follow `templates/SKILL_TEMPLATE.md`. Frontmatter requires `name` (kebab-case) and `description` (specific, slightly pushy to combat under-triggering — see `skill-creator` guidance).
- Skills go in two places only:
  - **Setup / meta utilities** — repo root under `skills/<skill-name>/SKILL.md` (e.g. `generate-business-profile`).
  - **Topic-specific skills** — under `skills/<category-slug>/<skill-name>/SKILL.md`, where `<category-slug>` is the playbook category in lowercase slug form with the repeated `SEO` suffix removed (`on-page`, `technical`, `content`, `off-page`, `international`, `ai`).
- Skill-specific runtime templates or assets should live inside the skill folder that consumes them. Example: `generate-business-profile` owns its business workspace templates at `skills/generate-business-profile/templates/`.
- Keep `skills/README.md` updated whenever adding, moving, renaming, or removing a skill. It is the distributable catalogue for registries like skills.sh and should be grouped by playbook category / leaf, with links back to the category and leaf README.
- Two archetypes: **planner** (scopes a project, produces a brief) and **executor** (produces a specific artifact). Some topics need one, some need both, some need a tracker — pick based on what the topic actually requires. Don't force every topic into the same shape.
- Every topic skill reads inputs from `businesses/<slug>/business_profile.md` and writes outputs to `businesses/<slug>/<artifact-subfolder>/`. The subfolder names are conventionalised — see existing skills for the pattern (`keyword-research/`, `intent-classification/`, `competitor-analysis/`, `clusters/`, `backlog/`, etc.).
- Skill description should explicitly resolve the slug: list `businesses/`, default to the only folder if there's one, ask if there are multiple, recommend `generate-business-profile` if there are none.

### File naming and slugs

- Skill folders: kebab-case (`plan-keyword-research`, not `plan_keyword_research` or `Plan-Keyword-Research`).
- Business slugs: lowercase, hyphen-separated, no apostrophes, no leading articles when avoidable. `generate-business-profile` enforces this — match its rules manually if creating a slug by hand.
- Topic folder names: keep the existing `NN. Topic Name` numbered convention. Don't renumber without coordinating across all cross-links.

### Cross-link URL encoding

All relative cross-links must use `%20` for spaces — never literal spaces. GitHub renders literal spaces in Markdown link URLs as broken links.

- Correct: `[On-page SEO](../02.%20On-page%20SEO/README.md)`
- Wrong: `[On-page SEO](../02. On-page SEO/README.md)`

This applies to every path segment that contains a space: category folders (`01.%20Strategy/`), leaf files (`03.%20Header%20Structure.md`), and skill paths. When writing new cross-links, encode every space in the URL portion as `%20`. The link text (inside `[…]`) is unaffected — spaces there are fine.

### Format bar (the slice in `01. Strategy` is the reference)

Before writing a new topic page or skill, read at least one Strategy leaf for tone calibration (e.g. `playbook/01. Strategy/01. Keyword Research.md` and one of its skills). The format and depth of that slice was deliberately designed and reviewed; new content should match.

### Canonical sample business (Field & Sun)

The toolkit ships with a fictional sample business at `businesses/field-and-sun/`. Treat this as the Northwind / Adventure Works of the toolkit — the working reference fixture that examples should refer to. Field & Sun is a D2C beauty brand with two hero products (Daily Glow Serum — evergreen; Mineral Sun Drops SPF 50 — seasonal spring/summer) plus a complementary lineup designed to lift AOV and reinforce brand loyalty. Read `businesses/field-and-sun/business_profile.md` and `businesses/field-and-sun/CLAUDE.md` once before writing new examples.

The per-business working-memory file is named `AGENTS.md` — the canonical, agent-agnostic name. A `CLAUDE.md` symlink pointing to it is created alongside for compatibility with Claude-specific workflows. Codex, Claude CoWork, and any future AI collaborator should read and maintain `AGENTS.md` directly.

**All worked examples in playbook READMEs and skill docs reference Field & Sun.** The earlier "refillable cleaning brand" fixture has been fully migrated. Don't introduce a new fictional brand — Field & Sun is the only sample business this toolkit uses, and consistency across categories is the point of having a canonical fixture.

When writing examples that reference Field & Sun: pull facts (hero product names, AOV, geography, brand voice, competitors) from the profile rather than inventing them. The point of having a canonical sample is consistency — readers should be able to cross-reference any example against the profile and find the same brand.

### Example drift prevention

Before finishing any playbook README or skill work, actively check for example drift. Do not rely on memory.

- Every worked example should name or clearly imply **Field & Sun** unless the text is explicitly generic template scaffolding.
- Do not introduce one-off fictional brands, anonymous "example companies," or legacy categories from the earlier cleaning-brand fixture.
- Avoid legacy fixture residue: `Refillable Cleaning Co`, laundry strips, dish tabs, surface cleaners, Blueland-as-primary-competitor framing, `/collections/refillable-laundry`, and off-topic laundry examples.
- Avoid Field & Sun founder-rejected language in playbook examples and skills: `clean beauty`, `non-toxic`, `chemical-free`, `plastic-free`. If a voice constraint needs to be described, use neutral wording like "vague category language" or "unsupported safety claims."
- When reviewing a category, run a stale-language scan before finishing:

  ```sh
  rg -n "Refillable|Cleaning Co|laundry|clean beauty|non-toxic|chemical-free|plastic-free" playbook/
  ```

- For new examples, use facts from `businesses/field-and-sun/business_profile.md` and `businesses/field-and-sun/CLAUDE.md`: Daily Glow Serum, Mineral Sun Drops SPF 50, the complementary skincare lineup, Field & Sun's actual voice rules, current competitors, geography, goals, and artifact history.

### Unbuilt leaves

The playbook now uses flattened leaf pages: `playbook/<category>/<NN>. <Topic>.md`. Do not recreate per-leaf folders or `.gitkeep` placeholders. If a future leaf is explicitly added, create the Markdown page directly in the category folder and add its topic skills under `skills/<category-slug>/`.

## How to add a new category or topic

1. Read this file (you're here) and `templates/README_TEMPLATE.md` + `templates/SKILL_TEMPLATE.md`.
2. Read at least one full Strategy leaf for calibration.
3. Write the category overview README (at `playbook/NN. Category/README.md`) before the leaves — it forces you to think about how the leaves fit together.
4. For each leaf, write the topic page at `playbook/NN. Category/NN. Topic Name.md` first, then 1-2 skills under `skills/<category-slug>/<skill-name>/SKILL.md`. Don't write skills before the topic page — the page defines the shape of the work.
5. Cross-link to related topics in other categories (e.g. Internal Linking links to Topic Clusters and Site Architecture).
6. Update `skills/README.md` so the new skill appears under the right category / leaf and links back to the playbook page. Update root `README.md` only if the category structure changed (it shouldn't for v1).

## How to update the toolkit (vs. adding to it)

- Conventions changes → update this file *and* `templates/`. If the convention affects existing skills, refactor all of them (don't leave the toolkit half-old, half-new).
- Tone or format adjustments → re-read the Strategy slice first; if the change applies retroactively, apply it to the slice and document the reason in `CHANGELOG.md`.
- Adding a new business category to the v1 D2C-leaning examples → discuss with the user first; this is a vertical scope expansion, not a tweak.

## Future categories under consideration

These are categories the user has explicitly decided to defer rather than build now. Listed here so future agent sessions don't accidentally rebuild them, propose them as "missing," or forget they're parked. Revisit only when the user raises them or when the existing curriculum is mostly built.

- **Local SEO** — distinct discipline (Google Business Profile, citations, Local Pack, multi-location). Closes the "local services audience" gap. Not in scope for v1.
- **E-commerce SEO as a dedicated category** — currently spread across On-page/Technical/Content with D2C-leaning examples. May warrant consolidation later.
- **Video / YouTube SEO** — separate discipline; would expand toolkit scope beyond web search. Decide based on audience.
- **Newsletter SEO / discoverability** — promotion, search visibility, archive structure for newsletters as a content channel.
- **Podcast SEO / discoverability** — show metadata, episode SEO, transcripts, podcast-specific search platforms.

If the user asks "what's missing from this toolkit?" mention these are parked rather than missed. Don't reopen the decision unilaterally.

## Decisions log

All decisions are recorded in [`CHANGELOG.md`](CHANGELOG.md). Append new entries there — not here.

Format: `### YYYY-MM-DD — title`. Capture the decision, the reason, and what it means for future work. Keep entries terse — it's a why-log, not a task list.

## v1 toolkit inventory (as of 2026-05-02)

Current structural state for quick orientation. Update this table when categories or skills are added.

| | Count |
|---|---|
| Categories | 10 |
| Leaves | 63 |
| Category overview READMEs | 10 |
| Playbook skills | 73 |
| Setup skills (`generate-business-profile`) | 1 |
| **Total skills** | **74** |
| Sample businesses | 1 (Field & Sun) |
| `.gitkeep` files | 0 |

**Categories in learning-path order:** Strategy · On-page SEO · Technical SEO · Content SEO · Analytics · Off-page SEO · UX · International SEO · AI SEO · Growth.

The v1 structure is final. Don't add categories or leaves without explicit user direction. Future work is maintenance, depth additions within existing leaves, and the parked categories listed above.

## Learnings about working in this repo

*Add notes here as patterns emerge from working sessions. Keep terse. Useful for future agent sessions navigating the same repo.*

- The Strategy slice was built vertical-first (full slice before scaling) on purpose. When extending to new categories, do the same: complete one category before moving to the next, so format drift gets caught early.
- Examples reference the same fictional D2C brand throughout. New AI collaborators and human writers should reuse the same brand fixture rather than introducing new ones — keeps the toolkit feeling like one document, not 10.
