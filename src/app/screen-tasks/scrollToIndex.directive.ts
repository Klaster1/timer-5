import { Directive, Input, ElementRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Directive({
  selector: '[scrollToIndex]',
})
export class ScrollToIndexDirective {
  constructor(private viewport: CdkVirtualScrollViewport) {}
  private previousIndex?: number;
  @Input()
  itemSize?: number;
  @Input()
  set scrollToIndex(index: number | undefined) {
    if (typeof index !== 'number' || index === -1 || !this.itemSize) {
      this.previousIndex = index;
      return;
    }
    const offsetTop = index * this.itemSize;
    const behavior: ScrollBehavior | undefined = typeof this.previousIndex === 'number' ? 'smooth' : undefined;
    setTimeout(() => {
      this.viewport.scrollToOffset(offsetTop - this.viewport.getViewportSize() / 2, behavior);
      this.previousIndex = index;
    });
  }
}
