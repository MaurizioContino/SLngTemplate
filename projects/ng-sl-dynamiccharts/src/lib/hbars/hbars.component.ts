import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ApexChart } from 'ng-apexcharts';

import { ChartOptions, chartThemeColors } from '../apexcharts/ChartOptions';

@Component({
  selector: 'sl-hbars',
  templateUrl: './hbars.component.html',
  styleUrls: ['./hbars.component.css']
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
    if (this.barChartOptions) {
    this.barChartOptions = JSON.parse(JSON.stringify(this.barChartOptions))
    }
    this.cdr.detectChanges()

  }
  @Input()
  public get categories(): string[] {
    return this._categories;
  }
  public set categories(value: string[]) {
    this._categories = value;

  }
  @Input()
  public get xText() {
    return this._xText;
  }
  public set xText(value) {
    this._xText = value;

  }
  @Input()
  public get yText() {
    return this._yText;
  }
  public set yText(value) {
    this._yText = value;

  }

  chartOptions = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    chart: {
      type: "bar",
      //height: 100
    } as ApexChart,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val: any) {
          return "$ " + val + " thousands";
        }
      }
    }
  };


  constructor(private element: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setup();
  }
  ngAfterViewInit(): void {

    this.chartOptions.chart.height = this.element.nativeElement.parentElement.clientHeight;
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
      } ,
      colors: chartThemeColors,
      plotOptions: {
        bar: {
          horizontal: this.Horizontal,
        }
      },
      dataLabels: {
        enabled: this.ShowDataLabel
      },
      series:  this.data, //this.data.map((v: any)=>{return  }),
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
