---
name: plan-broken-link-campaign
description: Plans a broken-link building campaign: prospecting method, replacement content strategy, outreach template, and success metrics. Use to earn links by replacing dead resources.
---

# Plan Broken-Link Campaign

This skill produces the broken-link-building campaign plan. Output covers replacement assets, prospecting, tooling, outreach, cadence, tracking.

The skill is opinionated about a few things: replacement assets must topically match (otherwise it's spam); Wayback Machine verification is non-negotiable (don't pitch based on the broken link's URL alone); personalised pitches only (templated mass-pitches damage sender reputation); cap effort at 30-50 placements/quarter (yield ceiling).

## When to use this skill

- The user has shipped link-worthy assets (pillars, evergreen, tools) and wants to invest in broken-link building.
- The user is filling channels in the off-page mix and needs a steady-yield contributor.
- The user is briefing a contractor / agency on the broken-link channel.
- The user is running a quarterly off-page review.

## When NOT to use this skill

- The user wants digital PR — use `plan-digital-pr-campaign`.
- The user wants guest posting — use `plan-guest-posting-campaign`.
- The user wants HARO setup — use `set-up-haro-response-system`.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), brand voice (8).
2. **Replacement asset list** — required. Pillar pages, evergreen anchors, tools, comparison pages, key spokes. Without these, the channel has nothing to pitch.
3. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Prospecting categories align to clusters.
4. **Existing tooling** — Ahrefs / Semrush / SEO suite. Affects prospecting capacity.
5. **Capacity** — required. Hours/week available.
6. **Past broken-link work** — optional. Past placements + conversion rate.

If replacement assets list is empty, push back. Channel has no inventory.

## Process

1. **Replacement-asset inventory.**
   - Pillars (high replacement value).
   - Evergreen anchors (high replacement value).
   - Tools / calculators / quizzes (high; novel + linkable).
   - Comparison / roundup pages (medium).
   - High-impressions blog spokes (medium).
   - Resource pages / glossaries (medium).
   For each: URL, primary topic, expected replacement-pitch fit (high / medium / low).
2. **Prospect categories.** Search queries / patterns that surface link-rich pages.
   - "[topic] resources"
   - "[topic] guide list"
   - "best [topic] tools / blogs / sites"
   - "[topic] reading list"
   - "[topic] external links"
   - "useful [topic] resources"
   - University / .edu pages on the topic (often link-heavy, often broken).
   - Government .gov pages.
   - Non-profit pages.
   For Field & Sun: "skincare resources," "sun protection guides," "dermatology resources," "best skincare blogs," "mineral sunscreen lists," "sun-care ingredient resources" (etc.; ~15-25 queries).
3. **Tooling.**
   - **Broken-link discovery:** Ahrefs Site Explorer (broken-outbound-links report) — most efficient. Alternative: Semrush, Sitechecker, Dr. Link Check, Check My Links Chrome extension.
   - **Verification:** Wayback Machine (web.archive.org) — confirms what the broken target was.
   - **Outreach:** Lemlist / Mailshake (per `design-outreach-process`).
4. **Workflow.**
   - **Step 1 (prospecting):** run search queries; compile list of 30-50 prospect URLs.
   - **Step 2 (broken-link discovery):** scan each prospect URL for broken outbound links.
   - **Step 3 (topical-match verification):** for each broken target — Wayback Machine; confirm topic.
   - **Step 4 (replacement-asset match):** match brand asset to broken target.
   - **Step 5 (contact-finding):** editor / webmaster / contact-page form for each prospect.
   - **Step 6 (outreach):** personalised pitch (template + variables).
   - **Step 7 (follow-up):** Day 5-7 + Day 12-14.
   - **Step 8 (tracking):** placements logged.
5. **Pitch template.**

   ```
   Hi [Name],

   I was reading your [piece title or resource page], and noticed the link to [broken target] (in section [X]) is no longer working — looks like the original page was retired.

   Field & Sun has a similar resource that might be a good replacement: [URL]. It covers [topic], with [unique angle — original data, methodology, etc.].

   Either way — wanted to flag the broken link so you could fix it.

   Best,
   [Sender]
   ```

   Length: 3-4 short paragraphs.
