# CHANGELOG.md

> Decision log for the SEO toolkit. Maintained by any AI collaborator (Codex, Claude CoWork, etc.) and human contributors. Captures *why* decisions were made, not just what changed. Append new entries chronologically.
>
> **Format:** `### YYYY-MM-DD — title`
> Capture the decision, the reason, and what it means for future work. Keep entries terse — this is a why-log, not a task list.

---

### 2026-04-26 — Toolkit foundations and Strategy slice complete

- Decided format: README + 1-2 skills per leaf, parent README per category, examples lean D2C for v1, frameworks stay business-agnostic.
- Initial structure at the time: `templates/` for templates, `skills/` for setup utilities, `playbook/<category>/<topic>/skills/` for topic skills. Superseded on 2026-05-03 by the root distributable `skills/<category-slug>/<skill-name>/` package.
- Decided per-business workspace convention: `businesses/<slug>/` holds profile + artifacts; never store inputs/outputs at repo root.
- Decided front-door skill: `generate-business-profile` is the entry point and must run before any topic skill is usable.
- Decided audience: D2C-first examples, but architecture should support adding business types later via different profiles + example overrides.
- Strategy slice (5 leaves, 1 category overview, 7 skills) is the format reference for the remaining 9 categories.

### 2026-04-26 — Per-business CLAUDE.md introduced

- Decided every business workspace gets its own `CLAUDE.md` from `skills/generate-business-profile/templates/business_claude_template.md`.
- Decided `generate-business-profile` drops the stub on workspace creation; users don't have to remember.
- Decided per-business CLAUDE.md captures: decisions, learnings, constraints/quirks, active experiments — distinct from artifact files (which capture *what was produced*).

### 2026-04-30 — `docs/` renamed to `playbook/`

- Decided `docs/` was misleading (implies meta-documentation about the repo) and renamed to `playbook/`.
- All path references updated. Cross-links between leaves use relative paths so they survived transparently.
- New convention name pairs cleanly with `skills/` at root: the playbook tells you what to do; the skills do it.

### 2026-04-30 — On-page SEO category complete (Category 2 of 10)

- 1 category overview + 7 leaf READMEs + 9 skills shipped.
- Skill mix: 1 leaf has 2 skills (URL Structure: planner + executor; Internal Linking: planner + executor); 5 leaves have 1 executor each. URL Structure and Internal Linking warrant the planner because they're site-wide architectural decisions, not per-page operations.
- Established artifact subfolder names for this category: `titles/`, `descriptions/`, `headers/`, `urls/`, `internal-linking/`, `images/`, `content-optimization/`.
- Confirmed the format established in Strategy holds at scale across a 7-leaf category. No drift.
- Cross-category links going forward into Technical SEO, Content SEO, Analytics, UX, AI SEO are placeholders — they'll resolve once those categories are built. This is fine; relative paths work as the categories land.
- `.gitkeep` count: 53 (toolkit start) → 48 (after Strategy) → 41 (after On-page). 41 leaves remaining across 8 categories.

### 2026-05-01 — Field & Sun added as canonical sample business

- Decided to introduce a fictional sample business that ships with the toolkit and serves as the reference fixture for examples (Northwind / Adventure Works model).
- Brand: Field & Sun. D2C beauty. Two hero products: Daily Glow Serum (evergreen) and Mineral Sun Drops SPF 50 (seasonal). 6 complementary SKUs for AOV / loyalty.
- Lives at `businesses/field-and-sun/` with both `business_profile.md` and `CLAUDE.md` populated as worked examples (the CLAUDE.md shows what a healthy working-memory file looks like after a few months of real SEO work).
- All future examples in playbook content should reference Field & Sun.

### 2026-05-01 — Retroactive migration: Refillable Cleaning Co → Field & Sun

