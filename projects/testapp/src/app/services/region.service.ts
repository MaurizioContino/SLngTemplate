import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { Area } from '../models/Area';
import { Region } from '../models/Region';
import { AreeService } from './aree.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  store = "Regions";
  Regions$: BehaviorSubject<Region[]> = new BehaviorSubject<Region[]>([]);
  constructor(private db: NgSlDbService, private areeServ: AreeService) {

  }



  Load() {
    this.db.GetAll<Region>(this.store).subscribe(v=>{
      this.Regions$.next(v);
    })
  }
  beginStore() {

    const regions = [];

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

        })

  }

}
