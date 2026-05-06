---
name: plan-digital-pr-campaign
description: Use to plan digital pr campaign; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Plan Digital PR Campaign

This skill produces the campaign plan for a single 8-12-week digital PR campaign. Output is the operating brief covering angle, data, assets, target publications, outreach strategy, and measurement.

The skill is opinionated about a few things: original-data PR is the highest-reliability angle (lower-variance than expert-commentary or trend pieces); newsworthiness is the gate (if it's not newsworthy without the brand being involved, it's not a PR campaign); embargo / exclusive strategy is required for Tier 1 placements; personalised outreach to 30-80 journalists beats spam-volume to 500.

## When to use this skill

- The user is planning a single PR campaign and needs the brief.
- The user is comparing 2-3 candidate angles and needs a recommendation.
- The user is briefing an in-house owner / agency on the campaign.
- The user is reviewing a quarterly off-page programme that includes a PR slot.

## When NOT to use this skill

- The user wants reactive PR (responding to journalist queries) — use `set-up-haro-response-system`.
- The user wants guest posting — use `plan-guest-posting-campaign`.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.
- The user wants to design outreach process / CRM — use `design-outreach-process`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), goals (7), brand voice (8).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Campaign should ladder to a priority cluster.
3. **Link-building plan** — read `businesses/<slug>/off-page/link-building-plan-*.md` if it exists. PR is one channel within it.
4. **Available expertise** — required. Founder, internal experts, advisors (dermatologist, scientist, etc.), researchers. Affects credibility layer.
5. **Internal data assets** — optional but valuable. Customer survey-able list, product testing data, sales / behaviour data. Source for original-data angles.
6. **Capacity + budget** — required. Campaign costs 60-200 hours over 8-12 weeks, plus production budget for surveys / design / outreach.
7. **Past PR efforts** — optional. What's worked / hasn't.

If expertise + data inputs are absent, push back: PR campaigns require either an expert layer or a data layer (preferably both). Recommend building those before launching.

## Process

1. **Choose the angle archetype.**
   - **Original data:** highest reliability. Brand-commissioned survey, internal-data analysis, or public-data synthesis. 60-200 hours.
   - **Expert commentary:** medium reliability. Brand expert publicly comments on a trending topic / news. Fast to produce but requires the right moment.
   - **Trend analysis:** medium-low reliability. Brand identifies and analyses a trend with proprietary perspective.
   - **Counter-narrative:** high variance. Brand argues against a prevailing wisdom; works when contrarian view has data behind it.
   - **"First" claim:** depends on validity. "First three-skin-tone-tested mineral sunscreen brand" works if claim is defensible.
   Match archetype to the brand's distinctive capability + capacity.
2. **Validate newsworthiness.** Would a journalist write the story *if it weren't a brand-funded pitch*? If no, the angle isn't newsworthy. Tighten or pivot.
3. **Specific the angle.**
   - Headline-ready findings (3-7 bullet points journalists could cite).
   - Working title for the published asset.
   - The "so what" — why does this matter to the publication's audience.
4. **Build the data plan.**
   - **Survey:** sample size (1,000-3,000 typical), demographics, methodology, expert review (dermatologist sign-off if skincare).
   - **Internal data:** which dataset, anonymisation requirements, sample size, comparison period.
   - **Public-source synthesis:** which sources, methodology, what new analysis the brand brings.
5. **Build the asset list.**
   - Report (10-30 pages with methodology, findings, expert commentary).
   - Executive-summary one-pager (single page; journalists prefer this).
   - 5-7 chartable findings (high-res chart images, journalist-friendly captions).
   - Expert commentary quotes (founder + dermatologist / researcher; 3-5 quotable lines).
   - Brand fact sheet (1-page brand background; journalists need it).
   - Author / expert bio + headshot (high-res; journalists ask).
   - Press kit landing page (one URL with all assets downloadable).
6. **Build the target publication list.**
   - **Tier 1 (15-25 publications):** premium publishers that have covered the topic in last 6-12 months. Named journalists.
   - **Tier 2 (40-80 publications):** specialised publications.
   - **Tier 3 (40-100 publications):** niche / regional / smaller.
7. **Decide embargo / exclusive strategy.**
   - **Tier 1 exclusive (48-72 hour first-look):** earns Tier 1 placement (single publication, often). Higher upside but riskier.
   - **Simultaneous release:** broader Tier 2-3 coverage; less Tier 1 likelihood.
   - **Hybrid:** Tier 1 exclusive 48 hours; broader release after.
   - Recommend hybrid as default unless brand has prior Tier 1 relationship.
