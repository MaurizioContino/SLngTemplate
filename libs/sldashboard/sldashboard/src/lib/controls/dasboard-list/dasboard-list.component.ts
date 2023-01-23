import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-dashboard-item-list',
  templateUrl: './dasboard-list.component.html',
  styleUrls: ['./dasboard-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DasboardListComponent {

  private _contents: QueryList<TemplateRef<any>> | undefined;

   @Input()
  
  public get contents(): QueryList<TemplateRef<any>> | undefined {
    return this._contents;
  }
  public set contents(value: QueryList<TemplateRef<any>> | undefined) {
    this._contents = value;
    if (value) {
      const dbg = value.toArray()
      console.log(dbg)
      console.log(dbg[0])
    }
  }
   @Output() Selected = new EventEmitter<number>()
  constructor(private cdr: ChangeDetectorRef) {
  }

  getContext() {
    return {status: 'select'};
  }

}
