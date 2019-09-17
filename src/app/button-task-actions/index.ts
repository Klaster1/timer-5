import {NgModule} from '@angular/core'
import {MatMenuModule, MatButtonModule, MatIconModule, MatSelectModule} from '@angular/material'
import {ButtonTaskActionsComponent} from './component'

@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule
    ],
    declarations: [ButtonTaskActionsComponent],
    exports: [ButtonTaskActionsComponent]
})
export class ButtonTaskActionsModule {}