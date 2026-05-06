# SEO Toolkit

A working SEO operating system for business owners and marketers. Three layers in one repo:

1. **Knowledge** — a structured curriculum of modern SEO, organised by topic. Read the README in any folder to learn what that piece is, why it matters, and how to do it.
2. **Skills** — installable AI skills that plan, execute, or track the work for you. Each skill reads your business profile from `businesses/<your-business-slug>/` and produces a tailored artifact saved into the same workspace.
3. **Memory** — `AGENTS.md` at the repo root and inside each business workspace, with `CLAUDE.md` symlinks for compatibility. They capture conventions, decisions, learnings, and constraints so the toolkit gets sharper over time and so any new AI collaborator has the context it needs to be useful immediately.

The goal is that anyone running a business can go from "I should probably do SEO" to "here is my plan and here is my next deliverable" without hiring an agency.

---

## How to use this toolkit

### 1. Set up your business workspace

Run the [`business-profile`](skills/business-profile/SKILL.md) skill. It will quick-start the minimum useful profile, slugify a folder name, and create the core workspace files:

- `businesses/<your-business-slug>/business_profile.md` — the structured profile every other skill reads.
- `businesses/<your-business-slug>/AGENTS.md` — the working-memory file AI collaborators maintain as decisions, learnings, and constraints surface over time.
- `businesses/<your-business-slug>/CLAUDE.md` — a compatibility symlink pointing to `AGENTS.md`.

If you run SEO for multiple ventures, run the skill once per business. Each gets its own folder; skills will ask which business to operate on if more than one exists.

Update the profile any time something material changes (new product line, new goal, new competitor) by re-running the same skill in Patch mode. Run Gap Check when you want to see which missing fields are worth filling next. `AGENTS.md` is preserved across profile updates.

### 2. Browse the curriculum

The [`playbook/`](playbook/README.md) folder is the curriculum. Start with the [playbook README](playbook/README.md) for an intro to SEO and how the categories fit together, or jump straight to a category below:

| # | Category | What it covers |
|---|---|---|
| 01 | [Strategy](playbook/01.%20Strategy/README.md) | Keyword research, intent, competitor analysis, clustering, quick wins |
| 02 | [On-page SEO](playbook/02.%20On-page%20SEO/README.md) | Titles, descriptions, headers, URLs, internal links, images, content |
| 03 | [Technical SEO](playbook/03.%20Technical%20SEO/README.md) | Crawlability, indexing, site speed, schema, canonicals, sitemaps, JavaScript SEO, log file analysis, site migration, AI crawler management |
| 04 | [Content SEO](playbook/04.%20Content%20SEO/README.md) | Blog content, pillars, clusters, tools, evergreen, programmatic, refresh, briefing |
| 05 | [Analytics](playbook/05.%20Analytics/README.md) | GA4, Search Console, rank tracking, traffic analysis, KPIs, conversion tracking |
| 06 | [Off-page SEO](playbook/06.%20Off-page%20SEO/README.md) | Link building, guest posting, digital PR, brand mentions, outreach, HARO, broken-link building, reputation management |
| 07 | [UX](playbook/07.%20UX/README.md) | Page speed, mobile, UX design, A/B testing, conversion funnels, accessibility |
| 08 | [International SEO](playbook/08.%20International%20SEO/README.md) | Hreflang, multi-language, geo-targeting, localisation |
| 09 | [AI SEO](playbook/09.%20AI%20SEO/README.md) | Content optimisation, NLP, generative SEO, SERP features, LLM visibility |
| 10 | [Growth](playbook/10.%20Growth/README.md) | Topical authority, content scaling, link acquisition, experiments |

Each category folder has a `README.md` overview and one Markdown page per leaf topic. The runnable skills live in the root [`skills/`](skills/README.md) package and are linked from the relevant playbook pages.

### 3. Run a skill

There are two kinds of skills in this toolkit:

- **Setup skills** live at the top level of `skills/`. Today the only one is `business-profile`, but more meta utilities can land there over time.
- **Topic skills** live under registry-friendly category folders in `skills/<category-slug>/<skill-name>/`. For example:

```
skills/
├── README.md
├── business-profile/
│   └── SKILL.md
└── strategy/
    ├── plan-keyword-research/
    │   └── SKILL.md
    └── generate-seed-keywords/
        └── SKILL.md
```

