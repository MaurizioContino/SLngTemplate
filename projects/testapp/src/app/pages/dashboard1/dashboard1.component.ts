import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardConfigService, DashboardGrid } from 'ngslcommoncontrols';
import { Subject, takeUntil } from 'rxjs';
import { chartfilter } from '../../controls/charts/chart-filter/filterValues';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit, OnDestroy  {

  id = 0;
  listObject = ['uno', 'due', 'ciao 1', 'ciao 2']

  current: DashboardGrid | undefined;

  showYears = false;
  mainfilter: chartfilter = {fromweek: 1, toweek: 1, year: (new Date()).getFullYear(), reportType: 'weekly'}
  years:number[] = []
  currentYear = 0;
  destroy$ = new Subject();

  constructor(private dashboard: DashboardConfigService, private route: ActivatedRoute){}
  ngOnInit(): void {

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.id = +params['id'];

      if (!isNaN(this.id)) {

        this.dashboard.DashboardGrids$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
          const tmp = v.find(d=>d.Id==this.id)
          if (tmp) {
            this.current = new DashboardGrid();
            this.current.fromObject(tmp)
          }
        })
        this.dashboard.Load();
      }
    });
    this.years = [];
    this.currentYear = (new Date()).getFullYear();
    for(var i=0; i < 10; i++)
    {
      this.years.push(this.currentYear - i);
    }
  }

  LoadData() {

  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
