# Businesses

This folder is the working workspace for every business you run SEO for. Each business gets its own subfolder. All inputs (business context and SEO foundation) and all outputs (artifacts produced by skills — keyword lists, competitor audits, cluster maps, backlogs) live inside that subfolder.

## Convention

```
businesses/
├── README.md                          ← you are here
└── <business-slug>/                   ← one folder per business
    ├── business_context.md            ← company-wide AI context (created by business-context)
    ├── seo_foundation.md              ← SEO-specific context (created by seo-foundation)
    ├── AGENTS.md                      ← working memory for this business (decisions, learnings, quirks)
    ├── CLAUDE.md                      ← symlink → AGENTS.md (for Claude-specific workflows)
    ├── keyword-research/
    │   ├── plan.md                    ← from plan-keyword-research
    │   └── seed-keywords.md           ← from generate-seed-keywords
    ├── intent-classification/
    │   └── classified-keywords.md     ← from classify-keyword-intent
    ├── competitor-analysis/
    │   ├── plan.md                    ← from scope-competitor-analysis
    │   └── audit-<competitor-slug>.md ← from audit-competitor-seo (one per competitor)
    ├── clusters/
    │   └── cluster-map.md             ← from cluster-keywords
    └── backlog/
        └── seo-wins-backlog.md        ← from build-seo-wins-backlog
```

Sub-folders are created on demand by the skills that produce artifacts. You don't need to create them upfront — running the relevant skill will populate the right path.

`business_context.md` and `AGENTS.md` are created up-front by `business-context`, along with a `CLAUDE.md` symlink that points to `AGENTS.md`. `seo_foundation.md` is created by `seo-foundation` once the company-wide context exists. `business_context.md` is the durable source for company facts; `seo_foundation.md` is the search-specific layer. `AGENTS.md` is the *working memory* for the business — decisions, learnings, constraints, and active experiments that accumulate over time. Any AI collaborator reads it to orient quickly and updates it as new context surfaces. You don't have to manage it manually, but you can — it's a normal Markdown file. See `skills/business-context/templates/business_agents_template.md` for the structure.

## Naming

Business slugs are kebab-case versions of the business name, with no special characters or whitespace. Examples:

- "Field & Sun" → `field-and-sun`
- "Acme SaaS" → `acme-saas`
- "Joe's Plumbing" → `joes-plumbing`

The `business-context` skill handles slugification automatically. If you create a business folder by hand, follow the same pattern.

## Working with multiple businesses

Two patterns are supported:

1. **One business at a time.** If only one folder exists, every skill defaults to that business — no need to specify each time.
2. **Multiple businesses.** When more than one folder exists, every skill will ask which business to operate on at the start of the interaction. To make a particular business the default for a session, mention it in your first message ("for field-and-sun, ...") and the skills will pick it up.

## Privacy and version control

Business context and SEO foundation files often contain commercial-sensitive information (keyword strategy, competitor lists, current performance). If you're versioning this repo:

- Add `businesses/` to your `.gitignore` if the repo is shared, *or*
- Use a separate private repo for the `businesses/` folder, *or*
- Keep this repo private end-to-end.

The toolkit doesn't enforce this — it's your call based on context.

## Getting started

If `businesses/` is empty, run the `business-context` skill first. It will interview you for the necessary company-wide inputs, slugify a folder name, and create the workspace. Then run `seo-foundation` to add the search-specific layer before using topic SEO skills.
