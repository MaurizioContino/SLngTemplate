import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-week-results',
  templateUrl: './week-results.component.html',
  styleUrls: ['./week-results.component.scss']
})
export class WeekResultsComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  small = false;
  DetailItem: any;
  constructor() {

  }

  ngOnInit(): void {


  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  SelectedChange(row: any){
    this.DetailItem = row
  }
  fakeData(){
    const data = [];
    for(var i=1;i<53;i++) {
      const dt1 = this.weekToDate(2023, i);
      let dt2 = new Date(dt1);
      dt2.setDate(dt2. getDate() + 6);

      data.push({week: i, dtS: dt1, dtE: dt2,
        Aperte: 12,
        ToolBox_Aperte: 10,
        Sepa_aperte: 10,
        Business: 2,
        Sepa_Business: 1,
        NonOperative: 0,
        Sepa_non_operative: 1,
        Pross_apertura: 4,
        Toolbox_pa: 2,
        Sepa_pa: 0,
        Sepa_Attivi: 14,
        Toolbox_Attivi: 21
      })
    }
    return data;
  }

  weekToDate(year: number, week: number) {
    const days = 4 + 7 * (week - 1);
    const date = new Date(year, 0, days);
    return date;
  }

}
