---
name: audit-header-structure
description: Audits H1–H6 header hierarchy across a URL set for structure, keyword use, and featured-snippet eligibility. Use to diagnose header issues or improve on-page clarity and structure.
---

# Audit Header Structure

This skill takes one page (URL plus current heading structure, or just URL plus pasted content) and produces a structural audit + a proposed new outline. The audit catches mechanical issues (multiple H1s, skipped levels, stuffing) and strategic issues (generic section names, missed snippet patterns, mismatch with target cluster).

The output is meant to be implemented directly: a new H1, an ordered list of H2s with H3s nested, and per-H2 notes on what content should follow. Body content rewriting is out of scope — that's `optimize-page-content`.

## When to use this skill

- The user shares a URL and asks to audit its heading structure or "fix the H tags."
- The user has a page underperforming for an informational or commercial cluster and wants snippet eligibility.
- The user is doing a content refresh and the headings need to be redone alongside body changes.
- The user is preparing FAQ or HowTo schema and needs the headings to support it.
- The user is reviewing a template (PDP, collection, blog post) for structural consistency across the site.

## When NOT to use this skill

- The user wants the page's body content rewritten — use `optimize-page-content`.
- The user wants meta title or description changes — use `generate-title-tags` or `generate-meta-descriptions`.
- The user wants a content brief for a *new* page — that's a content-briefing workflow (covered in `04. Content SEO` skills).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections for this skill: products/services (3), customer (4), brand voice (8). Section 8 affects how H2s are phrased.
2. **The page** — at minimum a URL. Ideally also: the current H1/H2/H3/H4 structure as a list (the user can paste it from their CMS or browser DevTools), and a summary of the body content under each H2 (1-2 sentences each). If only a URL is provided, ask the user to paste the heading list — don't fabricate it.
3. **Target cluster** — primary keyword + 3-8 supporting keywords for the page. Default source: `businesses/<slug>/clusters/cluster-map.md`. If a cluster doesn't exist, ask for the primary keyword and intent before proceeding.
4. **Intent** — informational / commercial / transactional. Default source: same cluster map. Intent dictates the recommended H-pattern (question-form vs. functional sections).
5. **Page type** — blog post, pillar, FAQ, comparison, collection, PDP, landing. If unstated, infer from URL or ask.

If the current heading structure or the cluster is missing, ask before producing the audit. Without them you can't audit — you can only speculate.

## Process

1. **Map the current outline.** Reproduce the existing H1/H2/H3 structure as a tree. Count H1s, count H2s, identify any skips. This is the baseline.
2. **Run mechanical checks:**
   - Exactly one H1? Flag if 0 or more than 1.
   - Levels descend cleanly (no H1→H3, no H2→H4)? Flag any skips.
   - H-tags used for visual emphasis only (subtitles, callouts that should be `<p>` or `<strong>`)? Flag.
   - H2s under 60 characters and not stuffed with multiple keywords? Flag any over 80 chars.
   - Heading order makes sense as an outline (not "FAQ" appearing before "What is X")? Flag illogical order.
3. **Run strategic checks:**
   - Is the H1 aligned with the target cluster's primary keyword? Yes/partial/no.
   - For informational/commercial intent: are 60-80% of H2s in question form? Score against the supporting-keywords list.
   - For each supporting keyword in the cluster: is there an H2 that targets it? List the unmapped supporting keywords.
   - Are there any "generic" H2s ("Introduction," "Features," "Conclusion," "Final Thoughts," "FAQ") that should be replaced with specific section names?
   - Is the page snippet-eligible? Snippet eligibility = at least one question-form H2 followed by a 40-60-word direct answer. If absent, flag.
4. **Propose the new outline.** Produce:
   - **New H1** — aligned to primary keyword, in plain language, matching the page's intent.
   - **Ordered list of H2s** — each one mapped to either a supporting keyword, a featured-snippet target, or a functional section (for transactional pages). For each H2, include a 1-sentence "what content goes here" hint.
   - **H3s under each H2** — only where genuinely needed; don't over-nest.
   - **Notes** — flag which H2s are featured-snippet candidates (mark with ⭐); flag which H2s carry the strongest cluster-keyword signal; flag any structural changes that need a redirect or template tweak (rare for headers but possible if H1 changes the URL slug).
5. **Document the diff.** A short before/after summary that the user can hand to a writer or CMS team.

## Output format

```markdown
# Header Structure Audit — [Page name]

**URL:** [URL]
**Page type:** [blog / pillar / FAQ / comparison / collection / PDP / landing]
**Target cluster:** [primary keyword] (intent: [intent])
**Supporting keywords:** [comma-separated list]

## Current outline
```

H1: ...
  H2: ...
    H3: ...
  H2: ...
  ...

```

## Mechanical issues
- [ ] / [✗] Exactly one H1 — [comment]
- [ ] / [✗] No skipped levels — [comment]
- [ ] / [✗] No H-tags used for visual styling only — [comment]
- [ ] / [✗] H2 lengths reasonable (≤ 80 chars) — [comment]
- [ ] / [✗] Heading order is a coherent outline — [comment]

## Strategic issues
- **H1 alignment with primary keyword:** [yes / partial / no] — [comment]
- **Question-form H2 coverage** (informational/commercial only): [n] of [total] H2s, vs. recommended 60-80%. [comment]
- **Supporting-keyword coverage:** [list which supporting keywords have H2s, which don't]
- **Generic H2s present:** [list, with replacement suggestions]
- **Snippet eligibility:** [yes — mention which H2 is the candidate / no — explain why and what to add]

## Proposed outline

```

