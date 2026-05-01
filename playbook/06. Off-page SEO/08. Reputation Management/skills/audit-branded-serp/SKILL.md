---
name: audit-branded-serp
description: Produces a branded-SERP and reputation audit covering page 1 of "[brand]" search + variants ("reviews," "vs [competitor]," "is X trustworthy," "complaints"), AI Overview / LLM probe (ChatGPT, Claude, Gemini, Perplexity responses to brand questions; flag inaccuracies), review-platform audit (Trustpilot, Google Reviews, Yelp, BBB), surface categorisation by control tier (Tier 1 brand-owned, Tier 2 favourable third-party, Tier 3 neutral, Tier 4 negative), defensive content gap identification (which branded variants lack brand-owned pages), recommended actions (defensive content publishing, review engagement, AI-Overview shaping content), and quarterly cadence schedule with documented escalation paths for crisis events. Output is the operating brief for the reputation programme — preventative and prescriptive. Use whenever the user asks to "audit our branded SERP," "what shows up when people search our brand," "is our reputation OK," "audit our branded reputation," "what does ChatGPT say about us," "set up reputation monitoring," "branded SERP audit," or has noticed a reputation issue and needs a structured response. Also use as a quarterly cadence skill — branded SERP shifts; AI Overview content drifts; quarterly audit catches drift early. Do not use for brand-mention monitoring across the wider web (use `monitor-brand-mentions`), broader off-page strategy (use `plan-link-building-campaign`), or content-side AI Overview optimisation (handoff to AI SEO category, planned).
---

# Audit Branded SERP

This skill produces the branded-SERP + reputation audit. Output covers branded SERP page 1, variants, AI surfaces, review platforms, surface categorisation, defensive content gaps, recommended actions, and quarterly cadence.

The skill is opinionated about a few things: branded SERP variants matter ("reviews," "vs," "is X trustworthy") not just the bare brand name; AI Overviews / LLM responses are reputation surfaces in 2026; defensive content is preventative + cheaper than reactive damage control; engaging every negative review backfires; legal escalation is a last resort.

## When to use this skill

- The user is setting up reputation monitoring for the first time.
- The user has noticed a reputation issue (negative content on page 1, AI Overview inaccuracy, viral complaint).
- The user is running a quarterly off-page review.
- The user is briefing leadership on brand reputation health.

## When NOT to use this skill

