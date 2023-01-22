import { NgModule } from '@angular/core';

import { WeekResultsRoutingModule } from './week-results-routing.module';
import { WeekResultsComponent } from './week-results.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from '../../shared.module';
import { ControlsModule } from '../../controls/controls.module';
import { WeekResultListComponent } from './week-result-list/week-result-list.component';
import { WeekResultDetailsComponent } from './week-result-details/week-result-details.component';
import { SllayoutModule } from '@soloud/sllayout';


@NgModule({
  declarations: [
    WeekResultsComponent,
    WeekResultListComponent,
    WeekResultDetailsComponent,

  ],
  imports: [

    SharedModule,
    ControlsModule,
    WeekResultsRoutingModule,
    NgScrollbarModule,

  ]
})
export class WeekResultsModule { }
