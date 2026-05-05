---
name: plan-link-building-campaign
description: Produces a strategic link-building campaign plan covering target assets (which pages should earn links — pillars, evergreen anchors, tools, original data), target sites (3-tier list by Domain Rating with named publications), tactical channel mix (digital PR, HARO, guest posting, broken-link, brand-mention recovery), cadence (referring-domain targets per month / quarter), success metrics tied to cluster-level ranking lift (not vanity counts), and risk / compliance guardrails (no paid links, no PBNs, anchor-text diversity). Output is the strategic anchor for the off-page programme; tactical skills execute against this plan. Use whenever the user asks to "plan link building," "build our link strategy," "we need more backlinks — where do we start," "design our off-page campaign," "how do we earn links to [page]," "competitor has more links — what do we do," or has shipped link-worthy assets and is ready to invest in earning links to them. Also use as a quarterly cadence skill — link-building plans should refresh as new assets ship and as channel yield data comes in. Do not use to do tactical execution of a specific channel (use `plan-digital-pr-campaign`, `plan-guest-posting-campaign`, etc.) or to set up outreach process (use `design-outreach-process`).
---

# Plan Link-Building Campaign

This skill produces the strategic plan for a link-building campaign. Output is the strategic anchor against which tactical channels (PR, HARO, guest, broken-link, mention recovery) execute.

The skill is opinionated about a few things: link building without link-worthy assets is begging (build the assets first); cluster-level focus produces measurable outcomes (site-level produces vanity); editorial-only links (no paid, no PBN); sustained velocity (8-15 referring domains/month) is the goal, not bursts; success is measured in cluster-level ranking lift, not link counts.

## When to use this skill

- The user has shipped pillar pages / evergreen pieces / tools and is ready to earn links to them.
- The user is establishing an off-page programme for the first time.
- The user is responding to a competitor link-profile gap.
- The user is running a quarterly off-page review.
- The user is briefing an in-house owner / agency / contractor on the link-building strategy.

## When NOT to use this skill

- The user wants to execute one specific tactical channel — use `plan-digital-pr-campaign`, `plan-guest-posting-campaign`, `set-up-haro-response-system`, `plan-broken-link-campaign`, `monitor-brand-mentions`.
- The user wants to set up outreach operations (CRM, templates, cadence) — use `design-outreach-process`.
- The user wants to audit branded SERP / reputation — use `audit-branded-serp`.
- The user has no link-worthy assets — recommend building pillars / tools / evergreen / data first via Content SEO skills.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), goals (7), brand voice (8).
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Cluster-level link strategy is the core.
3. **Existing link-worthy assets** — list pillar pages (`businesses/<slug>/pillars/`), evergreen anchors (`businesses/<slug>/evergreen/`), tools (`businesses/<slug>/tools/`), original-data assets. Required.
4. **Current link profile** — referring domains, top-linking sites, anchor-text distribution, top linked pages. From Ahrefs / Semrush / GSC Links report.
5. **Competitor link profiles** — top 3-5 competitors' referring-domain counts + top-linking sites. From competitor-analysis output if available, or pull fresh.
6. **Budget / capacity** — optional. Hours / month or budget for outreach. Affects scope.
7. **Geographic / market scope** — required. Single-market / multi-market affects publication targeting.
8. **Existing off-page programme** — optional. If the brand has been doing off-page work, what worked / what didn't.

If link-worthy assets list is empty, push back: building assets is the prerequisite. Recommend Content SEO skills (`design-pillar-page`, `brief-evergreen-content`, `plan-tool-page`).

## Process

1. **Audit current state.**
   - Total referring domains, % follow vs nofollow.
   - DR distribution of referring domains (how many at 70+, 50-70, 30-50, <30).
   - Anchor-text distribution (% branded / naked URL / partial / exact-match).
   - Top 10 linked pages on the site (where existing equity concentrates).
   - Recent link velocity (last 12 months — sustained or spiked?).
2. **Compare to competitors.**
   - For each of top 3-5 competitors: total referring domains, DR distribution, top-linking sites.
   - Calculate the gap (typically 5-20x for emerging brands).
   - Identify Tier-1 sites (DR 70+) that link to competitors but not the brand — primary targets.
