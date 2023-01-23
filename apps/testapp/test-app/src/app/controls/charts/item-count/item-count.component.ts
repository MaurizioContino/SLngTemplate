import { Component, Input } from '@angular/core';
import { IDashboardItem } from '@soloud/sldashboard';
import { MonitorResultItem } from '../../../models/MonitorResults';
import { chartfilter } from '../chart-filter/filterValues';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent  {


  @Input() data: MonitorResultItem[] = []
  @Input() config: IDashboardItem | undefined;
  sum = 0

  filter: chartfilter | undefined= undefined



}
