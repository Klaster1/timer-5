import { ChangeDetectionStrategy, Component } from '@angular/core';
import { currentStateTasksStats } from '@app/ngrx/selectors';
import { StoreState } from '@app/types';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenStatsComponent {
  constructor(private store: Store<StoreState>) {}
  stats$ = this.store.pipe(currentStateTasksStats({}));
  displayedColumns = ['name', 'value'];
}
