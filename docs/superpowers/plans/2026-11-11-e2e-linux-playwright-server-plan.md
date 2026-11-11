# Linux screenshots through Playwright Server in Docker

Branch: `e2e-linux-playwright-server`, from `master` at `526137a`.

## Goal

Windows screenshots and native local runs stay as they are. The Linux screenshots come from
Playwright Server in the official Playwright Docker image. The browser runs in the container,
and the test runner runs on the host. This replaces the custom `Dockerfile` and the test runner
inside Docker. The approach follows
https://patricktree.me/blog/consistent-visual-assertions-via-playwright-server-in-docker.

## Steps

One commit per step.

1. This plan.
2. `playwright.config.ts` gets a second project, `docker`, next to `chromium`. It:
   - connects to the Playwright Server with `connectOptions`,
   - uses `http://host.docker.internal:4200/` as the base URL (`PLAYWRIGHT_BASE_URL` still wins),
   - names its snapshots `-chromium-linux`, the names the existing Linux files have,
   - depends on the `docker-setup` project, which starts the container, and has the
     `docker-teardown` project as its teardown, which removes it.
   Every run sets `process.env.TZ = 'UTC'`, and both browser projects use `timezoneId: 'UTC'`.
   The test code builds dates in the runner's time zone and the browser shows them in its own,
   so the two must agree. The image tag and the server version follow the installed
   `@playwright/test` version.
   Done when: `--project=chromium` never touches Docker, and the Windows snapshots are unchanged.
3. The container never outlives a run. It has a fixed name. The teardown project removes it,
   the setup project removes a stale one at start, and a small detached watcher in
   `scripts/playwright-server.js` removes it when the runner is killed. The watcher and every
   process it starts use `windowsHide`, so no console window opens.
   Done when: `docker ps` is empty after a normal run, a failed run and a killed runner.
4. `package.json`: `e2e:docker` and `e2e:docker:update-snapshots` keep their names and run
   `--project=docker`. `e2e:all` runs `e2e`, then `e2e:docker`. `docker:build`, `Dockerfile` and
   `.dockerignore` go.
   Done when: nothing else refers to them.
5. `CLAUDE.md` and the test-hardening skill name the new route where they named the old one.

## Checks

- `npm run e2e` passes on Windows, as before, and `npm run e2e:update-snapshots` leaves
  `git status` clean.
- `npm run e2e:docker` passes against the existing Linux snapshots.
- `npm run e2e:docker:update-snapshots` on an unchanged tree leaves `git status` clean.
