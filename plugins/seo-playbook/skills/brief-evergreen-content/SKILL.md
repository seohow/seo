---
name: brief-evergreen-content
description: Produces the longevity-first content brief for an anchor / evergreen piece — content designed to compound for 3-5 years with annual refresh. Deeper than the standard blog brief: explicitly evaluates the longevity case (why this piece can stay relevant), specifies original-asset requirements (photography, illustration, original research), an expert-review plan for credibility, schema with `dateModified` discipline, internal-link plan as an anchor reference, and a refresh schedule. Use whenever the user asks to "brief an evergreen post," "design our anchor piece on [topic]," "we want a definitive guide to [topic]," "what would the canonical [topic] explainer look like," "build the foundational reference for [cluster]," or has identified a topic worth disproportionate investment because of compounding-value potential. Also use when converting a typical underperforming post into an evergreen anchor (refresh + redesign). Do not use to brief a standard blog post (use `generate-content-brief`), to design a pillar (use `design-pillar-page`), or to plan a 90-day calendar (use `plan-blog-content`).
---

# Brief Evergreen Content

This skill produces the design + production brief for an evergreen anchor piece — content built to compound for 3-5 years. The brief is deeper than a standard blog-post brief because the production investment is deeper: longer drafting time, original assets, expert review, refresh discipline.

The skill is opinionated about a few things: not every piece deserves the evergreen label (the longevity case has to be real); evergreen pieces need original assets (stock photos break the depth signal); expert review is non-negotiable for credibility-sensitive topics (skincare, health, finance, legal); annual refresh is part of the contract — without refresh, evergreen decays.

## When to use this skill

- The user has identified a topic that warrants disproportionate investment because the underlying principles don't change quickly.
- The user is building an anchor piece for a topic cluster (the foundational reference the cluster keeps returning to).
- The user is converting an underperforming post into an evergreen anchor (refresh + redesign at the same time).
- The user is briefing a writer / contractor for a 3-6-week production cycle (longer than a typical post).
- The user wants a piece that's optimised for AI Overviews and LLM citation surfaces (which favour authoritative, principle-led content).

## When NOT to use this skill

- The user wants a standard blog-post brief — use `generate-content-brief`.
- The user wants to design a pillar page — use `design-pillar-page` (pillars are usually evergreen-shaped but use the dedicated skill for the architectural framing).
- The user wants a time-bound piece (annual roundup, trend take, news commentary) — those aren't evergreen targets.
- The user wants to plan a 90-day editorial calendar — use `plan-blog-content`.
- The user wants to refresh an existing piece (not redesign) — use `plan-content-refresh`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), brand voice (8). Voice + competitive positioning drive the longevity case.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Evergreen pieces typically anchor a cluster.
3. **Topic + primary keyword** — required. The keyword should be evergreen-leaning (no year stamp, durable search demand).
4. **Longevity hypothesis** — required. The user's case for why this piece can compound. Skill validates / pushes back.
5. **Existing version** — optional. If converting an existing post into evergreen, the URL and current state.
6. **Expert reviewer** — optional but expected for credibility-sensitive topics. Dermatologist, chemist, financial advisor, attorney, etc. depending on category. If absent, skill recommends sourcing one.
7. **Asset budget** — optional but valuable. Original photography / illustration costs $500-3,000+; if budget is unknown, skill flags as a dependency.

If topic + primary keyword are missing, ask. The brief is anchored to a specific topic.

## Process

1. **Validate the longevity case.** Is this topic genuinely evergreen? Tests:
   - Underlying principles (mechanism, mechanism, definition) don't change in 3-5 years.
   - Search volume on the primary keyword has been stable for 3+ years (no trend spike).
   - The brand can speak with authority + originality (own data, expertise, methodology).
   - The piece can ship at evergreen depth (3-6 weeks production budget, expert review).
   If the case is weak, recommend treating as a standard blog post via `generate-content-brief`.
2. **Read the SERP for durability signals.** What ranks at positions 1-5 for the primary keyword? How long have those pieces been ranking? Are they year-stamped (likely time-bound) or evergreen-shaped? The competitive set tells you what depth is needed.
3. **Confirm primary keyword evergreen-ness.** No year stamp. Durable demand. Foundational phrasing ("what is X," "how X works," "the science of X," "the guide to X").
4. **Decide the structure archetype.** Most evergreen pieces follow one of three shapes:
   - **Principle-first.** Mechanism / definition first, applications second. Best for "what is X" / "how X works" / "the science of X."
   - **Methodology-led.** "How we test X" / "our approach to X" / "the [Brand] framework for X." Best for brand-distinct positioning.
   - **Definitive guide.** Comprehensive coverage of a topic with clear sub-sections. Best for cluster-anchor pieces under a pillar.
