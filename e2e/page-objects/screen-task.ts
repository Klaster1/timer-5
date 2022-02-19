import { Selector } from 'testcafe';
import { e2e } from '../utils';

export const screenTask = {
  name: e2e('screen-task__name'),
  stateIcon: e2e('screen-task__state-icon'),
  buttonTaskAction: Selector('screen-task [data-e2e="button-task-actions__trigger"]'),
  buttonStart: e2e('screen-task__button-start'),
  buttonStop: e2e('screen-task__button-stop'),
  sessionRow: e2e('screen-task__session-row'),
  sessionStart: e2e('screen-task__session-start'),
  sessionEnd: e2e('screen-task__session-end'),
  sessionDuration: e2e('screen-task__session-duration'),
  screen: Selector('screen-task'),
  buttonSessionAction: e2e('screen-task__button-session-action'),
  taskDuration: e2e('screen-task__task-duration'),
  menuSession: {
    buttonEdit: e2e('menu-session__button-edit'),
    buttonDelete: e2e('menu-session__button-delete'),
    buttonSkipAfter: e2e('menu-session__button-skip-after'),
    buttonSkipBefore: e2e('menu-session__button-skip-before'),
  },
};
