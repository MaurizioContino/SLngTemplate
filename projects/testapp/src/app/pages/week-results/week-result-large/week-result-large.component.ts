import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-result-large',
  templateUrl: './week-result-large.component.html',
  styleUrls: ['./week-result-large.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekResultLargeComponent {

  @Input() Items: any[] = [];
}
