---
name: monitor-brand-mentions
description: Produces a brand-mention monitoring + conversion plan covering tooling selection (free vs. paid; Google Alerts / Brand24 / Mention / Talkwalker), alert keyword set (brand + variants + products + founder + key terms), review cadence (weekly + monthly + quarterly), quality filter (which mentions are worth conversion outreach), outreach templates (short, polite, specific), sentiment-tracking schema (positive / neutral / negative trends), 90-day historical backfill plan, and conversion-rate targets (50-70%). Output is the operating brief for the brand-mention programme — the lowest-effort, highest-conversion off-page tactic. Use whenever the user asks to "monitor brand mentions," "set up brand monitoring," "convert mentions to links," "track when our brand is mentioned," "find unlinked mentions," "set up Google Alerts for our brand," or has decided to invest in mention-recovery and needs the setup brief. Also use as an annual cadence skill — keywords + tooling + sentiment baselines refresh as the brand evolves. Do not use for branded-SERP monitoring (use `audit-branded-serp`), broader off-page strategy (use `plan-link-building-campaign`), or outreach process design (use `design-outreach-process`).
---

# Monitor Brand Mentions

This skill produces the brand-mention monitoring + conversion plan. Output is the operating brief covering tooling, keywords, cadence, outreach, and sentiment tracking.

The skill is opinionated about a few things: even free tooling (Google Alerts) is meaningfully better than no tooling; weekly review discipline is non-negotiable; outreach has to be personalised (not "you mentioned us, please link"); 50-70% conversion is realistic if outreach quality is good; sentiment tracking is the diagnostic layer most brands skip.

## When to use this skill

- The user is setting up brand monitoring for the first time.
- The user has tooling but no review / outreach discipline.
- The user is running an annual review of the off-page programme.
- The user is briefing an in-house owner / agency on the mention-monitoring scope.

## When NOT to use this skill

- The user wants branded-SERP monitoring (page 1 of "[brand]" results) — use `audit-branded-serp`.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.
- The user wants outreach process / CRM design — use `design-outreach-process`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), brand voice (8).
2. **Brand name + variants** — required. "Field & Sun," "Field and Sun," "fieldandsun.com." Misspellings worth tracking if common.
3. **Product names** — list of all named products.
4. **Founder / key person names** — required. Founder; advisors; spokespersons.
5. **Existing tooling** — optional. If tools already in place, audit; otherwise recommend.
6. **Capacity** — hours/week available for review + outreach.
7. **Past mention-recovery work** — optional. Conversion rates, what worked.

If brand-name variants + product list are missing, ask. Keyword set is the foundation.

## Process

1. **Tooling decision.**
   - **Free baseline:** Google Alerts. Set up alerts for every keyword. Limitations: only catches Google-indexed pages; no historical search; no sentiment.
   - **Paid mid-tier ($50-150/mo):** Brand24, Mention, Awario. Adds historical search, social monitoring, sentiment.
   - **Paid enterprise ($500+/mo):** Talkwalker, Meltwater, Cision. Adds analyst-grade reporting, broader social coverage.
   - For most brands: free Google Alerts + 1 paid mid-tier tool is the sweet spot.
2. **Build the alert keyword set.**
   - Brand name + variants ("Field & Sun" + "Field and Sun" + "fieldandsun.com").
   - Product names (each product separately).
   - Founder + key persons (founder name; advisor name).
   - Domain (fieldandsun.com).
   - Common misspellings if applicable.
   - Avoid: short brand names that produce false positives (one-word common-word brands need creative filtering).
3. **Establish cadence.**
   - **Weekly (15-30 min):** review new mentions; flag conversion candidates; flag negative mentions.
   - **Monthly (1-2 hrs):** batch outreach for conversion candidates; sentiment review.
   - **Quarterly (1-2 hrs):** sentiment trend analysis; tooling refresh.
4. **Quality filter (which mentions are worth pursuing).**
   - **Pursue:** Tier 1-2 publications (DR 50+, named editor, real audience).
   - **Pursue selectively:** Tier 3 (DR 30-50) if topically relevant or new relationship-worth.
   - **Skip:** spam / irrelevant / low-quality / forum-spam / Reddit threads (depends).
   - **Defensive triage:** Negative mentions → Reputation Management handoff; mis-information mentions → response decision.
