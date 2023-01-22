import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DashboardItem, DashboardItemStatus } from '@soloud/sldashboard';
import { Subject, takeUntil } from 'rxjs';
import { MonitorItem } from '../../models/Monitoritem';
import { MonitorItemtypesService } from '../../services/MonitorItemtypesService';

@Component({
  selector: 'app-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemValueComponent {

  @Input() view: DashboardItemStatus | undefined;

  destroy$ = new Subject();

  footer = ""

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.view && this.view.config)
    {
      if (this.view.config) {
        this.cdr.detectChanges();
        if (this.view.config!.customData == null)
        {
          this.view.config!.customData = {}
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
