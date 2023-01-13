import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ElementRef } from '@angular/core'
import { ChartOptions, chartThemeColors } from '../apexcharts/ChartOptions'

@Component({
    selector: 'sl-hradial',
    templateUrl: './hradial.component.html',
    styleUrls: ['./hradial.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HradialComponent implements OnInit, AfterViewInit {
    private _data: number[] = []
    private _ShowDataLabel = false
    private _ShowLegend = true
    private _Horizontal = false
    private _Stacked = true
    private _categories: string[] = []
    private _xText = ''
    private _yText = ''
    private _TotalValue: number = 0
    barChartOptions: Partial<ChartOptions> | undefined

    @Input()
    public get ShowDataLabel() {
        return this._ShowDataLabel
    }
    public set ShowDataLabel(value) {
        this._ShowDataLabel = value
        this.setup()
    }
    @Input()
    public get Horizontal() {
        return this._Horizontal
    }
    public set Horizontal(value) {
        this._Horizontal = value
        this.setup()
    }
    @Input()
    public get ShowLegend() {
        return this._ShowLegend
    }
    public set ShowLegend(value) {
        this._ShowLegend = value
        this.setup()
    }
    @Input()
    public get Stacked() {
        return this._Stacked
    }
    public set Stacked(value) {
        this._Stacked = value
        this.setup()
    }
    @Input()
    public get data(): number[] {
        return this._data
    }
    public set data(value: number[]) {
        this._data = value
        this.setup()
    }
    @Input()
    public get categories(): string[] {
        return this._categories
    }
    public set categories(value: string[]) {
        this._categories = value
        this.setup()
    }
    @Input()
    public get xText() {
        return this._xText
    }
    public set xText(value) {
        this._xText = value
        this.setup()
    }
    @Input()
    public get yText() {
        return this._yText
    }
    public set yText(value) {
        this._yText = value
        this.setup()
    }

    @Input()

  public get TotalValue(): number {
    return this._TotalValue
  }
  public set TotalValue(value: number) {
    this._TotalValue = value;
    if (value>0) this.setup();
  }

    constructor(private element: ElementRef) {}

    ngOnInit(): void {}
    ngAfterViewInit(): void {
        this.setup()
    }

    setup() {
        let sdata = this.data.map((v: any) => {
            return v.data
        })
        if (this.TotalValue > 0) {
            if (sdata.length > 1) {
                const sub : any[] = []

                sdata.forEach((row) => {
                    let sum = 0
                    row.forEach((e: any) => {
                        sum += e
                    })
                    sub.push(((sum / this.TotalValue) * 100).toFixed(2))
                })
                sdata = sub
            } else {
                if (sdata.length > 0) {
                    sdata = sdata[0]
                    for (var i = 0; i < sdata.length; i++) sdata[i] = sdata[i] / this.TotalValue
                }
            }

            const that = this
            this.barChartOptions = {
                chart: {
                    type: 'radialBar',
                    height: this.element.nativeElement.parentElement.parentElement.clientHeight,
                },

                colors: chartThemeColors,

                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },

                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    return that.TotalValue.toFixed(0)
                                },
                            },
                        },
                    },
                },
                labels: this.categories,
                series: sdata,
                legend: {
                    show: this.ShowLegend,
                    showForSingleSeries: true,
                    position: 'top',

                    onItemClick: {
                        toggleDataSeries: true,
                    },
                },
            }
        }
    }
}
