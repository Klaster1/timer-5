import { randomUUID } from 'node:crypto';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { app } from '../page-objects/app';
import { dialogCreateTask } from '../page-objects/dialog-create-task';
import { dialogEditSession } from '../page-objects/dialog-edit-session';
import { dialogRenameTask } from '../page-objects/dialog-rename-task';
import { dialogSplitSession } from '../page-objects/dialog-split-session';
import { menuTaskActions } from '../page-objects/menu-task-actions';
import { screenTask } from '../page-objects/screen-task';
import { screenTasks } from '../page-objects/screen-tasks';
import { tooltip } from '../page-objects/tooltip';
import { advanceDate, getCdpClient, getLocationPathname, mockDate, reload, restoreDate } from '../utils';
import { VISUAL_REGRESSION_OK, comparePageScreenshot } from '../visual-regression';

fixture('Tasks');

test('Adding a task', async (t) => {
  // Click the empty state "Add task" button
  await t.click(screenTasks.emptyStateAddTaskButton);
  // Unfocus the input, asset validation is show
  await t.expect(await comparePageScreenshot('just opened')).eql(VISUAL_REGRESSION_OK);
  await t.pressKey('tab').expect(dialogCreateTask.validationError.textContent).contains('Value is required');
  await t.expect(await comparePageScreenshot('invalid')).eql(VISUAL_REGRESSION_OK);
  // Submit the dialog with "Enter", assert form is not submitted
  await t.click(dialogCreateTask.input).pressKey('enter');
  await t.expect(dialogCreateTask.title.textContent).contains('Create task');
  await t.expect(dialogCreateTask.input.focused).ok();
  // Enter the task name, submit with "Enter", assert the dialog is closed
  await t.typeText(dialogCreateTask.input, 'Test').pressKey('enter');
  await t.expect(dialogCreateTask.title.exists).notOk();
  // Assert the task is added and is in the "Active" state
  await t.expect(screenTasks.taskName.count).eql(1);
  await t.expect(screenTasks.taskName.textContent).contains('Test');
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');

  await t.expect(await comparePageScreenshot('task created')).eql(VISUAL_REGRESSION_OK);
  // Send the "a t" and "ф е" hotkeys, assert the "Add a task" dialog opens for both
  for (const combo of ['a t', 'ф е']) {
    await t.pressKey(combo);
    await t.expect(dialogCreateTask.title.exists).ok(`${combo} opens the dialog`);
    await t.click(dialogCreateTask.buttonDismiss);
  }
  // Click the FAB "Add task" button, assert the "Add a task" dialog opens
  await t.click(screenTasks.addTaskButton);
  await t.expect(dialogCreateTask.title.exists).ok();
  // Assert in "Add task" dialog, the "OK" button submits
  await t.typeText(dialogCreateTask.input, 'Test 2');
  await t.click(dialogCreateTask.buttonSubmit);
  await t.expect(screenTasks.taskName.nth(1).textContent).contains('Test 2');
  // Reload the app, assert the tasks persists
  await reload();
  await t.expect(screenTasks.taskName.nth(0).textContent).contains('Test');
  await t.expect(screenTasks.taskName.nth(1).textContent).contains('Test 2');
});

test('Starting and stopping the task', async (t) => {
  // Create a task
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogCreateTask.input, 'Task')
    .click(dialogCreateTask.buttonSubmit);
  // Assert the app has a regular favicon
  await t.expect(app.favicon.getAttribute('href')).contains('/favicon.svg');
  // Assert the task is marked as active/not-running in the task list item, task list item context action, task view title and task view context action
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  await t.click(screenTasks.buttonTaskAction.nth(1));
  await t.expect(menuTaskActions.selectorState.textContent).contains('State: Active');
  await t.expect(await comparePageScreenshot('active menu')).eql(VISUAL_REGRESSION_OK);
  await t.pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  await t.click(screenTask.buttonTaskAction);
  await t.expect(menuTaskActions.selectorState.textContent).contains('Active');
  await t.pressKey('esc');
  // Assert the "Start" button is visible and has the "Start" tooltip
  await t.expect(screenTask.buttonStart.exists).ok();
  await t.expect(screenTask.buttonStop.exists).notOk();
  await t.hover(screenTask.buttonStart);
  await t.expect(tooltip.textContent).eql('Start');
  await t.expect(await comparePageScreenshot('start tooltip')).eql(VISUAL_REGRESSION_OK);
  // Start a task with the "Start" button
  await t.click(screenTask.buttonStart);
  // Assert the task is marked as active/running in the task list item and task view title
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('pause_circle');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).contains('pause_circle');
  // Stop and start the session several times
  for (const _ of [1, 2, 3]) {
    await t.click(screenTask.buttonStop);
    await t.click(screenTask.buttonStart);
  }
  // Assert a session with start time and no end time appears at the top of the session list, with 00:00 duration
  await t.expect(screenTask.sessionRow.count).eql(4);
  await t.expect(screenTask.sessionStart.nth(0).textContent).match(/\d/);
  await t.expect(screenTask.sessionEnd.nth(0).textContent).notMatch(/\d/);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).contains('5s', { timeout: 10_000 });
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
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  // Start and stop the task with the "s" and "ы" hotkeys, assert it starts and stops
  for (const combo of ['s', 'ы']) {
    await t.pressKey(combo);
    await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('pause_circle');
    await t.pressKey(combo);
    await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  }
});

