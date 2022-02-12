import { Selector } from 'testcafe';
import { e2e } from '../utils';

export const screenTasks = {
  addTaskButton: e2e('button-add-task'),
  emptyStateAddTaskButton: e2e('screen-tasks__button-add-task-empty-state'),
  taskStateIcon: e2e('screen-tasks__task-state-icon'),
  taskName: e2e('screen-tasks__task-name'),
  buttonTaskAction: Selector('screen-tasks [data-e2e="button-task-actions__trigger"]'),
};