3. **Identify target assets.**
   - Pillar pages (high priority, broad-topic head terms).
   - Evergreen anchors (durable, high-citation candidates).
   - Tools (calculators / quizzes / finders — best link magnets per build hour).
   - Original-data publications (industry surveys, brand-published research).
   - Comparison / definitive-guide content.
   - Newsworthy stories (PR-led).
   For each asset: priority (1-3), expected link yield (low / medium / high), readiness (live / planned / needs work).
4. **Build the 3-tier target site list.**
   - **Tier 1 (DR 70+, ~20-50 sites):** premium publishers — Wirecutter, NYT, Cosmopolitan, Allure, Byrdie, etc., depending on category. Mostly digital-PR / journalist-relationship channel.
   - **Tier 2 (DR 50-70, ~50-150 sites):** specialised publications, expert blogs, niche category sites. Mix of guest posting, HARO, mention recovery.
   - **Tier 3 (DR 30-50, ~100-300 sites):** niche blogs, regional publications, smaller but relevant sites. Mostly broken-link, mention recovery, smaller PR.
   Lower than DR 30: usually skip unless highly relevant (niche specialty sites that have small DR but high category authority).
5. **Plan tactical channel mix.**
   - **Digital PR (3-5 campaigns/year):** highest yield per campaign, highest variance. Newsworthy angles, original data, expert commentary.
   - **HARO / journalist outreach (ongoing):** reactive; steady yield once system is in place.
   - **Guest posting (4-8 placements/quarter):** slower; quality publications that accept contributors are limited.
   - **Broken-link building (10-15 links/quarter):** predictable yield with disciplined prospecting.
   - **Brand-mention recovery (5-15 links/quarter):** unlinked mentions converted; depends on existing brand awareness.
   - **Niche-specific (varies):** dermatologist-citation, podcast guest spots, partner-program links.
6. **Set cadence + targets.**
   - Monthly target: new referring domains added (8-15/mo is healthy for mid-stage brand; 4-8/mo for early-stage).
   - Quarterly target: cumulative referring-domain growth, key-asset links earned.
   - Annual target: total RD growth, cluster-level ranking lift on priority pillars.
7. **Define success metrics.**
   - **Output metrics:** referring domains added, link velocity, anchor-text distribution, DR-tier mix.
   - **Outcome metrics:** cluster-level ranking lift on priority pillars, non-branded organic traffic on target clusters, branded-search lift (PR halo).
   - **Anti-vanity:** explicitly *not* tracking total backlink count (volume metric, easily inflated).
8. **Set risk + compliance guardrails.**
   - No paid links / sponsored content treated as editorial.
   - No PBN (private blog network) usage.
   - No link-exchange schemes.
   - Anchor-text mix maintained: branded ~40%, naked URL ~20%, partial-match ~25%, exact-match ~10-15%.
   - Velocity smoothed (no 50-link weeks).
9. **Identify dependencies.**
   - Outreach operations (CRM, email infrastructure, templates) — handoff to `design-outreach-process` if absent.
   - Owner ownership: who runs the programme; in-house, contractor, agency.
   - Asset readiness: which target assets are live vs. need work first.
10. **Write the plan.**

## Output format

