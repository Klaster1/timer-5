import { e2e } from '../utils';

export const dialogCreateTask = {
  title: e2e('dialog-create-task__title'),
  input: e2e('dialog-create-task__input'),
  validationError: e2e('dialog-create-task__validation-error'),
  buttonSubmit: e2e('dialog-create-task__button-submit'),
  buttonDismiss: e2e('dialog-create-task__button-dismiss'),
};
