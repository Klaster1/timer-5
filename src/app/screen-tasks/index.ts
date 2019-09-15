import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule, MatListModule} from '@angular/material'

import {ScreenTasksComponent} from './component'
import {ButtonTaskActionsModule} from '@app/button-task-actions'

export {ScreenTasksComponent}

@NgModule({
    declarations: [ScreenTasksComponent],
    entryComponents: [ScreenTasksComponent],
    exports: [ScreenTasksComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatListModule,
        ButtonTaskActionsModule
    ]
})
export class ScreenTasksModule {}