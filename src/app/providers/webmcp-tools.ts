import { inject, WebMcpToolDescriptor } from '@angular/core';
import { Milliseconds } from '@app/domain/date-time';
import {
  filterTasks,
  getSessionId,
  isSessionRunning,
  isTaskRunning,
  Session,
  Task,
  taskDuration,
  TaskState,
} from '@app/domain/task';
import { AppStore } from '@app/providers/state';
import { isNumber } from '@app/utils/assert';
import { format } from 'date-fns/format';
import { isValid } from 'date-fns/isValid';
import { parseISO } from 'date-fns/parseISO';

type Args = Record<string, unknown>;
type Handler = (args: Args, store: AppStore, now: Milliseconds) => unknown;

class ToolInputError extends Error {}

const TIME_FORMAT_NOTE =
  'Times are ISO 8601 in the user\'s local time zone, with the UTC offset, for example "2026-11-05T09:30:00.000+01:00". ' +
  'Durations are in milliseconds.';
const TIME_INPUT_NOTE =
  'Accepts an ISO 8601 date-time with an offset ("2026-11-05T09:30:00+01:00") or without one (local time), ' +
  'or a date ("2026-11-05", local midnight).';
const SESSION_NOTE = 'Sessions are numbered from 0, in the order get_task lists them.';

