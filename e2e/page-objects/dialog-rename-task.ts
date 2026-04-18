import type { Locator, Page } from '@playwright/test';

export class DialogRenameTask {
  public constructor(private readonly page: Page) {}

  private dialog(): Locator {
    return this.page.locator('mat-dialog-container:visible').last();
  }

  public title(): Locator {
    return this.dialog().getByTestId('dialog-rename-task__title');
  }

  public input(): Locator {
    return this.dialog().getByTestId('dialog-rename-task__input');
  }

  public validationError(): Locator {
    return this.dialog().getByTestId('dialog-rename-task__validation-error');
  }

  public buttonSubmit(): Locator {
    return this.dialog().getByTestId('dialog-rename-task__button-submit');
  }

  public buttonDismiss(): Locator {
    return this.dialog().getByTestId('dialog-rename-task__button-dismiss');
  }
}
