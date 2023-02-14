import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AvatarModule } from 'primeng/avatar';

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
    AvatarModule,
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
    AvatarModule,
    NgSelectModule,
    SldashboardModule,
    ButtonModule
  ]


})
export class SharedModule { }
