import type { Locator, Page } from '@playwright/test';

export class Tooltip {
  public constructor(private readonly page: Page) {}

  public root(): Locator {
    return this.page.locator('mat-tooltip-component');
  }
}
