import { Injectable } from '@angular/core';

import { sldbService } from '@soloud/sldb';

import { Observable, Subject } from 'rxjs';
import { MonitorResultItem, MonitorResults } from '../models/MonitorResults';

@Injectable({
  providedIn: 'root'
})
export class MonitorResultsService {

  store = "MonitorResultItem";
  private _results: MonitorResults[] | null = null;
  public get results(): MonitorResults[] | null {
    return this._results;
  }
  public set results(value: MonitorResults[] | null) {
    this._results = value;
  }
  results$: Subject<MonitorResults[]> = new Subject<MonitorResults[]>();
  constructor(private db: sldbService) {
  }

  Load(reload: boolean = false) {


    if (reload || this.results===null) {
      const retItems: MonitorResults[] = [];
      this.db.GetAll<MonitorResultItem>(this.store).subscribe(items=>{

        let curr: MonitorResults | undefined = undefined;
        items.forEach(itm => {
          curr = retItems.find(v=>v.IdManager===itm.IdManager && v.Week===itm.Week);
          if (curr){
            curr.Values.push(itm)
          } else {
            curr = new MonitorResults(itm.IdManager, itm.Week)
            retItems.push(curr);
            curr.Values.push(itm);

          }
        });
        this.results = retItems;
        this.results$.next(retItems);

      })
    } else {

      this.results$.next(this.results);

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
        this.db.Update(this.store, r.Values).subscribe((v: any)=>{

            this.Load(true)
        })
      })
      return ret;
    } else {
      return null;
    }
  }
}
