import { defineConfig, devices } from '@playwright/test';

const isCI = process.env['CI'] === 'true' || process.env['CI'] === '1';
const workers = isCI ? 4 : 5;
const baseURL =
  process.env['PLAYWRIGHT_BASE_URL'] ?? (isCI ? 'http://localhost:4200/timer-5/' : 'http://localhost:4200/');

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
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
