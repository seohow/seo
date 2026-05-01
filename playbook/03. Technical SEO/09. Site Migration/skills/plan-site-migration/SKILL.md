---
name: plan-site-migration
description: Produces a written site-migration plan — scope, redirect strategy, pre-migration baseline checklist, sequencing (single-shot vs staged), QA gates, recovery monitoring schedule, rollback trigger definition, downstream-system update list, and post-migration documentation requirements. Use whenever the user is planning a re-platform, rebrand, domain move, mass URL restructure, sub-domain consolidation, or HTTP→HTTPS migration. Also use when the user mentions "we're moving to [new platform]," "we're rebranding," "we need to restructure URLs across the site," or "we're worried about losing rankings during a migration." Do not use to build the actual redirect file — that's `build-redirect-map`. The plan is the prerequisite; the redirect map is the operational artifact.
---

# Plan Site Migration

This skill produces a written site-migration plan — the scoping document that decides what changes, in what order, with what gates, and what triggers a rollback. Migration is high-stakes; the plan exists so that no decisions get made under pressure on launch day.

The plan is opinionated about a few things: pre-migration baseline is non-negotiable; every URL changing must have a 301 in the redirect map (no exceptions); migration ships during off-peak; rollback triggers are defined before launch; recovery is monitored for 90 days, not 30.

## When to use this skill

- The user is planning a re-platform (e.g. WooCommerce → Shopify, Shopify → Hydrogen).
- The user is rebranding and changing domains.
- The user is doing a mass URL restructure (e.g. moving the blog from `/blogs/news/` to `/blog/`).
- The user is consolidating sub-domains (`blog.example.com` → `example.com/blog`).
- The user is moving HTTP → HTTPS.
- The user is briefing a dev team / agency on the upcoming migration.
- The user is worried about ranking risk and wants a structured approach.

## When NOT to use this skill

- The user wants the actual redirect file — use `build-redirect-map`.
- The user wants to debug why traffic dropped after a migration that already happened — that's a recovery investigation, not a plan. Investigate via `audit-crawlability` + `audit-indexing-status` + `analyse-log-files` cross-referenced with the original migration plan.
- The user wants to plan a new content launch (not a URL migration) — different workflow.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `generate-business-profile` first. Critical sections: business model (2), products/services (3), CMS / platform (5), goals (7).
2. **Migration scope** — what's changing. Specifically:
   - Type of migration (re-platform, rebrand, URL restructure, sub-domain consolidation, HTTPS).
   - Source state: current platform, current domain, current URL conventions, approximate URL count.
   - Target state: new platform, new domain, new URL conventions, expected URL count.
   - What's NOT changing (often more important than what is, for scoping).
3. **Timeline** — target launch date, hard constraints (peak-season blackouts, contract dates, board commitments).
4. **Team and resourcing** — who owns dev / QA / SEO / analytics during migration.
5. **Existing assets (optional but valuable):**
   - URL conventions doc (`urls/conventions.md`) — feeds the new URL design.
   - Cluster map (`clusters/cluster-map.md`) — flags priority URLs that need extra attention.
   - Recent technical-SEO audits — flags issues to clean up *during* migration rather than carrying them forward.

If migration scope or target launch date is unclear, ask. Migration plans depend on knowing what's changing and when.

## Process

1. **Restate the migration in business terms.** Not "we're moving to a new CMS" but "we're moving from Shopify to Hydrogen so the marketing team can ship new templates without the design system constraints — target launch March 15, must not impact Mother's Day promotion (May 11)." Specificity prevents scope creep.
2. **Define scope: what's changing.** List explicitly:
   - URLs changing (which patterns, approximately how many)
   - URLs NOT changing (e.g. the homepage stays at the same URL even on the new platform)
   - Platform / template / theme changes
   - Domain change (yes/no)
   - HTTPS change (yes/no)
   - Sub-domain consolidation (yes/no)
