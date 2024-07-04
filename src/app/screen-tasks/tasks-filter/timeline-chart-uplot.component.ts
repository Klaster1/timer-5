import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { ScaleRange } from '@app/domain/chart';
import { Milliseconds, Seconds, daysToMilliseconds, formatHours } from '@app/domain/date-time';
import { AppStore } from '@app/providers/state';
import { isNumber } from '@app/utils/assert';
import { format } from 'date-fns/format';
import { millisecondsToSeconds } from 'date-fns/millisecondsToSeconds';
import { secondsToMilliseconds } from 'date-fns/secondsToMilliseconds';
import uPlot, { AlignedData, Plugin } from 'uplot';

const barChartPlugin = (params: { colors: (string | null)[]; minRangeInMs: Milliseconds }): Plugin => {
  const minRangeInSeconds: Seconds = millisecondsToSeconds(params.minRangeInMs);

  const getVisibleRangeLength = (u: uPlot): number => {
    const visibleRangeMin = u.scales.x?.min;
    const visibleRangeMax = u.scales.x?.max;
    if (visibleRangeMin === undefined || visibleRangeMax === undefined) return Number.POSITIVE_INFINITY;
    return visibleRangeMax - visibleRangeMin;
  };

  const drawBarChart: uPlot.Series.Points.Show = (self: uPlot, seriesIndex: number, i0: number, i1: number) => {
    let { ctx } = self;
    let scale = self.series[seriesIndex]?.scale;
    if (!scale) return;
    const maxY = self.valToPos(0, scale, true);
    const color = params.colors[seriesIndex];
    if (!color) return false;
    ctx.fillStyle = color;

    let j = i0;

    while (j <= i1) {
      const data0J = self.data[0][j];
      const dataIJ = self.data[seriesIndex]?.[j];
      if (typeof data0J !== 'number' || typeof dataIJ !== 'number') continue;
      let cx = Math.round(self.valToPos(data0J, 'x', true));
      let cy = Math.round(self.valToPos(dataIJ, scale, true));
      const range = getVisibleRangeLength(self);
      if (cy < maxY && range <= minRangeInSeconds) {
        ctx.beginPath();
        ctx.rect(cx, cy, 1, maxY - cy);
        ctx.fill();
      }
      j++;
    }

    ctx.restore();
    return false;
  };

  return {
    hooks: {},
    opts: (u: uPlot, opts: uPlot.Options) => {
      opts.series
        .filter((s) => s.scale === 'm')
        .forEach((s) => {
          s.points = {
            show: drawBarChart,
          };
        });
    },
  };
};

