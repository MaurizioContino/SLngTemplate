import { Injectable } from '@angular/core';
import { SlDbService } from '@soloud/SlDb';
import { Observable, Subject, take, tap } from 'rxjs';
import { Dashboard } from '../models/Dashboard';
import { DashboardWidget } from '../models/DashboardWidget';


@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {

  store = "Dashboards";
  DashboardGrids: Dashboard[] | null = null;
  DashboardGrids$: Subject<Dashboard[]> = new Subject<Dashboard[]>();

  Widgets: DashboardWidget[] = [];

  constructor(private db: SlDbService) {
  }

  Load(reload: boolean = false) {
    if (reload || this.DashboardGrids == null) {
      this.db.GetAll<Dashboard>(this.store).subscribe(v=>{
        this.DashboardGrids = []
        v.forEach(g=>{
          const dg = new Dashboard();
          dg.fromObject(g);
          this.DashboardGrids?.push(dg)
        })

        this.DashboardGrids$.next(this.DashboardGrids);
      })
    }
    else {
      this.DashboardGrids$.next(this.DashboardGrids);
    }
  }



  save(dashboardGrids: Dashboard):Observable<Dashboard[]> {
    const ret = new Subject<Dashboard[]>();

     this.db.Save(this.store, [dashboardGrids]).subscribe((v: any)=>{
      this.db.GetAll<Dashboard>(this.store).subscribe((results: Dashboard[])=>{
        this.DashboardGrids = results;
        this.DashboardGrids$.next(results);
        ret.next(results);
      })
     })
     return ret;
  }


  delete(dashboardGrids: Dashboard[]) {
    if (dashboardGrids.length>0) {
      return this.db.Delete(this.store, dashboardGrids)
    } else{
      return null

    }
  }

  add(dashboardGrids: Dashboard[]) {
    if (dashboardGrids.length>0) {
      return this.db.Insert(this.store, dashboardGrids)

    } else{
      return null

    }

  }

  update(dashboardGrids: Dashboard[]) {

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

  calculateColor(colorfuncs: string[], value: number, rightvalues: any): string {
    let ret = "black";
    colorfuncs.forEach(cf => {
      const slices = cf.split(':')
      if (slices[0]=='direct' || slices[0]=='formula') {
        if (slices[0]=='direct') {
          ret = slices[1];
        } else {
          if (this.colorFormula(value, slices[2], slices[3], rightvalues))
          {
            ret = slices[1]
          }

        }
      } else {
        ret = slices[0]
      }
    });
    return ret;
  }

  colorFormula(value: number, comparer: string, rightvalue: string, rightvalues: any): boolean {
    switch(comparer) {
      case "=": {
        if (value == rightvalues[rightvalue]) return true;
        break;
      }
      case ">": {
        if (value > rightvalues[rightvalue]) return true;
        break;
      }
      case "<": {
        if (value < rightvalues[rightvalue]) return true;
        break;
      }
      case ">=": {
        if (value >= rightvalues[rightvalue]) return true;
        break;
      }
      case "<=": {
        if (value <= rightvalues[rightvalue]) return true;
        break;
      }
      case "<>": {
        if (value != rightvalues[rightvalue]) return true;
        break;
      }
      default:
        return false;
    }
    return false
  }

}
