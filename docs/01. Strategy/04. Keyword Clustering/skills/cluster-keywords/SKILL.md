---
name: cluster-keywords
description: Takes a classified keyword list (keywords + intent + ideally page-type tags) and produces a structured cluster map — each cluster has a primary keyword, supporting keywords, recommended page type, target URL (existing or proposed), and priority. Use whenever the user asks "how do I group these keywords," "which page should each of these go on," "build me a content roadmap from this list," "is there cannibalisation in my keyword targets," or wants to turn a flat keyword universe into a page-level plan. Also use when migrating from one-keyword-per-page thinking to cluster-based content. Do not use to generate keywords (`generate-seed-keywords`) or to classify intent (`classify-keyword-intent`) — clustering depends on both being done first.
---

# Cluster Keywords

This skill turns a classified keyword list into a working content roadmap. The output is a cluster map — each row is one cluster, each cluster maps to one page (existing or proposed), and every keyword in the input is either placed in a cluster or explicitly deferred. The map is the artifact that feeds content briefing, information architecture, and on-page work.

The skill is opinionated about a few things: split by intent before clustering, don't over-cluster, prevent cannibalisation, and produce a primary-plus-supporting keyword pattern per cluster (rather than treating all keywords as equal).

## When to use this skill

- The user has a keyword list with intent tags and asks how to organise it into pages.
- The user wants to turn a 100-300-keyword universe into a content roadmap.
- The user is concerned about keyword cannibalisation between existing pages.
- The user is planning information architecture for a new site or section.
- The user is briefing content writers and needs cluster-level briefs (primary + supporting keywords).

## When NOT to use this skill

- The keyword list isn't classified by intent — run `classify-keyword-intent` first.
- The user wants to generate or expand keywords — use `generate-seed-keywords`.
- The user wants to study competitors — use `audit-competitor-seo`.
- The user wants pillar/topic-cluster information architecture *across* clusters (the higher-order pattern) — that's covered in `04. Content SEO / 03. Topic Clusters`. This skill produces the page-level cluster map; topic-cluster work uses that map as input.

## Inputs required

1. **Keyword list with intent tags** — at minimum, columns for keyword, search volume, and intent (informational / commercial / transactional / navigational / local). Page-type tags are very helpful but optional. CSV, table, or pasted text. If intent is missing, ask the user to run `classify-keyword-intent` first.
2. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. The profile is used to map clusters to existing/proposed URLs and to filter out-of-scope clusters. If section 3 (products/services) is blank, ask before mapping clusters to URL paths.
3. **Existing site structure (optional but valuable)** — a list of existing URLs the clusters might map to. If not provided, the skill produces proposed URLs only and flags the need for a manual mapping pass.
4. **Tool / method preference (optional)** — whether the user wants SERP-overlap clustering on the top keywords (more rigorous, requires SERP checks) or topical/semantic grouping (faster, less rigorous). Default to topical grouping with a SERP-overlap recommendation for the top ~20%.

If intent tags or the business profile are missing, ask before clustering.

## Process

