import { readFileSync, writeFileSync } from 'fs';
import { nanoid } from 'nanoid';
import { resolve } from 'path';
import yargs from 'yargs';

/**
 * @typedef {import('../src/app/types').StoreState} StoreState
 */
/**
 * @typedef {import('../src/app/types').TaskState} TaskState
 */
/**
 * @typedef {import('../src/app/types').Session} Session
 */

/**
 * @typedef {{
  state: 'active'|'finished'|'dropped'|'hold'|'wish',
  title: string,
  id: string,
  sessions: {start: number, stop: number}[]
}} Game
 */

/**
 * @param {Game[]} games
 * @returns {StoreState['tasks']}
 */
const gamesToTasks = (games) => {
  const tasks = Object.fromEntries(
    games.map((game) => {
      const id = nanoid(6);
      return [
        id,
        {
          id,
          name: game.title,
          state: {
            active: 'active',
            finished: 'finished',
            dropped: 'dropped',
            hold: 'active',
            wish: 'active',
          }[game.state],
          sessions: game.sessions.map(
            /**
             * @returns {Session}
             */
            (s) => ({
              id: nanoid(6),
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

const { input, output } = yargs(process.argv).options({
  input: { type: 'string', required: true },
  output: { type: 'string', required: true },
}).argv;

console.log('Input', input);
console.log('Output', output);

const tasksObject = gamesToTasks(JSON.parse(readFileSync(resolve(input), 'utf8')));

writeFileSync(resolve(output), JSON.stringify(tasksObject, null, '  '));

console.log(`Converted ${tasksObject.ids.length} games to tasks.`);
