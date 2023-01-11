import { Component, Input } from '@angular/core';
import { MonitorItem } from '../../../models/Monitoritem';
import { MonitorResultItem } from '../../../models/MonitorResults';
import { MonitorResultsService } from '../../../services/monitor-results.service';

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

  constructor(private srv: MonitorResultsService)  {}

  UpdateValue(item: MonitorResultItem ) {
    
      this.srv.saveItem(item)
    
  }

}