8. **Pitch templates.**
   - Subject lines (3-5 variants).
   - Opening (specific reference to journalist's recent piece).
   - Pitch body (newsworthy hook, supporting findings, expert availability, asset link).
   - Close (CTA: "happy to share embargoed access" or "report releases [date]").
9. **Follow-up cadence.**
   - Day 0: initial pitch.
   - Day 4-5: follow-up with new finding / angle hook.
   - Day 10-12: final follow-up with deadline / final-call language.
10. **Success metrics.**
    - **Output:** placements per tier, total mentions, link quality.
    - **Reach:** estimated audience (publications' average page views).
    - **Outcome:** branded-search lift QoQ, referral traffic, follow-on opportunities.
11. **Production timeline.** 8-12 weeks typical (data 3-5 weeks; production 2-3 weeks; outreach 2-4 weeks).
12. **Risk forecast.**
    - High-variance baseline: assume 50% chance of 1+ Tier 1; 80% chance of 5+ Tier 2; 95% chance of 10+ Tier 3.
    - Dependencies (expert availability, data validity, embargo cooperation).
13. **Write the plan.**

## Output format

```markdown
# Digital PR Campaign Plan — [Campaign name]

**Campaign name:** [working title]
**Plan date:** [date]
**Owner:** [name / role]
**Production timeline:** [n] weeks
**Launch date target:** [date]

## Angle archetype
- **Type:** [original data / expert commentary / trend analysis / counter-narrative / "first" claim]
- **Working title:** [report / piece title]
- **Newsworthiness validation:** [why a journalist would write about this without brand funding]
- **Cluster ladder-up:** [which priority cluster this serves]

## Headline-ready findings
3-7 bullet points journalists could cite directly:
- [Finding 1 — specific, surprising, citation-friendly]
- [Finding 2]
- [Finding 3]
- ...

## Data plan
- **Approach:** [survey / internal data / public-source synthesis]
- **Sample / dataset:** [size + demographics + sources]
- **Methodology:** [3-5 sentences on how findings are generated]
- **Expert review:** [who reviews + sign-off + credentials]
- **Production timeline (data):** [weeks]
- **Cost:** [approximate]

## Asset list
- [ ] **Report** (10-30 pages): methodology, findings, expert commentary, charts.
- [ ] **Executive summary** (1 page).
- [ ] **5-7 chart images** (high-res, journalist-friendly captions).
- [ ] **Expert commentary quotes** (3-5 quotable lines per expert).
- [ ] **Brand fact sheet** (1 page).
- [ ] **Expert / author bio + headshot** (high-res).
- [ ] **Press kit landing page** (single URL, all assets downloadable).

## Target publications

### Tier 1 (15-25; premium publishers)
| Publication | DR | Journalist | Recent relevant piece | Status |
|-------------|----|----|----|--------|
| NYT Wirecutter | 95 | [Name] | [Piece + date] | Cold |
| Allure | 84 | [Name] | [Piece + date] | Warm (1 prior) |
| Cosmopolitan | 89 | [Name] | [Piece + date] | Cold |
| ... | ... | ... | ... | ... |

### Tier 2 (40-80; specialised publications)
[same shape; can be summarised]

### Tier 3 (40-100; niche / regional)
[same shape; summarised]

## Embargo / exclusive strategy
- **Approach:** [Tier 1 exclusive 48-72 hours / simultaneous / hybrid]
- **If exclusive:** target publication = [name]; backup = [name]
- **Embargo lift date:** [date]

## Pitch templates

### Subject lines
- "Exclusive — new data on [topic]: [headline finding]"
- "[Topic] — research findings for [publication]"
- "Follow-up to your [recent piece]: [angle]"

### Body template
```

Hi [Journalist first name],

I read your recent piece on [specific recent article — title + 1-sentence reference].

We've just produced original research on [topic] that connects directly: [headline finding 1]; [headline finding 2]; [headline finding 3].

The full report is co-authored with [expert + 1-line credential]. Embargoed access available; lifting [date].

Happy to set up a conversation with [expert name] for a quote / interview.

Press kit (under embargo): [URL]

Best,
[Sender]

```

### Length: 3-5 short paragraphs

## Follow-up cadence
- **Day 0:** initial pitch.
- **Day 4-5:** follow-up with a new angle / finding.
- **Day 10-12:** final outreach with embargo-deadline language.
- **Post-launch:** thank journalists who covered; package follow-on angles.

## Success metrics
- **Output:** Tier 1 placements [target n]; Tier 2 placements [target n]; Tier 3 placements [target n]; total links [target n].
- **Reach:** estimated audience [n].
- **Outcome:** branded-search lift QoQ [target %], referral traffic [target n].
- **Asset reuse value:** report citable for [n] months post-launch.

## Production timeline (weekly)

| Week | Phase | Owner | Deliverable |
|------|-------|-------|-------------|
| 1-3 | Survey design + run / data analysis | Research | Raw data + initial findings |
| 4 | Expert review (dermatologist / advisor) | Expert | Sign-off |
| 5 | Report production (writing + charts + design) | Content | Report + summary + assets |
| 6 | Press kit build + embargo decision | PR / outreach | Landing page + press kit |
| 7-8 | Pre-launch outreach (Tier 1 exclusive offers) | Outreach | Exclusive partner secured (or skip) |
| 9 | Launch + simultaneous outreach | Outreach | Initial pitches sent |
| 10-12 | Follow-up + post-launch wave | Outreach | Placements landing |

## Risk forecast
- **High-variance baseline:** 50% chance of 1+ Tier 1 placement; 80% of 5+ Tier 2; 95% of 10+ Tier 3.
- **Dependencies:** expert availability (critical path); data validity (sample-size + methodology); embargo cooperation (if Tier 1 partner says no, pivot to simultaneous).
- **What could go wrong:** survey results uninteresting (test pilot first); no Tier 1 interest (have Tier 2 backup); expert unavailable for interview window.

## Acceptance criteria
- [ ] At least [n] Tier 2+ placements landed.
- [ ] At least 1 Tier 1 placement OR 8+ Tier 2 placements (substitute success conditions).
- [ ] Press kit landing page live.
- [ ] Report + executive summary published on Field & Sun site (becomes evergreen asset).
- [ ] All placements anchor-checked (mostly branded / naked URL).
- [ ] Branded-search QoQ lift measurable post-launch.
- [ ] Asset bookmarked for follow-on coverage / annual refresh.

## Open questions
- [ ] Confirm expert availability across data + production + outreach phases.
- [ ] Confirm budget for survey / data production.
- [ ] Confirm embargo strategy preference (Tier 1 exclusive vs. simultaneous).
- [ ] Confirm capacity for outreach (60-100 hours over 4 weeks).
```

Save the produced file to `businesses/<slug>/off-page/digital-pr-[campaign-slug].md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Angle archetype chosen with reasoning (matches brand capability + capacity).
- Newsworthiness validated (would journalists write this without brand funding?).
- Headline-ready findings spelled out (not generic).
- Data plan is specific (sample, methodology, expert review).
- Asset list complete (report + summary + charts + quotes + fact sheet + bio + landing page).
- Target publications named with journalists + recent relevant pieces.
- Embargo strategy explicit.
- Pitch templates personalised, not generic.
- Success metrics include outcome (branded-search lift) not just output (link count).
- Risk forecast acknowledges high variance.

## Common mistakes to avoid

- Don't pitch product launches / brand milestones as PR. Press releases ≠ digital PR.
- Don't skip newsworthiness validation. The angle is the gate.
- Don't omit the data layer. Original-data PR earns 5-10x links of opinion-only PR.
- Don't pitch publications with no relevant recent coverage. Topical relevance + journalist match.
- Don't spam-volume pitch. 30-80 personalised > 500 templated.
- Don't omit the expert credibility layer. Founder-only commentary earns weaker placements than founder + expert.
- Don't propose simultaneous-release as default. Hybrid (Tier 1 exclusive + broad release) is usually right.
- Don't anchor success on Tier 1 alone. High-variance; plan for Tier 2-3 portfolio.
- Don't forget the asset is reusable. Report becomes citable for years.
- Don't skip post-launch follow-up. Most placements come from non-responders 4-12 days later.

## Example

**Input (abbreviated):** Field & Sun. Cluster I-PILLAR-1 (sun-care). Available: founder + dermatologist advisor + ~3,000 customers survey-able. Capacity: 100 hours over Q2.

**Output (abbreviated):**

Angle: original-data — "2026 Sun-Care Habits Report" (1,000-respondent survey, dermatologist-reviewed).

Newsworthiness: yes — preliminary findings include "67% underestimate facial-coverage amount"; "43% never re-apply during workday"; "12% know UV-filter type."

Data plan: 1,000-respondent online survey (Pollfish / SurveyMonkey panel); dermatologist sign-off; methodology section published.

Assets: 18-page report; 1-page exec summary; 6 chart images; founder + dermatologist quotes; fact sheet; press-kit landing at `/reports/2026-sun-care-habits`.

Target publications: 22 Tier 1 (Wirecutter, NYT, Allure, Cosmo, Self, Refinery29, etc.); 64 Tier 2 (skincare / beauty / health publications); 80 Tier 3 (niche).

Embargo: hybrid — offer Allure exclusive 48 hours; broad release after.

Pitch cadence: 50 personalised pitches week 9; follow-ups week 9-12.

Success: target 1+ Tier 1; 5+ Tier 2; 10+ Tier 3; +5% branded search QoQ.

Production: 8 weeks — survey 3 / analysis 1 / dermatologist review 1 / production 1 / outreach pre-launch 2.

Risks: dermatologist scheduling on critical path; survey results may be less surprising than hypothesised (have backup angles ready); Allure exclusive may not be accepted (have Cosmopolitan as backup).

Saved to `businesses/field-and-sun/off-page/digital-pr-2026-sun-care-habits.md`.
