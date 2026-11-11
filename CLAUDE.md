# Timer

Angular 22 time tracker. The app keeps all data in `localStorage`. Node 22.14 or newer.

## Angular

`OnPush` is the default change detection strategy. Do not add `changeDetection: ChangeDetectionStrategy.OnPush` to component decorators.

The repo tracks Angular's `next` releases. `npx ng update @angular/core@next @angular/cli@next @angular/material@next` moves it. TypeScript stays inside the range the Angular compiler accepts.

A component member that only its own template or host bindings read is `private`. Inputs, outputs, models and queries stay public.

## Scripts

- `npm start` serves the app on port 4200.
- `npm run build` makes the production build in `dist/` and runs `scripts/gh-pages-before-add.js`.
- `npm run e2e` runs the Playwright suite in `e2e/fixtures`. The repo has no unit tests.
- `npm run e2e:update-snapshots` rewrites the snapshots for the current OS.

## E2E tests

- Start `npm start` first. `npm run e2e` does not start a server outside CI.
- Screenshot tests compare against one snapshot per OS in `e2e/fixtures/<spec>.ts-snapshots/`: `*-chromium-win32.png` on Windows, `*-chromium-linux.png` on Linux.
- CI runs on Linux. It serves `dist/` at `http://localhost:4200/timer-5/` with `npm run serve:ci`.
- To check or update the Linux snapshots locally, run `npm run e2e:linux` or `npm run e2e:linux:update-snapshots`. Docker must run, port 3333 must be free, and the dev server must run on the host. The browser runs in a Playwright Server container, and the tests run on the host in UTC. The container is removed when the run ends.
- Test ids use the `data-e2e` attribute.
- Do not update snapshots to make a failing test pass. Find the visual change first.

## Plans

Write plans to `docs/superpowers/plans/` as `YYYY-MM-DD-<slug>.md`.
