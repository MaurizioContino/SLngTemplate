import { NgModule } from '@angular/core';
import { NgSlLayoutsComponent } from './ng-sl-layouts.component';

import { LayoutXLComponent } from './layouts/layout-xl/layout-xl.component';
import { LayoutLComponent } from './layouts/layout-l/layout-l.component';
import { LayoutMComponent } from './layouts/layout-m/layout-m.component';
import { LayoutSComponent } from './layouts/layout-s/layout-s.component';
import { LayoutXsComponent } from './layouts/layout-xs/layout-xs.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgSlLayoutsComponent,
    LayoutXLComponent,
    LayoutLComponent,
    LayoutMComponent,
    LayoutSComponent,
    LayoutXsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgSlLayoutsComponent,
  ]
})
export class NgSlLayoutsModule { }
