# Business Profile (template)

This is the template the `generate-business-profile` skill uses to interview you. You don't normally edit this file directly — instead, run the skill and it will produce a filled-in copy at `businesses/<your-business-slug>/business_profile.md`.

Editing this template directly only makes sense if you want to change the questions the toolkit asks across all businesses (e.g. add a section that's specific to your industry).

Every skill in the toolkit reads the per-business profile file produced from this template, so the output of those skills is tailored to a specific business rather than generic.

---

## 1. Identity

- **Business name:**
- **Website URL:**
- **One-line description** (what you sell, to whom):
- **Year founded:**
- **Team size (people working on SEO/marketing):**

## 2. Business model

- **Type:** _e.g. D2C e-commerce, SaaS, marketplace, local services, B2B services, content/media, hybrid_
- **Primary revenue source:** _e.g. product sales, subscription, lead gen, ads_
- **Average order value (AOV) or contract value:**
- **Gross margin %:**
- **Sales cycle length:** _e.g. instant for D2C, 14-90 days for B2B_

## 3. Products / services

List your main product or service categories. For each, note the 1-2 hero items.

- **Category 1:**
  - Hero items:
- **Category 2:**
  - Hero items:
- **Category 3:**
  - Hero items:

## 4. Customer

- **Primary customer description** (who they are, what they care about):
- **Top 3 customer pains your product solves:**
  1.
  2.
  3.
- **Top 3 questions customers ask before buying:**
  1.
  2.
  3.
- **Geographic markets** (countries / regions you ship or sell to):
- **Languages you operate in:**

## 5. Current SEO state

- **Monthly organic sessions** (last 30 days, from GA / GSC):
- **Indexed pages** (from Google Search Console):
- **Domain rating / authority** (from Ahrefs / Moz / Semrush, if known):
- **Top 5 ranking keywords** (and current position):
  1.
  2.
  3.
  4.
  5.
- **Top 5 highest-traffic landing pages:**
  1.
  2.
  3.
  4.
  5.
- **Tools you have access to:** _e.g. GSC, GA4, Ahrefs, Semrush, Screaming Frog, Shopify, WordPress, Webflow_
- **CMS / platform:** _e.g. Shopify, WooCommerce, Webflow, custom Next.js_

## 6. Competitors

List 3-5 competitors you'd like to outrank or learn from. Mix direct competitors (same product) with indirect ones (same customer, different product).

- **Direct competitor 1** (URL):
- **Direct competitor 2** (URL):
- **Direct competitor 3** (URL):
- **Indirect / aspirational** (URL):
- **Content competitor** _publishers / blogs ranking for your target topics_ (URL):

## 7. Goals

- **Primary SEO goal for the next 6 months:** _e.g. 2x organic revenue, rank top 3 for "X", launch programmatic SEO for collections_
- **Secondary goal:**
- **Constraints** _budget, dev resources, content production capacity_:

## 8. Brand voice / editorial guardrails

- **Tone:** _e.g. confident and playful, expert and clinical, warm and conversational_
- **Words / phrases to avoid:**
- **Words / phrases that are on-brand:**
- **Style references** (URLs of pages whose tone you'd like to emulate):

---

## How skills use this

When you run a skill in this toolkit, it will:

1. Look in `businesses/` for one or more business folders. If only one exists, it uses that profile by default; if multiple, it asks which business you're working on.
2. Read `businesses/<business-slug>/business_profile.md` and use the relevant sections to tailor its output. A keyword research skill cares most about sections 3, 4, 6, 7. A title-tag skill cares most about 3, 4, 8.
3. If a section is blank in the profile, the skill will either ask for it or note that the output is generic in that respect.
4. Save its output as a new file inside `businesses/<business-slug>/<artifact-subfolder>/`, so all work for a given business stays colocated.

Keep your business profile updated. The fresher the profile, the sharper the output. To update it, re-run the `generate-business-profile` skill in update mode.
