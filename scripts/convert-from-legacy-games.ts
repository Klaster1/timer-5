import { Session } from '@app/types';
import { StoreState } from '@app/types/store';
import { readFileSync, writeFileSync } from 'fs';
import { nanoid } from 'nanoid';
import { resolve } from 'path';
import yargs from 'yargs';

type Game = {
  state: 'active' | 'finished' | 'dropped' | 'hold' | 'wish';
  title: string;
  id: string;
  sessions: { start: number; stop: number }[];
};

const gamesToTasks = (games: Game[]): StoreState['tasks'] => {
  const tasks = Object.fromEntries(
    games.map((game) => {
      const id = nanoid();
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
              id: nanoid(),
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
    values: tasks as any,
  };
};

const { input, output } = yargs(process.argv).options({
  input: { type: 'string', required: true },
  output: { type: 'string', required: true },
}).argv;

console.log('Input', input);
console.log('Output', output);

const tasksObject = gamesToTasks(JSON.parse(readFileSync(resolve(input), 'utf8')));

writeFileSync(resolve(output), JSON.stringify(tasksObject, null, '  '));

console.log(`Converted ${tasksObject.ids.length} games to tasks.`);
