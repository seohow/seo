---
name: scope-competitor-analysis
description: Produces a scoped project plan for an SEO competitor analysis — which competitors to study, what to look at, how deep, with which tools, and what the final artifact should contain. Use whenever the user says "I want to study the competition," "let's look at what [competitor] is doing," is starting SEO strategy, planning a quarterly review, briefing a freelancer or agency on competitive research, or asking how to evaluate competitor SEO. Also use when the user has too many competitors to study and needs to pick a manageable set. Do not use to perform the actual analysis — that's `audit-competitor-seo`. This skill produces the brief; the executor produces the audit.
---

# Scope Competitor Analysis

This skill produces a written **project plan** for an SEO competitor analysis. The deliverable is the scope, sequence, methodology, and acceptance criteria — not the analysis itself. A clear plan keeps the work from drifting into "let's look at everything" and produces an analysis that's actually used.

## When to use this skill

- The user is starting SEO strategy and wants to set up the competitive baseline.
- The user has 10+ competitors in mind and needs help narrowing down.
- The user is briefing an agency, freelancer, or internal hire on competitive research.
- The user is planning a quarterly or annual SEO review and needs a recurring competitor-analysis cadence.
- The user has done ad-hoc competitor checking before and wants to do it systematically.

## When NOT to use this skill

- The user wants to actually analyse a specific competitor — use `audit-competitor-seo`.
- The user just wants a list of competitors — that's a small subset of this skill; produce only the competitor selection section if they're explicit.
- The user wants link-gap or keyword-gap analysis — those are part of the audit, not the scope.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections for this skill: business model (2), products/services (3), customer (4), competitors (6), goals (7). If section 6 has fewer than 3 competitors listed, ask the user for 5-10 candidates plus any aspirational brands before producing the plan.
2. **Goal of this analysis** — why now? Common goals: starting SEO, planning a content roadmap, evaluating a market entry, pricing-and-positioning research, link-building target list, agency brief. The plan adapts to the goal.
3. **Constraints** — time budget (days), tools available, language and geography.

If competitors and goal aren't clear, ask before producing output.

## Process

1. **Restate the goal in business terms.** "We're going to look at competitors" is not a goal. "Identify the 10-20 highest-leverage SEO opportunities to inform our Q3 content roadmap, by studying 4 competitors and 1 publisher" is a goal.
2. **Build the competitor set.** 3-5 competitors is the right size. Recommend a mix:
   - 2-3 **direct** competitors (same product, same customer).
   - 1 **aspirational** competitor (bigger brand, similar values — to study what mature looks like).
   - 1 **editorial / publisher** competitor (Wirecutter, NYT, niche publication — they often dominate commercial SERPs).
   - Optionally 1 **community** source (Reddit, niche forum) for intent signal.
   For each, justify inclusion in one sentence. If the user proposed competitors that don't fit, push back politely and suggest alternatives.
3. **Define the lenses.** Decide which of these the analysis will cover. Don't try to do all of them in one project — pick based on the goal:
   - **Keyword overlap and gap** — what keywords competitors rank for that we don't.
   - **SERP pattern analysis** — for our priority keywords, what do positions 1-5 have in common.
   - **Content inventory and topic depth** — how many pages on what topics, how deep.
   - **On-page patterns** — title/H1 patterns, internal linking, schema, page templates.
   - **Link profile** — top referring domains, link velocity, link-gap opportunities.
   - **Technical signals** — site speed, indexed pages, crawlability hints.
   - **Brand and editorial** — tone, expertise signals, freshness cadence.
