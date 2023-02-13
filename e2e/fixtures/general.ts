import { dialogHotkeyCheatsheet } from '../page-objects/dialog-hotkeys-cheatsheet';
import { screenTasks } from '../page-objects/screen-tasks';
import { urlTo } from '../utils';

fixture('General');

test('Hotkey help', async (t) => {
  await t.navigateTo(urlTo('/'));
  // Send "shift+?", assert the hotkey cheatsheet is opened
  await t.pressKey('shift+?');
  // Assert it displays all hotkeys, in english only
  await t
    .expect(dialogHotkeyCheatsheet.keylist.textContent)
    .eql(
      '?Show / hide this help menuescHide this help menug tGo to all tasksg aGo to active tasksg fGo to finished tasksaAdd taskjkNext/prev taskctrl + fToggle search'
    );
  // Assert "Close" closes the dialog
  await t.click(dialogHotkeyCheatsheet.buttonDismiss);
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
  // Open a session, assert session hotkeys are displayed
  await screenTasks.addTask('Keys');
  await t.pressKey('shift+?');
  await t
    .expect(dialogHotkeyCheatsheet.keylist.textContent)
    .contains('sStart/stop taskm fMark as finishedm aMark as activer tRename taskd tDelete task');
  // Open the dialog again, assert "Esc" closes the dialog
  await t.pressKey('esc');
  await t.expect(dialogHotkeyCheatsheet.dialog.exists).notOk();
});
