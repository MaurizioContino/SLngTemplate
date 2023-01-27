import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataSource, DataSourceField, DataSourceFilter } from '../models/DataSource';


@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  Data$ = new Subject<DataSource>();
  DataRequired$ = new Subject<DataSource>();

  dataSources: DataSource[] = []

  getNames() {
    return this.dataSources.map(v=>v.name);
  }
  registerDatasource(Name: string, fields: DataSourceField[], filters: DataSourceFilter[]) {
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
