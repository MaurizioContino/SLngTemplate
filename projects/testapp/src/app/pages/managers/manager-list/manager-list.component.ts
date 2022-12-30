import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerListComponent {

  @Input() items: any[] = []
  @Output() SelectedChange = new EventEmitter();

  ItemSelected(row: any){
    this.SelectedChange.emit(row);
  }
}
