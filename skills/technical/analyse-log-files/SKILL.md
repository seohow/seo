---
name: analyse-log-files
description: Analyses server log files to reveal crawl frequency, coverage gaps, and crawl waste by URL segment. Use to diagnose crawl budget issues or validate post-migration crawl patterns.
---

# Analyse Log Files

This skill takes Googlebot-filtered server access logs and produces a structured crawl analysis. The output: how Googlebot is spending its crawl budget across URL buckets, what response codes it's seeing, which URLs are orphans (hit by bots but not in sitemap/internal-links), which URLs are under-crawled, and what to fix to reclaim wasted budget.

The skill is opinionated: only verified Googlebot traffic counts (user-agent + IP verification); 30-day minimum window for signal; URL bucketing surfaces patterns better than per-URL detail; crawl-budget waste over ~10% is the threshold for action.

## When to use this skill

- The user has server log access (Vercel paid tier, Cloudflare Enterprise, custom hosting, AWS / GCP infrastructure) and shares a Googlebot-filtered log export.
- New content takes 2-4+ weeks to rank, suggesting crawl budget is too thin on canonical content.
- Major change just shipped (migration, robots update, canonical rollout) and the user wants to verify bot behaviour shifted as expected.
- Quarterly hygiene check on a site over ~5,000 URLs.

## When NOT to use this skill

- Platform doesn't expose logs (Shopify, Webflow, WordPress.com). Recommend other diagnostics (GSC, crawler audits, canonical audit).
- Site is small (<2,000 URLs). Crawl budget is rarely the constraint at that scale; other audits are higher-leverage.
- The user wants to debug a specific URL's indexing status — use GSC URL Inspection + `audit-indexing-status`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), CMS / platform (5). Confirm logs are accessible on this stack.
2. **Log export** — required. CSV, TSV, or pasted log lines. Required columns / fields: timestamp, user-agent, URL, status code. Useful additions: response time, bytes, referrer, source IP. The user pulls this from their hosting provider's log access.
3. **Time window** — at least 30 days. Ideally 60-90.
4. **URL inventory (optional but valuable)** — sitemap export + crawler export so the skill can identify orphan URLs (in logs but not in inventory) and under-crawled URLs (in inventory but rarely or never in logs).
5. **Specific concerns (optional)** — e.g. "we just shipped a robots.txt change," "blog posts take forever to index," "we suspect parameter URLs are eating budget."

If the log export or platform access is missing, ask. The skill doesn't simulate bot behaviour.

## Process

1. **Verify Googlebot traffic.** The user-agent must contain a Googlebot identifier. Cross-reference a sample of source IPs against Google's published IP ranges (<https://developers.google.com/static/search/apis/ipranges/googlebot.json>) — or instruct the user to run their tool's Googlebot-verification step. Discard unverified rows.
2. **Bucket URLs by pattern.** Common buckets:
   - Homepage
   - Products (`/products/<slug>`)
   - Collections (`/collections/<slug>`)
   - Blog / articles
   - FAQ / utility pages
   - Parameter URLs (anything with `?`)
   - Internal search (`/search?q=...`)
   - Sitemap / robots
   - Static assets (images, CSS, JS)
   - Other (catch-all)
   Adapt to the site's URL conventions. Aim for 8-12 buckets.
3. **Tally requests per bucket.** Total requests per bucket; share of total Googlebot crawl. Sort descending.
4. **Tally response codes per bucket.** For each bucket: count of 200, 301, 302, 4xx, 5xx. Compute percentages.
5. **Identify crawl-budget waste.** Buckets that should be excluded from crawl (search, parameter URLs, login pages, cart, account) but are receiving meaningful share. Threshold: any non-canonical bucket above 5-10% of crawl is worth fixing.
6. **Cross-reference with sitemap (if provided):**
   - URLs in logs but not in sitemap → orphan candidates. Investigate.
   - Sitemap URLs not in logs (or hit very rarely) → under-crawled. May need internal-link reinforcement.
