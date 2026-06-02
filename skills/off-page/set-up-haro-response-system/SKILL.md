---
name: set-up-haro-response-system
description: Sets up a journalist-query response system: source filters, response templates, and tracking. Use to earn editorial links and mentions from HARO, Qwoted, or similar services.
---

# Set Up HARO Response System

This skill produces the reactive-PR operational plan. Output is the system covering platforms, filtering, templates, cadence, tracking, and review.

The skill is opinionated about a few things: filtering matters more than response craft (most queries don't fit; saying no fast saves time); credentialed responses outperform marketing-team responses; same-day response window is non-negotiable for HARO queries; platform diversification (don't depend solely on Connectively); track placements or the system decays.

## When to use this skill

- The user is setting up reactive PR for the first time.
- The user has signed up for HARO / Connectively but isn't using it systematically.
- The user is solving low-yield-on-HARO problem.
- The user is running an annual review of reactive PR.

## When NOT to use this skill

- The user wants proactive PR campaign planning — use `plan-digital-pr-campaign`.
- The user wants guest-post planning — use `plan-guest-posting-campaign`.
- The user wants general outreach process design — use `design-outreach-process`.
- The user wants brand-mention monitoring — use `monitor-brand-mentions`.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical fields: products/services, customer, and brand voice from `business_context.md`.
2. **Available experts** — required. Founder, in-house experts, dermatologist / advisor, researchers. Affects credential-match opportunities.
3. **Existing HARO / reactive PR effort** — list past placements + platforms tried.
4. **Capacity** — required. Hours/day available for query monitoring + responses.
5. **Topical scope** — required. Categories the brand can credibly speak to (sun-care, skincare ingredients, skin-tone diversity, D2C founder, sustainable beauty, etc.).
6. **Geographic scope** — affects which platforms.

If experts + topical scope are missing, ask. The system filters on these.

## Process

1. **Platform selection.**
   - **Connectively (formerly HARO):** primary platform; free tier OK to start; paid ($29-149/mo) for filtering.
   - **Qwoted:** secondary; smaller volume; some prefer the UI.
   - **Featured.com:** founder + expert focused; worth testing.
   - **ProfNet:** B2B / industry; skip for D2C consumer.
   - **Direct journalist watching:** non-platform; supplements platforms.
2. **Email monitoring + triage.**
   - Auto-forward platform emails to shared marketing inbox.
   - Daily 30-60 min scan window.
   - Triage role: marketing manager flags qualifying queries; routes to founder / expert for credential-required responses.
3. **Filtering rules.**

   **Pursue:**
   - Topic match (sun-care / skincare ingredients / skin-tone / D2C founder / etc.).
   - Credential match (have the right person to quote).
   - Publication tier 1-2 (DR 50+ when known) or topical-relevant Tier 3.
   - Specific question (not "looking for any source").

   **Skip:**
   - Anonymous publication (often content-mill).
   - Off-topic.
   - No matching credentials.
   - Tier 4 / unverified / "looking for backlinks" framing.
   - Already-pitched to from this brand (avoid double-pitching).

4. **Response template library.** 5-8 templates:
   - **Dermatologist commentary:** for skincare-safety / mechanism queries.
   - **Founder quote:** for brand-perspective queries.
   - **Data citation:** for queries asking for stats / research.
   - **Product / methodology mention:** for queries seeking specific brand examples.
   - **Trend commentary:** for "what's happening in [category]" queries.
   - **Counter-narrative:** when brand has a contrarian / informed take.
   Each template: subject (matches platform format), credential statement, specific answer, supporting URL, sender contact.
   Length: 100-200 words.
5. **Triage workflow.**
   - **Marketing manager:** scans queries; flags qualifiers; pre-fills template draft.
   - **Founder:** reviews / approves brand-perspective responses.
   - **Dermatologist advisor:** reviews / approves credential-required responses (may have 24-48 hr turnaround — relevant to query window).
   - **Final send:** marketing manager.
6. **Cadence.**
   - **Daily (weekday):** 30-60 min scan + responses.
   - **Hourly check (during high-priority queries):** for tight-window Tier 1 queries.
   - **Weekly review:** placements + response quality + queries-missed.
   - **Monthly:** conversion-rate review; platform-yield comparison.
7. **Placement tracking schema.**
   - Query (platform, journalist, publication, topic).
   - Response (template used, sender, response time).
   - Outcome (placement landed / declined / no response).
   - Placement (URL, link quality, anchor text).
   - Relationship signal (warm follow-up opportunity?).
