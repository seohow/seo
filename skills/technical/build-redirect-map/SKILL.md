---
name: build-redirect-map
description: Produces a redirect map for a site migration or URL restructure: old URL, new URL, redirect type, and priority. Use before any domain change, redesign, or mass URL restructure.
---

# Build Redirect Map

This skill produces the redirect map — the complete `old URL → new URL → 301` table that's the operational artifact of any site migration. The output is a structured file (CSV / Markdown table / Liquid / nginx config / Vercel redirects JSON, depending on target) ready to ship into the CMS or server.

The skill is opinionated: every old URL with non-zero traffic in the last 90 days must have a row; status code is always 301 (never 302); chains are collapsed (no multi-hop); every new URL is validated as 200 / canonical / indexable before the row is considered final; long-tail URLs without traffic still get rows if they have backlinks.

## When to use this skill

- The user has a migration plan and needs the actual redirect file built.
- The user is prepping for re-platforming, rebranding, URL restructure, sub-domain consolidation, or HTTPS migration.
- The user has an existing redirect file with chains and wants to collapse them.
- The user needs to fill in missing redirects after a partial migration.

## When NOT to use this skill

- The user wants to plan the migration project — use `plan-site-migration`.
- The user wants to audit URL structure for cleanup before deciding on migration — use `audit-urls`.
- The user wants to investigate post-migration ranking issues — use `audit-crawlability` + `audit-indexing-status` + `analyse-log-files` cross-referenced with the redirect map.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), CMS / platform (5).
2. **Migration plan** — read `businesses/<slug>/migration/plan.md` if it exists. Aligns the redirect map to the planned scope. If absent, recommend running `plan-site-migration` first.
3. **Old URL inventory** — required. Sources: existing sitemap, crawler export (Screaming Frog), GSC URL list. Pasted, CSV, or file. Required columns: URL. Useful additions: status code, last-modified, traffic / clicks / impressions (last 90 days), backlink count if available.
4. **New URL convention or per-URL mapping rules** — required. Either:
   - **Convention-based**: a rule that maps old to new (e.g. `/blogs/news/<slug>` → `/blog/<slug>`). Most efficient when the change is pattern-driven.
   - **Per-URL**: a list with explicit old → new pairs. Required for migrations where new URLs don't follow a convention from old.
5. **Existing redirect file (optional)** — if there's already a partial redirect file, the skill checks for chains, missing entries, and contradictions.
6. **Target output format** — one of: Markdown table (default, human-readable), CSV (for upload to most platforms), Shopify URL Redirects format, Vercel `vercel.json` redirects, nginx `rewrite` rules, Apache `.htaccess`, Cloudflare Page Rules. Ask if unclear.

If the old URL inventory or the mapping rule is missing, ask. The redirect map operates on real URLs, not assumed ones.

## Process

1. **Build the master URL inventory.** De-duplicate across sitemap + crawler + GSC inputs. For each URL: capture status code (current), last 90-day clicks (if available), last 90-day impressions (if available), backlink count (if available). Note: URLs returning 4xx already are NOT typically redirected during migration — they were already broken. URLs returning 3xx already ARE redirected — collapse the chain (more on this below).
2. **Apply the mapping rule.** For each old URL, compute the new URL:
   - **Convention-based**: apply the rule. E.g. for the rule `/blogs/news/<slug>` → `/blog/<slug>`, transform `/blogs/news/how-mineral-sunscreen-works` → `/blog/how-mineral-sunscreen-works`.
   - **Per-URL**: look up in the user-supplied mapping table.
   - **Unmapped**: flag for user review. These are URLs the rule didn't catch — possibly legacy patterns, typos, or genuinely-removed content.
3. **Validate every new URL.** For each new URL:
   - Returns 200 (in staging if pre-launch, on production after launch)? Pass.
   - Returns 4xx → broken target. Flag P0.
   - Returns 3xx → redirect target is itself a redirect. The map should point at the FINAL destination, not an intermediate. Resolve and update.
   - Has self-referencing canonical? Pass.
   - Indexable (no `noindex`, not blocked by robots.txt)? Pass.
4. **Detect chains in existing redirect file** (if provided). For each existing rule, follow it to the end:
   - `A → B` and `B → C` exist in the file → collapse to `A → C` directly.
   - `A → B` and `B → A` (loop) → flag for resolution.
   - `A → B` where B → 4xx → flag P0.
