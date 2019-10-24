import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogEditSessionData {
    start: number;
    end?: number;
}

@Component({
    selector: 'dialog-edit-session',
    templateUrl: './template.html'
})
export class DialogEditSessionComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogEditSessionData,
        private dialog: MatDialogRef<DialogEditSessionComponent, DialogEditSessionData>
    ) {}
    onSubmit(start: number, end: number) {
        this.dialog.close({start, end: Number.isNaN(end) ? undefined : end});
    }
}
