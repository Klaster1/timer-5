import { ChangeDetectionStrategy, Component } from '@angular/core';
import { currentStateTasksStats } from '@app/ngrx/selectors';
import { StatsParams, StoreState } from '@app/types';
import { FormBuilder } from '@ng-stack/forms';
import { Store } from '@ngrx/store';
import { pluck, startWith, switchMap, map, shareReplay } from 'rxjs/operators';

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenStatsComponent {
  constructor(private fb: FormBuilder, private store: Store<StoreState>) {}
  displayedColumns = ['name', 'value'];
  timelineSteps: StatsParams['timelineStep'][] = ['year', 'month', 'day', 'hour'];
  form = this.fb.group<StatsParams>({
    timelineStep: ['day'],
  });
  stats$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    switchMap((params) => this.store.pipe(currentStateTasksStats(params))),
    shareReplay(1)
  );
  timeline$ = this.stats$.pipe(pluck('timeline', 'chartjsData'));
  barWidthInS$ = this.stats$.pipe(
    pluck('timeline', 'barWidthInMs'),
    map((v) => v / 1000)
  );
  timelineUplot$ = this.stats$.pipe(pluck('timeline', 'uPlotData'));
}