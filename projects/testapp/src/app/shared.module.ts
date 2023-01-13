import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { NgSlCommonControlsModule } from 'projects/ng-sl-common-controls/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgSlDynamicchartsModule } from 'NgSlDynamiccharts';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSlLayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgSlDynamicchartsModule
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
