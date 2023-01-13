import { Component, Input } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';

@Component({
  selector: 'sl-hbars-config',
  templateUrl: './hbars-config.component.html',
  styleUrls: ['./hbars-config.component.css']
})
export class HbarsConfigComponent {
  @Input() config: DashboardItem | undefined
}
