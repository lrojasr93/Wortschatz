# Wortschatz web app build

`app/` (served at rumboalemania.com/app) is generated from the single-file Claude artifact in `tools/wortschatz-artifact.html`.

- `node tools/build.js [path/to/wortschatz.html]` rebuilds `app/`: code in `app/app.js`, vocabulary packs in `app/data/*.json` (one file per pack, job packs in `app/data/jobs/`), manifest, service worker, icons and fonts.
- `node tools/icons.js` re-renders the icons in `tools/icons/` (needs Playwright).

The web version keeps progress in the browser (localStorage) and, for people who sign in, syncs it to Supabase (`tools/cloud-web.js`, inserted into `app.js` in place of the Claude account sync). Claude-written corrections and stories are off and marked "coming soon". Fonts are self-hosted from `tools/fonts/`, so the app makes no requests to Google.

## Accounts (Supabase)

- `tools/supabase.json` holds the project URL and the public anon key. Empty means no accounts: the Backup section works as before.
- `tools/supabase.sql` creates the `progress` table (one row per user, Row Level Security) and the `delete_account()` function. Run it once in the Supabase SQL editor.
- Sign-in is passwordless: an email with a link and a 6-digit code (the code is for the installed app on iPhone, where links open in Safari). The email templates must include `{{ .Token }}` for the code.
- Sync is local first: every save goes to localStorage and is pushed a few seconds later; coming back to the app pulls newer progress from another device. The first sign-in on a device that already has progress asks which progress to keep.
- The Supabase library is self-hosted in `tools/vendor/` and loaded only for people who sign in.
