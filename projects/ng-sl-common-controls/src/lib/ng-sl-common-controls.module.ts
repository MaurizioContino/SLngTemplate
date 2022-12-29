import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { DataListComponent } from './data-list/data-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    RoundedButtonComponent,
    DataListComponent
  ]
})
export class NgSlCommonControlsModule { }
