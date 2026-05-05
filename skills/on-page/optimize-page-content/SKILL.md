---
name: optimize-page-content
description: Reworks a single page's body content against its target keyword cluster, search intent, the SERP it competes in, and the brand's voice. Produces a structured rework plan — sections to add, expand, or cut; brand-distinct angles to introduce; format changes (tables, lists, photos, FAQs); E-E-A-T signal recommendations; and either a section-by-section outline or a draft rewrite (user choice). Use whenever the user asks to "rewrite this page," "improve content on [URL]," "make this page rank better," "optimize the body content of [page]," "what's missing from this article," "refresh this post," or shares a page URL plus a target keyword and asks for content work. Also use for striking-distance pages with shallow content, content refresh on decayed posts, and pages that rank for the primary keyword but not its supporting cluster. Do not use to generate page titles, descriptions, or headers — those are separate skills (`generate-title-tags`, `generate-meta-descriptions`, `audit-header-structure`). Do not use to write a brand-new page from scratch — that's content briefing in `04. Content SEO`.
---

# Optimize Page Content

This skill takes one page and produces a content-rework plan. The output is concrete: which sections to add (with content hints), which sections to expand or cut, what proof / E-E-A-T signals to introduce, what format elements to add (comparison tables, FAQs, photos), and brand-distinct angles to lean into. The user picks the depth of the deliverable: a structured plan (lighter, faster) or a section-by-section draft rewrite (heavier, ready-to-implement).

The skill is opinionated: it reads the SERP before recommending, it cross-checks coverage against the cluster, it prioritises angles the brand can credibly own (vs. trying to out-resource publishers), and it always produces an implementation checklist with re-indexing and monitoring steps.

## When to use this skill

- The user asks to rewrite or improve content on a specific page.
- A striking-distance page (positions 11-30) needs depth/quality lift to break top 10.
- A page ranks for its primary keyword but not its supporting cluster — content depth is usually the gap.
- An old post has decayed traffic and needs refresh rather than replacement.
- The user is doing systematic on-page work via the SEO Wins backlog and content optimization is up.

## When NOT to use this skill

