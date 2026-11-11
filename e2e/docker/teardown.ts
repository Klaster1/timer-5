import { test } from '@playwright/test';
import { removeContainer } from '../../scripts/playwright-server.js';

test('Remove the Playwright Server container', async () => {
  removeContainer();
});
