---
name: generate-content-brief
description: Use to generate content brief; resolves <slug> from businesses/, reads business_profile.md, asks if multiple, and writes outputs under the business workspace.
---

# Generate Content Brief

This skill produces a structured 2-page brief for a single blog post — the spec a writer (human or AI) uses to produce the draft. Output covers everything the writer needs upfront: SERP read, intent, outline, word-count target, voice constraints, internal-link plan, schema requirements, and acceptance criteria.

The skill is opinionated about a few things: every brief starts with a SERP read; every brief has a brand-distinct angle; every brief specifies internal links at the section level (not as an afterthought); every brief has observable acceptance criteria. Without these, the brief isn't doing its job.

## When to use this skill

- The user has a post on the editorial calendar that needs to go to a writer.
- The user is briefing a contractor or agency on a specific post.
- The user is briefing AI-assisted drafting and needs a structured spec.
- The user wants the outline + structure for a post they'll write themselves.
- The user is converting a strategic decision ("we should write about X") into an executable brief.

## When NOT to use this skill

- The user wants a 90-day editorial calendar — use `plan-blog-content`.
- The user wants to design a pillar page — use `design-pillar-page`.
- The user wants to architect a topic cluster — use `design-topic-cluster`.
- The user wants to brief evergreen / longevity-first content — use `brief-evergreen-content`.
- The user wants to refresh existing content — use `plan-content-refresh`.
- The user wants to write the actual prose — that's the writer's job; this produces the spec.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: customer (4), competitors (6), goals (7), brand voice (8). Voice constraints feed directly into the brief.
2. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. The post's cluster placement determines internal-link plan and topical context. If the post isn't in the map, ask which cluster it belongs to (or whether to add it).
3. **Post topic** — required. Title or working topic of the post.
4. **Primary keyword** — required. The single keyword the post primarily targets. Pull volume and difficulty from the cluster map if available.
5. **Target URL slug** — optional but useful. If absent, propose one based on the primary keyword.
6. **Post archetype** — optional. Explainer / comparison / how-to / roundup / ingredient deep-dive / opinion. If unspecified, infer from the keyword + intent.
7. **Existing internal links / cluster context** — pillar URL (if cluster has one); sibling-spoke URLs.
8. **Word-count preference** — optional. Defaults to anchored-to-SERP-top-5 average + 10-30%.

If primary keyword is missing, ask. The brief is anchored to a specific keyword.

## Process

1. **Confirm the post fits the strategy.** Validate it's in the cluster map. If not, flag and ask whether to add to the map first or proceed standalone.
2. **Read the SERP for the primary keyword.** Note positions 1-5: dominant format (explainer / listicle / how-to / comparison), word counts, depth signals (own research / quotes / images / tables), structural patterns. The brief's outline and word-count target are anchored to this read.
3. **Classify intent.** Informational / commercial / transactional / navigational. Use the SERP as ground truth; if the top 5 are explainers, the intent is informational regardless of how the keyword reads.
4. **Profile the audience.** Pull from business profile section 4. Specific: who is this post for, what do they already know, what decision are they trying to make, what scepticism are they bringing.
5. **Pick the post archetype.** Explainer, comparison, how-to, roundup, ingredient deep-dive, opinion. Each archetype has structural conventions; the outline reflects them.
6. **Build the outline.** H1 + 5-9 H2s + H3s where genuinely needed. Each H2 has a content hint (1-2 sentences) describing what that section covers. Internal links are specified at the H2 level when the section naturally calls for one.
7. **Decide word-count target.** Anchored to SERP top 5 average + 10-30%. Most blog posts land 1,200-2,500 words. Evergreen-leaning content can go longer (handled by `brief-evergreen-content`).
8. **Pick the brand-distinct angle.** What can THIS brand say that the SERP top 10 can't? Specific and provable. For Field & Sun: own product testing on three skin tones, ingredient percentages disclosed, dermatologist-reviewed claims. For other brands: own data, founder expertise, customer stories, market-specific knowledge.
9. **Encode voice constraints.** Brand voice "do" rules + "don't" rules. For Field & Sun specifically: percentages over claims; avoid vague category language and unsupported safety claims; reference dermatologist review only if accurate; FDA-compliant claims language.
10. **Plan internal links.** To the cluster's pillar (intro + closing); to 1-2 sibling spokes where contextually relevant; to relevant product pages (PDP / collection) where a transactional opportunity exists. Specify anchor patterns and where in the body each link goes.
11. **Plan schema.** Article schema baseline; FAQPage if FAQs section is included; HowTo if it's a how-to post (note FAQ rich-result eligibility has narrowed). Reference `generate-schema-markup` skill for implementation.
12. **Specify required assets.** Hero image; 2-4 in-body images; comparison tables if archetype calls for them; author bio with credentials.
13. **Define acceptance criteria.** What "done" looks like, observably.
14. **Write the brief.** Output is a structured 2-page Markdown doc the writer can work from directly.

