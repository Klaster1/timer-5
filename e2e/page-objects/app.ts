import type { Locator, Page } from '@playwright/test';

export class App {
  public constructor(private readonly page: Page) {}

  public favicon(): Locator {
    return this.page.locator('link[rel="icon"]');
  }

  public buttonActiveTasks(): Locator {
    return this.page.getByTestId('navigation__button-tasks-active');
  }

  public buttonFinishedTasks(): Locator {
    return this.page.getByTestId('navigation__button-tasks-finished');
  }

  public buttonDroppedTasks(): Locator {
    return this.page.getByTestId('navigation__button-tasks-dropped');
  }

  public buttonImportExport(): Locator {
    return this.page.getByTestId('navigation__button-import-export');
  }

  public buttonExport(): Locator {
    return this.page.getByTestId('navigation__button-export');
  }

  public inputImport(): Locator {
    return this.page.getByTestId('navigation__input-import');
  }

  public buttonSwitchTheme(): Locator {
    return this.page.getByTestId('navigation__button-theme');
  }

  public buttonTheme(name: 'Dark' | 'Light' | 'System'): Locator {
    return this.page.getByRole('menuitem', { name });
  }
}
