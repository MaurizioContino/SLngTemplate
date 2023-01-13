import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit } from '@angular/core';

import { ChartOptions, chartThemeColors } from '../apexcharts/ChartOptions';

@Component({
  selector: 'sl-hbars',
  templateUrl: './hbars.component.html',
  styleUrls: ['./hbars.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HBarsComponent implements OnInit, AfterViewInit {



  private _data: number[] = [];
  private _ShowDataLabel = false;
  private _ShowLegend = true;
  private _Horizontal = false;
  private _Stacked = true;
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
  public get Stacked() {
    return this._Stacked;
  }
  public set Stacked(value) {
    this._Stacked = value;
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

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.setup();
  }
  setup() {
    this.barChartOptions = {
      chart: {
        type: 'bar',
        stacked: this.Stacked,
        height: this.element.nativeElement.parentElement.parentElement.clientHeight,
      },
      legend: {
        show: this.ShowLegend,
        showForSingleSeries: true,
        position: 'top',
        onItemClick: {
          toggleDataSeries: true
        },
      },
      colors: chartThemeColors,
      plotOptions: {
        bar: {
          horizontal: this.Horizontal,
        }
      },
      dataLabels: {
        enabled: this.ShowDataLabel
      },
      series: this.data.map((v: any)=>{return {name: v.label, data: v.data} }),
      xaxis: {
        categories: this.categories,
        tickAmount: this.categories.length,
        title: {
          text: this.xText
        }
      },
      yaxis: {
        tickAmount: this.data.length,
        title: {
          text: this.yText
        }
      }
    }
  }

}
