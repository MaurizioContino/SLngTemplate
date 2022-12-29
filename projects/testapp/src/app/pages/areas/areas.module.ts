import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';


@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
