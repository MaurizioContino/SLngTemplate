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

import { NgSlLayoutsModule } from 'ngsllayouts';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabItemComponent } from './tab-header/tab-item/tab-item.component';
import { TabItemDirective } from './tab-header/tab-item.directive';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent,
    TabHeaderComponent,
    TabItemComponent,
    TabItemDirective,
    PanelComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    DragDropModule,
    NgSelectModule,
    NgSlLayoutsModule,
  ],
  exports: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent,
    TabHeaderComponent,
    TabItemComponent,
    TabItemDirective,
    PanelComponent,

  ]
})
export class NgSlCommonControlsModule { }
