---
name: audit-entity-optimisation
description: Produces a cluster-level audit of how well a topic cluster signals entities, topical relationships, and authority to search NLP models and LLMs. Audits entity coverage (which target entities are named at sufficient density), entity salience (highest-salience entities match page intent), schema-entity alignment (Article / Product / Organization / FAQPage with explicit entity properties; no schema theatre), internal-linking patterns (hub-spoke with descriptive anchors), external authority signals (links to regulators, peer-reviewed research, Wikipedia for entity disambiguation), and knowledge-graph status (Wikidata presence, Knowledge Panel, sameAs schema). Output is a prioritised remediation plan covering content additions, schema updates, internal-link changes, and knowledge-graph actions, scoped per cluster (not per page in isolation). Use whenever the user asks to "audit entities," "check topical authority," "improve entity coverage," "schema audit for AI," "knowledge graph for the brand," "why isn't our brand recognised in AI Overviews," or runs a cluster-level content review. Also use as a quarterly cadence per priority cluster and before launching a new pillar. Do not use to audit prose-level patterns (use `audit-ai-content-readiness`), to design net-new content (use `design-citation-magnet-content`), to plan strategic citation investment (use `plan-generative-seo-strategy`), or to build schema markup from scratch (use `generate-schema-markup` in Technical SEO).
---

# Audit Entity Optimisation

This skill audits a topic cluster's entity signalling. Output is a prioritised remediation plan covering content, schema, internal-linking, and knowledge-graph layers — sequenced so the highest-leverage signal fixes ship first.

The skill is opinionated: cluster-level audits beat single-page audits because entity signals are cumulative across the cluster; salience must align with intent or the page signals the wrong topic; schema and prose must match (no schema theatre); Wikidata work is small but durable; thin entity coverage cannot be papered over with internal links.

## When to use this skill

- The user wants to know why a cluster has weak ranking despite good content.
- The user is preparing to launch a new pillar / cluster and wants entity coverage planned.
- The user wants AI Overviews / Knowledge Panel eligibility assessed.
- Quarterly cadence on the brand's 2-3 most-strategic clusters.
- The user wants to baseline entity / schema state before a content investment.

## When NOT to use this skill

- The user wants prose-level rewrite recommendations — use `audit-ai-content-readiness`.
- The user wants to design net-new content for citation — use `design-citation-magnet-content`.
- The user wants to choose which clusters to invest in — use `plan-generative-seo-strategy`.
- The user wants to build schema markup from scratch — use `generate-schema-markup` (Technical SEO).
- The user is working on a single off-cluster page — entity audits are cluster-shaped; redirect to `audit-ai-content-readiness` if the page is a one-off.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend `generate-business-profile` first. Sections this skill cares about most: 3 (products / services as entities), 4 (customer + topical context), 6 (competitors as entities), 7 (goals — informs cluster prioritisation).
2. **Target cluster** — required. Which cluster is being audited? Cross-reference `clusters/cluster-map.md` if it exists. The audit covers the pillar + supporting spokes.
3. **Cluster pages** — required. URLs and content access for the pillar + spoke pages.
4. **Competitor SERP data** — strongly recommended. Top 10 organic competitors for the cluster's head term (and 2-3 priority long-tails). Either user-provided or extracted via the `audit-competitors` skill.
5. **Schema audit (existing)** — optional. If `schema/` artifacts exist, build on them rather than re-auditing.
6. **NLP / entity tooling** — optional. If the user has access to Google Natural Language API, InLinks, MarketMuse, Surfer, or similar, surface salience / coverage data; if not, fall back to manual SERP entity analysis.

If the cluster isn't specified or cluster pages aren't accessible, ask before proceeding.

## Process

1. **Map target entities for the cluster.**
   - List the cluster's primary entity (e.g. "vitamin C serum" → L-ascorbic acid as the underlying molecule).
   - List related entities the SERP top 10 cover collectively (e.g. THD ascorbate, magnesium ascorbyl phosphate, niacinamide, retinol, hyaluronic acid, pH stability, oxidation).
   - List authoritative sources the SERP top 10 cite (FDA, peer-reviewed studies, established publications).
   - This is the entity benchmark for the audit.
