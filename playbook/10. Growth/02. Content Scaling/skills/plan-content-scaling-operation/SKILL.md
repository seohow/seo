---
name: plan-content-scaling-operation
description: Produces an operational plan to scale content production volume from current to target without compromising quality, brand voice, or strategic focus. Audits the current content production pipeline (topic selection, brief production, first draft, editorial review, brand-voice review, technical SEO review, publish, promotion), identifies the actual bottleneck (usually not writer count — often brief production, editorial review, or technical SEO review), and produces a scaling plan covering brief template upgrades, writer-bench design, tiered editorial review, standalone brand-voice review, technical SEO review checklist, promotion bandwidth, refresh allocation, cadence, and a 90-day rollout sequence. Includes cost estimate and quarterly KPI rubric (volume, quality pass rates, cycle time, cost). Use whenever the user asks to "scale content production," "go from N posts/month to M posts/month," "hire writers," "content production system," "scaling without quality regression," "content operations plan," "build a content team," or has a topical-authority plan that requires production capacity beyond current. Also use as quarterly cadence once the scaling system is in flight; annual deep re-audit. Do not use to design briefs (use `generate-content-brief` in Content SEO leaf 08), to design citation-magnet content (use `design-citation-magnet-content` in AI SEO leaf 03), to plan link acquisition (use `plan-link-magnet-strategy`), or to assess topical authority strategy (use `assess-topical-authority`).
---

# Plan Content Scaling Operation

This skill audits the current content production pipeline, identifies the actual bottleneck, and produces a scaling plan that addresses people, process, and quality together. Output is opinionated about where most teams over-invest (writer count) and where they under-invest (briefs, editorial, voice review, technical SEO review, promotion).

The skill is opinionated: scale the system, not just writer count; bottleneck is usually upstream of writers (briefs / editorial); brand-voice review must be a standalone step (bundling into editorial misses voice drift); technical SEO review must be a standalone step; stable writer bench beats marketplace freelancer cycling; refresh is production capacity; promotion is production capacity; quality firebreaks are non-negotiable; cadence consistency matters.

## When to use this skill

- Topical-authority assessment (Growth leaf 01) implies more production capacity than current.
- The user is debating "should we hire more writers."
- Content output is plateaued or cracking under volume targets.
- Annual / quarterly content-operations review.
- Pre-budget-cycle scoping for content investment.

## When NOT to use this skill

- The user wants brief design — use `generate-content-brief` (Content SEO leaf 08).
- The user wants citation-magnet content design — use `design-citation-magnet-content` (AI SEO leaf 03).
- The user wants link-magnet asset planning — use `plan-link-magnet-strategy`.
- The user wants topical-authority strategy — use `assess-topical-authority`.
- The user has no priority cluster / topical-authority plan — recommend running that first; scaling without strategic direction produces volume without growth.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 7 (goals + constraints — content production budget is in section 7), 8 (brand voice — voice review depends on this).
2. **Topical-authority plan** — strongly recommended. If `growth/topical-authority-assessment-*.md` exists, consume it for production-volume target. If not, ask user for the volume target.
3. **Current production state** — required. Current volume per cadence (e.g. 4 posts/month); current writer count + role; current bottleneck (if known); current pipeline stages (topic → brief → draft → review → publish → promote); current cost.
4. **Target production volume** — required. Target posts / month, broken by content type if applicable (long-form pillar / cluster spoke / refresh / programmatic / commercial PDP copy).
5. **Quality bar reference** — strongly recommended. Brief template, voice rubric, technical SEO checklist (or absence thereof — flag as gap).
6. **Budget constraint** — recommended. Total content production budget per month / quarter. Without this, the plan can't be cost-bound.
7. **Capacity / hiring constraint** — required. Can the brand hire? In-house vs freelance? Agency option on the table? Geographic / time-zone constraints? Voice / domain expertise requirements?

If target volume or budget constraint is missing, ask. Don't produce a fantasy plan.

## Process

1. **Audit current pipeline.**
   - Per stage: who owns it, capacity / hour budget, cycle time, current bottleneck status (yes / no / partial).
   - Stages: topic selection, brief production, first draft, editorial review, brand-voice review, technical SEO review, publish, promotion, refresh planning.
   - Quality gates: where they exist, where they don't.
2. **Identify the actual bottleneck at current volume.**
   - Bottleneck is the stage limiting throughput. Not always the writer.
   - Common bottlenecks: brief production (no template; ad-hoc; per-piece time too high); editorial review (one editor for everything); technical SEO review (not a step; ad-hoc; gaps); promotion (no capacity; ad-hoc social only).
