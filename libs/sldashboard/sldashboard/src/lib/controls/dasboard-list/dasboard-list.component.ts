import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-dashboard-item-list',
  templateUrl: './dasboard-list.component.html',
  styleUrls: ['./dasboard-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DasboardListComponent {

  private _contents: TemplateRef<any>[]  = [];

   @Input() contents: TemplateRef<any>[]  = [];
   @Output() Selected = new EventEmitter<TemplateRef<any>>()
  constructor(private cdr: ChangeDetectorRef) {
  }

  getContext() {
    return {status: 'select'};
  }

}
