import { dialogHotkeyCheatsheet } from '../page-objects/dialog-hotkeys-cheatsheet';
import { screenTasks } from '../page-objects/screen-tasks';

fixture('General');

test('Hotkey help', async (t) => {
  // Send "shift+?", assert the hotkey cheatsheet is opened
  await t.pressKey('shift+?');
  // Assert it displays all hotkeys, in english only
  await t.expect(dialogHotkeyCheatsheet.descriptions.count).eql(8);
  // Assert "Close" closes the dialog
  await t.click(dialogHotkeyCheatsheet.buttonDismiss);
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
  // Open a session, assert session hotkeys are displayed
  await screenTasks.addTask('Keys');
  await t.pressKey('shift+?');
  await t.expect(dialogHotkeyCheatsheet.descriptions.count).eql(13);
  // Open the dialog again, assert "Esc" closes the dialog
  await t.pressKey('esc');
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
});
