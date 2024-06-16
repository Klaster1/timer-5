import { Selector } from 'testcafe';

const dialog = Selector('dialog-hotkeys-cheatsheet');

export const dialogHotkeyCheatsheet = {
  dialog,
  keylist: dialog.find('dl'),
  descriptions: dialog.find('dd'),
  buttonDismiss: dialog.find('button').withText('Close'),
};
