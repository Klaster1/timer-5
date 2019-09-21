import {Directive, Input, ElementRef} from '@angular/core'

@Directive({
    selector: '[scrollIntoViewIf]'
})
export class ScrollIntoViewIfDirective {
    constructor(private el: ElementRef<HTMLAnchorElement>) {}
    @Input()
    set scrollIntoViewIf(isActive: boolean) {
        if (isActive) {
            this.el.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
    }
}