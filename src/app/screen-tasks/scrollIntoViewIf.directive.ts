import {Directive, Input, ElementRef} from '@angular/core'

@Directive({
    selector: '[scrollIntoViewIf]'
})
export class ScrollIntoViewIfDirective {
    constructor(private el: ElementRef<HTMLAnchorElement>) {}
    @Input()
    set scrollIntoViewIf(isActive: boolean) {
        // console.log(isActive)
        if (isActive) {
            console.log(this.el)
            this.el.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
    }
}