- The user wants to monitor brand mentions across the wider web — use `monitor-brand-mentions`.
- The user wants the broader off-page strategy — use `plan-link-building-campaign`.
- The user wants AI Overview / LLM citation optimisation at content level — handoff to AI SEO category (planned).
- The user wants to manage social-media presence specifically — out of scope.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`. Critical sections: products/services (3), competitors (6), brand voice (8).
2. **Brand name + variants** — required. "Field & Sun," "Field and Sun."
3. **Top 3-5 competitors** — required. For "[brand] vs [competitor]" variant audits.
4. **Geographic markets** — required. Different markets have different SERPs.
5. **Past reputation issues** — optional. Any incidents that may still surface.
6. **Existing review-platform presence** — list of review platforms where brand has accounts.

If brand variants + competitors are missing, ask. Variant audits depend on them.

## Process

1. **Branded SERP audit (page 1).**
   - Search "[brand]" in incognito + clean cache + target market.
   - Capture top 10 results.
   - Categorise each: Tier 1 (brand-owned), Tier 2 (favourable third-party), Tier 3 (neutral third-party), Tier 4 (negative third-party).
   - Note SERP features: AI Overview, Knowledge Panel, Sitelinks, Twitter / Instagram / TikTok carousel, "People also ask," reviews snippet.
2. **Branded SERP variants.**
   - "[brand] reviews"
   - "[brand] vs [competitor 1]"
   - "[brand] vs [competitor 2]"
   - "is [brand] trustworthy / safe / legitimate"
   - "[brand] complaints"
   - "[brand] customer service"
   - "[brand] [product name]"
   - For each: capture top 5 results, categorise.
3. **AI Overview / LLM probe.**
   - Ask 6-10 questions about the brand to ChatGPT, Claude, Gemini, Perplexity.
   - Capture responses.
   - Flag inaccuracies, outdated info, missing info, off-brand framing.
   - Identify the citations / links each LLM uses (where it pulls from).
4. **Review-platform audit.**
   - Trustpilot: rating, recent review distribution, prominent negative reviews.
   - Google Reviews / Maps: rating, count, sentiment.
   - Yelp (if applicable).
   - BBB (US-specific).
   - Category-specific (Beauty Insider, Sephora reviews, etc.).
5. **Surface categorisation summary.**
   - Tier 1 (brand-owned): URLs, types, ranking positions.
   - Tier 2 (favourable third-party): publications, sentiment, link quality.
   - Tier 3 (neutral): platforms, what they show.
   - Tier 4 (negative): URLs, severity, response decision.
6. **Defensive content gap identification.**
   - Which branded variants are dominated by third parties / competitors / negative content?
   - Which would benefit from a brand-owned page ranking?
   - Common gaps: "vs Competitor" comparison, "is X trustworthy" / "About / Methodology" overview, "Customer Reviews" (owned), comprehensive FAQ.
7. **Recommended actions.**
   - **Defensive content** to publish: list 2-5 pages with cluster placement + URL + content angle.
   - **Review-platform engagement:** prioritise (Tier 4 negative on Trustpilot worth response; Tier 3 ignore).
   - **AI Overview shaping:** which authoritative content to publish so LLMs cite correct info.
   - **Wikipedia decision:** is brand notable enough; long-lead-time decision.
   - **Crisis triage rules:** when to engage, when to ignore, when to escalate.
8. **Cadence.** Quarterly audit (90 days); + crisis-trigger immediate audit (negative viral mention, regulatory issue, major incident).
9. **Escalation paths.**
   - Step 1: identify issue.
   - Step 2: severity assessment (P0 / P1 / P2).
   - Step 3: response decision (ignore / engage / escalate).
   - Step 4: execution.
   - Step 5: monitoring.
   - Document who decides what at each step.
10. **Write the audit.**

## Output format

```markdown
# Branded-SERP & Reputation Audit — [Business name]

**Audit date:** [date]
**Markets audited:** [list]
**Auditor:** [name / role]
**Next audit:** [date + 90 days]

## Executive summary
- **Overall reputation health:** [Healthy / Watch / At risk]
- **P0 issues:** [n]
- **P1 issues:** [n]
- **P2 issues:** [n]
- **Headline:** [1-2 sentence summary]

## Branded SERP (page 1 — "[brand]")

### Top 10 results
| Position | URL | Title | Type | Tier | Notes |
|----------|-----|-------|------|------|-------|
| 1 | [URL] | [Title] | Brand homepage | Tier 1 | Healthy |
| 2 | [URL] | [Title] | Brand About | Tier 1 | Healthy |
| 3 | [URL] | [Title] | Trustpilot | Tier 3 | Mixed sentiment |
| ... | ... | ... | ... | ... | ... |

