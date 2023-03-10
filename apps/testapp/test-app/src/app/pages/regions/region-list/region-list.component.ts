import { ChangeDetectorRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Region } from '../../../models/Region';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionListComponent {

  @Input() items: Region[] = []
  @Output() SelectedChange = new EventEmitter<Region>();
  constructor(private cdr: ChangeDetectorRef) {}

  ItemSelected(row: Region){
    this.SelectedChange.emit(row);
  }

  AreeList(row: Region) {
    return row.Aree.filter(v=>v.deleted==false).map(v=>v.Name).join(', ');
  }
}
