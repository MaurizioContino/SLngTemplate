import { NgModule } from '@angular/core';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { SharedModule } from '../../shared.module';
import { ControlsModule } from '../../controls/controls.module';



@NgModule({
  declarations: [
    RegionsComponent,
    RegionListComponent,
    RegionDetailsComponent,

  ],
  imports: [
    SharedModule,
    RegionsRoutingModule,
    ControlsModule
  ]
})
export class RegionsModule {
}