7. **Cross-reference with crawler export (if provided):**
   - URLs in logs but not in crawler output → completely orphaned (no internal link discoverable). Investigate.
   - Crawler-found URLs not in logs → Googlebot deprioritised them. Often legacy or thin content.
8. **Compute crawl-frequency distribution** for canonical content. Examples: top 10% of products by traffic should be hit ~weekly; long-tail blog posts may be hit monthly. Pages hit only once in 90 days are at indexing risk.
9. **Diagnose patterns.** Common ones:
   - Parameter / search URLs eating budget → fix robots.txt + canonicals.
   - 5xx spikes → investigate server / specific endpoint stability.
   - 404 spikes on Googlebot → URLs were removed without redirects.
   - Orphan URLs from legacy structure → 410 Gone or redirect to current canonical.
   - Crawl-frequency cliff (canonical content hit very rarely) → internal-link reinforcement, sitemap re-submission.
10. **Prioritise remediation.** P0 = waste affecting >10% of crawl OR 5xx pattern. P1 = orphan or under-crawled cluster-mapped URLs. P2 = hygiene findings.

## Output format

```markdown
# Log File Analysis — [Business Name]

**Window:** [YYYY-MM-DD] to [YYYY-MM-DD] ([n] days)
**Total Googlebot requests:** [n]
**Verified Googlebot %:** [n]% (verified against Google's IP ranges)
**Audit date:** [date]

## Crawl distribution by URL bucket

| Bucket | Requests | % of crawl | Avg per day |
|--------|---------:|-----------:|------------:|
| Products | ... | ...% | ... |
| Collections | ... | ...% | ... |
| Blog / articles | ... | ...% | ... |
| Parameter URLs | ... | ...% | ... |
| Internal search | ... | ...% | ... |
| Static assets | ... | ...% | ... |
| Sitemap / robots | ... | ...% | ... |
| Other | ... | ...% | ... |

Brief 2-4 sentence read on the shape of the budget allocation.

## Response-code distribution per bucket

| Bucket | 200 | 301 | 302 | 4xx | 5xx |
|--------|----:|----:|----:|----:|----:|
| Products | ...% | ...% | ...% | ...% | ...% |
| ... | ... | ... | ... | ... | ... |

Notable patterns: [list]

## Crawl-budget waste

- **Estimated waste:** [n]% of total crawl on URLs that shouldn't be crawled (parameter URLs, search results, login, account, etc.)
- **Worst offender:** [bucket] at [%] of total crawl
- **Recommendation:** [block via robots.txt + canonical / noindex per pattern]

## Orphan URLs (in logs, not in sitemap or crawler output)

| URL pattern / sample | Hits | Status code | Likely cause | Recommendation |
|---------------------|----:|:------------:|--------------|----------------|
| ... | ... | ... | ... | Redirect / 410 / ignore |

## Under-crawled canonical content

URLs in sitemap that Googlebot has hit ≤2 times in the window:

| URL | Cluster (if mapped) | Last hit | Recommendation |
|-----|---------------------|---------|----------------|
| ... | ... | ... | Internal-link in / re-submit sitemap / improve quality |

## Crawl-frequency distribution for canonical content

| Frequency band | URL count |
|---------------|----------:|
| Daily | ... |
| 2-7 days | ... |
| 8-30 days | ... |
| 31-90 days | ... |
| Never (in window) | ... |

## Diagnoses

### P0 — Critical
- [Finding] — [why P0] — [specific fix]

### P1 — High
- ...

### P2 — Hygiene
- ...

## Prioritised remediation list

| # | Fix | Affected | Action | Where to fix | Expected effect |
|---|-----|----------|--------|--------------|-----------------|
| 1 | Block /search via robots.txt | n/a | Disallow: /search | robots.txt | Recover ~8% of crawl budget |
| 2 | Add `rel=canonical` on parameter URLs | [n] template | Update collection template | CMS theme | Recover ~30% of crawl budget over 30-60 days |
| ... |

## Implementation checklist
- [ ] Apply P0 fixes first.
- [ ] Wait 30 days, re-pull logs.
- [ ] Compare new crawl distribution to baseline; verify shift.
- [ ] Address P1 fixes.
- [ ] Document the baseline-vs-after delta in business AGENTS.md.
- [ ] Set quarterly log-analysis cadence.

## Risks and watchouts
3-5 specific watchouts: e.g. "robots.txt change takes 1-7 days to fully reflect in Googlebot behaviour"; "fixing parameter-URL canonicals doesn't deindex existing parameter URLs immediately — expect 30-60 days for the index to clean up"; "if 5xx pattern correlates with specific time-of-day, may indicate scheduled cron or backup job conflicting with bot crawl"; "compare bandwidth used by Googlebot before/after — useful signal that infra costs are also dropping when waste is fixed."
```

