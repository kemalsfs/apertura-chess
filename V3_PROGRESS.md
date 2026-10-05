# Apertura 3.0 technical checkpoint

Updated: 2026-10-05. Working branch: `codex/apertura-v3`.

## Protection and integration

- The pre-v3 `main` state is commit `90657b6`; a verified full-history Git bundle and original icon backup are retained outside the repository.
- Each implementation package was reviewed, committed separately, and pushed to `origin/codex/apertura-v3`.
- The detailed implementation and test journal is maintained in the KemalOS Apertura v3 project note.
- Latest GitHub backup on this branch: `b0da3da` (source and lockfile); the working tree was clean after push.

## Verified code and package

- Version: npm/web `3.0.0`, Android `versionCode 3` and `versionName 3.0.0`.
- Data migration and JSON restore use transactions. Restore repairs missing parent-child links while preserving existing records and rejects cyclic backup graphs.
- Match review resolves the actual default repertoire, and drill retries start from the displayed position.
- `npm test`: 45 Vitest and 5 Node tests passed. `npm run build`, `npm run lint` (two existing review-effect warnings), and the generated offline shell test passed on 2026-10-05.
- `npx cap sync android` and `:app:assembleDebug` passed after the latest UI changes. The current debug APK uses separate package `com.aperturachess.app.debug` and label `Apertura 3 Test` so it can be installed beside the Play app without replacing its local data. It reports minSdk 24, targetSdk 36 and version 3.0.0. Path: `android/app/build/outputs/apk/debug/app-debug.apk`; size 5,015,107 bytes; SHA-256 `EB6952FF60048CDCD0BB173430D3BF58AB828031428B58189DD207617A8320C1`. A hash-verified copy is retained in the KemalOS Apertura v3 archive.
- Edge 154 with a real service worker passed offline reload and a fresh browser launch after the local server had been shut down. The app shell cache was `apertura-shell-9df666a88668da70`.
- A real Edge update simulation kept an open A tab on its cached build while B waited; the A tab loaded a previously unopened Atlas chunk offline. After A tabs closed, B activated, deleted the old cache, and reopened offline with localStorage and IndexedDB markers intact. The latest built shell is `apertura-shell-f9b818a66c1a74ea`.
- Atlas, Drill, and Analytics now load on demand. Initial executable JavaScript is approximately 362 KB plus a 143 KB preload; the 1.51 MB ECO book is separate. Header, Atlas tree, and confirmation/onboarding dialogs gained keyboard focus behavior. On mobile, Atlas initially shows the hierarchy, bottom navigation has larger labeled controls, and the first-use tour leads to the board. Board save feedback reports pending, success, and failure; the Hub only reports measured drill accuracy and activity.

## Open acceptance and risks

- Test system navigation overlap, launcher icon after install/update, JSON export/import and long analysis on the affected Samsung device. Its model and Android version are not known.
- Two source lint warnings remain in the asynchronous game review effects. They were left in place to avoid changing the review state flow without dedicated UI coverage. The 1.51 MB ECO book still triggers a chunk warning; measured startup impact on a target Android device is unknown.
- Release signing secrets were removed from tracked source, but an old Git commit contains them. Treat the upload key as potentially exposed and resolve its status before distributing a release package. The local keystore has been retained; no signing secrets are stored in this note.
- No Android device or AVD was connected during this checkpoint. Android WebView behavior, OS-level PWA install, and migration from an actual previous web release remain unverified. Play Store closed testing is outside this checkpoint.
- A clean `npm ci` after patching transitive `brace-expansion` from 5.0.9 to 5.0.12 passed; 45+5 tests, build, lint and offline shell test passed again. `npm audit --omit=dev` reports zero findings. Three moderate development-only audit findings remain through `@capacitor/cli` → `xcode` → `uuid@7.0.3`; npm's proposed forced fix downgrades the CLI outside the declared range, so it was not applied. The Android APK payload did not change after this lockfile-only update.
- A separate review of the two game-analysis effect lint warnings found guards against stale callbacks and a keyed modal reset on game changes, but no focused React lifecycle coverage. The state flow was retained rather than changing it solely to silence warnings.
