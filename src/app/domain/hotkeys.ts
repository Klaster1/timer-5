import { ExtendedKeyboardEvent, Hotkey } from 'angular2-hotkeys';

const KEY_NEXT_EN = 'j';
const KEY_NEXT_RU = 'о';
export const KEYS_NEXT = [KEY_NEXT_EN, KEY_NEXT_RU];

const KEY_PREV_EN = 'k';
const KEY_PREV_RU = 'л';
export const KEYS_PREV = [KEY_PREV_EN, KEY_PREV_RU];

const KEY_ADD_EN = 'a';
const KEY_ADD_RU = 'ф';
export const KEYS_ADD = [KEY_ADD_EN, KEY_ADD_RU];

const KEY_SEARCH_EN = 'ctrl+f';
const KEY_SEARCH_RU = 'ctrl+а';
export const KEYS_SEARCH = [KEY_SEARCH_EN, KEY_SEARCH_RU];

const KEY_GO_ALL_EN = 'g t';
const KEY_GO_ALL_RU = 'п е';
export const KEYS_GO_ALL = [KEY_GO_ALL_EN, KEY_GO_ALL_RU];

const KEY_GO_ACTIVE_EN = 'g a';
const KEY_GO_ACTIVE_RU = 'п ф';
export const KEYS_GO_ACTIVE = [KEY_GO_ACTIVE_EN, KEY_GO_ACTIVE_RU];

const KEY_GO_FINISHED_EN = 'g f';
const KEY_GO_FINISHED_RU = 'п а';
export const KEYS_GO_FINISHED = [KEY_GO_FINISHED_EN, KEY_GO_FINISHED_RU];

const KEY_START_STOP_EN = 's';
const KEY_START_STOP_RU = 'ы';
export const KEYS_START_STOP = [KEY_START_STOP_EN, KEY_START_STOP_RU];

const KEY_MARK_FINISHED_EN = 'm f';
const KEY_MARK_FINISHED_RU = 'ь а';
export const KEYS_MARK_FINISHED = [KEY_MARK_FINISHED_EN, KEY_MARK_FINISHED_RU];

const KEY_MARK_ACTIVE_EN = 'm a';
const KEY_MARK_ACTIVE_RU = 'ь ф';
export const KEYS_MARK_ACTIVE = [KEY_MARK_ACTIVE_EN, KEY_MARK_ACTIVE_RU];

const KEY_RENAME_EN = 'r t';
const KEY_RENAME_RU = 'к е';
export const KEYS_RENAME = [KEY_RENAME_EN, KEY_RENAME_RU];

const KEY_DELETE_TASK_EN = 'd t';
const KEY_DELETE_TASK_RU = 'в е';
export const KEYS_DELETE_TASK = [KEY_DELETE_TASK_EN, KEY_DELETE_TASK_RU];

export const hotkey = (keys: string | string[], description: string, cb: (e: ExtendedKeyboardEvent) => any) =>
  new Hotkey(keys, (e) => (setTimeout(() => cb(e), 0), e), [], description);
