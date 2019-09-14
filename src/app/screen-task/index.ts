import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ScreenTaskComponent} from './component'
export {ScreenTaskComponent}

@NgModule({
    declarations: [ScreenTaskComponent],
    entryComponents: [ScreenTaskComponent],
    exports: [ScreenTaskComponent],
    imports: [
        CommonModule
    ]
})
export class ScreenTaskModule {}