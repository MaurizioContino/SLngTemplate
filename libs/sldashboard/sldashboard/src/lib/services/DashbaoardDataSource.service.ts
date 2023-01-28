import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardDataSource, DashboardDataSourceField, DashboardDataSourceFilter } from '../models/DashboardDataSource';


@Injectable({
  providedIn: 'root'
})
export class DashboardDataSourceService {

  Data$ = new Subject<DashboardDataSource>();
  DataRequired$ = new Subject<DashboardDataSource>();

  dataSources: DashboardDataSource[] = []

  getNames() {
    return this.dataSources.map(v=>v.name);
  }
  registerDatasource(Name: string, fields: DashboardDataSourceField[], filters: DashboardDataSourceFilter[]) {
    this.dataSources.push(
      {name: Name, data: null, Fields: fields, Filters:filters}
    )
  }

  pushData(name: string, data: any) {
    const ds = this.dataSources.find(v=>v.name == name);
    if (ds){
      ds.data = data;
      this.Data$.next(ds);
    }
  }
  LoadData(DataSourceName: string) {
    const ds = this.dataSources.find(v=>v.name == DataSourceName);
    if (ds) this.DataRequired$.next(ds);
  }

}
