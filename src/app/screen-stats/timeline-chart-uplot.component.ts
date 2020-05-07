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
} from '@angular/core';
import uPlot from 'uplot';
import { barWidths, formatHours } from '@app/domain/date';
import { NgResizeObserver, ngResizeObserverProviders } from 'ng-resize-observer';
import { map, tap } from 'rxjs/operators';
import { StoreState } from '@app/types';
import { Store } from '@ngrx/store';
import { theme } from '@app/ngrx/selectors';

type DrawFn = (i: number, x0: number, y0: number, offs: number, totalWidth: number) => void;

let barWidth = 1;

function drawThings(u: uPlot, sidx: number, i0: number, i1: number, draw: DrawFn) {
  const s = u.series[sidx];
  const xdata = u.data[0];
  const ydata = u.data[sidx];
  const scaleX = 'x';
  const scaleY = s.scale;

  const totalWidth = (u.series.length - 1) * barWidth; //.show
  const offs = (sidx - 1) * barWidth;

  for (let i = i0; i <= i1; i++) {
    let x0 = Math.round(u.valToPos(xdata[i]!, scaleX, true));
    let y0 = Math.round(u.valToPos(ydata[i]!, scaleY!, true));

    draw(i, x0, y0, offs, totalWidth);
  }
}

const drawBars: uPlot.Series['paths'] = (u: uPlot, sidx: number, i0: number, i1: number) => {
  const scaleY = u.series[sidx].scale;
  const zeroY = Math.round(u.valToPos(0, scaleY!, true));
  const fill = new Path2D();

  drawThings(u, sidx, i0, i1, (i, x0, y0, offs, totalWidth) => {
    fill.rect(x0 - totalWidth / 2 + offs, y0, barWidth, zeroY - y0);
  });

  return { fill };
};
const drawPoints = (self: uPlot, seriesIdx: number, idx0: number, idx1: number): boolean => {
  self.ctx.font = '8px Arial';
  self.ctx.textAlign = 'center';
  self.ctx.textBaseline = 'bottom';
  self.ctx.fillStyle = 'black';

  drawThings(self, seriesIdx, idx0, idx1, (i, x0, y0, offs, totalWidth) => {
    self.ctx.fillText(`${self.data[seriesIdx][i]}`, x0 - totalWidth / 2 + offs + barWidth / 2, y0);
  });
  return false;
};

@Component({
  selector: 'timeline-chart-uplot',
  template: `<canvas #canvas></canvas>`,
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
          hooks: {
            setScale: [
              (self: uPlot, key: string) => {
                if (key === 'x' && this.barWidth) {
                  const scale = self.scales[key];
                  const width = barWidths[this.barWidth] / 1000;
                  const hoursInViewport = (scale.max! - scale.min!) / width!;
                  const hourWidth = (self.width / hoursInViewport) * 0.75;
                  barWidth = Math.max(1, hourWidth);
                }
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
              // stroke: 'cyan',
              fill: 'red',
              width: 0,
              paths: drawBars,
              points: {
                show: false,
              } as any,
            },
          ],
          axes: [
            {},
            {
              scale: 'm',
              size: 50,
              label: this.getLegendLabel(),
              values: (self, ticks) => ticks.map((raw) => this.getLegendValue(raw)),
              // stroke: 'cyan',
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
