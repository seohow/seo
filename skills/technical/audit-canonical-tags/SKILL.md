---
name: audit-canonical-tags
description: Analyses canonical tags across a URL list (from a crawler export, sitemap, or pasted data), surfaces missing canonicals, bad targets (canonicalising to 404 / 301 / noindex), pattern-level duplicates (parameter URLs, collection-prefixed duplicates, paginated pages), and signal conflicts between canonical / sitemap / internal links. Produces a prioritised remediation list grouped by issue type with implementation guidance per finding. Use whenever the user asks to "audit our canonicals," "check canonical tags," "fix canonical issues," "we have duplicate URLs in the index," "investigate 'Duplicate, Google chose different canonical' in GSC," or shares a crawler export and wants canonical analysis. Also use after a CMS update, theme change, or migration when canonical regressions are likely. Do not use to debug one specific URL's canonical (use GSC URL Inspection directly) — this skill earns its time at list scale (50+ URLs).
---

# Audit Canonical Tags

This skill takes a URL list with canonical metadata and produces a structured canonical audit. The output groups findings by issue type (missing canonicals, bad targets, pattern-level duplicates, signal conflicts) and produces a prioritised remediation list — what to fix at template level (highest leverage), what's per-page, what's an outreach action.

The skill is opinionated about a few things: every page should have a self-referencing canonical; canonical targets must be reachable, indexable, and content-equivalent; canonical / sitemap / internal-link signals must align; pagination self-canonicalises (never canonicalises back to page 1).

## When to use this skill

- The user shares a crawler export and asks for a canonical audit.
- GSC reports "Duplicate, Google chose different canonical than user" or "Duplicate without user-selected canonical" entries.
- After a CMS update, theme change, or migration that may have broken canonicals.
- The user is investigating index bloat (too many parameter / variant URLs indexed).
- Quarterly technical-SEO hygiene check.

## When NOT to use this skill

- The user wants to debug one specific URL's canonical — recommend GSC URL Inspection directly. This skill earns its time at list scale.
- The user wants to design URL conventions — that's `define-url-conventions` in On-page SEO; canonical strategy depends on URL strategy.
- The user wants a sitemap audit — use `audit-xml-sitemap` (the two are often run together; this skill covers canonicals, that one covers sitemap state).
- The user wants to fix `noindex` issues — use `audit-indexing-status` or `audit-crawlability` depending on the cause.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), CMS / platform (5).
2. **URL list with canonical metadata** — pasted, CSV, or file. Required columns: URL, canonical URL, status code, indexability (or robots-meta value). Useful additions: response time, inlinks count, in-sitemap (yes/no). Screaming Frog's "Internal All" export has all of this.
3. **Sitemap (optional but valuable)** — the live `sitemap.xml` (or sitemap-index) so the audit can cross-reference. URLs in the sitemap that aren't canonical, or canonical URLs missing from the sitemap, are surfaced as conflicts.
4. **Internal-link sample (optional)** — for the priority pages, a sample of inbound internal links. If the audit-page-internal-links output is available for any page, the canonical / internal-link consistency check is sharper.
5. **GSC Pages export (optional)** — specifically the "Duplicate, Google chose different canonical than user" and "Duplicate without user-selected canonical" entries. When provided, the audit prioritises those pages.

If the URL list with canonical metadata is missing, ask. Speculation isn't useful.

## Process

For each URL in the list:

1. **Categorise canonical state:**
   - **Self-canonical** — canonical URL equals page URL. Default-correct.
   - **Cross-canonical (within site)** — canonical points to a different URL on the same domain. Common for variants, parameter URLs, alt-format URLs. Need to validate the target.
   - **Cross-domain canonical** — canonical points to a different domain. Validate the target is intended (syndicated content, partner site).
   - **Missing canonical** — no canonical tag emitted. Flag.
   - **Multiple canonicals** — multiple `<link rel=canonical>` in `<head>`. Google ignores when this happens. Flag.
2. **Validate canonical targets:**
   - Target returns 200? If 404 / 5xx → broken canonical (P0).
   - Target redirects (3xx)? Canonical to a redirect → Google may use the redirect target instead, but it's a weak signal. Recommend canonicalising to the final destination.
   - Target has `noindex`? Canonical to a noindex URL → Google deindexes the canonicalising page. Severe. P0.
   - Target is content-equivalent? Hard to validate automatically; flag any cross-canonical to a structurally different page (e.g. product canonicalising to category) for human review.