2. **Audit entity coverage per cluster page.**
   - Which target entities appear? At what density? With what proximity to claims?
   - Failures: entity mentioned 0-2 times; entity mentioned but never near a claim; alternative entity forms (synonyms, full chemical name) absent.
3. **Audit entity salience.**
   - For each priority page, what is the highest-salience entity?
   - Should be the page's intent (e.g. on a "vitamin C serum guide" page, the highest-salience entity should be vitamin C / L-ascorbic acid — not the brand).
   - Misalignment is a critical finding.
4. **Audit schema-entity alignment.**
   - Per page: which schema types are present? (`Article`, `Product`, `FAQPage`, `Organization`, `BreadcrumbList`).
   - Are the entity-bearing properties populated? (`Article.about`, `Article.mentions`, `Product.brand`, `Product.category`, `Organization.sameAs`).
   - Schema-content mismatch (e.g. `FAQPage` schema with no on-page Q&A) — flag as critical.
5. **Audit internal-linking.**
   - Pillar → spoke links: present? Anchor text descriptive (entity / topic) or generic ("learn more")?
   - Spoke → pillar links: present? Anchors point back with the cluster's entity name?
   - Spoke ↔ spoke links where the entity relationship is clear?
   - Hub-spoke completeness (pillar links to every spoke; every spoke links to pillar).
6. **Audit external authority signals.**
   - Authoritative-source links present on factual claims?
   - Source quality (regulators / peer-reviewed / established publications, not unbranded blog content).
   - Wikipedia / Wikidata references for ambiguous entities.
7. **Audit knowledge-graph status.**
   - Does the brand have a Wikidata entry?
   - Does the brand show a Google Knowledge Panel for branded queries?
   - Do hero products have Wikidata entries?
   - Is `sameAs` schema present on `Organization` linking to social profiles + Wikidata?
8. **Cross-reference with competitor SERP data.**
   - Which entities do top-10 competitors cover that the brand doesn't?
   - Which schema types do top-10 competitors deploy that the brand doesn't?
   - Which authoritative sources do they cite that the brand doesn't?
9. **Severity grammar.**
   - **Critical:** misaligned salience (page signalling wrong topic), schema-content mismatch, key target entities entirely absent.
   - **High:** thin entity coverage on pillar, no schema on key pages, no `sameAs`, no Wikidata.
   - **Medium:** sparse internal links, missing supporting-entity coverage, generic anchor text.
   - **Low:** synonym variation absent, opportunistic schema additions (e.g. `HowTo`).
10. **Sequence remediations.**
    - Schema-content mismatch fixes first (negative signal removal).
    - Salience rebalancing on high-traffic pages second.
    - Entity-coverage densification third.
    - Internal-linking pass fourth.
    - Knowledge-graph foundation (Wikidata) fifth — durable but slow-impact.
11. **Write the audit.**

## Output format