test('Changing task status', async (t) => {
  // Open an active/non-running task
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogCreateTask.input, 'Task')
    .click(dialogCreateTask.buttonSubmit);
  // Cycle task statuses Active->Finished->Dropped->Active using task list context action, assert the status changes
  await t.click(screenTasks.buttonTaskAction).click(menuTaskActions.selectorState);
  await t.expect(await comparePageScreenshot('active')).eql(VISUAL_REGRESSION_OK);
  await t.click(menuTaskActions.optionFinished).pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('check_circle');
  await t.expect(await comparePageScreenshot('is finished')).eql(VISUAL_REGRESSION_OK);
  await t.click(app.buttonFinishedTasks);
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).eql('check_circle');
  await t.click(screenTasks.taskItem);

  await t.expect(await comparePageScreenshot('finished tasks')).eql(VISUAL_REGRESSION_OK);

  await t.click(screenTasks.buttonTaskAction).click(menuTaskActions.selectorState);

  await t.expect(await comparePageScreenshot('finished')).eql(VISUAL_REGRESSION_OK);
  await t.click(menuTaskActions.optionDropped).pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('delete');

  await t.expect(await comparePageScreenshot('is dropped')).eql(VISUAL_REGRESSION_OK);
  await t.click(app.buttonDroppedTasks);
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).eql('delete');
  await t.click(screenTasks.taskItem);

  await t.expect(await comparePageScreenshot('dropped')).eql(VISUAL_REGRESSION_OK);

  await t.click(screenTasks.buttonTaskAction).click(menuTaskActions.selectorState);
  await t.click(menuTaskActions.optionActive).pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('play_circle');
  await t.click(app.buttonActiveTasks);
  await t.expect(screenTasks.taskStateIcon.getAttribute('data-mat-icon-name')).eql('play_circle');
  await t.click(screenTasks.taskItem);

  // Cycle task statuses Active->Finished->Dropped->Active using task screen context action, assert the status changes
  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionFinished)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('check_circle');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionDropped)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('delete');
  await t.click(app.buttonDroppedTasks);
  await t.click(screenTasks.taskItem);

  await t
    .click(screenTask.buttonTaskAction)
    .click(menuTaskActions.selectorState)
    .click(menuTaskActions.optionActive)
    .pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('play_circle');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);

  // Cycle task statuses Active->Finished->Active using hot keys, assert the status changes
  // ENG
  await t.pressKey('m f').pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('check_circle');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t.pressKey('m a').pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('play_circle');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);
  // RU
  await t.pressKey('ь а').pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('check_circle');
  await t.click(app.buttonFinishedTasks);
  await t.click(screenTasks.taskItem);

  await t.pressKey('ь ф').pressKey('esc');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).eql('play_circle');
  await t.click(app.buttonActiveTasks);
  await t.click(screenTasks.taskItem);
});

