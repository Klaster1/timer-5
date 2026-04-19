import { expect, test } from '@playwright/test';
import { ScreenTask } from '../page-objects/screen-task';
import { ScreenTasks } from '../page-objects/screen-tasks';
import { getLocationSearch, pressCombo, reloadIgnoringCache } from '../utils';

test.describe('Filters', () => {
  let screenTask: ScreenTask;
  let screenTasks: ScreenTasks;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    screenTask = new ScreenTask(page);
    screenTasks = new ScreenTasks(page);
  });

  test('Name', async ({ page }) => {
    // Have some tasks with uppercase names
    await screenTasks.addTask('GAME');
    await screenTasks.addTask('FOO');
    await screenTasks.addTask('BAR');
    await screenTasks.addTask('BAZ');

    // Send "ctrl+f" keys
    await pressCombo(page, 'ctrl+f');

    await expect(page).toHaveScreenshot('filters-empty-filter.png');
    // Fill in the "Name filter", in lowercase
    await screenTasks.filter.name.input().fill('game');

    // Assert current task is still opened
    await expect(screenTask.name()).toHaveText('BAZ');
    // Assert the displayed tasks match the filter
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await expect(screenTasks.taskName().nth(0)).toHaveText('GAME');
    await expect(page).toHaveScreenshot('filters-name-filled.png');

    // Assert the URL ends with "?search=${value}"
    await expect.poll(async () => getLocationSearch(page)).toBe('?search=game');

    // Reload the page, assert the filter is still open and applied
    await reloadIgnoringCache(page);
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await expect(screenTasks.taskName().nth(0)).toHaveText('GAME');

    // Clear the filter value with "Clear" button in the form control
    await screenTasks.filter.name.buttonClear().click();
    await expect(page).toHaveScreenshot('filters-cleared.png');

    // Assert all tasks are displayed
    await expect(screenTasks.taskItem()).toHaveCount(4);
    await expect.poll(async () => getLocationSearch(page)).toBe('');
  });

  test('Date range: yesterday excludes running tasks started today', async ({ page }) => {
    const now = new Date();

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const yesterdayStart = new Date(startOfToday);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);

    const yesterdayEnd = new Date(yesterdayStart);
    yesterdayEnd.setHours(23, 59, 59, 999);

    const yesterdaySessionStart = new Date(yesterdayStart);
    yesterdaySessionStart.setHours(10, 0, 0, 0);

    const yesterdaySessionEnd = new Date(yesterdayStart);
    yesterdaySessionEnd.setHours(11, 0, 0, 0);

    let todayRunningStart = new Date(now.getTime() - 60 * 1000);
    if (todayRunningStart < startOfToday) {
      todayRunningStart = new Date(startOfToday.getTime() + 1000);
    }
    if (todayRunningStart > now) {
      todayRunningStart = new Date(now.getTime() - 1000);
    }

    const toSec = (ms: number) => Math.floor(ms / 1000);

    await page.evaluate(
      (payload) => {
        localStorage.setItem('tasks', JSON.stringify(payload));
      },
      {
        version: 1,
        value: [
          {
            id: 'y1',
            name: 'YESTERDAY TASK',
            state: 0,
            sessions: [[toSec(yesterdaySessionStart.valueOf()), toSec(yesterdaySessionEnd.valueOf())]],
          },
          {
            id: 't1',
            name: 'TODAY RUNNING TASK',
            state: 0,
            sessions: [[toSec(todayRunningStart.valueOf()), null]],
          },
        ],
      },
    );

    const from = encodeURIComponent(yesterdayStart.toISOString());
    const to = encodeURIComponent(yesterdayEnd.toISOString());

    await page.goto(`/active?from=${from}&to=${to}`);

    await expect(screenTasks.taskItemByText('TODAY RUNNING TASK')).toHaveCount(0);
    await expect(screenTasks.taskItemByText('YESTERDAY TASK')).toHaveCount(1);
  });
});
