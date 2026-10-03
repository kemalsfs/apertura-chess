# Apertura 3.0 technical checkpoint

Updated: 2026-10-03. Working branch: `codex/apertura-v3`.

## Protection and integration

- The pre-v3 `main` state is commit `90657b6`; a verified full-history Git bundle and original icon backup are retained outside the repository.
- Each implementation package was reviewed, committed separately, and pushed to `origin/codex/apertura-v3`.
- The detailed implementation and test journal is maintained in the KemalOS Apertura v3 project note.

## Verified code and package

- Version: npm/web `3.0.0`, Android `versionCode 3` and `versionName 3.0.0`.
- Data migration and JSON restore use transactions. Restore repairs missing parent-child links while preserving existing records and rejects cyclic backup graphs.
- Match review resolves the actual default repertoire, and drill retries start from the displayed position.
- `npm test`: 45 Vitest and 5 Node tests passed. `npm run build` and the generated offline shell test passed.
- `npx cap sync android` and `:app:assembleDebug` passed. The current debug APK uses separate package `com.aperturachess.app.debug` and label `Apertura 3 Test` so it can be installed beside the Play app without replacing its local data. It reports minSdk 24, targetSdk 36 and version 3.0.0. Its SHA-256 is `5B2491C6E3D1A46A5C76BB5199846555EC96E3899D1431A4B34BB7C67E6B4379`.
- Edge 154 with a real service worker passed offline reload and a fresh browser launch after the local server had been shut down. The app shell cache was `apertura-shell-9df666a88668da70`.

## Open acceptance and risks

- Test system navigation overlap, launcher icon after install/update, JSON export/import and long analysis on the affected Samsung device. Its model and Android version are not known.
- Two source lint warnings remain in the asynchronous game review effects. They were left in place to avoid changing the review state flow without dedicated UI coverage. The production JS chunk is about 2.13 MB; approximately 1.51 MB is the embedded 7,854-position ECO book. Its gzip size is about 312 KB overall. Lazy loading Atlas, Drill and Analytics is a candidate optimization, pending measured startup impact.
- Release signing secrets were removed from tracked source, but an old Git commit contains them. Treat the upload key as potentially exposed and resolve its status before distributing a release package. The local keystore has been retained; no signing secrets are stored in this note.
- Android WebView behavior, OS-level PWA install and version-to-version PWA updates have not been verified. Play Store closed testing is outside this checkpoint.
