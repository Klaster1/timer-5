import { ChangeDetectionStrategy, Component } from '@angular/core';
import { currentStateTasksStats } from '@app/ngrx/selectors';
import { StatsParams, StoreState } from '@app/types';
import { FormBuilder } from '@ng-stack/forms';
import { Store } from '@ngrx/store';
import { pluck, startWith, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenStatsComponent {
  constructor(private fb: FormBuilder, private store: Store<StoreState>) {}
  displayedColumns = ['name', 'value'];
  timelineSteps: StatsParams['timelineStep'][] = ['year', 'month', 'week', 'day', 'hour'];
  form = this.fb.group<StatsParams>({
    timelineStep: ['day'],
  });
  stats$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    switchMap((params) => this.store.pipe(currentStateTasksStats(params)))
  );
  timeline$ = this.stats$.pipe(pluck('timeline', 'chartjsData'));
  timelineUplot$ = this.stats$.pipe(pluck('timeline', 'uPlotData'));
}
