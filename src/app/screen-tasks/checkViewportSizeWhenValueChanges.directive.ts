import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[checkViewportSizeWhenValueChanges]',
  standalone: true,
})
export class CheckViewportSizeWhenValueChangesDirective {
  private viewport = inject(CdkVirtualScrollViewport);
  public checkViewportSizeWhenValueChanges = input<any>();
  constructor() {
    effect(() => {
      this.checkViewportSizeWhenValueChanges();
      this.viewport.checkViewportSize();
    });
  }
}