3. **Detect duplicate-URL patterns:**
   - **Parameter URLs** — pages reachable with `?key=value` parameters. Flag if they're indexed and self-canonicalising rather than canonicalising back to the clean URL.
   - **Collection-prefixed product URLs** (Shopify) — pages at `/collections/<x>/products/<slug>` should canonicalise to `/products/<slug>`. Flag if missing or self-canonicalising.
   - **Trailing-slash variants** — `/page` and `/page/` should canonicalise to one or the other consistently.
   - **Capitalised variants** — `/page` and `/Page` similarly.
   - **AMP variants** (if applicable) — canonical relationship between AMP and non-AMP needs validation.
   - **Paginated pages** — page 2, 3, etc. should self-canonicalise. Flag any paginated pages canonicalising back to page 1.
   - **Variant URLs** — product variants (color, size). Decide per-product whether each variant warrants its own indexable page.
4. **Cross-reference with sitemap:**
   - URLs in sitemap but not canonical (canonical points elsewhere) → conflict signal. Either remove from sitemap or change canonical.
   - URLs canonical but not in sitemap → flag for sitemap addition.
5. **Cross-reference with internal links:** if data is available, check whether internal links point at canonical or non-canonical URLs. Internal links to non-canonical URLs are a soft conflict.
6. **Cross-reference with GSC findings:** for any URL Google explicitly flagged as "Duplicate, Google chose different canonical than user," investigate why. Usually one of: weak self-canonical signal, internal links pointing to a different URL, sitemap pointing elsewhere, or syndicated content with stronger signals on a different domain.
7. **Group findings by issue type:**
   - Missing canonicals
   - Multiple canonicals
   - Broken canonical targets (4xx/5xx)
   - Canonical to redirect / noindex / non-equivalent
   - Pattern: parameter URLs not canonicalised
   - Pattern: collection-prefixed duplicates not canonicalised
   - Pattern: paginated pages incorrectly canonicalising to page 1
   - Pattern: trailing-slash / case inconsistency
   - Sitemap conflicts
   - Internal-link conflicts (if data available)
   - GSC-flagged "Google chose different canonical"
8. **Prioritise.** P0 = template-level fix affecting many URLs OR fix on cluster-mapped pages OR canonical to noindex/404. P1 = per-page fix on cluster-mapped pages. P2 = cleanup of legacy / long-tail URLs.
9. **Sequence:** template-level changes first (one fix, many URLs recover), per-page fixes second, sitemap / internal-link consistency third.

## Output format

```markdown
# Canonical Tag Audit — [Business Name]

**URLs audited:** [n]
**Canonical state distribution:**
| State | Count | % |
|-------|------:|--:|
| Self-canonical | ... | ...% |
| Cross-canonical (within site) | ... | ...% |
| Cross-domain canonical | ... | ...% |
| Missing canonical | ... | ...% |
| Multiple canonicals | ... | ...% |

**Audit date:** [date]
**Sitemap referenced:** [yes/no, source]
**GSC export referenced:** [yes/no]

## Findings by issue type

### Missing canonicals
| URL | Page type | Recommendation |
|-----|-----------|----------------|
| ... | ... | Add self-referencing canonical via [template] |

### Broken / bad-target canonicals
| URL | Canonical target | Target status | Recommendation |
|-----|-----------------|--------------:|----------------|
| ... | ... | 404 / 301 / noindex | [...] |

### Pattern-level duplicates

#### Parameter URLs (faceted nav, sort, filter)
- [n] URLs in scope. Canonical pattern observed: [pattern]. Recommendation: [template-level fix description].

#### Collection-prefixed product URLs (Shopify default)
- [n] URLs in scope. Recommendation: emit canonical to flat `/products/<slug>` from product template; ensures both reachable forms point at the same canonical.

#### Paginated pages
- [n] URLs in scope. Pattern observed: [self-canonical / canonical-to-page-1]. Recommendation: each paginated page self-canonicalises.

#### Trailing-slash / case
- [Pattern observed]. Recommendation: pick one convention; emit consistent canonical sitewide.

### Signal conflicts

#### Canonical vs sitemap
| URL | Canonical | In sitemap? | Conflict? | Recommendation |
|-----|-----------|------------|-----------|----------------|
| ... | ... | yes/no | yes/no | [...] |

#### Canonical vs internal links (if data available)
- [Findings if internal-link data was provided]

#### GSC overrides (where Google chose a different canonical)
| URL | User canonical | Google's chosen canonical | Likely cause | Recommendation |
|-----|----------------|--------------------------|--------------|----------------|
| ... | ... | ... | [signal-conflict explanation] | [...] |

## Prioritised remediation list

### P0 — Critical (template-level + cluster-mapped pages)
| # | Fix | Affected URLs | Action | Where to fix | Verification |
|---|-----|---------------|--------|--------------|-------------|
| 1 | Emit self-referencing canonical on PDPs via product template | [n] | Add `<link rel=canonical>` Liquid block | Shopify theme `product.liquid` | GSC URL Inspection on 5 sample PDPs |
| 2 | Canonicalise collection-prefixed product URLs to flat | [n] | Update theme to emit canonical to `{{ shop.url }}{{ product.url }}` always | Shopify `product.liquid` | Same |
| ... |

### P1 — High (per-page fixes on priority URLs)
[Same structure]

### P2 — Hygiene (legacy / long-tail)
[Same structure]

## Implementation checklist
- [ ] Implement P0 template-level fixes first.
- [ ] Re-crawl after P0; confirm canonical distribution improved.
- [ ] Submit affected URLs to GSC for re-indexing.
- [ ] Implement P1 fixes (next 2-4 weeks).
- [ ] Resolve sitemap conflicts: remove non-canonical URLs from sitemap, add missing canonical URLs.
- [ ] If internal-link data available: update internal links to target canonical URLs.
- [ ] After 30-60 days: pull GSC Pages report; verify "Duplicate" exclusion counts have decreased.
- [ ] Schedule next audit (recommended quarterly).

## Risks and watchouts
3-5 specific watchouts: e.g. "the Shopify collection-prefixed pattern is template-level — 8 product URLs all need the same template fix"; "the partner-syndicated blog post can't be fixed without partner cooperation; flag for outreach"; "if hreflang is in use, canonical changes need to align with hreflang URLs (not in scope of this audit)"; "pagination canonicals self-reference now per current Google guidance — older content may have wrong pattern from when `rel=next/prev` was the standard"; "theme updates can re-break canonicals — set quarterly re-audit cadence."
```

