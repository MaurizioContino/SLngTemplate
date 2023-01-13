import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ChartOptions, chartThemeColors } from '../apexcharts/ChartOptions';

@Component({
  selector: 'sl-hgauge',
  templateUrl: './hgauge.component.html',
  styleUrls: ['./hgauge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HgaugeComponent implements OnInit {


  private _data: number[] = [];
  private _ShowDataLabel = false;
  private _ShowLegend = true;
  private _Horizontal = false;
  private _categories: string[] = [];
  private _xText = "";
  private _yText = "";

  barChartOptions : Partial<ChartOptions> | undefined;



  @Input()
  public get ShowDataLabel() {
    return this._ShowDataLabel;
  }
  public set ShowDataLabel(value) {
    this._ShowDataLabel = value;
    this.setup();
  }
  @Input()
  public get Horizontal() {
    return this._Horizontal;
  }
  public set Horizontal(value) {
    this._Horizontal = value;
    this.setup();
  }
  @Input()
    public get ShowLegend() {
    return this._ShowLegend;
  }
  public set ShowLegend(value) {
    this._ShowLegend = value;
    this.setup();
  }
  @Input()
    public get data(): number[] {
    return this._data;
  }
  public set data(value: number[]) {
    this._data = value;
    this.setup();
  }
  @Input()
  public get categories(): string[] {
    return this._categories;
  }
  public set categories(value: string[]) {
    this._categories = value;
    this.setup();
  }
  @Input()
  public get xText() {
    return this._xText;
  }
  public set xText(value) {
    this._xText = value;
    this.setup();
  }
  @Input()
  public get yText() {
    return this._yText;
  }
  public set yText(value) {
    this._yText = value;
    this.setup();
  }

  constructor() { }

  ngOnInit(): void {
    this.setup();

  }
  setup() {

    this.barChartOptions = {
      chart: {
        type: 'donut'
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: -10,

        },

      },
      legend: {
        offsetY: 0,
        show: this.ShowLegend,
        showForSingleSeries: true,
        position: 'top',
        onItemClick: {
          toggleDataSeries: true
        },
      },
      colors: chartThemeColors,
      series: this.data,
      labels: this.categories,
    }
  }

  ApplyVariables(value: string): string {
    if (value) {
    return value
            .replace("@total", (this.data[0] + this.data[1]).toString())
            .replace("@value", this.data[0].toString())
            .replace("@perc", (this.data[0] / (this.data[0] + this.data[1]) * 100).toFixed(2) + "%");
    } else {
      return "";
    }
  }

}
