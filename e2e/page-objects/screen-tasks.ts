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

  public readonly filter = {
    chart: () => this.page.locator('tasks-filter timeline-chart-uplot'),
    name: {
      input: () => this.page.locator('tasks-filter .name input'),
      buttonClear: () => this.page.locator('tasks-filter .name button-reset-input-control button'),
    },
  };
}
