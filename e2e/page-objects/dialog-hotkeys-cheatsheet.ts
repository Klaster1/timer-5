import { Selector } from 'testcafe';

const dialog = Selector('dialog-hotkeys-cheatsheet');

export const dialogHotkeyCheatsheet = {
  dialog,
  keylist: dialog.find('dl'),
  buttonDismiss: dialog.find('button').withText('Close'),
};
