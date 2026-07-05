# 09. AI SEO

> Earning visibility, citation, and trust inside AI-mediated search — AI Overviews, Google AI Mode, ChatGPT search, Claude search, Perplexity, Gemini — and the SERP features that increasingly answer queries before a click happens. The content-side counterpart to Technical SEO's AI Crawler Management.

*Last reviewed: 2026-07 — this category describes the AI-search landscape as of this date. Engines, citation behaviour, and crawler details change fast; re-verify quarterly and update the leaf pages' "Last reviewed" dates when you do.*

## What this category covers

AI SEO is the practice of getting your brand and content cited, summarised, and recommended by AI systems when users ask questions in their domain. It spans how you structure prose so an LLM can extract a clean answer (Content Optimization), how you signal entities and topical relationships so search NLP and LLMs understand what your pages are about (NLP Optimization), how you design content that wins citation in AI Overviews and conversational search (Generative SEO), how you earn the SERP features that capture clicks before traditional rankings (SERP Features), and how you measure whether any of it is working (LLM Visibility).

The boundary with Technical SEO is sharp and worth re-stating: **AI Crawler Management** (Technical SEO leaf 10) controls *whether AI systems can reach your content* — robots.txt, llms.txt, page-level directives. **AI SEO** (this category) controls *whether they cite you when they have reached you*. A brand can have impeccable AI-crawler hygiene and still be invisible in AI answers because the content isn't structured for citation. Both layers matter; this category owns the content layer.

For Field & Sun, AI SEO matters because the customer journey for ingredient-led skincare increasingly starts with a conversational question — "what's the best mineral SPF that doesn't leave a white cast on darker skin tones," "is vitamin C serum worth it for dark spots," "are refillable beauty products actually better for the environment" — asked of ChatGPT, Claude, Perplexity, or Google's AI Overview. The brand that gets cited in those answers earns brand-mention visibility (and increasingly, direct clicks via citation links) regardless of where it sits on the traditional blue-link SERP. Brands that aren't cited get bypassed entirely — the user gets their answer without ever seeing a search result.

## How the sub-topics fit together

```
Content layer            Signal layer            Output layer            Measurement
─────────────            ────────────            ────────────            ───────────
01. Content              02. NLP                 03. Generative SEO      05. LLM Visibility
    Optimization             Optimization        04. SERP Features
(how the prose reads)    (what entities          (where the content      (whether AI is
                          and relationships       wins citation)         actually citing you)
                          you signal)
```

1. **[01. Content Optimization](01.%20Content%20Optimization.md)** — writing patterns that AI systems extract cleanly: definitive opening sentences, fact-extractable structure, TL;DRs, source-rich claims, freshness signals. The prose-level layer.
2. **[02. NLP Optimization](02.%20NLP%20Optimization.md)** — entity-rich content, semantic clarity, knowledge-graph alignment, internal-linking that reinforces topical authority. The signal layer that helps both search NLP and LLMs understand what a page is about.
3. **[03. Generative SEO](03.%20Generative%20SEO.md)** — strategic decisions and content patterns for getting cited in AI Overviews, ChatGPT / Claude / Perplexity / Gemini answers. The highest-leverage and highest-uncertainty leaf in this category — which queries are worth competing for, what content shape wins citation, where the brand can defensibly own answer space.
4. **[04. SERP Features](04.%20SERP%20Features.md)** — featured snippets, People Also Ask, knowledge panels, image / video carousels, AI Overview citation cards. Earning the on-SERP real estate that increasingly answers queries pre-click.
5. **[05. LLM Visibility](05.%20LLM%20Visibility.md)** — measurement. Probing major LLMs for brand-relevant queries, tracking citation rate, mention quality, sentiment, and competitor share-of-voice. Quarterly cadence, structured query set, longitudinal tracking.

## A suggested workflow

If you're working through this category for the first time, the highest-leverage sequence is:

**Pass 1 — Baseline (one-time):**

