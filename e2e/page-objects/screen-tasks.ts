import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { pressCombo } from '../utils';
import { DialogCreateTask } from './dialog-create-task';

export class ScreenTasks {
  public constructor(private readonly page: Page) {}

  public addTaskButton() {
    return this.page.getByTestId('button-add-task');
  }

  public emptyStateAddTaskButton() {
    return this.page.getByTestId('screen-tasks__button-add-task-empty-state');
  }

  public taskItem() {
    return this.page.getByTestId('screen-tasks__task-item');
  }

  public taskItemByText(text: string) {
    return this.page.getByTestId('screen-tasks__task-item').filter({ hasText: text });
  }

  public taskStateIcon() {
    return this.page.getByTestId('screen-tasks__task-state-icon');
  }

  public taskName() {
    return this.page.getByTestId('screen-tasks__task-name');
  }

  public buttonTaskAction() {
    return this.page.locator('screen-tasks').getByTestId('button-task-actions__trigger');
  }

  public total() {
    return this.page.getByTestId('screen-tasks__total');
  }

  public taskDuration(task: Locator): Locator {
    return task.getByTestId('screen-tasks__task-duration');
  }

  public async addTask(name: string): Promise<void> {
    const dialogCreateTask = new DialogCreateTask(this.page);
    await pressCombo(this.page, 'a');
    await dialogCreateTask.input().fill(name);
    await pressCombo(this.page, 'enter');
    await expect(this.page.getByTestId('screen-tasks__task-name').filter({ hasText: name })).toBeVisible();
  }

  public viewport(): Locator {
    return this.page.locator('screen-tasks section.tasks cdk-virtual-scroll-viewport');
  }

  public buttonToggleFilter(): Locator {
    return this.page.getByTestId('screen-tasks__button-toggle-filter');
  }

  public emptyStateNothingFound(): Locator {
    return this.page.locator('empty-state').filter({ hasText: 'Nothing found' });
  }

  public buttonResetFilter(): Locator {
    return this.page.getByRole('button', { name: 'Reset filter' });
  }

  /** Unique state icon names of the rendered task rows. */
  public async renderedStateIcons(): Promise<string[]> {
    const names = await this.taskStateIcon().evaluateAll((icons) =>
      icons.map((icon) => icon.getAttribute('data-mat-icon-name') ?? ''),
    );
    return [...new Set(names)];
  }

  /** The last task row that is completely inside the list viewport. */
  public async lastFullyVisibleTask(): Promise<Locator> {
    const index = await this.viewport().evaluate((viewport) => {
      const viewportRect = viewport.getBoundingClientRect();
      const rows = [...viewport.querySelectorAll('[data-e2e="screen-tasks__task-item"]')];
      return rows.reduce((last, row, i) => {
        const rect = row.getBoundingClientRect();
        return rect.top >= viewportRect.top && rect.bottom <= viewportRect.bottom ? i : last;
      }, -1);
    });
    return this.taskItem().nth(index);
  }

  /** How far the vertical center of the task row is from the vertical center of the list viewport, in pixels. */
  public async distanceFromViewportCenter(task: Locator): Promise<number> {
    const [taskBox, viewportBox] = await Promise.all([task.boundingBox(), this.viewport().boundingBox()]);
    if (!taskBox || !viewportBox) return Number.POSITIVE_INFINITY;
    return Math.abs(taskBox.y + taskBox.height / 2 - (viewportBox.y + viewportBox.height / 2));
  }

  public readonly filter = {
    panel: () => this.page.locator('tasks-filter'),
    chart: () => this.page.locator('tasks-filter timeline-chart-uplot'),
    chartOverlay: () => this.page.locator('tasks-filter .u-over'),
    chartLegendDay: () => this.page.locator('tasks-filter .u-legend .u-value').first(),
    name: {
      input: () => this.page.locator('tasks-filter .name input'),
      buttonClear: () => this.page.locator('tasks-filter .name button-reset-input-control button'),
    },
    duration: {
      select: () => this.page.locator('tasks-filter .duration mat-select'),
      option: (name: string) => this.page.getByRole('option', { name, exact: true }),
      choose: async (name: string) => {
        await this.filter.duration.select().click();
        await this.filter.duration.option(name).click();
        // Reopening the select while its panel still animates out ignores the click
        await expect(this.filter.duration.option(name)).toBeHidden();
      },
    },
    from: {
      input: () => this.page.locator('tasks-filter .from input'),
      buttonClear: () => this.page.locator('tasks-filter .from button-reset-input-control button'),
    },
    to: {
      input: () => this.page.locator('tasks-filter .to input'),
      buttonClear: () => this.page.locator('tasks-filter .to button-reset-input-control button'),
    },
    presets: {
      trigger: () => this.page.locator('tasks-filter .dates-menu'),
      item: (name: string) => this.page.getByRole('menuitem', { name, exact: true }),
    },
  };

  /** Drags over the chart from one horizontal position to another, as fractions of the plot width. */
  public async dragChart(from: number, to: number): Promise<void> {
    const box = await this.filter.chartOverlay().boundingBox();
    if (!box) throw new Error('The chart is not visible');
    const y = box.y + box.height / 2;
    await this.page.mouse.move(box.x + box.width * from, y);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + box.width * to, y, { steps: 10 });
    await this.page.mouse.up();
  }

  /** Moves the pointer over the chart at a fraction of the plot width, so the legend shows the day under it. */
  public async hoverChart(at: number): Promise<void> {
    const box = await this.filter.chartOverlay().boundingBox();
    if (!box) throw new Error('The chart is not visible');
    await this.page.mouse.move(box.x + Math.min(box.width * at, box.width - 1), box.y + box.height / 2);
  }
}
