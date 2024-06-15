import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, effect, inject, input } from '@angular/core';
import { isNumber } from '@app/utils/assert';

@Directive({
  selector: '[scrollToIndex]',
  standalone: true,
})
export class ScrollToIndexDirective {
  private viewport = inject(CdkVirtualScrollViewport);

  public itemSize = input<number>();
  public scrollToIndex = input<number | undefined>();

  private previousIndex?: number;
  constructor() {
    effect(() => {
      const index = this.scrollToIndex();
      const itemSize = this.itemSize();
      if (!isNumber(index) || index === -1 || !itemSize) {
        this.previousIndex = index;
        return;
      }
      const offsetTop = index * itemSize;
      const behavior: ScrollBehavior | undefined = !isNumber(this.previousIndex) ? 'smooth' : undefined;
      setTimeout(() => {
        this.viewport.scrollToOffset(offsetTop - this.viewport.getViewportSize() / 2, behavior);
        this.previousIndex = index;
      });
    });
  }
}
