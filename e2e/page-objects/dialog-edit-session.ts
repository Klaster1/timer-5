import { t } from 'testcafe';
import { e2e } from '../utils';

export const dialogEditSession = {
  buttonStartDatepickerToggle: e2e('dialog-edit-session__button-start-datepicker-toggle'),
  buttonEndDatepickerToggle: e2e('dialog-edit-session__button-end-datepicker-toggle'),
  inputStart: e2e('dialog-edit-session__input-start'),
  validationErrorStart: e2e('dialog-edit-session__start-validation-error'),
  inputEnd: e2e('dialog-edit-session__input-end'),
  buttonSubmit: e2e('dialog-edit-session__button-submit'),
  async setStart(date: Date) {
    const input = this.inputStart;
    await t.eval(
      () => {
        const el = (input as any)() as HTMLInputElement;
        el.value = (date as Date).toISOString().replace('Z', '');
        el.dispatchEvent(new Event('input'));
      },
      { dependencies: { input, date } },
    );
  },
  async setEnd(date: Date) {
    const input = this.inputEnd;
    await t.eval(
      () => {
        const el = (input as any)() as HTMLInputElement;
        el.value = (date as Date).toISOString().replace('Z', '');
        el.dispatchEvent(new Event('input'));
      },
      { dependencies: { input, date } },
    );
  },
};
