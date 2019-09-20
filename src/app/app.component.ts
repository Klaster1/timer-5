import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {StoreState} from '@app/types'
import {of} from 'rxjs';
import {HotkeysService, Hotkey} from 'angular2-hotkeys'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private store: Store<StoreState>,
        keys: HotkeysService,
        router: Router
    ) {
        keys.add(new Hotkey('g t', (e) => {
            router.navigate(['tasks', 'all'])
            return e
        }, void 0, 'Go to all tasks'))
        keys.add(new Hotkey('g a', (e) => {
            router.navigate(['tasks', 'active'])
            return e
        }, void 0, 'Go to active tasks'))
        keys.add(new Hotkey('g d', (e) => {
            router.navigate(['tasks', 'done'])
            return e
        }, void 0, 'Go to done tasks'))
    }
    isLoggedIn$ = of(false)
    user$ = of(null)
  title = 'timer';
}
