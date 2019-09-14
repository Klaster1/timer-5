import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ScreenTasksComponent} from './component'

export {ScreenTasksComponent}

@NgModule({
    declarations: [ScreenTasksComponent],
    entryComponents: [ScreenTasksComponent],
    exports: [ScreenTasksComponent],
    imports: [
        CommonModule
    ]
})
export class ScreenTasksModule {}