- Migrated all worked examples and inline references across the existing playbook content (Strategy slice + On-page SEO category + Technical SEO Crawlability/Indexing) from the earlier "Refillable Cleaning Co" fixture to Field & Sun.
- ~30 files touched. Worked-example narrative arcs were preserved (e.g. "page at position 14 → after rework → position 6"); only the specifics changed (laundry strips → mineral sunscreen content, Blueland → Supergoop, /collections/refillable-laundry → /collections/sun-care, etc.).
- Eliminated all founder-rejected language ("clean beauty," "non-toxic," "chemical-free," "plastic-free") from the playbook content. Brand-voice consistency now matches the profile's section 8.
- The "grandfathered fixture" phrasing previously in this CLAUDE.md is no longer accurate — the whole toolkit now references one fixture.

### 2026-05-01 — Curriculum scope review: 9 leaves added, 5 categories parked

- Reviewed the 10-category structure for completeness before scaling further. Outcome:
- **Parked as future categories** (see "Future categories under consideration" in AGENTS.md): Local SEO, E-commerce SEO as a dedicated category, Video / YouTube SEO, Newsletter, Podcast.
- **Site Migration** absorbed into Technical SEO as a leaf (`09. Site Migration`) rather than its own category. Reasoning: most teams need it once every 3-5 years; doesn't have category-level density.
- **Within-category leaves added** to fill gaps before the categories are built:
  - Technical SEO: `07. JavaScript SEO`, `08. Log File Analysis`, `09. Site Migration` (now 9 leaves total).
  - Content SEO: `08. Content Briefing` (now 8 leaves total).
  - Analytics: `06. Conversion Tracking` (covers attribution + conversion, now 6 leaves total).
  - Off-page SEO: `06. HARO and Journalist Outreach`, `07. Broken Link Building`, `08. Reputation Management` (now 8 leaves total).
  - UX: `06. Accessibility` (now 6 leaves total).
- All new leaves shipped as `.gitkeep` placeholders. `.gitkeep` count: 41 → 50.
- The 10-category structure is now considered v1-final. Don't add new categories or leaves without explicit user direction.

### 2026-05-01 — Categories renumbered to learning-path order

- Decided the canonical numbering should match the *operational sequence* (the suggested learning path) rather than a generic topical taxonomy. Reasoning: nobody learns SEO in topical order; the numbering should walk a reader from beginning to outcome.
- Renames: `07. Analytics` → `05. Analytics`; `05. Off-page SEO` → `06. Off-page SEO`; `08. UX` → `07. UX`; `06. International SEO` → `08. International SEO`. The other six categories kept their numbers.
- All cross-links in Strategy + On-page content updated via mass `sed` substitution. Root README's categories table and learning-path numbering both updated.

### 2026-05-01 — AGENTS.md becomes shared agent instructions

- Decided `AGENTS.md` is the canonical repo-level instruction file for both Codex and Claude CoWork.
- Root `CLAUDE.md` stays as a compatibility pointer so Claude workflows still find the same instructions.
- Per-business `CLAUDE.md` files stay under their existing filename for compatibility, but the content is shared working memory for any AI collaborator.

### 2026-05-01 — Example drift checks made explicit

- Added an "Example drift prevention" convention because category reviews kept finding small remnants of the earlier cleaning-brand fixture and literal rejected voice phrases.
- Future category work should include a stale-language scan before finishing, plus a profile read when creating new examples.
- Field & Sun remains the only canonical sample business for v1 examples; generic examples are allowed only as templates, not as alternate fictional brands.

### 2026-05-01 — Added 10. AI Crawler Management to Technical SEO

