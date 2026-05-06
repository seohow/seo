---
name: audit-ai-crawler-access
description: Audits a site's AI-crawler access posture — checks robots.txt declarations against the major AI crawlers (GPTBot, ClaudeBot, Google-Extended, GoogleOther, PerplexityBot, CCBot, Applebot-Extended, Bytespider, ChatGPT-User, Claude-Web, etc.), validates llms.txt presence and quality, audits page-level noai/noimageai meta directives, and surfaces any gap between declared posture and actual config. Produces a remediation list aligned to the user's stated stance (open / visibility-only / strict-block). Use whenever the user asks to "audit AI bot access," "check robots.txt for AI crawlers," "are we blocking GPT/Claude/Gemini training," "validate our llms.txt," "we want to set up AI bot rules," or shares a robots.txt and wants AI-crawler review. Also use after a CMS theme update or migration when crawler rules can regress. Do not use to write content for AI visibility — that's `09. AI SEO / 03. Generative SEO` and `09. AI SEO / 05. LLM Visibility`.
---

# Audit AI Crawler Access

This skill audits the gap between what a site claims its AI-crawler posture is and what the live config actually says. The output is a structured policy map (per AI bot: blocked, allowed, no-rule-which-means-allowed, contradictory) plus a remediation list that brings declared and actual policy into alignment.

The skill is opinionated: every relevant AI bot needs an explicit decision (allow or disallow), not a missing rule; `llms.txt` is optional but if it exists it should be valid Markdown that matches the format proposal; signals across `robots.txt`, `llms.txt`, and meta directives must be internally consistent.

## When to use this skill

- The user wants to validate their AI-crawler posture matches their intent.
- After a theme update or migration that may have regressed `robots.txt`.
- The user is deciding their AI-crawler stance and wants to see what's currently in place.
- Pre-launch on a new site, to set the posture deliberately rather than accept defaults.
- Quarterly re-audit (the AI-bot list shifts faster than other technical-SEO surfaces).

## When NOT to use this skill

- The user wants to *write* content for AI visibility — that's `09. AI SEO / 03. Generative SEO` and `09. AI SEO / 05. LLM Visibility`.
- The user wants to plan their broader content rights strategy — that's a brand-and-legal conversation, not a technical audit.
- The user wants to audit Googlebot (not AI) crawl behaviour — use `audit-crawlability`.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: business model (2), CMS / platform (5).
2. **Stated posture** — required. One of:
   - **Open**: allow all AI bots (training + retrieval).
   - **Visibility-only**: allow retrieval bots, block training bots.
   - **Strict-block**: block all AI bots.
   - **Custom**: ask the user for their per-bot stance.
   If unstated, ask before producing the audit. Without a stated intent, "what should the policy be" is unanswerable.
3. **`robots.txt`** — required. Live file content (pasted) or the URL where the skill should fetch it.
4. **`llms.txt`** (if it exists) — pasted or URL. If absent, skill notes that and recommends whether to publish based on the stated posture.
5. **Page-level AI meta sample** (optional) — for one or two priority pages, the value of `<meta name="robots">` and any `X-Robots-Tag` HTTP header. Useful for spotting site-wide vs page-level conflicts.
6. **Server logs filtered for AI bot user-agents** (optional but valuable) — confirms whether bots are honouring rules in practice. Most relevant for sites with log access (Vercel, custom infra).

If the stated posture or robots.txt is missing, ask. The audit operates on real artifacts.

## Process

1. **Build the AI-bot reference list.** The skill maintains an internal list of major AI bot user-agents, categorised as training vs retrieval vs both:
   - **Training bots:** `GPTBot` (OpenAI), `ClaudeBot` (Anthropic), `Google-Extended` (Google AI / Gemini training opt-out token), `Applebot-Extended` (Apple AI training), `CCBot` (Common Crawl, indirect to many models), `Bytespider` (ByteDance), `Meta-ExternalAgent` (Meta), `Amazonbot` (Amazon — partial training).
   - **Retrieval bots:** `ChatGPT-User` (OpenAI live), `OAI-SearchBot` (OpenAI search index), `Claude-Web` / `claude-web` (Anthropic live), `Claude-SearchBot`, `PerplexityBot` (Perplexity live), `Applebot` (Apple/Siri retrieval).
   - **Mixed / unclear:** `GoogleOther` (non-search Google bot, purpose varies).
   The list shifts; always note "current as of [date], verify against the official source if uncertain."