test('Renaming the task', async (t) => {
  // Open the "Rename" task dialog the task list "Rename" action
  await t
    .click(screenTasks.emptyStateAddTaskButton)
    .typeText(dialogCreateTask.input, 'Task')
    .click(dialogCreateTask.buttonSubmit)
    .click(screenTasks.buttonTaskAction);
  await t.expect(screenTask.screen.exists).ok();
  await t.expect(await comparePageScreenshot('context menu')).eql(VISUAL_REGRESSION_OK);
  await t.click(menuTaskActions.buttonRename);
  // Erase the value, assert a validation message is shown
  await t.expect(await comparePageScreenshot('just opened')).eql(VISUAL_REGRESSION_OK);
  await t.click(dialogRenameTask.input).pressKey('ctrl+a').pressKey('delete').pressKey('tab');
  await t.expect(dialogRenameTask.validationError.textContent).eql('Value is required');

  await t.expect(await comparePageScreenshot('validation')).eql(VISUAL_REGRESSION_OK);
  // Submit the dialog with "Enter", assert the task got renamed
  await t.typeText(dialogRenameTask.input, 'Task 1').pressKey('enter');
  await t.expect(screenTasks.taskName.textContent).eql('Task 1');
  await t.expect(screenTask.name.textContent).eql('Task 1');
  // Rename the task again, but submit with "OK", assert the task got renamed
  await t.click(screenTask.buttonTaskAction).click(menuTaskActions.buttonRename);
  await t.typeText(dialogRenameTask.input, 'Task 2', { replace: true });
  await t.click(dialogRenameTask.buttonSubmit);
  await t.expect(screenTask.name.textContent).eql('Task 2');
  // Assert hotkeys open the "Rename task" dialog too
  for (const combo of ['r t', 'к е']) {
    await t.pressKey(combo);
    await t.expect(dialogRenameTask.title.textContent).eql('Rename task');
    await t.expect(dialogRenameTask.input.value).eql('Task 2');
    await t.click(dialogRenameTask.buttonDismiss);
    await t.expect(dialogRenameTask.title.exists).notOk();
  }
  const client = await getCdpClient();
  await client.send('Input.dispatchKeyEvent', {
    type: 'keyDown',
    key: 'F2',
    windowsVirtualKeyCode: 113,
  });
  await t.expect(dialogRenameTask.title.exists).ok();
});

