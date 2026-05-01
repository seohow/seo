# CLAUDE.md — Field & Sun

> Working memory for the SEO program for **Field & Sun**. Future AI collaborators read this to orient quickly. Keep entries terse and update as decisions, learnings, constraints, or priorities surface.
>
> **Note for readers:** Field & Sun is the canonical sample business that ships with this toolkit. The decisions, learnings, constraints, and experiments below are illustrative — they show what a healthy, populated working-memory file looks like after a few months of real SEO work. Treat them as worked examples, not as actual operational state.

## Quick context

- **Slug:** `field-and-sun`
- **Workspace created:** 2026-05-01
- **Last updated:** 2026-05-01
- **Active priorities (this quarter):**
  - Lift the **Mineral Sun Drops cluster** to top 5 before the May–August demand peak.
  - Ship **on-page rewrites** (title + description + H-structure + body) on the top 12 priority pages identified in the SEO Wins backlog.
  - Land **structured data** (Product, FAQPage, Breadcrumb) sitewide on PDPs and the Sun Care collection.
- **Recent artifacts of note:**
  - `clusters/cluster-map.md` — 28 clusters mapped across 6 hubs; sun-care hub is P0.
  - `competitor-analysis/audit-supergoop.md` — Supergoop has DR 71 vs our DR 28; head-to-head on transactional terms is unrealistic, but their "no-white-cast" content gap is wide open.
  - `backlog/seo-wins-backlog.md` — 38 items, top 10 sequenced for the next 90 days.

## Decisions log

*Append chronologically. Format: ### YYYY-MM-DD — title. Capture the decision, the reason, and what it means going forward.*

### 2026-04-12 — Picked "tinted mineral sunscreen" as the primary cluster for Q3

- Decision: focus the next quarter's content + on-page work on the tinted-mineral-sunscreen cluster (T03), not the higher-volume vitamin-C cluster.
- Reason: cluster-map analysis showed T03 has stronger intent fit for our hero product (Sun Drops) and lower domain-rating gap relative to the SERP top 5 (DR 28 ours vs DR 35 median for top 5 — vs DR 65+ for vitamin-C cluster).
- Implication for future work: title/description/header rewrites prioritise this cluster's keywords first; vitamin-C work moves to Q4.

### 2026-04-18 — Decided NOT to chase "best vitamin c serum" head term

- Decision: drop the head term "best vitamin c serum" (vol 49,500) from the active target list; pursue long-tail variants instead ("vitamin c serum for dark spots," "vitamin c serum sensitive skin," etc.).
- Reason: SERP top 10 is dominated by Wirecutter, NYT, Byrdie, The Strategist — we cannot out-resource them on commercial review content. Long-tail variants are ranking-attainable at our DR.
- Implication for future work: any commercial-intent content for vitamin C should target a specific persona or use case, never the head term.

### 2026-04-24 — Approved Supergoop competitor-audit findings; building "no-white-cast" content cluster

- Decision: ship a 6-post content cluster around "mineral SPF that doesn't leave a white cast" using own-product testing photography on a range of skin tones. Pillar: existing PDP. Spokes: 5 new posts.
- Reason: Supergoop and ILIA both rank for these queries but the content is generic / not visually evidenced. Our brand-distinct angle (own product photography on real skin tones) is differentiable and customer-resonant.
- Implication: content writer brief locked in; first post ships May 2026. Internal linking plan updated to feed into Sun Drops PDP.

## Learnings

*What we've discovered works (or doesn't) for this specific business. Keep terse — one bullet per learning.*

- **Shopify auto-canonical strips trailing slashes inconsistently** — we keep finding pages where the meta canonical drops a trailing slash that the live URL has. Forced a sitewide audit after canonical-related GSC errors. Recommend re-checking canonicals after every theme update.
- **Customer-language test: "sunscreen" outperforms "SPF" in titles by ~30% CTR** — counter to the assumption that SEO-savvy customers prefer the shorter "SPF" form. Confirmed with three A/B tests on PDPs and blog titles. We now lead with "sunscreen" and use "SPF" as a clarifier.
- **Refill content earns lower-volume but higher-intent traffic** — refill-related queries are ~10x lower volume than the parent product queries, but conversion rate on refill-content visitors is ~4x higher. The cluster pays for itself despite low traffic numbers.
- **FAQ schema lifts mobile CTR more than desktop** — across 5 PDPs that gained FAQ schema in March, mobile CTR rose ~12%, desktop ~3%. Worth weighting the mobile-experience treatment of FAQs accordingly.
- **Wirecutter is unbeatable on head-term commercial SERPs** — confirmed across multiple priority queries. We win adjacent angles, long-tail variants, and brand-distinct content; we don't try to match Wirecutter's review depth.

