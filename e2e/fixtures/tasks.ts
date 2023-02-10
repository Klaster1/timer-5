import { writeFile } from 'fs/promises';
import { fixture, test } from 'testcafe';
import { app } from '../page-objects/app';
import { dateTimePicker } from '../page-objects/date-time-picker';
import { dialogEditSession } from '../page-objects/dialog-edit-session';
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
  // Unfocus the input, asset validation is show
  await t.pressKey('tab').expect(dialogPrompt.validationError.textContent).contains('Value is required');
  // Submit the dialog with "Enter", assert form is not submitted
  await t.click(dialogPrompt.input).pressKey('enter');
  await t.expect(dialogPrompt.title.textContent).contains('Create task');
  await t.expect(dialogPrompt.input.focused).ok();
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

test('Export/import', async (t) => {
  const referenceData = {
    version: 1,
    value: [
      { id: 'Bain', name: 'Task 1', state: 0, sessions: [] },
      { id: '1ph6', name: 'Task 2', state: 0, sessions: [] },
      { id: 'EnBz', name: 'Task 3', state: 0, sessions: [] },
    ],
  };
  const normalizeData = (data: typeof referenceData) => ({
    ...data,
    value: data.value.map((v, i) => ({ ...v, id: `${i}` })),
  });
  await t.navigateTo(urlTo('/'));
  // Have some tasks
  for (const name of ['Task 1', 'Task 2', 'Task 3']) {
    await screenTasks.addTask(name);
  }
  // Assert the export about works.
  // Checking the real downloaded files would have been much better, but there's no
  // acceptable way to reliably get the "Downloads" dir path without having to install Python
  // or Visual Studio on Windows.
  await t.click(app.buttonImportExport);
  await t.expect(app.buttonExport.getAttribute('href')).contains('blob');
  await t.expect(app.buttonExport.getAttribute('download')).eql('timer-data.json');
  await t.expect(app.buttonExport.getAttribute('target')).eql('_blank');
  const href = await app.buttonExport.getAttribute('href');
  if (!href) throw new Error('Missing href');
  const data = await t.eval(() => fetch(href as any).then((r) => r.json()), { dependencies: { href } });
  await t.expect(normalizeData(data)).eql(normalizeData(referenceData));
  // Remove all tasks
  await t.pressKey('d t').pressKey('j').pressKey('d t').pressKey('j').pressKey('d t');
  await t.expect(screenTasks.taskItem.count).eql(0);
  // Import the tasks, assert all tasks are imported
  const { file } = await import('tmp-promise');
  const { path, cleanup } = await file();
  await writeFile(path, JSON.stringify(data));
  await t.setFilesToUpload(app.inputImport, [path]);
  await t.expect(screenTasks.taskItem.count).eql(3);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('Task 1');
  await t.expect(screenTasks.taskName.nth(1).textContent).eql('Task 2');
  await t.expect(screenTasks.taskName.nth(2).textContent).eql('Task 3');
  await cleanup();
});

test('Editing a session', async (t) => {
  // Have a running task
  await t.navigateTo(urlTo('/'));
  await screenTasks.addTask('Test');
  await t.pressKey('s');
  // Change a running task session start time, assert the total changes
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql(' 00:00 ');
  await t.expect(screenTask.taskDuration.textContent).eql(' 00:00 ');
  await t.expect(screenTasks.total.textContent).eql(' (00:00) ');
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .click(dialogEditSession.buttonStartDatepickerToggle)
    .click(dateTimePicker.buttonHoursDecrement)
    .click(dateTimePicker.buttonHoursDecrement)
    .click(dateTimePicker.buttonHoursDecrement)
    .click(dateTimePicker.buttonSubmit)
    .click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql(' 03:00 ');
  await t.expect(screenTask.taskDuration.textContent).eql(' 03:00 ');
  await t.expect(screenTasks.total.textContent).eql(' (03:00) ');
  // For a running task session, set the end time, assert the task becomes active/non-running
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .click(dialogEditSession.buttonEndDatepickerToggle)
    .click(dateTimePicker.buttonHoursDecrement)
    .click(dateTimePicker.buttonSubmit)
    .click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql(' 02:00 ');
  await t.expect(screenTask.taskDuration.textContent).eql(' 02:00 ');
  await t.expect(screenTasks.total.textContent).eql(' (02:00) ');
  await t.expect(screenTask.stateIcon.textContent).contains('play_circle_outline');
  // For a complete task session, remove the end time, assert the task becomes active/running and the total updates
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .expect(dialogEditSession.inputEnd.exists)
    .ok()
    .click(dialogEditSession.inputEnd)
    .pressKey('ctrl+a delete')
    .click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql(' 03:00 ');
  await t.expect(screenTask.taskDuration.textContent).eql(' 03:00 ');
  await t.expect(screenTasks.total.textContent).eql(' (03:00) ');
  await t.expect(screenTask.stateIcon.textContent).contains('pause_circle_filled');
  // Edit a session, assert the form can't be submitted without start time
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .click(dialogEditSession.inputStart)
    .pressKey('ctrl+a delete')
    .click(dialogEditSession.buttonSubmit);
  await t.expect(dialogEditSession.validationErrorStart.textContent).contains('Start is required');
});

test('Moving a session', async (t) => {
  // Have two tasks with sessions
  await t.navigateTo(urlTo('/'));
  await screenTasks.addTask('To');
  await screenTasks.addTask('From');
  await t.pressKey('s').wait(500).pressKey('s');
  // Open task 1, drag a session to the task 2
  await t.expect(screenTask.sessionStart.count).eql(1);
  await t.dispatchEvent(screenTask.sessionRow, 'mousedown');
  await t.hover(screenTasks.taskItem.withText('To'));
  // Assert the task task list task is marked as drop target
  await t.expect(screenTasks.taskItem.withText('To').hasClass('cdk-drop-list-dragging')).ok();
  await t.expect(screenTask.sessionStart.count).eql(2);
  // Drop the session
  await t.dispatchEvent(screenTasks.taskItem.withText('To'), 'mouseup');
  // Assert the target task is no longer marked as the drop target
  await t.expect(screenTasks.taskItem.withText('To').hasClass('cdk-drop-list-dragging')).notOk();
  // Assert the total for both tasks were updated
  await t.expect(screenTasks.taskItem.withText('To').find(screenTasks.durationSelector).textContent).contains('00:00');
  await t.expect(screenTasks.taskItem.withText('From').find(screenTasks.durationSelector).textContent).eql('');
  // Assert the session was moved from task 1 to task 2
  await t.expect(screenTask.name.textContent).contains('From');
  await t.expect(screenTask.sessionStart.count).eql(0);
  await t.pressKey('j');
  await t.expect(screenTask.name.textContent).contains('To');
  await t.expect(screenTask.sessionStart.count).eql(1);
});
