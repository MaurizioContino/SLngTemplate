import { NgModule } from '@angular/core';
import { NgSlLayoutsComponent } from './ng-sl-layouts.component';

import { CommonModule } from '@angular/common';
import { SectionPainterComponent } from './section-painter/section-painter.component';
import { DefaultMenuComponent } from './default-menu/default-menu.component';
import { DefaultTopbarComponent } from './default-topbar/default-topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NgSlLayoutsComponent,
    SectionPainterComponent,
    DefaultMenuComponent,
    DefaultTopbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NgSlLayoutsComponent,
    DefaultMenuComponent,
    DefaultTopbarComponent
  ]
})
export class NgSlLayoutsModule { }
