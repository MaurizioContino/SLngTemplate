import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemValueComponent {

  @Input() config: DashboardItem | undefined
  destroy$ = new Subject();
  data : number[]= []
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.config!.icon = "BarChart.png"

    this.config?.ItemChanged$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.data = [1]
      this.cdr.detectChanges();
    })


    
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
