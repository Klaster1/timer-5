import { expect, test } from '@playwright/test';
import { App } from '../page-objects/app';
import { DialogHotkeyCheatsheet } from '../page-objects/dialog-hotkeys-cheatsheet';
import { ScreenTask } from '../page-objects/screen-task';
import { ScreenTasks } from '../page-objects/screen-tasks';
import {
  closeOverlays,
  forceSystemTheme,
  getLocationPathname,
  pressKeys,
  pressRussianKeys,
  reloadIgnoringCache,
  seedTasks,
  session,
} from '../utils';

test.describe('General', () => {
  let app: App;
  let dialogHotkeyCheatsheet: DialogHotkeyCheatsheet;
  let screenTask: ScreenTask;
  let screenTasks: ScreenTasks;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    app = new App(page);
    dialogHotkeyCheatsheet = new DialogHotkeyCheatsheet(page);
    screenTask = new ScreenTask(page);
    screenTasks = new ScreenTasks(page);
  });

  test('Hotkey help', async ({ page }) => {
    // Send "shift+?", assert the hotkey cheatsheet is opened
    await page.keyboard.press('Shift+?');
    // Assert it displays all hotkeys, in english only
    await expect(dialogHotkeyCheatsheet.descriptions()).toHaveCount(7);
    await expect(page).toHaveScreenshot('general-hotkeys-only-tasks.webp');

    // Assert "Close" closes the dialog
    await dialogHotkeyCheatsheet.buttonDismiss().click();
    await expect(dialogHotkeyCheatsheet.dialog()).toBeHidden();

    // Open a session, assert session hotkeys are displayed
    await screenTasks.addTask('Keys');
    await page.keyboard.press('Shift+?');

    await expect(dialogHotkeyCheatsheet.descriptions()).toHaveCount(12);
    await expect(page).toHaveScreenshot('general-hotkeys-task-opened.webp');

    // Open the dialog again, assert "Esc" closes the dialog
    await page.keyboard.press('Escape');
    await expect(dialogHotkeyCheatsheet.dialog()).toBeHidden();
  });

  test('Esc does not close left navigation drawer', async ({ page }) => {
    await page.goto('/all');
    await expect(app.buttonActiveTasks()).toBeInViewport();

    await app.buttonImportExport().focus();
    await expect(app.buttonImportExport()).toBeFocused();
    await page.keyboard.press('Escape');

    await expect(app.buttonActiveTasks()).toBeInViewport();
  });

  test('Theme switcher', async ({ page }) => {
    // Switch to dark theme
    await app.buttonSwitchTheme().click();
    await expect(app.buttonTheme('Dark')).toBeVisible();
    await expect(page).toHaveScreenshot('general-themes-menu.webp');

    await app.buttonTheme('Dark').click();
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-dark.webp');

    // Switch to light theme
    await app.buttonSwitchTheme().click();
    await expect(app.buttonTheme('Light')).toBeVisible();
    await app.buttonTheme('Light').click();
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-light.webp');

    // Switch to system theme
    await app.buttonSwitchTheme().click();
    await expect(app.buttonTheme('System')).toBeVisible();
    await app.buttonTheme('System').click();

    // Override the system theme to dark
    await forceSystemTheme(page, 'dark');
    await closeOverlays(page);
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-system-dark.webp');

    // Override the system theme to light
    await forceSystemTheme(page, 'light');
    await closeOverlays(page);
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-system-light.webp');

    // Reload the page
    await reloadIgnoringCache(page);
    // Assert the theme is preserved
    await expect(page.locator('body')).not.toHaveClass(/theme-dark/);
  });

  test('Navigation', async ({ page }) => {
    // Have several screens worth of tasks of all statuses, "Task 59" is the newest
    const states = ['active', 'finished', 'dropped'] as const;
    const hour = (i: number, h: number) => new Date(Date.UTC(2026, 0, 1 + i, h)).toISOString();
    const taskName = (i: number) => `Task ${String(i).padStart(2, '0')}`;
    await seedTasks(
      page,
      Array.from({ length: 60 }, (_, i) => ({
        name: taskName(i),
        state: states[i % 3],
        sessions: [session(hour(i, 10), hour(i, 11))],
      })),
    );
    await page.goto('/active');
    // CI serves the app under /timer-5/
    const pathname = (route: string) =>
      expect.poll(async () => getLocationPathname(page)).toMatch(new RegExp('/' + route + '$'));

    // Click the app logo, assert all tasks open and the URL ends with "/all"
    await app.buttonAllTasks().click();
    await pathname('all');
    await expect(screenTasks.taskName().first()).toHaveText(taskName(59));
    await expect.poll(async () => (await screenTasks.renderedStateIcons()).length).toBe(3);

    // Send "j", assert the first task in the list is opened and the row is marked as selected
    await pressKeys(page, 'j');
    await expect(screenTask.name()).toHaveText(taskName(59));
    await expect(screenTasks.taskItemByText(taskName(59))).toHaveClass(/mdc-list-item--activated/);

    // Send "j" again, assert the second task is opened
    await pressKeys(page, 'j');
    await expect(screenTask.name()).toHaveText(taskName(58));
    await expect(screenTasks.taskItemByText(taskName(58))).toHaveClass(/mdc-list-item--activated/);

    // Send "k" twice, assert the last task is opened and is visible in the task list
    await pressKeys(page, 'k');
    await expect(screenTask.name()).toHaveText(taskName(59));
    await pressKeys(page, 'k');
    await expect(screenTask.name()).toHaveText(taskName(0));
    await expect(screenTasks.taskItemByText(taskName(0))).toBeInViewport();
    await expect(screenTasks.taskItemByText(taskName(0))).toHaveClass(/mdc-list-item--activated/);

    // Send "j", assert the first task is visible in the task list
    await pressKeys(page, 'j');
    await expect(screenTask.name()).toHaveText(taskName(59));
    await expect(screenTasks.taskItemByText(taskName(59))).toBeInViewport();

    // Click "Active tasks", assert only active tasks are visible, the "Active" route is opened
    await app.buttonActiveTasks().click();
    await pathname('active');
    await expect.poll(async () => screenTasks.renderedStateIcons()).toEqual(['play_circle']);

    // Click "Finished tasks", assert only finished tasks are visible, the "Finished" route is opened
    await app.buttonFinishedTasks().click();
    await pathname('finished');
    await expect.poll(async () => screenTasks.renderedStateIcons()).toEqual(['check_circle']);

    // Click "Dropped tasks", assert only dropped tasks are visible, the "Dropped" route is opened
    await app.buttonDroppedTasks().click();
    await pathname('dropped');
    await expect.poll(async () => screenTasks.renderedStateIcons()).toEqual(['delete']);

    // Send "g t" keys, assert the "All tasks" are opened
    await pressKeys(page, 'g t');
    await pathname('all');
    // Send "g a" keys, assert the "Active tasks" are opened
    await pressKeys(page, 'g a');
    await pathname('active');
    // Send "g f" keys, assert the "Finished tasks" are opened
    await pressKeys(page, 'g f');
    await pathname('finished');

    // Send the same keys in the Russian layout
    await pressRussianKeys(page, 'п е');
    await pathname('all');
    await pressRussianKeys(page, 'п ф');
    await pathname('active');
    await pressRussianKeys(page, 'п а');
    await pathname('finished');
    // "о" and "л" are "j" and "k"
    await pressRussianKeys(page, 'о');
    await expect(screenTask.name()).toHaveText(taskName(58));
    await pressRussianKeys(page, 'л');
    await expect(screenTask.name()).toHaveText(taskName(1));
  });

  test('Navigation: the open task is scrolled to the center of the list', async ({ page }) => {
    const hour = (i: number, h: number) => new Date(Date.UTC(2026, 0, 1 + i, h)).toISOString();
    const taskName = (i: number) => `Task ${String(i).padStart(2, '0')}`;
    await seedTasks(
      page,
      Array.from({ length: 60 }, (_, i) => ({ name: taskName(i), sessions: [session(hour(i, 10), hour(i, 11))] })),
    );
    // A row is 48px high and the open row's top edge goes to the center, so its middle is 24px below the center
    const roughlyCentered = 36;

    // Go to all tasks
    await page.goto('/all');
    await expect(screenTasks.taskName().first()).toHaveText(taskName(59));

    // Click a task towards the screen end
    const nearEnd = await screenTasks.lastFullyVisibleTask();
    const nearEndName = (await nearEnd.getByTestId('screen-tasks__task-name').textContent()) ?? '';
    const index = Number(nearEndName.replace('Task ', ''));
    expect(await screenTasks.distanceFromViewportCenter(nearEnd)).toBeGreaterThan(roughlyCentered * 3);
    await nearEnd.getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.name()).toHaveText(nearEndName);
    // Assert it becomes roughly centered in the task list
    await expect
      .poll(async () => screenTasks.distanceFromViewportCenter(screenTasks.taskItemByText(nearEndName)))
      .toBeLessThan(roughlyCentered);

    // Click the next task, assert it becomes roughly centered in the task list
    const next = taskName(index - 1);
    expect(await screenTasks.distanceFromViewportCenter(screenTasks.taskItemByText(next))).toBeGreaterThan(
      roughlyCentered,
    );
    await screenTasks.taskItemByText(next).getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.name()).toHaveText(next);
    await expect
      .poll(async () => screenTasks.distanceFromViewportCenter(screenTasks.taskItemByText(next)))
      .toBeLessThan(roughlyCentered);

    // Click the previous task, assert it becomes roughly centered in the task list
    await screenTasks.taskItemByText(nearEndName).getByTestId('screen-tasks__task-name').click();
    await expect(screenTask.name()).toHaveText(nearEndName);
    await expect
      .poll(async () => screenTasks.distanceFromViewportCenter(screenTasks.taskItemByText(nearEndName)))
      .toBeLessThan(roughlyCentered);
  });
});
