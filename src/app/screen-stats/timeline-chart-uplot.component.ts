import { AfterViewInit, OnChanges, ViewChild, ElementRef, Input, Component, NgZone, OnDestroy } from '@angular/core';
import uPlot from 'uplot';
import { barWidths } from '@app/domain/date';
import { NgResizeObserver, ngResizeObserverProviders } from 'ng-resize-observer';
import { map, tap } from 'rxjs/operators';

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
  constructor(private elementRef: ElementRef<HTMLElement>, private ngZone: NgZone, private ro: NgResizeObserver) {}
  @Input()
  chartData: [number, number][] = [];
  @Input()
  barWidth?: 'hour' | 'day' | 'month' | 'year';
  private uplot?: uPlot;
  private readonly headerHeight = 31;
  dimensionsSubscriber = this.ro.subscribe((e) => {
    this.uplot?.setSize({ width: e.contentRect.width, height: e.contentRect.height - this.headerHeight });
  });
  getYAxisLabel(value: number) {
    const scale = {
      hour: barWidths.minute,
      day: barWidths.hour,
      month: barWidths.hour,
      year: barWidths.hour,
    }[this.barWidth!];
    return Math.round(100 * (value / scale)) / 100;
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
              label: 'Minutes',
              scale: 'm',
              value: (self, value) => this.getYAxisLabel(value),
              stroke: 'cyan',
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
              size: 150,
              label: 'Minutes',
              values: (self, ticks) => ticks.map((raw) => this.getYAxisLabel(raw)),
            },
          ],
        },
        this.chartData ?? [[0, 0]],
        this.elementRef.nativeElement
      );
    });
  }
  ngOnChanges() {
    if (this.chartData) {
      this.uplot?.setData(this.chartData);
    }
  }
  ngOnDestroy() {
    this.dimensionsSubscriber.unsubscribe();
    this.uplot?.destroy();
  }
}