3. **Project bottlenecks at target volume.**
   - At target volume, which stages will fail?
   - Each stage has a capacity ceiling at current configuration. Target volume × capacity ceiling = which stages need investment.
4. **Plan the bottleneck-fix per stage.**
   - **Brief production:** content strategist hire (in-house or contracted); brief template v2; AI-assisted research where appropriate.
   - **Writer capacity:** stable bench design (3-5 vetted writers); avoid marketplace cycling; freelancer trial process; voice onboarding plan per writer.
   - **Editorial review:** tiered review (senior on top 25% / pillar / Pick / commercial; mid-level on cluster fill); explicit hour budget per piece.
   - **Brand-voice review:** standalone step; voice rubric drafted from profile section 8; ~30 min/piece.
   - **Technical SEO review:** standalone step; pre-publish checklist (schema, internal linking, on-page, mobile, freshness); ~20 min/piece.
   - **Promotion:** dedicated bandwidth (4-8 hr/week minimum); cross-reference Off-page leaf 05 outreach manual.
   - **Refresh:** 20-30% of total capacity allocated explicitly.
5. **Design the writer bench.**
   - Stable bench size: 3-5 typical for D2C brand at 12-15 posts/month.
   - Mix: in-house (full-time / part-time) + freelance (vetted, on retainer or per-piece).
   - Onboarding plan: voice training, internal-link library, schema requirements, brief format, 2-4 week ramp.
   - Voice consistency strategy: brand-voice review catches drift; recurring writer feedback loop.
6. **Set quality firebreaks.**
   - Per stage: drafts below the bar don't progress.
   - Firebreaks per failure mode: voice drift, technical SEO gap, weak research, thin originality, factual error.
   - Pipeline learns: writer feedback when a draft fails; brief upgrade when a class of failures recurs.
7. **Estimate cost.**
   - Per stage: hourly cost × hours / month. Sum.
   - Compare to current cost; surface the ratio (e.g. "4-5x cost increase to support 3-4x volume increase plus dramatic quality upgrade").
   - Cross-check against budget constraint.
8. **Sequence the 90-day rollout.**
   - Month 1: hire / contract; draft templates; vet candidates; senior editor onboarded.
   - Month 2: pipeline transitional; first cohort of upgraded briefs; freelancer trials.
   - Month 3: pipeline stabilises at target volume + quality bar; first quarterly KPI check.
9. **Define quarterly KPIs.**
   - Volume: pieces shipped / month.
   - Quality: voice-rubric pass rate; technical SEO pass rate; editorial first-pass acceptance rate.
   - Capacity: brief-to-publish lead time.
   - Cost: $ per piece; total spend.
   - Outcomes (consumed by Growth leaf 01 measurement): cluster coverage breadth growth; topical-authority KPIs.
10. **Write the plan.**

## Output format

