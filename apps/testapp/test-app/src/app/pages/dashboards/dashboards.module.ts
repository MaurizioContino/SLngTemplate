import { NgModule } from '@angular/core';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { SharedModule } from '../../shared.module';
import { ControlsModule } from '../../controls/controls.module';


@NgModule({
  declarations: [
    DashboardsComponent,
    DashboardListComponent,
    DashboardDetailsComponent
  ],
  imports: [
    SharedModule,
    DashboardsRoutingModule,
    ControlsModule
  ]
})
export class DashboardsModule { }
