import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-result-details',
  templateUrl: './week-result-details.component.html',
  styleUrls: ['./week-result-details.component.scss']
})
export class WeekResultDetailsComponent {

  @Input() current: any;
}
