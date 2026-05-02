---
name: audit-ai-content-readiness
description: Produces a per-page audit of how well existing content is structured for AI extraction and citation by AI Overviews, Perplexity, ChatGPT search, Claude search, and Gemini. Audits priority pages against eight patterns — definitive opening sentence, inverted-pyramid lead, TL;DR / summary block on long content, question-led H2 / H3 headers, inline source citations on factual claims, visible freshness signals (last-updated date), entity proximity (named entities sit near the claims they support), and paragraph length — and produces a prioritised rewrite list with severity (critical / high / medium / low), effort estimate, and template-vs-page-level scope. Use whenever the user asks to "audit content for AI," "make content AI-friendly," "optimise for AI Overviews," "why aren't we showing up in ChatGPT / Perplexity," "AI citation audit," "rewrite for LLM extraction," or has a set of underperforming pages on AI-mediated SERPs. Also use as a quarterly content-health pass and as a pre-publish check baked into the standard content brief. Do not use to choose which queries to compete on (use `plan-generative-seo-strategy`), to design net-new content (use `design-citation-magnet-content`), or to audit entity / schema signals (use `audit-entity-optimisation`).
---

# Audit AI Content Readiness

This skill audits existing pages for the prose-level patterns that earn citation in AI-mediated search. Output is a prioritised rewrite list per page — each finding has severity, fix, and effort.

The skill is opinionated: definitive opening sentences are non-negotiable; TL;DRs are required on long content (>1,500 words); question-led H2s beat topic-label H2s for AI extraction; source citations on factual claims are load-bearing; freshness signals must be human-visible, not just in metadata; brand storytelling belongs after the answer, not before.

## When to use this skill

- The user wants to know why their content isn't showing up in AI Overviews / Perplexity / ChatGPT / Claude search.
- The user is rewriting top organic pages and wants a structured audit before touching them.
- The user is establishing AI-readiness as a content standard and wants to baseline current state.
- Quarterly content-health pass on top 10-20 organic landing pages.
- Pre-publish check on net-new long-form content.

## When NOT to use this skill

- The user wants a strategy for which queries / topics to invest in — use `plan-generative-seo-strategy`.
- The user wants to design net-new content from scratch — use `design-citation-magnet-content`.
- The user wants to audit entity coverage, schema, knowledge-graph signals — use `audit-entity-optimisation`.
- The user wants to measure whether the brand is currently being cited — use `audit-llm-visibility`.
- The user has a single-paragraph product description — the audit is built for substantive prose pages.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 3 (products / services), 4 (customer + questions customers ask), 8 (brand voice / editorial guardrails — to ensure rewrite recommendations stay on-voice).
2. **Priority page list** — required. URLs of the pages to audit. If the user doesn't specify, default to the top 10 organic landing pages (from `analytics/traffic-analysis-*.md` or GA4) plus any pillar / cluster-hub pages. Confirm the list before auditing more than 20 pages — audit depth degrades when the list is too long.
3. **Page content access** — required. The skill needs the actual rendered HTML and prose. Either the user provides URLs the skill can fetch, or pasted page content, or markdown exports.
4. **Cluster / topic context** — optional but useful. If `clusters/cluster-map.md` exists, use it to understand which queries each page targets; the audit framing differs for commercial pages vs informational pillars.
5. **Existing brief or editorial standards** — optional. If the brand has a brief template, surface gaps between the brief and AI-readiness patterns (so the brief itself can be updated).

If the priority page list is missing, ask which pages to audit before proceeding. Don't audit the entire site by default — depth matters more than breadth.

## Process

1. **Collect page content.** For each priority page, capture: H1, opening 3 paragraphs, full H-structure (H2 + H3 list), full body prose, last-updated date (if visible), inline citations (count and target), TL;DR or summary block presence, average paragraph length.
2. **Pattern check 1 — Definitive opening sentence.**
   - Does the first sentence after the H1 directly answer the implied question of the page?
   - Common failures: brand storytelling lead, "in this guide we'll explore...", question-restatement-without-answering, throat-clearing intros.
   - Severity: Critical (no answer in opening 3 paragraphs); High (answer present but buried); Medium (answer in opening but weak / hedged).
3. **Pattern check 2 — Inverted pyramid.**
   - Is the most-extractable information in the first third of the page?
   - Common failures: methodology / context / brand storytelling occupying opening 30% of page, answer arriving in middle.
   - Severity: High (answer in second half); Medium (answer in middle third).
4. **Pattern check 3 — TL;DR / summary block on long content.**
   - Pages >1,500 words: is there a clearly-marked summary near the top (3-5 bullets or short paragraph)?
   - Pages ≤1,500 words: not required, but bonus if present.
   - Severity: High (long content without TL;DR); Medium (TL;DR present but unclear / too long).
