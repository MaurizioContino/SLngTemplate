import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardConfigService, DashboardGrid } from 'ngslcommoncontrols';
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

  constructor(private dashboard: DashboardConfigService, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.dashboard.DashboardGrids$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
      this.cdr.detectChanges();
      console.log(v)
    })
    this.dashboard.Load();
  }

  SelectedChange(row: any){
    this.DetailItem = row
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
