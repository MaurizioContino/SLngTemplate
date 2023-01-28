import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SlButtonModule } from '@soloud/slbutton';
import { SllayoutModule } from '@soloud/sllayout';
import { SldatalistModule } from '@soloud/sldatalist';
import { SlavatarModule } from '@soloud/slavatar';
import { NgSelectModule } from '@ng-select/ng-select';
import { SldashboardModule } from '@soloud/sldashboard';

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
    SlavatarModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlButtonModule,
    NgScrollbarModule,
    SllayoutModule,
    SldatalistModule,
    SlavatarModule,
    NgSelectModule,
    SldashboardModule
  ]


})
export class SharedModule { }
