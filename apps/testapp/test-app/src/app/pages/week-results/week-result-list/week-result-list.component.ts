import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-week-result-list',
  templateUrl: './week-result-list.component.html',
  styleUrls: ['./week-result-list.component.scss']
})
export class WeekResultListComponent {

  @Input() Items: any[] = [];
  @Output() SelectedChange = new EventEmitter<any>();

  ItemSelected(row: any){
    this.SelectedChange.emit(row);
  }
}