3. **Choose redirect strategy.**
   - **Single-shot**: ship all redirects + URL changes at once. Faster, more visible dip, easier to reason about. Works for small/medium sites.
   - **Staged**: ship in phases (by content type, by section, by URL pattern). Reduces risk concentration, harder to coordinate. Worth it for sites over ~5k URLs or rebrands with downstream complexity.
   - Recommend based on site size and risk tolerance.
4. **Define the pre-migration baseline checklist.** What must be captured before launch:
   - GSC export of all URLs with impressions / clicks / position (last 90 days).
   - Rank-tracker snapshot of top 50-200 keywords.
   - Sitemap snapshot (file + URL list).
   - Crawler export with canonical / status / inlinks per URL.
   - Server logs for the last 30 days (if accessible).
   - Internal-link inventory (Screaming Frog "All Inlinks" export).
   - Top-page list by traffic with current ranking and metadata.
   This is the data you'll measure recovery against. Without it, "did we recover?" is unfalsifiable.
5. **Define QA gates.** What has to be true before launch:
   - All new URLs return 200 in staging.
   - All new URLs have correct canonical tags pointing at themselves.
   - All new URLs are indexable (no leftover staging `noindex`).
   - Schema markup on representative new pages validates in Rich Results Test.
   - New sitemap is generated and validates.
   - Robots.txt allows new URL paths (if changed).
   - Redirect map covers every old URL with non-zero traffic in the last 90 days.
   - Internal-link sweep is staged (replacement targets known, ready to push post-launch).
   - Downstream systems flagged (analytics, paid-search, email, partner integrations) — owners assigned.
6. **Sequence the launch.** Hour-by-hour for launch day:
   - T-1 day: final QA in staging, final redirect-map review, team sync.
   - T-0 (launch): ship new platform / URLs. Push 301 redirects. Push new sitemap. Submit new sitemap to GSC.
   - T+1 hour: smoke-test top 50 URLs (200 / canonical / indexable). Verify representative redirects.
   - T+2 hours: GSC URL Inspection on top 10 priority URLs. Spot-check rendered DOM.
   - T+24 hours: GSC URL Inspection on top 50. Check Pages report for spike in errors.
7. **Define the recovery monitoring schedule.**
   - Days 1-7: daily — GSC URL Inspection on top 10, GSC Pages report scan, rank-tracker on top 50 keywords, log analysis if available.
   - Days 8-30: every 2-3 days — same checks, slower cadence. Investigate any URL not recovered by day 14.
   - Days 30-90: weekly — long-tail recovery monitoring. Don't declare complete before day 90.
8. **Define rollback triggers.** Specific symptoms that trigger a "we ship the rollback" decision:
   - X% of priority URLs return 4xx/5xx after T+24 hours.
   - Y% of top keywords drop > N positions and stay there for > Z days.
   - Critical sitemap / canonical errors that can't be fixed in N hours.
   Define the thresholds. Without them, when something goes wrong the team paralyses.
9. **Define downstream-system update list.** Every consumer of the URL inventory:
   - GA4 / analytics tracking (URL parameter rules, page-view filters)
   - Paid-search landing pages (Google Ads, Meta Ads URL update batch)
   - Email marketing links (Klaviyo flows, automated emails, recent campaigns)
   - Partner integrations (affiliate, syndication, embedded widgets)
   - App deep links (if any)
   - Help-desk macros (if URLs are referenced in customer support replies)
   - External-link cleanup (high-value backlinks pointing at old URLs — prioritise outreach)
10. **Write the post-migration documentation requirement.** What gets recorded:
    - Migration date + scope summary added to business CLAUDE.md decisions log.
    - Baseline → recovery delta documented at day 30, day 60, day 90.
    - Lessons learned (what broke, what surprised, what to do differently next time).

## Output format

