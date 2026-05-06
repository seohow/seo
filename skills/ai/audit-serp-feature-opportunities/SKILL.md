---
name: audit-serp-feature-opportunities
description: Identifies SERP feature opportunities — featured snippets, People Also Ask, image packs, knowledge panels — for target keywords. Use to prioritise structured content and markup changes.
---

# Audit SERP Feature Opportunities

This skill audits SERP-feature presence and reachability per priority keyword, and produces a prioritised feature-capture plan. Output is opinionated: not every feature is worth chasing for every query; reachability assessment beats blind feature-hunting; AI Overview work cross-references the strategic generative-SEO plan; knowledge-panel work is slow-burn entity work, not feature-hunting.

The skill is opinionated: features dominated by Wikipedia / established publishers / large brands are usually unreachable for D2C brands without a multi-year moat; featured-snippet captures concentrate on questions where the current snippet source is weak; PAA inclusion is comparatively easier and high-leverage; original product / customer photography wins image packs; shopping pack work cross-references Technical SEO Schema + Merchant Center.

## When to use this skill

- The user has a priority keyword cluster and wants to know which features are reachable.
- The user wants to plan a featured-snippet / PAA capture program.
- Quarterly review of feature presence per priority cluster.
- Pre-content-investment audit — the audit informs which existing pages need feature-capture rework vs which should be deprioritised.

## When NOT to use this skill

- The user wants strategic generative-SEO investment planning — use `plan-generative-seo-strategy`.
- The user wants to design net-new content — use `design-citation-magnet-content`.
- The user wants prose-level audit of existing pages — use `audit-ai-content-readiness`.
- The user wants schema markup built — use `generate-schema-markup` (Technical SEO leaf 04).
- The user has no priority keyword set — recommend running keyword research / cluster mapping first.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `business-profile` first. Sections this skill cares about most: 3 (products), 5 (current SEO state), 6 (competitors), 8 (brand voice).
2. **Priority keyword set** — required. From `keyword-research/*.md`, `clusters/cluster-map.md`, or user-provided. Typical scope: 8-20 priority queries per audit. Don't audit the whole site at once.
3. **Current SERP data** — required. Fresh SERP screenshots or rank-tracker exports per priority query, capturing feature presence and current feature holder.
4. **Existing content** — required for queries where the brand has a page targeting them. Used to assess whether feature capture is a rewrite or a new piece of content.
5. **Schema audit context** — optional. If `schema/schema-audit-*.md` exists in Technical SEO outputs, cross-reference for feature-eligibility schema gaps.
6. **Generative-SEO strategy** — optional. If `ai-seo/generative-seo-strategy-*.md` exists, cross-reference for AI Overview territory; don't double-plan.

If the priority keyword set or current SERP data is missing, ask before proceeding.

## Process

1. **Build the per-query feature matrix.**
   - For each priority query, capture: featured snippet (type and current holder); PAA presence (count and questions); AI Overview presence (and cited sources); image pack (and current images); video carousel (and current videos); shopping pack (and current products); knowledge panel; site links; FAQ rich result.
   - Present as a matrix.
2. **Assess feature reachability per feature × query.**
   - **Reachable:** the brand can plausibly capture this feature with content / schema / structural work in the audit's scope (typically 60-90 days). Often: featured snippet held by weak / generic source; PAA where Q&A content can be added; image pack where original photography is a moat; shopping pack with Merchant Center + schema work.
   - **Marginal:** capturable with significant additional investment (multi-quarter), or contingent on a different workstream (generative-SEO content brief; Wikidata work). Examples: AI Overview citation contingent on `design-citation-magnet-content`; knowledge panel contingent on Wikidata.
   - **Skip:** unreachable in the engagement window. Wikipedia-dominated knowledge panels for generic terms; featured snippets dominated by Wirecutter / Strategist on commercial-review queries; video carousels where the brand has no owned video channel.
