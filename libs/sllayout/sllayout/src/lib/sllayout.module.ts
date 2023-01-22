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

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HMasterDetailsComponent,
    SlBigHeaderComponent
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
    SlBigHeaderComponent
  ]
})
export class SllayoutModule {}
