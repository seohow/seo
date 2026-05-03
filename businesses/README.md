# Businesses

This folder is the working workspace for every business you run SEO for. Each business gets its own subfolder. All inputs (the business profile) and all outputs (artifacts produced by skills — keyword lists, competitor audits, cluster maps, backlogs) live inside that subfolder.

## Convention

```
businesses/
├── README.md                          ← you are here
└── <business-slug>/                   ← one folder per business
    ├── business_profile.md            ← the input profile (created by generate-business-profile)
    ├── CLAUDE.md                      ← working memory for this business (decisions, learnings, quirks)
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

`business_profile.md` and `CLAUDE.md` are both created up-front by `generate-business-profile`. The profile is the structured input the skills consume; CLAUDE.md is the *working memory* for the business — decisions, learnings, constraints, and active experiments that accumulate over time. Future AI collaborators read CLAUDE.md to orient quickly and update it as new context surfaces. You don't have to manage it manually, but you can — it's a normal Markdown file. See `skills/generate-business-profile/templates/business_claude_template.md` for the structure.

## Naming

Business slugs are kebab-case versions of the business name, with no special characters or whitespace. Examples:

- "Field & Sun" → `field-and-sun`
- "Acme SaaS" → `acme-saas`
- "Joe's Plumbing" → `joes-plumbing`

The `generate-business-profile` skill handles slugification automatically. If you create a business folder by hand, follow the same pattern.

## Working with multiple businesses

Two patterns are supported:

1. **One business at a time.** If only one folder exists, every skill defaults to that business — no need to specify each time.
2. **Multiple businesses.** When more than one folder exists, every skill will ask which business to operate on at the start of the interaction. To make a particular business the default for a session, mention it in your first message ("for field-and-sun, ...") and the skills will pick it up.

## Privacy and version control

Business profiles often contain commercial-sensitive information (keyword strategy, competitor lists, current performance). If you're versioning this repo:

- Add `businesses/` to your `.gitignore` if the repo is shared, *or*
- Use a separate private repo for the `businesses/` folder, *or*
- Keep this repo private end-to-end.

The toolkit doesn't enforce this — it's your call based on context.

## Getting started

If `businesses/` is empty, run the `generate-business-profile` skill first. It will interview you for the necessary inputs, slugify a folder name, and create the workspace. After that, every other skill in the toolkit becomes usable for that business.
