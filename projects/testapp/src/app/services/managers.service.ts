import { Injectable } from '@angular/core';
import { NgSlDbService } from 'ng-sl-db';

import { Observable, Subject } from 'rxjs';
import { Manager } from '../models/Manager';

import { AreeService } from './aree.service';
import { IDataservice } from './IDataservice';

@Injectable({
  providedIn: 'root'
})
export class ManagersService implements IDataservice {

  store = "Managers";
  Dataset: Manager[] = [];
  Dataset$: Subject<Manager[]> = new Subject<Manager[]>();
  constructor(private db: NgSlDbService, private areeServ: AreeService) {

  }

  Load(reload: boolean = false) {
    if (reload || this.Dataset.length == 0) {
      this.areeServ.Dataset$.subscribe(aree=>{
        this.db.GetAll<Manager>(this.store).subscribe(v=>{
          v.forEach(m=>{
            const area = aree.find(a=>a.Id == m.IdArea);
            m.Region = area ? area?.Region : "";
          })
          this.Dataset = v;
          this.Dataset$.next(v);
        })
      });
    }
    else {
      this.Dataset$.next(this.Dataset);
    }
    this.areeServ.Load();
  }

  save(managers: Manager[]): Observable<Manager[]> {

    const ret = new Subject<Manager[]>();
    managers.forEach(manager => {

      manager.updated = new Date().toISOString()

          this.db.Save(this.store, managers).subscribe(v2=>{
            this.db.GetAll<Manager>(this.store).subscribe(managers=>{

              this.Dataset = managers;
              this.Dataset$.next(managers);
              ret.next(managers)
            })

          })
        })

    return ret;

  }
}
