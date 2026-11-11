import { test } from '@playwright/test';
import { startContainer, watchRunner } from '../../scripts/playwright-server.js';

test('Start the Playwright Server container', async () => {
  test.setTimeout(120_000);
  // A worker's parent is the test runner.
  watchRunner(process.ppid);
  await startContainer();
});
