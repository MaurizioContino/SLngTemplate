import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject, forkJoin, Observable, Subject, take, tap } from 'rxjs';
import { Area } from '../models/Area';

@Injectable({
  providedIn: 'root'
})
export class AreeService {

  store = "Aree";
  private _Aree: Area[] | null = null;
  public get Aree(): Area[] | null {
    return this._Aree;
  }
  public set Aree(value: Area[] | null) {
    this._Aree = value;
  }
  Aree$: BehaviorSubject<Area[]> = new BehaviorSubject<Area[]>([]);
  constructor(private db: NgSlDbService) {
  }


  getAreaName(Id: number) {
    if (this._Aree) {
        return this._Aree.find(v=>v.Id == Id)?.Name;
      } else
      {
        return "Not loaded"
      }
  }


  Load(reload: boolean = false) {
    if (reload || this.Aree == null) {
      this.db.GetAll<Area>(this.store).subscribe(v=>{
        this.Aree = v;
        this.Aree$.next(v);
      })
    }
  }



  save(aree: Area[]):Observable<Area[]> {
    const ret = new Subject<Area[]>();
     this.db.Save(this.store, aree).subscribe(v=>{
      this.db.GetAll<Area>(this.store).subscribe(results=>{
        this.Aree = v;
        this.Aree$.next(v);
        ret.next(results);
      })
     })
     return ret;
  }


  delete(aree: Area[]) {
    if (aree.length>0) {
      return this.db.Delete(this.store, aree)
    } else{
      return null

    }
  }

  add(aree: Area[]) {
    if (aree.length>0) {
      return this.db.Insert(this.store, aree)

    } else{
      return null

    }

  }

  update(aree: Area[]) {

    aree.forEach(area => {
      area.updated = new Date().toISOString();
      area.originalupdated = area.updated;
    });
    if (aree.length>0) {
      return this.db.Update(this.store, aree)
    } else{
      return null
    }
  }


  // beginStore(): Observable<any> {
  //   const ret = new Subject();


  //   this.db.BulkInsert<Area>(this.store, data).subscribe(
  //     {
  //       next: (v) => {
  //         ret.next(null);
  //         console.log("aree store " + v)
  //       },
  //       error: (e) => {
  //         ret.next(null);
  //         console.error(e)
  //       },
  //       complete: () => {
  //         ret.next(null);
  //         console.info('complete')
  //       }
  //     }
  //   );
  //   return ret;
  // }
}
