import {Injectable} from '@angular/core'
import {MatDialog} from '@angular/material'
import {DialogPromptComponent, DialogPromptData} from '@app/dialog-prompt'
import {Store} from '@ngrx/store'
import {StoreState} from '@app/types'
import * as actions from '@app/ngrx/actions'

@Injectable({providedIn: 'root'})
export class TasksFacade {
    constructor(
        private store: Store<StoreState>,
        private dialog: MatDialog
    ) {}
    renameTask(taskId: string, oldName: string) {
        this.dialog.open<DialogPromptComponent, DialogPromptData, string>(DialogPromptComponent, {data: {
            title: 'Rename task',
            value: oldName
        }}).afterClosed().subscribe(name => {
            if (name) this.store.dispatch(actions.renameTask({taskId, name}))
        })
    }
}