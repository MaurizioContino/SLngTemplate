import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-data-strip',
  templateUrl: './data-strip.component.html',
  styleUrls: ['./data-strip.component.scss']
})
export class DataStripComponent {

  @Input() public childtemplate: TemplateRef<any> | null = null
  @Input() Data: any[] = []


}
