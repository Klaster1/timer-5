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
});
