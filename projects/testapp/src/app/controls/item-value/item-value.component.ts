import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DashboardItem } from 'ngslcommoncontrols';
import { Subject, takeUntil } from 'rxjs';

import { SelectedStore } from '../../models/SelectedStore';
import {  StoreService } from '../../services/store.service';

@Component({
  selector: 'app-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemValueComponent {

  private _config: DashboardItem | undefined;
  public currStore: SelectedStore;
  
  destroy$ = new Subject();
  operations = ['Ultimo', 'Media', 'Somma']
  footer = ""
  localcolumns: string[] = []
  localdata : any[] = []
  
  @Input()
  public get config(): DashboardItem | undefined {
    return this._config;
  }
  public set config(value: DashboardItem | undefined) {
    this._config = value;
    if (this.config && this.config.customData['Store']) {
      this.currStore.Store = this.config.customData['Store']
    }
  }

  constructor(private cdr: ChangeDetectorRef, private storeserv: StoreService ) {
    this.currStore = new SelectedStore(storeserv);
    this.currStore.datachanges$.pipe(takeUntil(this.destroy$)).subscribe((v: any)=>{
      
      this.localcolumns = v.columns;
      this.localdata = v.rows;
      this.cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    if (this.config) {
      this.config.icon = "BarChart.png"
      this.config.ItemChanged$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
        this.cdr.detectChanges();
      })
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
    if(this.currStore) this.currStore.unload();
  }
}
