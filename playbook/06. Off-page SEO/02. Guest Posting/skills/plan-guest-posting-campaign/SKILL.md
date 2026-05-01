---
name: plan-guest-posting-campaign
description: Produces a guest-posting campaign plan covering target publications (Tier 1-3 with named publications + editor / contributor-page links + acceptance signals), pitch angles (4-6 specific, original, audience-relevant ideas tied to recent publication coverage), author byline strategy (which expert / founder / dermatologist for which angle), pitch-email templates, cadence (target placements per quarter), yield tracking, and a content-mill quality filter. Output is the operating brief for proactive guest-post outreach. Use whenever the user asks to "plan guest posting," "design our guest-post strategy," "which publications should we pitch," "build a contributor pipeline," "guest blog plan," or has decided to invest in guest posting and needs the campaign spec. Also use as a quarterly cadence skill — pitch angles refresh as news / seasonality / publication coverage changes. Do not use for digital-PR campaigns (use `plan-digital-pr-campaign`), reactive HARO responses (use `set-up-haro-response-system`), or to design the broader off-page strategy (use `plan-link-building-campaign`).
---

# Plan Guest-Posting Campaign

This skill produces a guest-posting campaign plan — target publications, pitch angles, author byline strategy, cadence, yield tracking.

The skill is opinionated about a few things: quality publications only (no content mills regardless of DR); pitch angles are specific, original, and tied to recent publication coverage (not generic); author byline materially affects acceptance rate; first placement leads to 5-10 more if cultivated (relationship-first, not transactional); guest posting is one channel in a portfolio (don't over-invest).

## When to use this skill

- The user is building a guest-posting programme from scratch.
- The user has done some guest posting and wants to scale or refocus.
- The user is briefing a contractor / agency on the guest-post strategy.
- The user is running a quarterly off-page review.

## When NOT to use this skill

- The user wants to design a digital-PR campaign — use `plan-digital-pr-campaign`.
- The user wants reactive PR (responding to journalist queries) — use `set-up-haro-response-system`.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.
- The user wants outreach process / templates — use `design-outreach-process`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), brand voice (8).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Pitch angles align to clusters.
3. **Link-building plan** — read `businesses/<slug>/off-page/link-building-plan-*.md` if it exists. Guest posting is one channel within it.
4. **Past guest posts** — list of previous placements (URL, publication, date, author, link quality). Required for audit step.
5. **Available authors** — who can byline? Founder, in-house experts, advisors, dermatologist partners. Affects pitch credibility.
6. **Capacity** — hours/month available. Affects cadence target.
7. **Budget** — optional. Some Tier 1 publications occasionally accept paid contributor placements (clearly marked); most quality placements are unpaid.

If past placements + author roster are missing, ask. The plan is anchored to specific authors + past relationships.

## Process

1. **Audit past placements.**
   - URL + publication + date.
   - Link quality (followed / nofollow; relevance; DR).
   - Yield (referral traffic, search-position lift if attributable).
   - Editor relationship status (one-off, repeat, dormant).
2. **Quality-filter the existing portfolio.**
   - Flag content-mill placements (charged review fees, accepts anything, paid-content-mixed-with-editorial).
   - Recommend disavow only if links are clearly toxic; otherwise leave (Google handles).
3. **Identify target publications.**
   - Tier 1 (DR 70+, premium): 5-10 publications. Hard to enter; high yield per placement.
   - Tier 2 (DR 50-70, specialised): 15-30 publications. Achievable; medium yield.
   - Tier 3 (DR 30-50, niche): 30-60 publications. Easier; lower yield.
   - For each: contributor page / submission process URL, named editor if findable, recent coverage angles.
