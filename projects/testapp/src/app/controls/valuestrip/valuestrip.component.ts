import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-valuestrip',
  templateUrl: './valuestrip.component.html',
  styleUrls: ['./valuestrip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuestripComponent  implements OnInit, OnDestroy {
  @Input() config: DashboardItem | undefined
  destroy$ = new Subject();
  Data : number[]= [1, 2, 4, 8]

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.config!.icon = "BarChart.png"
    this.config!.width = 10;
    this.config!.height = 3;
    this.config!.Background = 'transparent'
    this.config?.ItemChanged$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      
      this.cdr.detectChanges();
    })
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
