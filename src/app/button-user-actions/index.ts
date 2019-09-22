import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule} from '@angular/material';
import {ButtonUserActionsComponent} from './component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule
    ],
    declarations: [ButtonUserActionsComponent],
    exports: [ButtonUserActionsComponent]
})
export class ButtonUserActionsModule {}