1. **Split by intent.** First pass, before any topical grouping, partition the input into intent buckets. Cluster within each bucket, never across. This prevents the most common clustering mistake (mixing transactional and informational into the same cluster).
2. **Within each intent bucket, group by topic.** Walk the keywords looking for shared topical core. Group obvious near-duplicates first ("refillable laundry detergent" / "laundry detergent refillable" / "refill laundry detergent" → one cluster). Then group close-cousins ("refillable laundry strips" / "refillable laundry detergent strips" / "refill laundry strips" → one cluster). Then look for variant patterns ("[product] for [persona]" — these often cluster differently from straight category terms).
3. **Apply SERP-overlap test on the top ~20%.** For the top-volume / highest-priority 20% of clusters, where placement matters most, recommend (or perform if SERP data is available) a SERP-overlap check. If two candidate clusters have 40%+ SERP overlap on their primary keywords, merge them. If a single cluster's keywords have <30% SERP overlap among themselves, split.
4. **Pick a primary keyword per cluster.** Default to highest volume; override when the highest-volume keyword has wrong intent or doesn't best represent the cluster's core. Note the rationale when overriding.
5. **Map cluster to page type.** Default from the page-type tags in the input. If multiple page types appear in one cluster, that's a signal the cluster needs splitting — page type should be uniform within a cluster.
6. **Map cluster to URL.** If existing site structure was provided, match each cluster to an existing URL where possible. If no match, propose a slug. Flag clusters where two would map to the same existing URL — that's cannibalisation and needs resolution before content work.
7. **Score priority.** Assign each cluster a priority (P0/P1/P2 or High/Medium/Low) based on cluster volume, intent fit, business goal alignment (from the profile), and effort. The user uses this to sequence the roadmap.
8. **Write the deferral list.** Some keywords won't fit cleanly. Don't force them. Surface them in a `Deferred / Out of scope` section with reasons (low volume + bad fit, irrelevant brand, can't ship a page for this in the next 6 months, etc.).
9. **Sanity check.** Re-read the output as if you were briefing a writer. If a cluster's keywords don't sound like one page, split. If two clusters sound like the same page, merge.

## Output format

```markdown
# Keyword Cluster Map — [Business Name]

**Input keywords:** [n]
**Clusters created:** [n]
**Clustered keywords:** [n] ([%]%)
**Deferred keywords:** [n] ([%]%)

## Distribution by intent
| Intent | Clusters | % |
|--------|---------:|--:|
| Transactional | ... | ...% |
| Commercial | ... | ...% |
| Informational | ... | ...% |
| Navigational | ... | ...% |
| Local | ... | ...% |

## Clusters

### Transactional

| ID | Cluster name | Primary keyword | Supporting keywords | Volume (sum) | Page type | Target URL | Priority | Status |
|----|--------------|------------------|---------------------|-------------:|-----------|------------|----------|--------|
| T01 | ... | ... | ...; ...; ...; ... | ... | Collection | /collections/refillable-laundry | P0 | Existing — needs update |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

### Commercial

| ID | Cluster name | Primary keyword | Supporting keywords | Volume (sum) | Page type | Target URL | Priority | Status |
|----|--------------|------------------|---------------------|-------------:|-----------|------------|----------|--------|
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

### Informational

| ID | Cluster name | Primary keyword | Supporting keywords | Volume (sum) | Page type | Target URL | Priority | Status |
|----|--------------|------------------|---------------------|-------------:|-----------|------------|----------|--------|
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

(Repeat for Navigational and Local if relevant.)

## Cannibalisation flags
List any cases where two clusters mapped to the same existing URL, or where existing URLs already cover overlapping clusters. For each, recommend merge / split / consolidate.

## Deferred / Out of scope
| Keyword | Reason for deferral |
|---------|---------------------|
| ... | ... |

## Recommended sequencing
2-4 sentences on which clusters to ship first and why, anchored in the business goals.

## Next steps
2-3 sentences pointing to content briefing, on-page implementation, and (optionally) SERP-overlap verification for the top P0 clusters.
```

Save the produced file to `businesses/<slug>/clusters/cluster-map.md`. Create the `clusters/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every input keyword is either in a cluster or in the deferred list — nothing falls through.
- Each cluster maps to exactly one page type and one target URL.
- Primary keywords are intent-aligned with the cluster's page type.
- Cannibalisation is surfaced explicitly, not glossed over.
- Cluster names are concise and human-readable (used for internal reference, not as page titles).
- Priority scoring is honest — not everything is P0.

## Common mistakes to avoid

- Don't cluster across intent. Splitting by intent first is non-negotiable.
- Don't create mega-clusters of 30+ keywords. If a cluster gets that big, the underlying topic is broader than one page.
- Don't accept a cluster of one keyword unless it's a high-priority transactional / branded page. Single-keyword clusters usually mean the keyword should be deferred or merged.
- Don't ignore the existing site. The user's URL structure exists; clusters should respect or revise it deliberately, not pretend it's not there.
- Don't pick the highest-volume keyword as primary if it has wrong intent for the page type. Note the override and pick a better fit.

## Example

**Input (abbreviated):** 18 transactional keywords for the refillable cleaning brand, all related to laundry products.

| Keyword | Volume | Intent |
|---------|-------:|--------|
| refillable laundry detergent | 1,300 | T |
| refill laundry detergent | 880 | T |
| laundry detergent refillable | 90 | T |
| refillable laundry strips | 720 | T |
| refillable laundry detergent strips | 480 | T |
| refill laundry strips | 110 | T |
| eco laundry detergent refill | 260 | T |
| zero waste laundry detergent | 590 | T |
| plastic free laundry detergent | 480 | T |
| ... | ... | ... |

**Output (abbreviated):**

| ID | Cluster name | Primary | Supporting | Volume | Page type | Target URL |
|----|--------------|---------|------------|-------:|-----------|------------|
| T01 | Refillable laundry detergent (collection) | refillable laundry detergent | refill laundry detergent; laundry detergent refillable; eco laundry detergent refill; zero waste laundry detergent; plastic free laundry detergent | 3,640 | Collection | /collections/refillable-laundry |
| T02 | Refillable laundry strips (PDP/sub-collection) | refillable laundry strips | refillable laundry detergent strips; refill laundry strips | 1,310 | PDP | /products/refillable-laundry-strips |

…with deferral list, cannibalisation flags noting that the existing `/collections/laundry` page overlaps T01 and recommending consolidation.
