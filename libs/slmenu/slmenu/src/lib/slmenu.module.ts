import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { DefaultMenuComponent } from './default-menu/default-menu.component';
import { DefaultTopbarComponent } from './default-topbar/default-topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    DefaultMenuComponent,
    DefaultTopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,

  ],
  exports: [
    DefaultMenuComponent,
    DefaultTopbarComponent
  ]
})
export class SlmenuModule {}
