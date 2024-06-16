import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[sticky]',
  standalone: true,
})
export class VirtualScrollStickyTable {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const thead = this.elementRef.nativeElement.querySelector('thead');
      const tfoot = this.elementRef.nativeElement.querySelector('tfoot');
      const parent = this.elementRef.nativeElement.parentElement;

      if (!parent || !thead || !tfoot) return;

      thead.style.position = 'sticky';
      thead.style.zIndex = '10';
      tfoot.style.position = 'sticky';
      tfoot.style.zIndex = '10';

      const observer = new MutationObserver((changes) => {
        const { transform } = (changes.at(0)?.target as HTMLElement).style;
        const transformPx = transform.replace('translateY(', '').replace('px)', '');
        const theadTop = `-${transformPx}px`;
        const tfootBottom = `${transformPx}px`;
        if (thead.style.top !== theadTop) thead.style.top = theadTop;
        if (tfoot.style.bottom !== tfootBottom) tfoot.style.bottom = tfootBottom;
      });
      observer.observe(parent, { attributes: true, attributeFilter: ['style'] });
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
