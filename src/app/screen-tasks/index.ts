import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material'
import {ScrollingModule} from '@angular/cdk/scrolling'
import {NgScrollbarModule} from 'ngx-scrollbar'

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
        ScrollingModule,
        NgScrollbarModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        ButtonTaskActionsModule
    ]
})
export class ScreenTasksModule {}