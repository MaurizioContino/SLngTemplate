import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSlMenuComponent } from './ng-sl-menu.component';
import { NgSlMenuService } from './ng-sl-menu.service';



@NgModule({
  declarations: [
    NgSlMenuComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    NgSlMenuComponent
  ]
})
export class NgSlMenuModule {

  constructor(public mnuService: NgSlMenuService){

  }

}
