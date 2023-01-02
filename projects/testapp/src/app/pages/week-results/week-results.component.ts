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
  constructor(private layout: SlLayoutsService) {

  }

  ngOnInit(): void {
    this.layout.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      if (v=='XSmall' || v=='Small' )
      {
        this.small = true;
      } else {
        this.small = false;
      }

    })


  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  fakeData(){
    const data = [];
    for(var i=1;i<53;i++) {
      const dt1 = this.weekToDate(2023, i);
      let dt2 = new Date(dt1);
      dt2.setDate(dt2. getDate() + 6);

      data.push({week: i, dtS: dt1, dtE: dt2})
    }
    return data;
  }

  weekToDate(year: number, week: number) {
    const days = 4 + 7 * (week - 1);
    const date = new Date(year, 0, days);
    return date;
  }

}
