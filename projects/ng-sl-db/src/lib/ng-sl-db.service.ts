import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, Subject } from 'rxjs';
import { IDBModel } from './IDBModel';

@Injectable({
  providedIn: 'root'
})
export class NgSlDbService {

  remotes: any = {};
  constructor(private dbService: NgxIndexedDBService, private http: HttpClient) { }

  RegisterRemote(StoreName: string, remote: string) {
    this.remotes[StoreName] = remote;
  }

  GetAll<T>(StoreName: string){
    return this.dbService.getAll<T>(StoreName)
  }
  Insert<T>(StoreName: string, Item: T): Observable<T>{
    const ret = new Subject<T>();
    (Item as IDBModel).isnew = true;
    this.dbService.add<T>(StoreName, Item).subscribe(v=>{
      this.SetDirty();
      ret.next(v);
    });
    return ret;
  }
  BulkInsert<T>(StoreName: string, Items: T[]): Observable<number>{
    const ret = new Subject<number>();
    Items.forEach(v=>{
      (v as IDBModel).isnew = true;
    });

    this.dbService.bulkAdd<T>(StoreName, Items as any).subscribe(
     {
      next: (v)=> {
        this.SetDirty();
        ret.next(v.length);
      },
      error: e => {
        console.log(e);
      },
      complete: ()=>{
        console.log("complete")
      }
    }
    );
    return ret;
  }
  Update<T>(StoreName: string, Item: T): Observable<T>{
    const ret = new Subject<T>();
    (Item as IDBModel).updated = (new Date()).toString();
    this.dbService.update(StoreName, Item).subscribe(v=>{
      this.SetDirty();
      ret.next(v);
    });
    return ret;
  }
  Delete<T>(StoreName: string, Item: T){
    const ret = new Subject();
    (Item as IDBModel).deleted = true;
    this.Update(StoreName, Item).subscribe(v=>{
      this.SetDirty();
      ret.next(v);
    });
    return ret;
  }

  DeleteDB(){
    const ret = new Subject();
    this.dbService.deleteDatabase().subscribe(v=>{
      ret.next(v);
    });
    return ret;
  }

  Align(StoreName: string) {
    this.GetDBStatus().subscribe(v=>{
      if (v.status[0] == "dirty")
      Object.keys(this.remotes).forEach(async StoreName=>{
        const remote = this.remotes[StoreName];
        await this.alignStore(StoreName, remote);
      })
      this.SetClean();
    })
  }
  public clear(StoreName: string) {
    return this.dbService.clear(StoreName);
  }
  private async alignStore(StoreName: string, remote: string) {

    return new Promise((resolve, reject) => {
      this.http.post<any>(remote, this.GetAll(StoreName) ).subscribe((v: any)=>{
        this.dbService.clear(StoreName).subscribe(v=>{
          if (v) {
            this.dbService.bulkAdd(StoreName, v as any)
            .subscribe((result) => {
              resolve(null);
            });
          }
        });

      });
    });

  }
  private SetDirty(){
    this.dbService.clear("DBStatus").subscribe(v=>{
      if (v) {
        this.dbService.add("DBStatus", {status: "dirty"})
        .subscribe((result) => {
          console.log('result: ', result);
        });
      }
    });
  }
  private SetClean() {
    this.dbService.clear("DBStatus").subscribe(v=>{
      if (v) {
        this.dbService.add("DBStatus", {status: "clean"})
        .subscribe((result) => {
          console.log('result: ', result);
        });
      }
    });
  }
  private GetDBStatus(): Observable<any>{
    return this.dbService.getAll("DBStatus");
  }
}
