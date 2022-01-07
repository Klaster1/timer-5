import { Injectable } from '@angular/core';
import { fromStoredTasks, StoreState, toStoredTasks } from '@app/domain/storage';
import { loadTasks } from '@app/ngrx/actions';
import { selectTasks } from '@app/ngrx/selectors';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

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
  export() {
    this.store
      .select(selectTasks)
      .pipe(take(1), map(toStoredTasks))
      .subscribe((data) => {
        const blob = new Blob([JSON.stringify(data, null, '  ')], { type: 'application/json;charset=utf-8;' });
        const downloadUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'timer-data.json';

        a.click();

        setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
      });
  }
}
