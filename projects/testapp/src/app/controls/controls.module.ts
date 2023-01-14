import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHeaderComponent } from '../controls/details-header/details-header.component';
import { SharedModule } from '../shared.module';
import { ItemCountComponent } from './charts/item-count/item-count.component';
import { ChartFilterComponent } from './charts/chart-filter/chart-filter.component';
import { NgSlDynamicchartsModule } from 'NgSlDynamiccharts';
import { DashboardChartHBarComponent } from '../controls/dashboard-chart-hbar/dashboard-chart-hbar.component';
import { ValuestripComponent } from './valuestrip/valuestrip.component'
@NgModule({

  declarations: [
    DetailsHeaderComponent,
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ValuestripComponent
  ],
  imports: [
    CommonModule,
    NgSlDynamicchartsModule,
    SharedModule
  ],
  exports:[
    DetailsHeaderComponent,
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ValuestripComponent

  ]
})
export class ControlsModule { }
