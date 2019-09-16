import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material'
import {RouterModule} from '@angular/router'

import {ScreenTaskComponent} from './component'
export {ScreenTaskComponent}

import {ButtonTaskActionsModule} from '@app/button-task-actions'

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
        ButtonTaskActionsModule
    ]
})
export class ScreenTaskModule {}