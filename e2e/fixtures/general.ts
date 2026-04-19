import { expect, test } from '@playwright/test';
import { App } from '../page-objects/app';
import { DialogHotkeyCheatsheet } from '../page-objects/dialog-hotkeys-cheatsheet';
import { ScreenTasks } from '../page-objects/screen-tasks';
import { closeOverlays, forceSystemTheme, reloadIgnoringCache } from '../utils';

test.describe('General', () => {
  let app: App;
  let dialogHotkeyCheatsheet: DialogHotkeyCheatsheet;
  let screenTasks: ScreenTasks;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    app = new App(page);
    dialogHotkeyCheatsheet = new DialogHotkeyCheatsheet(page);
    screenTasks = new ScreenTasks(page);
  });

  test('Hotkey help', async ({ page }) => {
    // Send "shift+?", assert the hotkey cheatsheet is opened
    await page.keyboard.press('Shift+?');
    // Assert it displays all hotkeys, in english only
    await expect(dialogHotkeyCheatsheet.descriptions()).toHaveCount(7);
    await expect(page).toHaveScreenshot('general-hotkeys-only-tasks.png');

    // Assert "Close" closes the dialog
    await dialogHotkeyCheatsheet.buttonDismiss().click();
    await expect(dialogHotkeyCheatsheet.dialog()).toBeHidden();

    // Open a session, assert session hotkeys are displayed
    await screenTasks.addTask('Keys');
    await page.keyboard.press('Shift+?');

    await expect(dialogHotkeyCheatsheet.descriptions()).toHaveCount(12);
    await expect(page).toHaveScreenshot('general-hotkeys-task-opened.png');

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
    await expect(page).toHaveScreenshot('general-themes-menu.png');

    await app.buttonTheme('Dark').click();
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-dark.png');

    // Switch to light theme
    await app.buttonSwitchTheme().click();
    await expect(app.buttonTheme('Light')).toBeVisible();
    await app.buttonTheme('Light').click();
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-light.png');

    // Switch to system theme
    await app.buttonSwitchTheme().click();
    await expect(app.buttonTheme('System')).toBeVisible();
    await app.buttonTheme('System').click();

    // Override the system theme to dark
    await forceSystemTheme(page, 'dark');
    await closeOverlays(page);
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-system-dark.png');

    // Override the system theme to light
    await forceSystemTheme(page, 'light');
    await closeOverlays(page);
    // Assert the theme is applied
    await expect(page).toHaveScreenshot('general-theme-system-light.png');

    // Reload the page
    await reloadIgnoringCache(page);
    // Assert the theme is preserved
    await expect(page.locator('body')).not.toHaveClass(/theme-dark/);
  });
});
