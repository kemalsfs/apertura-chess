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
- `npx cap sync android` and `:app:assembleDebug` passed. The debug APK reports package `com.aperturachess.app`, minSdk 24, targetSdk 36 and version 3.0.0. Its SHA-256 is `9641181780D7095487CB6E52F5EC08CD716CF7FB7D91CCCAAC971479C2D01953`.
- Edge 154 with a real service worker passed offline reload and a fresh browser launch after the local server had been shut down. The app shell cache was `apertura-shell-9df666a88668da70`.

## Open acceptance and risks

- Test system navigation overlap, launcher icon after install/update, JSON export/import and long analysis on the affected Samsung device. Its model and Android version are not known.
- Seven source lint warnings remain in game analysis and drill. The production JS chunk is about 2.13 MB.
- Release signing secrets were removed from tracked source, but an old Git commit contains them. Treat the upload key as potentially exposed and resolve its status before distributing a release package. The local keystore has been retained; no signing secrets are stored in this note.
- Android WebView behavior, OS-level PWA install and version-to-version PWA updates have not been verified. Play Store closed testing is outside this checkpoint.
