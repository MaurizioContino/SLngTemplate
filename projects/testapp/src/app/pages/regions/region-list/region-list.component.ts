import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionListComponent {

  @Input() items: any[] = []
  @Output() SelectedChange = new EventEmitter();

  ItemSelected(row: any){
    this.SelectedChange.emit(row);
  }
}
