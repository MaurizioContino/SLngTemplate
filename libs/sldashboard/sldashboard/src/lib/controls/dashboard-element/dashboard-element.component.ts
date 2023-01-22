import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sl-dashboard-element',
  templateUrl: './dashboard-element.component.html',
  styleUrls: ['./dashboard-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardElementComponent {

  @Input() element: any = null
  @Output() click = new EventEmitter();

}
