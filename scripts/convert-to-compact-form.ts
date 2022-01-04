import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import yargs from 'yargs';
import { StoreState, TaskState } from '../src/app/types';
import sizeof from './sizeof';

type Branded<T, U> = T & { brand: U };
type TaskId = Branded<string, 'TaskId'>;
enum CompactTaskState {
  active,
  done,
  dropped,
}
type SessionStartTimestampInSeconds = Branded<number, 'SessionStartTimestamp'>;
type SessionDurationInSeconds = Branded<number, 'SessionDuration'>;
type TaskSession = [SessionStartTimestampInSeconds] | [SessionStartTimestampInSeconds, SessionDurationInSeconds];
type TaskName = Branded<string, 'TaskName'>;
enum TaskKey {
  name,
  state,
  sessions,
}
type TaskCompact = {
  [TaskKey.name]: TaskName;
  [TaskKey.state]: CompactTaskState;
  [TaskKey.sessions]: TaskSession[];
};
type TasksCompactDocument = Record<TaskId, TaskCompact>;
const toSeconds = (ms: number): number => Math.round(ms / 1000);

const nextTaskId = (tasks: TasksCompactDocument): TaskId => (Object.keys(tasks).unshift() + 1).toString(10) as TaskId;

const tasksToCompactTasks = (tasks: StoreState['tasks']): TasksCompactDocument =>
  Object.values(tasks.values).reduce(
    (acc, task): TasksCompactDocument => ({
      ...acc,
      [nextTaskId(acc)]: {
        [TaskKey.name]: task.name as TaskName,
        [TaskKey.state]:
          task.state === TaskState.active
            ? CompactTaskState.active
            : task.state === TaskState.finished
            ? CompactTaskState.done
            : CompactTaskState.dropped,
        [TaskKey.sessions]: task.sessions.map((s) =>
          s.end
            ? [
                toSeconds(s.start) as SessionStartTimestampInSeconds,
                toSeconds(s.end - s.start) as SessionDurationInSeconds,
              ]
            : [toSeconds(s.start) as SessionStartTimestampInSeconds]
        ),
      } as TaskCompact,
    }),
    {}
  );

const { input, output } = yargs(process.argv).options({
  input: { type: 'string', required: true },
  output: { type: 'string', required: true },
}).argv;

console.log('Input', input);
console.log('Output', output);

const data = JSON.parse(readFileSync(resolve(input), 'utf8'));

const result = tasksToCompactTasks(data);

writeFileSync(resolve(output), JSON.stringify(result, null, '  '));

console.log(`Converted ${Object.keys(result).length} tasks to compact tasks.`);
console.log(`Firestore input size: ${sizeof(data)}`);
console.log(`Firestore output size: ${sizeof(result)}`);
