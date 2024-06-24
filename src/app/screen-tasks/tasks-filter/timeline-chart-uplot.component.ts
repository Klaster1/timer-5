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
import { isNumber } from '@app/utils/assert';
import { format } from 'date-fns/format';
import { millisecondsToSeconds } from 'date-fns/millisecondsToSeconds';
import { secondsToMilliseconds } from 'date-fns/secondsToMilliseconds';
import uPlot, { AlignedData, Plugin } from 'uplot';

const barChartPlugin = (params: { color: string; minRangeInMs: Milliseconds }): Plugin => {
  const minRangeInSeconds: Seconds = millisecondsToSeconds(params.minRangeInMs);

  const getVisibleRangeLength = (u: uPlot): number => {
    const visibleRangeMin = u.scales.x?.min;
    const visibleRangeMax = u.scales.x?.max;
    if (visibleRangeMin === undefined || visibleRangeMax === undefined) return Number.POSITIVE_INFINITY;
    return visibleRangeMax - visibleRangeMin;
  };

  const drawBarChart: any = (u: uPlot, i: number, i0: number, i1: number) => {
    let { ctx } = u;
    let scale = u.series[i]?.scale;
    if (!scale) return;
    const maxY = u.valToPos(0, scale, true);
    ctx.fillStyle = params.color;

    let j = i0;

    while (j <= i1) {
      const data0J = u.data[0][j];
      const dataIJ = u.data[i]?.[j];
      if (typeof data0J !== 'number' || typeof dataIJ !== 'number') continue;
      let cx = Math.round(u.valToPos(data0J, 'x', true));
      let cy = Math.round(u.valToPos(dataIJ, scale, true));
      const range = getVisibleRangeLength(u);
      if (cy < maxY && range <= minRangeInSeconds) {
        ctx.beginPath();
        ctx.rect(cx, cy, 1, maxY - cy);
        ctx.fill();
      }
      j++;
    }

    ctx.restore();
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
        }
      }
    `,
  ],
  standalone: true,
})
export class TimelineChartUplotComponent {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);

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
    setTimeout(() => this.uplot?.setScale('x', { min: newMin, max: newMax }));
  }
  private firstRangeChangeSkipped = false;
  private uplot?: uPlot;
  private readonly headerHeight = 31;
  private resizeObserver?: ResizeObserver;
  constructor() {
    effect(() => {
      const stroke = window.getComputedStyle(this.elementRef.nativeElement).color;
      const primaryColor = window
        .getComputedStyle(this.elementRef.nativeElement)
        .getPropertyValue('--mdc-outlined-text-field-focus-label-text-color');
      const secondaryColor = window
        .getComputedStyle(this.elementRef.nativeElement)
        .getPropertyValue('--mdc-filled-text-field-container-color');
      this.uplot?.axes.forEach((a) => (a.stroke = () => stroke));
      this.uplot?.series.forEach((s, i) => {
        if (i === 1) s.fill = () => primaryColor;
        if (i === 2) s.fill = () => secondaryColor;
      });
      setTimeout(() => {
        this.uplot?.redraw(false);
      });
    });
    effect(() => {
      const chartData = this.chartData();
      if (chartData) this.uplot?.setData(chartData);
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
          plugins: [barChartPlugin({ color: 'hsl(87, 74%, 40%)', minRangeInMs: daysToMilliseconds(365) })],
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
          },
          series: [
            {
              value: (_, value) => format(new Date(secondsToMilliseconds(value)), 'yyyy-MM-dd'),
              label: 'Day',
            },
            {
              show: true,
              label: this.getLegendLabel(),
              scale: 'm',
              value: (_, value) => this.getLegendValue(value),
            },
            {
              show: true,
              label: this.getLegendLabel(),
              scale: 'm',
              value: (_, value) => this.getLegendValue(value),
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
