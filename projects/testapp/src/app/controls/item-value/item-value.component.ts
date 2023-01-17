import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';
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

  @Input() config: DashboardItem | undefined
  destroy$ = new Subject();
  data : number[]= []
  operations = ['Ultimo', 'Media', 'Somma']
  ItemTypes: MonitorItem[] = []
  ItemValueParameters: any = null;

  constructor(private cdr: ChangeDetectorRef, public itemtypessrv: MonitorItemtypesService) {

  }

  ngOnInit(): void {
    if (this.config) {

      this.config!.icon = "BarChart.png"
      this.config.ShowTitle = false;

      if (this.config!.customData == null)
      {
        this.config!.customData = {}
      }


      this.ItemValueParameters = null;
      if (this.config.customData.ItemValueParameters == null) {
        this.ItemValueParameters = {itemtype: null}
        this.config!.customData["ItemValueParameters"] = this.ItemValueParameters
      } else {
        this.ItemValueParameters = this.config!.customData.ItemValueParameters;
      }


      this.config.ItemChanged$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
        this.data = [1]
        this.cdr.detectChanges();
      })
    }
    this.itemtypessrv.results$.subscribe(types=>{
      this.ItemTypes = types;
    })

    this.itemtypessrv.Load();
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
