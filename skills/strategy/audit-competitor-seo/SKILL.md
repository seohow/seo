---
name: audit-competitor-seo
description: Analyses a single competitor (URL or domain) against the user's business and produces a structured SEO gap report — keyword gap, content patterns, link signals, technical observations, and prioritised opportunities. Use whenever the user says "look at [competitor]," "what is [competitor] doing for SEO," "audit [domain]," "find what [competitor] ranks for that we don't," "compare us to [competitor]," or shares a competitor URL and asks for SEO analysis. Also use when reviewing a competitor's blog, content cluster, or product category. Do not use to plan the broader competitor analysis project — that's `scope-competitor-analysis`. This skill produces the audit; the planner produces the brief.
---

# Audit Competitor SEO

This skill takes one competitor (a domain, a section, or a single URL) and produces a structured SEO audit comparing them to the user's business. The output is an opportunity-driven gap report — the focus is on what the user can *do* about what they learn, not just observations.

The audit is honest about what can and can't be inferred from the outside. Some signals (link profile, top pages by traffic, ranking keywords) are visible via tools. Others (true revenue, conversion rate, internal experiments) aren't — and the audit doesn't pretend they are.

## When to use this skill

- The user shares a competitor URL or domain and asks for SEO analysis.
- The user wants to understand what's working for a specific competitor.
- The user wants the keyword gap, content gap, or link gap against one competitor.
- The user is preparing a competitor section of a strategy doc and needs a deep look at one player.
- The user wants to evaluate whether a competitor is a real SEO threat or just a brand mention.

## When NOT to use this skill

- The user wants to scope a multi-competitor project — use `scope-competitor-analysis`.
- The user wants to research keywords from scratch — use `generate-seed-keywords`.
- The user wants to cluster keywords — use `cluster-keywords`.
- The user wants a single SERP analysis (one keyword, top 10 pages) — that's a simpler manual task; this skill works at competitor scale.

## Inputs required

1. **Competitor target** — a URL or domain. If the user gives just a brand name, ask for the URL.
2. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections for this skill: products/services (3), customer (4), competitors (6), goals (7). The audit is a *comparison*, so the user's side has to be specified — if those sections are blank, ask before starting the audit.
3. **Tool access** — what the user has. The audit is much richer with Ahrefs/Semrush/Moz access; usable but lighter without. Ask what's available so the methodology matches.
4. **Focus area (optional)** — whole domain, or a specific section / topic / cluster. If the competitor is large, focusing the audit makes it actionable.
5. **Keyword universe (optional but valuable)** — if the user has their own keyword universe from prior research, the audit can compare directly. If not, it produces inferred targets from the competitor's ranking keywords.

If the URL or business profile is missing, ask before starting. The audit relies on having both sides.

## Process

The audit produces six sections. For each, the rule is: only include observations the user can act on. Ruthlessly cut "interesting but not actionable."

