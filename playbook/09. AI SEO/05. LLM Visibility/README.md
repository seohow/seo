# LLM Visibility

> Measuring whether AI systems are actually citing your brand, what they're saying when they do, and how you compare to competitors. The measurement layer of AI SEO — quarterly cadence, structured query set, longitudinal tracking. Without this, the rest of the category is unaccountable.

## What it is

LLM visibility measurement is the practice of probing major AI search products — ChatGPT search, Claude search, Perplexity, Google Gemini, Google AI Overviews — with a structured set of brand-relevant queries, capturing how often the brand is mentioned, what's said about it, whether a citation link is provided, and how competitor share-of-voice compares. Run quarterly, the practice produces a longitudinal record that lets the brand know whether its content / generative-SEO / NLP / SERP-feature work is actually translating to AI-mediated visibility.

The shift from traditional rank tracking is significant. Rank tracking captures *position* on a list of blue links; LLM visibility tracking captures *citation, mention, and framing* in a synthesised answer. Position 1 organically and zero AI mentions is a warning, not a win. Position 8 organically and named-with-positive-framing in 6 of 10 priority queries is increasingly the new "winning."

For Field & Sun, this matters because the brand's content investment, generative-SEO strategy, NLP optimisation, and SERP-feature work all converge on the question "is the brand actually being cited and how?" Without quarterly measurement, the category produces work without a feedback loop and the founder can't course-correct. With it, the brand has a direct read on whether the angle is real (citation rate climbing on priority queries), the strategy is working (cited sources shifting from competitors to brand), and the brand-mention quality is on-voice (named with ingredient specificity, not as "another sunscreen brand").

## Why it matters

Three reasons. First, **AI-mediated answers are increasingly the entry point for the customer journey** for ingredient-led D2C purchases. Without measurement, the brand is investing in generative SEO and AI content optimisation blind — unable to tell if the work is moving citation rate.

Second, **AI citation behaviour is volatile**. Engines update; cited sources rotate; new engines emerge; old ones change citation patterns. Quarterly tracking catches drift and surfaces emerging opportunities. A brand that watches Perplexity citation drop on a priority query in Q3 and investigates discovers (e.g.) that a competitor published a stronger piece — and can respond.

Third, **competitor share-of-voice is more revealing than absolute citation rate**. If Field & Sun is named in 30% of priority queries and competitors collectively in 80%, the brand is under-cited even if absolute rate is "decent." If Field & Sun is named in 30% and competitors in 20% (because the engines have declined to cite anyone for generic queries), the brand is over-indexing. Same number, different conclusion.

## Core concepts

