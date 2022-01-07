import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { parseMatrixParamsAtIndex, updateMatrixParamsAtIndex } from '@app/domain/router';
import { deepEquals } from '@app/utils/assert';
import { EMPTY, Observable, of } from 'rxjs';
import { distinctUntilChanged, shareReplay, switchMap } from 'rxjs/operators';
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from './types';

@Injectable()
export class FilterFormService<Decoded> {
  constructor(
    @Inject(FILTER_FORM_SETTINGS) private formSettings: FilterFormsSettings<Decoded>,
    private router: Router
  ) {
    this.filterParams$.subscribe();
  }
  public filterParams$: Observable<Decoded> = this.router.events.pipe(
    switchMap((e) =>
      'url' in e
        ? of(parseMatrixParamsAtIndex(e.url, this.formSettings.decoder, this.formSettings.urlFragmentIndex))
        : EMPTY
    ),
    distinctUntilChanged(deepEquals),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  next(value: Decoded) {
    const url = updateMatrixParamsAtIndex(
      this.router.routerState.snapshot.url,
      this.formSettings.encoder(value),
      this.formSettings.urlFragmentIndex
    );
    this.router.navigateByUrl(url, { replaceUrl: true });
  }
}