@Component({
  selector: 'timeline-chart-uplot',
  template: ``,
  styleUrl: '/node_modules/uplot/dist/uPlot.min.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      timeline-chart-uplot {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        .uplot {
          position: absolute;
          font-family: Roboto, 'Helvetica Neue', sans-serif !important;

          & th {
            font-weight: 400 !important;
          }
          .u-value {
            vertical-align: -1px;
          }
        }
        .hidden {
          display: none;
        }
      }
    `,
  ],
  standalone: true,
})
export class TimelineChartUplotComponent {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);
  private store = inject(AppStore);

  public chartData = input<AlignedData>();
  public range = input<ScaleRange>();
  public rangeChange = output<ScaleRange>();

  private setRange(value: ScaleRange | undefined) {
    if (!value) return;
    const chartData = this.chartData();
    const oldMin = Math.round(this.uplot?.scales.x?.min ?? -1);
    const oldMax = Math.round(this.uplot?.scales.x?.max ?? -1);
    const dataMin = chartData?.[0]?.[0];
    const dataMax = chartData?.[0][chartData?.[0].length - 1] ?? [];
    const newMin =
      value[0] instanceof Date
        ? millisecondsToSeconds(value[0].valueOf())
        : isNumber(dataMin)
          ? dataMin
          : millisecondsToSeconds(Date.now());
    const newMax =
      value[1] instanceof Date
        ? millisecondsToSeconds(value[1].valueOf())
        : isNumber(dataMax)
          ? dataMax
          : millisecondsToSeconds(Date.now());
    if (oldMin === newMin && oldMax === newMax) return;
    // Wait until visible
    this.uplot?.setScale('x', { min: newMin, max: newMax });
  }
  private firstRangeChangeSkipped = false;
  private uplot?: uPlot;
  private readonly headerHeight = 31;
  private resizeObserver?: ResizeObserver;
  constructor() {
    effect(() => {
      this.store.theme();

      const stroke = window.getComputedStyle(this.elementRef.nativeElement).color;
      const primaryColor = window
        .getComputedStyle(this.elementRef.nativeElement)
        .getPropertyValue('--mdc-outlined-text-field-focus-label-text-color');
      const secondaryColor = window
        .getComputedStyle(this.elementRef.nativeElement)
        .getPropertyValue('--mdc-filled-text-field-container-color');

      this.uplot?.batch((uPlot: uPlot) => {
        uPlot?.axes.forEach((a) => (a.stroke = () => stroke));
        uPlot?.series.forEach((s, i) => {
          if (i === 1) s.fill = () => primaryColor;
          if (i === 2) s.fill = () => secondaryColor;
        });
        uPlot?.redraw(true);
      });
    });
    effect(() => {
      const chartData = this.chartData();
      if (chartData) {
        this.uplot?.batch((uPlot: uPlot) => {
          uPlot.setData(chartData);
        });
      }
    });
    effect(() => {
      const range = this.range();
      this.setRange(range);
    });
    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.unobserve(this.elementRef.nativeElement);
      this.uplot?.destroy();
    });
    afterNextRender(() => {
      this.resizeObserver = new ResizeObserver(([entry]) => {
        if (entry)
          this.uplot?.setSize({
            width: Math.floor(entry.contentRect.width),
            height: Math.floor(entry.contentRect.height - this.headerHeight),
          });
      });
      this.resizeObserver.observe(this.elementRef.nativeElement);
      this.uplot = new uPlot(
        {
          width: this.elementRef.nativeElement.offsetWidth,
          height: this.elementRef.nativeElement.offsetHeight - this.headerHeight,
          plugins: [
            barChartPlugin({
              colors: [null, 'hsl(87, 74%, 40%)', 'hsl(87, 0%, 40%)'],
              minRangeInMs: daysToMilliseconds(365),
            }),
          ],
          hooks: {
            setScale: [
              (self: uPlot, key: string) => {
                if (!this.firstRangeChangeSkipped) {
                  this.firstRangeChangeSkipped = true;
                  return;
                }
                const scale = self.scales[key];
                if (key !== 'x' || !scale || !isNumber(scale.min) || !isNumber(scale.max)) {
                  return;
                }
                const dataMin = self.data[0][0];
                const dataMax = self.data[0][self.data[0].length - 1];
                const min = scale.min === dataMin ? null : new Date(secondsToMilliseconds(scale.min));
                const max = scale.max === dataMax ? null : new Date(secondsToMilliseconds(scale.max));
                const event = [min, max] as const;
                this.rangeChange.emit(event);
              },
            ],
          },
          scales: {
            m: {
              auto: true,
            },
            x: {
              time: true,
              auto: true,
              range(self, min, max) {
                const currentMin = self.scales.x!.min!;
                const currentMax = self.scales.x!.max!;
                const minRangeWidthInSeconds: Seconds = millisecondsToSeconds(daysToMilliseconds(0.99));
                const missingRange: Seconds = max - min;
                if (missingRange <= minRangeWidthInSeconds) {
                  return [currentMin - missingRange * 0.5, currentMax + missingRange * 0.5];
                } else {
                  return [min, max];
                }
              },
            },
          },
          series: [
            {
              value: (_, value) => (!value ? '-' : format(new Date(secondsToMilliseconds(value)), 'yyyy-MM-dd')),
              label: 'Day',
            },
            {
              show: true,
              label: this.getLegendLabel(),
              scale: 'm',
              value: (self, rawValue, seriesIndex, idx) => {
                const otherBarValue = typeof idx === 'number' ? self.data[seriesIndex + 1]?.[idx] : undefined;
                const valueToShow =
                  rawValue === 0 && otherBarValue !== 0 && typeof otherBarValue === 'number' ? otherBarValue : rawValue;
                return this.getLegendValue(valueToShow);
              },
            },
            {
              show: true,
              scale: 'm',
              class: 'hidden',
            },
          ],
          axes: [
            {},
            {
              scale: 'm',
              size: 50,
              label: this.getLegendLabel(),
              values: (_, ticks) => ticks.map((raw) => this.getLegendValue(raw)),
            },
          ],
        },
        this.chartData(),
        this.elementRef.nativeElement,
      );
    });
  }
  getLegendValue(value: number) {
    return value ? formatHours(value) : '--:--';
  }

  getLegendLabel() {
    return 'Hours';
  }
}
