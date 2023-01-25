import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import {   DashboardWidget, WidgetStatus } from '@soloud/sldashboard';
import { WidgetConfig } from '@soloud/sldashboard';
import { Subject } from 'rxjs';






@Component({
  selector: 'app-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemValueComponent implements OnInit, OnDestroy {

  static Definition = new DashboardWidget(ItemValueComponent,
    1,
    "xxx",
    'Valore singolo',
    'Mette in evidenza un singolo valore, un titolo e opzionalmente un secondo valore con un sottotitolo',
    {IdItem: 0, BackgroundColor: 'white', IdComponent: 1, Top: 0, Left: 0,  width: 5, height: 5, Title: '', CustomData: {}})

    config: WidgetConfig | undefined;

  private _status: WidgetStatus = WidgetStatus.view;
  public get status(): WidgetStatus {
    return this._status;
  }
  public set status(value: WidgetStatus) {
    this._status = value;
    this.cdr.detectChanges()
  }
  destroy$ = new Subject();
  footer = ""


  public  selectStatus: WidgetStatus = WidgetStatus.select
  public  configStatus: WidgetStatus = WidgetStatus.config
  public  viewStatus: WidgetStatus = WidgetStatus.view

  constructor(private cdr: ChangeDetectorRef) {


  }


  ngOnInit(): void {

    console.log("init")

  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
