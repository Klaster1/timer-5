import { defineConfig, devices } from '@playwright/test';
import { serverPort } from './scripts/playwright-server.js';

const isCI = process.env['CI'] === 'true' || process.env['CI'] === '1';
// The test code builds dates in the runner's time zone and the browser shows them in its own. Both use UTC.
process.env['TZ'] = 'UTC';
const workers = isCI ? 4 : 5;
const baseURL =
  process.env['PLAYWRIGHT_BASE_URL'] ?? (isCI ? 'http://localhost:4200/timer-5/' : 'http://localhost:4200/');
const desktopChrome = { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 }, timezoneId: 'UTC' };

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
  use: {
    baseURL,
    locale: 'en-US',
    testIdAttribute: 'data-e2e',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: isCI
    ? {
        command: 'npm run serve:ci',
        url: baseURL,
        reuseExistingServer: true,
        timeout: 120_000,
      }
    : undefined,
  projects: [
    {
      name: 'chromium',
      use: desktopChrome,
    },
    // Linux screenshots: the browser runs in a Playwright Server container, the tests run on this machine.
    {
      name: 'docker',
      default: false,
      // WebMCP exists only in a secure context, and http://host.docker.internal is not one. The spec has no screenshots.
      testIgnore: 'webmcp.ts',
      dependencies: ['docker-setup'],
      teardown: 'docker-teardown',
      snapshotPathTemplate: '{testDir}/{testFileName}-snapshots/{arg}-chromium-linux{ext}',
      use: {
        ...desktopChrome,
        baseURL: process.env['PLAYWRIGHT_BASE_URL'] ?? 'http://host.docker.internal:4200/',
        connectOptions: { wsEndpoint: `ws://127.0.0.1:${serverPort}/` },
      },
    },
    { name: 'docker-setup', default: false, testDir: './e2e/docker', testMatch: 'setup.ts' },
    { name: 'docker-teardown', default: false, testDir: './e2e/docker', testMatch: 'teardown.ts' },
  ],
});