2. **Parse `robots.txt`.** For each user-agent block, capture: which bot, what's allowed/disallowed.
3. **Compute per-bot policy:**
   - **Explicit Allow** (rule says `Allow: /` or no `Disallow` for that user-agent): the bot can crawl the entire site.
   - **Explicit Disallow** (`Disallow: /`): the bot is fully blocked.
   - **Partial Disallow**: some paths blocked, others allowed. Note the pattern.
   - **No rule** = full allow by default. The bot will crawl freely.
4. **Compare per-bot policy against stated posture.** For each bot:
   - **Match** — actual policy aligns with stated posture. ✓
   - **Gap (more permissive than intent)** — bot has access the stated posture says it shouldn't. P0 fix.
   - **Gap (more restrictive than intent)** — bot is blocked despite intent to allow. P1 fix (less urgent, but unintended visibility loss).
5. **Audit `llms.txt`:**
   - Present? If absent and posture is open or visibility-only, recommend publishing.
   - Valid Markdown per the llms.txt proposal? Title (H1), description (blockquote or paragraph), section headers (H2s) with bullet lists of links + descriptions.
   - Reasonable size? 10-100 entries is healthy. 500+ suggests dumping a sitemap rather than curating.
   - URLs in `llms.txt` reachable (return 200)? Spot-check.
   - `llms-full.txt` present? Note as supplementary.
6. **Audit page-level signals** (if data provided):
   - Conflicts between site-wide and page-level (e.g. site allows but page says `noai`)?
   - `noai` / `noimageai` directives present and consistent with posture?
7. **Cross-reference logs** (if data provided):
   - Are blocked bots actually staying away? Most reputable bots honour robots.txt; some don't.
   - Are allowed bots actually crawling? If `PerplexityBot` is allowed but logs show zero hits in 30 days, that's a signal — not necessarily a problem, but worth noting.
8. **Produce the policy table.** One row per AI bot with: stated intent / actual rule / status / recommended action.

## Output format

```markdown
# AI Crawler Access Audit — [Business Name]

**Stated posture:** [open / visibility-only / strict-block / custom]
**Audit date:** [date]
**Sources reviewed:** robots.txt [✓], llms.txt [present/absent], page-level meta [sample provided / not provided], logs [provided / not available]

## Posture summary
Brief 2-4 sentence read of the alignment between intent and actual.

## Per-bot policy table

### Training bots

| Bot | User-agent | Stated intent | robots.txt rule | Effective policy | Status | Action |
|-----|-----------|--------------|----------------|-------------------|:------:|--------|
| OpenAI training | `GPTBot` | block | `Disallow: /` | blocked | ✓ | none |
| Anthropic training | `ClaudeBot` | block | (no rule) | allowed (default) | ✗ | Add `User-agent: ClaudeBot` / `Disallow: /` |
| Google AI / Gemini training | `Google-Extended` | block | (no rule) | allowed | ✗ | Add rule |
| Apple AI training | `Applebot-Extended` | block | (no rule) | allowed | ✗ | Add rule |
| Common Crawl | `CCBot` | block | `Disallow: /` | blocked | ✓ | none |
| ByteDance | `Bytespider` | block | (no rule) | allowed | ✗ | Add rule |
| Meta | `Meta-ExternalAgent` | block | (no rule) | allowed | ✗ | Add rule |

### Retrieval bots

| Bot | User-agent | Stated intent | robots.txt rule | Effective policy | Status | Action |
|-----|-----------|--------------|----------------|-------------------|:------:|--------|
| OpenAI live | `ChatGPT-User` | allow | (no rule) | allowed (default) | ✓ | none |
| OpenAI search | `OAI-SearchBot` | allow | (no rule) | allowed | ✓ | none |
| Anthropic live | `Claude-Web` | allow | (no rule) | allowed | ✓ | none |
| Perplexity | `PerplexityBot` | allow | (no rule) | allowed | ✓ | none |
| Apple Siri | `Applebot` | allow | (no rule) | allowed | ✓ | none |

### Mixed / unclear

| Bot | User-agent | Notes | Action |
|-----|-----------|-------|--------|
| Google non-search | `GoogleOther` | Purpose varies; conservative posture is to allow | Document the decision |

## llms.txt audit

- **Present:** [yes / no]
- **Format valid:** [yes / partial / no, with notes]
- **Entry count:** [n]
- **URLs reachable:** [n / total spot-checked]
- **Last-modified (if known):** [date]
- **llms-full.txt present:** [yes / no]
- **Recommendation:** [keep / refresh / publish / remove]

## Page-level signals (if provided)
- Site-wide vs page-level conflicts: [list or "none"]
- Recommendation: [...]

## Log cross-reference (if logs provided)
- Blocked bots with non-zero hits in last 30 days: [list — these bots are ignoring robots.txt; consider IP-block at server level]
- Allowed bots with zero hits in last 30 days: [list — informational only, not a problem]

## Prioritised remediation list

### P0 — Posture mismatch (most-permissive-than-intent)
| # | Bot | Action | Where to fix | Verification |
|---|-----|--------|--------------|-------------|
| 1 | ClaudeBot | Add `Disallow: /` rule | robots.txt | Re-fetch robots.txt; check that the rule appears |
| ... |

### P1 — Posture mismatch (more-restrictive-than-intent)
[Same structure]

### P2 — Hygiene
- Add comment block to robots.txt grouping AI rules together for readability.
- Recommend publishing llms.txt if posture is open or visibility-only and brand has informational content.
- Add posture decision to per-business AGENTS.md.

## Implementation checklist
- [ ] Apply P0 fixes to robots.txt.
- [ ] If publishing llms.txt: run `generate-llms-txt`.
- [ ] Validate by re-fetching `robots.txt` and `llms.txt` from production.
- [ ] If logs are accessible: re-pull in 30 days to verify blocked bots have stopped or reduced.
- [ ] Document the posture decision in `businesses/<slug>/AGENTS.md` so future migrations / theme updates don't regress.
- [ ] Schedule next audit (recommended quarterly — AI bot landscape shifts fast).

## Risks and watchouts
3-5 specific watchouts: e.g. "AI bot user-agents change names occasionally — always verify against the model provider's current docs"; "blocking `Googlebot` accidentally is catastrophic for organic search; never use `User-agent: *` followed by broad disallows when adding AI rules"; "robots.txt is a request, not enforcement — some scraper-style bots ignore it; for those, server-level IP blocking is the next step"; "if the brand has multiple domains (sub-domain, country domain), each needs its own robots.txt audit."
```

