# SEO Playbook Plugin

This plugin packages the SEO toolkit's playbook skills into an installable local marketplace plugin.

## Contents

- 73 skills copied from `playbook/*/*/skills/*/SKILL.md`
- 1 companion setup skill copied from `skills/generate-business-profile/SKILL.md`
- Codex plugin manifest at `.codex-plugin/plugin.json`
- Repo marketplace entry at `.agents/plugins/marketplace.json`

## Usage

In Codex, install the `seo-playbook` plugin from the repo-local marketplace entry.

For Claude CoWork or another skill-based agent, point the agent at this plugin's `skills/` directory. Each skill is self-contained in `skills/<skill-name>/SKILL.md`.

The skills expect the SEO toolkit workspace convention:

- Business profiles live at `businesses/<slug>/business_profile.md`
- Skill outputs are written under `businesses/<slug>/<artifact-subfolder>/`
- If no business exists yet, run `generate-business-profile` first

## Source

The plugin skills are copied from the playbook source tree. When playbook skills change, refresh this plugin by recopying `playbook/*/*/skills/*/SKILL.md` into `plugins/seo-playbook/skills/`. If the business-profile setup workflow changes, refresh `skills/generate-business-profile/SKILL.md` as well.
