import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DataListComponent } from './data-list.component';

@NgModule({
  declarations:[DataListComponent],
  imports: [CommonModule, NgScrollbarModule],
  exports:[DataListComponent]

})
export class SldatalistModule {}
