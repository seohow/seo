---
name: design-outreach-process
description: Designs an outreach process: prospect criteria, messaging sequence, tracking system, and response playbook. Use to build a repeatable, scalable link acquisition or PR workflow.
---

# Design Outreach Process

This skill produces the outreach operational blueprint. Output is the manual all tactical-channel work consumes — domain + authentication, sender warming, ESP, templates, CRM, cadence, quality controls, compliance.

The skill is opinionated about a few things: dedicated subdomain (don't pollute primary deliverability); named human sender (not generic press@); 8-12 personalised templates across channels (not one generic); 3-4 follow-ups (not 0); CRM is the asset (not optional); compliance is non-negotiable; quality > volume.

## When to use this skill

- The user is setting up outreach infrastructure for the first time.
- The user has tactical work (PR, guest, mention) but no shared operational layer.
- The user is solving a deliverability / response-rate problem.
- The user is running an annual outreach review.

## When NOT to use this skill

- The user wants a tactical-channel campaign — use `plan-digital-pr-campaign`, `plan-guest-posting-campaign`, etc.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.
- The user wants HARO setup — use `set-up-haro-response-system`.
- The user wants brand-mention monitoring — use `monitor-brand-mentions`.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Critical sections: products/services (3), brand voice (8).
2. **Current outreach state** — required. Domain used; sender identity; tooling; CRM; response rate (if known).
3. **Send-volume estimate** — outreach pitches per month / quarter. Affects ESP tier + warming plan.
4. **Geographic scope** — required. EU / UK presence triggers GDPR / PECR compliance.
5. **Existing email infrastructure** — what's the current email setup; is the domain authenticated.
6. **Team size** — who sends outreach; affects training + quality-control needs.

If current outreach state is unknown, ask. The blueprint is calibrated to scale + maturity.

## Process

1. **Domain + authentication.**
   - Recommend dedicated subdomain (`press.brand.com`, `outreach.brand.com`) to isolate deliverability from primary marketing / transactional domain.
   - SPF, DKIM, DMARC must be configured.
   - Test deliverability via mail-tester.com or similar.
2. **Sender warming.**
   - For new subdomain: ramp over 4-6 weeks.
   - Week 1: 5-10 sends/day.
   - Week 2: 15-25 sends/day.
   - Week 3-4: 40-60 sends/day.
   - Week 5+: 60-100+ sends/day (steady-state cap typical).
3. **Sender identity.**
   - Named human format: `firstname@press.brand.com`.
   - Avoid generic addresses (`press@`, `info@`, `outreach@`); 3-5x lower response.
   - First name + brand name in From field (`Sarah from Field & Sun`).
4. **ESP / tooling decision.**
   - **Sending + tracking:** Lemlist, Mailshake, Postaga, Smartlead, Reply.io.
   - **Prospect-finding:** Hunter.io, Apollo, Pipl.
   - **CRM:** Pipedrive, HubSpot, Streak (Gmail-native), Close.
   - Match scale: small team / low volume → free / lightweight; mid-stage → mid-market; enterprise → enterprise.
5. **Template library.** 8-12 templates across channels:
   - **PR pitch (data-led):** for digital-PR campaigns with data assets.
   - **PR pitch (commentary-led):** for expert-commentary angles.
   - **Guest-post pitch:** for contributor pitches.
   - **Guest-post follow-up:** for non-responses.
   - **Mention-recovery:** for unlinked-mention conversion.
   - **Broken-link:** for replacement-pitch outreach.
   - **HARO follow-up:** for journalists who replied via HARO.
   - **Relationship maintenance:** for cultivated journalists who haven't been contacted in 2-3 months.
   Each template: subject line variants, body with 3-5 personalisation variables, CTA, length 3-5 paragraphs.
6. **CRM schema.**
   - Contact: name, role, email, publication / company, LinkedIn.
   - History: dates contacted, templates used, responses, placements landed.
   - Status: cold / warm / hot / dormant / declined.
   - Next: angle to pitch next, follow-up date.
   - Notes: relationship signals, preferences (data vs. commentary, etc.).
7. **Follow-up cadence.**
   - **Day 0:** initial pitch.
   - **Day 4-5:** follow-up 1 — new angle / additional finding.
   - **Day 10-12:** follow-up 2 — deadline / final-call language.
   - **Day 14:** final follow-up (optional; some channels stop at follow-up 2).
   - Each follow-up has its own template (not just "bumping this").
8. **Quality controls.**
   - **Pre-send review** (first 30-60 days): every pitch reviewed before send.
   - **Response-rate monitoring:** target 8-15% on cold / Tier 2-3; 15-30% on warm / mention-recovery.
   - **Deliverability monitoring:** weekly check (mail-tester / Postmark / native ESP reports). Flag if inbox-placement < 80%.
   - **CRM hygiene:** monthly review for stale records; quarterly de-duplication.
9. **Compliance.**
   - **CAN-SPAM (US):** unsubscribe link, accurate sender info, accurate subject line, no misleading from.
   - **GDPR / PECR (EU/UK):** legitimate interest basis (typically OK for journalist outreach), unsubscribe, no behavioural tracking without consent.
   - **CASL (Canada):** opt-in or implied-consent basis.
   - **No scraping behind logins:** use legitimate prospect-finding (Apollo / Hunter pull from public sources).
10. **Team training.** Single shared playbook; templates accessible; CRM workflow documented.
11. **Write the manual.**

## Output format

```markdown
# Outreach Operational Manual — [Business name]

**Manual date:** [date]
**Owner:** [marketing lead / SEO lead]
**Effective period:** [annual]

## Domain + authentication

### Setup
- **Outreach subdomain:** `press.[brand].com` (or current).
- **Authentication:** SPF / DKIM / DMARC validated.
- **Sender format:** `firstname@press.[brand].com`.
- **From-line format:** "Sarah from Field & Sun" (named human + brand).

### Sender warming (new subdomain)
- **Week 1:** 5-10 sends/day.
- **Week 2:** 15-25 sends/day.
- **Week 3-4:** 40-60 sends/day.
- **Week 5+:** 60-100 sends/day steady-state.

## Tooling stack

### Sending + tracking
- **Tool:** [Lemlist / Mailshake / etc.]
- **Reasoning:** [match to scale + budget]

### Prospect-finding
- **Tool:** [Hunter / Apollo / Pipl]

### CRM
- **Tool:** [Pipedrive / HubSpot / Streak / Close]

## Template library

### PR pitch (data-led)
- **Subject:** "Exclusive: [topic] — new data for [publication]"
- **Variables:** [Journalist name], [Publication], [Recent piece reference], [Headline finding], [Expert availability], [Asset URL]
- **Length:** 3-5 paragraphs
- **CTA:** "Embargoed access available"

[Repeat for 8-12 templates: PR commentary, guest pitch, guest follow-up, mention-recovery, broken-link, HARO follow-up, relationship maintenance]

## CRM schema

| Field | Type | Notes |
|-------|------|-------|
| Contact name | text | |
| Role / title | text | |
| Email | email | validated |
| Publication / company | text | |
| LinkedIn | URL | |
| Status | enum | cold / warm / hot / dormant / declined |
| Last contacted | date | |
| Last template used | text | |
| Last response | text | summary |
| Placements landed | number | |
| Next angle to pitch | text | |
| Follow-up date | date | |
| Relationship notes | text | preferences, signals |

## Follow-up cadence
- **Day 0:** initial pitch (template A).
- **Day 4-5:** follow-up 1 — new angle / additional finding (template B; not "just bumping").
- **Day 10-12:** follow-up 2 — deadline / final language (template C).
- **Day 14:** final follow-up (optional, template D).

## Quality controls

### Pre-send review (first 30-60 days)
- Every pitch reviewed by [reviewer role] before send.
- Goal: catch personalisation gaps, voice issues, compliance issues.
- After 60 days, transition to spot-check (10% of sends).

### Response-rate monitoring
| Channel | Target response rate |
|---------|----------------------|
| PR (cold, Tier 1) | 5-10% |
| PR (cold, Tier 2-3) | 8-15% |
| Guest post | 10-20% |
| Mention recovery | 50-70% |
| Broken-link | 5-12% |
| HARO follow-up | 30-50% |

### Deliverability monitoring
- **Weekly check:** inbox-placement rate via [tool].
- **Threshold:** flag if inbox-placement < 80%.
- **Mitigation:** reduce volume, re-warm if needed, audit content.

### CRM hygiene
- **Monthly:** review stale records (no contact in 12+ months).
- **Quarterly:** de-duplicate; archive declined / disengaged contacts.

## Compliance

### CAN-SPAM (US)
- [ ] Unsubscribe link in every email.
- [ ] Physical mailing address in footer.
- [ ] Accurate sender + subject line.

### GDPR / PECR (EU/UK)
- [ ] Legitimate-interest basis documented.
- [ ] Unsubscribe link.
- [ ] No behavioural tracking without consent.

### CASL (Canada)
- [ ] Implied-consent basis (typically valid for journalist outreach).
- [ ] Unsubscribe link.

### Prospect-finding ethics
- [ ] No scraping behind logins.
- [ ] Use legitimate sources (publication websites, LinkedIn opt-out compliant tooling).

## Team training
- **Onboarding:** new senders read manual + shadow first 5 sends.
- **Templates accessible:** [shared doc / CRM templates].
- **CRM workflow:** [documented in manual + tooling].
- **Pre-send review:** [reviewer + cadence].

## Acceptance criteria
- [ ] Outreach subdomain configured + authenticated (SPF / DKIM / DMARC).
- [ ] Sender-warming plan complete or in progress.
- [ ] ESP + prospect tool + CRM all configured.
- [ ] Template library complete (8-12 templates).
- [ ] CRM schema in place; first 50 contacts loaded.
- [ ] Follow-up cadence templates ready.
- [ ] Pre-send review process running.
- [ ] Compliance checklist complete.
- [ ] Team trained.

## Risks and watchouts
3-5 specific risks. E.g. "If primary marketing domain has been used for cold outreach previously, deliverability may already be damaged — set up new subdomain"; "Sender warming takes 4-6 weeks; don't start campaigns during warming"; "Template fatigue — refresh templates quarterly; over-used templates start landing in spam"; "CRM drift — monthly hygiene review or relationships get lost"; "Compliance scope — confirm geographic operations early; non-EU brands often miss GDPR until expansion."

## Open questions
- [ ] Confirm domain / subdomain setup capacity.
- [ ] Confirm tooling budget tier.
- [ ] Confirm team size + training plan.
- [ ] Confirm geographic compliance scope.
```

Save the produced file to `businesses/<slug>/off-page/outreach-manual.md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Domain + authentication concrete (not "set up properly").
- Sender warming plan calendar-able (week-by-week ramp).
- Template library covers all channels (8-12 templates).
- CRM schema explicit; tooling matched to scale.
- Follow-up cadence has 3-4 stages with distinct templates.
- Quality controls with measurable thresholds (response rate per channel; deliverability >80%).
- Compliance checklist for relevant jurisdictions (CAN-SPAM / GDPR / PECR / CASL).
- Team training included.

## Common mistakes to avoid

- Don't recommend sending from primary domain. Damages transactional / customer email deliverability.
- Don't skip authentication. SPF/DKIM/DMARC are free + non-negotiable.
- Don't propose immediate high-volume sends from new domains. Warming is required.
- Don't recommend generic press@ sender. Named human outperforms 3-5x.
- Don't propose 1 universal template. 8-12 channel-specific templates with personalisation variables.
- Don't omit follow-ups. 60-70% of placements come from follow-ups.
- Don't skip CRM. Without it, relationships disappear.
- Don't ignore compliance. CAN-SPAM violation = fines + deliverability loss.
- Don't over-engineer for small brands. Lemlist + Apollo + Streak (Gmail) is sufficient at small / mid scale; jumping to enterprise tools is premature.

## Example

**Input (abbreviated):** Field & Sun. Currently sends from primary domain (<sarah@fieldandsun.com>); ad-hoc template; no CRM; ~1.5% response rate. Mid-stage D2C; EU + US operations.

**Output (abbreviated):**

Domain: dedicated `press.fieldandsun.com`; SPF/DKIM/DMARC configured; sender format `sarah@press.fieldandsun.com`; from-line "Sarah from Field & Sun."

Warming: 4-week ramp before launching campaigns.

Tools: Lemlist (sending) + Apollo (prospect-finding) + HubSpot (CRM, since brand already on HubSpot).

Templates: 10 templates across PR data-led, PR commentary, guest pitch, guest follow-up, mention-recovery, broken-link, HARO follow-up, relationship maintenance, dermatologist-citation pitch, podcast-guest pitch.

CRM schema: 12 fields per contact; 50-contact starter list loaded from past placements + Apollo prospects.

Follow-up: Day 0 / 4 / 10 / 14 cadence.

Quality controls: pre-send review for first 60 days (founder reviews); response-rate target 10-15% on PR; >80% deliverability.

Compliance: GDPR (EU) + CAN-SPAM (US); both checklists complete.

Team: 1 main sender + founder backup; manual reviewed; HubSpot workflow documented.

Saved to `businesses/field-and-sun/off-page/outreach-manual.md`.