## Output format

```markdown
# Content Brief — [Post title / working topic]

**URL (proposed):** /blog/[slug]
**Cluster:** [Cluster ID + name]
**Pillar:** [pillar URL if cluster has one]
**Primary keyword:** [head term + monthly volume]
**Supporting keywords:** [3-5 secondary keywords the post should also cover]
**Intent:** [informational / commercial / transactional / navigational]
**Archetype:** [explainer / comparison / how-to / roundup / ingredient deep-dive / opinion]
**Word-count target:** [n]
**Brief date:** [date]
**Writer:** [name or "TBD"]
**Target ship date:** [date]

## SERP read
3-5 sentence read of positions 1-5 for the primary keyword:
- Dominant format: [explainer / listicle / how-to / comparison]
- Top-5 word counts: [range]
- Depth signals: [own research / dermatologist quotes / images / comparison tables / etc.]
- What wins: [pattern observation — e.g. "concise explainers with one comparison table outperform long roundups"]
- Realistic position target: [top 3 / top 5 / top 10]

## Audience
1-2 sentences. Who is this post for? What do they already know? What decision are they making? What scepticism are they bringing?

For Field & Sun: 28-45, sun-conscious skincare buyer, ingredient-attentive, sceptical of marketing claims, reads the back of the bottle.

## Brand-distinct angle
1 paragraph on what makes this post distinct from the SERP top 10. Specific and provable.

For Field & Sun: own product testing on three skin tones (photographed at our studio); 20% non-nano zinc oxide percentage disclosed publicly; dermatologist-reviewed claims only.

## Outline

```text
H1: [Title — primary keyword + descriptive subtitle]

H2: [Intro section title]
    Content hint: 2-3 sentences on what this section covers and why.
    Word target: ~200-300 words.

H2: [Section 2]
    Content hint: ...
    Internal link: → /guides/[pillar-slug] (anchor: "[pattern]")
    Word target: ~250-400 words.
  H3: [Sub-section if needed]

H2: [Section 3]
    Content hint: ...
    Internal link: → /blog/[sibling-spoke] (anchor: "[pattern]")
    Word target: ~250-400 words.

H2: [Section 4]
    Content hint: ...
    Word target: ~250-400 words.

H2: FAQ
    Content hint: 5-8 question-form H3s answering common follow-up questions.
    Word target: ~300-500 words.
  H3: [Question 1]
  H3: [Question 2]
  ...

H2: [Closing — summary or practical action]
    Content hint: ...
    Internal link: → /guides/[pillar-slug] (closing CTA, anchor: "[pattern]")
    Word target: ~150-250 words.
```

## Voice constraints

### Do

- [Brand-specific voice rules pulled from business profile section 8]
- [E.g. "Use percentages instead of claims (20% zinc oxide, not 'high SPF')"]
- [E.g. "Reference own product testing where applicable"]

### Don't

- [Brand-specific anti-patterns pulled from business profile]
- [E.g. "Avoid vague category language and unsupported safety claims — these violate Field & Sun voice"]
- [E.g. "Avoid superlatives ('best,' 'safest') — fails FDA review"]
- [E.g. "No medical claims unless dermatologist-reviewed"]

## Internal-link plan

| From section | To URL | Anchor pattern | Reason |
|--------------|--------|----------------|--------|
| Intro | /guides/mineral-sunscreen | "complete mineral sunscreen guide" | Cluster wiring (spoke → pillar) |
| Section 2 body | /blog/how-mineral-sunscreen-works | "how mineral sunscreen works" | Sibling-spoke cross-link |
| Section 4 body | /products/spf-30-mineral | "our SPF 30" | Transactional bridge |
| Closing | /guides/mineral-sunscreen | "mineral sunscreen guide" | Cluster wiring (closing CTA) |

## Schema strategy

- **Article**: required. datePublished, dateModified, author (name + URL), image, mainEntityOfPage.
- **FAQPage**: if FAQ section is included (recommended for Q&A-shaped post archetypes).
- **BreadcrumbList**: Home → Blog → [Post].
- **HowTo**: only if archetype is genuinely how-to and the steps are sequential / instructional. Skip if the post is mostly explanatory.
- **Reference**: see [generate-schema-markup](../../technical/generate-schema-markup/SKILL.md) when implementing.

## Required assets

- **Hero image**: 1200×630+, brand-photographed (own product shot, not stock).
- **In-body images**: 2-4. For ingredient / product posts: own product photography. For comparison posts: comparison-table image or side-by-side product shots.
- **Comparison table**: if archetype is comparison or roundup. HTML table preferred for SEO.
- **Author bio**: name, credentials (e.g. "co-founder, dermatologist-reviewed"), photo.

## Acceptance criteria

- [ ] All required H2 sections are present per outline.
- [ ] Word count is within ±15% of target.
- [ ] Brand-distinct angle is reflected in at least one H2 (not bolted on).
- [ ] Internal-link plan is implemented at the specified sections.
- [ ] Voice constraints are honoured (no banned terms; "do" rules followed).
- [ ] FAQ section has 5-8 question-form H3s if archetype includes FAQs.
- [ ] At least one own-photography asset (hero or in-body).
- [ ] Author bio with credentials is at the bottom of the post.
- [ ] Schema (Article + Breadcrumb + FAQPage if applicable) deployed and validated in Rich Results Test.
- [ ] Title tag and meta description follow on-page SEO category conventions.

## Production timeline

- Brief locked: [date]
- First draft: [date — typically 1-2 weeks after brief lock]
- Editorial review: [date]
- Photography / asset shoot: [date]
- Schema implementation: [date]
- Launch: [date]

## Open questions for the writer / user

- [ ] Confirm the proposed URL slug works.
- [ ] Confirm the brand-distinct angle has supporting product testing / data the writer can reference.
- [ ] Confirm the author bio / byline.
- [ ] Confirm the internal-link targets exist (pillar, sibling spokes).

```

