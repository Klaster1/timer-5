import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { App } from '../page-objects/app';
import { ScreenTask } from '../page-objects/screen-task';
import { ScreenTasks } from '../page-objects/screen-tasks';
import { advanceDate, mockDate, restoreDate } from '../utils';

type StubTool = { execute: (args: Record<string, unknown>, options: { signal: AbortSignal }) => unknown };
type StubWindow = Window & { __webMcpTools: Map<string, StubTool> };

type SeedTask = { id: string; name: string; state: 0 | 1 | 2; sessions: [string, string | null][] };

const TOOL_NAMES = [
  'create_task',
  'delete_session',
  'delete_task',
  'edit_session',
  'get_task',
  'get_time_report',
  'list_tasks',
  'rename_task',
  'set_task_state',
  'start_task',
  'stop_task',
];

const HOUR = 3_600_000;
// The mocked "now": the running task has been running since 23:30 the evening before.
const NOW = '2024-06-04T05:00:00+02:00';

const SEED: SeedTask[] = [
  { id: 'fresh', name: 'Fresh task', state: 1, sessions: [] },
  { id: 'run1', name: 'Running task', state: 0, sessions: [['2024-06-03T23:30:00+02:00', null]] },
  {
    id: 'edge',
    name: 'Edge task',
    state: 0,
    sessions: [
      ['2024-06-02T23:00:00+02:00', '2024-06-03T01:00:00+02:00'],
      ['2024-06-03T23:00:00+02:00', '2024-06-04T02:00:00+02:00'],
      ['2024-06-05T10:00:00+02:00', '2024-06-05T11:00:00+02:00'],
    ],
  },
  { id: 'in1', name: 'Inside task', state: 0, sessions: [['2024-06-03T10:00:00+02:00', '2024-06-03T12:30:00+02:00']] },
  { id: 'old1', name: 'Old task', state: 2, sessions: [['2024-05-01T09:00:00+02:00', '2024-05-01T10:00:00+02:00']] },
];

// Chromium has no WebMCP support in headless mode, so the stub keeps the registered tools for the tests to call.
const installModelContextStub = () => {
  const tools = new Map<string, StubTool>();
  (window as unknown as StubWindow).__webMcpTools = tools;
  Object.defineProperty(document, 'modelContext', {
    configurable: true,
    value: {
      registerTool: (tool: StubTool & { name: string }, options?: { signal?: AbortSignal }) => {
        tools.set(tool.name, tool);
        options?.signal?.addEventListener('abort', () => {
          if (tools.get(tool.name) === tool) tools.delete(tool.name);
        });
        return Promise.resolve();
      },
    },
  });
};

const toolNames = (page: Page): Promise<string[]> =>
  page.evaluate(() => [...(window as unknown as StubWindow).__webMcpTools.keys()].sort());

const callTool = async (page: Page, name: string, args: Record<string, unknown> = {}): Promise<any> => {
  const result = await page.evaluate(
    async ({ name, args }) => {
      const tool = (window as unknown as StubWindow).__webMcpTools.get(name);
      if (!tool) throw new Error(`Tool is not registered: ${name}`);
      return tool.execute(args, { signal: new AbortController().signal });
    },
    { name, args },
  );
  return JSON.parse(result as string);
};

const seconds = (iso: string): number => Date.parse(iso) / 1000;

