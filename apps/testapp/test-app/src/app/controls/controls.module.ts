import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCountComponent } from './charts/item-count/item-count.component';
import { ChartFilterComponent } from './charts/chart-filter/chart-filter.component';
import { DashboardChartHBarComponent } from '../controls/dashboard-chart-hbar/dashboard-chart-hbar.component';
import { ItemValueComponent } from './item-value/item-value.component';
import { SharedModule } from '../shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
@NgModule({

  declarations: [
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ItemValueComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ItemValueComponent,
    SearchBarComponent
  ]
})
export class ControlsModule { }
