import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { HMasterDetailsComponent } from './components/hmaster-details/hmaster-details.component';
import { RouterModule } from '@angular/router';
import { SlBigHeaderComponent } from './components/sl-big-header/sl-big-header.component';
import { SlButtonModule } from '@soloud/slbutton';
import { SlavatarModule } from '@soloud/slavatar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SlSmallHeaderComponent } from './components/sl-small-header/sl-small-header.component';
import { SlCardComponent } from './components/sl-card/sl-card.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HMasterDetailsComponent,
    SlBigHeaderComponent,
    SlSmallHeaderComponent,
    SlCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlButtonModule,
    SlavatarModule,
    NgScrollbarModule
  ],
  exports: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HMasterDetailsComponent,
    SlBigHeaderComponent,
    SlSmallHeaderComponent,
    SlCardComponent
  ]
})
export class SllayoutModule {}
