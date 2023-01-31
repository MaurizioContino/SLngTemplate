import { Injectable } from '@angular/core';
import { DashboardDataSourceService, operator, ValueType } from '@soloud/sldashboard';

import { SlDbService } from '@soloud/SlDb';

import { Observable, Subject, take, tap } from 'rxjs';
import { MonitorResultItem, MonitorResults } from '../models/MonitorResults';


export const ItemsDataSourceFields = [
  {Label: 'Manager', Property: 'IdManager', ValueType: ValueType.number, CustomType: 'IdManager'},
  {Label: 'Settimana', Property: 'Week', ValueType: ValueType.week},
  {Label: 'Aperte', Property: 'Aperte', ValueType: ValueType.number},
  {Label: 'ToolBox aperte', Property: 'ToolBox_Aperte', ValueType: ValueType.number},
  {Label: 'Business', Property: 'Business', ValueType: ValueType.number},
  {Label: 'Sepa business', Property: 'Sepa_Business', ValueType: ValueType.number},
  {Label: 'Non operative', Property: 'NonOperative', ValueType: ValueType.number},
  {Label: 'Sepa non operative', Property: 'Sepa_non_operative', ValueType: ValueType.number},
  {Label: 'Pross apertura', Property: 'Pross_apertura', ValueType: ValueType.number},
  {Label: 'Toolbox pa', Property: 'Sepa_pa', ValueType: ValueType.number},
  {Label: 'Sepa attivi', Property: 'Sepa_Attivi', ValueType: ValueType.number},
  {Label: 'Toolbox attivi', Property: 'Toolbox_Attivi', ValueType: ValueType.number},
]

export const ItemsDataSourceFilter = [
  {Property: 'IdManager', Operator:operator["=="], Value: '@any' },
  {Property: 'Week', Operator:operator["between"], Value: {from:'@latest', to: '@latest'} }


]


export const ItemsDataSource = {Name: "Monitor Data", Fields: ItemsDataSourceFields, Filters: ItemsDataSourceFilter}

@Injectable({
  providedIn: 'root'
})
export class MonitorResultsService {

  store = "MonitorResultItem";
  private _results: MonitorResults[] | null = null;
  public get results(): MonitorResults[] | null {
    return this._results;
  }
  public set results(value: MonitorResults[] | null) {
    this._results = value;
  }
  results$: Subject<MonitorResults[]> = new Subject<MonitorResults[]>();
  constructor(private db: SlDbService, private dssources: DashboardDataSourceService) {
    this.dssources.registerDatasource("Monitor Data",  ItemsDataSourceFields, ItemsDataSourceFilter)
    this.dssources.DataRequired$.subscribe(v=>{
      if (v && v.name==="Monitor Data") {

        this.db.GetAll<MonitorResultItem>(this.store).subscribe(items=>{
          const ret: any[] = [];
          items.forEach(itm => {
            const rec = ret.find(r => r.IdManager == itm.IdManager && r.Week == itm.Week && r.year == itm.year)
            if (rec) {
              rec[itm.Name] = itm.Value;
            } else {
              const tmp = {IdManager: itm.IdManager, Week: itm.Week, year: itm.year} as any
              tmp[itm.Name] = itm.Value;
              ret.push(tmp);
            }
          })
          this.dssources.pushData(v.name, ret)
        });
      }
    });
  }

  Load(reload: boolean = false) {


    if (reload || this.results == null) {
      const retItems: MonitorResults[] = [];
      this.db.GetAll<MonitorResultItem>(this.store).subscribe(items=>{

        let curr: MonitorResults | undefined = undefined;
        items.forEach(itm => {
          curr = retItems.find(v=>v.IdManager == itm.IdManager && v.Week == itm.Week);
          if (curr){
            curr.Values.push(itm)
          } else {
            curr = new MonitorResults(itm.IdManager, itm.Week)
            retItems.push(curr);
            curr.Values.push(itm);

          }
        });
        this.dssources.pushData("Monitor Data", retItems);
        this.results = retItems;
        this.results$.next(retItems);

      })
    } else {

      this.results$.next(this.results);

    }

  }



  save(items: MonitorResults[]):Observable<MonitorResults[]> {
    const ret = new Subject<MonitorResults[]>();
    items.forEach(r=>{
      this.db.Save(this.store, r.Values).subscribe(v=>{

          this.Load(true)
       })
    })
    return ret;
  }

  saveItem(item: MonitorResultItem) {
    item.updated = new Date().toISOString();
    this.db.Save(this.store, [item]).subscribe(v=>{
      this.Load(true)
    })
  }



  delete(items: MonitorResults[]) {
    if (items.length>0) {
      return null;
      //return this.db.Delete(this.store, results)
    } else{
      return null
    }
  }

  add(items: MonitorResults[]) {
    if (items.length>0) {
      const ret = new Subject<MonitorResults[]>();
      items.forEach(r=>{
        this.db.Save(this.store, r.Values).subscribe(v=>{
          this.Load(true)
        })
      })
      return ret;
    } else {
      return null;
    }

  }

  update(items: MonitorResults[]) {

    items.forEach(r=>{
      r.Values.forEach(v => {
        v.updated = new Date().toISOString();
        v.originalupdated = v.updated;
      });
    });
    if (items.length>0) {
      const ret = new Subject<MonitorResults[]>();
      items.forEach(r=>{
        this.db.Update(this.store, r.Values).subscribe((v: any)=>{

            this.Load(true)
        })
      })
      return ret;
    } else {
      return null;
    }
  }
}
