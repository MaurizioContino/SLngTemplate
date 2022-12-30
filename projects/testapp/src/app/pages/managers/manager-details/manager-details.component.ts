import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerDetailsComponent {
  @Input() current: any = null;
}