Save the produced file to `businesses/<slug>/canonicals/audit-<YYYY-MM-DD>.md`. Create the `canonicals/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every URL in the input list has a categorised canonical state.
- Pattern-level findings are surfaced first (highest leverage); per-URL findings come after.
- Broken canonical targets (404 / 301 / noindex) are flagged P0.
- Sitemap and internal-link cross-references are run when data is available.
- GSC-flagged "Duplicate, Google chose different canonical" entries each get a likely-cause diagnosis.
- Remediation is grouped by action type and prioritised P0/P1/P2.
- Implementation checklist closes the loop with re-crawl, GSC re-indexing, and verification window.

## Common mistakes to avoid

- Don't recommend canonicalising paginated pages back to page 1. Each paginated page self-canonicalises (per current Google guidance, 2019+).
- Don't recommend self-canonicalising parameter URLs that are duplicate content. The clean parent URL should be the canonical.
- Don't recommend mass per-page canonical edits when a template fix would solve them. Always look for the cascading fix first.
- Don't ignore canonicals to redirects — they're suboptimal but not catastrophic. Recommend updating to the final URL.
- Don't fabricate findings. If the input lacks sitemap data, say so and skip the sitemap-conflict section.
- Don't treat cross-domain canonicals as automatically wrong. Syndicated content with proper canonicals is correct.
- Don't audit canonicals without the canonical metadata. The audit operates on real data, not assumptions about defaults.

## Example

**Input (abbreviated):** Field & Sun. Shopify. 320 URLs from Screaming Frog with canonical metadata + sitemap.xml. GSC export shows 64 URLs flagged "Duplicate without user-selected canonical."

**Output (abbreviated):**

Distribution: 224 self-canonical (70%), 32 cross-canonical (10%), 0 cross-domain, 56 missing canonical (18%), 8 multiple canonicals (3%).

Findings:

- **Missing canonicals (56 URLs):** all are `/collections/<x>/products/<slug>` Shopify duplicates. Pattern-level fix: update product template to emit canonical to flat `/products/<slug>` regardless of access path. Recovers all 56 URLs.
- **Multiple canonicals (8 URLs):** all are PDPs where both the theme and a Shopify SEO app are emitting canonical tags. Disable the app's canonical injection (theme has it covered). Removes the 8 duplicates.
- **Pattern: parameter URLs (~30 URLs):** filter URLs on collection pages self-canonicalise. Update collection template so filter URLs canonicalise to the clean parent. Removes ~30 from the index over 30-60 days.
- **Sitemap conflict:** 12 collection-prefixed URLs are in the sitemap but their canonical points elsewhere. Remove from sitemap (the canonical is already pointing at the right URL).
- **GSC override (64 URLs):** all are the missing-canonical pattern from the first finding. Once template fix ships, this bucket should empty.

Prioritised remediation: 4 P0 fixes (all template-level), 8 P1 multiple-canonical cleanups, 12 P2 sitemap cleanups.

Implementation checklist included with re-crawl + GSC re-indexing + 30-60-day verification window. Saved to `businesses/field-and-sun/canonicals/audit-2026-05-01.md`.
