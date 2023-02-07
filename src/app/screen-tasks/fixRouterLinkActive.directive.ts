import { Directive, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[fixRouterLinkActive]',
  standalone: true,
})
export class FixRouterLinkActiveDirective {
  constructor(private rla: RouterLinkActive) {}
  @Input()
  set routerLink(value: any[] | string) {
    this.rla.ngOnChanges({});
  }
}
