import { Injectable } from '@angular/core';
import { sldbService } from 'libs/sl-db/src/lib/services/sl-db.service';

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
  constructor(private db: sldbService) {
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
    else {
      this.Aree$.next(this.Aree);
    }
  }



  save(aree: Area[]):Observable<Area[]> {
    const ret = new Subject<Area[]>();
     this.db.Save(this.store, aree).subscribe(v=>{
      this.db.GetAll<Area>(this.store).subscribe((results: Area[])=>{
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

}
