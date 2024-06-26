import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, inject, input } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { DurationFn, Milliseconds } from '@app/domain/date-time';
import { pad2 } from '@app/utils/number';
import { Observable, combineLatest, interval, map, shareReplay, startWith, switchMap } from 'rxjs';

enum DimMode {
  All,
  First,
  None,
}

type Fragment = {
  value: string;
  unit: Unit;
  dimmed: DimMode;
};

enum Unit {
  Hours = 'h',
  Minutes = 'm',
  Seconds = 's',
}

@Component({
  selector: 'duration',
  template: `
    @for (fragment of durationFragments | async; track fragment.unit) {
      <span class="fragment" [ngClass]="{ dimmed: fragment.dimmed === DimMode.All }"
        ><span class="value">
          @if (fragment.dimmed === DimMode.First) {
            <span class="dimmed">{{ fragment.value.at(0) }}</span
            ><span>{{ fragment.value.slice(1) }}</span>
          } @else {
            {{ fragment.value }}
          }</span
        ><span class="unit">{{ fragment.unit }}</span></span
      >
    }
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        gap: 0.35em;
        --unit-font-size: 0.6em;
      }
      .unit {
        font-size: var(--unit-font-size);
      }
      .value {
        display: inline-flex;
        align-items: baseline;
      }
      .dimmed {
        opacity: 0.35;
      }
    `,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, AsyncPipe],
})
export class DurationComponent {
  private interval = inject(DurationIntervalDirective).interval;
  public readonly value = input.required<DurationFn>();
  public readonly DimMode = DimMode;
  public readonly durationFragments = combineLatest([toObservable(this.value), this.interval]).pipe(
    map(([value, now]): Fragment[] => {
      const hours = ~~(value(now) / 3600000);
      const minutes = ~~((value(now) % 3600000) / 60000);
      const seconds = ~~((value(now) % 60000) / 1000);
      if (hours === 0 && minutes === 0) {
        return [{ value: seconds.toString(), unit: Unit.Seconds, dimmed: DimMode.None }];
      }
      return [
        { value: hours.toString(), unit: Unit.Hours, dimmed: hours === 0 ? DimMode.All : DimMode.None },
        {
          value: pad2(minutes),
          unit: Unit.Minutes,
          dimmed:
            hours === 0 && minutes === 0 ? DimMode.All : minutes < 10 && hours === 0 ? DimMode.First : DimMode.None,
        },
      ];
    }),
  );
}

@Directive({
  selector: '[durationInterval]',
  standalone: true,
})
export class DurationIntervalDirective {
  public readonly durationInterval = input.required<Milliseconds>();
  public interval: Observable<Milliseconds> = toObservable(this.durationInterval).pipe(
    switchMap((value) => interval(value)),
    startWith(0),
    map(() => Date.now()),
    takeUntilDestroyed(),
    shareReplay({ refCount: true, bufferSize: 1 }),
  );
}