Save the produced file to `businesses/<slug>/log-analysis/<YYYY-MM-DD>.md`. Create the `log-analysis/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Googlebot verification is explicit (user-agent + IP).
- URL bucketing is data-driven (based on the actual URL patterns in this site's logs), not generic.
- Crawl-budget-waste estimate is computed from real numbers, not assumed.
- Cross-references with sitemap and crawler output happen only if the user provided them — otherwise the audit notes the limitation.
- Orphan-URL findings include the likely cause, not just the URL.
- Remediation list connects each fix to expected crawl-budget recovery (so the user can prioritise).
- The "next-window" verification step is in the implementation checklist.

## Common mistakes to avoid

- Don't accept unverified Googlebot user-agents at face value. Spoofing is real.
- Don't analyse less than 30 days of data. Pattern-level findings need the window.
- Don't promise specific ranking improvements from log-analysis fixes. Crawl is a precursor to indexing, not a direct rank signal.
- Don't lump all 4xx codes together — 404 (gone), 410 (gone permanently), 451 (legal removal), 429 (rate-limited) all have different meanings.
- Don't recommend blocking parameter URLs in robots.txt without considering whether canonicals on those URLs would handle it less destructively. Robots blocks the crawl entirely; canonicals consolidate signal while still letting Google verify equivalence. Use robots only when canonicals can't reach the URL.
- Don't audit on platforms where logs aren't accessible (Shopify default, Webflow, WordPress.com). The skill doesn't apply.
- Don't treat one log analysis as the answer. The pattern-vs-baseline comparison after fixes ship is where the real value lives.

## Example

**Input (abbreviated):** Custom Next.js on Vercel. 60 days of Googlebot logs. 87,400 verified Googlebot requests. Sitemap with 3,400 URLs and Screaming Frog crawler export available.

**Output (abbreviated):**

Crawl distribution: Products 14%, Collections 6%, Blog 8%, Parameter URLs 47% (!!), Internal search 10%, Other 15%. Waste estimate: ~57% of crawl is on URLs that shouldn't be indexed.

Response-code distribution per bucket mostly clean except: parameter URLs are returning 200 (so they're being indexed); one collection page is returning intermittent 5xx (~3% of its requests) — investigate caching layer.

Orphan URLs: 47 URLs in logs but not in sitemap or crawler output. Investigation shows they're legacy URLs from a 2024 migration that didn't get redirected. Recommendation: 301 to current equivalents.

Under-crawled: 8 cluster-mapped blog posts hit ≤2 times in 60 days. All in the same blog category that lacks internal-link inbound. Recommendation: link them in from related cluster spokes.

Crawl-frequency distribution: 12% of canonical URLs hit daily, 31% weekly, 24% monthly, 18% rarely (3-month interval), 15% never in window.

P0 remediations:

1. Block `/search` in robots.txt — recovers ~10% budget.
2. Canonicalise parameter URLs to clean collections at template level — recovers ~30% over 30-60 days.
3. Investigate the 5xx pattern on one collection — Vercel logs + cache headers.

Implementation checklist with re-pull at 30 days. Saved to `businesses/<slug>/log-analysis/2026-05-01.md`.