3. **Per reachable feature × query, specify the requirement.**
   - **Featured snippet:** the H2 + answer block format that wins the snippet type (paragraph 40-60 words; list 6-10 items; table 3-6 columns). Draft the answer block.
   - **PAA:** the structured Q&A section to add, with answers matching actual PAA phrasing. List the questions to address.
   - **AI Overview:** cross-reference `plan-generative-seo-strategy` — defer the requirement to the citation-magnet brief.
   - **Image pack:** original photography requirements (subjects, count, treatment); alt text and file-naming convention; `ImageObject` schema spec.
   - **Video carousel:** out of scope unless owned video channel exists.
   - **Shopping pack:** `Product` schema requirements; Merchant Center feed attributes; review-rich PDP content.
   - **Knowledge panel:** Wikidata + `sameAs` schema — slow-burn; cross-reference NLP Optimization.
   - **FAQ rich result:** legitimate FAQ section + `FAQPage` schema; never manufacture.
4. **Prioritise by traffic × reachability.**
   - High-traffic queries × reachable features = the highest-leverage work.
   - Sequence: top traffic + highest reachability first.
5. **Identify cross-page / template patterns.**
   - If multiple pages need the same fix (PAA structured Q&A on all blog pages; `ImageObject` schema across PDP template), call out as template-level fix.
6. **Produce explicit skip list.**
   - Per query × feature combination explicitly skipped, with reason.
7. **Cross-reference adjacent audits.**
   - Where the requirement overlaps with `audit-ai-content-readiness`, `audit-entity-optimisation`, or `plan-generative-seo-strategy`, link rather than duplicate.
8. **Estimate effort + sequence.**
   - Per fix: hours of work + dependencies.
   - 60-90 day implementation plan.
9. **Write the audit.**

## Output format