4. **Develop pitch angles.** 4-6 specific angles for the quarter.
   - **Specific** (not "why X matters"; "three findings most X overlook").
   - **Original** (data, methodology, expert insight the brand uniquely has).
   - **Audience-relevant** (matches the publication's reader profile).
   - **Timely** (seasonal, news-tied, or gap-filling).
   - For each angle: target publications (1-3 best fits), recommended author, working title, 3-5 sentence pitch summary.
5. **Author byline strategy.**
   - **Founder byline:** brand-narrative pieces, "lessons learned," industry-perspective content.
   - **Dermatologist / expert byline (with founder co-byline):** credibility-sensitive (skincare, health, safety) content.
   - **Internal expert byline:** product / methodology / testing content.
   - **Co-byline strategies:** founder + dermatologist often produces 2-3x acceptance vs. solo founder for skincare publications.
6. **Pitch templates.**
   - Subject-line patterns.
   - Opening (reference specific recent piece by editor / publication).
   - Pitch (specific angle + why audience cares + author qualifications).
   - Close (CTA + short).
   - Length: 3-5 paragraphs, never longer.
7. **Cadence + targets.**
   - Pitches sent / month.
   - Placements / quarter target.
   - Repeat placement target (key signal of relationship cultivation).
8. **Quality filter (do not pitch).**
   - Sites that charge a review fee.
   - Sites mixing paid content + "guest posts" without disclosure.
   - Sites with no editorial team / no named editor.
   - Sites where the link profile is dominated by guest posts (signals content-mill).
9. **Yield tracking.** Hours-per-placement; referral traffic; link quality; relationship value.
10. **Write the plan.**

## Output format

```markdown
# Guest-Posting Campaign Plan — [Business name]

**Plan period:** [Q2 2026]
**Plan date:** [date]
**Owner:** [name / role]
**Target placements (quarter):** [n]

## Past placement audit
| URL | Publication | Date | Author | Link quality | Yield | Relationship status |
|-----|-------------|------|--------|--------------|-------|---------------------|
| ... | ... | ... | ... | ... | ... | ... |

**Audit insight:** [1-2 sentences on what's worked / hasn't]

## Target publications

### Tier 1 (DR 70+)
| Publication | DR | Contributor URL | Editor | Recent coverage notes | Status |
|-------------|----|-----|--------|----------------------|--------|
| Allure | 84 | allure.com/contact | [Name] | Recent ingredient-deep-dives | Cold |
| Byrdie | 82 | byrdie.com/contributors | [Name] | Trending three-skin-tone content | Warm (1 prior) |
| ... | ... | ... | ... | ... | ... |

### Tier 2 (DR 50-70)
[same shape]

### Tier 3 (DR 30-50)
[same shape, summarised]

## Pitch angles ([n] for the quarter)

### Angle 1: "Three skin-tone-test findings most sunscreen reviews miss"
- **Target publications:** Byrdie, Allure, Refinery29.
- **Author:** Sarah Chen (Founder) + Dr. [Name] (advisor dermatologist).
- **Working title options:** "What 3-Skin-Tone Sunscreen Testing Actually Reveals"; "The Skin-Tone Gap in Most Sunscreen Reviews."
- **Pitch summary:** original-data piece referencing Field & Sun's three-skin-tone testing methodology; 3 findings publication readers won't find elsewhere.
- **Estimated effort:** 10-12 hours (data prep + drafting + edit cycles).

### Angle 2: "What '20% non-nano zinc oxide' actually means on the bottle"
[same shape]

### Angle 3: "How dermatologists evaluate mineral sunscreen safety"
[same shape]

### Angle 4: "Sustainable beauty without greenwashing claims"
[same shape]

[5-6 angles total]

## Author byline strategy
- Sarah Chen (Founder): brand-narrative + perspective pieces.
- Dr. [Name] (advisor dermatologist): credibility-sensitive content; co-byline preferred for safety / mechanism / claims content.
- [Internal expert]: product / methodology pieces.
- Combinations: Founder + Dermatologist co-byline for skincare-publication pitches (highest acceptance rate).

## Pitch template

### Subject lines
- "Pitch: [Specific angle title] — for [Publication name]"
- "[Publication name] piece idea: [Angle]"
- "Re your [recent piece title] — follow-up angle?"

### Body template
```

Hi [Editor first name],

I read your recent piece on [specific recent article — title + 1-sentence reference], and it sparked a follow-up angle I think your readers would find useful.

[2-3 sentences: specific pitch — what the piece would cover, why it's original, why it matters to the publication's audience.]

I'm [Author name + 1-line credential]. I'd be writing this with [co-byline if applicable + 1-line credential].

Happy to share an outline + first-paragraph draft if helpful.

Best,
[Sender name]

```

### Length
3-5 paragraphs. Never longer than 250 words.

## Cadence + targets
- Pitches sent / month: [n].
- Acceptance rate target: 15-25% (Tier 2-3); 5-10% (Tier 1).
- Placements / quarter target: [n].
- Repeat placement target (relationship cultivation): 1-2 publications by end of quarter with 2+ placements.

## Quality filter (do not pitch)
- ❌ Sites charging "review fees" or "submission fees."
- ❌ Sites mixing paid content + guest posts without clear disclosure.
- ❌ Sites with no named editorial team.
- ❌ Sites where the link profile is dominated by external guest posts (content-mill signal).
- ❌ Sites with broad "we accept any contributor" policies — too low quality bar.
- ❌ Sites the brand wouldn't be proud to be associated with.

## Yield tracking
| Placement | Hours invested | Referral traffic (30d) | Link quality | Relationship outcome |
|-----------|----------------|------------------------|--------------|----------------------|
| ... | ... | ... | ... | ... |

Run yield review monthly; rebalance angles / publications quarterly.

## Acceptance criteria
- [ ] At least [n] pitches sent in the quarter.
- [ ] At least [n] placements landed.
- [ ] At least 1 publication shows repeat-relationship signal.
- [ ] Anchor-text mix maintained (mostly branded / naked; minimal exact-match).
- [ ] No content-mill placements.
- [ ] Past content-mill links flagged for monitoring (disavow if Google flags).

## Risks and watchouts
3-5 specific risks. E.g. "Tier 1 placements are slow + uncertain — don't anchor the plan on Tier 1 alone"; "Editor turnover is high; warm relationships go cold within months"; "Some pitches will trigger 'we'd love this but pay $500' replies — that's a paid-placement signal; decline politely"; "Co-bylines require advisor / dermatologist availability; schedule pitches around their capacity."

## Open questions
- [ ] Confirm authors available for the quarter (founder + dermatologist time).
- [ ] Confirm capacity (hours/month for guest posting).
- [ ] Confirm any priority publications the team wants pitched first.
```

Save the produced file to `businesses/<slug>/off-page/guest-posting-plan-[YYYY-QQ].md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Past placement audit done; quality-filter applied.
- Target publications have named editor / contributor-page link / recent coverage notes (not just "Allure").
- Pitch angles are specific, original, audience-relevant, timely (not "why X matters").
- Author byline strategy is concrete (which author for which angle).
- Pitch template is short, personalised, references publication.
- Cadence + targets realistic (15-25% Tier 2-3; 5-10% Tier 1).
- Quality filter explicit (content-mill criteria spelled out).
- Yield tracking schema included.

## Common mistakes to avoid

- Don't pitch content mills, even with technically-high DR.
- Don't write generic pitches. "I'd love to contribute" gets ignored.
- Don't forget the topical-relevance rule. Skincare brand → skincare publications, not general business publications.
- Don't over-optimise anchor text. Guest posts give brand control; resist exact-match temptation.
- Don't pitch and walk away. Cultivate relationships post-placement.
- Don't propose 50% of off-page time on guest posting. 15-25% is right; it's slow + medium-yield.
- Don't omit author strategy. Byline materially affects acceptance.
- Don't skip yield tracking. Without it, the plan can't be optimised.

## Example

**Input (abbreviated):** Field & Sun. 3 past placements. Authors: founder + dermatologist advisor. Capacity: 30 hrs/quarter.

**Output (abbreviated):**

Past audit: 1 quality placement (Byrdie), 1 mid (skincare blog), 1 content-mill (recommend monitoring; not currently penalty-triggering).

Target publications: 8 Tier 1 (Allure, Byrdie, Refinery29, Cosmopolitan, Real Simple, Shape, Self, Vogue Beauty); 18 Tier 2 (specialised skincare publications, dermatology blogs); 28 Tier 3 (niche).

Pitch angles (4): three-skin-tone testing, percentage transparency, dermatologist evaluation methodology, sustainable-beauty-without-greenwashing.

Authors: founder solo for narrative; founder + dermatologist for credibility-sensitive (3 of 4 angles).

Cadence: 8 pitches / month; target 3-4 placements / quarter; 1 repeat-relationship by end of quarter.

Quality filter: explicit "do not pitch" criteria; past content-mill placement flagged.

Saved to `businesses/field-and-sun/off-page/guest-posting-plan-2026-Q2.md`.
