import { fixture, test } from 'testcafe';
import { app } from '../page-objects/app';
import { dialogPrompt } from '../page-objects/dialog-prompt';
import { menuTaskActions } from '../page-objects/menu-task-actions';
import { screenTask } from '../page-objects/screen-task';
import { screenTasks } from '../page-objects/screen-tasks';
import { tooltip } from '../page-objects/tooltip';
import { getLocationPathname, reload, urlTo } from '../utils';

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
  // Send the "a t" and "ф е" hotkeys, assert the "Add a task" dialog opens for both
  for (const combo of ['a t', 'ф е']) {
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

test('Starting/stopping the task', async (t) => {
  // Create a task
  await t.navigateTo(urlTo('/'));
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogPrompt.input, 'Task')
    .click(dialogPrompt.buttonSubmit);
  // Assert the app has a regular favicon
  await t.expect(app.favicon.getAttribute('href')).contains('/favicon.svg');
  // Assert the task is marked as active/not-running in the task list item, task list item context action, task view title and task view context action
  await t.expect(screenTasks.taskStateIcon.textContent).contains('play_circle_outline');
  await t.click(screenTasks.buttonTaskAction.nth(1));
  await t.expect(menuTaskActions.selectorState.textContent).contains('Active');
  await t.pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).contains('play_circle_outline');
  await t.click(screenTask.buttonTaskAction);
  await t.expect(menuTaskActions.selectorState.textContent).contains('Active');
  await t.pressKey('esc');
  // Assert the "Start" button is visible and has the "Start" tooltip
  await t.expect(screenTask.buttonStart.exists).ok();
  await t.expect(screenTask.buttonStop.exists).notOk();
  await t.hover(screenTask.buttonStart);
  await t.expect(tooltip.textContent).eql('Start');
  // Start a task with the "Start" button
  await t.click(screenTask.buttonStart);
  // Assert the task is marked as active/running in the task list item and task view title
  await t.expect(screenTasks.taskStateIcon.textContent).contains('pause_circle_filled');
  await t.expect(screenTask.stateIcon.textContent).contains('pause_circle_filled');
  // Stop and start the session several times
  for (const _ of [1, 2, 3]) {
    await t.click(screenTask.buttonStop);
    await t.click(screenTask.buttonStart);
  }
  // Assert a session with start time and no end time appears at the top of the session list, with 00:00 duration
  await t.expect(screenTask.sessionRow.count).eql(4);
  await t.expect(screenTask.sessionStart.nth(0).textContent).match(/\d/);
  await t.expect(screenTask.sessionEnd.nth(0).textContent).notMatch(/\d/);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).contains('00:00');
  // Assert the "Start" button is replaced with the "Stop" button and its tooltip reads "Stop"
  await t.expect(screenTask.buttonStop.exists).ok();
  await t.hover(screenTask.name);
  await t.hover(screenTask.buttonStop);
  await t.expect(tooltip.textContent).eql('Stop');
  // Assert the app favicon changed to the "Running" one
  await t.expect(app.favicon.getAttribute('href')).contains('/favicon-active.svg');
  // Stop the task by clicking the "Stop" button
  await t.click(screenTask.buttonStop);
  // Assert the "Stop" button is replaced by the "Start" button
  await t.expect(screenTask.buttonStart.exists).ok();
  await t.expect(screenTask.buttonStop.exists).notOk();
  // Assert all the status indicators reverted back to active/not-running
  await t.expect(screenTasks.taskStateIcon.textContent).contains('play_circle_outline');
  await t.expect(screenTask.stateIcon.textContent).contains('play_circle_outline');
  // Start and stop the task with the "s" and "ы" hotkeys, assert it starts and stops
  for (const combo of ['s', 'ы']) {
    await t.pressKey(combo);
    await t.expect(screenTasks.taskStateIcon.textContent).contains('pause_circle_filled');
    await t.pressKey(combo);
    await t.expect(screenTasks.taskStateIcon.textContent).contains('play_circle_outline');
  }
});

