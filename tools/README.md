# Wortschatz web app build

`app/` (served at rumboalemania.com/app) is generated from the single-file Claude artifact in `tools/wortschatz-artifact.html`.

- `node tools/build.js [path/to/wortschatz.html]` rebuilds `app/`: code in `app/app.js`, vocabulary packs in `app/data/*.json` (one file per pack, job packs in `app/data/jobs/`), manifest, service worker, icons and fonts.
- `node tools/icons.js` re-renders the icons in `tools/icons/` (needs Playwright).

The web version keeps progress only in the browser (localStorage). Claude account sync and Claude-written corrections and stories are off and marked "coming soon". Fonts are self-hosted from `tools/fonts/`, so the app makes no requests to Google.
