import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekResultsComponent } from './week-results.component';

const routes: Routes = [{ path: '', component: WeekResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekResultsRoutingModule {

}