5. **Prioritise by traffic.** Sort the redirect map by last 90-day clicks descending. The top of the list is the priority — these URLs can't lose ranking. The bottom is long-tail — easier to be lenient on edge cases.
6. **Decide batch order (for staged migrations).** If the migration plan calls for staged rollout:
   - Phase 1: highest-traffic URLs (top 20-50). Most-tested, most-monitored.
   - Phase 2: standard tier (next 100-500).
   - Phase 3: long-tail (everything else).
   For single-shot migrations, no batching — but still order the list for QA and verification.
7. **Generate the output file.** Format depends on target:
   - **Markdown table** (default): old URL | new URL | status | priority | notes
   - **CSV**: same columns; for bulk upload to most platforms.
   - **Shopify URL Redirects format**: CSV with `Redirect from`, `Redirect to` columns.
   - **Vercel `vercel.json`**: JSON object with `redirects` array of `{ source, destination, permanent: true }`.
   - **nginx**: `rewrite ^/old/path$ /new/path permanent;` lines.
   - **Apache `.htaccess`**: `Redirect 301 /old/path /new/path` lines.
   - **Cloudflare Page Rules**: rule list (rate-limited; only feasible for small batches).
8. **Generate verification queries.** A list of representative URL pairs the user can curl-test post-launch:

   ```
   curl -I -L https://example.com/blogs/news/how-mineral-sunscreen-works
   # Expect: 301 → 200 at https://example.com/blog/how-mineral-sunscreen-works
   ```

## Output format

```markdown
# Redirect Map — [Business Name]

**Migration:** [type / source → target]
**URLs in scope:** [n]
**Mapping approach:** [convention-based / per-URL / hybrid]
**Build date:** [date]

## Summary

| Status | Count | % |
|--------|------:|--:|
| Mapped + validated (new URL returns 200) | ... | ...% |
| Mapped + new URL pending validation (staging not available yet) | ... | ...% |
| Unmapped — needs user review | ... | ...% |
| Already-redirected (existing redirect; chain to be collapsed) | ... | ...% |

Brief 2-3 sentence read on the shape of the map.

## Redirect map

### Priority tier (top 50 by 90-day clicks)

| # | Old URL | New URL | Status | Last-90-day clicks | Notes |
|---|---------|---------|:------:|------------------:|-------|
| 1 | /products/old-slug | /products/new-slug | 301 | 1,240 | High-priority PDP — extra QA |
| 2 | ... | ... | 301 | ... | ... |
| ... |

### Standard tier

| # | Old URL | New URL | Status | Notes |
|---|---------|---------|:------:|-------|
| 51 | ... | ... | 301 | ... |
| ... |

### Long-tail

| # | Old URL | New URL | Status | Notes |
|---|---------|---------|:------:|-------|

### Unmapped — needs user review

| # | Old URL | Last-90-day clicks | Likely cause | Question for user |
|---|---------|------------------:|--------------|-------------------|
| 1 | /legacy-press-2022 | 18 | Legacy from 2022 redesign; no obvious modern equivalent | Redirect to /press, 410 Gone, or skip? |
| ... |

### Already-redirected (chains to collapse)

| # | Source | Current chain | Recommended single-hop |
|---|--------|---------------|------------------------|
| 1 | /old-x | /old-x → /old-y → /new-z | /old-x → /new-z (collapse) |

## Implementation-ready output

(In the format requested — Shopify CSV, Vercel JSON, nginx, etc.)

```

[Format-specific content]

```

## Verification queries

Top 20 URL pairs to test post-launch:

```bash
curl -I -L https://example.com/old/url-1
# Expect: 301 → 200 at https://example.com/new/url-1

curl -I -L https://example.com/old/url-2
# Expect: 301 → 200 at https://example.com/new/url-2
...
```

## Implementation checklist

- [ ] Validate all new URLs return 200 in staging before push.
- [ ] Resolve all "Unmapped — needs user review" rows.
- [ ] Collapse all chains in the "Already-redirected" section.
- [ ] Push redirect file to CMS / server (via [target format]).
- [ ] Run verification queries on representative URLs post-launch.
- [ ] Submit new sitemap to GSC.
- [ ] Begin recovery monitoring per migration plan.

## Risks and watchouts

3-5 specific watchouts: e.g. "the convention-based rule misses 3 legacy URLs that don't fit the pattern — manual mapping required for those 3"; "Shopify URL Redirects has a per-account limit; if you exceed it, recommend an app like Easy Redirects or theme-level handling"; "the existing redirect file has 8 chains we collapsed — verify each collapsed redirect post-launch"; "long-tail URLs without traffic but with backlinks are still in the priority tier — backlinks need redirects to preserve link equity even if there's no current click traffic."

```

