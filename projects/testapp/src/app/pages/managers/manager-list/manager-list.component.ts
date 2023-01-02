import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from '../../../models/Manager';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerListComponent {

  @Input() items: Manager[] = [];
  @Output() SelectedChange = new EventEmitter<Manager>();

  constructor(private cdr: ChangeDetectorRef) {}

  ItemSelected(row: Manager){
    this.SelectedChange.emit(row);
  }
}
