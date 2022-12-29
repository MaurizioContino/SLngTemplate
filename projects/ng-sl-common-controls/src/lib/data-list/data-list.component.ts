import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';

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


  @Input() Items: any[] = [];

}
