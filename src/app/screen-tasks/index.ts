import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ScreenTasksComponent} from './component'
import {RouterModule} from '@angular/router'

export {ScreenTasksComponent}

@NgModule({
    declarations: [ScreenTasksComponent],
    entryComponents: [ScreenTasksComponent],
    exports: [ScreenTasksComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ScreenTasksModule {}