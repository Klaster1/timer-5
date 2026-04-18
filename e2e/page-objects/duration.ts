import type { Locator, Page } from '@playwright/test';

export class Duration {
  public constructor(private readonly page: Page) {}

  public root(): Locator {
    return this.page.locator('duration');
  }
}
