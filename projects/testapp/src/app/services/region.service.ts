import { Injectable } from '@angular/core';
import { NgSlDbService } from 'ng-sl-db';
import { Observable, Subject, tap } from 'rxjs';
import { Region } from '../models/Region';
import { AreeService } from './aree.service';
import { IDataservice } from './IDataservice';

@Injectable({
  providedIn: 'root'
})
export class RegionService implements IDataservice {

  store = "Regions";
  Dataset: Region[] = []
  Dataset$: Subject<Region[]> = new Subject<Region[]>();

  constructor(private db: NgSlDbService, private areeServ: AreeService) { }

  Load(reload: boolean = false) {
    if (this.Dataset.length == 0) {

      this.db.GetAll<Region>(this.store)
        .subscribe(v => {
          v.forEach(r => {
            r.isnew = false;
            r.updated = r.originalupdated;

          })
          this.Dataset = v;
          this.Dataset$.next(v);
        })


      this.areeServ.Load();
    }
    else {
      this.Dataset$.next(this.Dataset);
    }
  }

  save(regions: Region[]): Observable<Region[]> {

    const ret = new Subject<Region[]>();
    regions.forEach(region => {

        region.updated = new Date().toISOString()
        this.areeServ.save(region.Aree).subscribe(areas=>{
          regions.forEach(r=>{
            r.Aree = areas.filter(v=>v.IdRegion==r.Id && v.deleted==false);
          })
          this.db.Save(this.store, regions).subscribe(v2=>{
            this.db.GetAll<Region>(this.store).subscribe(regions=>{

              this.Dataset = regions;
              this.Dataset$.next(regions);
              ret.next(regions)
            })

          })
        })


    });
    return ret;

  }

  delete(regions: Region[]): Observable<any> | null {
    if (regions.length>0) {
      return this.db.Delete(this.store, regions)
    }
    else {
      return null;
    }
  }

  add(regions: Region[]): Observable<any>|null {
    if (regions.length>0) {
      return this.db.Insert(this.store, regions)
    }
      else {
      return null;
    }

  }

  update(regions: Region[]): Observable<any>|null {
    if (regions.length>0) {
      return this.db.Update(this.store, regions)
    }
    else {
      return null;
    }

  }

}
