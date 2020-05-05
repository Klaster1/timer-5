import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import 'chartjs-plugin-zoom';
import 'hammerjs';

export type TimelineChartDatum = {};

declare namespace Chart {
  interface ChartPluginsOptions {
    zoom: any;
  }
}

@Component({
  selector: 'timeline-chart',
  template: `<canvas #canvas></canvas>`,
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
export class TimelineChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas')
  canvas?: ElementRef<HTMLCanvasElement>;
  @Input()
  chartData: ChartData = { labels: [], datasets: [{ data: [] }] };
  chart?: Chart;
  ngAfterViewInit() {
    const ctx = this.canvas?.nativeElement.getContext('2d');
    if (!ctx) return;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 0 },
        hover: { animationDuration: 0 },
        responsiveAnimationDuration: 0,
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
            },
            zoom: {
              enabled: true,
              mode: 'x',
            },
          },
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Minutes',
              },
              ticks: {
                beginAtZero: true,
                callback(label, index, labels) {
                  return `${Math.floor(+label / (1000 * 60))}`;
                },
              },
            },
          ],
          xAxes: [
            {
              distribution: 'linear',
              type: 'time',
              time: {
                unit: 'hour',
                stepSize: 1,
              },
              ticks: {
                maxRotation: 45,
                minRotation: 45,
                sampleSize: 10,
              },
            },
          ],
        },
      },
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if ('chartData' in changes && this.chart) {
      const value = changes.chartData.currentValue;
      if (!!value) {
        this.chart?.data?.labels?.splice(0, this.chart?.data?.labels?.length ?? 0, ...value.labels);
        this.chart?.data?.datasets?.splice(0, this.chart?.data?.datasets?.length ?? 0, ...value.datasets);
        this.chart.update();
      } else {
      }
    }
  }
}
