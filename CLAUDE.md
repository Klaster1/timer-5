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
- Screenshot tests compare against one snapshot per OS in `e2e/fixtures/<spec>.ts-snapshots/`: `*-chromium-win32.webp` on Windows, `*-chromium-linux.webp` on Linux.
- CI runs on Linux. It serves `dist/` at `http://localhost:4200/timer-5/` with `npm run serve:ci`.
- To check or update the Linux snapshots locally, run `npm run e2e:docker` or `npm run e2e:docker:update-snapshots`. They run the `docker` Playwright project. Docker must run, port 3333 must be free, and the dev server must run on the host. The browser runs in a Playwright Server container, and the tests run on the host in UTC. The container is removed when the run ends. The `docker` project skips `webmcp.ts`: WebMCP needs a secure context, and `http://host.docker.internal` is not one.
- Test ids use the `data-e2e` attribute.
- Do not update snapshots to make a failing test pass. Find the visual change first.

## Commits and versions

The version, `CHANGELOG.md` and the releases come from the commit titles, through [release-please](https://github.com/googleapis/release-please). Never edit `version` in `package.json` or `package-lock.json`, or `CHANGELOG.md`, by hand.

- Write every commit title and pull request title as a [Conventional Commit](https://www.conventionalcommits.org): `type(scope): subject`, with the scope optional.
- `feat` bumps the minor version, `fix` the patch version. `feat!`, `fix!` or a `BREAKING CHANGE:` footer bumps the major version.
- `feat`, `fix`, `perf` and `revert` go into the changelog. `build`, `chore`, `ci`, `docs`, `refactor`, `style` and `test` do not, and do not make a release on their own.
- For `feat` and `fix`, the subject is the changelog line: one user-visible change in user terms, with no internals.
- Merge pull requests with a squash. GitHub takes the title from the commit when the PR has one commit, and from the PR title otherwise, so keep both conventional.

## Releases

`.github/workflows/release-please.yml` runs on every push to `master`. When a `feat`, `fix`, `perf` or `revert` commit has landed since the last release, it opens a release pull request titled `chore(master): release <version>`, which bumps `package.json` and `package-lock.json` and adds the new section to `CHANGELOG.md`. A step in the same workflow then merges that pull request at once. The merge push runs the workflow again, which tags `v<version>` and publishes a GitHub Release with that section as the notes. So every `feat` or `fix` is released within about a minute, and there is no step for you to take.

- The workflow uses the `GH_TOKEN` secret, not the default token. Pushes and releases made with the default token start no workflows, so the merge would neither tag the release nor deploy.
- The release pull request and its merge commit hold only the version and the changelog. `.github/workflows/cicd.yaml` skips them: its job has no run for a branch named `release-please--…` or a commit titled `chore(master): release …`.
- The deploy in `cicd.yaml` runs on every push to `master` whose tests pass, as before.
- The changelog text comes from the PR titles, and the release goes out with them. Check a title before you merge.
- If the merge step fails, the release pull request stays open. Merge it by hand.

`bootstrap-sha` in `release-please-config.json` starts the commit history at the commit before release-please was added. Release-please ignores it once the first release pull request has merged.

## Plans

Write plans to `docs/superpowers/plans/` as `YYYY-MM-DD-<slug>.md`.
