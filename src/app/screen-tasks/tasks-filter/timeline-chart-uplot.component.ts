import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  afterNextRender,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { ScaleRange } from '@app/domain/chart';
import { formatHours } from '@app/domain/date-time';
import { StoreState } from '@app/domain/storage';
import { selectTheme } from '@app/ngrx/selectors';
import { isNumber } from '@app/utils/assert';
import { Store } from '@ngrx/store';
import format from 'date-fns/format';
import millisecondsToSeconds from 'date-fns/millisecondsToSeconds';
import secondsToMilliseconds from 'date-fns/secondsToMilliseconds';
import uPlot, { AlignedData, Hooks, Options } from 'uplot';

type PluginReturnValue = {
  opts?: (self: uPlot, opts: Options) => void;
  hooks: Hooks.Defs;
};

const timerTimelinePlugin = (params: { barColor: string }): PluginReturnValue => {
  const draw = (u: uPlot) => {
    u.ctx.save();

    const seriesIndex = 1;
    const fill = new Path2D();
    const scaleX = 'x';
    const series = u.series[seriesIndex];
    if (!series) return;
    const scaleY = series?.scale;
    if (!scaleY) return;
    const dataX = u.data[0];
    const dataY = u.data[1];
    const xMin = u.scales[scaleX]?.min;
    const yMin = u.scales[scaleY]?.min;
    if (!isNumber(xMin) || !isNumber(yMin)) return;
    const minX = u.valToPos(xMin, scaleX, true);
    const minY = u.valToPos(yMin, scaleY, true);
    const drawFromIndex = u.posToIdx(0);

    u.ctx.fillStyle = params.barColor;

    for (const i of u.data[0].keys()) {
      if (i % 2 === 0) {
        const x = dataX[i];
        if (!isNumber(x)) break;
        const x0 = Math.max(minX, Math.round(u.valToPos(x, scaleX, true)));
        if (i < drawFromIndex - 1) {
          continue;
        }
        const valueX = dataX[i + 1];
        const valueY = dataY?.[i];
        if (!isNumber(valueX) || !isNumber(valueY)) return;
        const x1 = Math.round(u.valToPos(valueX, scaleX, true));
        const y0 = Math.round(u.valToPos(valueY, scaleY, true));
        const y1 = minY;
        fill.rect(x0, y0, x1 - x0, y1 - y0);
      }
    }
    u.ctx.fill(fill);
    u.ctx.stroke(fill);

    u.ctx.restore();
  };
  return {
    opts: (_, opts) => {
      const series = opts.series[1];
      if (series) {
        series.paths = () => null;
        series.points = { show: false };
      }
    },
    hooks: {
      draw,
    },
  };
};

@Component({
  selector: 'timeline-chart-uplot',
  template: `<canvas #canvas></canvas>`,
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

        canvas {
          width: 100% !important;
          height: 100% !important;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    `,
  ],
  standalone: true,
})
export class TimelineChartUplotComponent implements OnChanges {
  private store = inject<Store<StoreState>>(Store);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);

  public chartData = input<AlignedData>();
  public range = input<ScaleRange>();
  public rangeChange = output<ScaleRange>();

  private setRange(value: ScaleRange | undefined) {
    if (!value) return;
    const chartData = this.chartData();
    const range = this.range();
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
      const theme = this.store.selectSignal(selectTheme)();
      const stroke = window.getComputedStyle(this.elementRef.nativeElement).color;
      this.uplot?.axes.forEach((a) => (a.stroke = () => stroke));
      this.uplot?.redraw(false);
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
      const barColor = 'rgb(126, 203, 32)';
      this.uplot = new uPlot(
        {
          width: this.elementRef.nativeElement.offsetWidth,
          height: this.elementRef.nativeElement.offsetHeight - this.headerHeight,
          plugins: [timerTimelinePlugin({ barColor })],
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
              fill: barColor,
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
  ngOnChanges(changes: SimpleChanges) {
    const chartData = this.chartData();
    if (chartData && changes.chartData?.currentValue !== changes.chartData?.previousValue) {
      this.uplot?.setData(chartData);
    }
    if (changes.range) {
      this.setRange(changes.range.currentValue);
    }
  }
}