## Constraints / quirks

*Things that keep coming up and should be respected without re-asking. Brand guardrails, CMS limits, founder preferences, market quirks, regulatory edges.*

- **Founder strongly rejects "clean beauty" / "non-toxic" / "chemical-free" framing** — these terms test poorly with the ingredient-literate customer and are scientifically imprecise. Use ingredient specifics ("non-nano zinc oxide," "L-ascorbic acid at 15%") instead. This has been reinforced in three separate content reviews.
- **Sun Drops cannot be marketed with medical/dermatological claims** — FDA-regulated as an OTC drug; copy must stick to "broad spectrum SPF 50" and avoid "prevents skin damage" / "anti-aging" / "treats." Compliance reviews any new copy.
- **Shopify Sense theme has limited PDP template flexibility** — adding new schema or restructuring sections requires either Liquid edits (which we don't have dev capacity for) or paid app integrations. Plan structured-data work around this constraint.
- **Inventory pressure during May–August on Sun Drops** — content/marketing pushes that drive demand spikes have to be coordinated with the ops team; aggressive SEO content launches in April-May need ops sign-off to avoid stockouts.
- **EU customer base is small but vocal about packaging** — refill-pouch content needs to be regulatory-aware for EU readers (recyclability claims must align with local rules).

## Active experiments

*Tests in flight. Format: ### YYYY-MM-DD started — title.*

### 2026-04-15 started — FAQPage schema on top 10 PDPs

- Hypothesis: adding FAQPage structured data to PDPs lifts both rich-result eligibility and CTR for product-page queries.
- Variant(s): top 10 PDPs by traffic get FAQPage schema; remaining ~14 PDPs are control.
- Measuring: rich-result appearance in GSC + click-through-rate change at 30 and 60 days.
- Status: running. 30-day check shows 4 of 10 treated PDPs gained rich results in SERP; CTR +12% mobile / +3% desktop on those 4. Will hold until 60-day mark before deciding to roll out across remaining PDPs.

### 2026-04-22 started — Bundle PDP H1/title experiment

- Hypothesis: leading with the customer outcome ("Your everyday-skin routine") instead of the product list ("Cleanser + Serum + SPF Bundle") in title/H1 lifts add-to-cart rate without hurting SEO rankings.
- Variant(s): outcome-led title on the Routine Bundle PDP only; product-list title on individual product pages (control).
- Measuring: add-to-cart rate, conversion rate, position in GSC for the cluster's keywords.
- Status: running. 14-day data inconclusive — wait until 30-day mark.

## How AI collaborators should update this file

This file is maintained by AI collaborators as a side-effect of working in this workspace. Specific update rules:

- **Decision made by the user that affects future SEO work** → append to **Decisions log**. Examples: "we'll prioritise the laundry cluster over dish for Q3," "deferred link building until after the rebrand," "the SEO Wins backlog top 5 are owned by the founder, not the marketer."
- **Non-obvious learning about this business surfaces in conversation or in artifact analysis** → add a bullet to **Learnings**. Examples: "Wirecutter dominates our top 10 commercial SERPs head-to-head — we should focus on adjacent angles instead," "blog refresh ROI here is much higher than new content (probably because indexed depth is shallow)."
- **User reinforces a preference or hits a constraint twice or more** → add to **Constraints / quirks**. Examples: "founder dislikes the word 'sustainable'," "Shopify theme doesn't allow per-product canonical overrides," "this brand sells only in EU markets — no US examples in outputs."
- **An experiment starts** → add to **Active experiments**. **Concludes** → update status with verdict.
- **Active priorities shift** → update **Quick context > Active priorities**. Don't delete the previous list silently — note the shift in **Decisions log** so future sessions see why.

What *not* to log here:

- Routine actions ("ran keyword research today"). The artifact files are the record of what was produced — don't duplicate.
- Anything already obvious from `business_profile.md` (the profile is the source of truth for static facts).
- Speculative ideas that haven't been decided. Use Active experiments only after something is actually being tested.

When updating, also bump **Quick context > Last updated**. Keep the file under ~150 lines — if it's growing past that, the older entries can be archived to `archive/CLAUDE-<YYYY-Q>.md` in the same workspace folder, with the live file holding only the current quarter.

## How the user can interact with this file

You don't have to manually edit this file — the AI collaborator maintains it. But if you want to:

- **Add something explicitly** → tell the AI collaborator "log this in CLAUDE.md: [entry]" and it will append to the right section.
- **Correct or remove an entry** → tell the AI collaborator "remove the entry about [X]" and it will edit accordingly.
- **Review the running state** → just open the file. The Quick context section is designed to give you the current state at a glance.
