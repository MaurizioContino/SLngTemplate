import { Injectable } from '@angular/core';
import { NgSlDbService } from 'ng-sl-db';

import { Observable, Subject, take, tap } from 'rxjs';
import { MonitorResultItem, MonitorResults } from '../models/MonitorResults';
import { IDataservice } from './IDataservice';


@Injectable({
  providedIn: 'root'
})
export class MonitorResultsService  implements IDataservice  {

  store = "MonitorResultItem";
  private _results: MonitorResults[] = [];
  public get Dataset(): MonitorResults[] {
    return this._results;
  }
  public set Dataset(value: MonitorResults[]) {
    this._results = value;
  }
  Dataset$: Subject<MonitorResults[]> = new Subject<MonitorResults[]>();
  constructor(private db: NgSlDbService) {
  }

  Load(reload: boolean = false) {


    if (this.Dataset.length == 0) {
      const retItems: MonitorResults[] = [];
      this.db.GetAll<MonitorResultItem>(this.store).subscribe(items=>{

        let curr: MonitorResults | undefined = undefined;
        items.forEach(itm => {
          curr = retItems.find(v=>v.IdManager == itm.IdManager && v.Week == itm.Week);
          if (curr){
            curr.Values.push(itm)
          } else {
            curr = new MonitorResults(itm.IdManager, itm.Week)
            retItems.push(curr);
            curr.Values.push(itm);

          }
        });

        this.Dataset = retItems;
        this.Dataset$.next(retItems);

      })
    } else {

      this.Dataset$.next(this.Dataset);

    }

  }



  save(items: MonitorResults[]):Observable<MonitorResults[]> {
    const ret = new Subject<MonitorResults[]>();
    items.forEach(r=>{
      this.db.Save(this.store, r.Values).subscribe(v=>{

          this.Load(true)
       })
    })
    return ret;
  }

  saveItem(item: MonitorResultItem) {
    item.updated = new Date().toISOString();
    this.db.Save(this.store, [item]).subscribe(v=>{
      this.Load(true)
    })
  }



  delete(items: MonitorResults[]) {
    if (items.length>0) {
      return null;
      //return this.db.Delete(this.store, results)
    } else{
      return null
    }
  }

  add(items: MonitorResults[]) {
    if (items.length>0) {
      const ret = new Subject<MonitorResults[]>();
      items.forEach(r=>{
        this.db.Save(this.store, r.Values).subscribe(v=>{
          this.Load(true)
        })
      })
      return ret;
    } else {
      return null;
    }

  }

  update(items: MonitorResults[]) {

    items.forEach(r=>{
      r.Values.forEach(v => {
        v.updated = new Date().toISOString();
        v.originalupdated = v.updated;
      });
    });
    if (items.length>0) {
      const ret = new Subject<MonitorResults[]>();
      items.forEach(r=>{
        this.db.Update(this.store, r.Values).subscribe(v=>{

            this.Load(true)
        })
      })
      return ret;
    } else {
      return null;
    }
  }
}
