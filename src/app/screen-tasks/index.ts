import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material'

import {ScreenTasksComponent} from './component'
import {ButtonTaskActionsModule} from '@app/button-task-actions'
import {TaskStatePipeModule} from '@app/pipes/task-state.pipe'

export {ScreenTasksComponent}

@NgModule({
    declarations: [ScreenTasksComponent],
    entryComponents: [ScreenTasksComponent],
    exports: [ScreenTasksComponent],
    imports: [
        CommonModule,
        TaskStatePipeModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        ButtonTaskActionsModule
    ]
})
export class ScreenTasksModule {}