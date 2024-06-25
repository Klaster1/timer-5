import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Duration } from '@app/domain/date-time';
import { pad2 } from '@app/utils/number';

type Fragment = {
  value: string;
  unit: Unit;
  dimmed: boolean;
};

enum Unit {
  Hours = 'h',
  Minutes = 'm',
  Seconds = 's',
}

@Component({
  selector: 'duration',
  template: `
    @for (fragment of durationFragments(); track fragment.unit) {
      <span class="fragment" [ngClass]="{ dimmed: fragment.dimmed }"
        ><span class="value">{{ fragment.value }}</span
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
      .dimmed {
        opacity: 0.35;
      }
    `,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class DurationComponent {
  public readonly value = input.required<Duration>();
  public durationFragments = computed((): Fragment[] => {
    const value = this.value();
    const hours = ~~(value / 3600000);
    const minutes = ~~((value % 3600000) / 60000);
    const seconds = ~~((value % 60000) / 1000);
    if (hours === 0 && minutes === 0) {
      return [{ value: seconds.toString(), unit: Unit.Seconds, dimmed: false }];
    }
    return [
      { value: hours.toString(), unit: Unit.Hours, dimmed: hours === 0 },
      { value: pad2(minutes), unit: Unit.Minutes, dimmed: hours === 0 && minutes === 0 },
    ];
  });
}
