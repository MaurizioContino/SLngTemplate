import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHeaderComponent } from '../controls/details-header/details-header.component';
import { SharedModule } from '../shared.module';



@NgModule({

  declarations: [
    DetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DetailsHeaderComponent
  ]
})
export class ControlsModule { }
