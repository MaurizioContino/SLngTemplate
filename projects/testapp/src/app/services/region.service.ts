import { Injectable } from '@angular/core';
import { NgSlDbService } from 'ng-sl-db';
import { Observable, Subject, tap } from 'rxjs';
import { Region } from '../models/Region';
import { AreeService } from './aree.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  store = "Regions";
  Regions: Region[] | null = null
  Regions$: Subject<Region[]> = new Subject<Region[]>();

  constructor(private db: NgSlDbService, private areeServ: AreeService) { }

  Load(reload: boolean = false) {
    if (reload || this.Regions == null) {

      this.db.GetAll<Region>(this.store)
        .subscribe(v => {
          v.forEach(r => {
            r.isnew = false;
            r.updated = r.originalupdated;

          })
          this.Regions = v;
          this.Regions$.next(v);
        })


      this.areeServ.Load();
    }
    else {
      this.Regions$.next(this.Regions);
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

              this.Regions = regions;
              this.Regions$.next(regions);
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
