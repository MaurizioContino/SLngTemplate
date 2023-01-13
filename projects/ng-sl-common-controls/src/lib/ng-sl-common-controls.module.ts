import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { DataListComponent } from './data-list/data-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';

import { DashBoardConfigComponent } from './dashBoardConfig/dashBoardConfig.component'
import { NgSlLayoutsModule } from 'ngsllayouts';



@NgModule({
  declarations: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent,
    DashBoardConfigComponent
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
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent,
    DashBoardConfigComponent
  ]
})
export class NgSlCommonControlsModule { }
