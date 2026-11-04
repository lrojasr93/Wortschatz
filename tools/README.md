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

## Security

- `tools/seguridad.sql`: run once in the Supabase SQL editor after the other SQL files. Server-side dates and an hourly cap on anonymous inserts into `waitlist`, `encuesta` and `comentarios`; removes the `anon` role's access to `progress`.
- Content Security Policy: GitHub Pages cannot send headers, so `app/index.html` (built by `build.js`, with the data loader allowed by its sha256 hash), `index.html` and `privacidad.html` carry it in a `<meta>` tag. Only our own scripts run; network access is limited to Supabase and GoatCounter. If you add an inline `<script>` to the landing, move it to a `.js` file instead or the browser blocks it.
- Visit counts: `stats.js` (site root) sends anonymous counts straight to GoatCounter, so no third-party script runs on rumboalemania.com, where the app keeps the Supabase session. `build.js` inlines it into `app/app.js`; the landing loads it next to `landing.js`.

## English app (unlisted)

`en/` (served at rumboalemania.com/en/) is Luis's personal English app, Wordhoard: the same engine with English content and a Spanish interface. It is generated from `tools/ingles-artifact.html` (a copy of the Claude artifact) by `node tools/build-en.js [path/to/wordhoard.html]`; icons come from `node tools/icons-en.js`. The page is `noindex`, linked from nowhere, has its own CSP and no analytics. Progress stays in the browser (localStorage key `wordhoard-en-v1`), with export / import in Me → Progress. Signing in with an email (same Supabase project and accounts as Wortschatz, `tools/cloud-web.js`) syncs it to its own table `progress_en` (create it once with `tools/supabase-en.sql`, and add `https://rumboalemania.com/en/` to Supabase → Authentication → URL Configuration → Redirect URLs). Deleting there removes only the English progress, not the shared account.

## Measuring use and errors

- **GoatCounter** (anonymous, no cookies): the app counts screens (`app/<screen>`), finished steps of Today (`app/step-…`), levels, feedback, and per exercise `app/ex/<kind>/start`, `/done`, `/score-<band>` and `/quit-after-<answers>`. Start minus done is every exercise left unfinished, including when the app was closed. `app/ret/day-1|7|30` counts a learner's first return at least 1, 7 and 30 days after finishing the welcome (the first day is stored in their own progress as `S.ret`).
- **Errors**: `tools/build.js` adds a small inline reporter to `app/index.html` (allowed in the CSP by its hash) that posts uncaught errors to the Supabase table `errores` (no user id, at most 5 per visit). Create the table once with `tools/errores.sql`.
- **Where people struggle**: `tools/consultas.sql` has ready queries (most failed words and verb forms from synced progress, errors of the week, latest feedback). `node tools/fallos.js result.csv` turns the first query's CSV into readable German.
