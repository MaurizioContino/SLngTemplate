import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { DataListComponent } from './data-list/data-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';




@NgModule({
  declarations: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent,
    AvatarComponent
  ]
})
export class NgSlCommonControlsModule { }
