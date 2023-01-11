import { Injectable } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { BehaviorSubject, forkJoin, Observable, Subject, take, tap } from 'rxjs';
import { DashboardGrid } from '../models/DashboardGrid';


@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {

  store = "Dashboards";
  DashboardGrids: DashboardGrid[] | null = null;
  DashboardGrids$: Subject<DashboardGrid[]> = new Subject<DashboardGrid[]>();
  constructor(private db: NgSlDbService) {
  }



  Load(reload: boolean = false) {
    if (reload || this.DashboardGrids == null) {
      this.db.GetAll<DashboardGrid>(this.store).subscribe(v=>{
        this.DashboardGrids = v;
        this.DashboardGrids$.next(v);
      })
    }
    else {
      this.DashboardGrids$.next(this.DashboardGrids);
    }
  }



  save(dashboardGrids: DashboardGrid):Observable<DashboardGrid[]> {
    const ret = new Subject<DashboardGrid[]>();
     this.db.Save(this.store, [dashboardGrids]).subscribe(v=>{
      this.db.GetAll<DashboardGrid>(this.store).subscribe(results=>{
        this.DashboardGrids = results;
        this.DashboardGrids$.next(results);
        ret.next(results);
      })
     })
     return ret;
  }


  delete(dashboardGrids: DashboardGrid[]) {
    if (dashboardGrids.length>0) {
      return this.db.Delete(this.store, dashboardGrids)
    } else{
      return null

    }
  }

  add(dashboardGrids: DashboardGrid[]) {
    if (dashboardGrids.length>0) {
      return this.db.Insert(this.store, dashboardGrids)

    } else{
      return null

    }

  }

  update(dashboardGrids: DashboardGrid[]) {

    dashboardGrids.forEach(area => {
      area.updated = new Date().toISOString();
      area.originalupdated = area.updated;
    });
    if (dashboardGrids.length>0) {
      return this.db.Update(this.store, dashboardGrids)
    } else{
      return null
    }
  }

}
