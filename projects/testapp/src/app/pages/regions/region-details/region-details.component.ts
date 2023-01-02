import { ChangeDetectorRef, Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDetailsComponent {
  private _current: any = null;

  constructor(private cdr: ChangeDetectorRef){}

  @Input()
  public get current(): any {
    return this._current;
  }
  public set current(value: any) {
    this._current = value;
    this.cdr.detectChanges();
  }
}
