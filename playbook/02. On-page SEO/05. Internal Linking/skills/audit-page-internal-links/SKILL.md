---
name: audit-page-internal-links
description: Audits a single page's internal links — incoming (which pages link to it, with what anchors) and outgoing (where it links to, with what anchors) — against the site's internal-linking plan and the page's target cluster. Surfaces missing inbound links, weak anchor text, missing outbound contextual links to sibling spokes, and produces a per-page action list. Use whenever the user asks to "audit links on [page]," "check internal linking for [URL]," "what should this page link to," "is this page linked properly," "fix the links on [page]," or shares a page URL and wants link review. Also use for striking-distance pages that might benefit from internal-link reinforcement, or for pages just published that need their links wired up. Do not use to design site-wide architecture — that's `plan-internal-linking`.
---

# Audit Page Internal Links

This skill takes one page (URL + content + a snapshot of its inbound and outbound internal links) and produces a per-page audit. The output is an action list: what links to add, what anchor texts to fix, what to remove. It works at single-page scale — it's the surgical complement to the strategic `plan-internal-linking`.

## When to use this skill

- The user asks to audit one page's internal linking.
- The user has a striking-distance page (ranking 11-30) and wants to give it an internal-link nudge.
- The user just published a new page and needs to wire up its inbound and outbound links.
- The user is doing per-page SEO work (e.g. on the SEO Wins backlog) and links are part of the rework.
- The user wants to fix anchor text on a specific high-value page.

## When NOT to use this skill

- The user wants site-wide internal-linking strategy — use `plan-internal-linking`.
- The user wants a site crawl for orphans, broken links, redirect chains — use a crawler (Screaming Frog) and reference the output here.
- The user wants to fix external/backlinks — different topic (covered in `06. Off-page SEO`).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first.
2. **Internal-linking plan** — read `businesses/<slug>/internal-linking/plan.md` if it exists. The plan defines hubs, pillars, spokes, and the recommended linking matrix. Without it the audit can still run but is less anchored. If absent, recommend running `plan-internal-linking` first or proceed with cluster-level guidance only.
3. **Cluster map** — read `businesses/<slug>/clusters/cluster-map.md`. The audit cross-references the page against its cluster and the cluster's siblings.
4. **The page being audited** — URL, page type, target cluster, and current content. Either pasted body content or a summary of the sections.
5. **Inbound internal links** — list of pages that currently link to this URL, with their anchor texts. From a Screaming Frog crawl ("Inlinks" report) or Ahrefs Site Audit. Required — if the user can't provide it, ask before producing the audit.
6. **Outbound internal links** — list of internal URLs this page currently links to, with anchor texts. Same source. Required.

If inbound or outbound link data is missing, ask before auditing. The audit isn't speculative — it operates on real data.

## Process

1. **Identify the page's role.** Look up the page in the cluster map. What cluster does it target? Is it a pillar or a spoke? Is its hub identified in the linking plan?
2. **Audit inbound links:**
   - **Count** — how many internal pages link to it? Compare to the linking-plan target (e.g. "spoke pages should have 5+ inbound internal links: pillar + 2-3 siblings + nav/footer").
   - **Source quality** — are the inbound links from topically-relevant pages (its pillar, its siblings) or from random pages?
   - **Anchor diversity** — list the anchor texts used. Are they varied or all exact-match?
   - **Missing inbound** — which pages should link to this one but don't? Pull from the linking-plan matrix (its pillar, its sibling spokes, related cluster pages).
3. **Audit outbound links:**
   - **Count** — how many internal links does it have in body content? Recommended: 3-8 contextual internal links per substantive page; PDPs often less, blog posts often more.
   - **Targets** — does it link to its pillar? Does it link to 2-3 sibling spokes (the linking-plan recommendation)? Does it link to topically-related pages from other hubs where genuinely relevant?
   - **Anchor quality** — are the anchor texts descriptive and varied? Flag "click here" / "this page" / "learn more" anchors as fixable.
   - **Broken / redirected outbounds** — flag any outbound link that's a 4xx or hits a 301 redirect (indicates URL changed but the link wasn't updated).
   - **Missing outbound** — which spokes/pillars should this page link to but doesn't? Pull from cluster siblings and linking plan.