```markdown
# Site Migration Plan — [Business Name]

**Migration type:** [re-platform / rebrand / URL restructure / sub-domain consolidation / HTTPS]
**Source → Target:** [oldbrand.com on Shopify → newbrand.com on Hydrogen]
**Target launch date:** [YYYY-MM-DD]
**Plan date:** [date]

## 1. Goal
One paragraph stating the business goal in concrete terms, including the hard constraints (peak-season blackouts, contract dates, etc.).

## 2. Scope

### Changing
- [List of URL patterns / sections changing]
- Platform: [old → new]
- Domain: [old → new] (or "no change")
- HTTPS: [yes/no transition]
- Sub-domain: [pattern]

### NOT changing
- [Explicit list of what stays. Often more important than what changes for scoping.]

## 3. Redirect strategy
- **Approach:** [single-shot / staged]
- **Reasoning:** [why this approach for this site]
- **If staged:** phase breakdown with target dates per phase.

## 4. Pre-migration baseline checklist
- [ ] GSC export of all URLs with impressions / clicks / position (last 90 days). Owner: [name]. Due: [T-7].
- [ ] Rank-tracker snapshot of top [n] keywords. Owner: [name]. Due: [T-7].
- [ ] Sitemap snapshot. Owner: [name]. Due: [T-3].
- [ ] Crawler export. Owner: [name]. Due: [T-3].
- [ ] Server log export (last 30 days, if accessible). Owner: [name]. Due: [T-3].
- [ ] Internal-link inventory. Owner: [name]. Due: [T-3].

## 5. QA gates (must pass before launch)
- [ ] All new URLs return 200 in staging.
- [ ] All new URLs have self-referencing canonical tags.
- [ ] All new URLs are indexable (no `noindex`).
- [ ] Schema markup validates on representative pages (Rich Results Test).
- [ ] New sitemap generates and validates.
- [ ] Robots.txt allows new paths.
- [ ] Redirect map covers every old URL with non-zero traffic in last 90 days.
- [ ] Internal-link replacement targets identified and staged.
- [ ] Downstream systems briefed (owners listed in Section 9).

## 6. Launch-day sequence
| T | Activity | Owner | Verification |
|---|----------|-------|-------------|
| T-1 day | Final QA in staging | Dev | Sign-off email |
| T-1 day | Final redirect-map review | SEO | Cross-check with crawler export |
| T-0 | Ship new platform / URLs | Dev | New URLs return 200 |
| T-0 | Push 301 redirects | Dev | Sample old URL → new URL test |
| T-0 | Submit new sitemap to GSC | SEO | Sitemap accepted |
| T+1h | Smoke-test top 50 URLs | SEO | All return 200 + correct canonical |
| T+2h | URL Inspection top 10 | SEO | Indexed-and-current verified |
| T+24h | Full URL Inspection top 50 | SEO | Spike in errors? Investigate. |

## 7. Recovery monitoring schedule
- **Days 1-7 (daily):** GSC URL Inspection top 10, GSC Pages scan, rank-tracker top 50, log analysis.
- **Days 8-30 (every 2-3 days):** Same checks, lower cadence. Investigate URLs not recovered by day 14.
- **Days 30-90 (weekly):** Long-tail recovery. Don't declare complete before day 90.

## 8. Rollback triggers
We ship the rollback if any of these occur within 7 days post-launch:
- More than [X]% of priority URLs return 4xx/5xx (uncaused by other identified issue).
- More than [Y]% of top [n] keywords drop more than [N] positions and remain dropped for [Z] days.
- Critical sitemap / canonical errors that can't be fixed within [hours].
- [Other site-specific trigger]

Rollback owner: [name]. Decision must be made within [N hours] of trigger.

## 9. Downstream-system update list
| System | Owner | Action | Due |
|--------|-------|--------|-----|
| GA4 tracking | [name] | Update URL filters | T-1 day |
| Klaviyo email links | [name] | Audit recent campaigns + active flows; update where active | T-3 days |
| Google Ads landing pages | [name] | Bulk URL replacement | T-1 day |
| Meta Ads landing pages | [name] | Bulk URL replacement | T-1 day |
| Help-desk macros | [name] | Update referenced URLs | T-1 day |
| External-link backlinks | [name] | Prioritised outreach list (top 20 referring domains) | T+7 days |
| Partner integrations | [name] | Each partner contacted with new URLs | T-3 days |

## 10. Post-migration documentation
- [ ] Migration date + scope added to `businesses/<slug>/CLAUDE.md` decisions log.
- [ ] Baseline → recovery delta documented at day 30, day 60, day 90.
- [ ] Lessons learned added to CLAUDE.md learnings.

## Risks and watchouts
3-5 specific risks for THIS migration: e.g. "Mother's Day promotion launches May 11; migration must be stable by May 4 or rollback"; "Yotpo widget integration is the biggest unknown — if review schema doesn't carry over, expect AggregateRating eligibility loss"; "the Hydrogen storefront has no historical baseline; ranking benchmarks are estimates only"; "external links from Wirecutter point at three legacy URLs — must be in the priority outreach list."
```

