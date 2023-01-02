import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Area } from '../models/Area';

@Injectable({
  providedIn: 'root'
})
export class AreeService {

  store = "Aree";
  Aree: Area[] | null = null;
  Aree$: BehaviorSubject<Area[]> = new BehaviorSubject<Area[]>([]);
  constructor(private db: NgSlDbService) {
  }
  Load(reload: boolean = false) {
    if (reload || this.Aree == null) {
      this.db.GetAll<Area>(this.store).subscribe(v=>{
        this.Aree = v;
        this.Aree$.next(v);
      })
    }
  }
  beginStore(): Observable<any> {
    const ret = new Subject();
    const data = [
      new Area('LAZIO', 'BELMONTE'),
      new Area('TOSCANA', 'BIRELLI'),
      new Area('TOSCANA', 'BONDI'),
      new Area('ABRUZZO/UMBRIA/MOLISE', 'ABRUZZO/UMBRIA/MOLISE'),
      new Area('MARCHE', 'MARCHE'),
      new Area('VENETO', 'CONTRERAS'),
      new Area('PUGLIA/BASILICATA', 'PUGLIA/BASILICATA'),
      new Area('VENETO', 'VENETO'),
      new Area('EMILIA ROMAGNA', 'EMILIA ROMAGNA'),
      new Area('LIGURIA', 'LIGURIA'),
      new Area('LIGURIA', 'DEL NERO'),
      new Area('SARDEGNA', 'SARDEGNA'),
      new Area('ABRUZZO/UMBRIA/MOLISE', 'DI VITO'),
      new Area('TOSCANA', 'GRILLI'),
      new Area('PIEMONTE', 'PIEMONTE'),
      new Area('PUGLIA/BASILICATA', 'MANIGRASSO'),
      new Area('LAZIO', 'MARCHEGIANI'),
      new Area('VENETO', 'NALIN'),
      new Area('CALABRIA/SICILIA', 'NISTICO'),
      new Area('LAZIO', 'LAZIO'),
      new Area('CAMPANIA', 'PENTANGELO'),
      new Area('CALABRIA/SICILIA', 'CALABRIA/SICILIA'),
      new Area('CAMPANIA', 'PETRICCIUOLO C.'),
      new Area('CAMPANIA', 'PETRICCIUOLO G.'),
      new Area('TOSCANA', 'TOSCANA'),
      new Area('LOMBARDIA', 'LOMBARDIA'),
      new Area('CAMPANIA', 'RUOTOLO'),
      new Area('LOMBARDIA', 'SIMONE'),
      new Area('LAZIO', 'SORRENTINO'),
      new Area('PUGLIA/BASILICATA', 'TRISCIUOGLIO'),
      new Area('LAZIO', 'VALENTINI'),
      new Area('LAZIO', 'VITALE')];

    this.db.BulkInsert<Area>(this.store, data).subscribe(
      {
        next: (v) => {
          ret.next(null);
          console.log("aree store " + v)
        },
        error: (e) => {
          ret.next(null);
          console.error(e)
        },
        complete: () => {
          ret.next(null);
          console.info('complete')
        }
      }
    );
    return ret;
  }
}
