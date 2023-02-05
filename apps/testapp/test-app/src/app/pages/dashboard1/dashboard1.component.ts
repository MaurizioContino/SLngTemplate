import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from '@soloud/sldashboard';
import { Subject, takeUntil } from 'rxjs';
import { chartfilter } from '../../controls/charts/chart-filter/filterValues';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit, OnDestroy  {

  id = 0;

  current!: Dashboard;

  showYears = false;
  mainfilter: chartfilter = {fromweek: 1, toweek: 1, year: (new Date()).getFullYear(), reportType: 'weekly'}
  years:number[] = []
  currentYear = 0;
  destroy$ = new Subject();

  constructor(private dashboard: DashboardService, private route: ActivatedRoute){}
  ngOnInit(): void {

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.id = +params['id'];

      if (!isNaN(this.id)) {

        this.dashboard.DashboardGrids$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
          const tmp = v.find(d=>d.Id==this.id)
          if (tmp) {
            const dashboard =  new Dashboard();
            dashboard.fromObject(tmp);
            this.current = dashboard;
          }
        })
        //this.dashboard.Load(true);
      }
    });
    this.years = [];
    this.currentYear = (new Date()).getFullYear();
    // for(var i=0; i < 10; i++)
    // {
    //   this.years.push(this.currentYear - i);
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
