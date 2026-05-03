# SEO Toolkit Skills

This folder is the distributable skill package for the SEO toolkit. The playbook explains the concepts; these `SKILL.md` files are the runnable workflows that plan, execute, audit, or track the work for a business workspace under `businesses/<slug>/`.

Skills are grouped by playbook category using registry-friendly folder slugs. Category names drop the repeated `SEO` suffix where it would add noise: `on-page`, `technical`, `content`, `off-page`, `international`, and `ai`.

## Setup

- **[generate-business-profile](generate-business-profile/SKILL.md)** — interviews the user, creates `businesses/<slug>/business_profile.md`, and drops the shared per-business `CLAUDE.md` working-memory file. Run this before topic skills if no business profile exists.

## Playbook Skills

### [Strategy](../playbook/01. Strategy/README.md)

#### [Keyword Research](../playbook/01. Strategy/01. Keyword Research/README.md)

- **[plan-keyword-research](strategy/plan-keyword-research/SKILL.md)** — scopes a keyword research project for your business: which seed lists to start from, which tools to use, what the deliverable should look like, and how long it should take.
- **[generate-seed-keywords](strategy/generate-seed-keywords/SKILL.md)** — produces an initial seed keyword list (50–100 candidates) from your business profile, ready to be expanded in your keyword tool of choice.

#### [Search Intent](../playbook/01. Strategy/02. Search Intent/README.md)

- **[classify-keyword-intent](strategy/classify-keyword-intent/SKILL.md)** — takes a keyword list and tags each entry with intent (informational / navigational / commercial / transactional / local), a recommended page type, and a confidence note. Flags mixed-intent queries that need a SERP look.

#### [Competitor Analysis](../playbook/01. Strategy/03. Competitor Analysis/README.md)

- **[scope-competitor-analysis](strategy/scope-competitor-analysis/SKILL.md)** — defines a competitor analysis project: which competitors to include, what to study, how deep, what the deliverable looks like.
- **[audit-competitor-seo](strategy/audit-competitor-seo/SKILL.md)** — analyses a single competitor URL or domain and produces a structured SEO gap report: keyword overlap, content patterns, link signals, and prioritised opportunities.

#### [Keyword Clustering](../playbook/01. Strategy/04. Keyword Clustering/README.md)

- **[cluster-keywords](strategy/cluster-keywords/SKILL.md)** — takes a classified keyword list (with intent and ideally page-type tags) and produces a structured cluster map: cluster ID, primary keyword, supporting keywords, page type, target URL, and priority — ready to drop into a content roadmap.

#### [SEO Wins](../playbook/01. Strategy/05. SEO Wins/README.md)

- **[build-seo-wins-backlog](strategy/build-seo-wins-backlog/SKILL.md)** — consolidates the outputs of keyword research, intent classification, competitor analysis, and clustering into a scored, sequenced wins backlog. Tags by archetype, applies ICE/RICE, defines "done" per win, and produces a 90-day sequence.

### [On-page](../playbook/02. On-page SEO/README.md)

#### [Title](../playbook/02. On-page SEO/01. Title/README.md)

- **[generate-title-tags](on-page/generate-title-tags/SKILL.md)** — takes a page URL (or proposed page), the target cluster, and the business profile; produces 4-6 scored title-tag variants with explicit reasoning, plus a recommendation. Optionally runs at list scale on a backlog of priority pages.

#### [Descriptions](../playbook/02. On-page SEO/02. Descriptions/README.md)

- **[generate-meta-descriptions](on-page/generate-meta-descriptions/SKILL.md)** — takes a page URL, target cluster, intent, and business profile; produces 3-4 scored description variants with reasoning and a recommendation. Runs at single-page or batch scale.

#### [Header Structure](../playbook/02. On-page SEO/03. Header Structure/README.md)

- **[audit-header-structure](on-page/audit-header-structure/SKILL.md)** — analyses a page's current H1/H2/H3 hierarchy, identifies structural issues (multiple H1s, skipped levels, stuffing), and proposes a restructured outline aligned to the page's target cluster, intent, and SERP.

#### [URL Structure](../playbook/02. On-page SEO/04. URL Structure/README.md)

