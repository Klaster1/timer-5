import {NgModule} from '@angular/core'
import {MatMenuModule, MatButtonModule, MatIconModule, MatSelectModule} from '@angular/material'
import {ButtonTaskActionsComponent} from './component'
import {TaskStateIconPipeModule} from '@app/pipes/task-state-icon.pipe'
import {TaskStatePipeModule} from '@app/pipes/task-state.pipe'

@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        TaskStateIconPipeModule,
        TaskStatePipeModule
    ],
    declarations: [ButtonTaskActionsComponent],
    exports: [ButtonTaskActionsComponent]
})
export class ButtonTaskActionsModule {}