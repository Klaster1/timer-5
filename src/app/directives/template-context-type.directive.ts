import { Directive, input } from '@angular/core';

@Directive({ selector: 'ng-template[contextType]', standalone: true })
export class TemplateContextTypeDirective<T> {
  contextType = input.required<T>();

  public static ngTemplateContextGuard<T>(dir: TemplateContextTypeDirective<T>, ctx: unknown): ctx is T {
    return true;
  }
}