6. **Cadence.**
   - Prospecting: 3-4 hrs/week.
   - Outreach: 2 hrs/week.
   - Total: ~5-6 hrs/week.
7. **Targets.**
   - Prospecting yield: 50-100 prospect pages/week → 5-15 broken-link matches.
   - Outreach yield: 5-10 personalised pitches/week.
   - Conversion rate: 5-12%.
   - Placements: 5-12/month; 15-30/quarter.
8. **Placement tracking.**
   - Prospect URL.
   - Broken target URL + Wayback verification URL.
   - Replacement asset.
   - Contact + pitch date + follow-ups.
   - Outcome (converted / declined / no response).
   - Placement URL + link quality + anchor.
9. **Quarterly review.** Conversion rate, prospect-category yield, asset-by-asset performance, ceiling check.
10. **Write the plan.**

## Output format

```markdown
# Broken-Link Campaign Plan — [Business name]

**Plan period:** [Q2 2026]
**Plan date:** [date]
**Owner:** [name / role]
**Target placements:** [n / quarter]

## Replacement-asset inventory
| Asset | URL | Primary topic | Cluster | Replacement fit |
|-------|-----|---------------|---------|-----------------|
| Mineral-sunscreen pillar | /guides/mineral-sunscreen | mineral sunscreen guide | sun-care | High |
| Skin-type quiz | /quiz/skin-type-finder | skin type identification | skincare-routine | High |
| Evergreen "what is mineral sunscreen" | /blog/what-is-mineral-sunscreen | mineral sunscreen explainer | sun-care | High |
| Three-skin-tone test report | /reports/three-skin-tone-testing | testing methodology | sun-care | Medium |
| ... | ... | ... | ... | ... |

## Prospect categories (search queries)
1. "skincare resources"
2. "sun protection guides"
3. "dermatology resources"
4. "best skincare blogs"
5. "mineral sunscreen list"
6. "sun-care ingredient resources" (etc.)
... (15-25 total)

### Useful prospect-page types
- "Best [category] resources" lists.
- University .edu skin-health pages.
- Non-profit (e.g., American Academy of Dermatology) resource pages.
- Wellness / lifestyle blogs with curated link sections.

## Tooling
- **Broken-link discovery:** Ahrefs Site Explorer — broken-outbound-links report (paid, $99-449/mo). Backup: Check My Links (Chrome extension, free).
- **Verification:** Wayback Machine.
- **Outreach:** Lemlist + Apollo (per outreach manual).
- **Contact-finding:** Hunter.io, Apollo, LinkedIn Sales Navigator.

## Workflow

### Step 1: Prospecting (3-4 hrs/week)
- Run search queries.
- Compile 50-100 prospect URLs.
- Filter for credibility (skip spam-network / low-quality target sites).

### Step 2: Broken-link discovery (1-2 hrs/week)
- Run Ahrefs broken-outbound-links report on each prospect URL.
- Filter for broken-target topical match.

### Step 3: Topical-match verification
- Wayback Machine for each candidate broken target.
- Confirm original topic matched a Field & Sun replacement asset.

### Step 4: Replacement-asset match
- Match topically.
- Verify the brand's replacement is high-quality.

### Step 5: Contact-finding
- Editor / contributor / webmaster contact.

### Step 6: Outreach (2 hrs/week)
- Personalised pitch (3-4 paragraphs).
- Send via Lemlist; track in CRM.

### Step 7: Follow-up
- Day 5-7: gentle bump.
- Day 12-14: final follow-up.

### Step 8: Tracking + handoff
- Outcome logged in CRM.
- If converted: confirm placement + link quality.
- If declined / unresponsive: note for relationship history.

## Pitch template

```

Hi [Name],

I was reading your [piece title or resource page], and noticed the link to [broken target] (in section [X]) is no longer working — looks like the original page was retired.

Field & Sun has a similar resource that might be a good replacement: [URL]. It covers [topic], with [unique angle].

