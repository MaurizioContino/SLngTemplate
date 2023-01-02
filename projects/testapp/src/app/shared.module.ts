import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { NgSlCommonControlsModule } from 'projects/ng-sl-common-controls/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSlLayoutsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NgSlLayoutsModule,
    NgSlCommonControlsModule,
    FormsModule,
    ReactiveFormsModule
  ]


})
export class SharedModule { }
