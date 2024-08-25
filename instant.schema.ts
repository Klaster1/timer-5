// timer-5
// https://instantdb.com/dash?s=main&t=home&app=4b656c72-5e8d-47c7-ad2b-56d7bd09ff3d

import { i } from '@instantdb/core';

const INSTANT_APP_ID = '4b656c72-5e8d-47c7-ad2b-56d7bd09ff3d';

const graph = i.graph(
  INSTANT_APP_ID,
  {
    sessions: i.entity({
      end: i.number().optional(),
      id: i.string().unique().indexed(),
      start: i.number(),
    }),
    tasks: i.entity({
      id: i.string().unique().indexed(),
      name: i.string(),
      state: i.string(),
    }),
  },
  {
    tasksSessions: {
      forward: {
        on: 'tasks',
        has: 'many',
        label: 'sessions',
      },
      reverse: {
        on: 'sessions',
        has: 'one',
        label: 'task',
      },
    },
  },
);

export default graph;
