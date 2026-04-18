import type { Locator, Page } from '@playwright/test';

export class MenuTaskActions {
  public constructor(private readonly page: Page) {}

  public selectorState(): Locator {
    return this.page.getByTestId('button-task-actions__selector-state');
  }

  public optionActive(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-active');
  }

  public optionFinished(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-finished');
  }

  public optionDropped(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-dropped');
  }

  public buttonRename(): Locator {
    return this.page.getByTestId('button-task-actions__button-rename');
  }

  public buttonDelete(): Locator {
    return this.page.getByTestId('button-task-actions__button-delete');
  }
}
