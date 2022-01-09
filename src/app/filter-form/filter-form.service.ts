import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { deepEquals } from '@app/utils/assert';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from './types';

@Injectable()
export class FilterFormService<Decoded> {
  constructor(
    @Inject(FILTER_FORM_SETTINGS) private formSettings: FilterFormsSettings<Decoded>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filterParams$.subscribe();
  }
  public filterParams$: Observable<Decoded> = this.route.queryParams.pipe(
    distinctUntilChanged(deepEquals),
    map((params) => this.formSettings.decoder(params)),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  next(value: Decoded) {
    this.router.navigate([], { relativeTo: this.route, queryParams: this.formSettings.encoder(value) });
  }
}