5. **Build the outline.** H1 + 6-10 H2s + H3s. Outline emphasises principles / mechanism / methodology, not trending news.
6. **Decide word-count target.** Evergreen pieces typically run 2,000-4,000 words. Anchored to SERP top 5 + 20-40% (deeper than standard blog posts to earn durability).
7. **Specify original assets.** Original photography (own product, own setup), original illustration (mechanism diagram, ingredient breakdown), original research / data (own customer survey, own product testing). Stock images break the depth signal; commission or shoot in-house.
8. **Plan expert review.** Who reviews the draft? Dermatologist, chemist, attorney, doctor, etc. — depending on topic. Include the reviewer's name + credentials in the byline (E-E-A-T signal). Plan 1-2 weeks for expert review on the production timeline.
9. **Plan schema with longevity discipline.** Article schema with explicit `datePublished` + `dateModified` discipline. Author with credentials + URL. Citation-friendly structure (named methodology box, original-data section, comprehensive references).
10. **Plan internal-link role.** As an anchor piece, this content typically *receives* links from many other pieces in the cluster (rather than primarily linking out). Plan the inbound link sweep: every cluster spoke + the pillar should link to this piece in the relevant body section.
11. **Plan the refresh cycle.** Annual refresh: check facts, update internal links to new spokes / pillars, refresh `dateModified`, swap any dated examples. Schedule the first refresh on the calendar at brief time.
12. **Forecast the compounding traffic.** Realistic 3-year forecast: month 6 (warming up), month 12 (significant traffic), month 18-24 (peak ranking + plateau), year 3 (steady-state). Helps the team understand they're investing in a slow-burn asset.
13. **Define acceptance criteria.** Observable, deeper than standard brief.
14. **Write the brief.** Output is a structured 3-4-page Markdown doc.

## Output format

```markdown
# Evergreen Content Brief — [Topic]

**URL (proposed):** /blog/[slug] (no year)
**Cluster:** [Cluster ID + name]
**Pillar:** [pillar URL if cluster has one]
**Primary keyword:** [head term + monthly volume + 3-year demand trend]
**Supporting keywords:** [3-7 secondary keywords]
**Intent:** [informational, almost always]
**Archetype:** [principle-first / methodology-led / definitive-guide]
**Word-count target:** [2,000-4,000]
**Brief date:** [date]
**Target ship date:** [date — typically 4-8 weeks from brief lock]
**Refresh schedule:** annual; first refresh: [date + 12 months]

## Longevity case (validated)
3-5 sentences on why this piece can compound for 3-5 years:
- Underlying principles: [physics / chemistry / mechanism — what doesn't change]
- Search demand: [keyword has X searches/mo for past Y years; no trend spike]
- Brand authority: [why THIS brand can speak credibly]
- Production depth: [why this piece can ship at evergreen depth]
- Verdict: [pass / push back to standard brief]

## SERP durability read
3-5 sentences on the SERP top 5:
- Dominant format: [explainer / definitive guide / methodology piece]
- Word-count range: [n-n]
- Year-stamped vs evergreen-shaped: [observation]
- How long top-ranked pieces have held position: [if known]
- Realistic position target: [top 3 / top 5 / top 10] over [12-24 month] horizon

## Audience
1-2 paragraphs. Who is the reader? What do they already know? What decision are they making? What scepticism are they bringing? Why will they return to this piece (vs read once)?

## Brand-distinct angle (durable)
1-2 paragraphs on what makes this piece distinct from the SERP top 10 — and what makes that distinction durable for 3-5 years.

For Field & Sun: own three-skin-tone swatch testing methodology (reusable for any sun-care content); 20% non-nano zinc oxide percentage public disclosure (commitment to transparency, not a product spec that changes); founder + dermatologist co-byline (credibility builds over years).

## Outline

```text
H1: [Title — primary keyword + descriptive subtitle, no year stamp]

H2: Intro / definitional anchor
    Content hint: anchor the topic in principles, not news. 300-400 words.

H2: [Mechanism / how it works section]
    Content hint: this is the durable core of the piece — the principles that don't change. 500-800 words.
  H3: [Sub-section]
  H3: [Sub-section]

H2: [Methodology / brand approach section]
    Content hint: own framework / testing / data. The brand-distinct, citable section. 500-800 words.

H2: [Application / practical section]
    Content hint: how to apply the principles. 400-600 words.

H2: [Comparison / context section]
    Content hint: how this fits with other approaches / alternatives. 300-500 words.

H2: FAQ
    Content hint: 8-12 question-form H3s. Evergreen FAQ is broader than a typical blog post's. 600-900 words.

H2: Methodology box / "how we built this"
    Content hint: transparent methodology. Citation-friendly. 200-400 words.

H2: References / further reading
    Content hint: 5-10 authoritative external references; signals scholarship.

