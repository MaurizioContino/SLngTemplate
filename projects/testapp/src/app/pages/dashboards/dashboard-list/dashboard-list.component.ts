import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardGrid } from 'ngslcommoncontrols';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  @Input() items: DashboardGrid[] = [];
  @Output() SelectedChange = new EventEmitter<DashboardGrid>();

  constructor(private cdr: ChangeDetectorRef) {}

  ItemSelected(row: DashboardGrid){
    this.SelectedChange.emit(row);
  }
}
