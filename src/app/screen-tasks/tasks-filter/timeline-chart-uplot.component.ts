import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { barWidths, formatHours } from '@app/domain/date';
import { theme } from '@app/ngrx/selectors';
import { StoreState } from '@app/types';
import { assertNever } from '@app/types/assert-never';
import { Store } from '@ngrx/store';
import { NgResizeObserver, ngResizeObserverProviders } from 'ng-resize-observer';
import uPlot, { AlignedData, Hooks, Options } from 'uplot';

type DrawFn = (i: number, x0: number, y0: number, offs: number, totalWidth: number) => void;

type PluginReturnValue = {
  opts?: (self: uPlot, opts: Options) => void;
  hooks: Hooks.Defs;
};

const timerTimelinePlugin = (): PluginReturnValue => {
  const draw = (u: uPlot) => {
    u.ctx.save();

    const seriesIndex = 1;
    const indexStart = 0;
    const indexEnd = u.data[0].length - 1;

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
    if (typeof xMin !== 'number') return;
    if (typeof yMin !== 'number') return;
    const minX = u.valToPos(xMin, scaleX, true);
    const minY = u.valToPos(yMin, scaleY, true);
    const drawFromIndex = u.posToIdx(0);

    u.ctx.fillStyle = series.fill ?? 'red';

    for (let i = indexStart; i <= indexEnd; i += 1) {
      if (i % 2 === 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const x0 = Math.max(minX, Math.round(u.valToPos(dataX[i]!, scaleX, true)));
        if (i < drawFromIndex - 1) {
          continue;
        }
        const valueX = dataX[i + 1];
        const valueY = dataY?.[i];
        if (typeof valueX !== 'number') return;
        if (typeof valueY !== 'number') return;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const x1 = Math.round(u.valToPos(valueX, scaleX, true));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    opts: (u, opts) => {
      const series = opts.series[1];
      if (!series) return;
      series.paths = (() => null) as any;
      series.points = { show: false } as any;
    },
    hooks: {
      draw,
    },
  };
};

@Component({
  selector: 'timeline-chart-uplot',
  template: `<canvas #canvas></canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ngResizeObserverProviders],
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      canvas {
        width: 100% !important;
        height: 100% !important;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    `,
  ],
})
export class TimelineChartUplotComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() chartData?: AlignedData;
  @Input() barWidth?: 'hour' | 'day' | 'month' | 'year';
  @Input() set range(value: [Date | null, Date | null]) {
    const oldMin = Math.round(this.uplot?.scales.x?.min ?? -1);
    const oldMax = Math.round(this.uplot?.scales.x?.max ?? -1);
    const dataMin = this.chartData?.[0]?.[0];
    const dataMax = this.chartData?.[0][this.chartData?.[0].length - 1];
    const newMin =
      value[0] instanceof Date
        ? Math.round(value[0].valueOf() / 1000)
        : typeof dataMin === 'number'
        ? dataMin
        : Date.now() / 1000;
    const newMax =
      value[1] instanceof Date
        ? Math.round(value[1].valueOf() / 1000)
        : typeof dataMax === 'number'
        ? dataMax
        : Date.now() / 1000;
    if (oldMin === newMin && oldMax === newMax) return;
    this.uplot?.setScale('x', { min: newMin, max: newMax });
  }
  @Output() rangeChange = new EventEmitter<[Date, Date]>();
  private firstRangeChangeSkipped = false;
  private uplot?: uPlot;
  private readonly headerHeight = 31;
  dimensionsSubscriber = this.ro.subscribe((e) => {
    this.uplot?.setSize({ width: e.contentRect.width, height: e.contentRect.height - this.headerHeight });
  });
  themeSubscriber = this.store.select(theme).subscribe((theme) => {
    setTimeout(() => {
      const stroke = window.getComputedStyle(this.elementRef.nativeElement).color;
      this.uplot?.axes.forEach((a) => (a.stroke = stroke));
      this.uplot?.redraw(false);
    });
  });
  constructor(
    private store: Store<StoreState>,
    private elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private ro: NgResizeObserver
  ) {}
  getLegendValue(value: number) {
    const scale = {
      hour: barWidths.minute,
      day: barWidths.hour,
      month: barWidths.hour,
      year: barWidths.hour,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    }[this.barWidth!];
    return value ? formatHours(value) : '--:--';
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.uplot = new uPlot(
        {
          width: this.elementRef.nativeElement.offsetWidth,
          height: this.elementRef.nativeElement.offsetHeight - this.headerHeight,
          plugins: [timerTimelinePlugin()],
          hooks: {
            setScale: [
              (self: uPlot, key: string) => {
                if (!this.firstRangeChangeSkipped) {
                  this.firstRangeChangeSkipped = true;
                  return;
                }
                const scale = self.scales[key];
                if (key !== 'x' || !scale || typeof scale.min !== 'number' || typeof scale.max !== 'number') {
                  return;
                }
                const event: [Date, Date] = [new Date(scale.min * 1000), new Date(scale.max * 1000)];
                this.ngZone.runTask(() => {
                  this.rangeChange.emit(event);
                });
              },
            ],
          },
          scales: {
            m: {
              auto: true,
            },
          },
          series: [
            {},
            {
              show: true,
              label: this.getLegendLabel(),
              scale: 'm',
              value: (self, value) => this.getLegendValue(value),
              fill: 'rgb(126, 203, 32)',
            },
          ],
          axes: [
            {},
            {
              scale: 'm',
              size: 50,
              label: this.getLegendLabel(),
              values: (self, ticks) => ticks.map((raw) => this.getLegendValue(raw)),
            },
          ],
        },
        this.chartData,
        this.elementRef.nativeElement
      );
    });
  }
  getLegendLabel() {
    switch (this.barWidth) {
      case 'hour':
        return 'Minutes';
      case 'day':
      case 'month':
      case 'year':
        return 'Hours';
      case undefined:
        return undefined;
      default:
        return assertNever(this.barWidth);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.chartData && changes.chartData?.currentValue !== changes.chartData?.previousValue) {
      this.uplot?.setData(this.chartData);
    }
    if (changes.barWidth && changes.barWidth.currentValue) {
      const ySeries = this.uplot?.axes[1];
      if (ySeries) {
        ySeries.label = this.getLegendLabel();
      }
    }
  }
  ngOnDestroy() {
    this.dimensionsSubscriber.unsubscribe();
    this.themeSubscriber.unsubscribe();
    this.uplot?.destroy();
  }
}
