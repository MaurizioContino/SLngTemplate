import { Injectable } from '@angular/core';
import { SlDbService } from 'libs/sl-db/src/lib/services/sl-db.service';

import { Observable, Subject } from 'rxjs';
import { Manager } from '../models/Manager';

import { AreeService } from './aree.service';
import { IDataservice } from './IDataservice';

@Injectable({
  providedIn: 'root'
})
export class ManagersService implements IDataservice {

  store = "Managers";
  Managers: Manager[] | null = null;
  Managers$: Subject<Manager[]> = new Subject<Manager[]>();
  constructor(private db: SlDbService, private areeServ: AreeService) {

  }

  Load(reload: boolean = false) {
    if (reload || this.Managers == null) {
      this.areeServ.Aree$.subscribe(aree=>{
        if(aree.length>0) {
          this.db.GetAll<Manager>(this.store).subscribe((v: Manager[])=>{
            v.forEach(m=>{
              const area = aree.find(a=>a.Id == m.IdArea);
              m.Region = area ? area?.Region : "";
            })
            this.Managers = v;
            this.Managers$.next(v);
          })
        }
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

          this.db.Save(this.store, managers).subscribe((v2: any)=>{
            this.db.GetAll<Manager>(this.store).subscribe((managers: Manager[])=>{

              this.Dataset = managers;
              this.Dataset$.next(managers);
              ret.next(managers)
            })

          })
        })

    return ret;

  }
}
