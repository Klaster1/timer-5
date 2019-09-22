import {Hotkey, ExtendedKeyboardEvent} from 'angular2-hotkeys';

export const hotkey = (keys: string|string[], description: string, cb: (e: ExtendedKeyboardEvent) => any) => new Hotkey(keys, (e) => (cb(e), e), [], description);
