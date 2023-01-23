import { Component, Input, OnInit } from '@angular/core';
import { DashboardItem } from '@soloud/sldashboard';
import { MonitorResultItem } from '../../../models/MonitorResults';
import { chartfilter } from '../chart-filter/filterValues';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {


  @Input() data: MonitorResultItem[] = []
  @Input() config: DashboardItem | undefined;
  sum = 0
  monitorType: number = 0;
  filter: chartfilter | undefined= undefined


  ngOnInit(): void {
    this.monitorType = this.config?.customData.monitorType;
    this.filter = this.config?.customData.filter;
  }

  calculate() {
    var items: MonitorResultItem[] = [];
    if(this.filter !== undefined) {
      if (this.filter.reportType==='weekly') {
        items = this.data.filter(v=>
          v.year === this.filter!.year &&
          v.IdMonitorItem === this.monitorType &&
          v.Week === this.filter!.fromweek)
      }
      if (this.filter.reportType==='yearly') {
        items = this.data.filter(v=>v.year === this.filter!.year && v.IdMonitorItem === this.monitorType);
      }
      if (this.filter.reportType==='period') {
        items = this.data.filter(v=>v.year === this.filter!.year && v.IdMonitorItem === this.monitorType && v.Week >= this.filter!.fromweek && v.Week <= this.filter!.toweek)
      }
    }
    this.sum = items.map(v=>v.Value).reduce((a, b) => a + b, 0)
  }

}