- **Structured query set.** A fixed list of 30-100 queries the brand cares about, balanced across intent (commercial, informational, comparative, branded), cluster (mineral sunscreen, vitamin C, refills, etc.), and engine eligibility (some queries trigger AI answers reliably, others don't). The query set is the longitudinal anchor — same queries every quarter, tracked over time.
- **Per-engine probing.** Run the same query set against ChatGPT search, Claude search, Perplexity, Gemini, and Google AI Overviews. Capture: brand-mention presence (yes/no); citation link present (yes/no); mention quality (named-with-context / named-without-context / mentioned-in-list / paraphrased-without-mention); sentiment (positive / neutral / negative); competitor mentions in same answer.
- **Brand-mention quality dimensions.**
  - **Named with context:** "Field & Sun's Mineral Sun Drops use 20% non-nano zinc oxide and add iron oxides for tinting on Fitzpatrick III-VI skin tones" — high-quality mention.
  - **Named without context:** "Field & Sun is one of several mineral sunscreen brands" — low-context mention.
  - **Mentioned in list:** "Brands like Supergoop, ILIA, Saie, and Field & Sun..." — list-only.
  - **Paraphrased without mention:** "Some brands offer tinted mineral SPF for darker skin tones" — implicit but unattributed.
- **Citation link presence.** Some engines (Perplexity, AI Overview) provide explicit links; others (ChatGPT, Claude) more often paraphrase without links. Track separately — a link is more valuable than a paraphrased mention because it can drive traffic.
- **Sentiment tracking.** AI mentions can be positive ("widely recommended for ingredient transparency"), neutral ("a D2C skincare brand"), or negative ("limited product range"). Sentiment shifts are signals — sudden negative mentions warrant investigation (review-bombing? misinformed AI summary?).
- **Competitor share-of-voice.** Per priority query, who else is named? Calculate share-of-voice as (brand mentions) / (all brand mentions in query set). Useful as a relative benchmark.
- **Engine-specific behaviour.** ChatGPT cites less frequently but more consequentially (sparse citation = weight). Perplexity cites generously (5-15 sources per answer). Claude cites moderately. AI Overview cites 3-5 sources. Track per-engine; don't aggregate.
- **Branded vs unbranded queries.** Branded queries ("Field & Sun reviews," "Daily Glow Serum ingredients") are easier to capture brand mention on; unbranded queries ("best mineral sunscreen for dark spots") are the harder, more meaningful test.
- **Query set evolution.** The query set is mostly stable quarter-over-quarter, but evolves at the margin: new product launches add product-specific queries; cluster shifts in the strategic plan move queries in/out; emerging customer questions (from support / reviews / social) get added.
- **Reproducibility caveats.** LLM responses are stochastic — the same query asked twice may produce different answers. Run each query 2-3 times and capture modal behaviour rather than a single sample. Some engines (ChatGPT, Claude) personalise based on user account; use clean / new sessions to reduce personalisation bias.
- **Tooling landscape.** Manual probing (browser + spreadsheet) works for small query sets. For 30+ queries × 5 engines × quarterly cadence, dedicated tools — Profound, Goodie, Otterly.AI, Brandy, Peec.ai, AI Brand Rank — automate the probing. Tool selection is a build-vs-buy call; for v1, manual probing with a structured spreadsheet is sufficient.

## A worked example

> **Scenario:** Field & Sun runs the inaugural LLM visibility audit before the Q2 generative-SEO investment kicks off. Need a baseline.
>
> **Step 1.** Build the structured query set — 42 queries balanced across:
>
> - **Mineral sunscreen cluster (12 queries):** head + supporting + comparative + branded.
> - **Vitamin C cluster (10 queries):** head + dark spots + sensitive skin + concentrations.
> - **Refill / sustainability (4 queries).**
> - **Ingredient explainer (8 queries):** zinc oxide; niacinamide; hyaluronic acid; iron oxide; etc.
> - **Brand-specific (8 queries):** "Field & Sun reviews"; "Daily Glow Serum ingredients"; "Mineral Sun Drops vs Supergoop"; etc.
>
> **Step 2.** Run each query 2x against each of: ChatGPT search, Claude search, Perplexity, Gemini, and Google (capturing AI Overview where present).
>
> **Step 3.** Per query × engine, capture: mention y/n; citation link y/n; mention quality (4-tier); sentiment (3-tier); competitors named.
>
> **Step 4.** Aggregate findings:
>
> - **Branded queries (8):** brand mention rate 100% across all engines; citation link present 75% (Perplexity 100%, AI Overview 50%, ChatGPT 25%, Claude 50%); mention quality skews high; sentiment positive.
> - **Mineral sunscreen unbranded (12):** brand mention rate 8% (1 of 12 queries on average across engines); citation link present 4%; mention quality low (mostly "in-list" mentions); sentiment neutral.
> - **Vitamin C unbranded (10):** brand mention rate 0% across all engines; competitor share-of-voice dominated by Wirecutter, Strategist, NYT, Byrdie.
> - **Refill / sustainability (4):** brand mention rate 50% (Field & Sun appears on the explicit "refillable beauty" queries with positive context).
> - **Ingredient explainer (8):** brand mention rate 0%; territory dominated by Healthline, Verywell, dermatology publishers.
>
> **Step 5.** Competitor share-of-voice ranking across the 42 queries (excluding branded):
>
> - Wirecutter: 38% of mentions
> - Strategist: 24%
> - Supergoop: 22%
> - ILIA: 18%
> - Healthline: 14%
> - Saie: 11%
> - Field & Sun: 4%
>
> **Step 6.** Recommendations:
>
> - **Priority cluster for citation-magnet investment:** mineral sunscreen "white cast on darker skin tones" subset (per generative-SEO strategy Pick 1) — biggest gap with most-defensible angle.
> - **Defer vitamin C unbranded territory:** publisher dominance is structural; per generative-SEO strategy, this is on the skip list.
> - **Lean into refill / sustainability cluster:** brand mention rate already 50% with positive context — small content investment may push to 70%+.
> - **Ingredient explainer territory:** publisher dominance is structural; defer.
>
> **Step 7.** Set Q3 audit date; baseline saved as `ai-seo/llm-visibility-audit-2026-Q2.md` for longitudinal comparison.
>
> **Step 8.** Result at Q3 (post-Pick 1 publication): mineral sunscreen unbranded mention rate 8% → 32% (driven by 4 queries in the "white cast" subset gaining citation across 3-4 engines each). Competitor share-of-voice: Wirecutter still leads but Field & Sun jumps to 14% from 4%. Sentiment in Field & Sun mentions improves from "named without context" (60%) to "named with context" (75%). Decision: invest in Pick 2 in Q4.

## How to do it

1. **Build the structured query set.** 30-100 queries balanced across intent and cluster. Include branded + unbranded; include comparative + ingredient + commercial + informational. Document the query set as the longitudinal anchor.
2. **Probe each engine consistently.** Same query, fresh / clean session, 2-3 times per query. Capture mention y/n, citation link y/n, mention quality, sentiment, competitors named.
3. **Use clean sessions.** ChatGPT and Claude personalise based on user history; use a new session / temporary chat to reduce bias. Perplexity and AI Overview / Gemini are less personalised but still: fresh session is the safer default.
4. **Aggregate by cluster, by intent, by engine.** Don't just compute one number — slice the findings to find where the brand is winning, losing, and unmentioned-but-mentionable.
5. **Track competitor share-of-voice.** Calculate per cluster + overall. Competitor mix shifts are signals — a sudden ILIA Beauty surge in Q3 means ILIA shipped strong content, not that the engines changed.
6. **Track mention quality, not just presence.** Named-in-list mentions are different from named-with-context mentions. Quality matters as much as quantity.
7. **Capture sentiment.** Most mentions are neutral; positive / negative outliers warrant investigation.
8. **Run quarterly.** Cadence below quarterly misses signal; cadence above quarterly exhausts the team without proportional insight.
9. **Compare to baseline.** Each audit reports against the previous one + the inaugural baseline. Direction matters; absolute numbers in isolation don't.
10. **Feed findings into strategy.** The audit is the input to `plan-generative-seo-strategy`, the input to content-prioritisation in Content SEO, and the input to feature-capture decisions. Without measurement → strategy loop, the work is unaccountable.

## Common pitfalls

- **Single-sample probing.** LLM responses are stochastic. One query × one run is unreliable. Always 2-3 samples per query and capture modal behaviour.
- **Personalised sessions.** ChatGPT / Claude personalise on user history. Auditing in your own logged-in account skews results. Use temporary / clean sessions.
- **Aggregating engines.** ChatGPT and Perplexity have different citation patterns; averaging them obscures signal. Per-engine reporting is the right unit.
- **Counting branded queries as wins.** Branded queries are easy mode — the brand should be 100% mentioned. Unbranded queries are the meaningful measure.
- **Ignoring mention quality.** "Mentioned in list" and "named with context" are very different outcomes. Quality dimension matters.
- **Skipping sentiment.** Negative mentions flag review issues, misinformation, or content mismatches that need a response.
- **Sampling bias.** A query set heavy on the brand's strong territory (refills) and light on weak territory (commercial reviews) overstates visibility. Balance the set.
- **No longitudinal tracking.** A one-off audit is a snapshot; it doesn't tell you whether things are improving or degrading. The cadence is non-negotiable.
- **No competitor benchmark.** Brand mention rate without competitor share-of-voice is half a number. Always pair.
- **Treating LLM visibility as a vanity metric.** It's a leading indicator — citation rate today predicts brand awareness and direct traffic 6-12 months from now. Treat it operationally, not as a slide-deck metric.

## Skills in this toolkit

- **[audit-llm-visibility](../../../skills/ai/audit-llm-visibility/SKILL.md)** — quarterly probe of ChatGPT search, Claude search, Perplexity, Gemini, and Google AI Overviews using a structured query set; captures brand-mention rate, citation link presence, mention quality (4-tier), sentiment, competitor share-of-voice, per-cluster and per-engine breakdowns; produces a longitudinal-trackable audit document with comparisons to prior baselines and recommendations for content / generative-SEO / NLP investment. Mandatory baseline before any AI SEO investment; quarterly cadence thereafter.

## Related topics

- **[09. AI SEO / 03. Generative SEO](../03.%20Generative%20SEO/README.md)** — strategic plan consumes baseline + measures impact; tightly coupled.
- **[09. AI SEO / 01. Content Optimization](../01.%20Content%20Optimization/README.md)** — content-readiness rewrites should drive measurable lift in subsequent audits.
- **[09. AI SEO / 02. NLP Optimization](../02.%20NLP%20Optimization/README.md)** — entity / schema / knowledge-graph work shows up as mention quality lift over multiple quarters.
- **[09. AI SEO / 04. SERP Features](../04.%20SERP%20Features/README.md)** — feature capture coordinates with AI Overview citation tracking.
- **[06. Off-page SEO / 04. Brand Mentions](../../06.%20Off-page%20SEO/04.%20Brand%20Mentions/README.md)** — broader brand-mention monitoring on the open web; LLM visibility is the AI-search subset.
- **[06. Off-page SEO / 08. Reputation Management](../../06.%20Off-page%20SEO/08.%20Reputation%20Management/README.md)** — branded SERP / AI Overview audits surface in both leaves; coordinate.
- **[01. Strategy / 03. Competitor Analysis](../../01.%20Strategy/03.%20Competitor%20Analysis/README.md)** — competitor share-of-voice in LLM visibility complements organic competitor analysis.
- **[05. Analytics / 04. Traffic Analysis](../../05.%20Analytics/04.%20Traffic%20Analysis/README.md)** — LLM-referral traffic appears in GA4; coordinate attribution definitions.

## Further reading

- [Profound / Goodie / Otterly.AI / Peec.ai — tooling documentation](https://www.profound.com/) — practitioner reference for the dedicated LLM-visibility tracking tool category in 2026 (verify current state — vendors evolve fast).
- [Lily Ray / Amsive — AI search citation field studies](https://www.amsivedigital.com/insights/seo/) — empirical studies on which content patterns shift LLM visibility quarter-over-quarter.
- [Aleyda Solis — Generative SEO measurement framework](https://www.aleydasolis.com/) — practitioner framework for measurement design.
- [Princeton / GEO research paper — Generative Engine Optimization](https://arxiv.org/abs/2311.09735) — research framework for citation-rate measurement across engines.
- [Cyrus Shepard / Zyppy — LLM citation experiments](https://zyppy.com/seo/) — empirical citation-rate research; useful for setting realistic expectations.
