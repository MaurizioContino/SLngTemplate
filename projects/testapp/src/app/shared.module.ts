import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { NgSlCommonControlsModule } from 'projects/ng-sl-common-controls/src/public-api';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSlLayoutsModule,
  ],
  exports: [
    CommonModule,
    NgSlLayoutsModule,
    NgSlCommonControlsModule
  ]


})
export class SharedModule { }
