import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SllayoutModule } from '@soloud/sllayout';
import { SldatalistModule } from '@soloud/sldatalist';

import { NgSelectModule } from '@ng-select/ng-select';
import { SldashboardModule } from '@soloud/sldashboard';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgScrollbarModule,
    SllayoutModule,
    SldatalistModule,

    NgSelectModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgScrollbarModule,
    SllayoutModule,
    SldatalistModule,

    NgSelectModule,
    SldashboardModule,
    ButtonModule
  ]


})
export class SharedModule { }
