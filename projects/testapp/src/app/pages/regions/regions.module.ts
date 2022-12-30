import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    RegionsComponent,
    RegionListComponent,
    RegionDetailsComponent
  ],
  imports: [
    SharedModule,
    RegionsRoutingModule
  ]
})
export class RegionsModule { }
