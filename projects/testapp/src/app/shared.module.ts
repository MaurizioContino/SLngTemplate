import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgSlDynamicchartsModule } from 'NgSlDynamiccharts';
import { NgSlCommonControlsModule } from 'ngslcommoncontrols';
import { NgSlLayoutsModule } from 'ngsllayouts';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSlLayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgSlDynamicchartsModule,
    NgSlCommonControlsModule
  ],
  exports: [
    CommonModule,
    NgSlLayoutsModule,
    NgSlCommonControlsModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgSlDynamicchartsModule
  ]


})
export class SharedModule { }
