import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogPromptData {
    title: string;
    placeholder?: string;
    value?: string;
}

@Component({
    selector: 'dialog-prompt',
    templateUrl: './template.html'
})
export class DialogPromptComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogPromptData,
        private dialog: MatDialogRef<DialogPromptComponent, string>
    ) {}
    onSubmit(value?: string) {
        this.dialog.close(value);
    }
}