H1: [new H1]

H2: [new H2 1] ⭐ [if snippet candidate]
    Content hint: [1 sentence on what goes here]
  H3: [optional sub-section]
    Content hint: ...

H2: [new H2 2]
    Content hint: ...

...

```

## Diff summary

| Area | Before | After |
|------|--------|-------|
| H1 count | [n] | 1 |
| H1 text | "..." | "..." |
| H2 count | [n] | [n] |
| Question-form H2 % | [%] | [%] |
| Supporting-kw H2 coverage | [n / n] | [n / n] |
| Snippet candidates | [n] | [n] |

## Implementation checklist
- [ ] Update H1 in CMS
- [ ] Update H2/H3 structure (note: don't change body content here — that's a separate pass)
- [ ] Verify on live page (DevTools heading outline)
- [ ] Submit URL to GSC for re-indexing
- [ ] After 30 days: check for featured-snippet wins, People Also Ask appearances, position change in GSC
```

Save the produced file to `businesses/<slug>/headers/<page-slug>.md`. Create the `headers/` sub-folder if it doesn't already exist. Name the file after the page slug (e.g. `how-mineral-sunscreen-works.md`). After writing, tell the user the file path so they can open it.

## Quality bar

- Mechanical and strategic checks are both run; nothing is skipped.
- Proposed outline is shippable as-is — no "TODO" placeholders.
- Each H2 in the proposed outline has a one-sentence content hint so a writer/CMS team knows what to put under it.
- Snippet-candidate H2s are marked.
- Supporting-keyword coverage is mapped explicitly — if 7 supporting keywords go in, the audit shows which got H2s and which didn't.
- Diff summary is quantitative (counts, percentages), not just narrative.
- For transactional pages (PDP, collection), the audit is honest: question-form H2s are less important; the audit focuses on functional-section completeness.
- Brand voice is honoured in the proposed H2 wording.

## Common mistakes to avoid

- Don't propose an outline that has more than one H1.
- Don't recommend question-form H2s on transactional pages where they don't belong.
- Don't fabricate body content. The hint per H2 is one sentence describing intent — not a draft of the section.
- Don't add a snippet candidate where the body content can't actually deliver a 40-60-word direct answer. Snippets earned by structure-without-substance get demoted.
- Don't propose H2s that don't map to either a cluster supporting keyword OR a functional section. Every H2 should earn its place.
- Don't change the URL slug as part of a header audit. URL changes are a different operation (`audit-urls`) and require redirects.
- Don't ignore the page-type. A PDP audit and a blog audit are not the same job.

## Example

**Input (abbreviated):** URL = `/blog/how-mineral-sunscreen-works`. Page type = blog post. Cluster I03: primary `how does mineral sunscreen work` (1,200/mo, informational). Supporting: `mineral vs chemical sunscreen`, `does mineral sunscreen leave white cast`, `is zinc oxide safe`, `mineral sunscreen for dark skin`. Brand voice = warm, knowledgeable, plain-language, ingredient-led.

Current outline:

```
H1: Mineral Sunscreen
H1: Field & Sun (banner — duplicate H1)
H2: Section 1
H2: Pros
H2: Cons
H4: Bonus tip (skipped levels)
H2: FAQ
```

**Output (abbreviated):**

Mechanical: 2 H1s ✗, skipped level (H2→H4) ✗, generic H2s ("Section 1", "Pros") ✗.

Strategic: H1 doesn't include primary keyword ✗. 0 of 4 H2s are question-form (vs. recommended 60-80%) ✗. Supporting-kw coverage: 0/4. Snippet eligibility: no question-form H2s, no eligibility.

Proposed:

```
H1: How Does Mineral Sunscreen Work? A Plain-Language Guide

H2: What is mineral sunscreen, exactly? ⭐
    Content hint: 40-60 word direct answer + 2 sentences of context.

H2: How does mineral sunscreen protect your skin? ⭐
    Content hint: Reflection / scattering mechanism + zinc oxide breakdown.
  H3: How zinc oxide reflects UV
  H3: Non-nano vs nano formulations

H2: Mineral vs chemical sunscreen — what's the real difference? ⭐
    Content hint: Direct comparison table covering active filters, skin feel, white-cast risk, reapplication, and finish on skin.

H2: Does mineral sunscreen leave a white cast? ⭐
    Content hint: Honest answer + why some do and others don't + tinted-formula note.

H2: Is zinc oxide safe for daily use? ⭐
    Content hint: Direct yes/no answer + reasoning + sensitive-skin notes.

H2: How to apply mineral sunscreen
    Content hint: Step-by-step + dose recommendation (the 2-finger rule).

H2: Where to find a good mineral sunscreen
    Content hint: Brand-led collection link + alternatives.
```

Diff: H1 1 (was 2), H2 7 (was 4), question-form % 71% (was 0%), supporting-kw coverage 4/4 (was 0/4), snippet candidates 5 (was 0). Implementation checklist included. Saved to `businesses/field-and-sun/headers/how-mineral-sunscreen-works.md`.
