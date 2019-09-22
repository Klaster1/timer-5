import {NgModule} from '@angular/core';
import {MatMenuModule, MatButtonModule, MatIconModule, MatSelectModule} from '@angular/material';
import {ButtonSessionActionsComponent} from './component';

@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule
    ],
    declarations: [ButtonSessionActionsComponent],
    exports: [ButtonSessionActionsComponent]
})
export class ButtonSessionActionsModule {}