Save the produced file to `businesses/<slug>/ai-crawlers/audit-<YYYY-MM-DD>.md`. Create the `ai-crawlers/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- Every relevant AI bot appears in the table with explicit status.
- Stated posture is captured at the top; the audit is grounded against it.
- "No rule" is correctly interpreted as "full allow" — never silently treated as the safe default.
- llms.txt audit is run regardless of posture (it's a separate check).
- Remediation is prioritised; P0 = most-permissive-than-intent (the dangerous direction).
- Implementation checklist closes the loop with re-fetch validation and a quarterly cadence.

## Common mistakes to avoid

- Don't conflate `Googlebot` with `Google-Extended`. Different bots, different purposes.
- Don't recommend blocking `Googlebot` to "block AI" — that tanks organic search.
- Don't treat "no rule" as safe. Default for AI bots is full allow.
- Don't fabricate AI bot names. The list shifts; if uncertain about a specific user-agent, flag it for verification rather than assuming.
- Don't recommend publishing `llms.txt` if posture is strict-block — it's a signal you want LLMs to understand you, which contradicts strict-block.
- Don't audit without a stated posture. Without intent, "is this right?" is unanswerable.
- Don't assume bots honour robots.txt. Major reputable ones do; smaller ones may not. Logs reveal the truth.

## Example

**Input (abbreviated):** Field & Sun. Posture: visibility-only (allow retrieval, block training). robots.txt content includes the standard Shopify defaults plus existing allows for `/products/` and `/collections/`. No AI-bot-specific rules. No llms.txt. Page-level meta data not provided. Logs not accessible (Shopify).

**Output (abbreviated):**

Posture summary: Field & Sun's stated visibility-only intent is NOT reflected in the live robots.txt. All major AI training bots are currently allowed by default. 7 P0 fixes needed.

Per-bot policy: Training bots are all "no rule → allowed (default)" — mismatched. Retrieval bots are all "allowed" — matched.

llms.txt audit: not present. Recommendation: publish (posture is visibility-only; informational content is well-suited to LLM citation).

P0 remediation: add 7 explicit `User-agent: X` / `Disallow: /` rules to robots.txt for GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, Meta-ExternalAgent.

P1: none (no over-restrictive cases).

P2: group AI rules in robots.txt with a comment block; document posture in business AGENTS.md.

Implementation checklist included with re-fetch validation. Quarterly re-audit recommended.

Saved to `businesses/field-and-sun/ai-crawlers/audit-2026-05-01.md`.