test.describe('WebMCP', () => {
  let app: App;
  let screenTask: ScreenTask;
  let screenTasks: ScreenTasks;

  const seedToStorage = (tasks: SeedTask[]) =>
    tasks.map((task) => ({
      ...task,
      sessions: task.sessions.map(([start, end]) => [seconds(start), end === null ? null : seconds(end)]),
    }));

  const openApp = async (page: Page, tasks: SeedTask[] = []) => {
    await page.goto('/');
    await page.evaluate((tasks) => {
      localStorage.setItem('tasks', JSON.stringify({ version: 1, value: tasks }));
    }, seedToStorage(tasks));
    await page.goto('/all');
    await expect.poll(() => toolNames(page)).toEqual(TOOL_NAMES);
    await mockDate(page, new Date(NOW));
  };

  test.use({ timezoneId: 'Europe/Berlin' });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(installModelContextStub);
    app = new App(page);
    screenTask = new ScreenTask(page);
    screenTasks = new ScreenTasks(page);
  });

  test.afterEach(async ({ page }) => {
    await restoreDate(page);
  });

  test('Registering the tools', async ({ page }) => {
    await openApp(page);
    expect(await toolNames(page)).toEqual(TOOL_NAMES);
  });

  test('Creating, starting and stopping a task', async ({ page }) => {
    await openApp(page);

    // Create a task and start it
    const created = await callTool(page, 'create_task', { name: 'Write report', start: true });
    expect(created).toEqual({
      id: expect.any(String),
      name: 'Write report',
      state: 'active',
      running: true,
      totalMs: 0,
      lastSessionStart: '2024-06-04T05:00:00.000+02:00',
    });

    // Assert the task shows as running in the list, the task view and the favicon
    await expect(screenTasks.taskName()).toHaveText('Write report');
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /pause_circle/);
    await expect(screenTask.buttonStop()).toBeVisible();
    await expect(app.favicon()).toHaveAttribute('href', /\/favicon-active\.svg/);

    // Let 90 seconds pass, assert the running session counts up to now
    await advanceDate(page, 90_000);
    expect(await callTool(page, 'get_task', { taskId: created.id })).toEqual({
      ...created,
      totalMs: 90_000,
      sessions: [{ index: 0, start: '2024-06-04T05:00:00.000+02:00', end: null, durationMs: 90_000 }],
    });

    // Stop the task, assert the session is closed and the screen shows a stopped task
    const stopped = await callTool(page, 'stop_task', { taskId: created.id });
    expect(stopped).toMatchObject({ id: created.id, running: false, totalMs: 90_000 });
    await expect(screenTasks.taskStateIcon().first()).toHaveAttribute('data-mat-icon-name', /play_circle/);
    await expect(screenTask.buttonStart()).toBeVisible();
    expect(await callTool(page, 'get_task', { taskId: created.id })).toMatchObject({
      sessions: [{ index: 0, end: '2024-06-04T05:01:30.000+02:00', durationMs: 90_000 }],
    });

    // Start it again with start_task, assert the screen shows a running task
    expect(await callTool(page, 'start_task', { taskId: created.id })).toMatchObject({ running: true });
    await expect(screenTask.buttonStop()).toBeVisible();
  });

  test('Listing and reading tasks', async ({ page }) => {
    await openApp(page, SEED);

    // Assert the default list holds the active tasks, running first, then by latest session
    const active = await callTool(page, 'list_tasks');
    expect(active).toEqual({
      total: 3,
      tasks: [
        {
          id: 'run1',
          name: 'Running task',
          state: 'active',
          running: true,
          totalMs: 5.5 * HOUR,
          lastSessionStart: '2024-06-03T23:30:00.000+02:00',
        },
        {
          id: 'edge',
          name: 'Edge task',
          state: 'active',
          running: false,
          totalMs: 6 * HOUR,
          lastSessionStart: '2024-06-05T10:00:00.000+02:00',
        },
        {
          id: 'in1',
          name: 'Inside task',
          state: 'active',
          running: false,
          totalMs: 2.5 * HOUR,
          lastSessionStart: '2024-06-03T10:00:00.000+02:00',
        },
      ],
    });

    // Assert the filters
    const ids = async (args: Record<string, unknown>) =>
      (await callTool(page, 'list_tasks', args)).tasks.map((task: { id: string }) => task.id);
    expect(await ids({ state: 'all' })).toEqual(['fresh', 'run1', 'edge', 'in1', 'old1']);
    expect(await ids({ state: 'finished' })).toEqual(['fresh']);
    expect(await ids({ state: 'dropped' })).toEqual(['old1']);
    expect(await ids({ state: 'all', query: 'EDGE' })).toEqual(['edge']);
    expect(await ids({ state: 'all', runningOnly: true })).toEqual(['run1']);
    expect(await callTool(page, 'list_tasks', { state: 'all', limit: 2 })).toMatchObject({ total: 5 });
    expect(await ids({ state: 'all', limit: 2 })).toEqual(['fresh', 'run1']);

    // Assert a task with its sessions
    expect(await callTool(page, 'get_task', { taskId: 'edge' })).toEqual({
      id: 'edge',
      name: 'Edge task',
      state: 'active',
      running: false,
      totalMs: 6 * HOUR,
      lastSessionStart: '2024-06-05T10:00:00.000+02:00',
      sessions: [
        {
          index: 0,
          start: '2024-06-02T23:00:00.000+02:00',
          end: '2024-06-03T01:00:00.000+02:00',
          durationMs: 2 * HOUR,
        },
        {
          index: 1,
          start: '2024-06-03T23:00:00.000+02:00',
          end: '2024-06-04T02:00:00.000+02:00',
          durationMs: 3 * HOUR,
        },
        { index: 2, start: '2024-06-05T10:00:00.000+02:00', end: '2024-06-05T11:00:00.000+02:00', durationMs: HOUR },
      ],
    });
  });

  test('Reporting time in a range', async ({ page }) => {
    await openApp(page, SEED);

    // Bare dates are local midnight, "to" is exclusive. Sessions crossing an edge count for the part inside.
    expect(await callTool(page, 'get_time_report', { from: '2024-06-03', to: '2024-06-04' })).toEqual({
      from: '2024-06-03T00:00:00.000+02:00',
      to: '2024-06-04T00:00:00.000+02:00',
      totalMs: 5 * HOUR,
      tasks: [
        { id: 'in1', name: 'Inside task', totalMs: 2.5 * HOUR },
        { id: 'edge', name: 'Edge task', totalMs: 2 * HOUR },
        { id: 'run1', name: 'Running task', totalMs: 0.5 * HOUR },
      ],
    });

    // A range that reaches past now counts the running session up to now
    expect(
      await callTool(page, 'get_time_report', { from: '2024-06-03T00:00:00+02:00', to: '2024-06-10T00:00:00+02:00' }),
    ).toMatchObject({
      totalMs: 13 * HOUR,
      tasks: [
        { id: 'run1', totalMs: 5.5 * HOUR },
        { id: 'edge', totalMs: 5 * HOUR },
        { id: 'in1', totalMs: 2.5 * HOUR },
      ],
    });

    // A range with no sessions reports nothing
    expect(await callTool(page, 'get_time_report', { from: '2024-01-01', to: '2024-01-02' })).toMatchObject({
      totalMs: 0,
      tasks: [],
    });
  });

  test('Changing tasks and sessions', async ({ page }) => {
    await openApp(page, SEED);

    // Rename a task, assert the list shows the new name
    expect(await callTool(page, 'rename_task', { taskId: 'in1', name: 'Renamed task' })).toMatchObject({
      id: 'in1',
      name: 'Renamed task',
    });
    await expect(screenTasks.taskItemByText('Renamed task')).toHaveCount(1);

    // Drop a task, assert it leaves the active list
    expect(await callTool(page, 'set_task_state', { taskId: 'in1', state: 'dropped' })).toMatchObject({
      state: 'dropped',
    });
    expect(await callTool(page, 'list_tasks', { state: 'dropped' })).toMatchObject({ total: 2 });

    // Edit a session, assert the new times
    expect(
      await callTool(page, 'edit_session', {
        taskId: 'edge',
        sessionIndex: 2,
        start: '2024-06-05T10:00:00+02:00',
        end: '2024-06-05T10:30:00+02:00',
      }),
    ).toMatchObject({ totalMs: 5.5 * HOUR });

    // Delete a session, assert the later sessions move down
    expect(await callTool(page, 'delete_session', { taskId: 'edge', sessionIndex: 0 })).toMatchObject({
      totalMs: 3.5 * HOUR,
    });
    expect((await callTool(page, 'get_task', { taskId: 'edge' })).sessions).toMatchObject([
      { index: 0, durationMs: 3 * HOUR },
      { index: 1, durationMs: 0.5 * HOUR },
    ]);

    // Delete a task, assert it leaves the list
    expect(await callTool(page, 'delete_task', { taskId: 'edge' })).toEqual({
      deleted: { id: 'edge', name: 'Edge task' },
    });
    await expect(screenTasks.taskItemByText('Edge task')).toHaveCount(0);
    expect(await callTool(page, 'get_task', { taskId: 'edge' })).toEqual({ error: 'No task with id "edge".' });
  });

  test('Rejecting bad input', async ({ page }) => {
    await openApp(page, SEED);

    // Unknown ids, including names that exist on every object
    for (const name of ['get_task', 'start_task', 'stop_task', 'rename_task', 'set_task_state', 'delete_task']) {
      expect(await callTool(page, name, { taskId: 'nope', name: 'x', state: 'active' }), name).toEqual({
        error: 'No task with id "nope".',
      });
    }
    expect(await callTool(page, 'get_task', { taskId: 'constructor' })).toEqual({
      error: 'No task with id "constructor".',
    });
    expect(await callTool(page, 'get_task', {})).toEqual({
      error: 'Input "taskId" must be a non-empty string, got undefined.',
    });

    // State conflicts
    expect(await callTool(page, 'start_task', { taskId: 'run1' })).toEqual({
      error: 'Task "run1" is already running.',
    });
    expect(await callTool(page, 'stop_task', { taskId: 'edge' })).toEqual({ error: 'Task "edge" is not running.' });

    // Values out of range or malformed
    expect(await callTool(page, 'edit_session', { taskId: 'edge', sessionIndex: 3, start: '2024-06-05' })).toEqual({
      error: 'Task "edge" has no session 3; it has 3 sessions, numbered from 0.',
    });
    expect(
      await callTool(page, 'edit_session', {
        taskId: 'edge',
        sessionIndex: 0,
        start: '2024-06-05T10:00:00+02:00',
        end: '2024-06-05T09:00:00+02:00',
      }),
    ).toEqual({
      error: 'Input "end" (2024-06-05T09:00:00.000+02:00) must not be before "start" (2024-06-05T10:00:00.000+02:00).',
    });
    expect(await callTool(page, 'get_time_report', { from: 'yesterday', to: '2024-06-04' })).toEqual({
      error: 'Input "from" must be an ISO 8601 date or date-time, got "yesterday".',
    });
    expect(await callTool(page, 'get_time_report', { from: '2024-06-04', to: '2024-06-03' })).toMatchObject({
      error: expect.stringContaining('must be after "from"'),
    });
    expect(await callTool(page, 'set_task_state', { taskId: 'edge', state: 'paused' })).toEqual({
      error: 'Input "state" must be one of active, finished, dropped, got "paused".',
    });
    expect(await callTool(page, 'create_task', { name: '   ' })).toEqual({
      error: 'Input "name" must be a non-empty string, got "   ".',
    });
    expect(await callTool(page, 'list_tasks', { limit: 501 })).toEqual({
      error: 'Input "limit" must be an integer from 1 to 500, got 501.',
    });

    // Assert nothing changed
    expect(await callTool(page, 'list_tasks', { state: 'all' })).toMatchObject({ total: 5 });
  });
});
