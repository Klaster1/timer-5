import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material'
import {RouterModule} from '@angular/router'

import {ScreenTaskComponent} from './component'
export {ScreenTaskComponent}

import {ButtonTaskActionsModule} from '@app/button-task-actions'
import {DurationPipeModule} from '@app/pipes/duration.pipe'
import {ButtonSessionActionsModule} from '@app/button-session-actions'

@NgModule({
    declarations: [ScreenTaskComponent],
    entryComponents: [ScreenTaskComponent],
    exports: [ScreenTaskComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatTooltipModule,
        DurationPipeModule,
        ButtonTaskActionsModule,
        ButtonSessionActionsModule
    ]
})
export class ScreenTaskModule {}