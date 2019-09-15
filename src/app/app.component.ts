import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {isLoggedIn} from '@app/ngrx/selectors'
import {StoreState} from '@app/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private store: Store<StoreState>
    ) {}
    isLoggedIn$ = this.store.select(isLoggedIn)
  title = 'timer';
}
