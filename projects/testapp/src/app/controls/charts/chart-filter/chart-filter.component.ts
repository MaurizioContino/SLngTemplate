import { Component, Input } from '@angular/core';
import { chartfilter } from './filterValues';

@Component({
  selector: 'app-chart-filter',
  templateUrl: './chart-filter.component.html',
  styleUrls: ['./chart-filter.component.scss']
})
export class ChartFilterComponent {
  @Input() filter: chartfilter | undefined= undefined
  
}
