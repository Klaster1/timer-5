import { CdkVirtualForOfContext } from '@angular/cdk/scrolling';
import { Directive, input } from '@angular/core';

// https://github.com/angular/components/issues/26609
@Directive({
  selector: '[cdkVirtualFor]',
  standalone: true,
})
export class TypeSafeCdkVirtualForDirective<T> {
  cdkVirtualForTypes = input<T[]>();

  static ngTemplateContextGuard<T>(
    _dir: TypeSafeCdkVirtualForDirective<T>,
    ctx: unknown,
  ): ctx is CdkVirtualForOfContext<T> {
    return true;
  }
}