- Added a 10th leaf to Technical SEO covering AI-crawler access decisions (robots.txt for AI bots, `llms.txt` standard, `noai`/`noimageai` meta directives).
- 1 leaf README + 2 skills shipped: `audit-ai-crawler-access` (executor: validates declared posture against live robots.txt + llms.txt + meta) and `generate-llms-txt` (executor: produces curated `/llms.txt` aligned to the brand's content).
- Decision: AI-crawler decisions land in Technical SEO (infrastructure layer — robots.txt and root files). Content-side AI work (writing for citation, AI Overview eligibility, LLM visibility monitoring) stays in Category 9 AI SEO. Boundary: "can they reach you" is Technical; "are they citing you" is AI SEO.
- Three working postures named explicitly: open (allow all), visibility-only (allow retrieval, block training), strict-block (block all). The skills don't impose a posture — the founder chooses; the skills enforce.
- Technical SEO is now 10 leaves total, considered v1-final.

### 2026-05-01 — Technical SEO category complete (Category 3 of 10)

- 1 category overview + 9 leaf READMEs + 11 skills shipped.
- Skill mix: 7 leaves have 1 executor each (audit-style); 2 leaves have planner + executor (Schema Markup: `plan-schema-strategy` + `generate-schema-markup`; Site Migration: `plan-site-migration` + `build-redirect-map`). Schema and Migration earned the planner because they're strategic / project-level, not per-page operations.
- Established artifact subfolder names for this category: `crawlability/`, `indexing/`, `site-speed/`, `schema/`, `canonicals/`, `sitemaps/`, `javascript-seo/`, `log-analysis/`, `migration/`.
- Two leaves explicitly call out platform-applicability boundaries — JavaScript SEO doesn't apply to default Shopify (server-rendered); Log File Analysis doesn't apply to platforms without log access (Shopify, Webflow). The skills' "When NOT to use this skill" sections protect against running them in the wrong context.
- Format from Strategy + On-page held cleanly across 9 leaves. Cross-references are denser in this category — the auditing skills cite each other heavily (canonical / sitemap / indexing audit findings often feed each other) and forward-link to migration as the high-stakes event. This is healthy and matches the way real technical-SEO work happens.
- `.gitkeep` count: 50 (post-On-page) → 41 (after Technical). 41 leaves remaining across 7 categories.

### 2026-05-01 — Content SEO category complete (Category 4 of 10)

- 1 category overview + 8 leaf READMEs + 9 skills shipped.
- Skill mix: 7 leaves have 1 skill (planner or executor depending on shape); 1 leaf (Programmatic SEO) has 2 skills (`plan-programmatic-seo` evaluator + `design-programmatic-template` executor) because programmatic uniquely warrants a hard go/no-go gate before template design.
- Established artifact subfolder names for this category: `editorial-calendar/`, `pillars/`, `topic-clusters/`, `tools/`, `evergreen/`, `programmatic/`, `refresh/`, `briefs/`.
- `08. Content Briefing` (`generate-content-brief`) is the universal foundation — Pillar / Topic Cluster / Tool / Evergreen / Refresh briefs are all longer-form siblings of the same shape. Reinforces that briefs are the bottleneck across content types, not blog-only.
- `06. Programmatic SEO` is the only leaf in v1 that explicitly may red-light a request. The evaluator skill is conservative by design (programmatic is the highest-downside content investment), and `design-programmatic-template` requires a green-lit evaluation as its input. Pattern worth replicating where downside risk is severe (future categories: paid-media-adjacent, structured data at scale).
- Cross-references are dense within this category (cluster ↔ pillar ↔ blog ↔ briefing all interlock) and outward to On-page (URL conventions, internal linking) and Technical SEO (schema, indexation, sitemaps). This matches how real content-led SEO work flows.
- `.gitkeep` count: 41 (post-Technical) → 33 (after Content SEO). 33 leaves remaining across 6 categories.

### 2026-05-01 — Analytics category complete (Category 5 of 10)

- 1 category overview + 6 leaf READMEs + 7 skills shipped.
- Skill mix: 5 leaves with 1 skill each; 1 leaf (Search Console) has 2 skills (`audit-search-console-setup` for configuration + `analyse-search-performance` for query / page performance analysis) because GSC has both setup-audit and analysis surface area distinctly worth their own skill. The pattern matches what we did for Schema Markup and Site Migration in Technical SEO.
- Established artifact subfolder names for this category: `analytics/` (single shared subfolder; per-skill outputs use date-stamped filenames like `ga4-audit-2026-05-01.md`, `gsc-performance-2026-05-01.md`, `traffic-analysis-2026-05-01.md`, `seo-kpis-2026.md`).
- Three audit skills (`audit-ga4-setup`, `audit-search-console-setup`, `audit-conversion-tracking`) all use the same P0 / P1 / P2 severity grammar with root-cause / impact / fix / effort / verification per finding. Pattern is portable to future audit-shaped skills.
- Triangulation as a quality bar: every audit + analysis skill explicitly compares GA4 vs source-of-truth (Shopify / payment processor / CRM), with ≤5% acceptable / 5-10% investigate / >10% likely measurement issue.
- Cadence is named explicitly: weekly (15-30 min) + monthly (60-90 min) + quarterly (3-4 hr) + annual (half-day). Skills feed into the cadence rather than producing one-off outputs.
- `.gitkeep` count: 33 (post-Content SEO) → 27 (after Analytics). 27 leaves remaining across 5 categories.

### 2026-05-01 — Off-page SEO category complete (Category 6 of 10)

- 1 category overview + 8 leaf READMEs + 8 skills shipped.
- Skill mix: 8 leaves with 1 skill each; the discipline is operational rather than per-page, so each leaf's single skill is the right shape (planner-style for most; design-process style for `design-outreach-process`).
- Established artifact subfolder names for this category: `off-page/` (single shared subfolder; outputs use slug-stamped filenames like `link-building-plan-2026-Q2.md`, `digital-pr-2026-sun-care-habits.md`, `outreach-manual.md`, `branded-serp-audit-2026-05-01.md`).
- Off-page is unique among shipped categories in that the *operational* layer (`05. Outreach`) explicitly underpins every other tactical leaf — link building, guest posting, PR, mention recovery, HARO, broken-link all consume the outreach manual. Captured this dependency explicitly in the category overview's workflow.
- Risk-aware shape across all 8 skills: every skill includes a "what could go wrong" section flagging sender-reputation, deliverability, anchor-text-over-optimisation, scale-ceiling, and platform-dependence risks. Off-page has more downside risk than other categories (paid links / PBNs / spam volume can trigger penalties); skills explicitly forbid those patterns.
- Branded SERP / reputation work explicitly includes AI Overview / LLM probing as a 2026-shaped responsibility.
- `.gitkeep` count: 27 (post-Analytics) → 19 (after Off-page). 19 leaves remaining across 4 categories.

### 2026-05-01 — UX category complete (Category 7 of 10)

- 1 category overview + 6 leaf READMEs + 6 skills shipped.
- Skill mix: 6 leaves with 1 skill each — most are audits / design-reviews. The `plan-ab-test` skill is per-test (used per candidate test, not as a quarterly cadence) — distinct usage pattern from the other audit skills.
- Established artifact subfolder names for this category: `ux/` (single shared subfolder; outputs date-stamped or test-slug-stamped: `page-speed-ux-audit-*.md`, `mobile-ux-audit-*.md`, `ux-design-review-*.md`, `ab-test-*.md`, `conversion-funnel-diagnosis-*.md`, `accessibility-audit-*.md`).
- Distinguished from Technical SEO's overlapping leaves (Site Speed, Indexing) by operating mode: Technical SEO chases ranking thresholds; UX chases felt experience + conversion.
- The `audit-accessibility` skill includes legal-exposure framing (ADA / EU Accessibility Act) — a category-specific responsibility distinct from the other audit skills.
- The `analyse-conversion-funnel` skill explicitly routes findings to specific fix skills (UX design, mobile, page speed, conversion tracking) rather than producing generic recommendations. This routing pattern is portable to future diagnostic skills.
- The `plan-ab-test` skill includes pre-registration discipline (sample size locked before launch; no mid-test peeking) + A/A instrumentation check + SEO-safety review.
- `.gitkeep` count: 19 (post-Off-page) → 13 (after UX). 13 leaves remaining across 3 categories.

### 2026-05-01 — International SEO category complete (Category 8 of 10)

- 1 category overview + 4 leaf READMEs + 4 skills shipped.
- Skill mix: 4 leaves with 1 skill each. Three are audits / planners; one (`decide-multi-language-architecture`) is a strategic decision document with hard-to-reverse implications worth its own deliberation.
- Established artifact subfolder names for this category: `international/` (single shared subfolder; outputs date-stamped: `hreflang-audit-*.md`, `architecture-decision-*.md`, `geo-targeting-plan-*.md`, `localisation-plan-*.md`).
- Smallest category to date (4 leaves vs 6-8 in others). Reflects the narrower scope: international SEO matters when multi-market expansion is in play; not every brand needs all four leaves immediately.
- The `audit-hreflang` skill explicitly catches the most-common implementation error (`uk` instead of `gb` for the UK).
- The `decide-multi-language-architecture` skill is the first in the toolkit that explicitly produces a "hard to reverse" decision artefact stored in the per-business CLAUDE.md decisions log. The pattern (subdirectory > subdomain / ccTLD as starting recommendation; ccTLD migration staged in selectively) reflects practitioner consensus.
- The `plan-localisation` skill includes regulatory framing per market (GDPR, Cookie Directive, EU Accessibility Act, Toubon Law in France, Verbraucherschutz in Germany, Italian VAT display, UK GDPR post-Brexit).
- `.gitkeep` count: 13 (post-UX) → 9 (after International SEO). 9 leaves remaining across 2 categories (AI SEO 5 + Growth 4).

### 2026-05-02 — AI SEO category complete (Category 9 of 10)

- 1 category overview + 5 leaf READMEs + 6 skills shipped.
- Skill mix: 4 leaves with 1 skill each; 1 leaf (Generative SEO) with 2 skills (`plan-generative-seo-strategy` planner + `design-citation-magnet-content` executor). The planner / executor pair on Generative SEO mirrors the Programmatic SEO precedent in Content SEO — citation-magnet content is high downside risk if invested without a strategic plan; the planner is conservative by design and the executor refuses to brief topics that haven't been strategically vetted.
- Established artifact subfolder name for this category: `ai-seo/` (single shared subfolder; outputs date-stamped or cluster-stamped: `ai-content-readiness-audit-*.md`, `entity-optimisation-audit-*.md`, `generative-seo-strategy-*.md`, `citation-magnet-*.md`, `serp-features-audit-*.md`, `llm-visibility-audit-*.md`).
- Boundary with Technical SEO leaf 10 (AI Crawler Management) restated explicitly in the category overview: "can they reach you" is Technical; "are they citing you" is AI SEO. Both layers required; one without the other is incomplete.
- LLM Visibility (`audit-llm-visibility`) is named as the mandatory baseline before any AI SEO investment + the input to the strategic planner. Cadence: quarterly. Stochasticity caveats explicit (2-3 samples per query; clean / fresh sessions; per-engine reporting; quality + sentiment dimensions; competitor share-of-voice paired with mention rate).
- Generative SEO planner is opinionated about publisher-vs-brand citation territory: Wirecutter / Strategist / Byrdie / Refinery29 own commercial-review citation territory; D2C brands win on angle (original evidence, ingredient depth, founder expertise, primary research, customer-evidence library) or they don't win at all.
- The `design-citation-magnet-content` executor refuses to proceed without a green-lit strategic plan. Reinforces the gating pattern from Programmatic SEO.
- Brand voice constraints from Field & Sun's profile section 8 are non-negotiable in every skill in this category — citation polish does not override editorial guardrails.
- Tooling-aware shape on the LLM visibility skill: manual probing (browser + spreadsheet) for first audit; tool category named (Profound, Goodie, Otterly.AI, Peec.ai, Brandy, AI Brand Rank) for scaling; explicit caveat that the vendor landscape is volatile and recommendations should be verified at audit time.
- `.gitkeep` count: 9 (post-International) → 4 (after AI SEO). 4 leaves remaining across 1 category (Growth).

### 2026-05-02 — Growth category complete (Category 10 of 10) — v1 toolkit complete

- 1 category overview + 4 leaf READMEs + 4 skills shipped.
- Skill mix: 4 leaves with 1 skill each. The category is operational / strategic rather than per-asset, so single-skill-per-leaf matches the shape (each skill is a planner / assessment / design output rather than a per-page executor).
- Established artifact subfolder name for this category: `growth/` (single shared subfolder; outputs date-stamped or experiment-slug-stamped: `topical-authority-assessment-*.md`, `content-scaling-plan-*.md`, `link-magnet-strategy-*.md`, `seo-experiment-*.md`).
- Boundaries with adjacent categories restated explicitly throughout the category overview and leaf READMEs:
  - Topical Authority (Growth) vs Pillar Pages (Content SEO leaf 02): Pillars are the artifact; Topical Authority is the multi-year compounding outcome.
  - Content Scaling (Growth) vs Content Briefing (Content SEO leaf 08): Briefing is the artifact-level technique; Scaling is the operational system that produces briefs at volume + quality.
  - Link Acquisition (Growth) vs Link Building (Off-page leaf 01): Link Building is tactical / per-prospect outreach; Link Acquisition is the strategic / asset-driven / programmatic layer that feeds outreach.
  - SEO Experiments (Growth) vs A/B Testing (UX leaf 04): UX A/B is conversion-focused; SEO Experiments are ranking / citation / feature-focused, with split-pages variant design + 30-90 day windows + SEO-safety review.
- The category is positioned as the *compounding-growth* layer — the layer that kicks in once Strategy / On-page / Technical / Content / Analytics / Off-page / UX / International / AI SEO are operational and the question shifts from "are we doing SEO correctly" to "are we compounding."
- `assess-topical-authority` is the integrating skill of the category — its output flows into `plan-content-scaling-operation`, `plan-link-magnet-strategy`, and `design-seo-experiment`.
- `assess-topical-authority` introduces the **authority-graveyard check** as a mandatory step — clusters dominated by Wikipedia / Wirecutter / Strategist / Healthline / Verywell are skip-by-default unless defensibility is exceptional.
- `assess-topical-authority` introduces the **defensibility test** as a hard gate: generic claims ("good ingredients," "customer love") fail; specific levers (named original evidence, named credentials, named primary research) pass. Without a passing defensibility lever, the assessment recommends skip rather than invest.
- `plan-content-scaling-operation` is opinionated about where teams over-invest (writer count) vs under-invest (briefs, editorial review, brand-voice review as a standalone stage, technical SEO review as a standalone stage, promotion bandwidth, refresh allocation). Real-world cost ratio named: ~4-5x current spend for ~3-4x volume + dramatic quality upgrade.
- `plan-link-magnet-strategy` is opinionated about the **defensibility ladder** — original research / primary data > definitive guides > free tools > comparative resources > visual / data assets > curated lists. Listicles and thin assets are explicitly off the table. Anti-patterns (paid links, PBNs, link exchanges, scaled guest posting, comment-stuffing) are explicitly forbidden.
- `design-seo-experiment` introduces the **pre-registration discipline** as non-negotiable: hypothesis tightening, pre-registered success / null / inconclusive criteria, A/A reference for baseline variance, split-pages variant design (not split-traffic), confounder tracking, SEO-safety review, rollback plan, and standards-update-path. Null results are wins.
- `.gitkeep` count: 4 (post-AI SEO) → 0 (after Growth). **v1 toolkit complete.**

### 2026-05-02 — v1 final inventory and structural complete

- **Categories:** 10 (Strategy, On-page SEO, Technical SEO, Content SEO, Analytics, Off-page SEO, UX, International SEO, AI SEO, Growth).
- **Leaves:** 63 across the 10 categories.
- **Category overview READMEs:** 10.
- **Leaf READMEs:** 63.
- **Playbook skills:** 73.
- **Repo-level setup skills:** 1 (`generate-business-profile`).
- **Total skills:** 74.
- **Templates:** README and SKILL authoring templates in root `templates/`; business profile and business CLAUDE runtime templates now live inside `skills/generate-business-profile/templates/`.
- **Sample business:** Field & Sun (canonical fixture; lives at `businesses/field-and-sun/` with profile + CLAUDE.md as worked examples).
- **`.gitkeep` files:** 0. No empty leaves.
- The toolkit is structurally v1-final. Future work splits into three buckets:
  1. **Maintenance.** Periodic re-validation of cross-references; stale-language scans on any updates; voice-rubric updates when Field & Sun profile evolves; tooling-vendor references are time-sensitive (especially LLM-visibility tools, AI-crawler user-agents, schema patterns) — verify at use time.
  2. **Depth additions within v1 categories.** A few leaves could warrant a second skill in v1.5. Treat as additive within existing structure; don't add new leaves without explicit user direction.
  3. **Parked categories** (see "Future categories under consideration" in AGENTS.md): Local SEO; E-commerce SEO as dedicated category; Video / YouTube SEO; Newsletter SEO; Podcast SEO.

### 2026-05-03 — Playbook skills moved into distributable root package

- Moved all topic-specific skills out of `playbook/<category>/<topic>/skills/` and into root `skills/<category-slug>/<skill-name>/SKILL.md`.
- Category slugs are registry-friendly and drop the repeated SEO suffix: `strategy`, `on-page`, `technical`, `content`, `analytics`, `off-page`, `ux`, `international`, `ai`, `growth`.
- Added `skills/README.md` as the master skill catalogue for registry distribution. It groups skills by playbook category / leaf and links back to the playbook pages.
- Playbook READMEs now remain the curriculum layer and link outward to root skills. Do not recreate leaf-local `skills/` folders.

### 2026-05-03 — Playbook leaf folders flattened into Markdown pages

- Flattened all playbook leaves from `playbook/<category>/<leaf>/README.md` to `playbook/<category>/<NN>. <Leaf>.md`.
- Category folders now contain exactly one `README.md` overview plus sibling leaf Markdown pages. No per-leaf folders remain.
- Skills category READMEs and all playbook cross-links now point to the flattened leaf pages.
- Future leaves should be created as direct Markdown pages in the category folder, not as folders with nested READMEs.

### 2026-05-03 — Business templates moved into generate-business-profile

- Moved `business_profile_template.md` and `business_claude_template.md` out of root `templates/` and into `skills/generate-business-profile/templates/`.
- Reason: these are runtime dependencies of the setup skill, not general toolkit-authoring templates. Keeping them inside the skill makes the distributable skills package self-contained.
- Root `templates/` now contains only authoring templates for toolkit pages and skills.

### 2026-05-04 — Cross-link URL encoding standardised to %20

- Audited all 85 Markdown files across `playbook/` and `skills/` and found mixed encoding: some links used `%20`, others used literal spaces. GitHub breaks on literal spaces.
- Mass-fixed all 85 affected files so every relative path uses `%20` for spaces consistently.
- Added encoding rule to "File naming and slugs" convention in AGENTS.md so future linking follows the same standard without needing another audit.

### 2026-05-04 — Decisions log split into CHANGELOG.md

- Moved the Decisions log section out of AGENTS.md and into this file (CHANGELOG.md).
- Reason: AGENTS.md is instruction-heavy and the log was growing long enough to crowd out the conventions. Separating them keeps AGENTS.md focused on what to do and CHANGELOG.md focused on why decisions were made.
- AGENTS.md now contains a pointer to this file in place of the log. Future entries go here, not in AGENTS.md.
