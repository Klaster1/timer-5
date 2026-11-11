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
2. `playwright.config.ts` gets one switch, `E2E_LINUX=1`. Only when it is set, the config:
   - starts the Playwright Server container through `webServer`, from `scripts/playwright-server.js`,
   - connects to it with `connectOptions`,
   - uses `http://host.docker.internal:4200/` as the base URL (`PLAYWRIGHT_BASE_URL` still wins),
   - sets `timezoneId: 'UTC'` and `process.env.TZ = 'UTC'`, so the runner and the browser agree,
   - names the snapshots `-linux`.
   The image tag and the server version come from the installed `@playwright/test` version.
   Done when: runs without the switch and CI behave as before.
3. The container never outlives a run. It has a fixed name, and three things remove it: the
   server script when its runner dies, a global teardown when a run ends, and a stale-container
   removal at start.
   Done when: `docker ps` is empty after a normal run, a failed run and a killed runner.
4. `package.json`: `e2e:linux` and `e2e:linux:update-snapshots` replace the three Docker
   scripts. `e2e:all` runs `e2e`, then `e2e:linux`. `Dockerfile` and `.dockerignore` go.
   Done when: nothing else refers to them.
5. `CLAUDE.md` and the test-hardening skill name the new route where they named the old one.

## Checks

- `npm run e2e` passes on Windows, as before.
- `npm run e2e:linux` passes against the existing Linux snapshots.
- `npm run e2e:linux:update-snapshots` on an unchanged tree leaves `git status` clean.
