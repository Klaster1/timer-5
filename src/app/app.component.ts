import { Component, HostBinding } from '@angular/core';
import {Store} from '@ngrx/store'
import {updateTheme} from '@app/ngrx/actions'
import {theme} from '@app/ngrx/selectors'
import {StoreState} from '@app/types'
import {of} from 'rxjs';
import {HotkeysService, Hotkey} from 'angular2-hotkeys'
import {Router} from '@angular/router'
import {map, tap, take} from 'rxjs/operators';

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
        this.theme$.pipe(map(t=>t==='dark'?'theme-alternate':''), tap(tc=>this.themeClass=tc)).subscribe()
    }
    theme$ = this.store.select(theme)
    @HostBinding('class')
    themeClass?: string
    toggleTheme() {
        this.theme$.pipe(take(1)).subscribe(t => this.store.dispatch(updateTheme({theme: t === 'dark' ? 'light' : 'dark'})))
    }
    isLoggedIn$ = of(false)
    user$ = of(null)



  title = 'timer';
}