- **[define-url-conventions](on-page/define-url-conventions/SKILL.md)** — produces a URL-structure convention document for the site: per page type, a pattern + 2-3 example URLs + edge-case notes. Use for new sites or new sections.
- **[audit-urls](on-page/audit-urls/SKILL.md)** — takes a list of existing URLs (from a sitemap, GSC export, or crawler), scores each against best practice and the site's conventions, and produces a prioritised migration list with old-URL → new-URL mappings and redirect notes.

#### [Internal Linking](../playbook/02. On-page SEO/05. Internal Linking/README.md)

- **[plan-internal-linking](on-page/plan-internal-linking/SKILL.md)** — designs a site-wide internal-linking strategy from the cluster map. Identifies pillars, spokes, the linking matrix between them, and the implementation sequence.
- **[audit-page-internal-links](on-page/audit-page-internal-links/SKILL.md)** — audits a single page's incoming and outgoing internal links: what anchor texts point at it, where it links to, what's missing relative to the cluster strategy. Produces a per-page action list.

#### [Image Optimization](../playbook/02. On-page SEO/06. Image Optimization/README.md)

- **[audit-images](on-page/audit-images/SKILL.md)** — analyses a page's images on six dimensions (alt text, file names, format, compression/dimensions, responsive serving, lazy-loading), produces a per-image action list, and identifies the LCP image so it doesn't get lazy-loaded by mistake. Runs at single-page or batch scale.

#### [Content Optimization](../playbook/02. On-page SEO/07. Content Optimization/README.md)

- **[optimize-page-content](on-page/optimize-page-content/SKILL.md)** — takes a page (URL + current content), the target cluster, the SERP context, and the business profile, and produces a structured rework plan: which sections to add/expand/cut, brand-distinct angles to introduce, format changes, E-E-A-T signal recommendations, and either a section-by-section outline or a draft rewrite (the user picks the depth of output).

### [Technical](../playbook/03. Technical SEO/README.md)

#### [Crawlability](../playbook/03. Technical SEO/01. Crawlability/README.md)

- **[audit-crawlability](technical/audit-crawlability/SKILL.md)** — analyses a list of URLs (from a crawler export or sitemap) for robots.txt blocking, meta robots / X-Robots-Tag directives, response codes, redirect chains, and crawl depth. Produces a prioritised remediation list grouped by issue type.

#### [Indexing](../playbook/03. Technical SEO/02. Indexing/README.md)

- **[audit-indexing-status](technical/audit-indexing-status/SKILL.md)** — analyses a GSC Pages report export (or pasted data), categorises URLs by exclusion reason, cross-references with the cluster map, and produces a prioritised remediation list grouped by action type. Distinguishes accidental from intentional exclusions.

#### [Site Speed](../playbook/03. Technical SEO/03. Site Speed/README.md)

- **[audit-core-web-vitals](technical/audit-core-web-vitals/SKILL.md)** — analyses one page's PageSpeed Insights results (lab + field) plus image inventory and third-party script list, identifies the LCP element, surfaces the highest-impact fixes for LCP/INP/CLS, and produces a prioritised remediation list with effort estimates and expected metric movement.

#### [Schema Markup](../playbook/03. Technical SEO/04. Schema Markup/README.md)

- **[plan-schema-strategy](technical/plan-schema-strategy/SKILL.md)** — produces a site-wide structured-data plan: which schema types per page type, which properties are mandatory vs nice-to-have, implementation approach (Liquid template vs app vs hand-coded), and a sequencing plan. Run this first before generating any specific schema.
- **[generate-schema-markup](technical/generate-schema-markup/SKILL.md)** — generates valid JSON-LD for a specific page (PDP, collection, blog post, FAQ, homepage), with all required properties populated from page data, recommended properties where the data supports it, and explicit validation steps before deploy.

#### [Canonical Tags](../playbook/03. Technical SEO/05. Canonical Tags/README.md)

- **[audit-canonical-tags](technical/audit-canonical-tags/SKILL.md)** — analyses canonical tags across a URL list (from a crawler export or sitemap), surfaces missing canonicals, conflicts (canonical vs sitemap vs internal links), bad targets (canonicals pointing to 404 / 301 / noindex), and pattern-level issues (parameter URLs, collection-prefixed duplicates). Produces a prioritised remediation list grouped by issue type.

#### [XML Sitemaps](../playbook/03. Technical SEO/06. XML Sitemaps/README.md)

