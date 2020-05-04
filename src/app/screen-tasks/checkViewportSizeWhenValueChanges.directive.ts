import { Directive, Input } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Directive({
  selector: '[checkViewportSizeWhenValueChanges]',
})
export class CheckViewportSizeWhenValueChangesDirective {
  constructor(private viewport: CdkVirtualScrollViewport) {}
  @Input()
  set checkViewportSizeWhenValueChanges(val: any) {
    setTimeout(() => this.viewport.checkViewportSize());
  }
}
