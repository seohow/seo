# Skill Releases

Released skill artifacts are generated here by `npm run skills:package`. The layout is controlled by [`../release.config.json`](../release.config.json).

The release tree keeps the source category structure so admins can browse the toolkit without sorting through one flat pile of ZIP files:

```text
releases/
└── v1.0.0/
    ├── README.md
    ├── manifest.json
    ├── checksums.txt
    ├── setup/
    │   └── business-profile/
    │       └── business-profile-v1.0.0.zip
    └── categories/
        └── strategy/
            └── plan-keyword-research/
                └── plan-keyword-research-v1.0.0.zip
```

Each ZIP still contains one uploadable skill:

```text
plan-keyword-research-v1.0.0.zip
└── plan-keyword-research/
    └── SKILL.md
```

## Release checklist

1. Run `npm run skills:validate`.
2. For platform-strict checks, run `npm run skills:validate -- --strict-platform`.
3. Package the release: `npm run skills:package -- --version 1.0.0`.
4. Spot-check one setup ZIP and one category ZIP with `unzip -l`.
5. Commit the generated `releases/v<version>/` folder with the source changes it represents.
6. Tag the commit as `v<version>` and attach the generated ZIPs, `manifest.json`, and `checksums.txt` to the GitHub Release.

Claude organization provisioning and ChatGPT workspace skill upload/share flows should upload the individual ZIPs from inside the category folders, not the category folder itself.

The GitHub Actions workflow at `.github/workflows/release-skills.yml` can also package releases from a version tag or a manual dispatch.
