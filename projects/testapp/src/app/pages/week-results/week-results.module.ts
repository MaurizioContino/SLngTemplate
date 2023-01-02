import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekResultsRoutingModule } from './week-results-routing.module';
import { WeekResultsComponent } from './week-results.component';
import { WeekResultLargeComponent } from './week-result-large/week-result-large.component';
import { WeekResultSmallComponent } from './week-result-small/week-result-small.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    WeekResultsComponent,
    WeekResultLargeComponent,
    WeekResultSmallComponent
  ],
  imports: [
    CommonModule,
    WeekResultsRoutingModule,
    NgScrollbarModule
  ]
})
export class WeekResultsModule { }