```markdown
# Content Scaling Plan — [Business name]

**Plan date:** [date]
**Current volume:** [n posts/month]
**Target volume:** [n posts/month]
**Investment horizon:** [next 12 months / 18 months]
**Author:** [name / role]

## Executive summary
- **Current bottleneck:** [stage]
- **Bottlenecks at target volume:** [list]
- **Total scaling cost:** $[n]/month
- **Cost ratio:** [n]x current spend
- **Volume ratio:** [n]x current volume
- **Quality upgrade:** [summary of new quality gates]
- **Headline:** [1-2 sentences].

## Current pipeline audit

| Stage | Owner | Capacity (current) | Cycle time | Bottleneck? |
|-------|-------|---------------------|------------|-------------|
| Topic selection | Founder | Ad-hoc | Variable | Partial |
| Brief production | Marketing lead | ~6 briefs/month | 3 hr/brief | YES |
| First draft | 1 part-time writer | 4 long-form/month | 1-2 weeks | YES |
| Editorial review | Marketing lead | ~8 reviews/month | 1 hr/piece | Approaching |
| Brand-voice review | Ad-hoc | None formal | N/A | NOT A STAGE |
| Technical SEO review | Ad-hoc | None formal | N/A | NOT A STAGE |
| Publish | Marketing lead | Fine | 30 min/piece | No |
| Promotion | Ad-hoc social | Limited | Inconsistent | YES |
| Refresh planning | Not formal | None | N/A | NOT A STAGE |

## Bottleneck projection at target volume ([n] posts/month)
| Stage | Current capacity | Required at target | Status |
|-------|-------------------|---------------------|--------|
| Brief production | 6/month | 15/month | FAILS |
| First draft | 4/month | 12/month | FAILS |
| Editorial review | 8/month | 15/month | FAILS |
| Brand-voice review | None | 15/month | FAILS |
| Technical SEO review | None | 15/month | FAILS |
| Promotion | Ad-hoc | 15 promo plans/month | FAILS |

## Scaling plan — by stage

### Brief production
- **Solution:** Hire / contract a content strategist (10 hr/week, $80/hr, ~$3,200/month).
- **Output:** 15 briefs/month at consistent quality.
- **Brief template upgrade:** v2 — bake AI-readiness patterns from AI SEO leaf 01; entity-coverage from AI SEO leaf 02; voice rubric reference; technical SEO checklist reference.
- **Quality gate:** brief QA by marketing lead (15 min) before passing to writer.

### Writer bench
- **Solution:** Keep current part-time writer for pillar / Pick / Pick 2 (high-stakes; learned the brand voice). Add 2 freelancers via referral; 4-piece trial each before committing. Stable bench of 3.
- **Output:** ~8 cluster-fill pieces/month from freelancers; ~4 high-stakes pieces from in-house writer.
- **Onboarding plan:** voice training (2 hours); brand reference reading (profile + 5 best existing pieces); internal-link library; schema reference; first-piece detailed feedback.
- **Cost:** ~$300/piece × 8 = $2,400/month.

### Editorial review (tiered)
- **Solution:** Marketing lead remains primary editor (mid-level review on 75% of pieces). Add senior editor (5 hr/week, $120/hr, ~$2,400/month) for top 25% (pillar / Pick / commercial-priority).
- **Hour budget:** ~1 hr/piece mid-level; ~2 hr/piece senior.
- **Quality gate:** editorial first-pass acceptance rate ≥80%; pieces below standard go back to writer with feedback.

### Brand-voice review (NEW STANDALONE STAGE)
- **Solution:** Marketing lead owns. Voice rubric drafted (tied to profile section 8): ingredient-led; plain-language; specific; warm and knowledgeable; reject "clean beauty" / "non-toxic" / "chemical-free" / "the ultimate" / "miracle" / "transformative" / "anti-aging."
- **Hour budget:** ~30 min/piece.
- **Quality gate:** voice rubric pass rate ≥95%; below-threshold pieces go back to writer.

### Technical SEO review (NEW STANDALONE STAGE)
- **Solution:** Founder owns. Pre-publish checklist:
  - Schema implemented per type (Article / Product / FAQPage [genuine only] / ImageObject / BreadcrumbList).
  - Internal linking: 3-6 outbound, descriptive anchors; inbound updated on relevant pillars / spokes.
  - On-page: definitive opening, TL;DR if >1,500 words, question-led H2s, source citations, last-updated visible.
  - Mobile rendering check.
  - Freshness signal present.
- **Hour budget:** ~20 min/piece.
- **Quality gate:** technical SEO pass rate ≥98%; below-threshold pieces go back for fix.

### Promotion (NEW DEDICATED BANDWIDTH)
- **Solution:** 4 hr/week dedicated; tied to outreach manual (Off-page leaf 05).
- **Per-piece promotion plan:**
  - Newsletter feature on top 50% of pieces.
  - Internal linking from existing high-traffic pages.
  - Off-page outreach for top 25% pieces (per outreach manual).
  - Social posting per cadence.
- **Cost:** absorbed by marketing lead role expansion or contracted promotion ops.

### Refresh allocation (NEW EXPLICIT)
- **Solution:** 25% of capacity (~3-4 pieces/month) on refresh per Content SEO leaf 07 cadence.
- **Output:** quarterly refresh of [n] high-priority pieces (cluster authority + decay candidates).

## Cost summary

| Line item | Monthly cost |
|-----------|-------------|
| Existing part-time writer | $1,500 |
| Content strategist (10 hr/wk) | $3,200 |
| Freelance writers (2 × ~4 pieces) | $2,400 |
| Senior editor (5 hr/wk) | $2,400 |
| **Total** | **$9,500/month** |

**Vs current ($2,000/month):** ~4.75x cost; ~3-4x volume; dramatically upgraded quality system.

## 90-day rollout

| Month | Activities | Outputs |
|-------|------------|---------|
| 1 | Hire content strategist; draft brief template v2; draft voice rubric; draft technical SEO checklist; vet 4 freelancer candidates; senior editor onboarded. | New system in place; 6 pieces shipped (transitional) |
| 2 | Content strategist produces first 12 briefs; freelancer trials run (4 pieces each); pipeline runs at 8 pieces output. | 8 pieces shipped (mid-transition); 2 freelancers committed |
| 3 | Pipeline stabilises; freelancer commitments locked; first quarterly KPI check. | 12 pieces shipped (target hit); KPI baseline captured |

## Quarterly KPIs

| KPI | Target | Tracking |
|-----|--------|----------|
| Volume | [n] pieces / month | Counted monthly |
| Voice rubric pass rate | ≥95% | Per-piece scoring |
| Technical SEO pass rate | ≥98% | Per-piece checklist |
| Editorial first-pass acceptance | ≥80% | Per-piece tracking |
| Brief-to-publish lead time | ≤4 weeks | Cycle-time tracking |
| Cost per piece | ≤$[n] | Monthly aggregation |
| Cluster coverage breadth growth | + [n] coverage points / quarter | Cross-reference Growth leaf 01 |

## Risks + watchouts
3-5 specific risks. E.g. "Writer voice drift is the highest cumulative risk — the voice rubric standalone review step is the safeguard; do not bundle into editorial"; "Cycling marketplace freelancers per piece carries permanent onboarding cost — commit to the stable bench discipline even when individual freelancers are cheaper"; "Editorial review capacity is the second bottleneck after briefs — under-investing here regresses quality silently"; "Promotion bandwidth is easy to under-budget — pieces that ship without promotion under-perform by half or more"; "Cost ratio is 4-5x current spend — confirm budget commitment before hiring or risk mid-flight retrenchment that breaks the pipeline."

## Open questions
- [ ] Confirm budget commitment for the $[n]/month run-rate.
- [ ] Confirm hiring path (in-house FTE vs contractor) for content strategist.
- [ ] Confirm freelancer recruitment channel (referral / agency / marketplace).
- [ ] Confirm executive sponsorship for the 90-day rollout (transitional months 1-2 will produce below-target volume).
- [ ] Confirm whether to roll out promotion bandwidth in this engagement or as a follow-on initiative.
```

