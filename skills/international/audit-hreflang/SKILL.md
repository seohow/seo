---
name: audit-hreflang
description: Audits hreflang implementation: syntax, return tags, x-default presence, and canonical alignment. Use to fix international targeting errors or validate a multi-language setup.
---

# Audit Hreflang

This skill produces a Hreflang implementation audit. Output is a prioritised remediation list — each issue has severity, root cause, and fix.

The skill is opinionated about a few things: `gb` not `uk` (most-common error); self-reference + return tags are non-negotiable; canonical and Hreflang must align; one implementation method per template; quarterly re-audit catches drift.

## When to use this skill

- The user operates in multiple markets and hasn't audited Hreflang recently.
- The user is investigating wrong-market ranking or UK visitors landing on US pages.
- The user just shipped Hreflang implementation and wants validation.
- The user is running a quarterly international-SEO review.

## When NOT to use this skill

- The user wants to choose multi-language architecture — use `decide-multi-language-architecture`.
- The user wants broader geo-targeting — use `plan-geo-targeting`.
- The user wants content localisation — use `plan-localisation`.
- The user has a single-market site — Hreflang doesn't apply.

## Inputs required

1. **Business profile** — read `businesses/<slug>/business_profile.md`. Resolve `<slug>` by listing `businesses/`: if exactly one folder exists, use it; if multiple, ask which business; if none, recommend running `business-profile` first. Critical sections: products/services (3), markets / geographic operations.
2. **Markets in scope** — required. List of language-region pairs the brand serves (e.g. `en-us`, `en-gb`, `fr-fr`).
3. **Implementation method** — required if known (HTML `<link>`, HTTP header, or sitemap-based).
4. **Priority templates** — required. Homepage, pillar pages, top PDPs, key landing pages.
5. **GSC access** — required for International Targeting report.
6. **Existing Hreflang audit** — optional; if recent, build on it.

If markets list + GSC access are missing, ask. The audit is anchored to specific markets.

## Process

1. **Pull GSC International Targeting report.** Errors flagged by Google directly.
2. **Test priority templates.** Per page: capture HTML `<head>`, HTTP headers, and (if sitemap-based) check sitemap entries.
3. **Validate language-region codes.**
   - Language: ISO 639-1 (`en`, `fr`, `de`, `es`, `it`, `pt`).
   - Region: ISO 3166-1 Alpha 2 (`us`, `gb`, `fr`, `de`, `ca`, `au`).
   - Common errors: `uk` (use `gb`); `eu` (not valid); `cn` for "Chinese" (use `zh-cn` for Simplified, `zh-tw` for Traditional).
4. **Check self-reference.** Every page must include its own `hreflang="[code]"` pointing to itself.
5. **Check return tags.** For every A→B Hreflang, page B must include reciprocal B→A.
6. **Check x-default.** Should be present, pointing to a fallback URL (market selector or primary market homepage).
7. **Validate canonical alignment.**
   - Hreflang URL must match canonical URL exactly (including https vs http, trailing slash, www vs non-www).
   - If page A is canonicalised to page B, page A's Hreflang is ignored — flag.
8. **Check implementation-method consistency.** All Hreflang on a template uses the same method. Mixed methods (some HTML tag, some HTTP header) confuse Google.
9. **Run validator tools.**
   - TechnicalSEO.com Hreflang Tester.
   - Merkle Hreflang Tester.
   - Optional: Sitebulb full-site Hreflang audit.
10. **Spot-check non-priority templates.** Sample 5-10 random pages; confirm Hreflang implemented.
11. **Severity ranking.**
    - **Critical:** broken signalling site-wide (wrong region code, missing self-reference, all pages lack Hreflang).
    - **High:** missing return tags on priority templates, missing x-default, canonical misalignment.
    - **Medium:** isolated page-level issues, minor URL inconsistency.
    - **Low:** best-practice improvements.
12. **Estimate fix effort.** Most are template-level (one fix, broad impact). Some are content-level.
13. **Write the audit.**

## Output format

