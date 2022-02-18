import { Injectable } from '@angular/core';
import { fromStoredTasks, StoreState } from '@app/domain/storage';
import { loadTasks } from '@app/ngrx/actions';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class ImportExportService {
  constructor(private store: Store<StoreState>) {}
  import(event: Event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const file = target?.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.addEventListener(
      'load',
      () => {
        if (typeof fileReader.result !== 'string') return;
        this.store.dispatch(loadTasks({ data: fromStoredTasks(JSON.parse(fileReader.result)) }));
      },
      { once: true }
    );
    fileReader.readAsText(file);
  }
}