Save the produced file to `businesses/<slug>/migration/plan.md`. Create the `migration/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every section is filled in with site-specific detail. Generic placeholders are flagged as "needs input from user."
- Pre-migration baseline checklist is explicit; the user knows exactly what to capture before launch.
- QA gates are objective conditions, not subjective ones.
- Rollback triggers are quantitative (specific %, specific time windows), not "if things go badly."
- Downstream-system list is complete (analytics, ads, email, support, partners, external links).
- Risks section names specific risks for THIS migration, not generic ones.

## Common mistakes to avoid

- Don't propose a single-shot migration for sites over ~5,000 URLs without flagging the risk concentration.
- Don't recommend launching during peak season. Always off-peak.
- Don't skip the pre-migration baseline. Without it, recovery is unfalsifiable.
- Don't recommend declaring complete at day 30. Long-tail recovery takes 60-90 days.
- Don't omit downstream systems from the plan. Analytics breaks more often than redirects.
- Don't write rollback triggers as "if it goes badly." Specific symptoms, specific thresholds.
- Don't ignore external-link backlinks. The top 20 referring domains pointing at old URLs need outreach as part of the migration.

## Example

**Input (abbreviated):** Field & Sun. Re-platforming from Shopify (Sense theme) to Hydrogen for headless. ~250 URLs total. Target launch August 12 (off-peak — sun-care peak ends mid-July). 3-person team. Domain doesn't change; URL conventions stay the same; only the platform changes (so most URLs stay at the same path, which simplifies the redirect map dramatically).

**Output (abbreviated):**

Goal: replatform to Hydrogen so the marketing team can ship custom templates outside the Shopify Sense design constraints; target Aug 12, must be stable by Aug 26 (Labor Day promotion).

Scope: Platform Shopify → Hydrogen. Domain unchanged. URL conventions unchanged on most paths; clean-up opportunity to migrate `/blogs/news/<slug>` → `/blog/<slug>` (25 URLs). All collection and product URLs preserved.

Redirect strategy: single-shot. Site is small enough (~250 URLs) and most URLs are unchanged. Only the 25 blog URLs and 3 legacy press URLs need redirects.

Pre-migration baseline: GSC export, rank-tracker snapshot, sitemap snapshot, crawler export, internal-link inventory. Owners assigned, due dates T-3 to T-7.

QA gates: 9 gates including new URLs return 200, canonicals correct, schema validates, redirect map covers 28 changing URLs.

Launch-day sequence: 8 hours, smoke tests at T+1h, T+2h, T+24h.

Recovery monitoring: daily 1-7, every 2-3 days 8-30, weekly 30-90.

Rollback triggers: > 10% of priority URLs return 5xx; > 30% of top 50 keywords drop > 5 positions for > 48 hours.

Downstream systems: GA4 (Anna), Klaviyo (Anna), Google Ads (none currently — n/a), help-desk (Sam), external-link backlinks (top 20 list — outreach due T+7).

Documentation: migration entry to CLAUDE.md, day-30/60/90 deltas.

Risks: Hydrogen has no historical SEO baseline at Field & Sun (untested infrastructure); Yotpo widget integration must be re-validated post-launch; sun-care peak ends mid-July but heatwave events can extend it — verify with ops before locking Aug 12 date.

Saved to `businesses/field-and-sun/migration/plan.md`.