To install skills with [skills.sh](https://skills.sh), use `npx skills add`:

```sh
npx skills add seohow/seo
```

That installs the setup skill, `business-profile`, so you can create your business workspace first.

To install every skill under a category, include the category slug:

```sh
npx skills add seohow/seo/strategy
npx skills add seohow/seo/on-page
npx skills add seohow/seo/technical
```

To install one specific skill from a category, pass `--skill` with the skill folder name:

```sh
npx skills add seohow/seo/strategy --skill plan-keyword-research
```

Supported category slugs are `strategy`, `on-page`, `technical`, `content`, `analytics`, `off-page`, `ux`, `international`, `ai`, and `growth`. You can also paste a skill's `SKILL.md` content into a chat with your business profile attached if your AI environment does not support skill installation.

Topic skills come in two archetypes:

- **Planner skills** scope a project and produce a brief or backlog you can run against.
- **Executor skills** generate a specific artifact — keyword lists, title-tag variants, schema, audit reports.

Every topic skill saves its output into your business workspace at `businesses/<your-business-slug>/<artifact-subfolder>/`, so all the work for a given venture stays together. See [`businesses/README.md`](businesses/README.md) for the full workspace convention.

Skill names use kebab-case so they're easy to invoke (`plan-keyword-research`, `generate-seed-keywords`).

---

## A suggested learning path

If you're new to SEO, work through the toolkit in this order rather than jumping around:

1. **Strategy** (01) — establish what you're going after and why.
2. **On-page SEO** (02) — make the pages you already have rank better.
3. **Technical SEO** (03) — make sure search engines can actually find and index your work.
4. **Content SEO** (04) — build the inventory of pages that earn rankings.
5. **Analytics** (05) — measure what's working before you scale.
6. **Off-page SEO** (06) — earn the authority that compounds.
7. **UX** (07), **International** (08), **AI SEO** (09), **Growth** (10) — pick based on where your bottleneck is.

Each topic README ends with cross-links to related topics so you can follow the thread that matters most for your business.

---

## Designed for extensibility

The frameworks in this toolkit are business-model-agnostic. Examples currently lean toward D2C e-commerce because that's where v1 was sharpened, but the underlying playbooks apply to SaaS, services, marketplaces, and content businesses. Skills personalise their output by reading the business profile in your workspace — so a SaaS founder and a candle-maker get different keyword recommendations from the same skill.

To work on multiple businesses, register each one with `business-profile`. They'll each live in their own folder under `businesses/`, with profile and artifacts kept colocated so nothing leaks between ventures.

---

## Templates

Building your own additions to the toolkit? Two templates to start from:

- [`templates/README_TEMPLATE.md`](templates/README_TEMPLATE.md) — for new topic READMEs.
- [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md) — for new skills.

---

## Releasing skills

Skills are released as individual ZIP files so they can be uploaded one at a time to Claude, ChatGPT, or another Agent Skills-compatible environment. The release output keeps the setup/category/skill folder structure for human navigation:

```text
releases/
└── v1.0.0/
    ├── manifest.json
    ├── checksums.txt
    ├── setup/
    │   └── business-profile/
    │       └── business-profile-v1.0.0.zip
    └── categories/
        └── strategy/
            └── plan-keyword-research/
                └── plan-keyword-research-v1.0.0.zip
```

Each ZIP still contains exactly one skill folder at the archive root, which is the uploadable unit:

```text
plan-keyword-research-v1.0.0.zip
└── plan-keyword-research/
    └── SKILL.md
```

### Release flow

```sh
git tag v0.1.0-alpha.1
git push origin v0.1.0-alpha.1
```

This assumes the source changes for the release have already been committed. Pushing a `v*` tag is the release trigger: GitHub Actions validates the skills, packages the browsable release tree, uploads it as a workflow artifact, and creates or updates the GitHub Release for the tag. Versions containing `alpha`, `beta`, or `rc` are marked as GitHub prereleases automatically.

Use local packaging only as a preflight check:

```sh
npm run skills:validate -- --strict-platform
npm run skills:package -- --version 0.1.0-alpha.1 --output /private/tmp/seo-skill-release-check
```

Generated `releases/v*/` folders are ignored locally; the canonical released artifacts live on the GitHub Release created by CI. Do not create the GitHub Release separately with `gh release create` unless the workflow is unavailable and you are intentionally doing a manual recovery.

The layout is controlled by [`release.config.json`](release.config.json). See [`releases/README.md`](releases/README.md) for the release checklist and GitHub Actions workflow notes.
