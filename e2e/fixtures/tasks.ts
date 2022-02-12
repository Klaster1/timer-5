import { fixture, test } from 'testcafe';
import { dialogPrompt } from '../page-objects/dialog-prompt';
import { screenTask } from '../page-objects/screen-task';
import { screenTasks } from '../page-objects/screen-tasks';
import { reload, urlTo } from '../utils';

fixture('Tasks');

test('Adding a task', async (t) => {
  await t.navigateTo(urlTo('/'));
  // Click the empty state "Add task" button
  await t.click(screenTasks.emptyStateAddTaskButton);
  // Submit the dialog with "Enter", assert a validation message is shown
  await t.expect(dialogPrompt.title.textContent).contains('Create task');
  await t.expect(dialogPrompt.input.focused).ok();
  await t.pressKey('enter').expect(dialogPrompt.validationError.textContent).contains('Value is required');
  // Enter the task name, submit with "Enter", assert the dialog is closed
  await t.typeText(dialogPrompt.input, 'Test').pressKey('enter');
  await t.expect(dialogPrompt.title.exists).notOk();
  // Assert the task is added and is in the "Active" state
  await t.expect(screenTasks.taskName.count).eql(1);
  await t.expect(screenTasks.taskName.textContent).contains('Test');
  await t.expect(screenTasks.taskStateIcon.textContent).contains('play_circle_outline');
  await t.expect(screenTask.name.textContent).contains('Test');
  await t.expect(screenTask.stateIcon.textContent).contains('play_circle_outline');
  // Send the "a t" and "ф е" hotkeys, assert the "Add a task" dialog opens for both
  const combos = ['a t', 'ф е'];
  for (const combo of combos) {
    await t.pressKey(combo);
    await t.expect(dialogPrompt.title.exists).ok();
    await t.click(dialogPrompt.buttonDismiss);
  }
  // Click the FAB "Add task" button, assert the "Add a task" dialog opens
  await t.click(screenTasks.addTaskButton);
  await t.expect(dialogPrompt.title.exists).ok();
  // Assert in "Add task" dialog, the "OK" button submits
  await t.typeText(dialogPrompt.input, 'Test 2');
  await t.click(dialogPrompt.buttonSubmit);
  await t.expect(screenTasks.taskName.nth(1).textContent).contains('Test 2');
  // Reload the app, assert the tasks persists
  await reload();
  await t.expect(screenTasks.taskName.nth(0).textContent).contains('Test');
  await t.expect(screenTasks.taskName.nth(1).textContent).contains('Test 2');
});
