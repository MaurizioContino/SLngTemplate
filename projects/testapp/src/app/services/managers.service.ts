import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { Manager } from '../models/Manager';
import { dbConfig } from '../ObjectStoreConfig';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  store = "Managers";
  Managers$: BehaviorSubject<Manager[]> = new BehaviorSubject<Manager[]>([]);
  constructor(private db: NgSlDbService) {

  }

  Load() {
    this.db.GetAll<Manager>(this.store).subscribe(v=>{
      this.Managers$.next(v);
    })
  }

  beginStore() {
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

    });

  }

}