```markdown
# Hreflang Audit — [Business name]

**Audit date:** [date]
**Markets in scope:** [list]
**Implementation method:** [HTML tag / HTTP header / sitemap]
**Auditor:** [name / role]

## Executive summary
- **Critical issues:** [n]
- **High issues:** [n]
- **Medium / low:** [n]
- **GSC International Targeting errors:** [n]
- **Estimated fix effort:** [days]
- **Headline:** [1-2 sentences].

## GSC International Targeting findings
| Error | URL count | Severity |
|-------|-----------|----------|
| ... | ... | ... |

## Per-template audit

### [Template URL]

**Hreflang implementation:**
- Method: [HTML tag / HTTP header / sitemap].
- Markets covered: [list].
- Self-reference: [present / missing].
- Return tags: [complete / partial / missing].
- x-default: [present at URL X / missing].
- Canonical alignment: [pass / mismatch].
- URL consistency: [pass / issues].

**Issues:**
| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | `en-uk` instead of `en-gb` | Critical | Replace site-wide |
| 2 | Self-reference missing | High | Add to template |
| ... | ... | ... | ... |

[Repeat per priority template]

## Cross-template patterns
| Pattern | Templates affected | Root cause | Fix |
|---------|--------------------|-----|-----|
| `uk` instead of `gb` site-wide | All | Initial implementation error | Template-level find/replace |
| Missing x-default | All | Not specified at implementation | Add to global template |
| ... | ... | ... | ... |

## Validator tool results
- **TechnicalSEO Hreflang Tester:** [pass / errors found]
- **Merkle Hreflang Tester:** [pass / errors found]

## Prioritised remediations
| # | Issue / Pattern | Severity | Templates affected | Effort |
|---|-----------------|----------|--------------------|--------|
| 1 | Replace `en-uk` with `en-gb` | Critical | All | 2 hrs (template) |
| 2 | Add self-reference to every page | High | All | 1 day (template) |
| 3 | Add x-default to global header | High | All | 1 hr |
| 4 | Implement Hreflang on PDPs | High | PDP template | 1 day |
| ... | ... | ... | ... | ... |

## Acceptance criteria
- [ ] All Critical remediations shipped.
- [ ] GSC International Targeting errors resolved (verify in GSC after 14 days).
- [ ] Self-reference + return tags present on every priority template.
- [ ] x-default present.
- [ ] Canonicals align with Hreflang URLs.
- [ ] Validator tool runs clean.
- [ ] Re-audit scheduled in 90 days.

## Risks + watchouts
3-5 specific risks. E.g. "Site-wide template change requires regression testing across markets"; "Google may take 2-4 weeks to re-evaluate Hreflang signal post-fix; expect lag"; "Canonical changes can affect ranking temporarily; coordinate with technical-SEO team"; "Sitemap-based implementation requires sitemap re-submission to GSC"; "Multi-language CMS may not support all required Hreflang patterns natively — verify capability."

## Open questions
- [ ] Confirm full markets in scope (vs subset audited).
- [ ] Confirm implementation method preference for new markets.
- [ ] Confirm canonical strategy for any duplicate-content patterns.
```

Save the produced file to `businesses/<slug>/international/hreflang-audit-[YYYY-MM-DD].md`. Create the `international/` sub-folder if it doesn't already exist. After writing, tell the user the file path so they can open it.

## Quality bar

- All language-region codes validated (especially `gb` not `uk`).
- Self-reference + return tags + x-default explicitly checked.
- Canonical alignment verified.
- URL consistency (https / trailing slash / www) checked.
- Implementation-method consistency checked.
- GSC International Targeting cross-referenced.
- Validator-tool output included.
- Cross-template patterns identified for template-level fixes.
- Remediations prioritised + effort-estimated.

## Common mistakes to avoid

- Don't accept `uk`. Use `gb`. Most-common error in international SEO.
- Don't skip self-reference check.
- Don't skip return-tag check.
- Don't audit only homepage. Hreflang must apply per-template.
- Don't propose fixes without canonical-alignment verification.
- Don't recommend sitemap-based Hreflang for small sites — HTML tag is simpler.
- Don't ignore GSC International Targeting report — it's diagnostic.
- Don't audit and walk away. Quarterly cadence.

## Example

**Input (abbreviated):** Field & Sun. Markets: US + UK. Implementation: HTML tag. Priority templates: homepage, pillar, top 3 PDPs.

**Output (abbreviated):**

Critical (1): `en-uk` used site-wide instead of `en-gb`. Fix: 2 hr template find/replace.

High (3): self-reference missing on all templates; x-default absent; PDPs missing Hreflang entirely.

Medium / low (2): canonical mismatch on 2 PDP variants; URL trailing slash inconsistent.

GSC: 47 URLs flagged with "no return tags."

Cross-template patterns: `uk` site-wide; PDP template lacks Hreflang block.

Total fix effort: ~2-3 days dev (mostly template work).

Saved to `businesses/field-and-sun/international/hreflang-audit-2026-05-01.md`.
