# CLAUDE.md — [Business Name]

> Working memory for the SEO program for **[Business Name]**. Future AI collaborators read this to orient quickly. Keep entries terse and update as decisions, learnings, constraints, or priorities surface.

## Quick context

- **Slug:** `<slug>`
- **Workspace created:** [YYYY-MM-DD]
- **Last updated:** [YYYY-MM-DD]
- **Active priorities (this quarter):**
  - [Priority 1]
  - [Priority 2]
  - [Priority 3]
- **Recent artifacts of note:**
  - [path/to/recent/artifact.md] — one-line summary
  - [path/to/recent/artifact.md] — one-line summary

## Decisions log

*Append chronologically. Format: ### YYYY-MM-DD — title. Capture the decision, the reason, and what it means going forward.*

### [YYYY-MM-DD] — example entry

- Decision: ...
- Reason: ...
- Implication for future work: ...

## Learnings

*What we've discovered works (or doesn't) for this specific business. Keep terse — one bullet per learning.*

- *(Empty — populate as patterns emerge from shipping work.)*

## Constraints / quirks

*Things that keep coming up and should be respected without re-asking. Brand guardrails, CMS limits, founder preferences, market quirks, regulatory edges.*

- *(Empty — populate as the user reinforces preferences or limits.)*

## Active experiments

*Tests in flight. Format: ### YYYY-MM-DD started — title.*

### [YYYY-MM-DD started] — example experiment

- Hypothesis: ...
- Variant(s): ...
- Measuring: [metric] over [timeframe]
- Status: [running / paused / concluded — with verdict if concluded]

## How AI collaborators should update this file

This file is maintained by AI collaborators as a side-effect of working in this workspace. Specific update rules:

- **Decision made by the user that affects future SEO work** → append to **Decisions log**. Examples: "we'll prioritise the laundry cluster over dish for Q3," "deferred link building until after the rebrand," "the SEO Wins backlog top 5 are owned by the founder, not the marketer."
- **Non-obvious learning about this business surfaces in conversation or in artifact analysis** → add a bullet to **Learnings**. Examples: "Wirecutter dominates our top 10 commercial SERPs head-to-head — we should focus on adjacent angles instead," "blog refresh ROI here is much higher than new content (probably because indexed depth is shallow)."
- **User reinforces a preference or hits a constraint twice or more** → add to **Constraints / quirks**. Examples: "founder dislikes the word 'sustainable'," "Shopify theme doesn't allow per-product canonical overrides," "this brand sells only in EU markets — no US examples in outputs."
- **An experiment starts** → add to **Active experiments**. **Concludes** → update status with verdict.
- **Active priorities shift** → update **Quick context > Active priorities**. Don't delete the previous list silently — note the shift in **Decisions log** so future sessions see why.

What *not* to log here:

- Routine actions ("ran keyword research today"). The artifact files are the record of what was produced — don't duplicate.
- Anything already obvious from `business_profile.md` (the profile is the source of truth for static facts).
- Speculative ideas that haven't been decided. Use Active experiments only after something is actually being tested.

When updating, also bump **Quick context > Last updated**. Keep the file under ~150 lines — if it's growing past that, the older entries can be archived to `archive/CLAUDE-<YYYY-Q>.md` in the same workspace folder, with the live file holding only the current quarter.

## How the user can interact with this file

You don't have to manually edit this file — the AI collaborator maintains it. But if you want to:

- **Add something explicitly** → tell the AI collaborator "log this in CLAUDE.md: [entry]" and it will append to the right section.
- **Correct or remove an entry** → tell the AI collaborator "remove the entry about [X]" and it will edit accordingly.
- **Review the running state** → just open the file. The Quick context section is designed to give you the current state at a glance.
