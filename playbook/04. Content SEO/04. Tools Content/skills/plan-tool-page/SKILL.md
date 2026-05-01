---
name: plan-tool-page
description: Evaluates whether a tool (calculator, quiz, finder, generator, comparison, checker) fits the brand and produces the design brief if so. Covers tool archetype, positioning, input / output logic, URL pattern, surrounding content (intro, methodology, FAQ), tech / engineering requirements, schema strategy, link-acquisition plan, and acceptance criteria. Use whenever the user asks to "plan a tool page," "design a calculator / quiz / finder," "we want to build a [tool type] for [topic]," "should we build a [topic] tool," "what would a [topic] quiz look like," "how do we make our [topic] page interactive," or has decided a tool is worth building and needs the design before commissioning engineering. Also use when evaluating multiple candidate tools to decide which to ship first. Do not use to actually build the tool (that's an engineering job; this produces the spec) or to plan a blog post / pillar (use `generate-content-brief` / `design-pillar-page`).
---

# Plan Tool Page

This skill evaluates a tool concept against three dimensions (search demand, link-earning potential, conversion potential) and produces the design brief for the tool — the spec engineering and content build against.

The skill is opinionated about a few things: tools work best when tied to a topic cluster; tools need substantial surrounding content (not just JS on the page); tools should be open access (not email-gated) unless there's a strong reason; tools take 4-12 weeks to build properly and the timeline shouldn't be discounted.

## When to use this skill

- The user has a tool concept and wants to evaluate whether to build it.
- The user is comparing 2-3 candidate tools and needs a recommendation.
- The user has decided to build and needs the design brief for engineering.
- The user wants to add an interactive layer to an existing topic cluster.
- The user is briefing a contractor / agency on a tool build.

## When NOT to use this skill

- The user wants to design a pillar page — use `design-pillar-page`.
- The user wants to brief a blog post — use `generate-content-brief`.
- The user wants to architect a topic cluster — use `design-topic-cluster`.
- The user wants the actual code / implementation — that's engineering's job; this produces the spec.
- The user wants to build a programmatic SEO template — use `plan-programmatic-seo` / `design-programmatic-template`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: products/services (3), customer (4), goals (7), brand voice (8). Customer's "what do they want to figure out" is the engine of tool ideation.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. Tool should anchor to a cluster.
3. **Tool concept(s)** — required. Either one tool (evaluate + brief) or 2-3 candidate tools (evaluate + recommend one).
4. **Engineering capacity / budget** — optional but valuable. If the team has 4 weeks of engineering, propose only tools that fit the timeline. If unknown, ask.
5. **Existing tools on the site** — optional. Tool count > 5 means the brand has tooling expertise; tool count = 0 means this is a "first tool" decision (higher stakes).

If tool concept is missing, ask. The brief is anchored to a specific tool.

## Process

1. **Evaluate the tool against three dimensions.** For each candidate:
   - **Search demand.** What's the volume on the most natural keyword pattern (`[topic] calculator`, `[topic] quiz`, `[topic] finder`, etc.)? Anything below 200/mo is risky as the primary justification.
   - **Link-earning potential.** Would publishers / journalists / communities cite this? Calculators with verifiable outputs (mortgage, ROI) earn links well. Quizzes that produce share-able results (BuzzFeed-style) earn social but fewer authority links. Finders earn moderate links. Tools with no novel output (yet-another summary tool) earn poorly.
   - **Conversion potential.** Does the output naturally lead to a Field & Sun product? Quizzes that recommend a specific product convert at 5-15%; calculators that produce a number with no transactional bridge convert at <1%. The conversion path is part of the design.
   Score each candidate against each dimension (high / medium / low). Recommend the highest-balanced score.
2. **Pick the tool archetype.** Calculator (numerical), quiz (sequence → recommendation), finder (filter / search), generator (input → generated output), comparison (side-by-side), checker (URL / handle / domain → status). Each archetype has structural conventions.
3. **Define positioning.** What does the tool do, in one sentence? Who is it for? What does it produce? E.g. "A 5-question quiz that matches sun-conscious skincare buyers to the right SPF and routine, dermatologist-reviewed."
4. **Design the input flow.**
   - **Calculator:** which inputs (numerical fields, dropdowns), with what defaults, what units. Validation rules.
   - **Quiz:** how many questions (5-7 is the sweet spot; <4 feels thin, >9 has high drop-off). Each question, each answer set.
   - **Finder:** filter criteria (which dimensions), default state, results-list shape.
   - **Generator:** input shape, output shape, copy-able / share-able result.
5. **Design the output logic.** What does the tool produce? For a quiz: a primary recommendation + 1-2 alternatives + reasoning. For a calculator: the number + interpretation + suggested action. For a finder: a ranked list of matches.
6. **Plan the URL.** Typical: `/tools/[tool-name]` or `/quiz/[quiz-name]`. Pick a convention and apply consistently.
7. **Plan the surrounding content.** Tools need on-page content beyond the tool itself:
   - Intro section (200-400 words): what the tool does, who it's for, why it's accurate.
   - Methodology section (300-500 words): how the tool works (briefly). Builds trust + indexable content.
   - FAQ section (400-600 words): 5-8 question-form H3s.
   - Related blog content (links to cluster pillar + sibling spokes).
   - Author / methodology credit (E-E-A-T signal — who built / reviewed this).
8. **Plan tech requirements.** Mobile-first. Accessibility (keyboard navigation, screen-reader labels, sufficient contrast). Page speed (tool shouldn't slow the page above LCP / INP thresholds). Server-side rendering or progressive enhancement for SEO indexing. Analytics events on each step.
9. **Plan schema.** Article + WebApplication (`applicationCategory`: "UtilitiesApplication" or similar) + FAQPage if FAQs included.
10. **Plan link-acquisition.** Tools earn the most links when actively pitched. Identify 5-10 publications likely to cite, draft pitch angle, plan PR push around launch. Without active promotion, tools take 12-18 months to earn the link profile they could earn in 4-6.
11. **Estimate build cost.** Quizzes: 4-8 weeks. Calculators: 2-6 weeks. Finders: 6-12 weeks. Generators: 4-10 weeks. Be honest; don't lowball.
12. **Define acceptance criteria.** What "done" looks like, observably.
13. **Write the brief.** Output is a structured Markdown doc engineering + content can work from.

## Output format

```markdown
# Tool Page Brief — [Tool name]

**URL (proposed):** /tools/[slug] or /quiz/[slug]
**Archetype:** [calculator / quiz / finder / generator / comparison / checker]
**Cluster:** [Cluster ID + name]
**Pillar:** [pillar URL if cluster has one]
**Brief date:** [date]

## Evaluation

### Tools considered
| Tool | Search demand | Link potential | Conversion potential | Score |
|------|---------------|----------------|----------------------|-------|
| Skin-type finder quiz | High (3,200/mo) | High | High | ✅ recommended |
| SPF coverage calculator | Medium (250/mo) | Medium | Low | ❌ defer |
| Routine builder | Medium | Low | Very high | 🟡 candidate for v2 |

### Recommendation
[Recommended tool + reasoning, 2-3 sentences]

## Positioning
1 sentence: what does the tool do, who is it for, what does it produce?

For Field & Sun: "A 5-question quiz that matches sun-conscious skincare buyers to the right SPF and routine, dermatologist-reviewed."

## Tool design

### Input flow
[For a quiz:]
1. **Question 1**: [text]
   - Answer A: [text] → tag with attribute X
   - Answer B: [text] → tag with attribute Y
   - Answer C: [text] → tag with attribute Z
2. **Question 2**: [text]
   - ...
... (5-7 questions total)

[For a calculator:]
- **Input 1**: [field name, type, units, default, validation]
- **Input 2**: [...]
- ...

[For a finder:]
- **Filter criteria**: [list of filter dimensions, with defaults]

### Output logic

[For a quiz:]
Score the answers; map to one of [n] result archetypes.
- **Result A** ([archetype]): primary recommendation = [Field & Sun product]; alternatives = [products]; reasoning = [paragraph].
- **Result B** ([archetype]): primary recommendation = [Field & Sun product]; alternatives = [products]; reasoning = [paragraph].
- ...

[For a calculator:]
Formula: [equation]
Output: [number] [units]
Interpretation: [text — how to read the number]
Suggested action: [link to relevant product / pillar]

### Result page
- Primary result (above fold).
- Reasoning (1-2 paragraphs).
- Product recommendations with thumbnails + add-to-cart.
- Share / save result CTA.
- "Want to learn more?" → link to cluster pillar.

## Surrounding content

### Intro (200-400 words)
- What the tool does.
- Who it's for.
- Why it's accurate (methodology preview).
- CTA to start.

### Methodology (300-500 words)
- How the tool works (high-level).
- Source of inputs (clinical research / customer data / dermatologist consult).
- Limitations / what it doesn't cover.

### FAQ (400-600 words, 5-8 Q&As)
- "Is the [tool name] accurate?"
- "How is the recommendation calculated?"
- "What if I'm between two [results]?"
- "Should I see a dermatologist?"
- "Can I retake the quiz?"
- ...

### Related content
- Link to cluster pillar.
- Link to 2-3 sibling spokes.
- Link to product collection page.

### Author / methodology credit
- Built by: [team]
- Reviewed by: [dermatologist / expert + credentials]
- Last updated: [date]

## Tech requirements

### Functional
- Mobile-first (60-80% of traffic is mobile).
- Accessibility: keyboard navigation, screen-reader labels, WCAG 2.1 AA contrast.
- Page speed: tool must not push LCP > 2.5s or INP > 200ms.
- Server-side rendering or progressive enhancement (tool content must be indexable, not pure JS).

### Analytics
- Step-level events (question 1 viewed, question 1 answered, ..., result viewed, product clicked).
- Drop-off tracking per step.
- Result-archetype distribution.
- Conversion attribution (quiz → PDP → ATC → purchase).

### Storage
- Anonymous result-saving (link share-able).
- No PII collected unless explicit (no email gate by default — see "open access" decision).

## URL pattern
- This tool: `/quiz/skin-type-finder`
- Future tools: `/quiz/[name]` or `/tools/[name]` per archetype.

## Schema strategy
- **Article**: required. datePublished, dateModified, author (with credentials).
- **WebApplication**: applicationCategory: "UtilitiesApplication" / "LifestyleApplication" as appropriate.
- **FAQPage**: required (FAQ section is included).
- **BreadcrumbList**: Home → Tools → [Tool].
- **Reference**: see [generate-schema-markup](../../../../03.%20Technical%20SEO/04.%20Schema%20Markup/skills/generate-schema-markup/SKILL.md) when implementing.

## Link-acquisition plan

### Publications likely to cite
1. [Publication 1] — typical link source for skincare tools; pitch angle: "first three-skin-tone-tested quiz."
2. [Publication 2] — ...
3. ...

### Outreach plan
- Pre-launch: 5-10 targeted pitches to publications (2-3 weeks before launch).
- Launch week: PR push, social distribution, newsletter mention.
- Post-launch (weeks 2-8): follow-up with non-responders, monitor for organic citations.

### Internal-link strategy
- Cluster pillar links to tool prominently.
- Each cluster spoke links to tool in body where contextually relevant.
- Homepage / nav placement (depending on traffic priority).

## Build cost estimate
- Engineering: [n] weeks at [n] FTE.
- Content: [n] weeks (intro, methodology, FAQ, result-page copy).
- Design: [n] weeks (mobile + desktop wireframes, result-page UX).
- Photography / illustration: [n] weeks.
- QA / accessibility audit: [n] weeks.
- Total calendar time: [n] weeks (assume some parallel work).

## Acceptance criteria
- [ ] Tool produces correct output for all defined input combinations.
- [ ] Tool is mobile-first and accessible (keyboard + screen reader).
- [ ] Tool's surrounding content is at least [n] words and includes intro, methodology, FAQ.
- [ ] Schema (Article + WebApplication + FAQPage + BreadcrumbList) deployed and validates in Rich Results Test.
- [ ] Page speed: LCP ≤ 2.5s, INP ≤ 200ms on mid-tier mobile.
- [ ] Analytics events fire for every step.
- [ ] Result page has product recommendations with attribution-tracked CTA.
- [ ] Tool is linked from cluster pillar + at least 3 sibling spokes.
- [ ] Author / methodology credit is visible on the page.
- [ ] PR pitch list is finalised pre-launch.

## Risks and watchouts
3-5 specific risks. E.g. "Engineering capacity is tight — 8-week timeline is realistic only if no other major project is in flight"; "Methodology needs dermatologist review — schedule that early as a critical-path dependency"; "If quiz drops below 60% completion, the tool isn't earning its build cost — plan for a v2 redesign at 3 months"; "Open-access vs email-gate decision — recommend open access for first launch; gate can be added later if lead capture is needed."

## Implementation checklist
- [ ] Brief lock + sign-off (engineering, design, content, marketing).
- [ ] Wireframes (mobile + desktop).
- [ ] Methodology review with dermatologist.
- [ ] Engineering build + analytics instrumentation.
- [ ] Content production (intro, methodology, FAQ, result copy).
- [ ] QA + accessibility audit.
- [ ] Schema implementation + Rich Results validation.
- [ ] PR / outreach pre-launch (2-3 weeks).
- [ ] Launch.
- [ ] Internal-link sweep (cluster pillar + spokes).
- [ ] 30-day post-launch review (completion rate, conversion, links earned).
```

Save the produced file to `businesses/<slug>/tools/<tool-slug>.md`. Create the `tools/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Evaluation table covers all candidate tools across the three dimensions; recommendation is reasoned, not arbitrary.
- Input flow is specific (every question / field / filter spelled out), not "will define later."
- Output logic is testable (mapping rules + reasoning per archetype).
- Surrounding content plan covers intro / methodology / FAQ / related links — not just "add some intro text."
- Tech requirements include mobile, accessibility, speed, analytics — not just "build it."
- Schema strategy references the actual technical-SEO skill.
- Link-acquisition plan names specific publications + pitch angle, not generic "do PR."
- Build cost estimate is honest; no lowballed timelines.
- Acceptance criteria are observable (LCP ≤ 2.5s, etc.) not "make it good."

## Common mistakes to avoid

- Don't recommend a tool with weak search demand. <200/mo on the primary keyword usually means the tool won't earn its build cost from organic traffic alone.
- Don't propose tools without cluster anchoring. Standalone tools without cluster context underperform.
- Don't skip the surrounding content. Tools without intro / methodology / FAQ index poorly.
- Don't propose email gates by default. Open access is the better SEO + brand decision in most cases.
- Don't lowball the build timeline. 4-6 weeks is realistic for a quiz; "we'll knock it out in 2 weeks" almost always slips.
- Don't omit accessibility requirements. Tools without keyboard / screen-reader support get cited as bad examples + violate ADA in some jurisdictions.
- Don't propose schema types Google has narrowed. Speakable, Recipe, HowTo rich results have all been narrowed in 2024-25; use them only when semantically correct, not for SEO theatre.
- Don't skip the link-acquisition plan. Tools' main lift is backlinks; without an active outreach plan, that lift takes 18 months to materialise.

## Example

**Input (abbreviated):** Field & Sun. Three candidate tools: SPF coverage calculator, skin-type finder quiz, routine builder.

**Output (abbreviated):**

Recommendation: skin-type finder quiz. Reasoning: highest balanced score across search demand (3,200/mo on "skin type quiz"), link potential (publishers cite skincare quizzes), conversion potential (quiz output recommends specific products).

URL: `/quiz/skin-type-finder`. Archetype: quiz. Cluster: skincare-routine.

Input flow: 5 questions (oiliness, sensitivity, sun behaviour, pigmentation concern, current routine).

Output logic: maps to one of 4 skin types; primary product recommendation + 2 alternatives per type; dermatologist-reviewed reasoning.

Surrounding content: 1,200 words across intro / methodology / FAQ.

Tech: mobile-first, WCAG 2.1 AA, LCP ≤ 2.5s, full analytics instrumentation.

Schema: Article + WebApplication + FAQPage + BreadcrumbList.

Link-acquisition: 8 target publications identified; pre-launch outreach 2 weeks before; in-house dermatologist co-byline strengthens citation appeal.

Build cost: 7 weeks calendar time (engineering 5 weeks + content 2 weeks parallel + design 2 weeks parallel + dermatologist review 1 week critical-path).

Risks: dermatologist availability is the critical path; plan for 4-6 weeks lead time on review. Quiz completion rate target: 65% (industry benchmark); if below 50% at week 4, redesign question flow.

Saved to `businesses/field-and-sun/tools/skin-type-finder.md`.