Either way — wanted to flag the broken link so you could fix it.

Best,
[Sender]

```

## Cadence + targets
- Prospecting: 3-4 hrs/week.
- Outreach: 2 hrs/week.
- Total: 5-6 hrs/week.
- Pitches sent: 5-10/week.
- Conversion target: 5-12%.
- Placements: 5-12/month; 15-30/quarter.

## Placement tracking schema
| Prospect URL | Broken target | Wayback URL | Replacement asset | Contact | Pitch date | Follow-ups | Outcome | Placement URL | Link quality | Anchor |
|--------------|---------------|-------------|-------------------|---------|------------|------------|---------|---------------|--------------|--------|

## Quarterly review questions
- Which prospect categories yielded most?
- Which replacement assets converted best?
- Conversion rate trend?
- Approaching channel ceiling? (>30 placements/quarter usually means rebalance.)

## Acceptance criteria
- [ ] Replacement-asset inventory complete.
- [ ] 15-25 prospect categories defined.
- [ ] Tooling configured (Ahrefs / Wayback / outreach stack).
- [ ] Pitch template approved.
- [ ] Tracking schema in CRM.
- [ ] First week's prospecting + outreach run.
- [ ] Cadence on calendar.

## Risks and watchouts
3-5 specific risks. E.g. "Sender reputation — broken-link outreach at high volume can trigger spam filters; cap volume + personalise"; "Topical-match drift — pressure to scale tempts brands to pitch loose matches; resist; flag every borderline case for review"; "Channel ceiling — yield drops past 30/quarter; don't try to scale beyond"; "Mass-pitch tools — some 'broken link tools' send templated outreach automatically; never use them"; "Tier 1 publications fix their own broken links fast; don't expect Tier 1 yield from this channel."

## Open questions
- [ ] Confirm Ahrefs / Semrush access (or alternative tool).
- [ ] Confirm capacity (~5-6 hrs/week).
- [ ] Confirm replacement-asset list final.
- [ ] Confirm CRM / tracking process.
```

Save the produced file to `businesses/<slug>/off-page/broken-link-plan-[YYYY-QQ].md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Replacement-asset inventory specific (URLs + topics + fit assessment).
- Prospect categories cover 15-25 query patterns; include .edu / .gov / non-profit angles.
- Tooling matched to budget (Ahrefs preferred; alternatives noted).
- Workflow has 8 steps with time allocation.
- Pitch template is short + polite + specific.
- Cadence + targets realistic (5-12 placements/month).
- Tracking schema covers prospecting → placement.
- Quarterly review questions concrete.

## Common mistakes to avoid

- Don't recommend mass-pitch automated tools. Damages sender reputation.
- Don't propose pitching loose topical matches. Spam pattern.
- Don't skip Wayback verification.
- Don't pitch homepage as replacement for specific resource. Topical-equivalent only.
- Don't anchor-spam (exact-match anchors). Mix.
- Don't propose >30 placements/quarter as primary target. Channel ceiling.
- Don't expect Tier 1. They fix their own links fast.
- Don't omit follow-ups.

## Example

**Input (abbreviated):** Field & Sun. Replacement assets: pillar + quiz + 3 evergreen + 2 reports. Capacity: 6 hrs/week. Past broken-link work: none.

**Output (abbreviated):**

Replacement-asset inventory: 7 high-fit assets across sun-care + skincare-routine clusters.

Prospect categories: 18 search-query patterns including .edu (university dermatology pages), AAD (American Academy of Dermatology) resource pages, wellness-blog roundups, sustainable-beauty resource lists.

Tooling: Ahrefs ($99/mo paid) + Wayback + Lemlist + Apollo.

Workflow: 8 steps; ~5-6 hrs/week split prospecting (3-4) + outreach (2).

Pitch template: 3-paragraph; lead-with-broken-link pattern.

Targets: 6-10 pitches/week; 5-12% conversion; 6-12 placements/month.

Risks: scale ceiling; topical-match drift; sender-reputation if volume too high.

Saved to `businesses/field-and-sun/off-page/broken-link-plan-2026-Q2.md`.
