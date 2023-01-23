import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHeaderComponent } from '../controls/details-header/details-header.component';
import { SharedModule } from '../shared.module';
import { ItemCountComponent } from './charts/item-count/item-count.component';
import { ChartFilterComponent } from './charts/chart-filter/chart-filter.component';
import { NgSlDynamicchartsModule } from 'NgSlDynamiccharts';
import { DashboardChartHBarComponent } from '../controls/dashboard-chart-hbar/dashboard-chart-hbar.component';
import { ItemValueComponent } from './item-value/item-value.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SourceSelectorComponent } from './source-selector/source-selector.component';
import { LastVsPrevValueComponent } from './last-vs-prev-value/last-vs-prev-value.component';
@NgModule({

  declarations: [
    DetailsHeaderComponent,
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ItemValueComponent,
    SourceSelectorComponent,
    LastVsPrevValueComponent,
  ],
  imports: [
    CommonModule,
    NgSlDynamicchartsModule,
    SharedModule,
    NgSelectModule
  ],
  exports:[
    DetailsHeaderComponent,
    ItemCountComponent,
    ChartFilterComponent,
    DashboardChartHBarComponent,
    ItemValueComponent,

  ]
})
export class ControlsModule { }
