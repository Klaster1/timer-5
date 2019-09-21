import {Observable} from 'rxjs';
import {Injectable} from '@angular/core'
import {MatDialog} from '@angular/material'
import {DialogPromptComponent, DialogPromptData} from '@app/dialog-prompt'

@Injectable({providedIn: 'root'})
export class Prompt {
    constructor(
        private dialog: MatDialog
    ) {}
    prompt(title: string, value = ''): Observable<string|undefined> {
        return this.dialog.open<DialogPromptComponent, DialogPromptData, string>(DialogPromptComponent, {data: {title, value}}).afterClosed()
    }
}