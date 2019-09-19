import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
// import {user} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
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
    // user$ = this.store.select(user)
    logout() {
        // this.store.dispatch(actions.logout())
    }
}
