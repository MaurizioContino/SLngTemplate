import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-result-details',
  templateUrl: './week-result-details.component.html',
  styleUrls: ['./week-result-details.component.scss']
})
export class WeekResultDetailsComponent {

  private _current: any;
  @Input()
  public get current(): any {
    return this._current;
  }
  public set current(value: any) {

    this._current = value;
  }
}
