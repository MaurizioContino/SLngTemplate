import { NgModule } from '@angular/core';


import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { SharedModule } from '../../shared.module';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ControlsModule } from '../../controls/controls.module';


@NgModule({
  declarations: [
    ManagersComponent,
    ManagerListComponent,
    ManagerDetailsComponent
  ],
  imports: [
    SharedModule,
    ManagersRoutingModule,
    ControlsModule
  ]
})
export class ManagersModule { }
