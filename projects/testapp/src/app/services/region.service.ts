import { NgTemplateOutlet } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject, concat, Observable, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Area } from '../models/Area';
import { Region } from '../models/Region';
import { AreeService } from './aree.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  store = "Regions";
  Regions: Region[] | null = null
  Regions$: BehaviorSubject<Region[]> = new BehaviorSubject<Region[]>([]);

  constructor(private db: NgSlDbService, private areeServ: AreeService) {}

  Load(reload: boolean = false) {
    if (reload || this.Regions==null) {
    this.areeServ.Aree$.subscribe(aree=>{
      this.db.GetAll<Region>(this.store).subscribe(v=>{
        v.forEach(r=>{
          r.isnew = false;
          r.updated = r.originalupdated;
          r.Aree = aree.filter(a=>a.Region == r.Name);
        })
        this.Regions = v;
        this.Regions$.next(v);
      })
    })

    this.areeServ.Load();
    }
  }

  save(region: Region): Observable<any> {
    const ret = new Subject<any>
    const waits : any[] = [];
    if (region.deleted) {

      region.Aree.forEach(a=>{
        waits.push(this.areeServ.delete(a));
      })
      concat(waits).subscribe(v=>{
        this.delete(region).subscribe(r=>ret.next(null));
      })

    } else {
      if (region.isnew) {

        region.Aree.forEach(a=>{
          waits.push(this.areeServ.add(a));
        })
        concat(waits).subscribe(v=>{
          this.add(region).subscribe(r=>ret.next(null))
        })

      } else {
        region.Aree.forEach(a=>{
          waits.push(this.areeServ.update(a));
        })
        concat(waits).subscribe(v=>{
          if (region.updated!=region.originalupdated) {
            this.update(region).subscribe(r=>ret.next(null))
          }
        })

      }
    }
    return ret;
  }


  delete(region: Region) {
    return this.db.Delete(this.store, region)
  }

  add(region: Region) {
    return this.db.Insert(this.store, region)
  }

  update(region: Region) {
    return this.db.Update(this.store, region)
  }


  beginStore() {

    const ret = new Subject();

    this.db.BulkInsert<Region>(this.store, [
      new Region('LAZIO','Italia.jpg', 'Lazio.png'),
      new Region('TOSCANA','Italia.jpg', 'Toscana.png'),
      new Region('ABRUZZO/UMBRIA/MOLISE', 'Italia.jpg', 'AbruzzoUmbriaMolise.png'),
      new Region('MARCHE', 'Italia.jpg', 'Marche.png'),
      new Region('VENETO', 'Italia.jpg', 'Veneto.png'),
      new Region('PUGLIA/BASILICATA', 'Italia.jpg', 'PugliaBasilicata.png'),
      new Region('EMILIA ROMAGNA', 'Italia.jpg', 'EmiliaRomagna.png'),
      new Region('LIGURIA', 'Italia.jpg', 'Liguria.png'),
      new Region('SARDEGNA', 'Italia.jpg', 'Sardegna.png'),
      new Region('PIEMONTE', 'Italia.jpg', 'Piemonte.png'),
      new Region('CALABRIA/SICILIA', 'Italia.jpg', 'CalabriaSicilia.png'),
      new Region('CAMPANIA', 'Italia.jpg', 'Campania.png'),
      new Region('LOMBARDIA', 'Italia.jpg', 'Lombardia.png')

      ]).subscribe(v=>{
        console.log("Region store:" + v)
        ret.next(null);
        })
        return ret;

  }

}
