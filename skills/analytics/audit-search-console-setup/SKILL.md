---
name: audit-search-console-setup
description: Audits Search Console setup: property verification, sitemaps, data filters, and connections. Use to confirm GSC is correctly configured before using it for analysis or reporting.
---

# Audit Search Console Setup

This skill produces a structured GSC configuration audit. Output is a prioritised fix list — each issue has severity, root cause, user-visible impact, and effort estimate.

The skill is opinionated about a few things: Domain property is almost always the right choice (URL-prefix is legacy); sitemap should re-submit on major changes (not "set and forget"); CWV field data is what matters for rankings (not lab data); coverage exclusions deserve weekly attention; access permissions drift and should be reviewed quarterly.

## When to use this skill

- The user has GSC verified but is unsure if it's configured optimally.
- The user is noticing missing data, unexpected coverage exclusions, or schema validation errors.
- The user just verified GSC and wants confidence the setup is clean before running reports.
- The user is running a quarterly analytics review.

## When NOT to use this skill

- The user wants to verify GSC for the first time (point them to Google's verification docs).
- The user wants to analyse query / page performance — use `analyse-search-performance`.
- The user wants to audit GA4 — use `audit-ga4-setup`.
- The user wants to fix indexing issues found in coverage — use `audit-indexing-status` (Technical SEO).

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3) for site-structure context, goals (7) for prioritisation.
2. **GSC access** — required. Skill needs visibility into property setup, coverage, enhancements, links, settings.
3. **Site URL(s)** — required. All canonical hostnames the brand operates (apex, www, subdomains).
4. **Sitemap location(s)** — required if known; otherwise the audit identifies them.
5. **Existing properties** — list of GSC properties currently verified for the brand. Audit consolidates / recommends.

If GSC access is missing, ask. The audit needs to see the actual configuration.

## Process

1. **Property structure.**
   - Domain property exists and is verified (preferred).
   - URL-prefix property as backup or legacy: flag duplicates and recommend Domain consolidation.
   - All canonical hostnames covered (apex, www, m., shop., etc.).

2. **Verification.**
   - Verification method documented (DNS TXT for Domain; HTML file / meta tag / GA / GTM for URL-prefix).
   - Backup verification methods enabled (DNS plus one other) so verification doesn't lapse if one method fails.

3. **Sitemaps.**
   - At least one canonical sitemap submitted at `/sitemap.xml`.
   - Programmatic templates have segment-specific sitemaps if they exist.
   - Last-fetched date within reasonable cadence (weekly or on-publish for active sites).
   - Indexed-vs-submitted ratio reviewed; large gaps are a flag.

4. **Coverage / pages report.**
   - Total indexed count makes sense vs. site size.
   - "Crawled — currently not indexed" investigated (sample 5-10 URLs; identify pattern).
   - "Discovered — currently not indexed" investigated (often crawl-budget signal on large sites).
   - Excluded by canonical / robots / noindex: each reason reviewed; flag accidental noindex.
   - Soft 404s investigated.

5. **Enhancements reports.**
   - Mobile usability: any errors? URL count flagged.
   - Schema validation: which schema types reporting; errors / warnings flagged with URL examples.
   - CWV field data (Mobile + Desktop): URL groups in "Good," "Needs improvement," "Poor."
   - Search appearance categories: which surfaces eligible / serving (Sitelinks, FAQ, Product, etc.).

6. **Sitemaps + Robots.**
   - `robots.txt` accessible at `/robots.txt`.
   - No blanket disallows blocking critical paths.
   - Sitemap reference present in `robots.txt`.

7. **Manual actions / security issues.**
   - Status check; flag immediately if present.

8. **Links report.**
   - Top linking sites + top linked pages reviewed (high-level).
   - Spam / toxic-link patterns flagged for further review (handoff to Off-page).

9. **Settings & integrations.**
   - GA4 association linked.
   - International targeting (if applicable; deprecated for most cases now but legacy properties may still have settings).
   - Crawl rate (legacy; rarely needed but flag if non-default).