```markdown
# SERP Feature Opportunities Audit — [Business name] — [Cluster name]

**Audit date:** [date]
**Cluster scope:** [cluster name + priority queries]
**Priority queries audited:** [n]
**Auditor:** [name / role]

## Executive summary
- **Reachable feature opportunities identified:** [n]
- **Marginal opportunities (defer / contingent):** [n]
- **Explicit skips:** [n]
- **Estimated total effort:** [days]
- **Expected feature-driven traffic lift at 90 days:** [reasoned estimate]
- **Headline:** [1-2 sentences — the highest-leverage feature opportunity].

## Per-query feature matrix

| Query | Featured snippet | PAA | AI Overview | Image pack | Video carousel | Shopping pack | Knowledge panel | FAQ rich result |
|-------|------------------|-----|-------------|------------|----------------|---------------|-----------------|-----------------|
| tinted mineral sunscreen | None | 4 questions | Cited: Wirecutter, Strategist, ILIA, Supergoop, Saie | Pack present (no Field & Sun) | YouTube influencers | Pack present (no Field & Sun) | None | None |
| does mineral sunscreen leave a white cast | Paragraph (held by [unrelated blog]) | 6 questions | Cited: Wirecutter, ILIA, Saie | Pack present | None | None | None | None |
| how to apply mineral sunscreen | List (held by Healthline) | 4 questions | Present | None | YouTube tutorials | None | None | Present (held by Healthline) |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

## Reachability assessment

| Query | Feature | Status | Reason |
|-------|---------|--------|--------|
| does mineral sunscreen leave a white cast | Featured snippet | Reachable | Current holder is generic blog with weak evidence; brand can produce stronger answer block |
| does mineral sunscreen leave a white cast | PAA | Reachable | 6 PAA questions; brand can add Q&A section addressing 4-5 |
| does mineral sunscreen leave a white cast | AI Overview | Marginal | Contingent on citation-magnet brief from `plan-generative-seo-strategy` |
| does mineral sunscreen leave a white cast | Image pack | Reachable | Original photography moat from generative-SEO Pick 1 |
| best mineral sunscreen | Featured snippet | Skip | Held by Wirecutter; commercial-review territory unwinnable |
| best mineral sunscreen | Knowledge panel | Skip | Generic head term — no specific entity to anchor a panel |
| ... | ... | ... | ... |

## Reachable feature plan

### Query: "does mineral sunscreen leave a white cast"

**Page:** /blog/mineral-vs-chemical-sunscreen (existing) — this is the page the audit recommends the work happens on.

**Featured snippet (paragraph, 40-60 words):**
> Draft answer block:
> "Mineral sunscreens can leave a white cast on darker skin tones because zinc oxide and titanium dioxide are physically white particles that sit on top of the skin. Tinted mineral SPFs use iron oxides to add a translucent tint that visually offsets the cast on Fitzpatrick III-VI skin types."
> Effort: 1 hr (rewrite the H2 + answer paragraph; verify it's the first answer block on page).

**PAA inclusions (6 PAA questions):**
- "Why does mineral sunscreen leave a white cast?" — add 50-word Q&A.
- "Does mineral sunscreen work on dark skin?" — add 50-word Q&A.
- "What is the best tinted mineral sunscreen for darker skin?" — link to comparative table; 50-word answer.
- "Is mineral better than chemical for darker skin?" — add 50-word Q&A.
- (2 more) — same pattern.
- Effort: 2 hr (add structured Q&A section with question-led H3s; add genuine `FAQPage` schema only if the section is genuinely Q&A).

**Image pack:**
- Cross-reference: original photography from generative-SEO Pick 1 (`ai-seo/generative-seo-strategy-*.md`).
- Treatment: 4 of 24 photographs hosted on the page with descriptive alt text, file naming (`field-and-sun-mineral-spf-fitzpatrick-iv-no-white-cast.jpg`), `ImageObject` schema.
- Effort: 1 hr (alt text + file naming + schema; assumes photography is already produced).

**AI Overview:** deferred to `design-citation-magnet-content` — cross-reference `ai-seo/generative-seo-strategy-mineral-sunscreen-2026-Q2.md` Pick 1.

[Repeat per query × reachable feature]

## Cross-page / template patterns
| Pattern | Pages affected | Template-level fix | Effort |
|---------|---------------|---------------------|--------|
| `FAQPage` schema not implemented on blog template | All blog posts | Add to blog template (only when genuine FAQ section is present) | 2 hr |
| `ImageObject` schema not implemented on PDP template | All PDPs | Add to PDP template | 2 hr |
| Question-led H2s rare on long-form blog posts | Most | Update brief template | 30 min (template) |
| Merchant Center feed attributes incomplete | All PDPs | Audit + remediate via Technical SEO Schema work | Cross-reference Technical SEO leaf 04 |
| ... | ... | ... | ... |

## Explicit skip list

| Query | Feature | Reason | Revisit when |
|-------|---------|--------|--------------|
| best mineral sunscreen | Featured snippet | Wirecutter holds; commercial-review territory unwinnable | Brand DR 50+ and multi-year content moat |
| best mineral sunscreen | Knowledge panel | Generic head term; no specific entity | Never — wrong query type |
| mineral sunscreen | Knowledge panel | Generic ingredient term; Wikipedia / Skin Cancer Foundation territory | Never — wrong query type |
| (head terms × Wirecutter-territory features) | Various | Publisher dominance | When publisher absence opens up |
| ... | ... | ... | ... |

## Prioritised remediation plan

| # | Action | Query / Feature | Effort | Traffic-weighted impact |
|---|--------|-----------------|--------|-------------------------|
| 1 | Featured snippet capture on "white cast" query | High-traffic query / featured snippet | 1 hr | High |
| 2 | PAA structured Q&A on top 5 traffic pages | Multiple queries / PAA | 8 hr | High |
| 3 | Featured snippet captures on top 3 reachable queries | 3 queries / featured snippet | 3 hr | High |
| 4 | `FAQPage` schema added to blog template (where genuine FAQ exists) | Template / FAQ rich result | 2 hr | Medium |
| 5 | Image pack treatment on top 4 photography-eligible pages | 4 queries / image pack | 4 hr | Medium |
| 6 | `Product` schema audit on PDP template | Template / shopping pack | Cross-reference Technical SEO | Medium |
| ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] Featured-snippet captures shipped on top 3 traffic queries.
- [ ] PAA structured Q&A live on top 5 traffic pages.
- [ ] `FAQPage` schema added only on pages with genuine FAQ content.
- [ ] `ImageObject` schema implemented on PDP + blog templates.
- [ ] No schema theatre — all schema reflects actual on-page content.
- [ ] Brand voice maintained — recommendations align with section 8 of profile.
- [ ] Re-audit scheduled in 90 days.

## Risks + watchouts
3-5 specific risks. E.g. "Featured-snippet rewrites can hurt broader page ranking — track ranking + feature presence post-rewrite; revert if ranking drops materially"; "PAA inclusion is volatile — can churn weekly; consistent presence requires content updated to match evolving PAA phrasing"; "Image pack inclusion depends on rendering / lazy-load / mobile performance — coordinate with technical-SEO timing"; "Shopping pack audit requires Merchant Center access — confirm access path before scoping the work"; "Knowledge-panel chasing is out of scope here; do not invest in Wikidata work as part of this engagement — that's NLP Optimization territory"; "If retrieval bots are blocked at robots.txt, AI Overview citation work is moot — verify Technical SEO leaf 10 audit before investing."

## Open questions
- [ ] Confirm Merchant Center access for shopping pack audit.
- [ ] Confirm photography availability for image pack treatment (cross-reference generative-SEO Pick 1 production timeline).
- [ ] Confirm whether AI Overview work is in scope here or via the generative-SEO track.
- [ ] Confirm whether to expand audit to additional clusters (e.g. vitamin C cluster) in this engagement.
```