8. **Direct-journalist-watching extension.**
   - List 20-50 named journalists who've recently covered the brand's topics.
   - Monitor their bylines via Twitter / LinkedIn / Google Alerts.
   - When they publish a relevant piece: pitch a follow-on angle within 1-2 weeks.
9. **Quarterly review.**
   - Platform yield comparison (Connectively vs Qwoted etc.).
   - Response-rate trend.
   - Placement quality (Tier 1-2 vs Tier 3 mix).
   - Template performance.
10. **Write the system.**

## Output format

```markdown
# HARO + Journalist-Outreach System — [Business name]

**System date:** [date]
**Owner:** [name / role]
**Effective period:** [annual]

## Platforms

### Primary
- **Connectively (formerly HARO):** [free tier / $X/mo paid].
- **Reasoning:** [why included]

### Secondary
- **Qwoted:** [free / paid tier].
- **Featured.com:** [free / paid tier].
- **ProfNet:** skip (B2B-leaning; not aligned).

### Direct journalist watching
- 30-named-journalist list maintained separately.

## Email monitoring + triage
- **Inbound inbox:** [shared address — `press-inbox@brand.com`].
- **Auto-forwards:** all platform emails.
- **Triage role:** [Marketing manager].
- **Daily scan window:** [time, e.g., 9-9:30 AM].

## Filtering rules

### Pursue queries that match
- [ ] Topic match (sun-care, skincare ingredients, skin-tone diversity, D2C founder, sustainable beauty).
- [ ] Credential match (have appropriate expert).
- [ ] Tier 1-2 publication (DR 50+ when known) OR topical-relevant Tier 3.
- [ ] Specific question.

### Skip queries
- [ ] Anonymous publication.
- [ ] Off-topic.
- [ ] No matching credentials.
- [ ] Tier 4 / "linkbuilding service" framing.
- [ ] Already-pitched (within 30 days).

## Response template library

### Template 1: Dermatologist commentary
- **Use case:** skincare safety / mechanism queries.
- **Sender:** Dr. [Name].
- **Length:** 150-180 words.
- **Structure:** credential intro → specific answer → supporting data → URL.
- **Body template:**
```

Hi [Journalist],

I'm Dr. [Name], a board-certified dermatologist and advisor to Field & Sun. Re your query on [topic]:

[Specific answer — 80-120 words; cites mechanism / data / clinical context.]

Happy to expand or provide additional sources. More on Field & Sun's three-skin-tone testing methodology here: [URL].

Best,
Dr. [Name]
[contact]