10. **Users and permissions.**
    - Owner accounts current (no ex-employees / contractors).
    - Edit / Restricted access reviewed; remove stale.
    - Verification ownership stable (don't lose Owner status).

11. **Bulk data export (BigQuery).**
    - For large sites: bulk data export to BigQuery configured. Bypasses 1,000-row UI limit and provides full historical data.

12. **Data freshness.**
    - GSC has 2-3 day data lag; flag if suspected staleness beyond that.
    - Some reports (CWV) update weekly, not daily; expectation set.

13. **Triangulation (light).**
    - GSC clicks (28-day) vs GA4 organic-search sessions: should correlate within ~20% on most sites.
    - Large discrepancies suggest measurement issues (consent mode, cross-domain, GTM issues) — handoff to GA4 audit.

14. **Write the audit.**

## Output format

```markdown
# GSC Setup Audit — [Business name]

**Audit date:** [date]
**Property type:** [Domain / URL-prefix]
**Auditor:** [name]

## Executive summary
- **P0 issues:** [n]
- **P1 issues:** [n]
- **P2 issues:** [n]
- **Estimated total fix effort:** [n] days
- **Headline finding:** [1-2 sentence summary]

## Findings

### P0 — Critical (data missing or broken)

#### [Issue title]
- **Symptom:** [what the user sees]
- **Root cause:** [technical reason]
- **Impact:** [reports / decisions affected]
- **Fix:** [steps]
- **Effort:** [hours / days]
- **Verification:** [how to confirm]

[Repeat]

### P1 — Material (data incomplete or misleading)
[Same structure]

### P2 — Hygiene (cleanup; doesn't block reports)
[Same structure]

## Configuration summary

### Properties
- Domain property: [verified / missing]
- URL-prefix properties: [list with verification status]
- Recommendation: [consolidate / keep / add]

### Sitemaps
| Sitemap | Submitted | Last fetched | Submitted URLs | Indexed | Errors |
|---------|-----------|--------------|----------------|---------|--------|
| /sitemap.xml | yes | [date] | n | n | [list] |

### Coverage
| Status | URL count | Notes |
|--------|-----------|-------|
| Indexed | n | |
| Crawled — currently not indexed | n | [pattern observation] |
| Discovered — not indexed | n | [pattern observation] |
| Excluded — canonical | n | |
| Excluded — noindex | n | [list flagged accidental noindex] |

### Enhancements
- Mobile usability: [n errors] / [n URLs flagged]
- Schema types reporting: [list]
- Schema errors: [list with URL examples]
- CWV mobile: Good [n] / Needs improvement [n] / Poor [n]
- CWV desktop: Good [n] / Needs improvement [n] / Poor [n]

### Manual actions / security
- Manual actions: [None / present — describe]
- Security issues: [None / present — describe]

### Integrations
- GA4 association: [linked / missing]
- BigQuery bulk export: [enabled / not enabled]

### Users
- Owners: [list — flag stale]
- Edit / Restricted: [n] users — [stale count]

### Triangulation
- GSC clicks (28d): [n]
- GA4 organic-search sessions (28d): [n]
- Correlation: [%]
- Verdict: [Pass / Investigate]

## Prioritised fix list (one-page version)

| # | Issue | Severity | Effort | Owner |
|---|-------|----------|--------|-------|
| 1 | Missing Domain property | P1 | 30 min | Marketing |
| 2 | 2 blog posts have accidental `noindex` | P0 | 1 hr | Dev |
| ... | ... | ... | ... | ... |

## Recommendations beyond fixes
- [ ] Re-audit in [n] months.
- [ ] Set up Looker Studio dashboard for weekly review.
- [ ] Establish weekly 30-min GSC review habit.
- [ ] Configure BigQuery bulk export.
```

Save the produced file to `businesses/<slug>/analytics/gsc-audit-[YYYY-MM-DD].md`. Create the `analytics/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every finding has severity, root cause, impact, fix, effort, and verification.
- Property structure verified with all canonical hostnames covered.
- Coverage exclusions investigated by sampling specific URLs (not just count totals).
- CWV field data summarised; URL groups identified.
- Triangulation with GA4 done at high level.
- Access permissions reviewed; stale users flagged.
- Output is actionable for both technical (dev) and marketing owners.

## Common mistakes to avoid

- Don't trust only one URL-prefix property when a Domain property would cover more.
- Don't ignore "Crawled — currently not indexed." It's diagnostically rich and underused.
- Don't conflate lab CWV (Lighthouse / PageSpeed Insights) with field CWV (GSC). Field is what matters.
- Don't skip the manual-actions / security check. Rare but critical; should be the first thing checked in any new GSC engagement.
- Don't propose changing canonical strategy without coordinating with Technical SEO's canonical / indexing leaves.
- Don't audit and walk away. Schedule re-audit in 90 days.
- Don't ignore GSC ↔ GA4 discrepancy. Large gaps suggest tracking-side issues that affect every downstream report.

## Example

**Input (abbreviated):** Field & Sun. GSC verified since 2023 via URL-prefix on `https://www.fieldandsun.com`.

**Output (abbreviated):**

P0 (1):

- 2 blog posts have accidental `noindex` (`/blog/skincare-routine-basics` and `/blog/spf-myths`); 1 hr fix.

P1 (3):

- Missing Domain property; URL-prefix only; 30 min to add via DNS.
- 2 PDPs missing `aggregateRating` in Product schema; 2 hrs.
- 12 blog posts in CWV "Needs improvement" on mobile (mainly hero images > 500KB); ~2 days handoff to image-optimisation.

P2 (2):

- 3 ex-contractors retain Edit access.
- BigQuery bulk export not configured.

Coverage: 138 indexed, 4 in "Crawled — currently not indexed" (3 are recently retired URLs that will drop; 1 is a low-quality test post that should be de-published).

CWV: mobile 73 Good / 12 Needs improvement / 0 Poor; desktop 95 Good / 0 / 0.

Manual actions: None. Security issues: None.

Triangulation: GSC 28d clicks 18,400 vs GA4 28d organic sessions 16,200 → 12% correlation gap (within tolerance, no investigation needed).

Total fix effort: 1 day immediate + 2 days image work.

Saved to `businesses/field-and-sun/analytics/gsc-audit-2026-05-01.md`.
