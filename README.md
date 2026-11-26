# Night City Sovereignty Protocol v0.1

An unofficial fan publication about civic autonomy, power and speculative urban futures. Six sections: manifesto, Richard Night timeline, constrained-budget sovereignty model, circuit-inspired oscillator, spoiler-aware district/faction atlas, and a budgeted neighborhood design desk.

## Run locally

No dependencies or build step. Install Node.js 18+ and run:

```sh
npm start
```

Open http://127.0.0.1:4173. Alternatively, open `dist/index.html` directly in a modern browser. Local storage behavior under `file:` URLs varies; use the local server for reliable saving.

```sh
npm test
npm run check
```

## Publish on Vercel

1. Upload the extracted project to a GitHub repository, keeping `vercel.json`, `package.json` and `dist` at the repository root.
2. In Vercel, choose Add New → Project and import that repository.
3. Keep the project root at the repository root. The included `vercel.json` selects the Other framework preset, skips building and serves `dist`.
4. Deploy. No environment variables or API keys are required. Future pushes to the connected production branch can deploy your edits.

If configuring manually: Framework Preset = Other; Build Command = override enabled, empty; Output Directory = dist.
The ChatGPT sign-in gate belongs to the private Sites host and is not part of this source. Vercel access follows your Vercel project's deployment-protection settings. Device-saved proposals do not transfer between hosting domains.

## Publish on GitHub Pages

1. Create a GitHub repository and upload this project's files (keep the `dist` directory).
2. In Settings → Pages, select **GitHub Actions** as the build and deployment source.
3. The included `.github/workflows/pages.yml` publishes `dist` when you push to `main`. If your default branch differs, change the workflow branch.
4. Open the deployed URL reported by the workflow. Relative asset paths and hash navigation support both project and account Pages URLs.

No secrets, API keys or server services are required. The `.openai/hosting.json` file belongs to the accompanying private Sites deployment; GitHub Pages ignores it. Remove that file if adapting this project for a new Sites identity.

## Source map

- `dist/index.html`: document shell, source dialog and navigation landmarks.
- `dist/style.css`: Chromatic Entropy palette, responsive layout and subtle CRT treatment.
- `dist/app.js`: six views, content, source ledger and interaction handlers.
- `dist/model.js`: independently testable formulas and oscillator integration.
- `tests/model.test.cjs`: budget constraints, score bounds, shock behavior and numerical stability.
- `serve.cjs`: dependency-free local server.

## Models and limitations

The sovereignty experiment allocates at most 100 invented civic credits. Formulas and assumptions are visible in the interface and in `model.js`. Indices are illustrative and deliberately encode editorial judgments. Unallocated credits have no extra effect. This is not a calibrated economic model.

The circuit experiment solves x″ + 2dx′ + kx = 0 with semi-implicit Euler, dt = 0.04. x is abstract deviation, not a measured economic variable. The graph is a complete static response that recalculates on input; it has no background animation. MONIAC is cited as historical context for physical economic analogies and was hydraulic, not electrical.

The Reborn desk uses fictional one-time costs and caps spending at 100. Save writes only six booleans to localStorage (`ncsp-plan-v1`). JSON downloads are exports, not importable saves in this version. Only Reborn persists; other scenarios reset on reload. There are no analytics, accounts, external asset requests or application dependencies.

## Editorial and spoiler policy

Every section labels fictional canon, real research, interpretation or speculative design. The timeline is deliberately selective, not a complete historical chronology. Lore covers only broad setting premises. No missions, character outcomes, endings, expansion stories or future-game information are included. External sources may contain spoilers and are labeled accordingly.

Canonical surname: Richard **Night**. The unnamed economics/electricity book from the original brief is not identified or attributed. Add title, author, edition, page references and a careful analogy mapping when available.

## Sources

- [Cyberpunk Wiki: Night City](https://cyberpunk.fandom.com/wiki/Night_City) — secondary community reference for historical timeline; underlying fictional world by R. Talsorian Games / CD PROJEKT RED.
- [CDPR: Your Trip to Night City](https://www.cyberpunk.net/en/news/50110/your-trip-to-night-city-best-spots-for-street-photography) — primary city guide.
- [Licensed board-game rulebook](https://resources.cmon.com/Cyberpunk-2077-Rulebook.pdf) — district names.
- [PC Gamer faction guide](https://www.pcgamer.com/cyberpunk-2077-gangs-factions/) — broad faction descriptions.
- [Nobel committee 2009 summary](https://www.nobelprize.org/uploads/2018/06/press-7.pdf) — real research on economic governance, including Ostrom. Does not validate the model weights.
- [Science Museum: Back to the Future of Computing](https://blog.sciencemuseum.org.uk/back-to-the-future-of-computing/) — historical context for analogue computing.

## Rights

Unofficial, non-commercial fan project. Not endorsed by or affiliated with CD PROJEKT RED or R. Talsorian Games. Cyberpunk characters, world and trademarks belong to their respective rights holders. No game artwork, audio or logos are bundled. The abstract skyline is original SVG interface art. No broad license to third-party intellectual property is granted; review rights before redistribution or commercial use.

## Contributing

Keep lore summaries short, cite each new claim, and label interpretation separately. Do not add plot spoilers to this edition. New model assumptions should be visible in the UI and have constraint tests. Preserve keyboard navigation, native labels, mobile layouts and reduced-motion support.
