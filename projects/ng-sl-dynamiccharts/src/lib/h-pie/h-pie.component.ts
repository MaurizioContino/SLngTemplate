import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit } from '@angular/core';


import { ChartOptions, chartThemeColors } from '../apexcharts/ChartOptions';

@Component({
  selector: 'sl-hpie',
  templateUrl: './h-pie.component.html',
  styleUrls: ['./h-pie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HPieComponent implements OnInit, AfterViewInit {

  private _data: number[] = [];
  private _ShowDataLabel = false;
  private _ShowLegend = true;
  private _Horizontal = false;
  private _Donut = false;
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
  public get Donut() {
    return this._Donut;
  }
  public set Donut(value) {
    this._Donut = value;
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
    let sdata = this.data.map((v: any)=>{return v.data });
    sdata = sdata[0];
    for(var i = 0; i < sdata.length; i++) sdata[i] = parseFloat(sdata[i]);

    this.barChartOptions = {
      chart: {
        type: this.Donut ? 'donut' : 'pie',
        height: this.element.nativeElement.parentElement.parentElement.clientHeight * .95,
      },

      legend: {
        show: this.ShowLegend,
        showForSingleSeries: true,
        position: 'right',

        onItemClick: {
          toggleDataSeries: true
        },
      },
      colors: chartThemeColors,
      series: sdata,
      labels: this.categories,
    }
  }


}