5. **Build outreach template.**
   - Short (3 paragraphs max).
   - Personalised (reference specific piece + journalist name).
   - Specific (URL where link should go).
   - Polite (small ask; not entitled).
6. **Sentiment schema.**
   - **Positive:** brand mentioned favourably; quote-able; recommendation context.
   - **Neutral:** brand mentioned in passing; informational context.
   - **Negative:** brand mentioned with criticism, complaint, comparison-where-brand-loses, mis-information.
   - Track quarterly trend; flag anomalies.
7. **Backfill plan.**
   - 90-day historical search via paid tool (or manual via Google search operators if free).
   - Identify all unlinked mentions; categorise (Tier 1-3, sentiment).
   - Pitch the high-value Tier 1-2 unlinked mentions in week 1-2.
8. **Steady-state targets.**
   - Mentions / month: depends on brand awareness; typically 30-200 for mid-stage D2C.
   - Conversion candidates / month: ~30-50% of mentions are unlinked; ~50-70% of those convertible.
   - Conversion rate target: 50-70%.
   - Steady-state link gain: 5-15 link conversions / month.
9. **Handoff routes.**
   - Newsworthy mentions → Digital PR (follow-on coverage opportunity).
   - Negative mentions → Reputation Management.
   - Positive mentions → marketing (testimonials / social proof).
   - Editor relationship signals → Outreach (CRM update).
10. **Write the plan.**

## Output format

```markdown
# Brand-Mention Monitoring Plan — [Business name]

**Plan date:** [date]
**Owner:** [name / role]
**Effective period:** [annual / quarterly]

## Tooling

### Recommended setup
- **Free:** Google Alerts (backup; catches Google-indexed mentions).
- **Paid:** [Brand24 / Mention / Awario], [$/mo].
- **Reasoning:** [why this combination matches budget + scope].

### Skipped tools
- [Tool A]: [why not chosen — duplicate features, wrong tier, cost].

## Alert keyword set

### Brand variants
- "Field & Sun"
- "Field and Sun"
- "fieldandsun.com"

### Product names
- "Mineral Sun Drops"
- "Daily Glow Serum"
- ...

### Founder + key persons
- [Founder name]
- [Advisor / dermatologist name]

### Common misspellings
- [if any worth tracking]

### Avoid (false-positive sources)
- [generic words to filter]

## Review cadence

### Weekly review (15-30 min)
- **When:** [day, time]
- **Owner:** [role]
- **Steps:**
  1. Review new mentions.
  2. Flag Tier 1-2 unlinked = conversion candidate.
  3. Flag negative mentions = Reputation Management handoff.
  4. Flag newsworthy = Digital PR follow-on opportunity.
  5. Note positive mentions for marketing.

### Monthly outreach batch (1-2 hrs)
- **Owner:** [role]
- **Steps:**
  1. Send personalised outreach for conversion candidates.
  2. Track responses + conversions in CRM.
  3. Report monthly conversion rate.

### Quarterly sentiment review (1-2 hrs)
- **Owner:** [role]
- **Steps:**
  1. Aggregate sentiment trend.
  2. Identify anomalies (sudden negative spike?).
  3. Tooling tune-up (refresh keywords; add new products).

## Quality filter (pursue / skip)

### Pursue conversion outreach
- DR 50+ publications (Tier 1-2).
- Topically relevant Tier 3 publications (DR 30-50).
- Editor-named pieces.

### Pursue selectively
- Smaller publications with strong topical relevance.
- Industry blogs / podcasts.

### Skip
- Spam / clickbait sites.
- Forum threads (depends on signal).
- Reddit threads (case-by-case).
- Pure aggregator sites.

### Defensive triage
- Negative mention → Reputation Management.
- Mis-information mention → response decision (correct vs. ignore).
- Mass-criticism mention → escalate to founder / leadership.

## Outreach template

### Subject line
- "Quick question about your [piece title]"
- "Re: [piece title] — Field & Sun mention"

### Body
```

Hi [Editor first name],

Thanks for including Field & Sun in your recent [piece title]. Really appreciated [specific detail showing you read it].

Would you be open to linking the Field & Sun mention to [specific URL — usually homepage or relevant PDP]? Happy to provide additional context or assets if helpful.

Either way, thanks for the coverage.

Best,
[Sender]

