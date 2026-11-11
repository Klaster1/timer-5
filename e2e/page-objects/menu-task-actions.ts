import type { Locator, Page } from '@playwright/test';

export class MenuTaskActions {
  public constructor(private readonly page: Page) {}

  public selectorState(): Locator {
    return this.page.getByTestId('button-task-actions__selector-state');
  }

  public async openState(trigger: Locator): Promise<void> {
    await trigger.click();
    // The menu scales in for 120 ms and accepts pointer events before Material marks it as animating.
    // Hovering "State" in that gap opens the submenu beside the scaled item, 12 to 15 px too far left.
    await this.page.waitForFunction(() => {
      const panels = document.querySelectorAll('.mat-mdc-menu-panel');
      return panels.length === 1 && panels[0]!.getAnimations().length === 0;
    });
    await this.selectorState().click();
  }

  public optionActive(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-active');
  }

  public optionFinished(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-finished');
  }

  public optionDropped(): Locator {
    return this.page.getByTestId('button-task-actions__state-option-dropped');
  }

  public buttonRename(): Locator {
    return this.page.getByTestId('button-task-actions__button-rename');
  }

  public buttonDelete(): Locator {
    return this.page.getByTestId('button-task-actions__button-delete');
  }
}
