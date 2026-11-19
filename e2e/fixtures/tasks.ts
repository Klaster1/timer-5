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
  seedTasks,
  session,
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

  test.afterEach(async ({ page }) => {
    await restoreDate(page);
  });

  test('Adding a task', async ({ page }) => {
    // Click the empty state "Add task" button
    await screenTasks.emptyStateAddTaskButton().click();
    await expect(dialogCreateTask.title()).toBeVisible();
    await expect(page).toHaveScreenshot('tasks-adding-just-opened.webp');

    // Unfocus the input, asset validation is show
    await pressCombo(page, 'tab');
    await expect(dialogCreateTask.validationError()).toContainText('Value is required');
    await expect(page).toHaveScreenshot('tasks-adding-invalid.webp');

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
    await expect(page).toHaveScreenshot('tasks-adding-task-created.webp');

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
    const now = '2024-06-01T12:00:00';
    await mockDate(page, new Date(now));

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
    await expect(page).toHaveScreenshot('tasks-startstop-active-menu.webp');
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
    await expect(page).toHaveScreenshot('tasks-startstop-start-tooltip.webp');

    // Shrink window down to single panel layout, take a screenshot - "Create task" button should not be visible and "Start task" should
    await setDeviceMetrics(page, {
      width: 800,
      height: 800,
      mobile: true,
      deviceScaleFactor: 1,
      screenOrientation: { angle: 0, type: 'portraitPrimary' },
    });
    await expect(page).toHaveScreenshot('tasks-startstop-single-panel.webp');
    await clearDeviceMetrics(page);

    // Start a task with the "Start" button
    await screenTask.buttonStart().click();
    // Assert the task is marked as active/running in the task list item and task view title
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /pause_circle/);

    // Stop and start the session several times with deterministic 1-second progress per closed session.
    for (const _ of [1, 2, 3]) {
      await advanceDate(page, 1_000);
      await screenTask.buttonStop().click();
      await screenTask.buttonStart().click();
    }
    // Advance the currently running session to 5 seconds.
    await advanceDate(page, 5_000);

    // Assert a session with start time and no end time appears at the top of the session list, with 5s duration.
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
    await menuTaskActions.openState(screenTasks.buttonTaskAction().first());
    await expect(menuTaskActions.optionFinished()).toBeVisible();
    await expect(page).toHaveScreenshot('tasks-status-active.webp');
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await expect(page).toHaveScreenshot('tasks-status-is-finished.webp');

    await app.buttonFinishedTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await screenTasks.taskItem().first().click();
    await expect(page).toHaveScreenshot('tasks-status-finished-tasks.webp');

    await menuTaskActions.openState(screenTasks.buttonTaskAction().first());
    await expect(page).toHaveScreenshot('tasks-status-finished.webp');
    await menuTaskActions.optionDropped().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'delete');
    await expect(page).toHaveScreenshot('tasks-status-is-dropped.webp');

    await app.buttonDroppedTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'delete');
    await screenTasks.taskItem().first().click();
    await expect(page).toHaveScreenshot('tasks-status-dropped.webp');

    // Cycle task statuses Active->Finished->Dropped->Active using task screen context action, assert the status changes
    await menuTaskActions.openState(screenTasks.buttonTaskAction().first());
    await menuTaskActions.optionActive().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await app.buttonActiveTasks().click();
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await screenTasks.taskItem().first().click();

    await menuTaskActions.openState(screenTask.buttonTaskAction());
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');
    await app.buttonFinishedTasks().click();
    await screenTasks.taskItem().first().click();

    await menuTaskActions.openState(screenTask.buttonTaskAction());
    await menuTaskActions.optionDropped().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'delete');
    await app.buttonDroppedTasks().click();
    await screenTasks.taskItem().first().click();

    await menuTaskActions.openState(screenTask.buttonTaskAction());
    await menuTaskActions.optionActive().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'play_circle');
    await app.buttonActiveTasks().click();
    await screenTasks.taskItem().first().click();

    await menuTaskActions.openState(screenTask.buttonTaskAction());
    await menuTaskActions.optionFinished().click();
    await pressCombo(page, 'esc');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', 'check_circle');

    // Cycle task statuses Active->Finished->Active using hot keys, assert the status changes
    await menuTaskActions.openState(screenTask.buttonTaskAction());
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
    await expect(page).toHaveScreenshot('tasks-rename-context-menu.webp');

    await menuTaskActions.buttonRename().click();
    await expect(page).toHaveScreenshot('tasks-rename-just-opened.webp');

    // Erase the value, assert a validation message is shown
    await dialogRenameTask.input().click();
    await pressCombo(page, 'ctrl+a');
    await pressCombo(page, 'delete');
    await pressCombo(page, 'tab');
    await expect(dialogRenameTask.validationError()).toHaveText('Value is required');
    await expect(page).toHaveScreenshot('tasks-rename-validation.webp');

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
      await expect(page).toHaveScreenshot('tasks-import-export-menu.webp');
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

    // Have a running task
    await screenTasks.addTask('Test');
    await pressCombo(page, 's');
    await advanceDate(page, 4_000);

    await expect(screenTask.sessionDuration().nth(0)).toHaveText('4s');
    await expect(screenTask.taskDuration()).toHaveText('4s');
    await expect(page).toHaveScreenshot('tasks-edit-session-running.webp');

    // Change a running task session start time, assert the total changes
    await screenTask.buttonSessionAction().click();
    await screenTask.menuSession.buttonEdit().click();
    await dialogEditSession.setStart(now.replace('12', '09'));
    await expect(page).toHaveScreenshot('tasks-edit-session-editing.webp');
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
  });

  test('Moving a session', async ({ page }) => {
    await mockDate(page, new Date('2025-07-05T06:09:00'));

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
  });

  test('Session splitting', async ({ page }) => {
    const checkSession = async (index: number, session: { start: string; end: string; duration: string }) => {
      await expect(dialogSplitSession.sessionStart().nth(index)).toContainText(session.start);
      await expect(dialogSplitSession.sessionEnd().nth(index)).toContainText(session.end);
      await expect(dialogSplitSession.sessionDuration().nth(index)).toHaveText(session.duration);
    };

    const now = '2024-07-07T17:56:00';
    await mockDate(page, new Date(now));

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
    await expect(page).toHaveScreenshot('tasks-split-default.webp');

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
    await expect(page).toHaveScreenshot('tasks-split-invalid.webp');
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
  });

  test('Totals', async ({ page }) => {
    // The clock starts at 12:00 and keeps running, the running session started an hour earlier
    await page.clock.install({ time: new Date('2026-11-18T12:00:00Z') });
    await seedTasks(page, [
      {
        name: 'Running',
        sessions: [session('2026-11-18T10:00:00Z', '2026-11-18T10:30:00Z'), session('2026-11-18T11:00:00Z', null)],
      },
      {
        name: 'Complete',
        sessions: [
          session('2026-11-18T08:00:00Z', '2026-11-18T09:15:00Z'),
          session('2026-11-18T09:00:00Z', '2026-11-18T10:00:00Z'),
        ],
      },
      { name: 'Done', state: 'finished', sessions: [session('2026-11-18T07:00:00Z', '2026-11-18T07:45:00Z')] },
      { name: 'Dropped', state: 'dropped', sessions: [session('2026-11-18T06:00:00Z', '2026-11-18T06:10:00Z')] },
    ]);
    await page.goto('/all');

    // Assert the total of all tasks is the sum of the task durations
    await expect(screenTasks.total()).toHaveText('4h40m');
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Running'))).toHaveText('1h30m');
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Complete'))).toHaveText('2h15m');
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Done'))).toHaveText('0h45m');
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Dropped'))).toHaveText('0h10m');

    // Each task state has its own total
    await app.buttonActiveTasks().click();
    await expect(screenTasks.taskName()).toHaveText(['Running', 'Complete']);
    await expect(screenTasks.total()).toHaveText('3h45m');
    await app.buttonFinishedTasks().click();
    await expect(screenTasks.taskName()).toHaveText(['Done']);
    await expect(screenTasks.total()).toHaveText('0h45m');
    await app.buttonDroppedTasks().click();
    await expect(screenTasks.taskName()).toHaveText(['Dropped']);
    await expect(screenTasks.total()).toHaveText('0h10m');

    // The task details show the session durations, the latest session first, and their sum
    await app.buttonActiveTasks().click();
    await screenTasks.taskItemByText('Complete').getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.sessionDuration()).toHaveText(['1h00m', '1h15m']);
    await expect(screenTask.taskDuration()).toHaveText('2h15m');
    await screenTasks.taskItemByText('Running').getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.sessionDuration()).toHaveText(['1h00m', '0h30m']);
    await expect(screenTask.taskDuration()).toHaveText('1h30m');

    // Mark a task as finished, assert it moves from the active total to the finished total
    await screenTasks.taskItemByText('Complete').getByTestId('screen-tasks__task-name').click();
    await pressCombo(page, 'm f');
    await expect(screenTasks.taskName()).toHaveText(['Running']);
    await expect(screenTasks.total()).toHaveText('1h30m');
    await app.buttonFinishedTasks().click();
    await expect(screenTasks.taskName()).toHaveText(['Complete', 'Done']);
    await expect(screenTasks.total()).toHaveText('3h00m');

    // Delete a task, assert the totals no longer include it
    await app.buttonDroppedTasks().click();
    await screenTasks.taskItemByText('Dropped').getByTestId('screen-tasks__task-name').click();
    await pressCombo(page, 'd t');
    await expect(screenTasks.taskItem()).toHaveCount(0);
    await app.buttonAllTasks().click();
    await expect(screenTasks.total()).toHaveText('4h30m');
  });

  test('Deleting a session', async ({ page }) => {
    // The clock starts at 14:00 and keeps running
    await page.clock.install({ time: new Date('2026-11-18T14:00:00Z') });
    await seedTasks(page, [
      {
        name: 'Work',
        sessions: [
          session('2026-11-18T08:00:00Z', '2026-11-18T09:00:00Z'),
          session('2026-11-18T09:30:00Z', '2026-11-18T10:30:00Z'),
          session('2026-11-18T13:00:00Z', null),
        ],
      },
      { name: 'Other', sessions: [session('2026-11-18T07:00:00Z', '2026-11-18T07:30:00Z')] },
    ]);
    await page.goto('/all');

    // Open a task with a running session and two complete ones
    await screenTasks.taskItemByText('Work').getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.sessionRow()).toHaveCount(3);
    await expect(screenTask.sessionDuration()).toHaveText(['1h00m', '1h00m', '1h00m']);
    await expect(screenTask.taskDuration()).toHaveText('3h00m');
    await expect(screenTasks.total()).toHaveText('3h30m');
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /pause_circle/);

    // Delete a complete session in the middle of the list
    await screenTask.buttonSessionAction().nth(1).click();
    await screenTask.menuSession.buttonDelete().click();
    // Assert the other sessions stay in place and the totals shrink
    await expect(screenTask.sessionRow()).toHaveCount(2);
    await expect(screenTask.sessionStart()).toHaveText(['2026-11-18 13:00', '2026-11-18 8:00']);
    await expect(screenTask.taskDuration()).toHaveText('2h00m');
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Work'))).toHaveText('2h00m');
    await expect(screenTasks.total()).toHaveText('2h30m');

    // Delete the running session
    await screenTask.buttonSessionAction().nth(0).click();
    await screenTask.menuSession.buttonDelete().click();
    await expect(screenTask.sessionRow()).toHaveCount(1);
    await expect(screenTask.taskDuration()).toHaveText('1h00m');
    // Assert the task is not running anymore and can be started
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(screenTask.buttonStart()).toBeVisible();
    await expect(screenTask.buttonStop()).toBeHidden();

    // Delete the last session of the task
    await screenTask.buttonSessionAction().nth(0).click();
    await screenTask.menuSession.buttonDelete().click();
    // Assert the task stays, with no sessions and no time
    await expect(screenTask.sessionRow()).toHaveCount(0);
    await expect(screenTask.taskDuration()).toHaveText('0s');
    await expect(screenTasks.taskItemByText('Work')).toHaveCount(1);
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Work'))).toHaveText('0s');
    // Assert the other task is untouched
    await expect(screenTasks.taskDuration(screenTasks.taskItemByText('Other'))).toHaveText('0h30m');
    await expect(screenTasks.total()).toHaveText('0h30m');

    // Reload the app, assert the deletion persists
    await reloadIgnoringCache(page);
    await expect(screenTask.sessionRow()).toHaveCount(0);
    await expect(screenTasks.total()).toHaveText('0h30m');

    // The task can be started again
    await screenTask.buttonStart().click();
    await expect(screenTask.sessionRow()).toHaveCount(1);
    await expect(screenTask.stateIcon()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
  });

  test('Session order', async ({ page }) => {
    // The clock starts at 14:00 and keeps running
    await page.clock.install({ time: new Date('2026-11-18T14:00:00Z') });
    // Sessions are stored in no particular order
    await seedTasks(page, [
      {
        name: 'Work',
        sessions: [
          session('2026-11-18T10:00:00Z', '2026-11-18T11:00:00Z'),
          session('2026-11-18T13:00:00Z', null),
          session('2026-11-18T08:00:00Z', '2026-11-18T09:00:00Z'),
          session('2026-11-18T12:00:00Z', '2026-11-18T12:30:00Z'),
        ],
      },
      {
        name: 'Ties',
        sessions: [
          session('2026-11-17T10:00:00Z', '2026-11-17T10:10:00Z'),
          session('2026-11-17T10:00:00Z', '2026-11-17T10:20:00Z'),
        ],
      },
    ]);
    await page.goto('/all');
    await screenTasks.taskItemByText('Work').getByTestId('screen-tasks__task-name').click();

    // Assert the sessions are listed the latest start first, the running one included
    await expect(screenTask.sessionStart()).toHaveText([
      '2026-11-18 13:00',
      '2026-11-18 12:00',
      '2026-11-18 10:00',
      '2026-11-18 8:00',
    ]);

    // Stop and start the task, assert the new session goes to the top
    await screenTask.buttonStop().click();
    await screenTask.buttonStart().click();
    await expect(screenTask.sessionRow()).toHaveCount(5);
    await expect(screenTask.sessionStart()).toHaveText([
      /2026-11-18 14:00/,
      '2026-11-18 13:00',
      '2026-11-18 12:00',
      '2026-11-18 10:00',
      '2026-11-18 8:00',
    ]);
    await expect(screenTask.sessionEnd().first()).toHaveText('');

    // Change the start of the oldest session so it moves in between the others
    await screenTask.buttonSessionAction().nth(4).click();
    await screenTask.menuSession.buttonEdit().click();
    await dialogEditSession.setEnd('2026-11-18T12:45');
    await dialogEditSession.setStart('2026-11-18T12:15');
    await dialogEditSession.buttonSubmit().click();
    await expect(dialogEditSession.buttonSubmit()).toBeHidden();
    await expect(screenTask.sessionStart()).toHaveText([
      /2026-11-18 14:00/,
      '2026-11-18 13:00',
      '2026-11-18 12:15',
      '2026-11-18 12:00',
      '2026-11-18 10:00',
    ]);

    // Reload the app, assert the order persists
    await reloadIgnoringCache(page);
    await expect(screenTask.sessionStart()).toHaveText([
      /2026-11-18 14:00/,
      '2026-11-18 13:00',
      '2026-11-18 12:15',
      '2026-11-18 12:00',
      '2026-11-18 10:00',
    ]);

    // Sessions that start at the same time keep their stored order
    await screenTasks.taskItemByText('Ties').getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.sessionDuration()).toHaveText(['0h10m', '0h20m']);
  });

  test('Task order', async ({ page }) => {
    // The clock starts at 14:00 and keeps running
    await page.clock.install({ time: new Date('2026-11-18T14:00:00Z') });
    await seedTasks(page, [
      { name: 'Old', sessions: [session('2026-11-18T08:00:00Z', '2026-11-18T09:00:00Z')] },
      { name: 'Newer', sessions: [session('2026-11-18T10:00:00Z', '2026-11-18T11:00:00Z')] },
      { name: 'Running early', sessions: [session('2026-11-18T07:00:00Z', null)] },
      { name: 'Running late', sessions: [session('2026-11-18T09:00:00Z', null)] },
      { name: 'No sessions' },
    ]);
    await page.goto('/all');

    // Tasks without sessions go first, then running tasks, the latest start first, then the rest, the latest session first
    await expect(screenTasks.taskName()).toHaveText(['No sessions', 'Running late', 'Running early', 'Newer', 'Old']);

    // Start a task, assert it moves above the other running tasks
    await screenTasks.taskItemByText('Old').getByTestId('screen-tasks__task-name').click();
    await screenTask.buttonStart().click();
    await expect(screenTasks.taskName()).toHaveText(['No sessions', 'Old', 'Running late', 'Running early', 'Newer']);

    // Stop it, assert it moves above the other complete tasks
    await screenTask.buttonStop().click();
    await expect(screenTasks.taskName()).toHaveText(['No sessions', 'Running late', 'Running early', 'Old', 'Newer']);

    // Start the task without sessions, assert it goes first
    await screenTasks.taskItemByText('No sessions').getByTestId('screen-tasks__task-name').click();
    await screenTask.buttonStart().click();
    await expect(screenTasks.taskName()).toHaveText(['No sessions', 'Running late', 'Running early', 'Old', 'Newer']);
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
  });
});
