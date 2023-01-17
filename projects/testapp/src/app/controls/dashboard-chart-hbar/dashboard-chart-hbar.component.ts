
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sl-dashboard-chart-hbar',
  templateUrl: './dashboard-chart-hbar.component.html',
  styleUrls: ['./dashboard-chart-hbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardChartHBarComponent implements OnInit, OnDestroy {

  @Input() config: DashboardItem | undefined
  destroy$ = new Subject();
  data : number[]= []
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.config) {
      //this.config = DashboardItem.fromItem(this.config);
      this.config!.icon = "BarChart.png"

      this.config?.ItemChanged$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
        this.data = [1]
        this.cdr.detectChanges();
      })
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