H2: Closing
    Content hint: practical action / cluster-pillar link. 200-300 words.
```

## Voice constraints

### Do

- [Brand-specific voice rules]
- Use principle-led framing (mechanism, methodology, evidence) — not trend-led.
- Cite primary sources where possible (clinical research, regulatory bodies).
- Use the Methodology box to make the brand's approach explicit.
- Keep numbers and percentages visible (Field & Sun convention).

### Don't

- [Brand-specific anti-patterns]
- Avoid year-stamping ("in 2026," "this year," "currently").
- Avoid trend references ("as TikTok has shown," "the latest").
- For Field & Sun specifically: avoid rejected category language and claims the founder would not approve.
- Avoid superlatives that age poorly ("the best," "the most advanced").
- Avoid time-bound stats without methodology ("57% of dermatologists agree" without source).

## Original assets

### Photography

- **Hero**: own product shot, brand-photographed (NOT stock).
- **Methodology asset**: e.g. three-skin-tone swatch test photographed in studio.
- **In-body**: 2-4 own product / process / ingredient shots.

### Illustration

- **Mechanism diagram**: commissioned illustration showing how [topic] works (e.g. UV physics + mineral filter).
- **Comparison diagram**: side-by-side visual of [topic] vs alternatives.

### Original research / data

- **Methodology box**: documented approach the brand uses (testing protocol, sourcing, etc.).
- **Original data point**: at least one original number or finding the brand can publish (e.g. "in our testing across 12 skin tones, the average reapplication interval was X").

## Expert review plan

- **Reviewer**: [Name + credentials, e.g. "Dr. [Name], board-certified dermatologist"]
- **Review scope**: facts, mechanism explanation, methodology, claims-language compliance.
- **Review timeline**: 1-2 weeks (schedule early — critical-path).
- **Byline credit**: "Reviewed by [Reviewer]" visible in author block.
- **Compensation / agreement**: [if applicable]

## Internal-link plan

### Inbound (this piece receives)

| From | Anchor pattern | Where in body |
|------|----------------|---------------|
| Cluster pillar | "what is mineral sunscreen" | Section 2 body |
| Spoke 1 | "mineral sunscreen explained" | Intro paragraph |
| Spoke 2 | "the science of zinc oxide" (if relevant) | Body section |
| ... | ... | ... |

### Outbound (this piece links to)

| To | Anchor pattern | Reason |
|----|----------------|--------|
| Cluster pillar | "complete mineral sunscreen guide" | Closing CTA |
| 1-2 sibling spokes | [pattern] | Where the piece naturally references their topic |
| Product collection | "shop our SPF" | Transactional bridge in closing |

## Schema strategy

- **Article**: required. datePublished, dateModified, author (with credentials + URL), publisher, image, mainEntityOfPage.
- **dateModified discipline**: update on every annual refresh + every methodology update.
- **FAQPage**: required (FAQ section is included).
- **BreadcrumbList**: Home → Blog → [Post].
- **Author**: full Person schema with credentials, URL to author bio page.
- **Reference**: see [generate-schema-markup](../generate-schema-markup/SKILL.md) when implementing.

## Compounding-traffic forecast

- **Month 0-6**: warming up; target 200-500 organic visits/mo by month 6.
- **Month 6-12**: ranking stabilises; target 1,000-2,000 organic visits/mo.
- **Month 12-18**: peak ranking + plateau; target 2,500-5,000 organic visits/mo.
- **Year 2-3**: steady-state with annual refreshes; target maintains or grows by 10-20%/year.
- (Numbers are illustrative; calibrate to keyword volume and brand DR.)

## Refresh schedule

- **Annual refresh** (12 months post-launch): check facts, update internal links to new spokes / pillars, refresh `dateModified`, swap dated examples. ~4-8 hours of work.
- **Methodology refresh** (24-36 months): if testing protocols / brand methodology evolves, update Methodology box.
- **Major refresh** (5 years): full reassessment — does the piece still serve? Often the answer is yes with light updates; sometimes the answer is "redesign."

## Acceptance criteria

- [ ] Longevity case is validated; SERP read confirms evergreen-shaped competition.
- [ ] Word count is within ±15% of target.
- [ ] All H2 sections present per outline.
- [ ] Original photography is used (no stock images in the piece).
- [ ] Mechanism / methodology section includes at least one original brand asset (diagram, photo, data point).
- [ ] Methodology box is present and citation-friendly.
- [ ] Expert review is completed and reviewer is named in byline.
- [ ] Author bio is present with credentials.
- [ ] Schema (Article + FAQPage + BreadcrumbList + Author) deployed and validates.
- [ ] `dateModified` is set; refresh schedule on the calendar.
- [ ] Internal-link sweep completed: every cluster spoke + the pillar links to this piece.
- [ ] No year stamp in title or URL.
- [ ] No banned voice terms (per brand voice constraints).

## Production timeline

- Brief locked: [date]
- Expert reviewer engaged: [date — schedule first]
- First draft: [date — typically 2-3 weeks after brief lock]
- Photography / illustration shoot: [date — schedule in parallel with drafting]
- Editorial review: [date]
- Expert review: [date — 1-2 weeks]
- Final edit + asset integration: [date]
- Schema + meta + on-page polish: [date]
- Launch: [date]
- Internal-link sweep across cluster: within 7 days of launch
- First refresh: [date + 12 months]

## Risks and watchouts

3-5 specific risks. E.g. "Expert reviewer availability is critical-path — schedule 4-6 weeks ahead"; "Photography for three-skin-tone swatch test requires model coordination — start in week 1, not week 4"; "If brand methodology changes within 12 months, refresh accordingly"; "Year-stamped competitor pieces will fall behind in 18 months — avoid the trap of matching their format."

## Open questions for the user

- [ ] Confirm the longevity case is real (not aspirational).
- [ ] Confirm budget for original photography / illustration.
- [ ] Confirm expert reviewer availability.
- [ ] Confirm the piece's role in the cluster (anchor / co-anchor / supporting).

```

