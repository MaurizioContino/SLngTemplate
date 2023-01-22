import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { DBConfig, DB_CONFIG } from '../models/DBConfig';
import { filterItem } from '../models/FilterItem';
import { IDBModel } from '../models/IDBModel';



@Injectable({
  providedIn: 'root'
})
export class SlDbService {

  remotes: any = {};
  db: any;
  ready$ = new Subject();
  constructor(@Inject(DB_CONFIG) private config: DBConfig) {
    this.openDatabase();
  }

  openDatabase() {
    const request = window.indexedDB.open(this.config.name, this.config.version);
    request.onerror = (event) => {
      console.log(event)
    };
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      this.ready$.next(true);
    };
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      this.config.stores.forEach(store => {
        const objectStore = this.db.createObjectStore(store.name, { keyPath: store.key, autoIncrement : false });
        objectStore.createIndex("Id", "Id", { unique: true });
        objectStore.createIndex("data", "data", { unique: false });
        if (this.config.Prefill[store.name]) {
          this.config.Prefill[store.name].forEach((e: any) => {
            try {
              objectStore.add({ Id: e[store.key], data: JSON.stringify(e) });
            } catch(e: any) {
              console.log(e);
            }
          });
        }

      })

    }

  }

  RegisterRemote(StoreName: string, remote: string) {
    this.remotes[StoreName] = remote;
  }

  GetAll<T>(StoreName: string, getdeleted=false):Observable<T[]> {

    const ret = new Subject<T[]>();
    const transaction = this.db.transaction([StoreName]);
    const objectStore = transaction.objectStore(StoreName);
    const request = objectStore.getAll();
    request.onerror = (event: any) => {
      ret.error(request);
    };
    request.onsuccess = (event: any) => {

      const data = request.result.map((v: any)=>{
        return JSON.parse(v.data) as T
      }) as T[];
      ret.next((data as any[]).filter(v=>v.deleted==false || getdeleted));
    };


    return ret;
  }

  Filter<T>(StoreName: string, filters: filterItem[], getdeleted=false):Observable<T[]> {

    const ret = new Subject<T[]>();
    const transaction = this.db.transaction([StoreName]);
    const objectStore = transaction.objectStore(StoreName);
    const request = objectStore.openCursor();
    const retdata = []
    request.onerror = (event: any) => {
      ret.error(request);
    };
    request.onsuccess = (event: any) => {
      if (event.srcElement.result) {
        const itm = JSON.parse(event.srcElement.result.value.data)
        let ok = true;
        filters.forEach(f=>{
          if (itm[f.field]){
            if (!this.checkFilter(itm, f)){
              ok = false;
            }
          } else {
            ok = false;
          }
        })
        if (ok) retdata.push(itm);
        console.log(event.srcElement.result.value);
      }
      const cursor = event.target.result;
      if (cursor) {
        // cursor.value contains the current record being iterated through
        // this is where you'd do something with the result
        cursor.continue();
      } else {
        // no more results
      }


    };


    return ret;
  }

  checkFilter(value: any, filter: filterItem): boolean {
    switch(filter.operator) {
      case '<':
        if (value[filter.field] < filter.value) return true;
        break;
      case '>':
        if (value[filter.field] > filter.value) return true;
        break;
      case '>=':
        if (value[filter.field] >= filter.value) return true;
        break;
      case '<=':
        if (value[filter.field] <= filter.value) return true;
        break;
      case '!=':
        if (value[filter.field] != filter.value) return true;
        break;
      case '==':
        if (value[filter.field] == filter.value) return true;
        break;
      default:
        return false


      }
      return false
  }

  Save<T>(StoreName: string,Items: T[]):Observable<any> {
    const ret = new Subject<any>();
    const waits : Observable<any>[] = [];

    this.GetAll<T>(StoreName, true).subscribe(v=>{
      let max = Math.max(...v.map(o => (o as any).Id));
      if (!isFinite(max)) max = 0;

      const transaction = this.db.transaction([StoreName], "readwrite");
      const objectStore = transaction.objectStore(StoreName );
      transaction.oncomplete = (event: any) => {
        ret.next(true);
        ret.complete();

      };

      transaction.onerror = (event: any) => {
        ret.error(event);
      };
      console.log(Items)
      Items.forEach(v=>{
        console.log('uno')
        const item = (v as IDBModel);
        console.log('due')

        if (item.isnew){
        console.log('tre')
        console.log('max: ' + max)

          max++;
          item.Id = max;
          item.isnew = false;

          const request = objectStore.add({ Id: max, data: JSON.stringify(v) });
        } else {
          console.log("Non bene")
          if (item.deleted || item.updated != item.originalupdated){

            item.originalupdated = item.updated
            const request = objectStore.put({ Id: item.Id, data: JSON.stringify(v) });
          }
        }


      })
    })
    return ret;
  }

  Insert<T>(StoreName: string, Items: T[]): Observable<T[]> {
    const ret = new Subject<T[]>();
    const waits : Observable<any>[] = [];
    this.GetAll<T>(StoreName).subscribe(v=>{

      let max = Math.max(...v.map(o => (o as any).Id));

      const transaction = this.db.transaction([StoreName], "readwrite");
      const objectStore = transaction.objectStore(StoreName );
      transaction.oncomplete = (event: any) => {
        ret.next(Items);
        ret.complete();

      };

      transaction.onerror = (event: any) => {
        ret.error(event);
      };

      Items.forEach(v=>{
        max++;
        (v as any).Id = max;
        const request = objectStore.add({ Id: max, data: JSON.stringify(v) });
      })
    })



    return ret;

  }

  Update<T>(_StoreName: string, Item: T): Observable<T> {
    const ret = new Subject<T>();
    (Item as IDBModel).updated = (new Date()).toString();


    return ret;
  }
  Delete<T>(StoreName: string, Item: T) {
    const ret = new Subject();
    (Item as IDBModel).deleted = true;
    this.Update(StoreName, Item).subscribe(v => {
      //this.SetDirty();
      ret.next(v);
      ret.complete();
    });
    return ret;
  }

  DeleteDB() {
    const ret = new Subject();
    // this.dbService.deleteDatabase().subscribe(v=>{
    //   ret.next(v);
    // });
    return ret;
  }

  Align(_StoreName: string) {
    this.GetDBStatus().subscribe(v => {
      if (v.status[0] == "dirty")
        Object.keys(this.remotes).forEach(async StoreName => {
          const remote = this.remotes[StoreName];
          await this.alignStore(StoreName, remote);
        })
      this.SetClean();
    })
  }
  public clear(_StoreName: string) {
    //return this.dbService.clear(StoreName);
  }
  private async alignStore(StoreName: string, remote: string) {

    return new Promise((_resolve, _reject) => {



    });

  }
  private SetDirty() {
    // this.dbService.clear("DBStatus").subscribe(v=>{
    //   if (v) {
    //     this.dbService.add("DBStatus", {status: "dirty"})
    //     .subscribe((result) => {
    //       console.log('result: ', result);
    //     });
    //   }
    // });
  }
  private SetClean() {
    // this.dbService.clear("DBStatus").subscribe(v=>{
    //   if (v) {
    //     this.dbService.add("DBStatus", {status: "clean"})
    //     .subscribe((result) => {
    //       console.log('result: ', result);
    //     });
    //   }
    // });
  }
  private GetDBStatus(): Observable<any> {
    //return this.dbService.getAll("DBStatus");
    return new Subject<any>();
  }
}
