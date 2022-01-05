import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isTruthy } from '@app/utils/assert';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from './types';

@Injectable()
export class FilterFormService<T> {
  constructor(@Inject(FILTER_FORM_SETTINGS) private formSettings: FilterFormsSettings<T>, private router: Router) {
    this.filterParams$.subscribe((e) => console.log(e));
  }
  public filterParams$: Observable<T> = this.router.events.pipe(
    map((e) => ('url' in e ? e.url : null)),
    filter(isTruthy),
    distinctUntilChanged(),
    map((url) => this.formSettings.decode(url)),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  next(value: T) {
    const encoded = this.formSettings.encode(value, this.router.routerState.snapshot.url);
    this.router.navigateByUrl(encoded, { replaceUrl: true });
  }
}
