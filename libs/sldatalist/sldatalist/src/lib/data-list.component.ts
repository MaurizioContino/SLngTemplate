import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';


import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sl-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataListComponent {
  @ContentChild('rowhead') rowhead: TemplateRef<any> | null = null;
  @ContentChild('rowmain') rowmain: TemplateRef<any> | null = null;
  @ContentChild('rowtail') rowtail: TemplateRef<any> | null = null;

  isSmall = false;
  destroy$:Subject<any> = new Subject()
  @Input() Items: any[] = [];
  @Output() SelectedChange = new EventEmitter()
  constructor() {

  }
  ngOnInit(): void {

  }
  itemclick(row: any) {
    this.SelectedChange.emit(row)
  }
}
