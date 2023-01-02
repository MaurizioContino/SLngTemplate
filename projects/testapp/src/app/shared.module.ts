import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSlLayoutsModule } from 'projects/ng-sl-layouts/src/public-api';
import { NgSlCommonControlsModule } from 'projects/ng-sl-common-controls/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSlLayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ],
  exports: [
    CommonModule,
    NgSlLayoutsModule,
    NgSlCommonControlsModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ]


})
export class SharedModule { }