```markdown
# Entity Optimisation Audit — [Business name] — [Cluster name]

**Audit date:** [date]
**Cluster audited:** [cluster name and key terms]
**Pages in cluster:** [n] (pillar + [n] spokes)
**Auditor:** [name / role]

## Executive summary
- **Target entities mapped:** [n]
- **Entities under-covered:** [n] of [n] target entities
- **Schema gaps / mismatches:** [n]
- **Internal-link completeness:** [pillar→spoke %], [spoke→pillar %]
- **Knowledge-graph status:** [present / absent]
- **Critical findings:** [n]
- **Estimated effort:** [days]
- **Headline:** [1-2 sentences — biggest leverage finding].

## Target entity benchmark (from competitor SERP analysis)
| Entity | Type | Brand coverage | SERP top-10 coverage | Gap |
|--------|------|----------------|----------------------|-----|
| L-ascorbic acid | Ingredient | Mentioned 3x on pillar | Mentioned 8-15x with concentrations across top 10 | Critical |
| THD ascorbate | Ingredient (alt form) | Not mentioned | 6 of 10 cover | High |
| pH stability | Concept | Not mentioned | 8 of 10 cover | High |
| FDA OTC Monograph | Authority | Not cited | 5 of 10 cite | Medium |
| ... | ... | ... | ... | ... |

## Per-page entity audit

### [Pillar URL]

**Highest-salience entity:** [entity] — [aligned / misaligned with intent]
**Target entity coverage:**

| Entity | Mentions | Proximity to claims | Synonym variation | Status |
|--------|----------|---------------------|-------------------|--------|
| L-ascorbic acid | 3 | Distant | None | Thin |
| Niacinamide | 1 | N/A | N/A | Absent |
| ... | ... | ... | ... | ... |

**Schema audit:**
- `Article`: missing.
- `Product`: N/A (informational page).
- `FAQPage`: present but no Q&A on page → schema theatre, remove.
- `Organization` `sameAs`: not present.

**Internal-linking:**
- Outbound spokes: 2 of 4. Anchors: descriptive on 1, generic on 1.
- Inbound spokes: 1 of 4 link back. Anchors: brand-led, not entity-led.

**External authority:**
- Citations on factual claims: 1 of 8. Source quality: weak (linked to own blog post).

**Findings:**
| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | Salience: brand at rank 1, vitamin C at rank 4 | Critical | Move brand-storytelling out of lead; entity-rich content first |
| 2 | THD ascorbate / MAP / SAP entirely absent | High | Add 200-word section on alternative vitamin-C forms |
| 3 | `FAQPage` schema with no Q&A on page | Critical | Remove schema OR add genuine FAQ section |
| 4 | No `Article` schema | High | Add with `about`: "Vitamin C Serum" + `mentions` for related entities |
| 5 | Generic anchor text on spoke link | Medium | Replace "learn more" with "vitamin C serum for dark spots" |
| ... | ... | ... | ... |

[Repeat per cluster page]

## Cluster-level patterns
| Pattern | Pages affected | Root cause | Fix |
|---------|---------------|-----|-----|
| No `Article` schema across cluster | All 5 | Theme template doesn't include it | Template-level addition |
| No external authoritative citations | 4 of 5 | Editorial standard absent | Update brief template + retroactive backfill |
| `sameAs` missing site-wide | All | Original schema implementation incomplete | Site-wide `Organization` schema update |
| ... | ... | ... | ... |

## Knowledge-graph status
- **Brand Wikidata entry:** absent.
- **Hero product Wikidata entries:** absent.
- **Knowledge Panel for branded query:** absent.
- **`Organization.sameAs`:** absent.

## Recommendations:
- [ ] Submit Wikidata entry for the brand (notability check first).
- [ ] Submit Wikidata entry for hero product (Daily Glow Serum) once brand entry is approved.
- [ ] Add `Organization.sameAs` to schema with social profiles + Wikidata once approved.

## Prioritised remediation plan
| # | Action | Layer | Severity | Effort | Expected lift |
|---|--------|-------|----------|--------|---------------|
| 1 | Remove `FAQPage` schema theatre on pillar | Schema | Critical | 15 min | Removes negative signal |
| 2 | Rewrite pillar lead to rebalance salience | Content | Critical | 90 min | Salience → vitamin C |
| 3 | Add 200-word section on alt. vitamin-C forms | Content | High | 60 min | Entity coverage parity |
| 4 | Add `Article` schema across cluster | Schema | High | 1 hr (template) | Entity signal |
| 5 | Internal-link audit pass — pillar↔spokes | Internal-link | Medium | 90 min | Hub-spoke clarity |
| 6 | Add 8 external authoritative citations to pillar | Content | High | 90 min | Authority signal |
| 7 | Submit Wikidata brand entry | Knowledge graph | High | 2 hr (drafting) | Knowledge Panel eligibility (90+ days) |
| ... | ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] Schema-content mismatch findings resolved.
- [ ] Salience aligned on pillar + top 2 spokes (verified via NLP API or InLinks).
- [ ] All target entities covered at parity with SERP top 5.
- [ ] Hub-spoke internal-linking complete with descriptive anchors.
- [ ] External authoritative citations on every factual claim.
- [ ] Wikidata submission drafted (approval timeline outside our control).
- [ ] Re-audit scheduled in 90 days; cluster ranking + AI citation tracked.

## Risks + watchouts
3-5 specific risks. E.g. "Wikidata submissions are reviewed by editors and can be rejected for low notability — don't gameplan around guaranteed approval"; "Salience-rebalancing rewrites can shift ranking temporarily as Google re-evaluates intent — coordinate with the launch calendar"; "Removing `FAQPage` schema removes the rich-result eligibility for that snippet — accept the trade-off (the schema was illegitimate anyway) and consider a genuine FAQ section as a follow-up"; "Adding entity coverage on a pillar can dilute the page's keyword focus if not done with care — preserve the head-term focus while broadening entity context"; "Internal-link pass risks creating link-graph imbalance if overdone — stick to entity-relevant links, not blanket cross-linking."

## Open questions
- [ ] Confirm cluster scope (pillar + which spokes are in this audit).
- [ ] Confirm access to NLP / entity tooling (InLinks / NL API) or proceed with manual SERP analysis.
- [ ] Confirm Wikidata work is in scope or out of scope for this engagement.
- [ ] Confirm schema implementation route (theme template vs JSON-LD blocks vs app).
```

