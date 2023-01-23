import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashBoard.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SllayoutModule } from '@soloud/sllayout';
import { SlButtonModule } from '@soloud/slbutton';
import { DashboardPlacementComponent } from './controls/dashboard-placement/dashboard-placement.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DashboardElementComponent } from './controls/dashboard-element/dashboard-element.component';
import { DasboardListComponent } from './controls/dasboard-list/dasboard-list.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    DashboardPlacementComponent,
    DashboardElementComponent,
    DasboardListComponent
  ],
  imports: [CommonModule, FormsModule, DragDropModule, SllayoutModule, SlButtonModule, NgScrollbarModule],
  exports: [
    DashBoardComponent,
    DashboardPlacementComponent,
    DashboardElementComponent
  ]
})
export class SldashboardModule {}