5. **Pattern check 4 — Question-led H2 / H3 headers.**
   - Are H2s framed as the questions a user would ask, or as topic labels?
   - Cross-reference with PAA + head-keyword phrasing where possible.
   - Severity: High (all topic-label headers); Medium (some question-led, mostly topic-label).
6. **Pattern check 5 — Inline source citations.**
   - Are non-obvious factual claims linked to authoritative sources (regulators, peer-reviewed research, established publications)?
   - Count: factual claims with citation / total factual claims.
   - Common failures: zero external citations, citations only to own pages, weak sources (unbranded blog content).
   - Severity: Critical (no citations on a fact-heavy informational page); High (<25% of factual claims cited); Medium (25-50% cited).
7. **Pattern check 6 — Visible freshness signals.**
   - Is "last updated: [date]" visible to the reader (not just in metadata)?
   - For time-sensitive topics (regulatory, ingredient guidance, product comparisons): is there an inline note explaining the most recent update reason?
   - Severity: High (no visible date on time-sensitive content); Medium (date in metadata only); Low (date present but stale).
8. **Pattern check 7 — Entity proximity.**
   - For pages with named entities (specific ingredients, regulators, competitors, products): do entities appear close to the claims they support (same paragraph, ideally same sentence)?
   - Common failures: entity mentioned in opening, claim about it appears 3 sections later.
   - Severity: Medium (most entities far from claims); Low (some entities far from claims).
9. **Pattern check 8 — Paragraph length / sentence density.**
   - Average paragraph length: target 2-4 sentences. Long paragraphs (>5 sentences) depress extraction quality.
   - Sentence length: avoid sentences that span 3+ ideas.
   - Severity: Medium (consistent long paragraphs); Low (occasional long paragraphs).
10. **Identify cross-page / template patterns.** If multiple pages share the same failure (e.g. all blog posts use topic-label H2s; all PDPs lack TL;DRs), call it out as a template-level fix, not 12 individual page fixes.
11. **Estimate effort per fix.** Page-level rewrites: 1-3 hours per page depending on scope. Template-level changes (CSS for last-updated date, brief-template updates): 0.5-2 hours.
12. **Sequence remediations.** Critical fixes on pages with highest organic traffic first. Template-level fixes that benefit many pages second. Page-level fixes on lower-traffic pages last.
13. **Write the audit.**

## Output format

```markdown
# AI Content Readiness Audit — [Business name]

**Audit date:** [date]
**Pages audited:** [n]
**Auditor:** [name / role]
**Cluster context:** [primary clusters covered, if applicable]

## Executive summary
- **Critical issues:** [n] across [n] pages
- **High issues:** [n] across [n] pages
- **Medium / low:** [n]
- **Template-level patterns identified:** [n]
- **Estimated total effort:** [days]
- **Headline:** [1-2 sentences — the biggest leverage finding].

## Pattern-by-pattern summary
| Pattern | Pass | Partial | Fail |
|---------|------|---------|------|
| Definitive opening sentence | [n] | [n] | [n] |
| Inverted pyramid | [n] | [n] | [n] |
| TL;DR on long content | [n] | [n] | [n] |
| Question-led H2 / H3 | [n] | [n] | [n] |
| Inline source citations | [n] | [n] | [n] |
| Visible freshness signals | [n] | [n] | [n] |
| Entity proximity | [n] | [n] | [n] |
| Paragraph length | [n] | [n] | [n] |

## Per-page audit

### [Page URL]

**Topic / cluster:** [primary keyword cluster].
**Word count:** [n].
**Last updated (visible):** [date / not visible].
**Findings:**

| # | Pattern | Status | Severity | Fix | Effort |
|---|---------|--------|----------|-----|--------|
| 1 | Definitive opening | Fail | Critical | Replace 4-paragraph brand intro with answer sentence: "[suggested opener]" | 30 min |
| 2 | TL;DR | Fail | High | Add 4-bullet summary under H1 covering [outline] | 30 min |
| 3 | Question-led H2s | Partial | Medium | Reframe 4 of 7 H2s as questions (suggestions inline) | 30 min |
| 4 | Source citations | Fail | High | Add citations to 12 factual claims (sources: FDA, Skin Cancer Foundation, [n] peer-reviewed studies) | 90 min |
| 5 | Freshness signal | Fail | High | Add "Last updated: [date]" line under H1; add update-reason note | 15 min |
| ... | ... | ... | ... | ... | ... |

**Total effort:** ~3 hours.

[Repeat per priority page]

## Cross-page / template patterns
| Pattern | Pages affected | Root cause | Template-level fix | Effort |
|---------|---------------|-----|-----|--------|
| No visible last-updated date on blog posts | All blog posts (40+) | Theme template lacks the field | Add to blog template | 1 hr |
| Topic-label H2s on guides | All long-form guides | Brief template doesn't specify | Update brief template + flag in editorial review | 30 min (template) + 1 hr per existing post |
| ... | ... | ... | ... | ... |

## Prioritised remediations
| # | Fix | Severity | Pages affected | Traffic-weighted impact | Effort |
|---|-----|----------|----------------|-------------------------|--------|
| 1 | Rewrite opening of [top traffic page] | Critical | 1 | High | 30 min |
| 2 | Add TL;DR + freshness to top 10 pages | High | 10 | High | 8 hr |
| 3 | Reframe H2s as questions on top 5 guides | Medium | 5 | Medium | 4 hr |
| 4 | Update brief template with AI-readiness checklist | Template | All future content | High (forward) | 1 hr |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All Critical fixes shipped on top 5 organic pages.
- [ ] Template-level fixes (last-updated visibility, brief template) shipped before next content sprint.
- [ ] Brand voice maintained — rewrites pass through the brand's voice guardrails (section 8 of profile).
- [ ] Re-audit scheduled in 90 days; baseline metrics captured for `audit-llm-visibility` comparison.

## Risks + watchouts
3-5 specific risks. E.g. "Heavy editorial rewrite of top organic page risks short-term ranking dip while Google re-crawls — coordinate with technical-SEO timing"; "Removing brand-storytelling lead may meet founder resistance — recommend separate 'why we built this' section preserved at end of page"; "Source-citation work requires editorial budget for fact-checking; don't link to weak sources to hit a count"; "Pattern fixes on PDP template need ecom-conversion regression check — don't break add-to-cart UX for AI optimisation"; "If retrieval bots are blocked at robots.txt, none of these fixes drive AI citation lift; verify Technical SEO leaf 10 audit before investing rewrite effort."

## Open questions
- [ ] Confirm priority page list (top 10 organic vs broader set).
- [ ] Confirm rewrite budget and editorial capacity.
- [ ] Confirm brand-voice non-negotiables in case any rewrite suggestion conflicts.
- [ ] Confirm whether brief template update is in scope of this engagement.
```

