import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {
    MatCardModule,
    MatButtonModule
} from '@angular/material'

import {ScreenTaskComponent} from './component'
export {ScreenTaskComponent}

import {ButtonTaskActionsModule} from '@app/button-task-actions'

@NgModule({
    declarations: [ScreenTaskComponent],
    entryComponents: [ScreenTaskComponent],
    exports: [ScreenTaskComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        ButtonTaskActionsModule
    ]
})
export class ScreenTaskModule {}