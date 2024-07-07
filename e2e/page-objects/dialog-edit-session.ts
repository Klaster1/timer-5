import { Selector, t } from 'testcafe';
import { e2e } from '../utils';

export const dialogEditSession = {
  buttonStartDatepickerToggle: e2e('dialog-edit-session__button-start-datepicker-toggle'),
  buttonEndDatepickerToggle: e2e('dialog-edit-session__button-end-datepicker-toggle'),
  inputStart: e2e('dialog-edit-session__input-start'),
  buttonResetStart: Selector('dialog-edit-session button-reset-input-control button').nth(0),
  validationErrorStart: e2e('dialog-edit-session__start-validation-error'),
  inputEnd: e2e('dialog-edit-session__input-end'),
  buttonResetEnd: Selector('dialog-edit-session button-reset-input-control button').nth(1),
  buttonSubmit: e2e('dialog-edit-session__button-submit'),
  /**
   * Example: "2017-06-01T08:30"
   */
  async setStart(value: string) {
    const input = this.inputStart;
    await t.click(this.buttonResetStart);
    await t.eval(
      () => {
        const el = (input as any)() as HTMLInputElement;
        el.value = value;
        el.dispatchEvent(new Event('input'));
      },
      { dependencies: { input, value } },
    );
  },
  /**
   * Example: "2017-06-01T08:30"
   */
  async setEnd(value: string) {
    const input = this.inputEnd;
    if (await this.buttonResetEnd.exists) {
      await t.click(this.buttonResetEnd);
    }
    await t.eval(
      () => {
        const el = (input as any)() as HTMLInputElement;
        el.value = value;
        el.dispatchEvent(new Event('input'));
      },
      { dependencies: { input, value } },
    );
  },
};
