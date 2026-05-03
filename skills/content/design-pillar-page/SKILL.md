---
name: design-pillar-page
description: Produces a pillar-page brief — primary keyword, scope, full H1+H2 outline, target word count, supporting-spoke list, brand-distinct angle, internal-link plan, schema strategy, and acceptance criteria. Output is the spec a writer (human or AI) can produce a draft against. Use whenever the user asks to "design a pillar page," "build a guide page for [topic]," "we need a hub page for [cluster]," "what's the outline for our [topic] guide," or has decided a cluster warrants a pillar and needs the design before writing. Also use when consolidating a set of existing spoke posts into a topic cluster (the pillar is the missing centerpiece). Do not use to write the pillar's body content (that's a writing job, not a design job) or to plan a single blog post (use `plan-blog-content` + `generate-content-brief` for that).
---

# Design Pillar Page

This skill produces the design brief for a pillar page — the architectural spec from which a writer (human or AI) produces the draft. The output covers everything the writer needs upfront: target keyword and scope, full H1+H2 outline, word-count target, internal-link plan, brand-distinct angle, schema strategy, and acceptance criteria.

The skill is opinionated about a few things: pillars target broad head terms, not long-tail; the outline mirrors the cluster's spokes (one H2 per spoke topic, generally); every pillar has a brand-distinct angle the brand can credibly own; pillar pages aren't long blog posts — they're hub-shaped content with substantive depth on a broad topic.

## When to use this skill

- The user has a cluster that warrants a pillar and needs the design spec.
- The user is consolidating a set of existing spokes into a topic cluster.
- The user wants to add a hub page to anchor a section of the site (sun care, ingredient education, etc.).
- The user is briefing a writer / contractor / agency on a pillar build.
- The user is planning architectural changes (e.g. moving from standalone blog posts to a clustered structure).

## When NOT to use this skill

- The user wants to plan the broader topic-cluster architecture (pillar + spokes + linking matrix) — use `design-topic-cluster`.
- The user wants to write a single blog post — use `plan-blog-content` for the calendar and `generate-content-brief` for the brief.
- The user wants to produce the actual pillar prose — that's the writer's job; this skill produces the spec.
- The user wants to refresh an existing pillar — that's `plan-content-refresh` for the analysis, then this skill for the redesign if material.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), goals (7), brand voice (8). Brand voice and brand-distinct angle drive the design.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Required. Identifies which clusters warrant a pillar and what spokes they contain.
3. **Pillar topic + primary keyword** — required. The user identifies which cluster's pillar they want to design. Skill confirms the head-term primary keyword.
4. **Existing spoke pages** — list of currently-published or calendar-planned blog posts that would be spokes under this pillar. Use the cluster map + blog calendar.
5. **Domain rating + competitive context** — optional but valuable. The pillar's realistic ranking ceiling depends on DR vs. SERP top 5. Pull from the business profile or ask.
6. **Format preference** — narrative pillar (long-form essay structure, ~3,500-5,500 words) or modular pillar (table-of-contents structure with collapsible sections, ~5,000-8,000 words). Default: narrative for brand voice; modular for technical / reference content.

If cluster map or pillar topic is missing, ask. The brief is anchored to a specific cluster.

## Process

1. **Confirm pillar fit.** Validate the cluster meets pillar criteria:
   - 5+ spoke-shaped sub-topics (existing or planned)
   - Head term has meaningful volume (typically 500+/mo)
   - Brand has depth to write substantively
   - DR + SERP context makes top-10 ranking plausible
   If criteria aren't met, flag for the user and recommend either deferring or treating the topic as standalone blog content.
2. **Read the SERP for the head term.** Note the dominant pillar shape: long-form guide, listicle, video-led, case-study-led. Note word counts, structure patterns, depth signals (own research, expert quotes, original photography, comparison tables). The pillar should match the SERP's dominant format and differentiate on substance.
3. **Define scope.** What the pillar covers and explicitly doesn't cover. A "complete guide to mineral sunscreen" covers types, ingredients, application, comparison to chemical, skin-tone considerations — but not, for example, sunscreen for tattoos (that's a niche spoke, not pillar scope). Scope decisions prevent the pillar from sprawling.
4. **Build the H1+H2+H3 outline.** Each H2 typically maps to a spoke topic — that's the architectural payoff. For a pillar with 8 H2s and 8 spokes, the structure is:
   - H1: pillar primary keyword + descriptive subtitle
   - H2 (intro): "What is X" / definitional anchor
   - H2 #2-N: each maps to a spoke topic
   - H2 (closing): summary or "How to choose" / practical action
   Some H2s drill into H3s for nested structure. Don't go deeper than H3 unless genuinely needed.
5. **Pick a brand-distinct angle.** What can THIS brand say that the SERP top 10 can't? Examples:
   - **Field & Sun on mineral sunscreen:** own product testing on three skin tones with photos; ingredient percentages disclosed; no medical claims (FDA-compliant) but visual evidence.
   - **A SaaS brand on category-X:** own customer-data analysis demonstrating trends competitors don't have access to.
   - **A content/media brand on category-X:** founder / expert perspective from years of industry experience.
   The angle is concrete and provable, not generic ("we care about quality").
