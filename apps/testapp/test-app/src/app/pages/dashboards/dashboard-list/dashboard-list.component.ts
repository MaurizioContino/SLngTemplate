import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Dashboard } from '@soloud/sldashboard';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  @Input() items: Dashboard[] = [];
  @Output() SelectedChange = new EventEmitter<Dashboard>();

  constructor(private cdr: ChangeDetectorRef) {}

  ItemSelected(row: Dashboard){
    this.SelectedChange.emit(row);
  }
}
