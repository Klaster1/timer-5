// @ts-check

import { StoreState } from '@app/types/store';
import { Session } from '@app/types';

const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const shortid = require('shortid');

type Game = {
  state: 'active' | 'finished' | 'dropped' | 'hold' | 'wish';
  title: string;
  id: string;
  sessions: { start: number; stop: number }[];
};

const gamesToTasks = (games: Game[]): StoreState['tasks'] => {
  const tasks = Object.fromEntries(
    games.map((game) => {
      const id = shortid();
      return [
        id,
        {
          id,
          name: game.title,
          state: {
            active: 'active',
            finished: 'done',
            dropped: 'dropped',
            hold: 'on-hold',
            wish: 'to-do',
          }[game.state],
          sessions: game.sessions.map(
            (s): Session => ({
              id: shortid(),
              start: s.start,
              end: s.stop,
            })
          ),
        },
      ];
    })
  );
  return {
    ids: Object.keys(tasks),
    values: tasks,
  };
};

const { games, tasks } = minimist(process.argv.slice(2));
const tasksObject = gamesToTasks(JSON.parse(fs.readFileSync(path.resolve(games), 'utf8')));

fs.writeFileSync(path.resolve(tasks), JSON.stringify(tasksObject, null, '  '));

console.log(`Converted ${tasksObject.ids.length} games to tasks.`);