- **[audit-xml-sitemap](technical/audit-xml-sitemap/SKILL.md)** — analyses the sitemap (or sitemap-index + child sitemaps) for non-canonical URLs, broken / `noindex` URLs, stale `lastmod`, missing canonical URLs, and sitemap-index structural issues. Cross-references with GSC Pages export, canonical-audit output, and URL-conventions doc when available. Produces a remediation list with template-level vs per-URL actions.

#### [JavaScript SEO](../playbook/03. Technical SEO/07. JavaScript SEO/README.md)

- **[audit-javascript-seo](technical/audit-javascript-seo/SKILL.md)** — analyses a page (or batch) for JavaScript rendering risks. Compares source HTML against rendered DOM (using user-supplied data from "View Source" + DevTools "Elements" panel, OR GSC URL Inspection's tested-page view). Identifies SEO-critical content that's only in the rendered DOM, audits internal links for real `<a href>` anchors, flags JS redirects, surfaces JS-injected widget content. Produces a prioritised remediation list with specific fixes per finding.

#### [Log File Analysis](../playbook/03. Technical SEO/08. Log File Analysis/README.md)

- **[analyse-log-files](technical/analyse-log-files/SKILL.md)** — takes a 30-90-day server access log export filtered for Googlebot, plus the site's URL inventory (sitemap + crawler export), and produces a structured analysis: crawl distribution by URL bucket, response-code distribution, orphan URLs, under-crawled URLs, crawl-budget waste estimates, and a prioritised remediation list.

#### [Site Migration](../playbook/03. Technical SEO/09. Site Migration/README.md)

- **[plan-site-migration](technical/plan-site-migration/SKILL.md)** — produces a written migration plan: scope (which URLs change, what type of migration), redirect strategy, pre-migration baseline checklist, sequencing (single-shot vs staged), QA gates, recovery monitoring schedule, rollback trigger definition, downstream-system update list, and post-migration documentation requirements. Run this first; the plan is the prerequisite to any other migration work.
- **[build-redirect-map](technical/build-redirect-map/SKILL.md)** — builds the operational old-URL → new-URL → 301 mapping. Inputs: full URL inventory (sitemap + crawler), the new URL convention or per-URL mapping rules, any existing redirect file. Outputs: the mapping table with chain-detection (no multi-hop), 200-validation status per new URL, batch order for staged rollout, and an implementation-ready file for the CMS or server.

#### [AI Crawler Management](../playbook/03. Technical SEO/10. AI Crawler Management/README.md)

- **[audit-ai-crawler-access](technical/audit-ai-crawler-access/SKILL.md)** — analyses the live `robots.txt`, `llms.txt`, and page-level AI directives against the major AI crawlers; surfaces gaps between declared posture and actual rules; produces a remediation list. Use to validate that what the team thinks the policy is matches what the server actually serves.
- **[generate-llms-txt](technical/generate-llms-txt/SKILL.md)** — produces a valid `/llms.txt` file (and optionally `/llms-full.txt`) from the business profile, sitemap, and curated key URLs. Outputs the file plus an implementation note. Use when the brand has decided on an open or visibility-only posture and wants LLMs to find a clean summary of the site.

### [Content](../playbook/04. Content SEO/README.md)

#### [Blog Content](../playbook/04. Content SEO/01. Blog Content/README.md)

- **[plan-blog-content](content/plan-blog-content/SKILL.md)** — produces a 30/60/90-day editorial calendar from the cluster map. Cross-references current blog inventory, surfaces coverage gaps, sequences posts by priority and seasonality, matches cadence to team capacity. Outputs the calendar plus per-post brief stubs that feed into `generate-content-brief`.

#### [Pillar Pages](../playbook/04. Content SEO/02. Pillar Pages/README.md)

- **[design-pillar-page](content/design-pillar-page/SKILL.md)** — produces a pillar-page brief: target primary keyword, scope, full H1+H2 outline, target word count, supporting-spoke list, brand-distinct angle, internal-link plan, schema strategy, and acceptance criteria. Output is the spec a writer (human or AI) can produce a draft against.

#### [Topic Clusters](../playbook/04. Content SEO/03. Topic Clusters/README.md)

- **[design-topic-cluster](content/design-topic-cluster/SKILL.md)** — converts a hub topic from the cluster map into a full pillar + spoke architecture. Identifies which spokes exist vs. need to be built, produces the bidirectional linking matrix, flags duplicate / overlapping spokes, and outputs the sequencing plan. The architectural counterpart to `design-pillar-page` (which designs only the pillar itself).

#### [Tools Content](../playbook/04. Content SEO/04. Tools Content/README.md)

- **[plan-tool-page](content/plan-tool-page/SKILL.md)** — evaluates whether a tool fits the brand and produces the design brief if so. Covers tool archetype, positioning, input / output logic, URL pattern, surrounding content, tech requirements, schema strategy, and link-acquisition plan. Output is the spec engineering + content can build against.

#### [Evergreen Content](../playbook/04. Content SEO/05. Evergreen Content/README.md)

- **[brief-evergreen-content](content/brief-evergreen-content/SKILL.md)** — produces the longevity-first content brief. Deeper than `generate-content-brief`: includes the longevity case (why this piece is durable), original-asset plan, expert-review plan, schema with `dateModified` discipline, refresh schedule, and 3-5-year compounding-traffic forecast. Output is the spec a writer + editor + designer can produce a high-investment anchor piece against.

#### [Programmatic SEO](../playbook/04. Content SEO/06. Programmatic SEO/README.md)

- **[plan-programmatic-seo](content/plan-programmatic-seo/SKILL.md)** — evaluates whether programmatic SEO fits the use case. Tests three viability gates (unique data, structured data, searcher intent), recommends archetype if viable, recommends against if not. Output is a go / no-go decision with reasoning, plus archetype recommendation if green-lit.
- **[design-programmatic-template](content/design-programmatic-template/SKILL.md)** — produces the template + data spec for an approved programmatic build. Covers URL pattern, template sections, per-slot data requirements, index-control rules, schema strategy, internal-link plan, and acceptance criteria. The handoff document for engineering.

#### [Content Refresh](../playbook/04. Content SEO/07. Content Refresh/README.md)

- **[plan-content-refresh](content/plan-content-refresh/SKILL.md)** — analyses existing content for refresh candidates and produces a prioritised refresh backlog. Pulls GSC data + cluster map + internal-link state, scores each post on the refresh matrix (decay × value × effort), recommends action per post (refresh / rewrite / replace / prune), and produces refresh briefs for P0 / P1 candidates. Output is the prioritised work list the content team executes against.

#### [Content Briefing](../playbook/04. Content SEO/08. Content Briefing/README.md)

- **[generate-content-brief](content/generate-content-brief/SKILL.md)** — produces a standard 2-page brief for a single blog post or short-form content piece. Pulls cluster context, SERP read, intent classification, outline, word count, brand-distinct angle, voice constraints, internal-link plan, schema requirements, and acceptance criteria. The universal foundation skill — every other Content SEO skill that produces "long-form content" expects this brief shape downstream.

### [Analytics](../playbook/05. Analytics/README.md)

#### [Google Analytics](../playbook/05. Analytics/01. Google Analytics/README.md)

- **[audit-ga4-setup](analytics/audit-ga4-setup/SKILL.md)** — produces a structured GA4 configuration audit covering property setup, events, conversions, audiences, ecommerce tracking, attribution model, retention, GSC integration, and Consent Mode. Output is a prioritised fix list with severity (P0 / P1 / P2) and effort estimates. The audit that should run before any GA4-based reporting is trusted.

#### [Search Console](../playbook/05. Analytics/02. Search Console/README.md)

- **[audit-search-console-setup](analytics/audit-search-console-setup/SKILL.md)** — produces a structured GSC configuration audit covering property type, sitemap submission, coverage status, enhancement reports, integrations, and access control. Output is a prioritised fix list. Should run before any GSC-based reporting is considered trustworthy. Quarterly cadence.
- **[analyse-search-performance](analytics/analyse-search-performance/SKILL.md)** — produces a structured GSC performance analysis: top queries by clicks / impressions / position, decline detection (queries / pages losing position), CTR-opportunity identification, query ↔ page intersection, cluster-level rollup. Output is the report stakeholders read; feeds Strategy + Content SEO refresh decisions.

#### [Rank Tracking](../playbook/05. Analytics/03. Rank Tracking/README.md)

- **[set-up-rank-tracking](analytics/set-up-rank-tracking/SKILL.md)** — produces a rank-tracking project spec: tool recommendation (matched to budget + use case), curated keyword set (pulled from cluster map and ranked by priority), competitor selection, geographic + device + cadence config, SERP-feature tracking plan, alert thresholds, dashboard design, and integration with the broader analytics stack. The setup brief that prevents "we have a tool but nobody uses it." Quarterly cadence to refresh the keyword set.

#### [Traffic Analysis](../playbook/05. Analytics/04. Traffic Analysis/README.md)

- **[analyse-traffic-patterns](analytics/analyse-traffic-patterns/SKILL.md)** — produces a structured QoQ traffic analysis covering channel mix, page-type rollup, cluster-level rollup, segmentation (mobile / desktop, new / returning, geo), funnel analysis, anomaly detection, and a prioritised action list. Output is the report stakeholders engage with — distinguishing analysis from dashboard. Quarterly cadence.

#### [KPI Tracking](../playbook/05. Analytics/05. KPI Tracking/README.md)

- **[define-seo-kpis](analytics/define-seo-kpis/SKILL.md)** — produces the SEO KPI definition: hierarchy (executive / operating / diagnostic), per-KPI definition + data source + target + owner, dashboard structure (Looker Studio), cadence proposal (weekly / monthly / quarterly), and re-calibration cadence. The artefact that turns "we should track SEO" into "we operate SEO from this dashboard." Annual cadence to refresh.

#### [Conversion Tracking](../playbook/05. Analytics/06. Conversion Tracking/README.md)

- **[audit-conversion-tracking](analytics/audit-conversion-tracking/SKILL.md)** — produces a structured conversion-tracking audit covering event implementation, conversion definitions, ecommerce parameters, attribution model, Consent Mode v2 (EU/UK), source-of-truth triangulation, cluster-attribution capability, and server-side tracking. Output is a prioritised fix list with severity, root cause, and effort estimates. The audit that should run before any SEO revenue claim is reported. Quarterly cadence.

### [Off-page](../playbook/06. Off-page SEO/README.md)

#### [Link Building](../playbook/06. Off-page SEO/01. Link Building/README.md)

- **[plan-link-building-campaign](off-page/plan-link-building-campaign/SKILL.md)** — strategic plan for a quarterly / annual link-building effort. Target assets (pillars / tools / evergreen / data), target sites (3-tier list by DR), tactical channels (PR / HARO / guest / broken-link / mention recovery), cadence, success metrics, and risk watchouts. The strategic anchor for the off-page programme; downstream tactical skills (digital PR, HARO, guest posting, broken-link, mention recovery) execute against this plan.

#### [Guest Posting](../playbook/06. Off-page SEO/02. Guest Posting/README.md)

- **[plan-guest-posting-campaign](off-page/plan-guest-posting-campaign/SKILL.md)** — produces a guest-posting campaign plan: target publications (Tier 1-3 with named editors / contributor pages), pitch angles (4-6 specific, original, timely), author byline strategy, pitch templates, cadence, yield tracking, and quality-filter criteria. Output is the operating brief for proactive guest-post outreach.

#### [Digital PR](../playbook/06. Off-page SEO/03. Digital PR/README.md)

- **[plan-digital-pr-campaign](off-page/plan-digital-pr-campaign/SKILL.md)** — produces a digital PR campaign plan covering angle archetype + newsworthiness validation, data plan (survey design / internal-data analysis / synthesis), asset list (report + summary + chart images + expert quotes + bio), target publication list (Tier 1-3 with named journalists), embargo strategy (exclusive vs. broad), pitch templates, follow-up cadence, success metrics, and risk forecast. Output is the operating brief for a 8-12-week campaign.

#### [Brand Mentions](../playbook/06. Off-page SEO/04. Brand Mentions/README.md)

- **[monitor-brand-mentions](off-page/monitor-brand-mentions/SKILL.md)** — produces a brand-mention monitoring + conversion plan covering tooling selection, alert keyword set, review cadence, quality filter, outreach template, sentiment-tracking schema, backfill plan (90-day historical), and conversion-rate targets. Output is the operating brief for the brand-mention programme. Annual cadence to refresh keywords as products / brand names evolve.

#### [Outreach](../playbook/06. Off-page SEO/05. Outreach/README.md)

- **[design-outreach-process](off-page/design-outreach-process/SKILL.md)** — produces the outreach operational blueprint: domain / authentication setup, ESP / tooling choice, sender warming plan, template library (PR / guest / mention-recovery / broken-link / HARO), CRM schema + tooling, follow-up cadence (Day 0 / 4 / 10 / 14), quality controls (pre-send review, response-rate monitoring, deliverability), and compliance checklist (GDPR / CAN-SPAM / PECR). Output is the operational manual that all tactical-channel skills consume. Annual cadence to refresh.

#### [HARO and Journalist Outreach](../playbook/06. Off-page SEO/06. HARO and Journalist Outreach/README.md)

- **[set-up-haro-response-system](off-page/set-up-haro-response-system/SKILL.md)** — produces the reactive-PR operational plan: platform selection (Connectively / Qwoted / Featured / ProfNet), email-monitoring + triage, filtering rules (topic / credential / publication-tier), response template library (5-8 templates), daily cadence, placement tracking, direct-journalist-watching extension, quarterly review schedule. Output is the operational system that produces 2-5 placements / month at minimal sustained effort.

#### [Broken Link Building](../playbook/06. Off-page SEO/07. Broken Link Building/README.md)

- **[plan-broken-link-campaign](off-page/plan-broken-link-campaign/SKILL.md)** — produces the broken-link prospecting + outreach plan: prospect categories (search queries that surface link-rich pages), tooling (Ahrefs / Semrush / Check My Links / Wayback), replacement-asset inventory, pitch template, cadence, conversion targets, quarterly review schedule. Output is the operational plan for a steady-yield off-page channel. Quarterly cadence to refresh prospect categories.

#### [Reputation Management](../playbook/06. Off-page SEO/08. Reputation Management/README.md)

- **[audit-branded-serp](off-page/audit-branded-serp/SKILL.md)** — produces a branded-SERP + reputation audit covering page 1 of "[brand]" search + variants ("reviews," "vs," "is X trustworthy," "complaints"), AI Overview / LLM probe (ChatGPT, Claude, Gemini, Perplexity), review-platform audit (Trustpilot, Google Reviews, Yelp, etc.), surface categorisation (Tier 1-4), defensive content gap identification, recommended actions (publish defensive pages, engage with reviews, AI-Overview shaping content), and quarterly cadence schedule with documented escalation paths. Output is the operating brief for the reputation programme. Quarterly cadence.

### [UX](../playbook/07. UX/README.md)

#### [Page Speed UX](../playbook/07. UX/01. Page Speed UX/README.md)

- **[audit-page-speed-ux](ux/audit-page-speed-ux/SKILL.md)** — produces a UX-focused page-speed audit covering field-data CWV, perceived-speed gaps (font swap, image swap, layout-shift below fold, sluggish nav animation, slow modal opens), interaction lag (CTAs, form fields, accordions), rage-click + dead-click patterns from session replay, mobile mid-tier network behaviour, and a prioritised remediation list with conversion-impact estimates. Output is the operational fix list for SEO-driven traffic. Quarterly cadence.

#### [Mobile Optimization](../playbook/07. UX/02. Mobile Optimization/README.md)

- **[audit-mobile-ux](ux/audit-mobile-ux/SKILL.md)** — produces a mobile UX audit covering touch-target compliance (44×44 minimum), viewport meta, responsive-layout integrity at 375px / 414px / 768px breakpoints, sticky / fixed-element overflow, mobile-form configuration (input types, autocomplete, sticky-keyboard behaviour), modal overflow, hover-state fallbacks, GSC mobile-usability findings, and session-replay friction patterns. Output is the prioritised remediation list with conversion-impact estimates. Quarterly cadence.

#### [UX Design](../playbook/07. UX/03. UX Design/README.md)

- **[review-ux-design-for-seo](ux/review-ux-design-for-seo/SKILL.md)** — produces a UX-design review of priority templates covering above-fold composition, headline-promise alignment, CTA hierarchy, IA + cluster-spoke linking, trust signals, intent match, form / interaction components, cross-page-flow design, and a prioritised remediation list with conversion-impact estimates. Output is the design-side fix list — distinct from page-speed (Technical-felt) and mobile (device-felt) audits in focusing on structural design choices.

#### [AB Testing](../playbook/07. UX/04. AB Testing/README.md)

- **[plan-ab-test](ux/plan-ab-test/SKILL.md)** — produces an A/B test plan covering hypothesis, variants, primary + secondary metrics, sample-size calculation (with MDE), significance threshold, SEO-safety review (no cloaking; canonical preserved), runtime estimate, decision rules (ship / kill / keep), and risks. Output is the operational test brief — the document the team uses to launch + run + decide. Use per-test (not as a quarterly cadence).

#### [Conversion Funnels](../playbook/07. UX/05. Conversion Funnels/README.md)

- **[analyse-conversion-funnel](ux/analyse-conversion-funnel/SKILL.md)** — produces a funnel diagnosis report covering stage-by-stage drop-off (organic-traffic isolated), cohort splits (mobile / desktop, new / returning, cluster, geo), anomaly detection (stage drops vs prior period), correlation with deploys / external events, leak hypotheses per anomalous stage, and routing to fix skills (UX design, mobile, page speed, conversion tracking). Output is the diagnostic + action plan. Quarterly cadence + ad-hoc on suspected anomalies.

#### [Accessibility](../playbook/07. UX/06. Accessibility/README.md)

- **[audit-accessibility](ux/audit-accessibility/SKILL.md)** — produces a WCAG 2.1 AA accessibility audit covering priority templates. Combines automated tool runs (Axe, WAVE, Lighthouse) with manual testing (keyboard navigation, screen-reader, zoom-to-200%, contrast spot-checks). Output is a prioritised remediation list with severity (critical / high / medium / low), WCAG criterion mapping per issue, fix recommendations, and legal-exposure assessment. Quarterly cadence.

### [International](../playbook/08. International SEO/README.md)

#### [Hreflang](../playbook/08. International SEO/01. Hreflang/README.md)

- **[audit-hreflang](international/audit-hreflang/SKILL.md)** — produces a Hreflang implementation audit covering syntax correctness, region / language code validity (especially `gb` vs `uk`), self-reference + return-tag completeness, x-default presence, canonical alignment, GSC International Targeting findings, and a prioritised remediation list. Output is the operational fix list for international Hreflang. Quarterly cadence.

#### [Multi Language](../playbook/08. International SEO/02. Multi Language/README.md)

- **[decide-multi-language-architecture](international/decide-multi-language-architecture/SKILL.md)** — produces the architectural decision document covering trade-off analysis (SEO equity inheritance, operational cost, geo-signal strength, brand integrity, CMS compatibility), market-specific norms, recommendation per market, and migration-cost forecast if change is implied. Output is the decision artefact stored in the per-business CLAUDE.md decisions log. Run before any multi-market expansion.

#### [Geo Targeting](../playbook/08. International SEO/03. Geo Targeting/README.md)

- **[plan-geo-targeting](international/plan-geo-targeting/SKILL.md)** — produces a geo-targeting strategy + audit covering Hreflang reinforcement, GSC International Targeting setting, server / CDN strategy, currency display, local content cues (phone / address / units / spelling), imagery, local backlink-strategy plan, and per-market signal-consistency check. Output is the per-market geo-signal plan with prioritised remediations. Quarterly cadence.

#### [Localization](../playbook/08. International SEO/04. Localization/README.md)

- **[plan-localisation](international/plan-localisation/SKILL.md)** — produces the per-market localization plan covering translation method (machine / machine+review / human / native-in-house), cultural adaptation strategy, regulatory + legal compliance per market (GDPR, Cookie Directive, EU Accessibility Act, country-specific), brand-voice variation guide, currency + pricing display, date / number formats, SEO-specific keyword research per market (don't translate keywords; research fresh), priority template sequence, quality-control plan (native-speaker review), and translation-memory strategy. Output is the operational plan that engineering, content, and legal can execute against. Run before launching new markets.

### [AI](../playbook/09. AI SEO/README.md)

#### [Content Optimization](../playbook/09. AI SEO/01. Content Optimization/README.md)

- **[audit-ai-content-readiness](ai/audit-ai-content-readiness/SKILL.md)** — audits a set of priority pages against the AI-citation patterns above (definitive opening, TL;DR, question-led H2s, source citations, freshness signals, entity proximity, paragraph length); produces a per-page prioritised rewrite list with severity and effort estimates. Use before rewriting; re-use as a quarterly content-health audit; bake the patterns into the brief template afterwards.

#### [NLP Optimization](../playbook/09. AI SEO/02. NLP Optimization/README.md)

- **[audit-entity-optimisation](ai/audit-entity-optimisation/SKILL.md)** — audits a topic cluster (or set of pages within one) for entity coverage, entity salience, schema-entity alignment, internal-linking, external authority signals, and knowledge-graph status; produces a prioritised remediation plan covering content, schema, internal-link, and knowledge-graph actions. Use cluster-by-cluster, quarterly cadence, or before launching a new pillar.

#### [Generative SEO](../playbook/09. AI SEO/03. Generative SEO/README.md)

- **[plan-generative-seo-strategy](ai/plan-generative-seo-strategy/SKILL.md)** — strategic plan for which queries / topics the brand should invest citation-magnet content against. Forces honest assessment of competitor citation share, defensible angle, and per-engine state. Output is a prioritised topic investment plan with rationale per pick. Use before any citation-magnet content investment; quarterly cadence per priority cluster.
- **[design-citation-magnet-content](ai/design-citation-magnet-content/SKILL.md)** — per-topic executor that produces a content brief specifically structured to earn AI citation: question framing, answer-block design, primary-evidence requirements, comparative structure, source citations, schema spec, internal-linking plan. Use after `plan-generative-seo-strategy` has identified the priority topic.

#### [SERP Features](../playbook/09. AI SEO/04. SERP Features/README.md)

- **[audit-serp-feature-opportunities](ai/audit-serp-feature-opportunities/SKILL.md)** — per-priority-keyword feature audit: maps current feature presence (featured snippet / PAA / AI Overview / image pack / video carousel / shopping pack / knowledge panel / FAQ rich result), assesses reachability per feature given current authority + content state, and produces a prioritised feature-by-feature plan with content / schema / structural requirements per pick. Use when launching a feature-capture program; quarterly cadence per priority cluster.

#### [LLM Visibility](../playbook/09. AI SEO/05. LLM Visibility/README.md)

- **[audit-llm-visibility](ai/audit-llm-visibility/SKILL.md)** — quarterly probe of ChatGPT search, Claude search, Perplexity, Gemini, and Google AI Overviews using a structured query set; captures brand-mention rate, citation link presence, mention quality (4-tier), sentiment, competitor share-of-voice, per-cluster and per-engine breakdowns; produces a longitudinal-trackable audit document with comparisons to prior baselines and recommendations for content / generative-SEO / NLP investment. Mandatory baseline before any AI SEO investment; quarterly cadence thereafter.

### [Growth](../playbook/10. Growth/README.md)

#### [Topical Authority](../playbook/10. Growth/01. Topical Authority/README.md)

- **[assess-topical-authority](growth/assess-topical-authority/SKILL.md)** — measures current topical authority per priority cluster across coverage breadth, depth, earned link profile, AI citation share, brand-query volume, entity-graph signals; identifies authority graveyards (skip) vs defensibility-real opportunities (invest); produces a multi-quarter investment plan to close the authority gap. Quarterly cadence per priority cluster; annual decision cadence.

#### [Content Scaling](../playbook/10. Growth/02. Content Scaling/README.md)

- **[plan-content-scaling-operation](growth/plan-content-scaling-operation/SKILL.md)** — audits current content production pipeline, identifies the actual bottleneck (usually not writer count), produces a scaling plan covering brief production, writer bench, editorial review, brand-voice review, technical SEO review, promotion bandwidth, refresh allocation, and cadence; estimates cost; sequences a 90-day rollout. Use before scaling content volume; quarterly cadence as the system matures; annual deep re-audit.

#### [Link Acquisition](../playbook/10. Growth/03. Link Acquisition/README.md)

- **[plan-link-magnet-strategy](growth/plan-link-magnet-strategy/SKILL.md)** — produces a quarterly link-magnet asset programme tied to the priority cluster(s); identifies 4-6 asset candidates across the defensibility ladder (original research, definitive guides, free tools, comparative resources, visual / data assets, curated lists); specs each asset (defensibility, production team, timeline, promotion plan, link target, measurement plan); sequences across the production calendar; estimates total cost; defines per-asset KPIs. Use quarterly per priority cluster; annual deeper re-baseline.

#### [SEO Experiments](../playbook/10. Growth/04. SEO Experiments/README.md)

- **[design-seo-experiment](growth/design-seo-experiment/SKILL.md)** — designs a structured SEO experiment with pre-registered hypothesis, variants, sample / scope, success and null criteria, confounder tracking plan, A/A reference plan, SEO-safety review, and pre-registered statistical guardrails. Output is the per-experiment brief that locks the design before launch. Use per experiment; cadence: 1-2 experiments per quarter.
