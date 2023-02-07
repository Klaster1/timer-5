import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, Input } from '@angular/core';
import { isNumber } from '@app/utils/assert';

@Directive({
  selector: '[scrollToIndex]',
  standalone: true,
})
export class ScrollToIndexDirective {
  @Input() itemSize?: number;
  private previousIndex?: number;
  constructor(private viewport: CdkVirtualScrollViewport) {}
  @Input()
  set scrollToIndex(index: number | undefined) {
    if (!isNumber(index) || index === -1 || !this.itemSize) {
      this.previousIndex = index;
      return;
    }
    const offsetTop = index * this.itemSize;
    const behavior: ScrollBehavior | undefined = !isNumber(this.previousIndex) ? 'smooth' : undefined;
    setTimeout(() => {
      this.viewport.scrollToOffset(offsetTop - this.viewport.getViewportSize() / 2, behavior);
      this.previousIndex = index;
    });
  }
}