```

### Length: 3 paragraphs max

## Sentiment-tracking schema

| Mention | Date | Source | Sentiment | Linked? | Conversion outcome |
|---------|------|--------|-----------|---------|-----|
| ... | ... | ... | positive / neutral / negative | yes / no | converted / declined / pending |

## Backfill plan
- **Window:** 90-day historical search via [tool].
- **Owner:** [role]
- **Output:** spreadsheet of mentions + Tier-classification + sentiment + conversion-target flag.
- **Initial outreach batch:** week 1 of programme launch; pitch all Tier 1-2 unlinked.

## Targets
- **Mentions / month (post-backfill):** [n].
- **Conversion candidates / month:** [n].
- **Conversion rate:** 50-70%.
- **Steady-state link gain / month:** [n].

## Handoff routes
- **Newsworthy mention** → `plan-digital-pr-campaign` for follow-on.
- **Negative mention** → `audit-branded-serp` / Reputation Management.
- **Positive mention** → marketing (testimonial / social proof).
- **Editor relationship signal** → `design-outreach-process` (CRM update).

## Acceptance criteria
- [ ] Tooling configured (free + paid).
- [ ] Alert keyword set in place; tested.
- [ ] Backfill complete; initial outreach batch sent.
- [ ] Weekly review cadence on calendar; owner assigned.
- [ ] Monthly outreach batch routine established.
- [ ] CRM / tracking spreadsheet in place.
- [ ] Sentiment-tracking schema initialised.
- [ ] Handoff routes documented.

## Risks and watchouts
3-5 specific risks. E.g. "False positives — common-word brand names produce noise; refine filters"; "Conversion outreach to wrong contact (info@ instead of editor) drops rate; find named editor"; "Negative mention review fatigue — escalate the worst, ignore minor; don't engage every complaint"; "Tooling alerts can lag 24-48 hrs; don't expect real-time."

## Open questions
- [ ] Confirm tooling budget tier.
- [ ] Confirm review owner.
- [ ] Confirm escalation rule for negative mentions.
- [ ] Confirm CRM / tracking system.
```

Save the produced file to `businesses/<slug>/off-page/brand-mentions-plan.md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Tooling matched to budget + use case (not over-engineered).
- Keyword set covers brand + variants + products + key persons; false-positive filters explicit.
- Cadence is calendared (weekly / monthly / quarterly with owners).
- Quality filter explicit (pursue / skip / triage rules).
- Outreach template is short + personalised + specific.
- Sentiment-tracking schema present.
- Backfill plan + initial outreach batch defined.
- Handoff routes to other categories explicit.

## Common mistakes to avoid

- Don't recommend Talkwalker / Meltwater / Cision for small / mid-stage brands. Over-spend.
- Don't omit the quality filter. Without it, outreach effort is dilutive.
- Don't propose generic outreach templates. Personalised matters; this is the channel that earns 50-70% conversion.
- Don't ignore sentiment tracking. The trend is diagnostic.
- Don't skip the backfill. 90 days of historical mentions is a big initial yield boost.
- Don't propose pursuing every Tier 3 mention. Time better spent elsewhere.
- Don't conflate brand-mention monitoring with branded-SERP monitoring. Distinct surfaces.
- Don't forget the handoff routes. Negative mentions, newsworthy mentions, editor signals all feed other workflows.

## Example

**Input (abbreviated):** Field & Sun. No current monitoring. Mid-stage D2C; ~$300/mo budget.

**Output (abbreviated):**

Tooling: Brand24 ($79/mo) + Google Alerts (free backup). Skip Mention (overlap), Talkwalker (over-spend at this stage).

Keywords: "Field & Sun", "Field and Sun", "fieldandsun.com", "Mineral Sun Drops", "Daily Glow Serum", [founder name], [dermatologist advisor name].

Cadence: Friday 30-min review (marketing); first Monday of month 1-2 hr outreach batch (marketing); quarterly sentiment review.

Backfill: 90 days historical via Brand24; expected 80-150 mentions; ~25-45 unlinked Tier 1-2 candidates; initial outreach batch week 1.

Targets: 5-12 conversions/month after backfill stabilises; 60% conversion rate target.

Handoffs: negative → Reputation Management; newsworthy → Digital PR; positive → marketing.

Saved to `businesses/field-and-sun/off-page/brand-mentions-plan.md`.
