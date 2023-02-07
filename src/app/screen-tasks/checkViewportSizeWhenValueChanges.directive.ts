import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[checkViewportSizeWhenValueChanges]',
  standalone: true,
})
export class CheckViewportSizeWhenValueChangesDirective {
  constructor(private viewport: CdkVirtualScrollViewport) {}
  @Input()
  set checkViewportSizeWhenValueChanges(val: any) {
    setTimeout(() => this.viewport.checkViewportSize());
  }
}