- The user wants meta title / description rewrites — use `generate-title-tags` / `generate-meta-descriptions`.
- The user wants header restructure only — use `audit-header-structure`. (Often run alongside this skill, but they're separate jobs.)
- The user wants to write a brand-new page from scratch — that's content briefing (covered in `04. Content SEO`).
- The user wants to optimise images — use `audit-images`.
- The user wants AI/LLM-specific optimization (citation-ready content, AI Overview eligibility) — covered in `09. AI SEO / 01. Content Optimization`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), customer (4), competitors (6), brand voice (8). Voice and brand-distinct angles directly drive the rework.
2. **The page** — URL + current body content. The user can paste the content or point at the URL (the skill operates on what's pasted; if only a URL is given, ask for the content). Also useful: current word count, H-structure, last-updated date.
3. **Target cluster** — primary keyword + 3-8 supporting keywords. Default source: `businesses/<slug>/clusters/cluster-map.md`. If unknown, ask the user for the primary keyword and intent before producing.
4. **Intent** — informational / commercial / transactional. Default source: same cluster map.
5. **SERP context** — top 5-10 results for the primary keyword (URL, format, approximate word count, key signals). The user can describe what's in the SERP, or the skill can ask for screenshots / pasted summaries. If the user can't provide SERP context, the skill operates with cluster + intent only and flags this as a limitation.
6. **Header structure (optional but valuable)** — output of `audit-header-structure` for this page. If available, the rework plan aligns to the proposed outline. If not, the skill produces its own outline alongside the content rework.
7. **Output depth preference** — "plan" (structured rework plan with content hints, ~30 min for the user to implement against) or "draft" (full section-by-section rewrite, longer to produce, ready to ship). Default to plan; ask if unclear.

If cluster, intent, or current content is missing, ask before producing the rework. Speculation is worse than no rework.

## Process

1. **Read the SERP at depth.** Top 5 pages. For each: format (article, listicle, comparison, hybrid), word count, dominant H-structure, depth signals (tables, photos, expert quotes, original research, dates), freshness. Note any clear pattern (e.g. "every page in top 5 has a comparison table").
2. **Audit the current page.** Map current content to:
   - **Cluster coverage** — which of the supporting keywords are covered in body content? Which aren't?
   - **Intent fidelity** — does the page deliver on the intent? An informational page should explain; commercial should compare; transactional should convert. Score yes/partial/no.
   - **Depth signals present** — tables, lists, photos, expert quotes, dates, primary research, customer examples. List what's present and what's missing relative to SERP top 5.
   - **Format match** — does the page's format match the SERP's dominant format? If SERP top 5 is comparison-heavy and the page is a wall of text, format is misaligned.
   - **Brand voice fit** — does the current page read in the user's brand voice? Or is it generic SEO copy?
   - **Freshness** — when was it last updated? Are dates and references current?
3. **Identify brand-distinct angles.** What can THIS brand say credibly that the SERP top 5 cannot? Examples:
   - **Own product testing** — D2C brands can test their own products in conditions publishers can't.
   - **Customer / community evidence** — quotes, reviews, before/afters from real customers.
   - **Founder / expert perspective** — first-person knowledge from a brand insider.
   - **Market-specific specificity** — e.g. US / Canada / UK availability or formulation context when that affects how the customer chooses.
   - **Niche use cases** — segments the publisher SERP top 5 doesn't serve well (darker skin tones, sensitive skin, makeup layering, refill routines, etc.).
   List at least 2-3 angles that this brand can credibly own.
4. **Plan the rework.** Produce the recommendation as:
   - **Add** — new sections (mapped to missing supporting keywords or missing depth signals). For each, a 1-3 sentence content hint OR (if "draft" mode) the actual section copy.
   - **Expand** — existing sections that need more depth. Specify what to add: examples, evidence, brand-distinct angle.
   - **Cut** — sections that don't earn their space. Filler intros, redundant FAQs, off-topic tangents.
   - **Restructure** — order changes (e.g. move the direct answer to position 1; move the brand pitch to the end).
   - **Format changes** — add a comparison table here, convert this paragraph to a list, add a "tested and observed" callout box, add a featured-snippet-eligible 40-60 word direct answer at the top.
   - **E-E-A-T signal additions** — date the examples, name the methodology, add author bio, link to primary sources, add customer quotes with attribution.
5. **Calibrate the SERP-competition assessment.** State plainly whether the rework can credibly compete with top 5 of the SERP. Sometimes the answer is "yes, with these additions"; sometimes "yes for positions 4-7 but Wirecutter is unbeatable at #1"; sometimes "no, the SERP top 5 are out of reach with current resources — better to target a more specific cluster." Honesty here saves the user from work that won't pay off.
6. **Write the implementation checklist.** Word-count delta, H-structure changes, sections to write, sections to cut, format additions, photo / asset needs, internal-link updates (cross-reference the linking plan), title/description updates needed (if the rework changes the page's emphasis), re-indexing, monitoring window.
7. **Document the angle for future reference.** A 2-3 sentence note: "what worked here, what didn't" — to be added to the per-business CLAUDE.md after the page ships and 30-60-day results are in.

## Output format

For "**plan**" mode (default):

```markdown
# Content Optimization Plan — [Page name]

**URL:** [URL]
**Target cluster:** [cluster ID + primary keyword] (intent: [intent])
**Supporting keywords:** [list]
**Current word count:** [n]
**Current last-updated:** [date or "unknown"]
**Output depth:** plan
**Audit date:** [date]

## SERP read
3-5 sentence assessment of top 5 results: format, word counts, dominant signals, what wins.

## Current page audit
- **Cluster coverage:** [n / N] supporting keywords addressed.
- **Missing supporting keywords:** [list]
- **Intent fidelity:** [yes / partial / no] — [why]
- **Depth signals present:** [list]
- **Depth signals missing (vs SERP top 5):** [list]
- **Format match:** [yes / partial / no] — [explanation]
- **Brand voice:** [pass / partial / fail]
- **Freshness:** [strong / weak / stale] — [last updated, dates referenced]

## Brand-distinct angles to lean into
1. [Angle] — [why this brand can own it credibly]
2. [Angle] — [why]
3. [Angle] — [why]

## SERP-competition assessment
[Plain-English statement of whether the rework can realistically reach top 5, top 3, top 10. Honest. Calls out any uncatchable competitors and recommends a position target.]

## Rework plan

### Add
- **New section** (under H2 "[heading]") — covers supporting keyword "[kw]". Content hint: [1-3 sentences].
- **New section** ... 

### Expand
- **Section** "[current heading]" — current ~100 words, expand to ~300 with [specific evidence / example / brand angle].
- ...

### Cut
- **Section** "[current heading]" — [why it's not earning its space].
- ...

### Restructure
- Move "[section]" from position [n] to position [n] because [reason].

### Format changes
- Add comparison table between "[section]" and "[section]" with columns [list].
- Convert "[section]" from paragraph to a numbered list (4-6 items).
- Add a 40-60 word direct answer to the primary query at the very top of the body, as a featured-snippet target.
- ...

### E-E-A-T signal additions
- Date the testing methodology ("Tested in April 2026").
- Add author bio with credentials.
- Add 2-3 customer quotes with attribution.
- Link to [n] primary sources / studies.
- ...

## Word-count target
- Current: [n]
- Target: [n] (+/- delta)
- Reasoning: [brief]

## Implementation checklist
- [ ] Implement rework in CMS (target effort: [n] hours).
- [ ] Update title and description if rework shifts emphasis (run `generate-title-tags` / `generate-meta-descriptions`).
- [ ] Verify H-structure aligns (`audit-header-structure`).
- [ ] Update internal links per `internal-linking/plan.md`.
- [ ] Add / update images per `audit-images`.
- [ ] Submit URL to GSC for re-indexing.
- [ ] Monitor for 30-60 days: rank, clicks, featured-snippet eligibility, time-on-page.
- [ ] After window closes: log outcome in per-business CLAUDE.md (what worked, what didn't).
```

For "**draft**" mode (heavier output):

- Same structure as above, but each "Add" and "Expand" item includes the actual prose copy, written in brand voice, ready to paste into the CMS.
- Cut and Restructure items remain as instructions, not copy.

Save the produced file to `businesses/<slug>/content-optimization/<page-slug>.md`. Create the `content-optimization/` sub-folder if it doesn't already exist. Name the file after the page slug. After writing, tell the user the file path so they can open it.

## Quality bar

- SERP read references the actual top 5 results, not generic statements.
- Cluster coverage is mapped explicitly (which supporting keywords are present, which aren't).
- Brand-distinct angles are actually distinct — not "we care about quality" generic.
- SERP-competition assessment is honest (sometimes pages can't reach top 5; the user needs to know).
- Add / expand / cut / restructure / format / E-E-A-T sections each have concrete items.
- Word-count target is justified, not arbitrary.
- Implementation checklist closes the loop with re-indexing and outcome logging.
- Brand voice is honoured throughout (especially in "draft" mode).

## Common mistakes to avoid

- Don't recommend doubling word count without specifying what the new words say. Length without depth is filler.
- Don't ignore the SERP. A rework done in a vacuum tends to reproduce generic SEO patterns instead of differentiating.
- Don't promise top-1 ranking against a Wirecutter that has 50× the resources. Be honest about what's reachable.
- Don't recommend brand-distinct angles the brand can't credibly own. "Founder perspective" only works if the founder is willing to write it; "own product testing" only works if the brand actually tests.
- Don't keyword-stuff. The supporting keywords need to be served by the content, not sprinkled.
- Don't forget to update title/description when content shifts. If the rework changes what the page is about, the SERP-facing layer needs to follow.
- Don't ignore freshness. Undated content reads stale; dating examples and methodology earns trust signals.
- Don't run "draft" mode for pages where "plan" is enough. The full draft is heavier output and most users iterate faster from a structured plan + their own writing.

## Example

**Input (abbreviated):** Page = `/blog/mineral-vs-chemical-sunscreen`, 850 words, 4 generic H2s ("Pros," "Cons," etc.), no comparison table, no swatch photos. Cluster I04: primary `mineral vs chemical sunscreen` (1,800/mo, informational). Supporting: `is mineral sunscreen better`, `does mineral sunscreen leave white cast`, `mineral sunscreen for sensitive skin`, `is zinc oxide safe daily`. SERP top 5: NYT Wirecutter (4,200 words, comparison table, dermatologist quotes), Reddit, The Strategist, personal skincare blog (1,800 words, photo-rich), YouTube. Output depth: plan.

**Output (abbreviated):**

SERP read: top 3 are publisher review content with methodology and comparison tables; positions 4-5 are personal-experience-led. Wirecutter is uncatchable at #1 on resources. Realistic target: positions 4-7.

Current audit: cluster coverage 1/4, intent fidelity partial (lacks the comparison shape), no depth signals, format mismatch (wall-of-text vs SERP's table+swatch pattern), undated.

Brand-distinct angles: (1) Own product swatch testing — Mineral Sun Drops swatched on light/medium/deep skin tones with photos; (2) Sensitive-skin reactivity from real customer feedback (cluster sibling exists, link in); (3) Ingredient-percentage transparency (most reviews don't list active percentages).

SERP-competition assessment: Top 5 is reachable. Position #1 (Wirecutter) is not. Realistic target: position 4-7 with the rework.

Rework plan:

**Add:**

- New H2 "Does mineral sunscreen leave a white cast?" (covers supporting kw). Content hint: Mineral Sun Drops swatched on three skin tones with photos and observed blendability ratings.
- New H2 "Mineral vs chemical sunscreen for sensitive skin" with comparison table. Content hint: reactivity profiles, customer feedback themes, recommended formats per skin type.
- New H2 "Is zinc oxide safe for daily use?" Content hint: FDA OTC monograph status, non-nano vs nano, percentages we use (20% non-nano zinc oxide), link to primary sources.
- 40-60 word direct answer at the top: "Mineral sunscreens use zinc oxide or titanium dioxide to scatter and absorb UV; chemical sunscreens use organic filters that absorb UV. For sensitive skin and clear ingredient visibility, mineral can be easier to evaluate; for invisible finish under makeup in humid climates, some chemical formulas can be easier to wear."

**Expand:**

- Existing "Pros" section → "Where mineral sunscreen wins" with 3 specific use cases.
- Existing "Cons" section → "Where mineral falls short" with honest limits + workarounds.

**Cut:**

- Generic "What is sunscreen?" intro paragraph (covered in sibling post; link instead of duplicate).

**Restructure:** Move "Where to buy" from middle to bottom; move comparison table to fold-1.

**Format changes:** Comparison table (mineral vs chemical: UV filters, skin feel, white-cast risk, reapplication, finish on skin, cost per ml). 5 new swatch / lifestyle photos. FAQ block at bottom.

**E-E-A-T:** Date the swatch methodology ("April 2026 in-house testing on three skin tones"). Add date-stamped swatch photos. Link to 2 primary sources (FDA OTC sunscreen monograph, a peer-reviewed study on zinc oxide UV protection). Add 3 customer quotes from product reviews.

Word-count target: 850 → ~2,400. Implementation: ~6 hours including photos.

Implementation checklist: rework, run `generate-title-tags` (current title is generic), run `audit-header-structure` for new outline, update internal links to pillar + 2 sibling spokes, run `audit-images` on the 5 new photos, GSC re-index, monitor 60 days, log outcome in business CLAUDE.md.

Saved to `businesses/field-and-sun/content-optimization/mineral-vs-chemical-sunscreen.md`.
