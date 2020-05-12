import {
  AfterViewInit,
  OnChanges,
  ViewChild,
  ElementRef,
  Input,
  Component,
  NgZone,
  OnDestroy,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import uPlot from 'uplot';
import { barWidths, formatHours } from '@app/domain/date';
import { NgResizeObserver, ngResizeObserverProviders } from 'ng-resize-observer';
import { map, tap } from 'rxjs/operators';
import { StoreState } from '@app/types';
import { Store } from '@ngrx/store';
import { theme } from '@app/ngrx/selectors';

type DrawFn = (i: number, x0: number, y0: number, offs: number, totalWidth: number) => void;

type PluginReturnValue = {
  opts?: (self: uPlot, opts: uPlot.Options) => void;
  hooks: uPlot.Hooks;
};

const timerTimelinePlugin = (): PluginReturnValue => {
  const draw = (u: uPlot) => {
    u.ctx.save();

    const seriesIndex = 1;
    const indexStart = 0;
    const indexEnd = u.data[0].length - 1;

    const fill = new Path2D();
    const scaleX = 'x';
    const scaleY = u.series[seriesIndex].scale!;
    const dataX = u.data[0];
    const dataY = u.data[1];
    const minX = u.valToPos(u.scales[scaleX].min!, scaleX, true);
    const minY = u.valToPos(u.scales[scaleY].min!, scaleY, true);
    const drawFromIndex = u.posToIdx(0);

    u.ctx.fillStyle = u.series[seriesIndex].fill ?? 'red';

    for (let i = indexStart; i <= indexEnd; i += 1) {
      if (i % 2 === 0) {
        const x0 = Math.max(minX, Math.round(u.valToPos(dataX[i]!, scaleX, true)));
        if (i < drawFromIndex - 1) continue;
        const x1 = Math.round(u.valToPos(dataX[i + 1]!, scaleX, true));
        const y0 = Math.round(u.valToPos(dataY[i]!, scaleY!, true));
        const y1 = minY;
        fill.rect(x0, y0, x1 - x0, y1 - y0);
      }
    }
    u.ctx.fill(fill);
    u.ctx.stroke(fill);

    u.ctx.restore();
  };
  return {
    opts(u, opts) {
      opts.series[1].paths = (() => null) as any;
      opts.series[1].points = { show: false } as any;
    },
    hooks: {
      draw: [draw],
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
  constructor(
    private store: Store<StoreState>,
    private elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private ro: NgResizeObserver
  ) {}
  @Input()
  chartData: [number, number][] = [];
  @Input()
  barWidth?: 'hour' | 'day' | 'month' | 'year';
  @Output()
  rangeChange = new EventEmitter<[Date, Date]>();
  private uplot?: uPlot;
  private readonly headerHeight = 31;
  dimensionsSubscriber = this.ro.subscribe((e) => {
    this.uplot?.setSize({ width: e.contentRect.width, height: e.contentRect.height - this.headerHeight });
  });
  themeSubscriber = this.store.select(theme).subscribe((theme) => {
    setTimeout(() => {
      const stroke = window.getComputedStyle(this.elementRef.nativeElement)['color'];
      this.uplot?.axes.forEach((a) => (a.stroke = stroke));
      this.uplot?.redraw(false);
    });
  });
  getLegendValue(value: number) {
    const scale = {
      hour: barWidths.minute,
      day: barWidths.hour,
      month: barWidths.hour,
      year: barWidths.hour,
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
                const scale = self.scales[key];
                if (key !== 'x' || !scale || typeof scale.min !== 'number' || typeof scale.max !== 'number') return;
                this.rangeChange.emit([new Date(scale.min * 1000), new Date(scale.max * 1000)]);
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
        this.chartData ?? [[0, 0]],
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
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.chartData) {
      this.uplot?.setData(this.chartData);
    }
    if (changes.barWidth && changes.barWidth.currentValue) {
      const ySeries = this.uplot?.axes[1];
      if (ySeries) ySeries.label = this.getLegendLabel();
    }
  }
  ngOnDestroy() {
    this.dimensionsSubscriber.unsubscribe();
    this.themeSubscriber.unsubscribe();
    this.uplot?.destroy();
  }
}
