# INVENTORY.md

> Structural ledger for the toolkit. One dated snapshot per row — append a new row when categories, leaves, or skills change (don't edit old rows). `AGENTS.md` points here; keeping the ledger out of the agent instructions keeps that file lean for context loading. Verify counts before appending: `find playbook -name '*.md' ! -name 'README.md' | wc -l` (leaves) and `find skills -name 'SKILL.md' | wc -l` (total skills).

## Current state (as of 2026-07-05)

| | Count |
|---|---|
| Categories | 10 |
| Leaves | 63 |
| Category overview READMEs | 10 |
| Playbook skills | 73 |
| Setup skills (`business-context`, `seo-foundation`, legacy `business-profile`) | 3 |
| **Total skills** | **76** |
| Sample businesses | 1 (Field & Sun) |
| `.gitkeep` files | 0 |

**Categories in learning-path order:** Strategy · On-page SEO · Technical SEO · Content SEO · Analytics · Off-page SEO · UX · International SEO · AI SEO · Growth.

The v1 structure is final. Don't add categories or leaves without explicit user direction. Future work is maintenance, depth additions within existing leaves, and the parked categories listed in `AGENTS.md`.

## Ledger

| Date | Categories | Leaves | Total skills | Note |
|---|---|---|---|---|
| 2026-05-02 | 10 | 63 | 76 | v1 structure complete |
| 2026-07-05 | 10 | 63 | 76 | Re-verified during full repo review; no structural change |
