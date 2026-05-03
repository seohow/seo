# SEO Toolkit

A working SEO operating system for business owners and marketers. Three layers in one repo:

1. **Knowledge** — a structured curriculum of modern SEO, organised by topic. Read the README in any folder to learn what that piece is, why it matters, and how to do it.
2. **Skills** — installable AI skills that plan, execute, or track the work for you. Each skill reads your business profile from `businesses/<your-business-slug>/` and produces a tailored artifact saved into the same workspace.
3. **Memory** — `AGENTS.md` at the repo root and `CLAUDE.md` files inside each business workspace. They capture conventions, decisions, learnings, and constraints so the toolkit gets sharper over time and so any new AI collaborator has the context it needs to be useful immediately.

The goal is that anyone running a business can go from "I should probably do SEO" to "here is my plan and here is my next deliverable" without hiring an agency.

---

## How to use this toolkit

### 1. Set up your business workspace

Run the [`generate-business-profile`](skills/generate-business-profile/SKILL.md) skill. It will interview you for the inputs, slugify a folder name, and create two files in your new workspace:

- `businesses/<your-business-slug>/business_profile.md` — the structured profile every other skill reads.
- `businesses/<your-business-slug>/CLAUDE.md` — the working-memory file AI collaborators maintain as decisions, learnings, and constraints surface over time.

If you run SEO for multiple ventures, run the skill once per business. Each gets its own folder; skills will ask which business to operate on if more than one exists.

Update the profile any time something material changes (new product line, new goal, new competitor) by re-running the same skill in update mode. The CLAUDE.md file is preserved across updates — only the profile gets refreshed.

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

- **Setup skills** live at the top level of `skills/`. Today the only one is `generate-business-profile`, but more meta utilities can land there over time.
- **Topic skills** live under registry-friendly category folders in `skills/<category-slug>/<skill-name>/`. For example:

```
skills/
├── README.md
├── generate-business-profile/
│   └── SKILL.md
└── strategy/
    ├── plan-keyword-research/
    │   └── SKILL.md
    └── generate-seed-keywords/
        └── SKILL.md
```

To use a skill, install it into an AI coding/workflow environment that supports skills, or paste its `SKILL.md` content into a chat with your business profile attached.

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

To work on multiple businesses, register each one with `generate-business-profile`. They'll each live in their own folder under `businesses/`, with profile and artifacts kept colocated so nothing leaks between ventures.

---

## Templates

Building your own additions to the toolkit? Two templates to start from:

- [`templates/README_TEMPLATE.md`](templates/README_TEMPLATE.md) — for new topic READMEs.
- [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md) — for new skills.
