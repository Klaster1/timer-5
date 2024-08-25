import { NormalizedTasks, Theme } from '@app/providers/state';
import { init } from '@instantdb/core';

const APP_ID = '4b656c72-5e8d-47c7-ad2b-56d7bd09ff3d';

type Schema = {
  theme: Theme;
  tasks: NormalizedTasks;
};

export const db = init<Schema>({ appId: APP_ID });