Save the produced file to `businesses/<slug>/ai-seo/ai-content-readiness-audit-[YYYY-MM-DD].md`. Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- All eight patterns explicitly checked per page (no skips).
- Severity grammar consistent (Critical / High / Medium / Low) with explicit thresholds.
- Suggested rewrite text included where the fix is short (opening sentence, TL;DR bullets, header reframes); never invent sources for citation gaps — name the source category and let the writer pick the specific link.
- Cross-page patterns identified for template-level leverage; don't list 12 page-level fixes for a single template issue.
- Effort estimates included per fix.
- Traffic-weighted prioritisation (top organic pages first, not alphabetical).
- Brand voice maintained — recommendations align with section 8 of the business profile (Field & Sun: ingredient-led, plain-language, specific; reject vague category language and unsupported safety claims).
- Acceptance criteria + open questions sections present.
- Output is specific to the business — don't produce a generic "AI SEO best practices" document.

## Common mistakes to avoid

- Don't skip the opening-sentence pattern — it's the highest-leverage fix.
- Don't recommend brand-removal — ingredient-led voice + AI-readiness is fully compatible.
- Don't manufacture source citations — name the source category, let the editor pick the specific link.
- Don't propose schema additions in this audit — that's `audit-entity-optimisation` and Schema Markup's surface area.
- Don't audit the whole site — depth on top-traffic pages beats breadth.
- Don't ignore template-level patterns — the leverage is much higher than per-page rework.
- Don't recommend rewriting with AI tools — the audit identifies changes; humans make them.
- Don't assume retrieval bots are allowed — flag the prerequisite check on Technical SEO leaf 10 in Risks.
- Don't drift from Field & Sun voice — no vague category language or unsupported safety claims in any suggested rewrite.

## Example

**Input (abbreviated):** Field & Sun. Audit top 10 organic pages.

**Output (abbreviated):**

Critical (3): three pages have brand-storytelling leads delaying answer past paragraph 4. Top organic page (`/blog/mineral-vs-chemical-sunscreen`) is one of them. Fix: rewrite opening sentence each.

High (12): no TL;DRs on the 8 long-form guides; no visible last-updated date on any blog post (template issue); citations missing on the vitamin-C ingredient guide and the SPF safety FAQ.

Medium (8): topic-label H2s on 5 guides; long paragraphs on the refill explainer; entity-proximity weak on 2 PDPs.

Cross-page patterns: 3 template-level fixes (last-updated visibility on blog template; brief template needs AI-readiness checklist; PDP H-structure missing question-led H2 above ingredients section).

Prioritised remediation: rewrite top 3 organic page openings (1.5 hr); template fix for last-updated date (1 hr); template fix for brief (1 hr); add TL;DRs + question-led H2s + citations to top 8 long-form pages (~12 hr). Total ~16 hr.

Saved to `businesses/field-and-sun/ai-seo/ai-content-readiness-audit-2026-05-02.md`.
