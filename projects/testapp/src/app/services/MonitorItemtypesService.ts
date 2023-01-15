import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { NgSlDbService } from 'ng-sl-db';

import { Observable, Subject } from 'rxjs';

import { MonitorItem } from '../models/Monitoritem';

@Injectable({
  providedIn: 'root'
})
export class MonitorItemtypesService {

  store = "MonitorResultItem";
  private _results: MonitorItem[] | null = null;
  public get results(): MonitorItem[] | null {
    return this._results;
  }
  public set results(value: MonitorItem[] | null) {
    this._results = value;
  }
  results$: Subject<MonitorItem[]> = new Subject<MonitorItem[]>();
  constructor(private db: NgSlDbService) {
  }

  Load(reload: boolean = false) {
    // this.db.Filter(this.store).subscribe(v=>{
    //   console.log("AAA")
    // })

    if (reload || this.results == null) {
      
      this.db.GetAll<MonitorItem>(this.store).subscribe(items=>{
        this.results = items;
        this.results$.next(items);
      })
    }
    else {
      this.results$.next(this.results);
    }

  }

  Filter() {
    this.db.GetAll<MonitorItem>(this.store).subscribe(items=>{
      this.results = items;
      this.results$.next(items);
    })
  }


  save(items: MonitorItem[]):Observable<MonitorItem[]> {
    const ret = new Subject<MonitorItem[]>();
    this.db.Save(this.store, items).subscribe(v=>{
      this.db.GetAll<MonitorItem>(this.store).subscribe(results=>{
        this.results = v;
        this.results$.next(v);
        ret.next(results);
      })
    })
    return ret;
  }


  delete(items: MonitorItem[]) {
    if (items.length>0) {
      return null;
      //return this.db.Delete(this.store, results)
    } else{
      return null

    }
  }

  add(items: MonitorItem[]) {
        this.db.Save(this.store, items).subscribe(v=>{
          this.Load(true);
        })
  }

  update(items: MonitorItem[]) {

    items.forEach(v=>{

        v.updated = new Date().toISOString();
        v.originalupdated = v.updated;

    });
    if (items.length>0) {
      const ret = new Subject<MonitorItem[]>();

        this.db.Update(this.store, items).subscribe(v=>{

            this.Load(true)

      })
      return ret;
    } else {
      return null;
    }
  }

}
