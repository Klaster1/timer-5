import {NgModule} from '@angular/core';
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DialogEditSessionComponent, DialogEditSessionData} from './component';
export {DialogEditSessionComponent, DialogEditSessionData};

@NgModule({
    imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    declarations: [DialogEditSessionComponent],
    exports: [DialogEditSessionComponent],
    entryComponents: [DialogEditSessionComponent]
})
export class DialogEditSessionModule {}