4. **Choose the toolchain.** Recommend a primary keyword/backlink tool (Ahrefs/Semrush/Moz), a SERP-checking workflow (manual, plus optional Sistrix/Surfer for SERP-feature analysis), and a workspace for the deliverable (Notion, Sheets, doc).
5. **Sequence the phases.** Discovery (validate competitor set, confirm SERP overlap) → per-competitor audit (run the chosen lenses) → synthesis (pull cross-competitor patterns) → opportunity prioritisation. Each phase has a definition of done.
6. **Define the deliverable.** Specify exactly what comes out: a synthesis doc with sections for each lens, a per-competitor sub-doc, and a prioritised opportunity list. The opportunity list is the most important output — it's what feeds [SEO Wins](../../../playbook/01.%20Strategy/05.%20SEO%20Wins.md).
7. **Acceptance criteria.** Objective conditions: every chosen competitor has been audited across the chosen lenses, the synthesis surfaces at least 10 actionable opportunities, each opportunity is scored on impact/effort/fit, the SEO lead has signed off.
8. **Risks and mitigations.** Predictable failures for this business: a competitor set too broad to study deeply, ignoring publishers in commercial SERPs, copying competitor surface features without understanding the pattern, doing the analysis once and never refreshing.

## Output format

```markdown
# Competitor Analysis Plan — [Business Name]

## 1. Goal
One paragraph stating the business goal in concrete terms.

## 2. Competitor set
Numbered list of 3-5 competitors with role (direct / aspirational / publisher / community), URL, and one sentence on why included.

## 3. Lenses in scope
Bulleted list of which lenses (keyword gap, SERP pattern, content depth, on-page, link, technical, brand) the analysis will cover, with one sentence on why each is in scope. Mark out-of-scope lenses explicitly.

## 4. Toolchain
- Primary keyword/backlink tool: [tool] — [purpose]
- SERP analysis: [approach]
- Workspace: [tool]
- Cost / access notes if relevant.

## 5. Phases and timeline
| Phase | Goal | Activities | Definition of done | Owner | Days |
|-------|------|------------|--------------------|-------|------|
| Discovery | ... | ... | ... | ... | ... |
| Per-competitor audit | ... | ... | ... | ... | ... |
| Synthesis | ... | ... | ... | ... | ... |
| Opportunity prioritisation | ... | ... | ... | ... | ... |

## 6. Deliverable
Description of the final artifact. Include the section structure of the synthesis doc and the column spec of the opportunity list.

## 7. Acceptance criteria
Bulleted, objective.

## 8. Risks and mitigations
Bulleted, risk → mitigation.

## 9. Next steps after this project
Brief paragraph on how the output feeds into clustering, content briefing, and the SEO wins backlog.
```

Save the produced file to `businesses/<slug>/competitor-analysis/plan.md`. Create the `competitor-analysis/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Plan is specific to this business; competitors are named and justified.
- Scope is honest — it picks 2-4 lenses, not all of them.
- Timeline is realistic for the resources available; for a typical D2C brand with one person and 4 competitors, expect 5-8 working days.
- Deliverable section is detailed enough that a different person could pick up the brief and execute it.
- Risks are specific to this business, not generic.

## Common mistakes to avoid

- Don't recommend studying 10 competitors. Quality drops fast above 5.
- Don't include lenses the user can't actually run with their tools. If they have no link tool, drop the link lens.
- Don't conflate this skill with the executor. This is the brief; `audit-competitor-seo` does the work.
- Don't ignore publishers and Reddit when they're in the user's commercial SERPs.
- Don't promise quantitative outputs the toolchain can't produce.

## Example

**Input (abbreviated):** D2C beauty brand (skincare/sunscreen), US, has Ahrefs and GSC, marketing manager, goal is to identify 15 highest-leverage opportunities for Q2 content roadmap.

**Output (abbreviated):** Plan with 4 competitors (Supergoop, Saie, ILIA, Wirecutter) plus 1 community source (r/SkincareAddiction). Lenses: keyword gap (primary), SERP pattern (priority terms), content depth (mineral sunscreen topic), link gap (for outreach). 7-day timeline. Deliverable: synthesis doc + opportunity list with 15+ scored items. Risks: founder bias toward direct competitors only — mitigate by enforcing publisher and community inclusion.
