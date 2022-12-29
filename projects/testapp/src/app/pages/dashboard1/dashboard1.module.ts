import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { Dashboard1Component } from './dashboard1.component';


@NgModule({
  declarations: [
    Dashboard1Component
  ],
  imports: [
    CommonModule,
    Dashboard1RoutingModule
  ]
})
export class Dashboard1Module { }
