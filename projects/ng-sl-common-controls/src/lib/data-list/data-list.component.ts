import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { SlLayoutsService } from 'ngsllayouts';

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
  constructor(private srLayout: SlLayoutsService) {

  }
  ngOnInit(): void {
    this.srLayout.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      if (v=='XSmall' || v=='Small' )
      {
        this.isSmall = true;
      } else {
        this.isSmall = false;
      }

    })
  }
  itemclick(row: any) {
    this.SelectedChange.emit(row)
  }
}