Save the produced file to `businesses/<slug>/briefs/<post-slug>.md`. Create the `briefs/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- SERP read references positions 1-5 specifically, not generic "the SERP looks like X."
- Intent is classified against SERP ground truth, not assumed from keyword.
- Outline has 5-9 H2s with content hints; internal links specified at section level.
- Brand-distinct angle is specific and provable, not generic ("we care about quality").
- Voice constraints are concrete with both do / don't lists.
- Internal-link plan covers pillar, sibling spokes, and transactional bridges where appropriate.
- Schema strategy references the actual technical-SEO skill, not vague.
- Acceptance criteria are observable (not "make it good").
- Word-count target is anchored to SERP top 5 + 10-30%, not arbitrary.

## Common mistakes to avoid

- Don't skip the SERP read. Briefs without SERP reads produce content that doesn't fit the actual search environment.
- Don't write outlines in isolation from the cluster. The post is a spoke (usually); outline reflects that with explicit pillar / sibling links.
- Don't omit voice constraints for brands with strict voice. Field & Sun's rule against vague category language and unsupported safety claims is brand-defining; the brief must encode it.
- Don't pad word count past SERP-top-5 + 30%. Long doesn't mean better; matching the SERP's depth target plus a slight edge is the right move.
- Don't year-stamp evergreen posts. "How does mineral sunscreen work in 2026" ages quickly. Year-stamping is reserved for commercial / "best of" content.
- Don't propose schema types Google has narrowed (FAQ rich results have narrowed in 2024-25; HowTo rich results similarly). Use them when correct semantically; don't expect rich-result CTR lift.
- Don't write a brief so long the writer doesn't read it. 2 pages for a 1,500-word post is the right shape.
- Don't omit acceptance criteria. The brief without acceptance criteria can't be edited against; it just describes the work, doesn't define "done."

## Example

**Input (abbreviated):** Field & Sun. Post topic: "is zinc oxide safe daily." Primary keyword: "is zinc oxide safe daily" (vol 720). Cluster: I-PILLAR-1 (sun-care). Archetype: explainer.

**Output (abbreviated):**

URL: `/blog/is-zinc-oxide-safe-daily`. Word count: 1,500 (SERP top-5 avg 1,400 + 10%). Intent: informational.

SERP read: top 5 are dermatologist-led explainers averaging 1,200-1,800 words. Common patterns: ingredient breakdown, FDA-approval context, common myths section, FAQ block.

Audience: 28-45, ingredient-attentive, sceptical of "natural" marketing.

Brand angle: Field & Sun's 20% non-nano zinc oxide is publicly disclosed; reference our own three-skin-tone product testing.

Outline: H1 + 6 H2s (intro, what zinc oxide is, FDA approval status, daily safety, common myths, FAQ, closing).

Voice constraints: percentages over claims; avoid vague category language and unsupported safety claims; FDA-compliant claims language.

Internal links: → /guides/mineral-sunscreen (intro + closing); → /blog/how-mineral-sunscreen-works (section 2); → /products/spf-30-mineral (section 4).

Schema: Article + FAQPage + BreadcrumbList.

Required assets: hero (own product), 2 in-body shots (swatch test on three skin tones), author bio (founder, dermatologist-reviewed).

Acceptance criteria: 10 items, all observable.

Saved to `businesses/field-and-sun/briefs/is-zinc-oxide-safe-daily.md`.
