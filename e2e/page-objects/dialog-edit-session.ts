import type { Locator, Page } from '@playwright/test';

export class DialogEditSession {
  public constructor(private readonly page: Page) {}

  private dialog(): Locator {
    return this.page.locator('mat-dialog-container:visible').last();
  }

  public buttonStartDatepickerToggle(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__button-start-datepicker-toggle');
  }

  public buttonEndDatepickerToggle(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__button-end-datepicker-toggle');
  }

  public inputStart(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__input-start');
  }

  public buttonResetStart(): Locator {
    return this.dialog().locator('button-reset-input-control button').nth(0);
  }

  public validationErrorStart(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__start-validation-error');
  }

  public inputEnd(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__input-end');
  }

  public buttonResetEnd(): Locator {
    return this.dialog().locator('button-reset-input-control button').nth(1);
  }

  public buttonSubmit(): Locator {
    return this.dialog().getByTestId('dialog-edit-session__button-submit');
  }

  public async setStart(value: string): Promise<void> {
    const input = this.inputStart();
    await this.buttonResetStart().click();
    await input.evaluate((el, nextValue) => {
      const htmlInput = el as HTMLInputElement;
      htmlInput.value = nextValue;
      htmlInput.dispatchEvent(new Event('input', { bubbles: true }));
      htmlInput.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }

  public async setEnd(value: string): Promise<void> {
    const input = this.inputEnd();
    if (await this.buttonResetEnd().isVisible()) {
      await this.buttonResetEnd().click();
    }
    await input.evaluate((el, nextValue) => {
      const htmlInput = el as HTMLInputElement;
      htmlInput.value = nextValue;
      htmlInput.dispatchEvent(new Event('input', { bubbles: true }));
      htmlInput.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }
}
