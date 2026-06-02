---
name: design-seo-experiment
description: Designs a structured SEO experiment: hypothesis, test pages, variant, measurement window, and success criteria. Use to validate an SEO change before rolling it out site-wide.
---

# Design SEO Experiment

This skill produces a per-experiment brief that locks pre-registration before launch. Output is opinionated about what makes an SEO experiment rigorous: pre-registered hypothesis + criteria, matched split-pages variant design, sample size grounded in baseline variance, confounders tracked, SEO-safety review, null results accepted, and a documented standards-update path post-experiment.

The skill is opinionated: pre-registration is non-negotiable; split-pages with matched controls (not split-traffic) is the SEO-experiment shape; A/A reference establishes baseline variance; sample size matters; 30-90 day duration depending on metric; confounders must be tracked; null results are wins; every outcome updates an artifact; SEO-safety review pre-launch; rollback plan locked.

## When to use this skill

- The user wants to test an SEO intervention before rolling it out broadly.
- Quarterly experiment cadence (1-2 per quarter).
- The team has a hypothesis and wants to validate / falsify rigorously.
- Pre-launch design phase of an experiment.

## When NOT to use this skill

- The user wants UX A/B testing — use UX leaf 04 `plan-ab-test`.
- The user wants to plan content / link strategy — use `assess-topical-authority`, `plan-content-scaling-operation`, `plan-link-magnet-strategy`.
- The user wants to design citation-magnet content — use `design-citation-magnet-content` (AI SEO leaf 03).
- The user wants to audit existing content — use the AI SEO + Technical SEO audit skills.
- The user has no baseline measurement infrastructure (rank tracker, GSC, GA4) — recommend setting that up first.

## Inputs required

1. **Business context and SEO foundation** — read `businesses/<slug>/business_context.md` and, for SEO-specific work, `businesses/<slug>/seo_foundation.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-context` first. If SEO foundation is missing, recommend running `seo-foundation` before producing output. Sections this skill cares about most: 5 (current SEO state — for baseline metrics), 7 (constraints — informs feasible experiment scope).
2. **Experiment candidate / hypothesis** — required. The intervention being tested + the team's hypothesis. The skill will tighten the phrasing, but the hypothesis itself comes from the user.
3. **Available pages / sample frame** — required. Which pages are candidates for treatment + control? Need access to enough pages to meet sample size requirements.
4. **Baseline metric data** — required. Current performance on the metric (CTR, ranking, citation rate, traffic) for the candidate pages over a relevant pre-experiment window. Used for matching + variance estimation.
5. **Measurement infrastructure** — required. Rank tracker access, GSC access, GA4 access, AI citation tracking (`audit-llm-visibility`) — depending on the metric.
6. **Recent algorithm-update / cluster-launch awareness** — required. Confounder check needs awareness of upcoming or recent events.
7. **Rollback feasibility** — required. Can the treatment be rolled back if SEO-safety review surfaces a problem mid-experiment?

If hypothesis or sample frame is missing, ask before designing.

## Process

1. **Tighten the hypothesis.**
   - Vague: "Adding TL;DR improves AI citation."
   - Tight: "Adding a TL;DR block (3-5 bullets, immediately under H1) to long-form blog posts (>1,500 words; n=20) lifts AI Overview / Perplexity citation rate on the posts' priority queries by ≥10 percentage points over 60 days."
   - Tight hypotheses are testable; vague hypotheses are post-hoc rationalisable.
2. **Define the variants.**
   - **Treatment:** specific intervention; replicable spec.
   - **Control:** matched pages without the intervention (or original / pre-treatment state).
   - **Variant difference:** isolated to the intervention; no other changes simultaneously.
