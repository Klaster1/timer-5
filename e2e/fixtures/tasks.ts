import { expect, test } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { App } from '../page-objects/app';
import { DialogCreateTask } from '../page-objects/dialog-create-task';
import { DialogEditSession } from '../page-objects/dialog-edit-session';
import { DialogRenameTask } from '../page-objects/dialog-rename-task';
import { DialogSplitSession } from '../page-objects/dialog-split-session';
import { MenuTaskActions } from '../page-objects/menu-task-actions';
import { ScreenTask } from '../page-objects/screen-task';
import { ScreenTasks } from '../page-objects/screen-tasks';
import { Tooltip } from '../page-objects/tooltip';
import {
  advanceDate,
  clearDeviceMetrics,
  dispatchF2,
  getLocationPathname,
  mockDate,
  pressCombo,
  reloadIgnoringCache,
  restoreDate,
  setDeviceMetrics,
} from '../utils';

test.describe('Tasks', () => {
  let app: App;
  let dialogCreateTask: DialogCreateTask;
  let dialogEditSession: DialogEditSession;
  let dialogRenameTask: DialogRenameTask;
  let dialogSplitSession: DialogSplitSession;
  let menuTaskActions: MenuTaskActions;
  let screenTask: ScreenTask;
  let screenTasks: ScreenTasks;
  let tooltip: Tooltip;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    app = new App(page);
    dialogCreateTask = new DialogCreateTask(page);
    dialogEditSession = new DialogEditSession(page);
    dialogRenameTask = new DialogRenameTask(page);
    dialogSplitSession = new DialogSplitSession(page);
    menuTaskActions = new MenuTaskActions(page);
    screenTask = new ScreenTask(page);
    screenTasks = new ScreenTasks(page);
    tooltip = new Tooltip(page);
  });

  test('Adding a task', async ({ page }) => {
    // Click the empty state "Add task" button
    await screenTasks.emptyStateAddTaskButton().click();
    await expect(dialogCreateTask.title()).toBeVisible();
    await expect(page).toHaveScreenshot('tasks-adding-just-opened.png');

    // Unfocus the input, asset validation is show
    await pressCombo(page, 'tab');
    await expect(dialogCreateTask.validationError()).toContainText('Value is required');
    await expect(page).toHaveScreenshot('tasks-adding-invalid.png');

    // Submit the dialog with "Enter", assert form is not submitted
    await dialogCreateTask.input().click();
    await pressCombo(page, 'enter');
    await expect(dialogCreateTask.title()).toContainText('Create task');
    await expect(dialogCreateTask.input()).toBeFocused();

    // Enter the task name, submit with "Enter", assert the dialog is closed
    await dialogCreateTask.input().fill('Test');
    await pressCombo(page, 'enter');
    await expect(dialogCreateTask.title()).toBeHidden();

    // Assert the task is added and is in the "Active" state
    await expect(screenTasks.taskName()).toHaveCount(1);
    await expect(screenTasks.taskName().first()).toContainText('Test');
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(page).toHaveScreenshot('tasks-adding-task-created.png');

    // Send the "a t" and "ф е" hotkeys, assert the "Add a task" dialog opens for both
    for (const combo of ['a t', 'ф е']) {
      await pressCombo(page, combo);
      await expect(dialogCreateTask.title(), `${combo} opens the dialog`).toBeVisible();
      await pressCombo(page, 'esc');
      await expect(dialogCreateTask.title()).toBeHidden();
    }

    // Click the FAB "Add task" button, assert the "Add a task" dialog opens
    await screenTasks.addTaskButton().click();
    await expect(dialogCreateTask.title()).toBeVisible();

    // Assert in "Add task" dialog, the "OK" button submits
    await dialogCreateTask.input().fill('Test 2');
    await pressCombo(page, 'enter');
    await expect(screenTasks.taskName().filter({ hasText: 'Test 2' })).toHaveCount(1);
    await expect(screenTasks.taskName()).toHaveCount(2, { timeout: 15_000 });

    // Reload the app, assert the tasks persists
    await reloadIgnoringCache(page);
    await expect(screenTasks.taskName()).toHaveCount(2, { timeout: 15_000 });
    await expect(screenTasks.taskName().nth(0)).toContainText('Test');
    await expect(screenTasks.taskName().nth(1)).toContainText('Test 2');
  });

  test('Starting and stopping the task', async ({ page }) => {
    // Create a task
    await screenTasks.emptyStateAddTaskButton().click();
    await dialogCreateTask.input().fill('Task');
    await dialogCreateTask.buttonSubmit().click();

    // Assert the app has a regular favicon
    await expect(app.favicon()).toHaveAttribute('href', /\/favicon\.svg/);

    // Assert the task is marked as active/not-running in the task list item, task list item context action, task view title and task view context action
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await screenTasks.buttonTaskAction().nth(1).click();
    await expect(menuTaskActions.selectorState()).toContainText('State: Active');
    await expect(page).toHaveScreenshot('tasks-startstop-active-menu.png');
    await pressCombo(page, 'esc');

    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(screenTask.matTable()).toBeVisible();
    await expect(screenTask.legacyStickyHackTable()).toBeHidden();
    await expect(screenTask.matHeaderRow()).toBeVisible();
    await expect(screenTask.matFooterRow()).toBeVisible();

    await screenTask.buttonTaskAction().click();
    await expect(menuTaskActions.selectorState()).toContainText('Active');
    await pressCombo(page, 'esc');

    // Assert the "Start" button is visible and has the "Start" tooltip
    await expect(screenTask.buttonStart()).toBeVisible();
    await expect(screenTask.buttonStop()).toBeHidden();
    await screenTask.buttonStart().hover();
    await expect(tooltip.root()).toHaveText('Start');
    await expect(page).toHaveScreenshot('tasks-startstop-start-tooltip.png');

    // Shrink window down to single panel layout, take a screenshot - "Create task" button should not be visible and "Start task" should
    await setDeviceMetrics(page, {
      width: 800,
      height: 800,
      mobile: true,
      deviceScaleFactor: 1,
      screenOrientation: { angle: 0, type: 'portraitPrimary' },
    });
    await expect(page).toHaveScreenshot('tasks-startstop-single-panel.png');
    await clearDeviceMetrics(page);

    // Start a task with the "Start" button
    await screenTask.buttonStart().click();
    // Assert the task is marked as active/running in the task list item and task view title
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /pause_circle/);

    // Stop and start the session several times
    for (const _ of [1, 2, 3]) {
      await screenTask.buttonStop().click();
      await screenTask.buttonStart().click();
    }

    // Assert a session with start time and no end time appears at the top of the session list, with 00:00 duration
    await expect(screenTask.sessionRow()).toHaveCount(4);
    await expect(screenTask.sessionStart().nth(0)).toContainText(/\d/);
    await expect(screenTask.sessionEnd().nth(0)).not.toContainText(/\d/);
    await expect(screenTask.sessionDuration().nth(0)).toContainText('5s', { timeout: 10_000 });

    // Add enough sessions to enforce viewport scrolling and verify sticky header/footer remain anchored.
    for (let i = 0; i < 18; i++) {
      await screenTask.buttonStop().click();
      await screenTask.buttonStart().click();
    }

    const viewportMetrics = await page.evaluate(() => {
      const viewport = document.querySelector('screen-task cdk-virtual-scroll-viewport') as HTMLElement | null;
      if (!viewport) return null;
      return {
        scrollTop: viewport.scrollTop,
        scrollHeight: viewport.scrollHeight,
        clientHeight: viewport.clientHeight,
      };
    });
    expect(viewportMetrics).not.toBeNull();
    expect(viewportMetrics!.scrollHeight).toBeGreaterThan(viewportMetrics!.clientHeight);

    const headerTopBefore = await screenTask.matHeaderStartCell().evaluate((el) => el.getBoundingClientRect().top);
    const footerBottomBefore = await screenTask
      .matFooterStartCell()
      .evaluate((el) => el.getBoundingClientRect().bottom);

    await page.evaluate(() => {
      const viewport = document.querySelector('screen-task cdk-virtual-scroll-viewport') as HTMLElement | null;
      if (!viewport) return;
      viewport.scrollTop = Math.floor((viewport.scrollHeight - viewport.clientHeight) / 2);
    });

    const headerTopAfter = await screenTask.matHeaderStartCell().evaluate((el) => el.getBoundingClientRect().top);
    const footerBottomAfter = await screenTask.matFooterStartCell().evaluate((el) => el.getBoundingClientRect().bottom);

    expect(Math.abs(headerTopAfter - headerTopBefore)).toBeLessThanOrEqual(2);
    expect(Math.abs(footerBottomAfter - footerBottomBefore)).toBeLessThanOrEqual(2);

    // Assert the "Start" button is replaced with the "Stop" button and its tooltip reads "Stop"
    await screenTask.name().hover();
    await screenTask.buttonStop().hover();
    await expect(tooltip.root()).toHaveText('Stop');

    // Assert the app favicon changed to the "Running" one
    await expect(app.favicon()).toHaveAttribute('href', /\/favicon-active\.svg/);

    // Stop the task by clicking the "Stop" button
    await screenTask.buttonStop().click();
    // Assert the "Stop" button is replaced by the "Start" button
    await expect(screenTask.buttonStart()).toBeVisible();
    await expect(screenTask.buttonStop()).toBeHidden();

    // Assert all the status indicators reverted back to active/not-running
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /play_circle/);

    // Start and stop the task with the "s" and "ы" hotkeys, assert it starts and stops
    for (const combo of ['s', 'ы']) {
      await pressCombo(page, combo);
      await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
      await pressCombo(page, combo);
      await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    }
  });

  test('Changing task status', async ({ page }) => {
    // Open an active/non-running task
    await screenTasks.emptyStateAddTaskButton().click();
    await dialogCreateTask.input().fill('Task');
    await dialogCreateTask.buttonSubmit().click();
    await page.evaluate(() => document.fonts.ready);

    // Cycle task statuses Active->Finished->Dropped->Active using task list context action, assert the status changes
    await screenTasks.buttonTaskAction().first().click();
    await menuTaskActions.selectorState().click();
    await expect(menuTaskActions.optionFinished()).toBeVisible();
    await expect(page).toHaveScreenshot('tasks-status-active.png');
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await expect(page).toHaveScreenshot('tasks-status-is-finished.png');

    await app.buttonFinishedTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await screenTasks.taskItem().first().click();
    await expect(page).toHaveScreenshot('tasks-status-finished-tasks.png');

    await screenTasks.buttonTaskAction().first().click();
    await menuTaskActions.selectorState().click();
    await expect(page).toHaveScreenshot('tasks-status-finished.png');
    await menuTaskActions.optionDropped().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'delete');
    await expect(page).toHaveScreenshot('tasks-status-is-dropped.png');

    await app.buttonDroppedTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'delete');
    await screenTasks.taskItem().first().click();
    await expect(page).toHaveScreenshot('tasks-status-dropped.png');

    // Cycle task statuses Active->Finished->Dropped->Active using task screen context action, assert the status changes
    await screenTasks.buttonTaskAction().first().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionActive().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await app.buttonActiveTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await screenTasks.taskItem().first().click();

    await screenTask.buttonTaskAction().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await app.buttonFinishedTasks().click();
    await screenTasks.taskItem().first().click();

    await screenTask.buttonTaskAction().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionDropped().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'delete');
    await app.buttonDroppedTasks().click();
    await screenTasks.taskItem().first().click();

    await screenTask.buttonTaskAction().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionActive().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await app.buttonActiveTasks().click();
    await screenTasks.taskItem().first().click();

    await screenTask.buttonTaskAction().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');

    // Cycle task statuses Active->Finished->Active using hot keys, assert the status changes
    await screenTask.buttonTaskAction().click();
    await menuTaskActions.selectorState().click();
    await menuTaskActions.optionActive().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'play_circle');
  });

  test('Renaming the task', async ({ page }) => {
    // Open the "Rename" task dialog the task list "Rename" action
    await screenTasks.emptyStateAddTaskButton().click();
    await dialogCreateTask.input().fill('Task');
    await dialogCreateTask.buttonSubmit().click();
    await page.evaluate(() => document.fonts.ready);
    await screenTasks.buttonTaskAction().first().click();

    await expect(screenTask.screen()).toBeVisible();
    await expect(menuTaskActions.buttonRename()).toBeVisible();
    await page.mouse.move(0, 0);
    await expect(page).toHaveScreenshot('tasks-rename-context-menu.png');

    await menuTaskActions.buttonRename().click();
    await expect(page).toHaveScreenshot('tasks-rename-just-opened.png');

    // Erase the value, assert a validation message is shown
    await dialogRenameTask.input().click();
    await pressCombo(page, 'ctrl+a');
    await pressCombo(page, 'delete');
    await pressCombo(page, 'tab');
    await expect(dialogRenameTask.validationError()).toHaveText('Value is required');
    await expect(page).toHaveScreenshot('tasks-rename-validation.png');

    // Submit the dialog with "Enter", assert the task got renamed
    await dialogRenameTask.input().fill('Task 1');
    await pressCombo(page, 'enter');
    await expect(screenTasks.taskName().first()).toHaveText('Task 1');
    await expect(screenTask.name()).toHaveText('Task 1');

    // Rename the task again, but submit with "OK", assert the task got renamed
    await screenTask.buttonTaskAction().click();
    await menuTaskActions.buttonRename().click();
    await dialogRenameTask.input().fill('Task 2');
    await dialogRenameTask.buttonSubmit().click();
    await expect(screenTask.name()).toHaveText('Task 2');

    // Assert hotkeys open the "Rename task" dialog too
    for (const combo of ['r t', 'к е']) {
      await pressCombo(page, combo);
      await expect(dialogRenameTask.title()).toHaveText('Rename task');
      await expect(dialogRenameTask.input()).toHaveValue('Task 2');
      await dialogRenameTask.buttonDismiss().click();
      await expect(dialogRenameTask.title()).toBeHidden();
    }

    await dispatchF2(page);
    await expect(dialogRenameTask.title()).toBeVisible();
  });

  test('Deleting the task', async ({ page }) => {
    const addTask = async () => {
      await screenTasks.addTask('Task');
    };

    // Open a task
    await addTask();
    await expect(screenTask.screen()).toBeVisible();

    // Remove it with the task list "Remove" context action
    await screenTasks.buttonTaskAction().first().click();
    await menuTaskActions.buttonDelete().click();

    // Assert the task disappears from the task list
    await expect(screenTasks.taskItem()).toHaveCount(0);
    // Assert the task details are closed
    await expect(screenTask.screen()).toBeHidden();
    // Assert the URL does not contain task ID anymore
    await expect.poll(async () => getLocationPathname(page)).toMatch(/\/active$/);

    await addTask();
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await screenTask.buttonTaskAction().click();
    await menuTaskActions.buttonDelete().click();
    await expect(screenTasks.taskItem()).toHaveCount(0);

    // Assert the task can also be remove using task details context action and hotkeys
    // ENG
    await addTask();
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await pressCombo(page, 'd t');
    await expect(screenTasks.taskItem()).toHaveCount(0);

    // RU
    await addTask();
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await pressCombo(page, 'в е');
    await expect(screenTasks.taskItem()).toHaveCount(0);
  });

  test('Export and import', async ({ page }) => {
    // Have a file with test data
    const testId = randomUUID();
    const filePath = `e2e/downloads/import-export/data-${testId}.json`;
    await mkdir('e2e/downloads/import-export', { recursive: true });

    const referenceData = {
      version: 1,
      value: [
        { id: 'Bain', name: 'Task 1', state: 0, sessions: [] },
        { id: '1ph6', name: 'Task 2', state: 0, sessions: [] },
        { id: 'EnBz', name: 'Task 3', state: 0, sessions: [] },
      ],
    };

    await writeFile(filePath, JSON.stringify(referenceData, null, '  '));

    try {
      // Import the data
      await app.buttonImportExport().click();
      await expect(page).toHaveScreenshot('tasks-import-export-menu.png');
      await app.inputImport().setInputFiles(filePath);

      // Assert the tasks are added
      await expect(screenTasks.taskItem()).toHaveCount(3);
      await expect(screenTasks.taskName().nth(0)).toHaveText('Task 1');
      await expect(screenTasks.taskName().nth(1)).toHaveText('Task 2');
      await expect(screenTasks.taskName().nth(2)).toHaveText('Task 3');

      // Assert that export works
      const href = await app.buttonExport().getAttribute('href');
      expect(href).toBeTruthy();
      const exportedData = await page.evaluate(async (url) => fetch(url).then((res) => res.json()), href!);
      expect(exportedData).toEqual(referenceData);
      // Clicking and checking downloaded file works too, but flakes a lot
    } finally {
      await rm(filePath, { force: true }).catch(() => undefined);
    }
  });

  test('Editing a session', async ({ page }) => {
    // Playwright helper to mock the date in the browser context
    const now = '2024-06-01T12:00:00';
    await mockDate(page, new Date(now));

    try {
      // Have a running task
      await screenTasks.addTask('Test');
      await pressCombo(page, 's');
      await advanceDate(page, 4_000);

      await expect(screenTask.sessionDuration().nth(0)).toHaveText('4s');
      await expect(screenTask.taskDuration()).toHaveText('4s');
      await expect(page).toHaveScreenshot('tasks-edit-session-running.png');

      // Change a running task session start time, assert the total changes
      await screenTask.buttonSessionAction().click();
      await screenTask.menuSession.buttonEdit().click();
      await dialogEditSession.setStart(now.replace('12', '09'));
      await expect(page).toHaveScreenshot('tasks-edit-session-editing.png');
      await dialogEditSession.buttonSubmit().click();

      await expect(screenTask.sessionDuration().nth(0)).toHaveText('3h00m');
      await expect(screenTask.taskDuration()).toHaveText('3h00m');
      await expect(screenTasks.total()).toHaveText('3h00m');

      // For a running task session, set the end time, assert the task becomes active/non-running
      await screenTask.buttonSessionAction().click();
      await screenTask.menuSession.buttonEdit().click();
      await dialogEditSession.setEnd(now.replace('12', '11'));
      await dialogEditSession.buttonSubmit().click();

      await expect(screenTask.sessionDuration().nth(0)).toHaveText('2h00m');
      await expect(screenTask.taskDuration()).toHaveText('2h00m');
      await expect(screenTasks.total()).toHaveText('2h00m');
      await expect(screenTasks.total()).toHaveAttribute('title', '2h 0m 0s');
      await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /play_circle/);

      // For a complete task session, remove the end time, assert the task becomes active/running and the total updates
      await screenTask.buttonSessionAction().click();
      await screenTask.menuSession.buttonEdit().click();
      await expect(dialogEditSession.inputEnd()).toBeVisible();
      await dialogEditSession.buttonResetEnd().click();
      await dialogEditSession.buttonSubmit().click();

      await expect(screenTask.sessionDuration().nth(0)).toHaveText('3h00m');
      await expect(screenTask.taskDuration()).toHaveText('3h00m');
      await expect(screenTasks.total()).toHaveText('3h00m');
      await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /pause_circle/);

      // Edit a session, assert the form can't be submitted without start time
      await screenTask.buttonSessionAction().click();
      await screenTask.menuSession.buttonEdit().click();
      await dialogEditSession.buttonResetStart().click();
      await dialogEditSession.buttonSubmit().click();
      await expect(dialogEditSession.validationErrorStart()).toContainText('Start is required');
    } finally {
      await restoreDate(page);
    }
  });

  test('Moving a session', async ({ page }) => {
    await mockDate(page, new Date('2025-07-05T06:09:00'));

    try {
      // Have two tasks with sessions
      await screenTasks.addTask('To');
      await screenTasks.addTask('From');
      await pressCombo(page, 's');
      await advanceDate(page, 500);
      await pressCombo(page, 's');

      // Open task 1, drag a session to the task 2
      await expect(screenTask.sessionStart()).toHaveCount(1);

      const source = screenTask.sessionRow().first();
      const target = screenTasks.taskItemByText('To');
      await source.dragTo(target);

      if ((await screenTask.sessionStart().count()) !== 0) {
        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();
        if (sourceBox && targetBox) {
          await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
          await page.mouse.down();
          await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 20 });
          await page.mouse.up();
        }
      }

      // Assert the target task is no longer marked as the drop target
      await expect
        .poll(async () => {
          return screenTask.sessionStart().count();
        })
        .toBe(0);

      // Assert the total for both tasks were updated
      await expect(screenTasks.taskDuration(target)).toContainText('0s');
      await expect(screenTasks.taskDuration(screenTasks.taskItemByText('From'))).toHaveText('0s');

      // Assert the session was moved from task 1 to task 2
      await expect(screenTask.name()).toContainText('From');
      await pressCombo(page, 'j');
      await expect(screenTask.name()).toContainText('To');
      await expect(screenTask.sessionStart()).toHaveCount(1);
    } finally {
      await restoreDate(page);
    }
  });

  test('Session splitting', async ({ page }) => {
    const checkSession = async (index: number, session: { start: string; end: string; duration: string }) => {
      await expect(dialogSplitSession.sessionStart().nth(index)).toContainText(session.start);
      await expect(dialogSplitSession.sessionEnd().nth(index)).toContainText(session.end);
      await expect(dialogSplitSession.sessionDuration().nth(index)).toHaveText(session.duration);
    };

    const now = '2024-07-07T17:56:00';
    await mockDate(page, new Date(now));

    try {
      // Have a task with 4h long session
      await screenTasks.addTask('Test');
      await pressCombo(page, 's');
      await advanceDate(page, 14_400_000);
      await pressCombo(page, 's');

      // Open the session split dialog
      await screenTask.buttonSessionAction().click();
      await screenTask.menuSession.buttonSplit().click();
      // Assert the session is split in the middle by default
      await expect(dialogSplitSession.matTable()).toHaveCount(2);
      await expect(dialogSplitSession.legacyNonMatTable()).toBeHidden();

      await checkSession(0, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
      await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 19:56', duration: '2h00m' });
      await checkSession(2, { start: '2024-07-07 19:56', end: '2024-07-07 21:56', duration: '2h00m' });
      await expect(page).toHaveScreenshot('tasks-split-default.png');

      // Move the slider to the leftmost position
      // await dialogSplitSession.setSliderValue(0);
      await dialogSplitSession.setSliderValue(0);
      await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 17:56', duration: '0s' });
      await checkSession(2, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
      // Assert form submission is disabled
      await expect(dialogSplitSession.buttonSubmit()).toBeDisabled();

      // Move the slider to the rightmost position
      await dialogSplitSession.setSliderValue(1);
      await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 21:56', duration: '4h00m' });
      await checkSession(2, { start: '2024-07-07 21:56', end: '2024-07-07 21:56', duration: '0s' });
      await expect(page).toHaveScreenshot('tasks-split-invalid.png');
      // Assert form submission is disabled
      await expect(dialogSplitSession.buttonSubmit()).toBeDisabled();

      // Move the slider roughly to the middle
      await dialogSplitSession.setSliderValue(0.4825);
      await checkSession(1, { start: '2024-07-07 17:56', end: '2024-07-07 19:51', duration: '1h55m' });
      await checkSession(2, { start: '2024-07-07 19:51', end: '2024-07-07 21:56', duration: '2h04m' });
      // Assert form submission is enabled
      await expect(dialogSplitSession.buttonSubmit()).toBeEnabled();

      // Submit the form
      await dialogSplitSession.buttonSubmit().click();
      await expect(dialogSplitSession.buttonSubmit()).toBeHidden();
      // Assert the session was split
      await expect(screenTask.sessionStart()).toHaveCount(2);
      await expect(screenTask.sessionDuration().nth(0)).toHaveText('2h04m');
      await expect(screenTask.sessionDuration().nth(1)).toHaveText('1h55m');
    } finally {
      await restoreDate(page);
    }
  });
});
