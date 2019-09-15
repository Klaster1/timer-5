import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {user} from '@app/ngrx/selectors'
import {StoreState} from '@app/types'

@Component({
  selector: 'button-user-actions',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class ButtonUserActionsComponent {
    constructor(
        private store: Store<StoreState>
    ) {}
    user$ = this.store.select(user)
}
