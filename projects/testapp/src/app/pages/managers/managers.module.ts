import { NgModule } from '@angular/core';


import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    ManagersComponent
  ],
  imports: [
    SharedModule,
    ManagersRoutingModule
  ]
})
export class ManagersModule { }
