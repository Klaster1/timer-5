import { e2e } from '../utils';

export const dialogEditSession = {
  buttonStartDatepickerToggle: e2e('dialog-edit-session__button-start-datepicker-toggle'),
  buttonEndDatepickerToggle: e2e('dialog-edit-session__button-end-datepicker-toggle'),
  inputStart: e2e('dialog-edit-session__input-start'),
  validationErrorStart: e2e('dialog-edit-session__start-validation-error'),
  inputEnd: e2e('dialog-edit-session__input-end'),
  buttonSubmit: e2e('dialog-edit-session__button-submit'),
};
