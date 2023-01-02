import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject, Subject } from 'rxjs';
import { Manager } from '../models/Manager';
import { dbConfig } from '../ObjectStoreConfig';
import { AreeService } from './aree.service';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  store = "Managers";
  Managers: Manager[] | null = null;
  Managers$: BehaviorSubject<Manager[]> = new BehaviorSubject<Manager[]>([]);
  constructor(private db: NgSlDbService, private areeServ: AreeService) {

  }

  Load(reload: boolean = false) {
    if (reload || this.Managers == null) {
      this.areeServ.Aree$.subscribe(aree=>{
        this.db.GetAll<Manager>(this.store).subscribe(v=>{
          v.forEach(m=>{
            const area = aree.find(a=>a.Name == m.Area);
            m.Region = area ? area?.Region : "";
          })
          this.Managers = v;
          this.Managers$.next(v);
        })
      });
    }
    this.areeServ.Load();
  }

  beginStore() {

    const ret = new Subject();

    const data = [
      new Manager('Maurizio','Contino','Area manager',
        'BELMONTE','male-04.jpg','14-640x480.jpg'),
      new Manager('Davide','Contino','Regional manager',
        'BONDI','male-04.jpg','19-640x480.jpg'),
      new Manager(
        'Elena','Masotti','Area manager',
        'ABRUZZO/UMBRIA/MOLISE','female-06.jpg','34-640x480.jpg',
      )];
    this.db.BulkInsert<Manager>(this.store,data).subscribe(
        v2=>{
          console.log("Managers store:" + v2)
          ret.next(null)
    });
    return ret;
  }

}