### SERP features
- **AI Overview:** [present / absent; content summary; accuracy assessment]
- **Knowledge Panel:** [present / absent; what's there]
- **Sitelinks:** [list]
- **Twitter / Instagram / TikTok carousel:** [present / absent]
- **People also ask:** [common questions; check accuracy of responses]

### Tier distribution
- Tier 1 (brand-owned): [n / 10]
- Tier 2 (favourable third-party): [n / 10]
- Tier 3 (neutral third-party): [n / 10]
- Tier 4 (negative third-party): [n / 10]

## Branded SERP variants

### "[brand] reviews"
| Position | URL | Tier | Notes |
|----------|-----|------|-------|
| ... | ... | ... | ... |

### "[brand] vs Supergoop"
[same shape; flag if competitor's "vs" page wins]

### "[brand] vs Saie"
[same shape]

### "is [brand] trustworthy / legit / safe"
[same shape]

### "[brand] complaints"
[same shape]

## AI Overview / LLM probe

### Questions asked
1. "What is Field & Sun?"
2. "Is Field & Sun a good sunscreen brand?"
3. "Field & Sun vs Supergoop — which is better?"
4. "What ingredients does Field & Sun use?"
5. "Is Field & Sun safe for sensitive skin?"
6. "Who founded Field & Sun?"
7. "What products does Field & Sun make?"
8. "What's the methodology behind Field & Sun's testing?"

### Responses by LLM
| LLM | Question | Response accurate? | Citations | Issues flagged |
|-----|----------|---------------------|-----------|----------------|
| ChatGPT | Q1 | yes | [URLs] | none |
| Claude | Q1 | yes | n/a | none |
| Gemini | Q3 | partial | [URLs] | mistakenly attributed competitor product |
| Perplexity | Q5 | yes | [URLs] | none |
| ... | ... | ... | ... | ... |

### Issues to address
- [LLM X says Y; correction strategy]
- [LLM is missing Z info; need authoritative content]

## Review-platform audit

### Trustpilot
- Rating: [X / 5]
- Total reviews: [n]
- Recent (90d) sentiment: positive / neutral / negative split.
- Prominent negative reviews: [list with URLs + severity].
- Response strategy: [ignore / engage / escalate per review].

### Google Reviews
[same shape]

### Other platforms
[as relevant — Sephora, Yelp, BBB, category-specific]

## Surface categorisation summary
| Tier | Surfaces | Control level |
|------|----------|---------------|
| Tier 1 (brand-owned) | [n] | High |
| Tier 2 (favourable) | [n] | Medium |
| Tier 3 (neutral) | [n] | Low |
| Tier 4 (negative) | [n] | Low |

## Defensive content gaps
| Branded variant | Current top result | Gap | Recommended brand-owned page |
|-----------------|--------------------|----|-------------------------------|
| "[brand] vs Supergoop" | competitor's vs page | brand has no vs page | publish `/comparison/field-and-sun-vs-supergoop` |
| "is [brand] trustworthy" | only Trustpilot | brand has no transparency page | publish `/about/methodology` evergreen |
| "[brand] customer service" | mixed Reddit / forum | brand has no support landing | publish `/support` |
| ... | ... | ... | ... |

## Recommended actions

### Defensive content (P0)
1. **`/comparison/field-and-sun-vs-supergoop`** — comparison page with brand's transparent comparison; cluster: skincare-comparison.
2. **`/about/our-methodology`** — transparency / methodology overview (links to three-skin-tone testing report); cluster: brand.

### Review-platform engagement (P1)
1. Engage with prominent negative Trustpilot review [URL] — polite, factual response.
2. Routine response cadence on incoming reviews (24-72 hr response time).

### AI Overview shaping (P1)
1. Publish `/about/methodology` — citable by LLMs.
2. Add structured data (Organization schema) on About / homepage.
3. Submit founder + dermatologist bios with credentials (Person + AlumniOf schema).
4. Re-prompt LLMs in 60-90 days; check citation drift.

### Wikipedia decision (P2)
- Notability assessment: brand has [n] press placements, [revenue tier], [unique-claim status]. [Plausibly notable / not yet notable.]
- If pursued: 2-4 month timeline; outside contributor recommended.

### Crisis triage rules
- **Ignore:** isolated negative review, off-topic Reddit comment, anonymous attack.
- **Engage:** factual error in published content, customer-service complaint requiring response, mis-attribution.
- **Escalate:** defamation pattern, regulatory complaint, viral negative mention. Trigger: legal counsel + leadership.

## Quarterly cadence
- Re-audit branded SERP + variants every 90 days.
- AI Overview probe every 90 days.
- Review-platform sentiment review monthly.
- Crisis-trigger immediate audit (negative viral mention / regulatory / major incident).

## Escalation paths

### Severity assessment
- **P0 (immediate):** defamation, regulatory, viral negative.
- **P1 (within 7 days):** factual error in tier 1 publication, prominent negative review.
- **P2 (within 30 days):** drift in AI Overview, branded-variant gaps.

### Decision rights
- P0: leadership + legal counsel.
- P1: marketing lead + founder.
- P2: marketing manager.

### Documentation
- All escalations logged in `businesses/<slug>/CLAUDE.md` decisions log.

## Acceptance criteria
- [ ] Branded SERP page 1 audited.
- [ ] 5+ variant SERPs audited.
- [ ] 4 LLMs probed across 6-10 questions.
- [ ] Review platforms audited.
- [ ] Surfaces categorised by tier.
- [ ] Defensive content gaps identified.
- [ ] Recommended actions prioritised.
- [ ] Crisis triage rules documented.
- [ ] Next audit on calendar (90 days).

## Open questions
- [ ] Confirm priority defensive content publishing capacity.
- [ ] Confirm legal counsel relationship for P0 escalations.
- [ ] Confirm review-platform engagement cadence (24-72 hr response standard).
- [ ] Confirm Wikipedia investment decision (Y/N).
```

Save the produced file to `businesses/<slug>/off-page/branded-serp-audit-[YYYY-MM-DD].md`. Create the `off-page/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Branded SERP page 1 + 5+ variant SERPs audited (not just bare brand name).
- AI Overview probe across 4 LLMs and 6-10 questions; inaccuracies flagged.
- Review platforms audited.
- Surfaces categorised by tier.
- Defensive content gaps identified with specific URL recommendations.
- Recommended actions prioritised P0 / P1 / P2.
- Crisis triage rules + escalation paths documented.
- Quarterly cadence + decision-rights matrix.

## Common mistakes to avoid

- Don't audit only the bare brand name. Variants are where reputation issues hide.
- Don't skip AI Overview / LLM probing. Increasingly determinative.
- Don't engage every negative review. Triage rules required.
- Don't recommend legal escalation as default. Reserve for genuine defamation.
- Don't propose Wikipedia for non-notable brands. Notability bar is real.
- Don't conflate brand-mention monitoring with branded-SERP monitoring. Distinct.
- Don't skip defensive-content recommendations. Preventative > reactive.
- Don't audit and walk away. Quarterly cadence required.

## Example

**Input (abbreviated):** Field & Sun. Brand: "Field & Sun" / "Field and Sun." Competitors: Supergoop, Saie, ILIA, EltaMD. Markets: US + UK. No past reputation incidents.

**Output (abbreviated):**

Overall: Healthy with watch items.

Branded SERP page 1: Tier 1 (5 results — homepage, About, Mineral Sun Drops PDP, blog, Instagram); Tier 2 (1 — Cosmopolitan article); Tier 3 (3 — Trustpilot, Reddit, competitor's "vs" page); Tier 4 (1 — single negative review at top of Trustpilot stack).

Variants: "vs Supergoop" — competitor wins; "is Field & Sun trustworthy" — only Trustpilot ranks (gap); "complaints" — minor Reddit thread (manageable).

AI Overview: ChatGPT / Claude / Perplexity accurate; Gemini mistakenly attributed competitor product line (correctable).

Review platforms: Trustpilot 4.4 / 5; Google Reviews 4.6 / 5; recent sentiment positive; one prominent negative review worth engaging.

Defensive content gaps: 3 — vs-Supergoop comparison, About / Methodology, Customer Reviews owned page.

Recommended actions: P0 — publish 2 defensive pages; P1 — engage Trustpilot review + publish authoritative content for AI shaping; P2 — Wikipedia evaluation.

Crisis paths: documented; P0 = legal + leadership; P1 = marketing + founder; P2 = marketing manager.

Saved to `businesses/field-and-sun/off-page/branded-serp-audit-2026-05-01.md`.
