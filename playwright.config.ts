import { defineConfig, devices } from '@playwright/test';
import { containerName, serverPort } from './scripts/playwright-server.js';

const isCI = process.env['CI'] === 'true' || process.env['CI'] === '1';
// Linux screenshots: the browser runs in a Playwright Server container, the tests run on this machine.
const isLinuxServer = process.env['E2E_LINUX'] === '1';
// The server renders in UTC. The runner must use it too, or dates in screenshots differ.
if (isLinuxServer) process.env['TZ'] = 'UTC';
const workers = isCI ? 4 : 5;
const baseURL =
  process.env['PLAYWRIGHT_BASE_URL'] ??
  (isCI ? 'http://localhost:4200/timer-5/' : `http://${isLinuxServer ? 'host.docker.internal' : 'localhost'}:4200/`);

const webServers = [
  ...(isCI
    ? [
        {
          command: 'npm run serve:ci',
          url: baseURL,
          reuseExistingServer: true,
          timeout: 120_000,
        },
      ]
    : []),
  ...(isLinuxServer
    ? [
        {
          name: containerName,
          command: 'node scripts/playwright-server.js',
          env: { ...process.env, E2E_RUNNER_PID: String(process.pid) } as Record<string, string>,
          wait: { stdout: /Listening on ws/ },
          stdout: 'pipe' as const,
          timeout: 120_000,
        },
      ]
    : []),
];

export default defineConfig({
  testDir: './e2e/fixtures',
  testMatch: '*.ts',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
    toHaveScreenshot: {
      animations: 'disabled',
      scale: 'device',
    },
  },
  retries: 0,
  fullyParallel: true,
  workers,
  reporter: [['line'], ['html', { open: 'never' }]],
  ...(isLinuxServer && {
    globalTeardown: './scripts/playwright-server.js',
    snapshotPathTemplate: '{testDir}/{testFileName}-snapshots/{arg}-{projectName}-linux{ext}',
  }),
  use: {
    baseURL,
    locale: 'en-US',
    testIdAttribute: 'data-e2e',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    ...(isLinuxServer && {
      timezoneId: 'UTC',
      connectOptions: { wsEndpoint: `ws://127.0.0.1:${serverPort}/` },
    }),
  },
  webServer: webServers.length ? webServers : undefined,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