6. **Decide word-count target.** Anchored to SERP top 5 average, plus 10-30% to demonstrate depth. Most pillars land 3,500-5,500 words for narrative; 5,000-8,000 for modular. Higher than 8,000 starts to risk dilution; lower than 3,500 risks not reading as a pillar.
7. **Plan internal links.**
   - Pillar → every spoke (in body content, embedded contextually within the relevant section).
   - Spoke → pillar (each spoke linked to from intro + body sections of the pillar).
   - Pillar → 1-2 cross-cluster pillars where genuinely relevant (e.g. mineral sunscreen pillar links to skincare-ingredient pillar).
   - Pillar receives prominent internal links from homepage / footer / nav (high-equity inbound).
8. **Plan schema.**
   - Article (datePublished, dateModified, author with credentials, image)
   - BreadcrumbList (Home → Guides → [Pillar])
   - FAQPage (if FAQs are included — strongly recommended for pillars)
   - Mention `09. AI SEO / 05. LLM Visibility` for AI-Overview considerations.
9. **Define acceptance criteria.** What "done" looks like. Specific, observable.
10. **Write the brief.** Output is a structured Markdown doc the writer can work from directly.

## Output format

```markdown
# Pillar Page Brief — [Pillar topic]

**URL (proposed):** /guides/[pillar-slug]
**Cluster:** [Cluster ID]
**Primary keyword:** [head term + monthly volume]
**Supporting keywords:** [list of secondary keywords the pillar should also cover]
**Format:** [narrative / modular]
**Word-count target:** [n]
**Brief date:** [date]

## SERP read
3-5 sentence read of the head-term SERP: dominant format, top-5 word counts, depth signals, what wins. Identify the realistic position target (e.g. "top 10 reachable; top 3 unrealistic against Wirecutter").

## Scope

### In scope
- [Sub-topic 1]
- [Sub-topic 2]
- ...

### Out of scope
- [Sub-topic that's a spoke or different cluster — link to where it goes instead]
- ...

## Outline

```text
H1: [Pillar title — primary keyword + descriptive subtitle]

H2: [Intro / definitional]
    Content hint: 1-2 sentences on what this section covers.

H2: [Section 2 — maps to Spoke A]
    Content hint: ...
    Internal link: → /blog/[spoke-a-slug]
  H3: [Sub-section if needed]
  H3: [Sub-section if needed]

H2: [Section 3 — maps to Spoke B]
    Content hint: ...
    Internal link: → /blog/[spoke-b-slug]

...

H2: [Closing — practical action / how to choose]
    Content hint: ...
```

## Brand-distinct angle

1-2 paragraphs on what makes this pillar distinct from the SERP top 10. Specific, provable, brand-anchored.

## Internal-link plan

| Direction | From → To | Anchor pattern | Where in body |
|-----------|-----------|----------------|---------------|
| Out from pillar | This pillar → [spoke 1] | "[anchor variant 1]" / "[anchor variant 2]" | Section 2 body |
| Out from pillar | This pillar → [spoke 2] | ... | Section 3 body |
| In to pillar | [Spoke 1] → this pillar | "[anchor variant]" | Spoke intro paragraph + relevant body section |
| Cross-cluster | This pillar → [other pillar] | ... | Closing or relevant section |

## Schema strategy

- **Article**: datePublished, dateModified, author (name + URL + credentials), image, mainEntityOfPage.
- **BreadcrumbList**: Home → Guides → [Pillar].
- **FAQPage**: if FAQs section is included (strongly recommended; 5-10 questions).
- **Reference**: see [generate-schema-markup](../../technical/generate-schema-markup/SKILL.md) when implementing.

## Required assets

- Hero image (1200×630+, brand-distinct — own product photography, not stock).
- 3-5 in-body images / diagrams supporting the brand angle (e.g. swatch tests on three skin tones).
- 1-2 comparison tables if the format calls for them (most pillars benefit from at least one).
- Author bio with credentials.

## Word-count breakdown

- Intro / definitional: ~300-500 words
- Section 2 (Spoke A): ~400-600 words
- Section 3 (Spoke B): ~400-600 words
- ... (each section similar)
- Closing: ~300-500 words

Total target: [n] words.

## Acceptance criteria

- [ ] Every required section is present.
- [ ] Every spoke gets at least one outbound link from the pillar in its relevant section.
- [ ] Every spoke is updated to link to the pillar in intro paragraph + at least one body section.
- [ ] Brand-distinct angle is reflected in at least 2 of the H2 sections (not bolted on at the end).
- [ ] FAQ section includes 5-10 question-form H2s if format supports.
- [ ] Schema (Article + BreadcrumbList + FAQPage if applicable) is deployed and validates in Rich Results Test.
- [ ] Hero image is brand-photographed, not stock.
- [ ] Author bio shows credentials.

## Production timeline

- Brief locked: [date]
- First draft: [date — typically 3-5 weeks for a pillar]
- Editorial review: [date]
- Photography / asset shoot: [date — schedule early]
- Schema implementation: [date]
- Launch: [date]
- Internal-link sweep across spokes: within 7 days of launch

## Implementation checklist

- [ ] Build draft via `generate-content-brief` to get the writer's prose-level brief.
- [ ] Writer drafts; editorial review.
- [ ] Photography / illustration commissioned.
- [ ] Implement on `/guides/[pillar-slug]`.
- [ ] Update spokes to link in (post-launch sweep).
- [ ] Deploy schema; validate in Rich Results Test.
- [ ] Submit URL to GSC for re-indexing.
- [ ] Monitor for 6-12 months; expect ranking lift over that horizon.
- [ ] Schedule annual refresh.

## Risks and watchouts

3-5 specific risks: e.g. "SERP top 5 is Wirecutter, NYT, EWG — top-3 is unrealistic, target top 10"; "photography requires three-skin-tone swatch test which is a separate ops dependency"; "if vitamin-C cluster is also planned for a pillar, sequence carefully — same writer, same author bio, may want consistent voice"; "if no author bio exists, create one before launch (E-E-A-T signal); takes a week."

```

