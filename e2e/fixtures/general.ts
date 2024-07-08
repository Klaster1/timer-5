import { app } from '../page-objects/app';
import { dialogHotkeyCheatsheet } from '../page-objects/dialog-hotkeys-cheatsheet';
import { screenTasks } from '../page-objects/screen-tasks';
import { getCdpClient, reload } from '../utils';
import { VISUAL_REGRESSION_OK, comparePageScreenshot } from '../visual-regression';

fixture('General');

test('Hotkey help', async (t) => {
  // Send "shift+?", assert the hotkey cheatsheet is opened
  await t.pressKey('shift+?');
  // Assert it displays all hotkeys, in english only
  await t.expect(dialogHotkeyCheatsheet.descriptions.count).eql(7);
  await t.expect(await comparePageScreenshot('only tasks')).eql(VISUAL_REGRESSION_OK);
  // Assert "Close" closes the dialog
  await t.click(dialogHotkeyCheatsheet.buttonDismiss);
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
  // Open a session, assert session hotkeys are displayed
  await screenTasks.addTask('Keys');
  await t.pressKey('shift+?');
  await t.expect(dialogHotkeyCheatsheet.descriptions.count).eql(12);
  await t.expect(await comparePageScreenshot('tasks and task')).eql(VISUAL_REGRESSION_OK);
  // Open the dialog again, assert "Esc" closes the dialog
  await t.pressKey('esc');
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
});

test('Theme switcher', async (t) => {
  // Switch to dark theme
  await t.click(app.buttonSwitchTheme);
  await t.expect(await comparePageScreenshot('themes menu')).eql(VISUAL_REGRESSION_OK);
  await t.click(app.buttonTheme.withText('Dark'));
  // Assert the theme is applied
  await t.expect(await comparePageScreenshot('dark theme', { theme: 'preserve' })).eql(VISUAL_REGRESSION_OK);
  // Switch to light theme
  await t.click(app.buttonSwitchTheme);
  await t.click(app.buttonTheme.withText('Light'));
  // Assert the theme is applied
  await t.expect(await comparePageScreenshot('light theme', { theme: 'preserve' })).eql(VISUAL_REGRESSION_OK);
  // Switch to system theme
  await t.click(app.buttonSwitchTheme);
  await t.click(app.buttonTheme.withText('System'));
  // Override the system theme to dark
  const client = await getCdpClient();
  await client.send('Emulation.setEmulatedMedia', {
    media: 'screen',
    features: [{ name: 'prefers-color-scheme', value: 'dark' }],
  });
  // Assert the theme is applied
  await t.expect(await comparePageScreenshot('system theme dark', { theme: 'preserve' })).eql(VISUAL_REGRESSION_OK);
  // Override the system theme to light
  await client.send('Emulation.setEmulatedMedia', {
    media: 'screen',
    features: [{ name: 'prefers-color-scheme', value: 'light' }],
  });
  // Assert the theme is applied
  await t.click('body', { offsetX: 0, offsetY: 0 }); // Close the tooltip
  await t.expect(await comparePageScreenshot('system theme light', { theme: 'preserve' })).eql(VISUAL_REGRESSION_OK);
  // Reload the page
  await reload();
  // Assert the theme is preserved
  await t.expect(app.buttonSwitchTheme.exists).ok();
  await t.expect(await comparePageScreenshot('system theme light', { theme: 'preserve' })).eql(VISUAL_REGRESSION_OK);
});