test('Changing task status', async (t) => {
  // Open an active/non-running task
  await t.navigateTo(urlTo('/'));
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogPrompt.input, 'Task')
    .click(dialogPrompt.buttonSubmit);
  // Cycle task statuses Active->Finished->Dropped->Active using task list context action, assert the status changes
  await t
    .click(screenTasks.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionFinished)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('check_circle_outline');
  await t.click(app.buttonFinishedTasks);
  await t.expect(screenTasks.taskStateIcon.textContent).eql('check_circle_outline');
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTasks.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionDropped)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('delete_outline');
  await t.click(app.buttonDroppedTasks);
  await t.expect(screenTasks.taskStateIcon.textContent).eql('delete_outline');
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTasks.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionActive)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('play_circle_outline');
  await t.click(app.buttonActiveTasks);
  await t.expect(screenTasks.taskStateIcon.textContent).eql('play_circle_outline');
  await t.click(screenTasks.taskItem);

  // Cycle task statuses Active->Finished->Dropped->Active using task screen context action, assert the status changes
  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionFinished)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('check_circle_outline');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionDropped)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('delete_outline');
  await t.click(app.buttonDroppedTasks);
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionActive)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('play_circle_outline');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);

  // Cycle task statuses Active->Finished->Active using hot keys, assert the status changes
  // ENG
  await t.pressKey('m f').pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('check_circle_outline');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t.pressKey('m a').pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('play_circle_outline');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);
  // RU
  await t.pressKey('ь а').pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('check_circle_outline');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t.pressKey('ь ф').pressKey('esc');
  await t.expect(screenTask.stateIcon.textContent).eql('play_circle_outline');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);
});

test('Renaming the task', async (t) => {
  // Open the "Rename" task dialog the task list "Rename" action
  await t.navigateTo(urlTo('/'));
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogPrompt.input, 'Task')
    .click(dialogPrompt.buttonSubmit)
    .click(screenTasks.buttonTaskAction)
    .click(menuTaskActions.buttonRename);
  // Erase the value, assert a validation message is shown
  await t.click(dialogPrompt.input).pressKey('ctrl+a').pressKey('delete').pressKey('tab');
  await t.expect(dialogPrompt.validationError.textContent).eql('Value is required');
  // Submit the dialog with "Enter", assert the task got renamed
  await t.typeText(dialogPrompt.input, 'Task 1').pressKey('enter');
  await t.expect(screenTasks.taskName.textContent).eql('Task 1');
  await t.expect(screenTask.name.textContent).eql('Task 1');
  // Rename the task again, but submit with "OK", assert the task got renamed
  await t.click(screenTask.buttonTaskAction).click(menuTaskActions.buttonRename);
  await t.typeText(dialogPrompt.input, 'Task 2', { replace: true });
  await t.click(dialogPrompt.buttonSubmit);
  await t.expect(screenTask.name.textContent).eql('Task 2');
  // Assert hotkeys open the "Rename task" dialog too
  for (const combo of ['r t', 'к е']) {
    await t.pressKey(combo);
    await t.expect(dialogPrompt.title.textContent).eql('Rename task');
    await t.expect(dialogPrompt.input.value).eql('Task 2');
    await t.click(dialogPrompt.buttonDismiss);
  }
});

test('Deleting the task', async (t) => {
  const addTask = async () => {
    await t
      .click(screenTasks.emptyStateAddTaskButton)
      .typeText(dialogPrompt.input, 'Task')
      .click(dialogPrompt.buttonSubmit);
  };
  // Open a task
  await t.navigateTo(urlTo('/'));
  await addTask();
  await t.expect(screenTask.screen.exists).ok();
  // Remove it with the task list "Remove" context action
  await t.click(screenTasks.buttonTaskAction).click(menuTaskActions.buttonDelete);
  // Assert the task disappears from the task list
  await t.expect(screenTasks.taskItem.count).eql(0);
  // Assert the task details are closed
  await t.expect(screenTask.screen.exists).notOk();
  // Assert the URL does not contain task ID anymore
  await t.expect(getLocationPathname()).match(/\/active$/);
  // Assert the task can also be remove using task details context action and hotkeys
  await addTask();
  await t.expect(screenTasks.taskItem.count).eql(1);
  await t.click(screenTask.buttonTaskAction).click(menuTaskActions.buttonDelete);
  await t.expect(screenTasks.taskItem.count).eql(0);
  for (const combo of ['d t', 'в е']) {
    await addTask();
    await t.expect(screenTasks.taskItem.count).eql(1);
    await t.pressKey(combo);
    await t.expect(screenTasks.taskItem.count).eql(0);
  }
});
