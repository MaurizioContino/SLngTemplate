import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { DBConfig, DB_CONFIG } from './DBConfig';
import { IDBModel } from './IDBModel';


@Injectable({
  providedIn: 'root'
})
export class NgSlDbService {

  remotes: any = {};
  db: any;
  constructor(@Inject(DB_CONFIG) private config: DBConfig, private http: HttpClient) {
    this.openDatabase();
  }

  openDatabase() {

    const request = window.indexedDB.open(this.config.name, this.config.version);
    request.onerror = (event) => {

    };
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
    };
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      this.config.stores.forEach(store => {

        const objectStore = this.db.createObjectStore(store.name, { keyPath: store.key, autoIncrement : false });
        objectStore.createIndex("Id", "Id", { unique: true });
        objectStore.createIndex("data", "data", { unique: false });
        if (this.config.Prefill[store.name]) {
          this.config.Prefill[store.name].forEach((e: any) => {
            objectStore.add({ Id: e[store.key], data: JSON.stringify(e) });
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

  Save<T>(StoreName: string,Items: T[]):Observable<any> {
    const ret = new Subject<any>();
    const waits : Observable<any>[] = [];

    this.GetAll<T>(StoreName, true).subscribe(v=>{

      let max = Math.max(...v.map(o => (o as any).Id));

      const transaction = this.db.transaction([StoreName], "readwrite");
      const objectStore = transaction.objectStore(StoreName );
      transaction.oncomplete = (event: any) => {
        ret.next(true);
        ret.complete();

      };

      transaction.onerror = (event: any) => {
        ret.error(event);
      };

      Items.forEach(v=>{
        const item = (v as IDBModel);
        if (item.isnew){
          max++;
          item.Id = max;
          item.isnew = false;
          const request = objectStore.add({ Id: max, data: JSON.stringify(v) });
        }
        if (item.deleted || item.updated != item.originalupdated){

          item.originalupdated = item.updated
          const request = objectStore.put({ Id: item.Id, data: JSON.stringify(v) });
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
      this.http.post<any>(remote, this.GetAll(StoreName)).subscribe((_v: any) => {
        // this.dbService.clear(StoreName).subscribe(v=>{
        //   if (v) {
        //     this.dbService.bulkAdd(StoreName, v as any)
        //     .subscribe((result) => {
        //       resolve(null);
        //     });
        //   }
        // });

      });
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