3. **Define the sample frame.**
   - Treatment sample: which pages get the treatment.
   - Control sample: matched pages without the treatment.
   - **Matching criteria:** product category / topic / cluster, traffic volume range, page age, content type, query intent, ranking range.
   - **Sample size:** depends on baseline metric variance and desired effect-size detection. Ranges:
     - Ranking change experiments: 20+ pages per arm typical.
     - CTR change on already-ranking pages: 10-20 typical.
     - Cluster-level traffic: weeks of post-treatment data; cluster-level matching by intent.
     - AI citation rate: 15-30 pages per arm typical (volatile metric).
4. **Run an A/A reference check.**
   - Pre-experiment window: how much variance does the metric show within control alone?
   - Establishes the noise floor — effect must exceed A/A variance to be considered significant.
5. **Pre-register the success and null criteria.**
   - **Success:** specific threshold the metric must clear (relative to control + A/A variance) to call the experiment a success.
   - **Null:** specific threshold below which result is null. Pattern does not get added to standards.
   - **Inconclusive:** zone between success and null where the test is repeated or re-scoped.
6. **Define duration.**
   - 30 days: short (CTR-only on already-ranking pages where re-crawl is fast).
   - 60 days: standard (most ranking + citation experiments).
   - 90+ days: long (cluster-level traffic; site-wide template changes; entity-graph signals).
7. **Track confounders.**
   - **Algorithm updates:** known upcoming + recent past in the window.
   - **Competitor moves:** track top-3 cluster competitors for major content launches.
   - **Seasonal patterns:** is the window seasonally distorted?
   - **Internal launches:** any other interventions in the cluster during the window?
   - Plan: log confounders at start of experiment; flag any falling during the window; make extension / invalidation call.
