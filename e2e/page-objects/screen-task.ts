import type { Locator, Page } from '@playwright/test';

export class ScreenTask {
  public constructor(private readonly page: Page) {}

  public name(): Locator {
    return this.page.getByTestId('screen-task__name');
  }

  public stateIcon(): Locator {
    return this.page.getByTestId('screen-task__state-icon');
  }

  public matTable(): Locator {
    return this.page.locator('screen-task table[mat-table]');
  }

  public legacyStickyHackTable(): Locator {
    return this.page.locator('screen-task table[sticky]');
  }

  public viewport(): Locator {
    return this.page.locator('screen-task cdk-virtual-scroll-viewport');
  }

  public matHeaderRow(): Locator {
    return this.page.locator('screen-task tr[mat-header-row]');
  }

  public matFooterRow(): Locator {
    return this.page.locator('screen-task tr[mat-footer-row]');
  }

  public matHeaderStartCell(): Locator {
    return this.page.locator('screen-task th[mat-header-cell].header-start');
  }

  public matFooterStartCell(): Locator {
    return this.page.locator('screen-task td[mat-footer-cell].header-start');
  }

  public buttonTaskAction(): Locator {
    return this.page.locator('screen-task').getByTestId('button-task-actions__trigger');
  }

  public buttonStart(): Locator {
    return this.page.getByTestId('screen-task__button-start');
  }

  public buttonStop(): Locator {
    return this.page.getByTestId('screen-task__button-stop');
  }

  public sessionRow(): Locator {
    return this.page.getByTestId('screen-task__session-row');
  }

  public sessionStart(): Locator {
    return this.page.getByTestId('screen-task__session-start');
  }

  public sessionEnd(): Locator {
    return this.page.getByTestId('screen-task__session-end');
  }

  public sessionDuration(): Locator {
    return this.page.getByTestId('screen-task__session-duration');
  }

  public screen(): Locator {
    return this.page.locator('screen-task');
  }

  public buttonSessionAction(): Locator {
    return this.page.getByTestId('screen-task__button-session-action');
  }

  public taskDuration(): Locator {
    return this.page.getByTestId('screen-task__task-duration');
  }

  public readonly menuSession = {
    buttonEdit: (): Locator => this.page.getByTestId('menu-session__button-edit'),
    buttonDelete: (): Locator => this.page.getByTestId('menu-session__button-delete'),
    buttonSkipAfter: (): Locator => this.page.getByTestId('menu-session__button-skip-after'),
    buttonSkipBefore: (): Locator => this.page.getByTestId('menu-session__button-skip-before'),
    buttonSplit: (): Locator => this.page.getByTestId('menu-session__button-split'),
  };
}
