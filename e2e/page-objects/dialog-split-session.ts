import type { Locator, Page } from '@playwright/test';

export class DialogSplitSession {
  public constructor(private readonly page: Page) {}

  private dialog(): Locator {
    return this.page.locator('mat-dialog-container:visible').last();
  }

  public matTable(): Locator {
    return this.dialog().locator('table[mat-table]');
  }

  public legacyNonMatTable(): Locator {
    return this.dialog().locator('table.mat-mdc-table:not([mat-table])');
  }

  public sessionStart(): Locator {
    return this.dialog().getByTestId('dialog-split-session__session-start');
  }

  public sessionEnd(): Locator {
    return this.dialog().getByTestId('dialog-split-session__session-end');
  }

  public sessionDuration(): Locator {
    return this.dialog().getByTestId('dialog-split-session__session-duration');
  }

  public sliderInput(): Locator {
    return this.dialog().locator('.mdc-slider__track');
  }

  public sliderTrack(): Locator {
    return this.dialog().locator('.mdc-slider__track');
  }

  public sliderThumb(): Locator {
    return this.dialog().locator('mat-slider-visual-thumb');
  }

  public buttonSubmit(): Locator {
    return this.dialog().getByTestId('dialog-split-session__button-submit');
  }

  public async setSliderValue(ratio: number): Promise<void> {
    const sliderRangeInput = this.dialog().locator('input[type="range"]').first();
    if (await sliderRangeInput.count()) {
      const clampedRatio = Math.max(0, Math.min(ratio, 1));
      await sliderRangeInput.evaluate((el, nextRatio) => {
        const input = el as HTMLInputElement;
        const min = Number(input.min || '0');
        const max = Number(input.max || '100');
        const nextValue = min + (max - min) * nextRatio;
        input.value = `${nextValue}`;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, clampedRatio);
      return;
    }

    const slider = this.dialog().locator('mat-slider');
    const sliderBox = await slider.boundingBox();
    if (!sliderBox) {
      throw new Error('Unable to measure split-session slider bounds');
    }

    const clampedRatio = Math.max(0, Math.min(ratio, 1));
    const x = Math.max(
      1,
      Math.min(Math.floor(sliderBox.width * clampedRatio), Math.max(1, Math.floor(sliderBox.width) - 1)),
    );
    const y = Math.max(1, Math.floor(sliderBox.height / 2));
    await slider.click({ position: { x, y } });
  }
}