test('Deleting the task', async (t) => {
  const addTask = async () => {
    await t
      .click(screenTasks.emptyStateAddTaskButton)
      .typeText(dialogCreateTask.input, 'Task')
      .click(dialogCreateTask.buttonSubmit);
  };
  // Open a task
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

test('Export and import', async (t) => {
  // Have a file with test data
  const testId = randomUUID();
  t.ctx.testId = testId;
  await mkdir(`e2e/downloads/import-export`, { recursive: true });
  const referenceData = {
    version: 1,
    value: [
      { id: 'Bain', name: 'Task 1', state: 0, sessions: [] },
      { id: '1ph6', name: 'Task 2', state: 0, sessions: [] },
      { id: 'EnBz', name: 'Task 3', state: 0, sessions: [] },
    ],
  };
  await writeFile(`e2e/downloads/import-export/data-${testId}.json`, JSON.stringify(referenceData, null, '  '));
  // Import the data
  await t.click(app.buttonImportExport);
  await t.expect(await comparePageScreenshot('menu')).eql(VISUAL_REGRESSION_OK);
  await t.setFilesToUpload(app.inputImport, [`../downloads/import-export/data-${testId}.json`]);
  // Assert the tasks are added
  await t.expect(screenTasks.taskItem.count).eql(3);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('Task 1');
  await t.expect(screenTasks.taskName.nth(1).textContent).eql('Task 2');
  await t.expect(screenTasks.taskName.nth(2).textContent).eql('Task 3');
  // Assert that export works
  const href = await app.buttonExport.getAttribute('href');
  // Clicking and checking downloaded file works too, but flakes a lot
  const exportedData = await t.eval(() => fetch(href).then((res) => res.json()), { dependencies: { href } });

  await t.expect(exportedData).eql(referenceData);
}).after(async (t) => {
  await rm(`e2e/downloads/import-export/data-${t.ctx.testId}.json`, { force: true }).catch((e) => {});
});

// TestCafe client script to mock the date

test('Editing a session', async (t) => {
  const now = '2024-06-01T12:00:00';
  // Have a running task
  await mockDate(new Date(now));
  await screenTasks.addTask('Test');
  await t.pressKey('s');
  await advanceDate(4_000);
  // Change a running task session start time, assert the total changes
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql('4s');
  await t.expect(screenTask.taskDuration.textContent).eql('4s');
  await t.expect(await comparePageScreenshot('running')).eql(VISUAL_REGRESSION_OK);
  await t.click(screenTask.buttonSessionAction).click(screenTask.menuSession.buttonEdit);
  await dialogEditSession.setStart(now.replace('12', '09'));
  await t.expect(await comparePageScreenshot('editing')).eql(VISUAL_REGRESSION_OK);
  await t.click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql('3h00m');
  await t.expect(screenTask.taskDuration.textContent).eql('3h00m');
  await t.expect(screenTasks.total.textContent).eql('3h00m');
  // For a running task session, set the end time, assert the task becomes active/non-running
  await t.click(screenTask.buttonSessionAction).click(screenTask.menuSession.buttonEdit);
  await dialogEditSession.setEnd(now.replace('12', '11'));
  await t.click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql('2h00m');
  await t.expect(screenTask.taskDuration.textContent).eql('2h00m');
  await t.expect(screenTasks.total.textContent).eql('2h00m');
  await t.expect(screenTasks.total.getAttribute('title')).eql('2h 0m 0s');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).contains('play_circle');
  // For a complete task session, remove the end time, assert the task becomes active/running and the total updates
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .expect(dialogEditSession.inputEnd.exists)
    .ok()
    .click(dialogEditSession.buttonResetEnd)
    .click(dialogEditSession.buttonSubmit);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql('3h00m');
  await t.expect(screenTask.taskDuration.textContent).eql('3h00m');
  await t.expect(screenTasks.total.textContent).eql('3h00m');
  await t.expect(screenTask.stateIcon.getAttribute('data-mat-icon-name')).contains('pause_circle');
  // Edit a session, assert the form can't be submitted without start time
  await t
    .click(screenTask.buttonSessionAction)
    .click(screenTask.menuSession.buttonEdit)
    .click(dialogEditSession.buttonResetStart)
    .click(dialogEditSession.buttonSubmit);
  await t.expect(dialogEditSession.validationErrorStart.textContent).contains('Start is required');
}).after(async (t) => {
  await restoreDate();
});

test('Moving a session', async (t) => {
  // Have two tasks with sessions
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
  await t.expect(screenTasks.taskItem.withText('To').find(screenTasks.durationSelector).textContent).contains('0s');
  await t.expect(screenTasks.taskItem.withText('From').find(screenTasks.durationSelector).textContent).eql('0s');
  // Assert the session was moved from task 1 to task 2
  await t.expect(screenTask.name.textContent).contains('From');
  await t.expect(screenTask.sessionStart.count).eql(0);
  await t.pressKey('j');
  await t.expect(screenTask.name.textContent).contains('To');
  await t.expect(screenTask.sessionStart.count).eql(1);
});

test('Session splitting', async (t) => {
  const checkSession = async (index: number, session: { start: string; end: string; duration: string }) => {
    await t.expect(dialogSplitSession.sessionStart.nth(index).textContent).contains(session.start);
    await t.expect(dialogSplitSession.sessionEnd.nth(index).textContent).contains(session.end);
    await t.expect(dialogSplitSession.sessionDuration.nth(index).textContent).eql(session.duration);
  };

  // Have a task with 4h long session
  const now = '2024-07-07T17:56:00';
  await mockDate(new Date(now));
  await screenTasks.addTask('Test');
  await t.pressKey('s');
  await advanceDate(14_400_000);
  await t.pressKey('s');
  // Open the session split dialog
  await t.click(screenTask.buttonSessionAction);
  await t.click(screenTask.menuSession.buttonSplit);
  // Assert the session is split in the middle by default
  await checkSession(0, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
  await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 19:56', duration: '2h00m' });
  await checkSession(2, { start: '2024-07-07 19:56', end: '2024-07-07 21:56', duration: '2h00m' });
  await t.expect(await comparePageScreenshot('default')).eql(VISUAL_REGRESSION_OK);
  // Move the slider to the leftmost position
  await dialogSplitSession.setSliderValue(0);
  // await dialogSplitSession.setSliderValue(0);
  await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 17:56', duration: '0s' });
  await checkSession(2, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
  // Assert form submission is disabled
  await t.expect(dialogSplitSession.buttonSubmit.hasAttribute('disabled')).ok();
  // Move the slider to the rightmost position
  await dialogSplitSession.setSliderValue(1);
  await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
  await checkSession(2, { start: '2024-07-07 21:56', end: '2024-07-07 21:56', duration: '0s' });
  await t.expect(await comparePageScreenshot('invalid')).eql(VISUAL_REGRESSION_OK);
  // Assert form submission is disabled
  await t.expect(dialogSplitSession.buttonSubmit.hasAttribute('disabled')).ok();
  // Move the slider roughly to the middle
  await dialogSplitSession.setSliderValue(0.4825);
  await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 19:51', duration: '1h55m' });
  await checkSession(2, { start: '2024-07-07 19:51', end: '2024-07-07 21:56', duration: '2h04m' });
  // Assert form submission is enabled
  await t.expect(dialogSplitSession.buttonSubmit.hasAttribute('disabled')).notOk();
  // Submit the form
  await t.click(dialogSplitSession.buttonSubmit);
  await t.expect(dialogSplitSession.buttonSubmit.exists).notOk();
  // Assert the session was split
  await t.expect(screenTask.sessionStart.count).eql(2);
  await t.expect(screenTask.sessionDuration.nth(0).textContent).eql('2h04m');
  await t.expect(screenTask.sessionDuration.nth(1).textContent).eql('1h55m');
});