1. Run `audit-llm-visibility` first to get a current-state read on how often the brand appears in AI answers for relevant queries. This is your baseline; it will also reveal which queries the brand is losing on, which informs every downstream decision.
2. Run `audit-ai-content-readiness` against the top 10-20 organic landing pages to flag prose-level issues that depress AI citation.
3. Run `audit-entity-optimisation` to identify entity-coverage gaps, missing schema, and weak topical signals.

**Pass 2 — Strategy and execution:**

1. Run `plan-generative-seo-strategy` to decide which queries / topics are worth investing citation-magnet content against, and how to differentiate from publisher competitors (Wirecutter, Strategist, etc.) that dominate traditional SERPs but have generic AI answers.
2. Run `audit-serp-feature-opportunities` to identify which SERP features (featured snippets, PAA, AI Overview citations, image packs) are reachable per priority keyword cluster.
3. Use `design-citation-magnet-content` per priority topic to produce the content shape that earns AI citation.
4. Implement Content Optimization patterns on existing pages flagged by the readiness audit.

**Pass 3 — Operations (ongoing):**

1. Quarterly LLM visibility re-audit — track citation-rate change, surface new queries the brand should compete on.
2. Re-audit AI content readiness on new content pre-publish; bake patterns into content briefs (Content SEO leaf 08).
3. Monitor SERP feature changes per priority query — feature presence shifts as Google rolls out AI Overview expansions.

## Pre-requisites and dependencies

The AI SEO category consumes outputs from earlier categories:

- `businesses/<slug>/business_context.md` — products, customer pains, and brand voice.
- `businesses/<slug>/clusters/cluster-map.md` — topic clusters identify which queries to compete on.
- `businesses/<slug>/keyword-research/*` — query inventory + intent classification.
- `businesses/<slug>/competitor-analysis/*` — competitor citation share is part of the LLM Visibility baseline.
- `businesses/<slug>/schema/*` — entity-rich schema feeds NLP optimisation.
- Technical SEO leaf 10 — AI Crawler Management. If retrieval bots are blocked at robots.txt, AI SEO has nothing to optimise. Verify access posture before investing in citation-magnet content.

It produces inputs for downstream categories:

- **Content SEO** — citation-magnet patterns flow into content briefs (`08. Content Briefing`).
- **On-page SEO** — TL;DR / answer-block patterns affect title, description, H-structure conventions.
- **Analytics** — LLM-citation traffic appears differently in GA4 (zero-click brand mentions, referral from chatgpt.com / perplexity.ai / claude.ai / gemini.google.com / copilot.microsoft.com; GA4 now also has a native "AI Assistant" channel, though a large share of AI referrals still land in Direct with no referrer). Define attribution conventions.
- **Off-page SEO** — high-citation pages tend to also earn organic links. AI SEO and Off-page reinforce each other.

## Skills you'll use in this category

The full inventory across the 5 sub-topics:

- **[audit-ai-content-readiness](../../skills/ai/audit-ai-content-readiness/SKILL.md)** — audits priority pages against AI-citation patterns (definitive openings, fact-extractable structure, TL;DR presence, source citations, freshness signals); produces a prioritised rewrite list.
- **[audit-entity-optimisation](../../skills/ai/audit-entity-optimisation/SKILL.md)** — audits entity coverage, internal entity-linking, schema-entity alignment, knowledge-graph signals (Wikipedia / Wikidata mentions, sameAs schema); produces an entity-coverage remediation list.
- **[plan-generative-seo-strategy](../../skills/ai/plan-generative-seo-strategy/SKILL.md)** — strategic plan for which queries / topics to compete on for AI Overview / Perplexity / ChatGPT / Claude / Gemini citation; identifies defensible angles vs publisher competitors; sequences investment.
- **[design-citation-magnet-content](../../skills/ai/design-citation-magnet-content/SKILL.md)** — per-topic executor that produces a content brief specifically structured to earn AI citation: question framing, answer-block design, supporting evidence, source citation, internal-linking plan.
- **[audit-serp-feature-opportunities](../../skills/ai/audit-serp-feature-opportunities/SKILL.md)** — per-priority-keyword analysis of which SERP features are present, reachable, and worth competing for; produces a feature-by-feature plan with content / schema / structural requirements.
- **[audit-llm-visibility](../../skills/ai/audit-llm-visibility/SKILL.md)** — probes ChatGPT, Claude, Perplexity, Gemini, and AI Overviews with a structured query set; captures citation rate, brand-mention quality, sentiment, and competitor share-of-voice; quarterly cadence.

