import { NgModule } from '@angular/core';
import { NgSlLayoutsComponent } from './ng-sl-layouts.component';

import { CommonModule } from '@angular/common';
import { DefaultMenuComponent } from './default-menu/default-menu.component';
import { DefaultTopbarComponent } from './default-topbar/default-topbar.component';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { HMasterDetailsComponent } from './layouts/hmaster-details/hmaster-details.component';



@NgModule({
  declarations: [
    NgSlLayoutsComponent,
    DefaultMenuComponent,
    DefaultTopbarComponent,
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HMasterDetailsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NgSlLayoutsComponent,
    DefaultMenuComponent,
    DefaultTopbarComponent,
    HMasterDetailsComponent
  ]
})
export class NgSlLayoutsModule { }
