import { NgModule } from '@angular/core';

import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { Dashboard1Component } from './dashboard1.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    Dashboard1Component
  ],
  imports: [
    
    Dashboard1RoutingModule,
    SharedModule
  ]
})
export class Dashboard1Module { }