```markdown
# Link-Building Campaign Plan — [Business name]

**Plan period:** [Q2 2026 / annual / etc.]
**Plan date:** [date]
**Owner:** [name / role]
**Next review:** [date + 90 days]

## Current state
- Total referring domains: [n] ([+/- %] over 12 months)
- DR distribution: [%] DR 70+ / [%] DR 50-70 / [%] DR 30-50 / [%] DR <30
- Anchor-text distribution: [%] branded / [%] naked / [%] partial / [%] exact
- Top 5 linked pages: [list]
- Recent velocity: [n] new RDs / month (last 12)

## Competitive gap
| Competitor | Referring domains | DR 70+ links | Gap multiplier |
|------------|-------------------|--------------|----------------|
| Supergoop | n | n | 5x |
| Saie | n | n | 3x |
| ILIA | n | n | 4x |
| EltaMD | n | n | 6x |

**Headline gap:** [1-2 sentences on the dominant gap]

## Target assets (link destinations)
| Asset | Type | Cluster | Priority | Expected yield | Readiness |
|-------|------|---------|----------|----------------|-----------|
| /guides/mineral-sunscreen | Pillar | sun-care | 1 | High | Live |
| /quiz/skin-type-finder | Tool | skincare-routine | 1 | High | Live |
| /blog/what-is-mineral-sunscreen | Evergreen anchor | sun-care | 1 | Medium-high | Live |
| /reports/2026-sun-care-survey | Original data | sun-care | 1 | High | Planned (Q2) |
| ... | ... | ... | ... | ... | ... |

## Target sites (link sources)

### Tier 1 — DR 70+ (premium publishers)
| Site | DR | Channel | Status |
|------|----|----|--------|
| Wirecutter | 91 | Digital PR | Cold |
| NYT Wirecutter | 95 | Digital PR | Cold |
| Cosmopolitan | 89 | Digital PR / Guest | Cold |
| Byrdie | 82 | Digital PR / HARO | Warm (1 prior placement) |
| Allure | 84 | Digital PR | Cold |
| ... | ... | ... | ... |

### Tier 2 — DR 50-70 (specialised publications)
[same shape, ~50-100 entries]

### Tier 3 — DR 30-50 (niche / smaller)
[same shape, ~100-200 entries; can be summary]

## Tactical channel mix

### Digital PR — 3-5 campaigns / year
- **Campaign 1 (Q2):** original data — "2026 Sun-Care Survey." Pitch angle: dermatologist-reviewed survey of 1,000 sunscreen users; novel findings on application habits.
- **Campaign 2 (Q3):** seasonal commentary — summer skin-tone tolerance data.
- **Campaign 3 (Q4):** ingredient transparency report.
- **Expected yield:** 10-25 Tier-1/2 links per campaign.
- **Skill:** `plan-digital-pr-campaign`.

### HARO / journalist outreach — ongoing
- Daily query monitoring; respond to 5-10 queries/week.
- **Expected yield:** 2-5 placements/month (mostly Tier-2/3).
- **Skill:** `set-up-haro-response-system`.

### Guest posting — 4-8 placements / quarter
- Target publications: [list specific publications open to contributors].
- Content angles: ingredient transparency, dermatologist-reviewed how-tos, skin-tone-inclusive content.
- **Expected yield:** 1-2 quality Tier-2 placements per quarter.
- **Skill:** `plan-guest-posting-campaign`.

### Broken-link building — 10-15 links / quarter
- Target: skincare / sun-care / wellness publications with broken outbound links.
- **Expected yield:** 10-15 placements per quarter (Tier-2/3 mostly).
- **Skill:** `plan-broken-link-campaign`.

### Brand-mention recovery — 5-15 links / quarter
- Monitor unlinked mentions; convert via outreach.
- **Expected yield:** 50-70% conversion rate on warm unlinked mentions.
- **Skill:** `monitor-brand-mentions`.

### Niche-specific
- Dermatologist citation outreach (3-5 placements / year).
- Podcast guest spots (2-4 / year).
- Partner / retailer link program (ongoing).

## Cadence + targets
- Monthly target: 8-15 new referring domains.
- Quarterly target: 25-45 new RDs; +1 Tier-1 placement.
- Annual target:
  - RD growth: 145 → 280 (+93%).
  - Cluster-level lift: pillar position +3 on priority terms.
  - Sun-care cluster non-branded organic +60%.

## Success metrics

### Output (campaign health)
- New referring domains added.
- Link velocity (sustained, not spiked).
- DR-tier distribution of new links.
- Anchor-text distribution (mix maintained).

### Outcome (business impact)
- Pillar-page position on priority terms.
- Cluster-level non-branded organic traffic.
- Branded-search lift (PR halo signal).

### Anti-vanity
- Explicitly NOT tracking total backlink count alone (easily inflated by low-quality links).

## Risk + compliance guardrails
- ❌ No paid links / sponsored content reported as editorial.
- ❌ No PBN / link-farm usage.
- ❌ No link-exchange schemes (one-for-one swap).
- ✅ Editorial-only outreach.
- ✅ Anchor-text mix: ~40% branded / ~20% naked / ~25% partial / ~10-15% exact.
- ✅ Velocity smoothed; no 50-link weeks.
- ✅ All outreach personalised; no spam-volume sends.

## Operational dependencies
- Outreach process: CRM + email templates + follow-up cadence. [✅ in place / ❌ build via `design-outreach-process`].
- Asset readiness: [✅ all live / ⚠ Q2 data report still in production].
- Owner: [name / agency partner].
- Approval workflow: who signs off on pitches / responses.

## Risks and watchouts
3-5 specific risks. E.g. "Tier-1 PR placements have high variance — 1-2 per quarter is plausible, 0 is also plausible; don't anchor the plan on Tier-1 alone"; "Original-data report depends on survey design + dermatologist review; schedule 6-8 weeks of lead time"; "Anchor-text drift toward exact-match is a manipulation signal; QA every campaign"; "Branded-search lift takes 6-12 months to materialise from PR; report patiently."

## Open questions for the user
- [ ] Confirm priority cluster weighting (which clusters get more link investment).
- [ ] Confirm budget / capacity for digital PR (highest-yield, highest-cost channel).
- [ ] Confirm asset readiness (any Tier-1 destination assets that need pre-work).
- [ ] Confirm in-house owner vs. agency / contractor partnership.
- [ ] Confirm outreach process is in place (or schedule `design-outreach-process`).
```