4. **Score the page:**
   - **Inbound coverage** — how many of the recommended inbound links exist? (e.g. 4/7 = 57%).
   - **Outbound coverage** — same for recommended outbounds.
   - **Anchor diversity score** — pass/fail/partial based on variety.
   - **Composite** — high / medium / low link health.
5. **Build the action list.** Two parts:
   - **Additions** — links to add. For inbound: which other pages should be edited to add a link to this URL, with suggested anchor text. For outbound: which links to add to this page, target URL, suggested anchor text, where in body content.
   - **Fixes** — anchors to change, broken/redirected outbounds to update.
6. **Prioritise.** Some additions are higher-leverage than others (linking from the pillar to a spoke is enormous; adding a sibling-spoke link is medium; adding a far-cluster link is low). Mark each action P0/P1/P2.

## Output format

```markdown
# Internal-Link Audit — [Page name]

**URL:** [URL]
**Target cluster:** [cluster ID + primary keyword]
**Role in linking plan:** [pillar / spoke / unmapped]
**Hub:** [hub name, if applicable]
**Audit date:** [date]

## Current state

### Inbound links
- **Count:** [n]
- **From topically-relevant pages:** [n / total]
- **Anchor diversity:** [list of distinct anchors with counts]

| From URL | Anchor | Topical relevance | Notes |
|----------|--------|-------------------|-------|
| ... | ... | high / medium / low | ... |

### Outbound links
- **Count in body content:** [n]
- **Targets:** [list]

| To URL | Anchor | Status (200/3xx/4xx) | Topical relevance |
|--------|--------|----------------------|-------------------|
| ... | ... | ... | ... |

## Audit

### Inbound coverage
- Recommended (per linking plan): [list — e.g. pillar, 3 sibling spokes, footer/nav]
- Present: [n / total]
- Missing: [list]

### Outbound coverage
- Recommended (per linking plan): [list — e.g. pillar, 2-3 sibling spokes, 1-2 related pages]
- Present: [n / total]
- Missing: [list]

### Anchor diversity
- [pass / partial / fail] — [explanation]
- Anchors flagged for revision: [list with rationale]

### Mechanical issues
- Broken outbound links: [list]
- Redirected outbound links: [list]
- Other: [if any]

### Composite link-health: [high / medium / low]

## Action list

### P0 — High leverage (do first)

#### Additions

| Action | Source page | Target page | Suggested anchor | Why P0 |
|--------|-------------|-------------|------------------|--------|
| Add inbound | [pillar URL] | this page | "[anchor]" | Pillar→spoke is the single-most valuable inbound link for a spoke. |
| Add outbound (in body) | this page | [pillar URL] | "[anchor]" | Spoke→pillar reinforces the cluster signal. |
| ... | ... | ... | ... | ... |

#### Fixes
- [Action]

### P1 — Medium leverage

| Action | Source | Target | Anchor | Why |
|--------|--------|--------|--------|-----|

### P2 — Cosmetic

| Action | Source | Target | Anchor | Why |
|--------|--------|--------|--------|-----|

## Implementation checklist
- [ ] Edit source pages to add inbound links (P0 list)
- [ ] Update body content of this page to add outbound links (P0 list)
- [ ] Fix flagged anchor texts
- [ ] Update redirected/broken outbounds
- [ ] Re-crawl to verify (Screaming Frog or similar) within 14 days
- [ ] Submit this URL to GSC for re-indexing
- [ ] Monitor rank + click change for 30 days
```