Save the produced file to `businesses/<slug>/growth/content-scaling-plan-[YYYY-Qn].md` (e.g. `content-scaling-plan-2026-Q3.md`). Create the `growth/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Current pipeline audit per stage (no skipping).
- Bottleneck identified at current volume + projected at target.
- Bottleneck-fix specced per stage; not generic.
- Brand-voice review surfaced as a standalone stage (most teams skip).
- Technical SEO review surfaced as a standalone stage.
- Writer bench design is stable-bench-first, not marketplace-cycling.
- Refresh capacity allocated explicitly.
- Promotion bandwidth allocated explicitly.
- Cost estimate detailed by line item.
- 90-day rollout sequenced.
- Quarterly KPIs defined with specific targets.
- Voice rubric reference matches profile section 8 (Field & Sun reject list explicit).
- Risks + watchouts cover the 4-5x cost ratio + executive sponsorship requirement.

## Common mistakes to avoid

- Don't recommend hiring writers without addressing the brief / editorial / voice / technical bottlenecks.
- Don't bundle brand-voice review into editorial — voice drift goes undetected.
- Don't skip technical SEO review — quality regresses silently.
- Don't recommend marketplace freelancer cycling — onboarding cost is permanent.
- Don't forget refresh allocation — it's part of capacity.
- Don't forget promotion bandwidth — published-and-not-promoted is a graveyard.
- Don't propose AI-generated drafts as a scaling shortcut — homogeneity damages brand voice.
- Don't ignore the cost ratio — surface 4-5x explicitly so executive expectations are aligned.
- Don't drift from Field & Sun voice rubric specifics.
- Don't promise topical-authority outcomes from this skill — those are in `assess-topical-authority`.

## Example

**Input (abbreviated):** Field & Sun. Current 4 posts/month, 1 part-time writer. Target 12-15 posts/month per topical-authority plan. Budget: ~$10,000/month available.

**Output (abbreviated):**

Current bottleneck: brief production (marketing lead at 6 briefs/month ceiling); also writer capacity, editorial review, no formal voice / technical SEO review, no formal promotion bandwidth.

Projected bottlenecks at 15 posts/month: 6 of 9 stages fail.

Scaling plan: content strategist hire (~$3,200/month) for briefs; 2 freelancer additions to stable bench (~$2,400/month) for cluster fill; senior editor (5 hr/week, ~$2,400/month) for top-25% pieces; standalone voice review (marketing lead, ~30 min/piece, no incremental cost); standalone technical SEO review (founder, ~20 min/piece, no incremental cost); promotion bandwidth (4 hr/week, absorbed); refresh 25% allocation explicit.

Total run-rate: ~$9,500/month vs $2,000 current. ~4.75x cost; ~3-4x volume; quality system upgrade.

90-day rollout: month 1 hire + draft templates; month 2 transitional 8-piece output; month 3 stabilise at 12-piece output + KPI baseline.

KPIs: volume target 12; voice pass rate ≥95%; technical SEO pass rate ≥98%; editorial first-pass acceptance ≥80%; lead time ≤4 weeks.

Saved to `businesses/field-and-sun/growth/content-scaling-plan-2026-Q3.md`.
