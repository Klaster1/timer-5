import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {StoreState} from '@app/types'
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private store: Store<StoreState>
    ) {}
    isLoggedIn$ = of(false)
    user$ = of(null)
  title = 'timer';
}
