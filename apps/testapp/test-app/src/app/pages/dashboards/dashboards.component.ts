import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardGrid } from '@soloud/sldashboard';
import { DashboardConfigService } from 'libs/sldashboard/sldashboard/src/lib/services/dashboard.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit, OnDestroy {

  DetailItem:DashboardGrid | null = null;
  items: DashboardGrid[] = []
  itemsCount = 0;
  destroy$ = new Subject();

  constructor(private dashboardconfServ: DashboardConfigService, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.dashboardconfServ.DashboardGrids$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
      this.cdr.detectChanges();
      console.log(v)
    })
    this.dashboardconfServ.Load();
  }

  SelectedChange(row: any){
    this.DetailItem = row
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  Add() {
    this.DetailItem = new DashboardGrid();
    this.DetailItem.isnew = true;
  }
}