1. **Profile and posture.** A 3-5 sentence read of who this competitor is in SEO terms: domain rating, indexed pages, content cadence, dominant page types, freshness, and overall SEO maturity (e.g. "mature D2C with strong editorial layer and consistent freshness; 12k indexed pages, DR 62"). This contextualises everything that follows.
2. **Keyword gap.** Keywords the competitor ranks for (positions 1-20, ideally) that the user's domain doesn't rank for or ranks below page 1. Filter for relevance to the user's business (cross-reference with the products and customer pains in the profile). Bucket by intent and page type. Output the top 30-50 highest-leverage gap keywords, sorted by opportunity score (volume × intent fit × realistic difficulty).
3. **Top-traffic pages.** The competitor's top 10-20 pages by organic traffic. For each: URL, page type, primary keyword(s), estimated traffic, the obvious "why this works" (depth, freshness, format, links, schema). Surface patterns across the top pages.
4. **Content gap and angle gap.** What topics does the competitor cover deeply that the user doesn't? What angles, formats, or sub-topics are underserved on the competitor's site (and therefore openings for the user)? Flag at least 3-5 specific angles the user could own.
5. **Link signals.** Top referring domains, anchor-text profile, link velocity, and a short list of link-gap targets — domains linking to the competitor that look likely to also link to the user. If the user lacks a link tool, narrow this section to publicly visible signals (mentions in major publications, partnerships, podcast appearances).
6. **Technical and on-page patterns.** A short list of structural patterns visible from the SERP and from spot-checking 5-10 pages: schema markup types in use, internal linking patterns (hub-and-spoke, category-led), title/H1 conventions, page-template differences across categories, presence of FAQ/comparison/glossary patterns. Note technical wins (e.g. fast LCP, well-structured breadcrumbs) and weaknesses (e.g. thin product pages, missing schema).
7. **Prioritised opportunities.** The synthesis output. 8-15 specific, actionable opportunities scored on **Impact** (1-5), **Effort** (1-5), **Fit** (1-5 — how well it matches the user's brand and capabilities). Sort by Impact × Fit / Effort. This is the section the user will actually use.

## Output format

```markdown
# Competitor Audit — [Competitor Name]
*Compared to: [User Business Name]*
*Focus: [whole domain / specific section]*
*Audit date: [date]*

## 1. Profile and posture
3-5 sentence read of the competitor's SEO posture, with key numbers (DR, indexed pages, content cadence, top page types).

## 2. Keyword gap
Brief framing paragraph (e.g. "the gap is dominated by informational queries around [topic]; commercial gap is shallow, suggesting the competitor's strength is content").

| Keyword | Volume | Their position | Our position | Intent | Page type | Notes |
|---------|-------:|---------------:|-------------:|--------|-----------|-------|
| ... | ... | ... | ... | ... | ... | ... |

(Top 30-50 keywords.)

## 3. Top-traffic pages
| URL | Page type | Primary kw | Est. traffic | Why it works |
|-----|-----------|-----------|-------------:|--------------|
| ... | ... | ... | ... | ... |

Brief paragraph on cross-page patterns.

## 4. Content gap and angle gap
- Underserved angle 1 — description and why it's an opening.
- Underserved angle 2 — ...
- ...

## 5. Link signals
Brief profile read. Top referring domains list (10-20). Link-gap target list (10-20 if available).

## 6. Technical and on-page patterns
Bulleted observations grouped by: schema, internal linking, page templates, technical strengths, technical weaknesses.

## 7. Prioritised opportunities
| # | Opportunity | Type | Impact | Effort | Fit | Score | Notes |
|---|-------------|------|-------:|-------:|----:|------:|-------|
| 1 | ... | content/on-page/link/technical | ... | ... | ... | ... | ... |

(Sort by score descending. 8-15 rows.)

## 8. Honest limits of this audit
2-3 sentences on what couldn't be inferred from outside (e.g. internal conversion rates, paid contribution, true revenue from organic). Keeps the user calibrated.
```

Save the produced file to `businesses/<slug>/competitor-analysis/audit-<competitor-slug>.md`, where `<competitor-slug>` is the kebab-case form of the competitor's name or domain (e.g. `audit-supergoop.md`, `audit-saie.md`). Create the `competitor-analysis/` sub-folder if it doesn't already exist. After writing, tell the user the file path. If the user runs this skill again on a different competitor, save to a new file in the same folder — don't overwrite.

## Quality bar

- Every section is comparison-based — the user's side is referenced, not just the competitor's.
- The opportunity list is the most useful section. Each row is specific enough to brief into a ticket.
- "Why it works" notes go beyond surface (not just "long article" but "long article + comparison table + ingredient-level depth + brand mentions in major publications").
- The audit is honest about what's inferred vs known.
- The tone is observational, not adversarial. The competitor isn't the enemy; they're a free market study.
- The opportunity list maps cleanly to the [SEO Wins](../../../playbook/01.%20Strategy/05.%20SEO%20Wins.md) backlog format.

## Common mistakes to avoid

- Don't dump tool exports without filtering. A 1,000-row keyword gap is unusable; the user needs the top 30-50 with relevance filtering applied.
- Don't fabricate metrics. If the user lacks a link tool, say so — don't invent referring-domain counts.
- Don't recommend "copy what they do." The deliverable is *opportunities for the user's business*, not a description of the competitor's playbook.
- Don't ignore publishers and editorial sites. They often dominate commercial SERPs and the playbook to compete with them is different from the playbook against direct competitors.
- Don't over-score everything as Impact 5. Be honest with the prioritisation; the goal is to help the user pick.

## Example

**Input (abbreviated):** Competitor = supergoop.com, focus = sunscreen category. User = a smaller D2C beauty brand (skincare/sunscreen), US, has Ahrefs and GSC.

**Output (abbreviated):** Profile section noting Supergoop is DR 68, ~2.2k indexed pages, mature editorial blog, strong link profile from beauty and dermatology publications, comparison-page pattern is well-developed. Keyword gap with 42 prioritised keywords, dominated by informational ("does mineral sunscreen leave white cast," "zinc oxide sunscreen benefits") and one comparison cluster ("mineral vs chemical sunscreen"). Top-traffic-page pattern: detailed comparison content + branded category landing pages. Content gap: weak coverage of ingredient-specific deep dives (e.g., zinc oxide benefits, homosalate concerns) and sparse FAQ depth on application and sensitive-skin topics. Link signals: 18 publications linked to Supergoop that are plausible targets for the user. Technical: Supergoop uses Article + Product + FAQPage schema consistently; their internal linking is hub-and-spoke from the sunscreen category. 12 prioritised opportunities, top three: (1) build an "[ingredient] science" cluster, (2) launch a "sensitive skin sunscreen" collection page, (3) outreach to the 18 publication targets with an ingredient-led mineral-sunscreen angle.