Save the produced file to `businesses/<slug>/migration/redirect-map.md`. If the target output format is a separate file (CSV, JSON, etc.), save that too — alongside the Markdown documentation, e.g. `businesses/<slug>/migration/redirects.csv`. Create the `migration/` sub-folder if it doesn't already exist. After writing, tell the user both file paths.

## Quality bar

- Every URL with non-zero 90-day traffic has a row.
- Every URL with backlinks (if data is available) has a row, even if traffic is low.
- Status code is always 301 (no 302s for migration).
- Chains are collapsed; the map has no multi-hop redirects.
- Every new URL is validated for 200 / canonical / indexable status.
- Unmapped rows are surfaced explicitly with a question for the user, not silently dropped.
- The output file is in the format the user can actually deploy (CSV for bulk uploaders, JSON for Vercel, etc.).
- Verification queries are concrete (real URLs, expected response codes).

## Common mistakes to avoid

- Don't use 302. Always 301 for migrations. The exception (genuinely temporary URL, A/B test, geo-routing) is rare and not in scope here.
- Don't accept multi-hop chains in the output. Collapse every chain to a single hop.
- Don't drop URLs without traffic. Long-tail URLs with backlinks still need redirects to preserve link equity.
- Don't generate a redirect to a URL that 4xx's. Validate every new URL before considering the row final.
- Don't generate redirects for URLs that should be left to die. Truly removed content (discontinued products, decommissioned features) should return 410 Gone, not redirect to a tangentially-related page. The skill flags these as "unmapped — needs user review."
- Don't fabricate redirects for URLs the user didn't supply. The skill operates on real inputs.
- Don't ship a CSV without column headers if the target system requires headers (Shopify URL Redirects does). Match the platform's import format exactly.

## Example

**Input (abbreviated):** Field & Sun. Migration plan: blog migration only (`/blogs/news/<slug>` → `/blog/<slug>`, 25 URLs). Plus 3 legacy press URLs from a 2022 site that need redirects to current `/press` page. Target output format: Shopify URL Redirects CSV. Old URL inventory: 28 URLs from sitemap + GSC.

**Output (abbreviated):**

Summary: 25 mapped + validated (convention-based rule applied), 3 mapped via per-URL mapping (legacy press), 0 unmapped, 0 chains.

Priority tier (top 25 by 90-day clicks): all 25 blog URLs sorted by clicks. Top: `/blogs/news/mineral-vs-chemical-sunscreen` (480 clicks/90d) → `/blog/mineral-vs-chemical-sunscreen`. Notes flag: "Featured snippet candidate — extra QA on schema."

Per-URL legacy press (3 URLs): all → `/press`.

Implementation-ready Shopify CSV:
```

Redirect from,Redirect to
/blogs/news/mineral-vs-chemical-sunscreen,/blog/mineral-vs-chemical-sunscreen
/blogs/news/vitamin-c-serum-guide,/blog/vitamin-c-serum-guide
... (23 more)
/legacy-press/2022-launch,/press
/legacy-press/founder-feature,/press
/legacy-press/glow-summit,/press

```

Verification queries: 5 representative `curl -I -L` commands.

Implementation checklist: validate new URLs in staging (already done — all 25 return 200), upload CSV to Shopify Online Store → Navigation → URL Redirects, run verification post-launch, submit new sitemap.

Risks: Shopify CSV import has a 1,000-redirect limit per upload — well under for this migration. Existing 8 internal links across PDPs and blog posts pointing at `/blogs/news/...` URLs need to be updated post-launch — already in plan. Featured-snippet eligibility on the mineral-vs-chemical post is at risk during the indexing transition (~7-14 days).

Saved to `businesses/field-and-sun/migration/redirect-map.md` and `businesses/field-and-sun/migration/redirects.csv`.