Save the produced file to `businesses/<slug>/evergreen/<slug>.md`. Create the `evergreen/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Longevity case is validated against the four tests, not asserted.
- SERP durability read references actual top-5 patterns, not generic.
- Outline emphasises principles / mechanism / methodology, not news / trends.
- Original-asset plan is specific (own photography, commissioned illustration, original data) — not "add some images."
- Expert review plan names the reviewer category (dermatologist, chemist, etc.) and scopes the review.
- Schema strategy includes `dateModified` discipline and Author with credentials.
- Internal-link plan emphasises *inbound* links (the piece is an anchor that receives links) more than outbound.
- Refresh schedule is calendared, not implied.
- Compounding-traffic forecast is honest (slow-burn, not "viral in month 1").
- Acceptance criteria are observable.

## Common mistakes to avoid

- Don't accept aspirational longevity cases. If the topic is trend-led or year-bound, recommend the standard brief instead.
- Don't propose evergreen for keywords that don't have durable demand. Trend-spiking keywords aren't evergreen targets regardless of how much depth you put into them.
- Don't shortcut on assets. Evergreen with stock photos breaks the depth signal that earns links and citations.
- Don't omit expert review on credibility-sensitive topics. Skincare / health / finance / legal evergreen without expert review reads as low-trust, fails E-E-A-T signals, and doesn't earn citation in AI Overviews.
- Don't year-stamp the URL or title. Once it's there, the piece reads dated regardless of `dateModified` updates.
- Don't propose a 1-2-week production timeline. Evergreen needs 4-8 weeks. Lowballing the timeline is the most common cause of evergreen pieces shipping with shallow depth.
- Don't skip the methodology box. The Methodology / "how we built this" section is what earns citation in AI surfaces and from authoritative external sites.
- Don't forget the refresh calendar. Evergreen without refresh is just old content waiting to decay.

## Example

**Input (abbreviated):** Field & Sun. Topic: "what is mineral sunscreen." Primary keyword: "what is mineral sunscreen" (vol 1,400/mo, stable 4-year demand). Cluster: I-PILLAR-1 (sun-care). Existing version: 800-word generic post (decayed traffic).

**Output (abbreviated):**

Longevity case: passes. UV physics + mineral filter mechanism don't change; brand has three-skin-tone testing methodology + dermatologist on advisory; SERP top 5 are evergreen-shaped explainers ranking 18+ months.

Archetype: principle-first explainer. Word count: 2,800. URL: `/blog/what-is-mineral-sunscreen` (no year).

Outline: H1 + 8 H2s + Methodology box + References. Mechanism section is the durable core (UV physics, zinc oxide / titanium dioxide chemistry, vs. chemical filters). Brand-distinct angle: own three-skin-tone swatch test + 20% non-nano zinc oxide disclosure.

Original assets: hero (own product), three-skin-tone swatch test photographed in studio, commissioned mechanism diagram (UV → mineral filter → reflection).

Expert review: in-house dermatologist (1 week review window).

Schema: Article + FAQPage + BreadcrumbList + Author with credentials. `dateModified` discipline + annual refresh on the calendar.

Compounding forecast: month 12 = 1,200-1,800 organic visits/mo; month 24 = 3,000-4,500/mo; year 3+ = steady-state with annual refresh.

Production: 6 weeks (drafting 3 weeks, photography 1 week, expert review 1 week, edit + schema 1 week).

Risks: dermatologist review is critical-path; photography requires model coordination; existing 800-word version should redirect to the new URL post-launch.

Saved to `businesses/field-and-sun/evergreen/what-is-mineral-sunscreen.md`.