```

### Template 2: Founder quote
[same shape]

### Template 3: Data citation
[same shape]

### Template 4: Product / methodology mention
[same shape]

### Template 5: Trend commentary
[same shape]

### Template 6: Counter-narrative
[same shape]

## Triage workflow

### Step 1: Marketing manager scans (10-15 min)
- Read inbound queries.
- Filter using rules above.
- Flag qualifiers; categorise by template.

### Step 2: Pre-fill template draft (5-10 min per query)
- Pick template.
- Personalise variables.
- Add specific answer / quote.

### Step 3: Credential review (if needed)
- Founder reviews / approves brand-perspective drafts (typical 1-hr turnaround).
- Dermatologist reviews credential-required drafts (typical 24-hr; flag if query window <24 hr).

### Step 4: Send
- Marketing manager final-checks + sends.

## Cadence
- **Daily weekday scan:** [time].
- **Tight-window queries:** hourly check until response sent.
- **Weekly review:** Friday 30 min — placements + response quality + missed.
- **Monthly review:** first Monday — conversion rate + platform yield.
- **Quarterly review:** end of quarter — strategic adjustments.

## Placement tracking schema
| Query | Platform | Journalist | Publication | Topic | Template used | Sender | Response time | Outcome | Placement URL | Link quality |
|-------|----------|------------|-------------|-------|---------------|--------|---------------|---------|---------------|--------------|
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

## Direct-journalist-watching list
| Journalist | Publication | Topics | Last coverage relevant | Last contacted |
|------------|-------------|--------|------------------------|----------------|
| [Name] | Allure | mineral sunscreen, skincare ingredients | [Piece + date] | [Date] |
| [Name] | NYT Wirecutter | sunscreens, skincare | [Piece + date] | [Date] |
| ... (20-50 entries) | ... | ... | ... | ... |

## Targets
- **Daily query scan:** 30-60 min (weekdays).
- **Qualifying queries / week:** 5-15.
- **Response rate (qualifier-to-response):** 60-80%.
- **Conversion rate (response-to-placement):** 25-40%.
- **Placements / month:** 4-8 typical; 2-5 acceptable.

## Quarterly review questions
- Which platform earned the most placements per hour?
- Which template type converted best?
- Which journalists became repeat-relationship signals?
- What topics did we miss queries on?
- Should we add / drop a platform?

## Acceptance criteria
- [ ] Connectively + Qwoted + Featured signed up and configured.
- [ ] Inbound inbox + auto-forwarding set up.
- [ ] Filtering rules documented.
- [ ] 5-8 response templates drafted + approved.
- [ ] Triage workflow assigned (marketing / founder / dermatologist).
- [ ] Daily scan cadence on calendar.
- [ ] Placement-tracking schema in CRM / spreadsheet.
- [ ] Direct-journalist-watching list of 20-50 names.
- [ ] First weekly review scheduled.

## Risks and watchouts
3-5 specific risks. E.g. "Platform stability — Connectively is the rebranded HARO; future changes may affect access; diversify to Qwoted + Featured"; "Dermatologist response time — many queries close in <24 hrs; if dermatologist is unavailable that day, those queries are lost; have backup credential where possible"; "Template fatigue — same response sent to multiple queries flagged by journalists; refresh + rotate templates"; "Anonymous queries from content mills — strict filter required"; "Over-investment in HARO — it's steady-yield, not exponential; cap at 25-30% of off-page hours."

## Open questions
- [ ] Confirm marketing manager owns daily scan.
- [ ] Confirm founder + dermatologist availability for credential review.
- [ ] Confirm budget for paid tiers (Connectively, Qwoted).
- [ ] Confirm CRM / tracking system.
```

Save the produced file to `businesses/<slug>/off-page/haro-system.md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Platforms named with reasoning; ProfNet skipped for consumer brands.
- Filtering rules explicit (pursue / skip).
- Response templates 5-8, channel-specific, with credential-statement structure.
- Triage workflow named with roles + turnaround expectations.
- Cadence calendared (daily / weekly / monthly / quarterly).
- Placement-tracking schema includes Tier + link-quality columns.
- Direct-journalist-watching list at least 20 names.
- Targets realistic (4-8 placements / month).

## Common mistakes to avoid

- Don't recommend HARO without filtering rules. Drowning in irrelevant queries kills the system.
- Don't propose marketing-team responses to credentialed queries. Lose to credentialed competitors.
- Don't skip same-day response. Most queries close fast.
- Don't depend on one platform. Connectively rebrand showed platform risk.
- Don't omit the direct-journalist-watching layer. Higher-quality complement.
- Don't propose 60% of off-page hours on HARO. 25-30% max; it's steady-yield.
- Don't skip placement tracking. Without it, optimisation impossible.
- Don't forget anonymous-query filter. Content mills disguise themselves.

## Example

**Input (abbreviated):** Field & Sun. No current HARO discipline; 2 placements / 12 months. Available experts: founder + dermatologist advisor. Capacity: 30-60 min/day marketing manager.

**Output (abbreviated):**

Platforms: Connectively (paid $29/mo standard tier) + Qwoted (free) + Featured (free trial). Skip ProfNet.

Filtering rules: skincare / sun-care / skin-tone / D2C founder topic match; credential match (founder or dermatologist); Tier 1-2 priority; skip anonymous.

Templates (6): dermatologist commentary, founder quote, data citation, product / methodology mention, trend commentary, counter-narrative.

Triage: marketing manager scans + drafts; founder reviews brand-perspective in 1 hr; dermatologist reviews credential-required in 24 hr (flag tight-window queries).

Cadence: daily 9-9:30 AM scan; weekly Friday review; monthly first Monday review.

Direct-journalist list: 30 named journalists across Allure, Byrdie, Refinery29, Self, Wirecutter, Cosmopolitan, etc. who've covered sun-care / skincare-ingredients in the past 6 months.

Targets: 5-12 qualifying queries/week; 60-80% response rate; 25-40% conversion; 4-7 placements/month.

Risks: dermatologist availability; query-window mismatch; platform stability.

Saved to `businesses/field-and-sun/off-page/haro-system.md`.
