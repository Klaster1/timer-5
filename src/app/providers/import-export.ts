import { inject, Injectable } from '@angular/core';
import { fromStoredTasks } from '@app/domain/storage';
import { AppStore } from './state';

@Injectable({ providedIn: 'root' })
export class ImportExportService {
  private store = inject(AppStore);
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
        this.store.loadTasks(fromStoredTasks(JSON.parse(fileReader.result)));
      },
      { once: true },
    );
    fileReader.readAsText(file);
  }
}