Save the produced file to `businesses/<slug>/ai-seo/serp-features-audit-[cluster-slug]-[YYYY-MM-DD].md`. Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Per-query feature matrix complete (8 features × N queries).
- Reachability assessment per feature × query, with reason.
- Reachable features specced with requirements (content shape, schema, structural change).
- Skip list explicit, with reason and "revisit when" condition.
- Cross-references with `plan-generative-seo-strategy`, `audit-ai-content-readiness`, `audit-entity-optimisation`, `generate-schema-markup` rather than duplicating.
- Featured-snippet draft answer blocks included where reachable.
- PAA Q&A questions drafted, not just listed.
- No schema theatre — `FAQPage` only where genuine FAQ; `HowTo` only where genuine how-to.
- Brand voice respected — Field & Sun: ingredient-led, plain-language, specific.
- Effort estimates realistic; total fits 60-90-day implementation window.
- Acceptance criteria + open questions sections present.

## Common mistakes to avoid

- Don't audit the whole site — pick a cluster.
- Don't recommend manufactured FAQ content — schema theatre is detectable.
- Don't chase unreachable features — Wirecutter / Wikipedia territory is explicit skip.
- Don't double-plan AI Overview work — defer to the generative-SEO strategy.
- Don't recommend Wikidata as part of this audit — that's NLP Optimization slow-burn work.
- Don't ignore mobile rendering — features render differently on mobile.
- Don't skip the explicit skip list — what we don't compete on is part of the strategy.
- Don't drift from Field & Sun voice — recommendations stay on-voice.
- Don't promise specific feature-capture outcomes — features are volatile.
- Don't propose featured-snippet rewrites without tracking ranking impact.

## Example

**Input (abbreviated):** Field & Sun. Cluster: mineral sunscreen. 12 priority queries.

**Output (abbreviated):**

Reachable opportunities (15): featured snippets on 5 queries (paragraph + list); PAA inclusions on 9 queries; image pack on 4 queries; FAQ rich result on 3 (where genuine FAQ exists); shopping pack on 6 (contingent on Merchant Center setup).

Marginal (6): AI Overview citation on 3 queries (deferred to generative-SEO Pick 1); knowledge panel (long-burn, defer to NLP Optimization); video carousel (no owned channel).

Explicit skips (8): featured snippet on head terms (Wirecutter / Strategist territory); knowledge panel on generic ingredient terms (Wikipedia territory); video carousel where no owned channel.

Cross-page / template patterns (4): `FAQPage` schema on blog template; `ImageObject` on PDP template; question-led H2s in brief template; Merchant Center feed audit (cross-reference Technical SEO).

Prioritised plan: featured-snippet captures on top 3 (week 1); PAA Q&A on top 5 (week 2-3); image pack treatment on 4 (week 4-5); Merchant Center audit (week 6); ongoing AI Overview work via generative-SEO track. Total ~22 hr over 6 weeks.

Saved to `businesses/field-and-sun/ai-seo/serp-features-audit-mineral-sunscreen-2026-05-02.md`.