Save the produced file to `businesses/<slug>/pillars/<pillar-slug>.md`. Create the `pillars/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Pillar fit is validated against criteria; if criteria aren't met, the brief flags it and recommends deferring.
- SERP read references the actual top 5, not a generic statement.
- Outline maps cleanly to spokes (typically 1 H2 per spoke topic).
- Brand-distinct angle is specific and provable, not generic ("we care").
- Word-count target is anchored to SERP top 5 + 10-30%, not arbitrary.
- Internal-link plan covers both directions (out from pillar, in to pillar).
- Schema strategy is concrete and references the existing technical-SEO skill.
- Acceptance criteria are observable (not "make it good").
- Production timeline is honest (pillars take 4-8 weeks, not 1-2).

## Common mistakes to avoid

- Don't recommend a pillar for a cluster that doesn't have 5+ spokes. Without spokes, the pillar is just a long blog post.
- Don't pick a primary keyword the brand can't realistically rank for. SERP-saturated head terms (Wirecutter dominance) often warrant a different keyword choice.
- Don't pad word count past 8,000 unless the format genuinely requires depth. Long doesn't mean deep.
- Don't omit the brand-distinct angle. Pillars without an angle don't rank because they read like SERP-summary content.
- Don't recommend a pillar without a writer / asset budget that can realistically produce it. A pillar that takes 12 weeks to produce because resources are thin is a pillar that ships late or never.
- Don't year-stamp the pillar primary keyword. Pillars are evergreen; year-stamping ages them.
- Don't propose schema types Google has deprecated (HowTo / Recipe rich results have been narrowed).
- Don't skip the spoke-update post-launch checklist. The architectural payoff requires updating spokes to link in.

## Example

**Input (abbreviated):** Field & Sun. Cluster I-PILLAR-1 from cluster map (the sun-care informational hub topic). Spokes: 8 sun-care informational posts (some published, some on the calendar). Primary keyword candidate: "mineral sunscreen guide" (vol 1,200, SERP top 5 = Wirecutter, NYT, EWG, two skincare blogs).

**Output (abbreviated):**

Pillar fit: validated (8 spokes, 1,200 vol head term, brand has the depth on three-skin-tone testing). Realistic position: top 10, not top 3 (Wirecutter dominates).

URL: `/guides/mineral-sunscreen`. Format: narrative. Word count: 4,500.

SERP read: top 5 are guide-shaped, average 3,800-5,200 words, all include comparison tables. Wirecutter has dermatologist quotes; EWG has ingredient transparency. Field & Sun's brand-distinct angle: own three-skin-tone swatch testing with photos, plus ingredient percentages publicly listed.

Outline: H1 + intro H2 + 8 H2s mapped to spokes + closing H2 (how to choose).

Brand angle: own three-skin-tone swatch test photographed at the Field & Sun studio in March 2026, plus public 20% non-nano zinc oxide percentage disclosure (most competitors don't publish percentages).

Internal-link plan: pillar links out to 8 spokes; each spoke links to pillar in intro + 1-2 body sections.

Schema: Article + BreadcrumbList + FAQPage (with 8 FAQs covering "is it safe daily," "white cast," "vs chemical," etc.).

Production: 5-week timeline (writer 3 weeks, photography 1 week, edit + schema 1 week).

Risks: SERP-top-3 unreachable; photography is a separate ops dependency requiring model coordination; vitamin-C cluster pillar planned for Q4 — sequence carefully to avoid overlapping author bios; no current author bio exists for the brand — create one as part of launch (E-E-A-T signal, 1-week dependency).

Saved to `businesses/field-and-sun/pillars/mineral-sunscreen.md`.
