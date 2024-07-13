import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { DurationFn } from '@app/domain/date-time';
import { pad2 } from '@app/utils/number';
import { secondsToMilliseconds } from 'date-fns';
import { combineLatest, interval, map, shareReplay, startWith } from 'rxjs';

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

const EVERY_SECOND_INTERVAL = interval(secondsToMilliseconds(1)).pipe(
  startWith(0),
  map(() => Date.now()),
  shareReplay({ refCount: true, bufferSize: 1 }),
);

@Component({
  selector: 'duration',
  // prettier-ignore
  template: `@for(fragment of durationFragments | async; track fragment.unit){<span class="fragment" [ngClass]="{ dimmed: fragment.dimmed === DimMode.All }"><span class="value">@if(fragment.dimmed === DimMode.First){<span class="dimmed">{{ fragment.value.at(0) }}</span><span>{{ fragment.value.slice(1) }}</span>}@else{{{ fragment.value }}}</span><span class="unit">{{ fragment.unit }}</span></span>}`,
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
  private elementRef = inject(ElementRef<HTMLElement>);
  public readonly value = input.required<DurationFn>();
  public readonly DimMode = DimMode;
  private readonly duration$ = combineLatest([toObservable(this.value), EVERY_SECOND_INTERVAL]).pipe(
    map(([value, now]) => ({
      hours: ~~(value(now) / 3600000),
      minutes: ~~((value(now) % 3600000) / 60000),
      seconds: ~~((value(now) % 60000) / 1000),
    })),
    shareReplay({ refCount: true, bufferSize: 1 }),
    takeUntilDestroyed(),
  );
  public readonly durationFragments = this.duration$.pipe(
    map(({ hours, minutes, seconds }): Fragment[] => {
      if (hours === 0 && minutes === 0) {
        return [{ value: seconds.toString(), unit: Unit.Seconds, dimmed: DimMode.None }];
      }
      return [
        { value: hours.toString(), unit: Unit.Hours, dimmed: hours === 0 ? DimMode.All : DimMode.None },
        {
          value: pad2(minutes),
          unit: Unit.Minutes,
          dimmed: hours === 0 && minutes === 0 ? DimMode.All : minutes < 10 ? DimMode.First : DimMode.None,
        },
      ];
    }),
    takeUntilDestroyed(),
  );
  private textValue$ = this.duration$.pipe(map(({ hours, minutes, seconds }) => `${hours}h ${minutes}m ${seconds}s`));
  constructor() {
    this.textValue$.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.elementRef.nativeElement.setAttribute('aria-label', value);
      this.elementRef.nativeElement.setAttribute('title', value);
    });
  }
}