Save the produced file to `businesses/<slug>/off-page/link-building-plan-[YYYY-QQ].md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Current state quantified (RDs, DR distribution, anchor distribution, velocity).
- Competitive gap quantified (top 3-5 competitors with multiplier).
- Target assets inventoried (priority + expected yield + readiness).
- 3-tier target site list (Tier 1 named specifically; Tier 2/3 sized appropriately).
- Tactical channel mix is balanced (not 100% on one channel).
- Cadence + targets are concrete monthly / quarterly / annual numbers.
- Success metrics include outcome (cluster ranking lift) not just output (link counts).
- Risk + compliance guardrails are explicit.
- Operational dependencies (outreach process, asset readiness, owner) flagged.

## Common mistakes to avoid

- Don't propose a plan without link-worthy assets in place. Recommend asset-build first.
- Don't anchor the plan on one channel. Diversification matters; channels have variable yield.
- Don't propose Tier-1 placements as if they're predictable. They're high-variance; plan for medium-yield channels in parallel.
- Don't track total backlinks as the primary metric. Cluster-level ranking lift is what matters.
- Don't recommend paid links, link exchanges, or PBNs under any framing.
- Don't skip the anchor-text discipline. Over-optimised anchor profiles are manipulation signals.
- Don't set unrealistic cadence (50 RDs / month). 8-15 / month is healthy mid-stage; bursts trigger algorithmic suspicion.
- Don't omit the operational dependencies. The best plan fails if there's no outreach process.

## Example

**Input (abbreviated):** Field & Sun. Cluster map (28 clusters). Live assets: mineral-sunscreen pillar + skin-type quiz + 3 evergreen anchors. Current RDs: 145. Competitors: Supergoop 850, Saie 480, ILIA 620, EltaMD 920.

**Output (abbreviated):**

Current state: 145 RDs, anchor mix 60% branded / 25% naked / 12% partial / 3% exact (healthy). DR distribution: 4% DR 70+ / 18% 50-70 / 38% 30-50 / 40% <30.

Gap: 3-6x competitor average. Headline gap is at Tier 1 (only 6 DR 70+ links vs Supergoop's 70+).

Target assets: pillar (P1), quiz (P1), evergreen anchor (P1), planned 2026 sun-care survey (P1), plus 3 priority spokes (P2).

Target sites: 28 Tier 1 (Wirecutter, NYT, Cosmo, Byrdie, Allure, Refinery29, Self, Vogue, etc.); 92 Tier 2 (skincare publications, dermatologist blogs); 184 Tier 3 (niche / regional).

Channel mix: digital PR (3 campaigns; Q2 data report, Q3 seasonal, Q4 ingredient transparency); HARO ongoing; guest posting 4 placements/quarter; broken-link 12 placements/quarter; mention recovery 8 placements/quarter; dermatologist citation 4 placements/year.

Cadence: 12 RDs/month target; 36 RDs/quarter; 145 RDs annual gain.

Success metrics: pillar position 11 → 6; sun-care cluster non-branded +60%; branded-search +20%.

Risks: Tier-1 PR variance; data-report production timeline; outreach team capacity (currently 0.5 FTE; recommend 1.0 FTE).

Saved to `businesses/field-and-sun/off-page/link-building-plan-2026-Q2.md`.
