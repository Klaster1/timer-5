import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { updateTheme } from '@app/ngrx/actions';
import { theme } from '@app/ngrx/selectors';
import { StoreState } from '@app/types';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme$ = this.store.select(theme);
  isLoggedIn$ = of(false);
  user$ = of(null);

  title = 'timer';
  constructor(private store: Store<StoreState>, keys: HotkeysService, router: Router) {
    keys.add([
      hotkey('g t', 'Go to all tasks', () => router.navigate(['tasks', 'all'])),
      hotkey('g a', 'Go to active tasks', () => router.navigate(['tasks', 'active'])),
      hotkey('g d', 'Go to done tasks', () => router.navigate(['tasks', 'done'])),
    ]);
    this.theme$.pipe(tap((t) => document.body.classList.toggle('theme-alternate', t === 'dark'))).subscribe();
  }
  toggleTheme() {
    this.theme$
      .pipe(take(1))
      .subscribe((t) => this.store.dispatch(updateTheme({ theme: t === 'dark' ? 'light' : 'dark' })));
  }
}