8. **SEO-safety review.**
   - **No critical-page-only treatment** (don't test on the homepage / top revenue PDP without rollback plan).
   - **No canonical / index / URL changes** (these are not experiment fodder; they're projects).
   - **No de-indexing** as part of treatment.
   - **Rollback plan:** treatment can be removed within hours if SEO-safety surfaces an issue.
   - **Sentinel pages:** monitor a small set of treated pages for ranking drops at 7 / 14 / 30 days; abort if material drop.
9. **Document the measurement plan.**
   - Per metric: source (GSC / Ahrefs / GA4 / `audit-llm-visibility`); aggregation method; reporting frequency.
   - Pre-registered: which metric is the primary outcome (single primary; secondary metrics named but not used to override the primary).
10. **Document the standards-update path.**
    - If success: which artifact updates? (Brief template; technical SEO checklist; voice rubric; standards doc.)
    - If null: which artifact updates? (Often: "do not add this pattern" note; sometimes: brief template explicitly rejects.)
    - If inconclusive: when / how is the experiment repeated?
11. **Write the brief.**

## Output format

```markdown
# SEO Experiment — [Experiment name]

**Pre-registration date:** [date — locked at design]
**Owner:** [name / role]
**Cluster / scope:** [cluster or site area]

## Hypothesis (tight)
[One specific, testable sentence. Example: "Adding a TL;DR block (3-5 bullets, immediately under H1) to long-form blog posts (>1,500 words; n=20) lifts AI Overview / Perplexity citation rate on the posts' priority queries by ≥10 percentage points over 60 days."]

## Variants
- **Treatment:** [specific intervention spec; replicable]
- **Control:** [matched pages without the intervention]
- **Variant difference:** [single isolated change]

## Sample frame
- **Treatment sample:** [n] pages. List below.
- **Control sample:** [n] matched pages. List below.
- **Matching criteria:**
  - Product category / topic / cluster: [criterion]
  - Traffic volume range: [criterion]
  - Page age: [criterion]
  - Content type: [criterion]
  - Query intent: [criterion]
  - Ranking range: [criterion]

| # | Treatment URL | Matched control URL |
|---|---------------|----------------------|
| 1 | ... | ... |
| 2 | ... | ... |
| ... | ... | ... |

## A/A reference
- **Pre-experiment window:** [dates]
- **Metric variance within control alone:** [± n percentage points or ± n%]
- **Noise floor for significance:** effect must exceed [n] over [n] days to be considered significant.

## Pre-registered success criteria (PRIMARY METRIC)
- **Primary metric:** [metric name + aggregation]
- **Source:** [GSC / Ahrefs / GA4 / `audit-llm-visibility` / etc.]
- **Success threshold:** [specific lift over control, exceeding A/A variance]
- **Window:** [duration post-launch]

## Pre-registered null criteria
- **Null threshold:** [specific threshold below which result is null]
- **Action on null:** [pattern does not get added to brief / standards; or pattern explicitly excluded]

## Pre-registered inconclusive zone
- **Range:** [between null and success]
- **Action on inconclusive:** [repeat experiment with larger sample; re-scope; defer]

## Secondary metrics (for context only — do not override primary)
| Metric | Source | Direction expected |
|--------|--------|---------------------|
| [metric] | [source] | [up / flat / down] |
| ... | ... | ... |

## Duration
- **Pre-launch baseline window:** [dates]
- **Treatment ship date:** [date]
- **Measurement window:** [date] to [date]
- **Decision date:** [date]

## Confounder tracking
| Confounder | Status at launch | Re-check at 30/60 days | Action if confounded |
|------------|-------------------|--------------------------|------------------------|
| Algorithm updates | [known upcoming / past] | [check] | [extend / invalidate] |
| Competitor moves | [baseline] | [track] | [adjust analysis] |
| Seasonal patterns | [in / out of season] | [account] | [extend / control for] |
| Internal launches | [none / list] | [track] | [adjust analysis] |

## SEO-safety review
- [ ] No canonical / index / URL changes in treatment.
- [ ] No de-indexing in treatment.
- [ ] No critical-page-only treatment (homepage / top revenue PDP).
- [ ] Rollback plan defined and feasible within hours.
- [ ] Sentinel pages identified for ranking-drop monitoring at 7 / 14 / 30 days.
- [ ] Treatment is reversible without permanent damage.

## Rollback plan
- **Trigger conditions:** [specific ranking-drop / traffic-drop thresholds for treated pages]
- **Rollback action:** [revert treatment; restore prior state]
- **Time-to-rollback:** [hours]
- **Rollback owner:** [name]

## Measurement plan
- **Primary metric tracking:** [source, frequency, aggregation]
- **Per-page tracking:** [yes / no; tooling]
- **Reporting cadence:** [weekly / bi-weekly]

## Standards-update path (post-experiment)
| Outcome | Artifact updated | What changes |
|---------|------------------|--------------|
| Success | Brief template | TL;DR block required on long-form posts |
| Success | Technical SEO checklist | TL;DR check added to pre-publish review |
| Null | Brief template | Note: "TL;DR not required — tested in [date]; null result on AI citation lift in our context" |
| Inconclusive | Re-experiment plan | Repeat with larger sample in [next quarter] |

## Risks + watchouts
3-5 specific risks. E.g. "60-day window includes the typical Google quality-update cadence — track and consider extending if an update lands"; "AI citation rate is volatile metric — variance can be high; consider larger sample (30+ per arm) if A/A check shows wide variance"; "Treatment requires writer time to add TL;DRs to 20 pages — ensure capacity budgeted (cross-reference Growth leaf 02 scaling plan); incomplete treatment invalidates the experiment"; "Sentinel-page monitoring requires daily attention in the first 14 days — assign owner explicitly"; "If retrieval bots are blocked at robots.txt, AI citation experiments are not measurable — verify Technical SEO leaf 10 audit before relying on the metric."

## Open questions (to resolve before launch)
- [ ] Confirm sample frame finalised (treatment + control matched pages locked).
- [ ] Confirm A/A reference variance computed.
- [ ] Confirm SEO-safety review signed off.
- [ ] Confirm primary metric tracking infrastructure in place.
- [ ] Confirm rollback plan + owner.
- [ ] Confirm standards-update path agreed by team (so post-experiment update isn't relitigated).
```

Save the produced file to `businesses/<slug>/growth/seo-experiment-[experiment-slug]-[YYYY-Qn].md` (e.g. `seo-experiment-tldr-on-long-form-2026-Q4.md`). Create the `growth/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Hypothesis is tight (specific intervention + sample + metric + threshold + window).
- Pre-registered success / null / inconclusive criteria are quantitative, not qualitative.
- Sample frame matched on multiple dimensions (not just "similar pages").
- A/A reference variance computed; noise floor explicit.
- Duration matches metric type (30 / 60 / 90+ days).
- Confounder tracking plan in place with action paths.
- SEO-safety review checklist completed.
- Rollback plan locked with owner + time-to-rollback.
- Measurement plan specific (source, frequency, aggregation).
- Standards-update path defined for all three outcome paths (success / null / inconclusive).
- Brand voice respected — Field & Sun: ingredient-led, plain-language, specific.
- Open questions section captures resolution requirements before launch.

## Common mistakes to avoid

- Don't accept vague hypotheses — tighten to testable form.
- Don't skip pre-registration — post-hoc rationalisation is the failure mode.
- Don't pick small samples on noisy metrics — under-powered tests produce false positives or false nulls.
- Don't use split-traffic (UX A/B style) — split-pages with matched controls is the SEO shape.
- Don't skip the A/A reference — without it, you don't know what's significant.
- Don't peek mid-test and decide on early data — honour the duration.
- Don't ignore confounders — track explicitly; extend / invalidate if needed.
- Don't skip SEO-safety review — treatment that breaks ranking is not safe.
- Don't omit the standards-update path — without it, the learning evaporates.
- Don't bundle multiple interventions — confound; can't isolate.
- Don't run on critical pages without rollback plan.
- Don't drift from Field & Sun voice if treatment is content-related.

## Example

**Input (abbreviated):** Field & Sun. Hypothesis: TL;DR block on long-form blog posts lifts AI Overview / Perplexity citation rate. Available sample: 32 long-form blog posts (>1,500 words). Measurement: `audit-llm-visibility` quarterly + ad-hoc per-query checks.

**Output (abbreviated):**

Tight hypothesis: "Adding a 3-5 bullet TL;DR block immediately under the H1 of long-form blog posts (>1,500 words; n=15 treatment) lifts AI Overview + Perplexity citation rate on the posts' priority queries by ≥10 percentage points over 60 days, vs matched control posts (n=15)."

Variants: treatment = TL;DR added; control = original. Variant difference: TL;DR block presence.

Sample: 15 treatment + 15 control, matched on cluster (mineral / vitamin C / refills / ingredient explainer), traffic volume range (300-3,000 monthly sessions), page age (>6 months), word count range (1,500-3,500). 32 candidates → matched 15 pairs.

A/A reference: prior 60-day window across the candidate set; AI citation rate variance ±4 percentage points on a single-query basis.

Pre-registered success: ≥10 percentage point lift in citation rate on priority queries (treatment vs control), exceeding the ±4pp A/A variance.

Null: ≤4pp lift (within A/A variance). Pattern not added to brief.

Inconclusive: 4-10pp lift. Repeat with larger sample.

Duration: 60 days post-launch.

Confounders tracked: Google quality-update cadence, competitor cluster launches (none expected per latest competitor-analysis), seasonal pattern (mineral / vitamin C neutral in window).

SEO-safety: TL;DR is content-additive; no canonical / index / URL changes; rollback = remove TL;DRs (15-min per page); sentinel pages = top-2 traffic in treatment arm monitored at 7 / 14 / 30 days.

Standards-update path: success → brief template requires TL;DR on long-form; technical SEO checklist adds TL;DR check. Null → brief template notes "TL;DR not required — tested 2026-Q4; null result." Inconclusive → repeat with 25 / 25 in 2027-Q1.

Saved to `businesses/field-and-sun/growth/seo-experiment-tldr-on-long-form-2026-Q4.md`.
