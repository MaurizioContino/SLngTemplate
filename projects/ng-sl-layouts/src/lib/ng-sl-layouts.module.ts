import { NgModule } from '@angular/core';
import { NgSlLayoutsComponent } from './ng-sl-layouts.component';

import { CommonModule } from '@angular/common';
import { SectionPainterComponent } from './section-painter/section-painter.component';



@NgModule({
  declarations: [
    NgSlLayoutsComponent,
    SectionPainterComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgSlLayoutsComponent,
  ]
})
export class NgSlLayoutsModule { }
