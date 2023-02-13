import { Selector, t } from 'testcafe';
import { e2e } from '../utils';
import { dialogPrompt } from './dialog-prompt';

export const screenTasks = {
  addTaskButton: e2e('button-add-task'),
  emptyStateAddTaskButton: e2e('screen-tasks__button-add-task-empty-state'),
  taskItem: e2e('screen-tasks__task-item'),
  taskStateIcon: e2e('screen-tasks__task-state-icon'),
  taskName: e2e('screen-tasks__task-name'),
  buttonTaskAction: Selector('screen-tasks [data-e2e="button-task-actions__trigger"]'),
  total: e2e('screen-tasks__total'),
  durationSelector: '[data-e2e="screen-tasks__task-duration"]',
  addTask: async (name: string) => {
    await t.pressKey('a').typeText(dialogPrompt.input, name).click(dialogPrompt.buttonSubmit);
    await t.expect(screenTasks.taskName.withExactText(name).exists).ok();
  },
  filter: {
    name: {
      input: Selector('tasks-filter .name input'),
      buttonClear: Selector('tasks-filter .name button-reset-input-control button'),
    },
  },
};