const toIso = (time: Milliseconds): string => format(time, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
const toIsoOrNull = (time: Milliseconds | undefined): string | null => (isNumber(time) ? toIso(time) : null);

const describeValue = (value: unknown): string => JSON.stringify(value) ?? String(value);

const requireString = (args: Args, key: string): string => {
  const value = args[key];
  if (typeof value !== 'string' || !value.trim()) {
    throw new ToolInputError(`Input "${key}" must be a non-empty string, got ${describeValue(value)}.`);
  }
  return value.trim();
};

const optionalBoolean = (args: Args, key: string, fallback: boolean): boolean => {
  const value = args[key];
  if (value === undefined || value === null) return fallback;
  if (typeof value !== 'boolean')
    throw new ToolInputError(`Input "${key}" must be true or false, got ${describeValue(value)}.`);
  return value;
};

const optionalInteger = (args: Args, key: string, fallback: number, min: number, max: number): number => {
  const value = args[key];
  if (value === undefined || value === null) return fallback;
  if (typeof value !== 'number' || !Number.isInteger(value) || value < min || value > max) {
    throw new ToolInputError(`Input "${key}" must be an integer from ${min} to ${max}, got ${describeValue(value)}.`);
  }
  return value;
};

const TASK_STATES = [TaskState.active, TaskState.finished, TaskState.dropped] as const;

const optionalChoice = <const Choice extends string>(
  args: Args,
  key: string,
  choices: readonly Choice[],
): Choice | undefined => {
  const value = args[key];
  if (value === undefined || value === null) return undefined;
  const choice = choices.find((choice) => choice === value);
  if (!choice)
    throw new ToolInputError(`Input "${key}" must be one of ${choices.join(', ')}, got ${describeValue(value)}.`);
  return choice;
};

const parseTime = (key: string, value: unknown): Milliseconds => {
  const date = typeof value === 'string' ? parseISO(value) : undefined;
  if (!date || !isValid(date)) {
    throw new ToolInputError(`Input "${key}" must be an ISO 8601 date or date-time, got ${describeValue(value)}.`);
  }
  return date.valueOf();
};
const requireTime = (args: Args, key: string): Milliseconds => parseTime(key, args[key]);
const optionalTime = (args: Args, key: string): Milliseconds | undefined => {
  const value = args[key];
  return value === undefined || value === null ? undefined : parseTime(key, value);
};

const requireTask = (args: Args, store: AppStore): Task => {
  const taskId = requireString(args, 'taskId');
  const tasks = store.tasks();
  // Plain-object lookup: ids such as "constructor" would otherwise find Object.prototype members.
  const task = Object.hasOwn(tasks, taskId) ? tasks[taskId] : undefined;
  if (!task) throw new ToolInputError(`No task with id ${describeValue(taskId)}.`);
  return task;
};

const requireSessionIndex = (args: Args, task: Task): number => {
  const index = args['sessionIndex'];
  if (typeof index !== 'number' || !Number.isInteger(index) || index < 0 || index >= task.sessions.length) {
    throw new ToolInputError(
      `Task ${describeValue(task.id)} has no session ${describeValue(index)}; it has ${task.sessions.length} sessions, numbered from 0.`,
    );
  }
  return index;
};

const taskSummary = (task: Task, now: Milliseconds) => ({
  id: task.id,
  name: task.name,
  state: task.state,
  running: isTaskRunning(task),
  totalMs: taskDuration(task)(now),
  lastSessionStart: toIsoOrNull(task.sessions.at(-1)?.start),
});

const clippedDuration = (session: Session, from: Milliseconds, to: Milliseconds, now: Milliseconds): Milliseconds =>
  Math.max(0, Math.min(isNumber(session.end) ? session.end : now, to) - Math.max(session.start, from));

const defineTool = (
  definition: Pick<WebMcpToolDescriptor, 'name' | 'description' | 'inputSchema' | 'annotations'>,
  handler: Handler,
): WebMcpToolDescriptor => ({
  ...definition,
  execute: (args) => {
    try {
      return JSON.stringify(handler(args ?? {}, inject(AppStore), Date.now()));
    } catch (error) {
      if (error instanceof ToolInputError) return JSON.stringify({ error: error.message });
      throw error;
    }
  },
});

const taskIdSchema = { type: 'string', description: 'The task id, as returned by list_tasks.' } as const;
const sessionIndexSchema = { type: 'integer', minimum: 0, description: SESSION_NOTE } as const;
const timeSchema = (description: string) => ({ type: 'string', description }) as const;
const readOnly = { readOnlyHint: true } as const;
const consequential = { consequentialHint: true } as const;

export const webMcpTools: WebMcpToolDescriptor[] = [
  defineTool(
    {
      name: 'list_tasks',
      description:
        'Lists the time tracker tasks in the order the app shows them: tasks without sessions first, then running tasks, ' +
        'then the rest by most recent session start. "totalMs" is the time tracked so far, a running session counted up to now. ' +
        `"total" is the number of matching tasks, "tasks" holds at most "limit" of them. ${TIME_FORMAT_NOTE}`,
      inputSchema: {
        type: 'object',
        properties: {
          state: {
            type: 'string',
            enum: ['active', 'finished', 'dropped', 'all'],
            description: 'Only tasks in this state. Default "active".',
          },
          query: { type: 'string', description: 'Only tasks whose name contains this text, case-insensitive.' },
          runningOnly: { type: 'boolean', description: 'Only tasks with a running session. Default false.' },
          limit: { type: 'integer', minimum: 1, maximum: 500, description: 'Most tasks to return. Default 50.' },
        },
      },
      annotations: readOnly,
    },
    (args, store, now) => {
      const state = optionalChoice(args, 'state', [...TASK_STATES, 'all']) ?? TaskState.active;
      const query = typeof args['query'] === 'string' ? args['query'] : undefined;
      const runningOnly = optionalBoolean(args, 'runningOnly', false);
      const limit = optionalInteger(args, 'limit', 50, 1, 500);
      const matches = filterTasks({ state, search: query }, store.allTasks()).filter(
        (task) => !runningOnly || isTaskRunning(task),
      );
      return { total: matches.length, tasks: matches.slice(0, limit).map((task) => taskSummary(task, now)) };
    },
  ),
  defineTool(
    {
      name: 'get_task',
      description:
        'Returns one task with all its sessions. "end" is null while the session runs, and its "durationMs" counts up to now. ' +
        `${SESSION_NOTE} ${TIME_FORMAT_NOTE}`,
      inputSchema: { type: 'object', properties: { taskId: taskIdSchema }, required: ['taskId'] },
      annotations: readOnly,
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      return {
        ...taskSummary(task, now),
        sessions: task.sessions.map((session, index) => ({
          index,
          start: toIso(session.start),
          end: toIsoOrNull(session.end),
          durationMs: (isNumber(session.end) ? session.end : now) - session.start,
        })),
      };
    },
  ),
  defineTool(
    {
      name: 'get_time_report',
      description:
        'Reports the time tracked per task between "from" (inclusive) and "to" (exclusive). A session that crosses an edge ' +
        'counts only for the part inside the range, and a running session counts up to now. Tasks with no time in the range are left out. ' +
        `Tasks are sorted by time, longest first. ${TIME_INPUT_NOTE} ${TIME_FORMAT_NOTE}`,
      inputSchema: {
        type: 'object',
        properties: {
          from: timeSchema('Start of the range, inclusive.'),
          to: timeSchema(
            'End of the range, exclusive. A bare date is the start of that day, so a "to" of 2026-11-06 covers all of 2026-11-05.',
          ),
        },
        required: ['from', 'to'],
      },
      annotations: readOnly,
    },
    (args, store, now) => {
      const from = requireTime(args, 'from');
      const to = requireTime(args, 'to');
      if (to <= from) throw new ToolInputError(`Input "to" (${toIso(to)}) must be after "from" (${toIso(from)}).`);
      const tasks = store
        .allTasks()
        .map((task) => ({
          id: task.id,
          name: task.name,
          totalMs: task.sessions.reduce((sum, session) => sum + clippedDuration(session, from, to, now), 0),
        }))
        .filter((task) => task.totalMs > 0)
        .sort((a, b) => b.totalMs - a.totalMs || a.name.localeCompare(b.name));
      return {
        from: toIso(from),
        to: toIso(to),
        totalMs: tasks.reduce((sum, task) => sum + task.totalMs, 0),
        tasks,
      };
    },
  ),
  defineTool(
    {
      name: 'create_task',
      description:
        'Creates an active task and opens it in the app. With "start" true, also starts a session now. Returns the new task, including its id.',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'The task name.' },
          start: { type: 'boolean', description: 'Start a session right away. Default false.' },
        },
        required: ['name'],
      },
    },
    (args, store, now) => {
      const name = requireString(args, 'name');
      const start = optionalBoolean(args, 'start', false);
      const taskId = store.createTask(name);
      if (start) store.startTask(taskId, now);
      return taskSummary(requireTask({ taskId }, store), now);
    },
  ),
  defineTool(
    {
      name: 'start_task',
      description:
        'Starts a session on a task now. A finished or dropped task becomes active. Fails if the task already has a running session.',
      inputSchema: { type: 'object', properties: { taskId: taskIdSchema }, required: ['taskId'] },
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      if (isTaskRunning(task)) throw new ToolInputError(`Task ${describeValue(task.id)} is already running.`);
      store.startTask(task.id, now);
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'stop_task',
      description: 'Ends the running session of a task now. Fails if the task is not running.',
      inputSchema: { type: 'object', properties: { taskId: taskIdSchema }, required: ['taskId'] },
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      if (!isTaskRunning(task)) throw new ToolInputError(`Task ${describeValue(task.id)} is not running.`);
      store.stopTask(task.id, now);
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'rename_task',
      description: 'Changes the name of a task.',
      inputSchema: {
        type: 'object',
        properties: { taskId: taskIdSchema, name: { type: 'string', description: 'The new task name.' } },
        required: ['taskId', 'name'],
      },
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      store.renameTask(task.id, requireString(args, 'name'));
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'set_task_state',
      description:
        'Moves a task to the active, finished or dropped list. It does not stop a running session; call stop_task for that.',
      inputSchema: {
        type: 'object',
        properties: {
          taskId: taskIdSchema,
          state: { type: 'string', enum: ['active', 'finished', 'dropped'], description: 'The new task state.' },
        },
        required: ['taskId', 'state'],
      },
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      const state = optionalChoice(args, 'state', TASK_STATES);
      if (!state) throw new ToolInputError('Input "state" is required.');
      store.updateTaskState(task.id, state);
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'edit_session',
      description:
        'Changes the start and end of one session. Omit "end" to make the session running, which fails if another session of ' +
        `the task is running. "end" must not be before "start". ${SESSION_NOTE} ${TIME_INPUT_NOTE}`,
      inputSchema: {
        type: 'object',
        properties: {
          taskId: taskIdSchema,
          sessionIndex: sessionIndexSchema,
          start: timeSchema('The new session start.'),
          end: timeSchema('The new session end. Omit for a running session.'),
        },
        required: ['taskId', 'sessionIndex', 'start'],
      },
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      const index = requireSessionIndex(args, task);
      const start = requireTime(args, 'start');
      const end = optionalTime(args, 'end');
      if (end !== undefined && end < start) {
        throw new ToolInputError(`Input "end" (${toIso(end)}) must not be before "start" (${toIso(start)}).`);
      }
      if (end === undefined && task.sessions.some((session, i) => i !== index && isSessionRunning(session))) {
        throw new ToolInputError(`Task ${describeValue(task.id)} already has another running session.`);
      }
      store.editSession(task.id, index, { start, end });
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'delete_session',
      description:
        'Deletes one session of a task for good. Ask the user to confirm before you call this tool. ' +
        `Later sessions move down by one index. ${SESSION_NOTE}`,
      inputSchema: {
        type: 'object',
        properties: { taskId: taskIdSchema, sessionIndex: sessionIndexSchema },
        required: ['taskId', 'sessionIndex'],
      },
      annotations: consequential,
    },
    (args, store, now) => {
      const task = requireTask(args, store);
      const session = task.sessions[requireSessionIndex(args, task)];
      if (session) store.deleteSession(task.id, getSessionId(session));
      return taskSummary(requireTask(args, store), now);
    },
  ),
  defineTool(
    {
      name: 'delete_task',
      description: 'Deletes a task and all its sessions for good. Ask the user to confirm before you call this tool.',
      inputSchema: { type: 'object', properties: { taskId: taskIdSchema }, required: ['taskId'] },
      annotations: consequential,
    },
    (args, store) => {
      const task = requireTask(args, store);
      store.deleteTask(task.id);
      return { deleted: { id: task.id, name: task.name } };
    },
  ),
];
