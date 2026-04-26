# SEO Toolkit

A working SEO operating system for business owners and marketers. Two layers in one repo:

1. **Knowledge** — a structured curriculum of modern SEO, organised by topic. Read the README in any folder to learn what that piece is, why it matters, and how to do it.
2. **Skills** — installable AI skills that plan, execute, or track the work for you. Each skill takes your `business_profile.md` as input and produces a tailored artifact.

The goal is that anyone running a business can go from "I should probably do SEO" to "here is my plan and here is my next deliverable" without hiring an agency.

---

## How to use this toolkit

### 1. Fill in your business profile

Open [`business_profile.md`](business_profile.md) and complete it. Every skill in this toolkit reads from this file — the more accurate it is, the sharper the output. Treat it as a living document and update it as your business changes.

### 2. Browse the curriculum

The `docs/` folder is the table of contents. It's organised into 10 categories:

| # | Category | What it covers |
|---|---|---|
| 01 | [Strategy](docs/01.%20Strategy/README.md) | Keyword research, intent, competitor analysis, clustering, quick wins |
| 02 | [On-page SEO](docs/02.%20On-page%20SEO/) | Titles, descriptions, headers, URLs, internal links, images, content |
| 03 | [Technical SEO](docs/03.%20Technical%20SEO/) | Crawlability, indexing, site speed, schema, canonicals, sitemaps |
| 04 | [Content SEO](docs/04.%20Content%20SEO/) | Blog content, pillars, clusters, tools, evergreen, programmatic, refresh |
| 05 | [Off-page SEO](docs/05.%20Off-page%20SEO/) | Link building, guest posting, digital PR, brand mentions, outreach |
| 06 | [International SEO](docs/06.%20International%20SEO/) | Hreflang, multi-language, geo-targeting, localisation |
| 07 | [Analytics](docs/07.%20Analytics/) | GA4, Search Console, rank tracking, traffic analysis, KPIs |
| 08 | [UX](docs/08.%20UX/) | Page speed, mobile, UX design, A/B testing, conversion funnels |
| 09 | [AI SEO](docs/09.%20AI%20SEO/) | Content optimisation, NLP, generative SEO, SERP features, LLM visibility |
| 10 | [Growth](docs/10.%20Growth/) | Topical authority, content scaling, link acquisition, experiments |

Each category folder has a `README.md` overview and 4-7 sub-topic folders, each with their own README and skills.

### 3. Run a skill

Skills live inside each topic folder under `skills/`. For example:

```
docs/01. Strategy/01. Keyword Research/
├── README.md
└── skills/
    ├── plan-keyword-research/
    │   └── SKILL.md
    └── generate-seed-keywords/
        └── SKILL.md
```

To use a skill, install it into Claude Code, Cowork, or any Claude product that supports skills, or paste its `SKILL.md` content into a chat with your business profile attached.

There are two archetypes:

- **Planner skills** scope a project and produce a brief or backlog you can run against.
- **Executor skills** generate a specific artifact — keyword lists, title-tag variants, schema, audit reports.

Skill names use kebab-case so they're easy to invoke (`plan-keyword-research`, `generate-seed-keywords`).

---

## A suggested learning path

If you're new to SEO, work through the toolkit in this order rather than jumping around:

1. **Strategy** (01) — establish what you're going after and why.
2. **On-page SEO** (02) — make the pages you already have rank better.
3. **Technical SEO** (03) — make sure search engines can actually find and index your work.
4. **Content SEO** (04) — build the inventory of pages that earn rankings.
5. **Analytics** (07) — measure what's working before you scale.
6. **Off-page SEO** (05) — earn the authority that compounds.
7. **UX** (08), **International** (06), **AI SEO** (09), **Growth** (10) — pick based on where your bottleneck is.

Each topic README ends with cross-links to related topics so you can follow the thread that matters most for your business.

---

## Designed for extensibility

The frameworks in this toolkit are business-model-agnostic. Examples currently lean toward D2C e-commerce because that's where v1 was sharpened, but the underlying playbooks apply to SaaS, services, marketplaces, and content businesses. Skills personalise their output by reading your `business_profile.md` — so a SaaS founder and a candle-maker get different keyword recommendations from the same skill.

To adapt the toolkit for a different business type, the simplest path is to maintain a separate `business_profile.md` per venture and let the skills do the rest.

---

## Templates

Building your own additions to the toolkit? Two templates to start from:

- [`templates/README_TEMPLATE.md`](templates/README_TEMPLATE.md) — for new topic READMEs.
- [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md) — for new skills.
