import { e2e } from '../utils';

export const menuTaskActions = {
  selectorState: e2e('button-task-actions__selector-state'),
  optionActive: e2e('button-task-actions__state-option-active'),
  optionFinished: e2e('button-task-actions__state-option-finished'),
  optionDropped: e2e('button-task-actions__state-option-dropped'),
  buttonRename: e2e('button-task-actions__button-rename'),
  buttonDelete: e2e('button-task-actions__button-delete'),
};
