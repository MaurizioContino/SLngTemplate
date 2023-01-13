import { NgModule } from '@angular/core';
import { NgSlDynamicchartsComponent } from './ng-sl-dynamiccharts.component';
import { ChartDataSourceComponent } from './chart-data-source/chart-data-source.component';
import { HPieComponent } from './h-pie/h-pie.component';
import { HBarsComponent } from './hbars/hbars.component';
import { HgaugeComponent } from './hgauge/hgauge.component';
import { HlinesComponent } from './hlines/hlines.component';
import { HradialComponent } from './hradial/hradial.component';
import { NgApexchartsModule } from 'ng-apexcharts'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgSlDynamicchartsComponent,
    ChartDataSourceComponent,
    HPieComponent,
    HBarsComponent,
    HgaugeComponent,
    HlinesComponent,
    HradialComponent,

  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    HPieComponent,
    HBarsComponent,
    HgaugeComponent,
    HlinesComponent,
    HradialComponent,
  ]
})
export class NgSlDynamicchartsModule { }
