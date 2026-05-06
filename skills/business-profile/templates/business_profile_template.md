# Business Profile — [Business Name]

*Created: [YYYY-MM-DD]*
*Last updated: [YYYY-MM-DD]*
*Slug: `<slug>`*
*Profile completeness: [quick-start / partial / full]*

This is the template the `business-profile` skill uses to create and iteratively update `businesses/<your-business-slug>/business_profile.md`. The profile is a living document: Quick Start fills the minimum viable fields, Patch mode updates specific sections later, and Gap Check ranks missing fields by downstream impact.

Editing this template directly only makes sense if you want to change the profile contract across all businesses.

Every omitted field in a generated profile must be marked `_(unknown — not yet captured; add via Patch mode)_`. Do not leave fields blank. Every skill in the toolkit reads the per-business profile file produced from this template, so the output of those skills is tailored to a specific business rather than generic.

---

## 1. Identity

- **Business name:** [Business Name]
- **Website URL:** [URL]
- **One-line description** (what you sell, to whom): [one sentence]
- **Year founded:** _(unknown — not yet captured; add via Patch mode)_
- **Team size (people working on SEO/marketing):** _(unknown — not yet captured; add via Patch mode)_

## 2. Business model

- **Type:** [e.g. D2C e-commerce, SaaS, marketplace, local services, B2B services, content/media, hybrid]
- **Primary revenue source:** _(unknown — not yet captured; add via Patch mode)_
- **Average order value (AOV) or contract value:** _(unknown — not yet captured; add via Patch mode)_
- **Gross margin %:** _(unknown — not yet captured; add via Patch mode)_
- **Sales cycle length:** _(unknown — not yet captured; add via Patch mode)_

## 3. Products / services

List your main product or service categories. For each, note the 1-2 hero items.

- **Category 1:** [category name]
  - Hero items: [name + one-sentence description]
- **Category 2:** _(unknown — not yet captured; add via Patch mode)_
  - Hero items: _(unknown — not yet captured; add via Patch mode)_
- **Category 3:** _(unknown — not yet captured; add via Patch mode)_
  - Hero items: _(unknown — not yet captured; add via Patch mode)_

## 4. Customer

- **Primary customer description** (who they are, what they care about): [one sentence]
- **Top 3 customer pains your product solves:**
  1. [customer-language pain]
  2. _(unknown — not yet captured; add via Patch mode)_
  3. _(unknown — not yet captured; add via Patch mode)_
- **Top 3 questions customers ask before buying:**
  1. _(unknown — not yet captured; add via Patch mode)_
  2. _(unknown — not yet captured; add via Patch mode)_
  3. _(unknown — not yet captured; add via Patch mode)_
- **Geographic markets** (countries / regions you ship or sell to): _(unknown — not yet captured; add via Patch mode)_
- **Languages you operate in:** _(unknown — not yet captured; add via Patch mode)_

## 5. Current SEO state

- **Monthly organic sessions** (last 30 days, from GA / GSC): _(unknown — not yet captured; add via Patch mode)_
- **Indexed pages** (from Google Search Console): _(unknown — not yet captured; add via Patch mode)_
- **Domain rating / authority** (from Ahrefs / Moz / Semrush, if known): _(unknown — not yet captured; add via Patch mode)_
- **Top 5 ranking keywords** (and current position):
  1. _(unknown — not yet captured; add via Patch mode)_
  2. _(unknown — not yet captured; add via Patch mode)_
  3. _(unknown — not yet captured; add via Patch mode)_
  4. _(unknown — not yet captured; add via Patch mode)_
  5. _(unknown — not yet captured; add via Patch mode)_
- **Top 5 highest-traffic landing pages:**
  1. _(unknown — not yet captured; add via Patch mode)_
  2. _(unknown — not yet captured; add via Patch mode)_
  3. _(unknown — not yet captured; add via Patch mode)_
  4. _(unknown — not yet captured; add via Patch mode)_
  5. _(unknown — not yet captured; add via Patch mode)_
- **Tools you have access to:** _(unknown — not yet captured; add via Patch mode)_
- **CMS / platform:** _(unknown — not yet captured; add via Patch mode)_

## 6. Competitors

List 3-5 competitors you'd like to outrank or learn from. Mix direct competitors (same product) with indirect ones (same customer, different product).

- **Direct competitor 1** (URL): _(unknown — not yet captured; add via Patch mode)_
- **Direct competitor 2** (URL): _(unknown — not yet captured; add via Patch mode)_
- **Direct competitor 3** (URL): _(unknown — not yet captured; add via Patch mode)_
- **Indirect / aspirational** (URL): _(unknown — not yet captured; add via Patch mode)_
- **Content competitor** _publishers / blogs ranking for your target topics_ (URL): _(unknown — not yet captured; add via Patch mode)_

## 7. Goals

- **Primary SEO goal for the next 6 months:** [concrete goal]
- **Secondary goal:** _(unknown — not yet captured; add via Patch mode)_
- **Constraints** _budget, dev resources, content production capacity_: _(unknown — not yet captured; add via Patch mode)_

## 8. Brand voice / editorial guardrails

- **Tone:** _(unknown — not yet captured; add via Patch mode)_
- **Words / phrases to avoid:** _(unknown — not yet captured; add via Patch mode)_
- **Words / phrases that are on-brand:** _(unknown — not yet captured; add via Patch mode)_
- **Style references** (URLs of pages whose tone you'd like to emulate): _(unknown — not yet captured; add via Patch mode)_

---

## How skills use this

When you run a skill in this toolkit, it will:

1. Look in `businesses/` for one or more business folders. If only one exists, it uses that profile by default; if multiple, it asks which business you're working on.
2. Read `businesses/<business-slug>/business_profile.md` and use the relevant sections to tailor its output. A keyword research skill cares most about sections 3, 4, 6, 7. A title-tag skill cares most about 3, 4, 8.
3. If a section is marked `unknown — not yet captured`, the skill will either ask for it or note that the output is generic in that respect.
4. Save its output as a new file inside `businesses/<business-slug>/<artifact-subfolder>/`, so all work for a given business stays colocated.

Keep your business profile updated. The fresher the profile, the sharper the output. To update it, re-run the `business-profile` skill in Patch mode; to decide what to fill next, run Gap Check.
