import type { Locator, Page } from '@playwright/test';

const ROOT = 'dialog-hotkeys-cheatsheet';

export class DialogHotkeyCheatsheet {
  public constructor(private readonly page: Page) {}

  public dialog(): Locator {
    return this.page.locator(ROOT);
  }

  public descriptions(): Locator {
    return this.page.locator(`${ROOT} dd`);
  }

  public buttonDismiss(): Locator {
    return this.page.locator(`${ROOT} button`).filter({ hasText: 'Close' });
  }
}
