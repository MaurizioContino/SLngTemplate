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
import { HbarsConfigComponent } from './hbars-config/hbars-config.component';
import { SingleValueComponent } from './single-value/single-value.component';


@NgModule({
  declarations: [
    NgSlDynamicchartsComponent,
    ChartDataSourceComponent,
    HPieComponent,
    HBarsComponent,
    HgaugeComponent,
    HlinesComponent,
    HradialComponent,
    HbarsConfigComponent,
    SingleValueComponent,

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
    HbarsConfigComponent,
    NgApexchartsModule,
    SingleValueComponent,

  ]
})
export class NgSlDynamicchartsModule { }
