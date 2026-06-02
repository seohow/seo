# SEO Toolkit Skills

This is the distributable skills library for the SEO toolkit: a practical set of AI workflows for planning, executing, auditing, and measuring SEO work for a real business.

The wider playbook explains the SEO concepts. This `skills/` package contains the runnable workflows. Each category folder below has its own README with the skills for that part of the playbook.

## Install

Install the setup skills first:

```sh
npx skills add seohow/seo
```

Install a whole category by adding its slug:

```sh
npx skills add seohow/seo/strategy
```

Install one skill from a category with `--skill`:

```sh
npx skills add seohow/seo/strategy --skill plan-keyword-research
```

## Start Here

| Skill | Description |
|---|---|
| [business-context](business-context/SKILL.md) | Creates and maintains `businesses/<slug>/business_context.md` — the company-wide AI context file used by SEO and non-SEO skills. Run this first for new businesses, products, service lines, or parent-company workspaces. |
| [seo-foundation](seo-foundation/SKILL.md) | Creates and maintains `businesses/<slug>/seo_foundation.md` — the SEO-specific layer that references the business context and captures goals, baseline, search competitors, platform, and priorities. Run this before topic SEO skills. |
| [business-profile](business-profile/SKILL.md) | Legacy migration helper for old `business_profile.md` workspaces. Use it to split an existing all-in-one profile into `business_context.md` and `seo_foundation.md`. |

After that, work through the categories in order if you are building an SEO program from scratch, or jump to the category that matches the problem in front of you.

## Categories

| Category | What It Covers |
|---|---|
| [Strategy](strategy/README.md) | Decide what to target, why it matters, who is already winning, and which SEO opportunities should ship first. |
| [On-page](on-page/README.md) | Turn strategy into page-level changes: titles, descriptions, headers, URLs, internal links, images, and body copy. |
| [Technical](technical/README.md) | Make sure search engines and AI crawlers can discover, crawl, render, index, and serve the site cleanly and quickly. |
| [Content](content/README.md) | Plan and brief the new pages that fill out the keyword map: blogs, pillars, clusters, tools, evergreen assets, programmatic templates, and refreshes. |
| [Analytics](analytics/README.md) | Set up trustworthy measurement, diagnose performance, connect SEO work to revenue, and define the reporting cadence. |
| [Off-page](off-page/README.md) | Earn authority outside the site through links, PR, outreach, brand mentions, journalist responses, and reputation work. |
| [UX](ux/README.md) | Improve the experience after the organic click so traffic can convert: speed, mobile, accessibility, funnels, design, and testing. |
| [International](international/README.md) | Plan and audit multi-market SEO: Hreflang, language architecture, geo-targeting, and localisation. |
| [AI](ai/README.md) | Structure content and entity signals so AI-mediated search systems can understand, cite, and recommend the brand. |
| [Growth](growth/README.md) | Move from baseline SEO operations to compounding growth through topical authority, content scaling, link acquisition, and experiments. |