Save the produced file to `businesses/<slug>/internal-linking/audit-<page-slug>.md`. Create the `internal-linking/` sub-folder if it doesn't already exist. After writing, tell the user the file path.

## Quality bar

- Inbound and outbound link tables are populated from real data — no fabricated rows.
- Recommended links are pulled from the linking-plan matrix when the plan exists; from cluster-map siblings when it doesn't.
- Action list is grouped by priority and quantified ("3 P0 additions, 4 P1, 2 P2 fixes").
- Each action specifies the source, target, suggested anchor, and the why.
- Anchor text suggestions vary — not all exact-match.
- Mechanical issues (broken / redirected outbounds) are surfaced even if otherwise the page is in good shape.
- Implementation checklist is concrete and time-bounded.

## Common mistakes to avoid

- Don't audit without the inbound/outbound link data. Speculation is worse than no audit.
- Don't recommend adding internal links from low-relevance pages just to bump the count. Topical relevance matters more than count.
- Don't suggest exact-match anchor for every action. Diversify.
- Don't flag every redirect as broken. A 301 to a topically-similar URL is valid; the fix is to update the link to the new URL, not to remove it.
- Don't ignore the role of nav/footer/breadcrumb links — they're legitimate inbound counts even if equity-light.
- Don't recommend so many additions that the page becomes link-stuffed. 3-8 contextual outbound links is the healthy range for most pages; product pages tolerate fewer; pillar pages tolerate more.
- Don't audit a page that isn't in any cluster without first asking the user whether the page should be cluster-mapped or de-published. Auditing an off-strategy page in detail is wasted work.

## Example

**Input (abbreviated):** Page = `/blog/how-mineral-sunscreen-works`. Cluster I03 (informational, primary "how does mineral sunscreen work"). Role: spoke under "Ingredient education" hub. Pillar: `/blog/skincare-ingredient-guide` (per linking plan).

Inbound (from Screaming Frog): 2 pages link in — homepage footer (anchor: "How sunscreen works") + blog index page (anchor: "How mineral sunscreen works"). Pillar does NOT link in.

Outbound: 3 internal links in body — to `/products/mineral-sun-drops-spf-50` (anchor: "Shop Mineral Sun Drops"), to `/collections/sun-care` (anchor: "sun care"), to `/blog/mineral-vs-chemical-sunscreen` (anchor: "another post"). The "another post" anchor is a fix candidate. No link to pillar.

**Output (abbreviated):**

Inbound coverage: 2/5 recommended. Missing: pillar, 2-3 sibling spokes (`/blog/mineral-vs-chemical-sunscreen`, `/blog/mineral-sunscreen-for-dark-skin`).
Outbound coverage: 3/5 recommended. Missing: pillar link, sibling-spoke link to `/blog/mineral-vs-chemical-sunscreen`.
Anchor diversity: partial fail. "another post" must be replaced.
Mechanical: clean (no broken/redirected outbounds).
Composite: medium.

Action list:

P0:
- Add inbound from `/blog/skincare-ingredient-guide` (pillar) → suggested anchor: "how mineral sunscreen works" or "zinc oxide sunscreen explained" (vary across uses).
- Add outbound from this page → pillar `/blog/skincare-ingredient-guide`, in intro paragraph, anchor: "skincare ingredient guide" or "complete guide to skincare ingredients."
- Replace "another post" anchor with "mineral vs chemical sunscreen — what's the real difference."

P1:
- Add inbound from sibling `/blog/mineral-vs-chemical-sunscreen` and `/blog/mineral-sunscreen-for-dark-skin`.
- Add outbound to `/blog/mineral-vs-chemical-sunscreen` in the "How does mineral sunscreen compare to chemical?" section.

P2:
- Consider adding a contextual link to `/products/mineral-sun-drops-spf-50` from the "How to use" section if it's not already there.

Implementation checklist included. Saved to `businesses/field-and-sun/internal-linking/audit-how-mineral-sunscreen-works.md`.