## Common pitfalls

- **Treating AI SEO as "write for the algorithm."** Citation-worthy content is also human-worthy content — clear, sourced, specific, useful. The format optimisations (TL;DRs, definitive openings) help both audiences. Content that's optimised purely for AI extraction at the cost of readability tends to be downranked by both AI and humans.
- **Confusing AI SEO with AI-generated content.** AI SEO is about being *cited by* AI. AI-generated content is content *produced by* AI. They're independent decisions and the latter is increasingly penalised when used at scale without editorial value-add. This category does not advocate AI-generated content as a strategy.
- **Skipping the visibility baseline.** Investing in citation-magnet content without first measuring current LLM visibility means you have no read on whether the work moved the needle. Always start with the audit.
- **Optimising for one engine.** AI Overviews, Perplexity, ChatGPT, Claude, and Gemini have overlapping but distinct citation behaviour. Patterns that win in Perplexity (which cites generously, often with links) don't always win in ChatGPT (which often paraphrases without citing). Plan multi-engine, measure per engine.
- **Forgetting that crawler access is a precondition.** If the brand has blocked retrieval bots at robots.txt (Technical SEO leaf 10), no amount of citation-optimisation will help — the bots can't see the content. Verify access posture first.
- **Schema theatre.** Stuffing pages with elaborate schema that doesn't match content (`Product` schema on a blog post, `FAQPage` schema with fake questions) signals manipulation to both Google and LLMs. Schema must be honest and aligned with on-page content.
- **Chasing every new AI search engine.** New tools launch monthly. Focus measurement on the surfaces with meaningful query share — ChatGPT, Claude, Perplexity, Gemini / Google AI Overviews and AI Mode, and (increasingly) Microsoft Copilot. Add others if they show up in your customer-research data, not because they're new.
- **Neglecting freshness signals.** LLMs increasingly weight content recency for time-sensitive queries (product comparisons, ingredient guidance, regulatory topics). Old content with no last-updated signal loses to fresher competitors even when it's more authoritative.
- **No measurement = no feedback loop.** Without quarterly LLM visibility audits, the category's impact is unknowable and the brand can't course-correct. The measurement skill is non-optional.
- **Treating AI Overviews as a separate game.** AI Overviews increasingly cite the same pages that win featured snippets — the content-pattern overlap is high. Run SERP Features and Generative SEO work in coordination, not as parallel programs.

## Where to go after this

Once AI SEO is shipping:

- **[03. Technical SEO / 10. AI Crawler Management](../03.%20Technical%20SEO/10.%20AI%20Crawler%20Management.md)** — the access-layer counterpart. Verify retrieval bots are allowed before investing in citation-magnet content; verify training-bot posture aligns with content-rights stance.
- **[03. Technical SEO / 04. Schema Markup](../03.%20Technical%20SEO/04.%20Schema%20Markup.md)** — entity-rich schema is load-bearing for both NLP optimisation and AI Overview eligibility.
- **[04. Content SEO / 08. Content Briefing](../04.%20Content%20SEO/08.%20Content%20Briefing.md)** — bake citation-magnet patterns into the standard brief template so new content ships AI-ready by default.
- **[05. Analytics](../05.%20Analytics/README.md)** — define LLM-referral attribution conventions in GA4 (referral domains, UTM patterns for citation links).
- **[06. Off-page SEO / 04. Brand Mentions](../06.%20Off-page%20SEO/04.%20Brand%20Mentions.md)** — LLM citation is a brand-mention surface; coordinate measurement with traditional brand-mention monitoring.
- **[10. Growth](../10.%20Growth/README.md)** — topical authority and content scaling underpin sustained AI-citation share.
