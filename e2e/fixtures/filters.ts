import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { ScreenTask } from '../page-objects/screen-task';
import { ScreenTasks } from '../page-objects/screen-tasks';
import {
  getFilterParams,
  getLocationSearch,
  pressCombo,
  reloadIgnoringCache,
  seedTasks,
  session,
  type SeedTask,
} from '../utils';

test.describe('Filters', () => {
  let screenTask: ScreenTask;
  let screenTasks: ScreenTasks;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    screenTask = new ScreenTask(page);
    screenTasks = new ScreenTasks(page);
  });

  test('Name', async ({ page }) => {
    // Have some tasks with uppercase names
    await screenTasks.addTask('GAME');
    await screenTasks.addTask('FOO');
    await screenTasks.addTask('BAR');
    await screenTasks.addTask('BAZ');

    // Send "ctrl+f" keys
    await pressCombo(page, 'ctrl+f');

    await expect(page).toHaveScreenshot('filters-empty-filter.webp');
    // Fill in the "Name filter", in lowercase
    await screenTasks.filter.name.input().fill('game');

    // Assert current task is still opened
    await expect(screenTask.name()).toHaveText('BAZ');
    // Assert the displayed tasks match the filter
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await expect(screenTasks.taskName().nth(0)).toHaveText('GAME');
    await expect(page).toHaveScreenshot('filters-name-filled.webp');

    // Assert the URL ends with "?search=${value}"
    await expect.poll(async () => getLocationSearch(page)).toBe('?search=game');

    // Reload the page, assert the filter is still open and applied
    await reloadIgnoringCache(page);
    await expect(screenTasks.taskItem()).toHaveCount(1);
    await expect(screenTasks.taskName().nth(0)).toHaveText('GAME');

    // Clear the filter value with "Clear" button in the form control
    await screenTasks.filter.name.buttonClear().click();
    await expect(page).toHaveScreenshot('filters-cleared.webp');

    // Assert all tasks are displayed
    await expect(screenTasks.taskItem()).toHaveCount(4);
    await expect.poll(async () => getLocationSearch(page)).toBe('');
  });

  test('Date range: yesterday excludes running tasks started today', async ({ page }) => {
    const now = new Date();

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const yesterdayStart = new Date(startOfToday);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);

    const yesterdayEnd = new Date(yesterdayStart);
    yesterdayEnd.setHours(23, 59, 59, 999);

    const yesterdaySessionStart = new Date(yesterdayStart);
    yesterdaySessionStart.setHours(10, 0, 0, 0);

    const yesterdaySessionEnd = new Date(yesterdayStart);
    yesterdaySessionEnd.setHours(11, 0, 0, 0);

    let todayRunningStart = new Date(now.getTime() - 60 * 1000);
    if (todayRunningStart < startOfToday) {
      todayRunningStart = new Date(startOfToday.getTime() + 1000);
    }
    if (todayRunningStart > now) {
      todayRunningStart = new Date(now.getTime() - 1000);
    }

    const toSec = (ms: number) => Math.floor(ms / 1000);

    await page.localStorage.setItem(
      'tasks',
      JSON.stringify({
        version: 1,
        value: [
          {
            id: 'y1',
            name: 'YESTERDAY TASK',
            state: 0,
            sessions: [[toSec(yesterdaySessionStart.valueOf()), toSec(yesterdaySessionEnd.valueOf())]],
          },
          {
            id: 't1',
            name: 'TODAY RUNNING TASK',
            state: 0,
            sessions: [[toSec(todayRunningStart.valueOf()), null]],
          },
        ],
      }),
    );

    const from = encodeURIComponent(yesterdayStart.toISOString());
    const to = encodeURIComponent(yesterdayEnd.toISOString());

    await page.goto(`/active?from=${from}&to=${to}`);

    await expect(screenTasks.taskItemByText('TODAY RUNNING TASK')).toHaveCount(0);
    await expect(screenTasks.taskItemByText('YESTERDAY TASK')).toHaveCount(1);
  });

  test('No tasks + filters: chart is hidden', async ({ page }) => {
    await page.localStorage.setItem('tasks', JSON.stringify({ version: 1, value: [] }));

    const from = encodeURIComponent('2024-06-01T00:00:00.000Z');
    const to = encodeURIComponent('2024-06-30T23:59:59.999Z');

    await page.goto(`/all?from=${from}&to=${to}`);

    await expect(screenTasks.filter.name.input()).toBeVisible();
    await expect(screenTasks.filter.chart()).toHaveCount(0);
  });

  // Wednesday, a fixed point in time so the presets and the chart are deterministic. The tests run in UTC.
  const NOW = new Date('2026-11-18T12:00:00.000Z');

  const filterTasksByRange = <T extends { sessions: readonly (readonly [number, number | null])[] }>(
    tasks: T[],
    from: Date | null,
    to: Date | null,
  ) =>
    tasks.filter((task) =>
      task.sessions.some(
        ([start, end]) => (!from || start >= from.valueOf()) && (!to || (end ?? start) <= to.valueOf()),
      ),
    );

  test('Duration', async ({ page }) => {
    // Have some tasks with varying duration, the most recently used one is the shortest
    await page.clock.install({ time: NOW });
    await seedTasks(page, [
      { name: 'Two hours', sessions: [session('2026-11-10T10:00:00Z', '2026-11-10T12:00:00Z')] },
      { name: 'One hour', sessions: [session('2026-11-11T10:00:00Z', '2026-11-11T11:00:00Z')] },
      { name: 'Three hours', sessions: [session('2026-11-12T10:00:00Z', '2026-11-12T13:00:00Z')] },
      { name: 'Half an hour', sessions: [session('2026-11-13T10:00:00Z', '2026-11-13T10:30:00Z')] },
    ]);
    await page.goto('/all');

    // Send "ctrl+f" keys
    await pressCombo(page, 'ctrl+f');
    // Assert the duration sort value is not set
    await expect(screenTasks.filter.duration.select()).toHaveClass(/mat-mdc-select-empty/);
    await expect(screenTasks.taskName()).toHaveText(['Half an hour', 'Three hours', 'One hour', 'Two hours']);

    // Choose the "Longest first" sort
    await screenTasks.filter.duration.choose('Longest first');
    // Assert the tasks are sorted accordingly
    await expect(screenTasks.taskName()).toHaveText(['Three hours', 'Two hours', 'One hour', 'Half an hour']);
    // Assert the URL ends with "?durationSort=longestFirst"
    await expect.poll(async () => getLocationSearch(page)).toBe('?durationSort=longestFirst');

    // Choose the "Shortest first" sort
    await screenTasks.filter.duration.choose('Shortest first');
    await expect(screenTasks.taskName()).toHaveText(['Half an hour', 'One hour', 'Two hours', 'Three hours']);
    await expect.poll(async () => getLocationSearch(page)).toBe('?durationSort=shortestFirst');

    // Reload the page, assert the sort is still applied
    await reloadIgnoringCache(page);
    await expect(screenTasks.filter.duration.select()).toContainText('Shortest first');
    await expect(screenTasks.taskName()).toHaveText(['Half an hour', 'One hour', 'Two hours', 'Three hours']);

    // Choose the "Default" sort
    await screenTasks.filter.duration.choose('Default');
    await expect(screenTasks.taskName()).toHaveText(['Half an hour', 'Three hours', 'One hour', 'Two hours']);
    // Assert the URL contains no search query
    await expect.poll(async () => getLocationSearch(page)).toBe('');
  });

  test.describe('Date range', () => {
    // Task A has two sessions, the filter value lands between them or inside one of the sessions
    const tasks: SeedTask[] = [
      { name: 'C', sessions: [session('2026-11-13T14:00:00Z', '2026-11-13T15:00:00Z')] },
      {
        name: 'A',
        sessions: [
          session('2026-11-10T10:00:00Z', '2026-11-10T11:00:00Z'),
          session('2026-11-12T10:00:00Z', '2026-11-12T11:30:00Z'),
        ],
      },
      { name: 'B', sessions: [session('2026-11-11T09:00:00Z', '2026-11-11T10:00:00Z')] },
    ];

    test.beforeEach(async ({ page }) => {
      await page.clock.install({ time: NOW });
      await seedTasks(page, tasks);
      await page.goto('/all');
      await screenTasks.buttonToggleFilter().click();
      await expect(screenTasks.filter.panel()).toBeVisible();
      await expect(screenTasks.taskName()).toHaveText(['C', 'A', 'B']);
    });

    test('From', async ({ page }) => {
      await expect(screenTasks.total()).toHaveText('4h30m');

      // Choose a "From" date in the filter so it's in the middle of a task session
      await screenTasks.filter.from.input().fill('2026-11-11T09:30');

      // Assert the displayed tasks and sessions match the filter
      await expect(screenTasks.taskName()).toHaveText(['C', 'A']);
      await expect(screenTasks.taskDuration(screenTasks.taskItemByText('A'))).toHaveText('1h30m');
      await expect(screenTasks.taskDuration(screenTasks.taskItemByText('C'))).toHaveText('1h00m');
      // Assert totals are reduced in the task list and current task details
      await expect(screenTasks.total()).toHaveText('2h30m');
      await screenTasks.taskItemByText('A').getByTestId('screen-tasks__task-name').click();
      await expect(screenTask.sessionRow()).toHaveCount(1);
      await expect(screenTask.taskDuration()).toHaveText('1h30m');

      // Assert the URL has the "from" filter
      await expect.poll(async () => getFilterParams(page)).toEqual({ from: '2026-11-11T09:30:00.000Z' });

      // Reload the app, ensure the filter is still applied
      await reloadIgnoringCache(page);
      await expect(screenTasks.filter.from.input()).toHaveValue('2026-11-11T09:30');
      await expect(screenTasks.taskName()).toHaveText(['C', 'A']);
      await expect(screenTasks.total()).toHaveText('2h30m');

      // Clear the "From" value, assert all tasks are displayed
      await screenTasks.filter.from.buttonClear().click();
      await expect(screenTasks.taskName()).toHaveText(['C', 'A', 'B']);
      await expect(screenTasks.total()).toHaveText('4h30m');
      await expect.poll(async () => getLocationSearch(page)).toBe('');

      // For a task session, execute the "Skip everything before" action
      await screenTasks.taskItemByText('A').getByTestId('screen-tasks__task-name').click();
      // Sessions are listed latest first
      await screenTask.buttonSessionAction().nth(0).click();
      await screenTask.menuSession.buttonSkipBefore().click();
      // Assert the displayed tasks and sessions match the filter
      await expect(screenTasks.taskName()).toHaveText(['C', 'A']);
      await expect(screenTask.sessionRow()).toHaveCount(1);
      // Assert the "From" input is filled with session start value
      await expect(screenTasks.filter.from.input()).toHaveValue('2026-11-12T10:00');
      await expect.poll(async () => getFilterParams(page)).toEqual({ from: '2026-11-12T10:00:00.000Z' });
    });

    test('To', async ({ page }) => {
      await expect(screenTasks.total()).toHaveText('4h30m');

      // Choose a "To" date in the filter so it's in the middle of a task session
      await screenTasks.filter.to.input().fill('2026-11-12T10:45');

      // Assert the displayed tasks and sessions match the filter
      await expect(screenTasks.taskName()).toHaveText(['B', 'A']);
      await expect(screenTasks.taskDuration(screenTasks.taskItemByText('A'))).toHaveText('1h00m');
      await expect(screenTasks.taskDuration(screenTasks.taskItemByText('B'))).toHaveText('1h00m');
      // Assert totals are reduced in the task list and current task details
      await expect(screenTasks.total()).toHaveText('2h00m');
      await screenTasks.taskItemByText('A').getByTestId('screen-tasks__task-name').click();
      await expect(screenTask.sessionRow()).toHaveCount(1);
      await expect(screenTask.taskDuration()).toHaveText('1h00m');

      // Assert the URL has the "to" filter
      await expect.poll(async () => getFilterParams(page)).toEqual({ to: '2026-11-12T10:45:00.000Z' });

      // Reload the app, ensure the filter is still applied
      await reloadIgnoringCache(page);
      await expect(screenTasks.filter.to.input()).toHaveValue('2026-11-12T10:45');
      await expect(screenTasks.taskName()).toHaveText(['B', 'A']);
      await expect(screenTasks.total()).toHaveText('2h00m');

      // Clear the "To" value, assert all tasks are displayed
      await screenTasks.filter.to.buttonClear().click();
      await expect(screenTasks.taskName()).toHaveText(['C', 'A', 'B']);
      await expect(screenTasks.total()).toHaveText('4h30m');
      await expect.poll(async () => getLocationSearch(page)).toBe('');

      // For a task session, execute the "Skip everything after" action
      await screenTasks.taskItemByText('A').getByTestId('screen-tasks__task-name').click();
      // Sessions are listed latest first, take the earlier one
      await screenTask.buttonSessionAction().nth(1).click();
      await screenTask.menuSession.buttonSkipAfter().click();
      // Assert the displayed tasks and sessions match the filter
      await expect(screenTasks.taskName()).toHaveText(['A']);
      await expect(screenTask.sessionRow()).toHaveCount(1);
      // Assert the "To" input is filled with session end value
      await expect(screenTasks.filter.to.input()).toHaveValue('2026-11-10T11:00');
      await expect.poll(async () => getFilterParams(page)).toEqual({ to: '2026-11-10T11:00:00.000Z' });
    });
  });

  test('Presets', async ({ page }) => {
    // Ensure there are tasks to match all time presets, "now" is Wednesday 2026-11-18
    const tasks: SeedTask[] = [
      { name: 'Today', sessions: [session('2026-11-18T09:00:00Z', '2026-11-18T10:00:00Z')] },
      { name: 'Yesterday', sessions: [session('2026-11-17T10:00:00Z', '2026-11-17T11:00:00Z')] },
      { name: 'Monday', sessions: [session('2026-11-16T08:00:00Z', '2026-11-16T09:00:00Z')] },
      { name: 'Previous week', sessions: [session('2026-11-12T10:00:00Z', '2026-11-12T11:00:00Z')] },
      { name: 'Early this month', sessions: [session('2026-11-03T10:00:00Z', '2026-11-03T11:00:00Z')] },
      { name: 'Previous month', sessions: [session('2026-10-20T10:00:00Z', '2026-10-20T11:00:00Z')] },
      { name: 'Early this year', sessions: [session('2026-03-05T10:00:00Z', '2026-03-05T11:00:00Z')] },
      { name: 'Previous year', sessions: [session('2025-06-15T10:00:00Z', '2025-06-15T11:00:00Z')] },
    ];
    await page.clock.install({ time: NOW });
    await seedTasks(page, tasks);
    await page.goto('/all');
    await screenTasks.buttonToggleFilter().click();
    await expect(screenTasks.taskName()).toHaveCount(8);

    // The chart echoes the range back with whole seconds, so "To" settles on 23:59:59 instead of 23:59:59.999
    // Apply each time preset, assert matching tasks/sessions are displayed and that "from", "to" inputs and query params are correct
    const presets = [
      {
        name: 'Today',
        from: '2026-11-18T00:00:00.000',
        // The chart treats the end of the last day as the end of the data and clears "To"
        to: null,
        tasks: ['Today'],
      },
      {
        name: 'Yesterday',
        from: '2026-11-17T00:00:00.000',
        to: '2026-11-17T23:59:59',
        tasks: ['Yesterday'],
      },
      {
        name: 'This week',
        from: '2026-11-16T00:00:00.000',
        to: '2026-11-22T23:59:59',
        tasks: ['Today', 'Yesterday', 'Monday'],
      },
      {
        name: 'Previous week',
        from: '2026-11-09T00:00:00.000',
        to: '2026-11-15T23:59:59',
        tasks: ['Previous week'],
      },
      {
        name: 'This month',
        from: '2026-11-01T00:00:00.000',
        to: '2026-11-30T23:59:59',
        tasks: ['Today', 'Yesterday', 'Monday', 'Previous week', 'Early this month'],
      },
      {
        name: 'Previous month',
        from: '2026-10-01T00:00:00.000',
        to: '2026-10-31T23:59:59',
        tasks: ['Previous month'],
      },
      {
        name: 'This year',
        from: '2026-01-01T00:00:00.000',
        to: '2026-12-31T23:59:59',
        tasks: [
          'Today',
          'Yesterday',
          'Monday',
          'Previous week',
          'Early this month',
          'Previous month',
          'Early this year',
        ],
      },
      {
        name: 'Previous year',
        from: '2025-01-01T00:00:00.000',
        to: '2025-12-31T23:59:59',
        tasks: ['Previous year'],
      },
    ];
    for (const preset of presets) {
      await screenTasks.filter.presets.trigger().click();
      await screenTasks.filter.presets.item(preset.name).click();

      await expect(screenTasks.taskName(), preset.name).toHaveText(preset.tasks);
      await expect(screenTasks.filter.from.input(), preset.name).toHaveValue(
        preset.from.replace(/(T00:00):00\.000$/, '$1'),
      );
      await expect(screenTasks.filter.to.input(), preset.name).toHaveValue(preset.to ?? '');
      await expect
        .poll(async () => getFilterParams(page), { message: preset.name })
        .toEqual(preset.to ? { from: `${preset.from}Z`, to: `${preset.to}.000Z` } : { from: `${preset.from}Z` });
    }

    // Apply the "Any time" preset, assert everything is displayed and the filter is empty
    await screenTasks.filter.presets.trigger().click();
    await screenTasks.filter.presets.item('Any time').click();
    await expect(screenTasks.taskName()).toHaveCount(8);
    await expect(screenTasks.filter.from.input()).toHaveValue('');
    await expect(screenTasks.filter.to.input()).toHaveValue('');
    await expect.poll(async () => getLocationSearch(page)).toBe('');
  });

  test.describe('Barchart', () => {
    // One task per day, 1st to 12th of November
    const days = Array.from({ length: 12 }, (_, i) => {
      const day = String(i + 1).padStart(2, '0');
      return {
        name: `Day ${day}`,
        sessions: [session(`2026-11-${day}T10:00:00Z`, `2026-11-${day}T11:00:00Z`)] as const,
      };
    });
    // The list shows the most recent task first
    const newestFirst = [...days].reverse();
    const expectedNames = async (page: Page) => {
      const { from, to } = await getFilterParams(page);
      return filterTasksByRange(newestFirst, from ? new Date(from) : null, to ? new Date(to) : null).map((t) => t.name);
    };

    test.beforeEach(async ({ page }) => {
      await page.clock.install({ time: NOW });
      await seedTasks(page, days);
      await page.goto('/all');
      // Have some tasks, open the filter
      await screenTasks.buttonToggleFilter().click();
      await expect(screenTasks.filter.chartOverlay()).toBeVisible();
    });

    const expectLegendDayAt = async (at: number, day: string) => {
      // The legend only updates on pointer moves, so move again on every attempt
      await expect
        .poll(async () => {
          await screenTasks.hoverChart(at);
          return screenTasks.filter.chartLegendDay().textContent();
        })
        .toBe(day);
    };

    test('Range', async ({ page }) => {
      // Assert the barchart is in the first-now range
      await expectLegendDayAt(0, '2026-11-01');
      await expectLegendDayAt(1, '2026-11-18');

      // Fill in the "From" filter, assert the bar chart range becomes from-now
      await screenTasks.filter.from.input().fill('2026-11-10T00:00');
      await expectLegendDayAt(0, '2026-11-10');
      await expectLegendDayAt(1, '2026-11-18');

      // Double click the barchart, assert the "From" is reset and the barchart is in the first-now range
      await screenTasks.filter.chartOverlay().dblclick();
      await expect(screenTasks.filter.from.input()).toHaveValue('');
      await expectLegendDayAt(0, '2026-11-01');
      await expectLegendDayAt(1, '2026-11-18');

      // Fill in the "To" filter, assert the bar chart range becomes first-to
      await screenTasks.filter.to.input().fill('2026-11-08T23:59');
      await expectLegendDayAt(0, '2026-11-01');
      await expectLegendDayAt(1, '2026-11-08');

      // Double click the barchart, assert the "To" is reset and the barchart is in the first-now range
      await screenTasks.filter.chartOverlay().dblclick();
      await expect(screenTasks.filter.to.input()).toHaveValue('');
      await expectLegendDayAt(0, '2026-11-01');
      await expectLegendDayAt(1, '2026-11-18');
    });

    test('Selection', async ({ page }) => {
      // In barchart, select a middle-now range
      await screenTasks.dragChart(0.5, 1);
      // Assert "From" has a value and "To" does not
      await expect(screenTasks.filter.from.input()).not.toHaveValue('');
      await expect(screenTasks.filter.to.input()).toHaveValue('');
      // Assert the URL contains the "from" filter only
      await expect.poll(async () => Object.keys(await getFilterParams(page))).toEqual(['from']);
      // Assert the displayed tasks and sessions match the filter
      const fromOnly = await expectedNames(page);
      expect(fromOnly.length).toBeGreaterThan(0);
      expect(fromOnly.length).toBeLessThan(days.length);
      await expect(screenTasks.taskName()).toHaveText(fromOnly);

      // Reset the barchart
      await screenTasks.filter.chartOverlay().dblclick();
      await expect(screenTasks.filter.from.input()).toHaveValue('');
      await expect(screenTasks.taskName()).toHaveCount(days.length);

      // In barchart, select a first-middle range
      // Drag past the left edge of the plot so the range starts exactly at the first day
      await screenTasks.dragChart(0.5, -0.05);
      // Assert "From" has no value and "To" does
      await expect(screenTasks.filter.from.input()).toHaveValue('');
      await expect(screenTasks.filter.to.input()).not.toHaveValue('');
      // Assert the URL contains the "to" filter only
      await expect.poll(async () => Object.keys(await getFilterParams(page))).toEqual(['to']);
      const toOnly = await expectedNames(page);
      expect(toOnly.length).toBeGreaterThan(0);
      expect(toOnly.length).toBeLessThan(days.length);
      await expect(screenTasks.taskName()).toHaveText(toOnly);

      // Reset the barchart
      await screenTasks.filter.chartOverlay().dblclick();
      await expect(screenTasks.filter.to.input()).toHaveValue('');
      await expect(screenTasks.taskName()).toHaveCount(days.length);

      // In barchart, select a range between first and now
      await screenTasks.dragChart(0.25, 0.75);
      // Assert "From" and "To" have values
      await expect(screenTasks.filter.from.input()).not.toHaveValue('');
      await expect(screenTasks.filter.to.input()).not.toHaveValue('');
      // Assert the URL contains the "from" and "to" filters
      await expect.poll(async () => Object.keys(await getFilterParams(page)).sort()).toEqual(['from', 'to']);
      const both = await expectedNames(page);
      expect(both.length).toBeGreaterThan(0);
      expect(both.length).toBeLessThan(toOnly.length);
      await expect(screenTasks.taskName()).toHaveText(both);

      // Apply the "Any time" preset, assert the barchart was reset
      await screenTasks.filter.presets.trigger().click();
      await screenTasks.filter.presets.item('Any time').click();
      await expect(screenTasks.taskName()).toHaveCount(days.length);
      await expectLegendDayAt(0, '2026-11-01');
      await expectLegendDayAt(1, '2026-11-18');
    });
  });

  test('General', async ({ page }) => {
    await page.clock.install({ time: NOW });
    await seedTasks(page, [
      { name: 'One', sessions: [session('2026-11-10T10:00:00Z', '2026-11-10T11:00:00Z')] },
      { name: 'Two', sessions: [session('2026-11-11T10:00:00Z', '2026-11-11T11:00:00Z')] },
    ]);
    await page.goto('/all');

    // Open the filter
    await screenTasks.buttonToggleFilter().click();
    await expect(screenTasks.filter.panel()).toBeVisible();
    // Reload the page, assert the filter is no longer visible
    await reloadIgnoringCache(page);
    await expect(screenTasks.taskItem()).toHaveCount(2);
    await expect(screenTasks.filter.panel()).toHaveCount(0);

    // Open the filter, fill in all the inputs so no tasks match
    await screenTasks.buttonToggleFilter().click();
    await screenTasks.filter.name.input().fill('nothing');
    await screenTasks.filter.duration.choose('Longest first');
    await screenTasks.filter.from.input().fill('2026-11-01T00:00');
    await screenTasks.filter.to.input().fill('2026-11-30T00:00');
    // Assert the empty state is visible
    await expect(screenTasks.emptyStateNothingFound()).toBeVisible();
    await expect(screenTasks.taskItem()).toHaveCount(0);
    // Assert the URL contains all filters
    await expect
      .poll(async () => getFilterParams(page))
      .toEqual({
        search: 'nothing',
        durationSort: 'longestFirst',
        from: '2026-11-01T00:00:00.000Z',
        to: '2026-11-30T00:00:00.000Z',
      });

    // Click "Reset filter" in the empty state
    await screenTasks.buttonResetFilter().click();
    // Assert all tasks are displayed and filter panel is closed
    await expect(screenTasks.taskItem()).toHaveCount(2);
    await expect(screenTasks.filter.panel()).toHaveCount(0);
    await expect.poll(async () => getLocationSearch(page)).toBe('');

    // Open the filter panel, enter any filter
    await screenTasks.buttonToggleFilter().click();
    await screenTasks.filter.name.input().fill('One');
    await expect(screenTasks.taskItem()).toHaveCount(1);
    // Close the filter with "Toggle filter" button
    await screenTasks.buttonToggleFilter().click();
    // Assert the filter is closed and reset
    await expect(screenTasks.filter.panel()).toHaveCount(0);
    await expect(screenTasks.taskItem()).toHaveCount(2);
    await expect.poll(async () => getLocationSearch(page)).toBe('');
  });
});
