import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { NgSlLayoutsModule } from 'ngsllayouts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    DragDropModule,
    NgSelectModule,
    NgSlLayoutsModule
  ],
  exports: [
    DashBoardComponent
  ]
})
export class SlDashboardsModule { }
