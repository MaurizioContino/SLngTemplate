import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sl-empty-layout',
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyLayoutComponent {
  @Input() Layout: any = {};
}
