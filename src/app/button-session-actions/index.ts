import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
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