Save the produced file to `businesses/<slug>/ai-seo/entity-optimisation-audit-[cluster-slug]-[YYYY-MM-DD].md`. Create the `ai-seo/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Cluster-scoped, not single-page (unless explicitly requested).
- Target entity benchmark grounded in competitor SERP analysis, not invented.
- Salience explicitly checked per priority page.
- Schema audit covers types and properties (not just presence / absence).
- Schema-content mismatch flagged as critical (it's a negative signal).
- Internal-link completeness scored quantitatively (pillar→spoke %, spoke→pillar %).
- External authority signals checked per factual claim, not just per page.
- Knowledge-graph status assessed even if conclusion is "absent."
- Remediations sequenced by leverage, not alphabetically.
- Brand voice respected — Field & Sun: ingredient-led, plain-language, specific.
- Acceptance criteria + open questions sections present.

## Common mistakes to avoid

- Don't audit a single page in isolation — entity signals work cluster-wide.
- Don't recommend keyword stuffing dressed up as "entity densification" — naming an entity 50 times is spam.
- Don't propose schema theatre — schema must match honest content.
- Don't recommend Wikidata work without notability check — rejection is a negative signal.
- Don't ignore competitor SERP data — entity benchmark is grounded in what the SERP top 10 cover.
- Don't sequence remediations alphabetically — leverage-first.
- Don't drift into prose-level recommendations — that's `audit-ai-content-readiness`.
- Don't drift into schema-from-scratch — that's `generate-schema-markup` in Technical SEO.
- Don't forget the cluster's brand-voice context — Field & Sun rejects vague category language and unsupported safety claims.

## Example

**Input (abbreviated):** Field & Sun. Cluster: vitamin C. Pillar: `/blog/vitamin-c-serum-guide`. Spokes: dark spots, sensitive skin, layering with retinol, concentrations.

**Output (abbreviated):**

Critical (2): pillar's highest-salience entity is "Field & Sun" not "vitamin C / L-ascorbic acid"; pillar has `FAQPage` schema with no on-page Q&A.

High (5): THD ascorbate / MAP / SAP entirely absent across cluster; no `Article` schema across cluster; no external authoritative citations on factual claims; spoke-to-pillar links missing on 3 of 4 spokes; brand has no Wikidata entry or `sameAs`.

Medium (4): generic anchor text on 6 of 11 internal links; pillar word count 2,400 but only 3 mentions of L-ascorbic acid; no Wikipedia references for entity disambiguation; `Organization` schema present but missing `sameAs`.

Cluster-level patterns: 3 template-level fixes (`Article` schema across cluster; `Organization` `sameAs` site-wide; brief template doesn't require external citations).

Knowledge graph: brand absent. Notability check passed (3 trade-press features in 2025-2026); Wikidata submission viable.

Prioritised remediation: remove schema theatre (15 min); rebalance pillar salience (90 min); densify entity coverage on pillar + 2 spokes (~5 hr); template-level `Article` schema (1 hr); internal-link pass (90 min); citation backfill on pillar (90 min); Wikidata brand entry draft (2 hr). Total ~12 hr over 30 days.

Saved to `businesses/field-and-sun/ai-seo/entity-optimisation-audit-vitamin-c-2026-05-02.md`.
