import { Selector } from 'testcafe';
import { e2e } from '../utils';

export const app = {
  favicon: Selector('link[rel="icon"]'),
  buttonActiveTasks: e2e('navigation__button-tasks-active'),
  buttonFinishedTasks: e2e('navigation__button-tasks-finished'),
  buttonDroppedTasks: e2e('navigation__button-tasks-dropped'),
  buttonImportExport: e2e('navigation__button-import-export'),
  buttonExport: e2e('navigation__button-export'),
  inputImport: e2e('navigation__input-import'),
};
