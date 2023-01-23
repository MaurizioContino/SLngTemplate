import { EventEmitter } from "@angular/core";
import { DashboardItem } from "ng-sl-common-controls";
import { Subject, Subscription, takeUntil } from "rxjs";
import { storeitem, StoreService } from "../services/store.service";

export class SelectedStore {

    SelectedStoreServ: storeitem | null = null;
    config: DashboardItem | undefined;
    currdatasub: Subscription | undefined;
    destroy$ = new Subject();
    datachanges$ = new Subject();
    
    
  
    private _Store = "";
    public get Store() {
        return this._Store;
    }
    public set Store(value: string) {
        
        this._Store = value;
        if (this.Store!="") {
            this.SelectedStoreServ = (this.storeserv.stores as any)[value]
            if (this.config && this.config.customData['Store'] != value) this.config.customData['Store'] = value;
            this.GetData();
        } else {
            this.SelectedStoreServ = null;
        }
    }

    constructor(private storeserv: StoreService) {

    }
    unload() {
        this.destroy$.next(null);
        this.destroy$.complete();

    }
    GetData() {
        if (this.currdatasub) {
          this.currdatasub.unsubscribe();
        }
        if (this.SelectedStoreServ && this.SelectedStoreServ.service) {
          this.currdatasub = this.SelectedStoreServ.service.Dataset$.pipe(takeUntil(this.destroy$)).subscribe( (rows: any[]) =>{
            var columns: string[] = []
            if (rows.length>0) {
                columns = Object.keys(rows[0]);
            }
            this.datachanges$.next({columns: columns, rows: rows});
          })
          this.SelectedStoreServ.service.Load(false);
        }
      }

    
}