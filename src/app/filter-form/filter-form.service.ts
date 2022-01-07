import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Entries } from '@app/domain/router';
import { isTruthy } from '@app/utils/assert';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from './types';

@Injectable()
export class FilterFormService<T> {
  constructor(@Inject(FILTER_FORM_SETTINGS) private formSettings: FilterFormsSettings<T>, private router: Router) {
    this.filterParams$.subscribe();
  }
  public filterParams$: Observable<T> = this.router.events.pipe(
    map((e) => ('url' in e ? e.url : null)),
    filter(isTruthy),
    distinctUntilChanged(),
    map((url) => {
      const fragment = url.split('/')[this.formSettings.urlFragmentIndex];
      if (!fragment) return {} as T;
      return Object.fromEntries(
        fragment
          .split(';')
          .filter((param) => param.includes('='))
          .map((param) => param.split('='))
          .map(([key, rawValue]) => {
            if (!key || !rawValue) return null;
            return this.formSettings.decodeValue(key, decodeURIComponent(rawValue));
          })
          .filter(isTruthy)
      ) as unknown as T;
    }),
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  next(value: T) {
    const entries = Object.entries(value) as Entries<T>[];
    const encodedEntries = entries
      .map((pair) => this.formSettings.encodeValue(pair))
      .filter(isTruthy)
      .map((pair) => `${pair[0]}=${encodeURIComponent(pair[1])}`);
    const matrixParams = encodedEntries.join(';');
    const url = this.router.routerState.snapshot.url
      .split('/')
      .map((fragment, i) =>
        i === this.formSettings.urlFragmentIndex
          ? `${fragment.split(';')[0]}${matrixParams ? `;${matrixParams}` : ''}`
          : fragment
      )
      .join('/');
    this.router.navigateByUrl(url, { replaceUrl: true });
  }
}
