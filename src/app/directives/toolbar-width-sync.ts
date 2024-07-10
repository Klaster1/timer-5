import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: 'mat-toolbar',
  standalone: true,
})
export class ToolbarWidthSyncDirective {
  public syncWidthTo = input<CdkVirtualScrollViewport>();
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);
  constructor() {
    afterNextRender({
      read: () => {
        const viewport = this.syncWidthTo();
        if (!viewport) return;
        const observer = new ResizeObserver((entries) => {
          const viewportParentWidth = entries.at(0)?.target.parentElement?.clientWidth;
          const viewportWidth = entries.at(0)?.contentRect.width;
          if (!viewportParentWidth || !viewportWidth) return;
          const scrollbarWidth = viewportParentWidth - viewportWidth;
          this.elementRef.nativeElement.style.paddingRight = `${16 + scrollbarWidth}px`;
        });
        observer.observe(viewport.getElementRef().nativeElement);
        this.destroyRef.onDestroy(() => observer.disconnect());
      },
    });
  }
}
