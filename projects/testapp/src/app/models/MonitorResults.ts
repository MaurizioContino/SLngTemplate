import { IDBModel } from "projects/ng-sl-db/src/public-api";

export class MonitorResultItem implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;

  Id: number;
  IdMonitorItem: number;
  Week: number;
  IdManager: number;
  Name: string;
  Value: number;
  constructor(Id: number, IdMonitorItem: number, Name: string, IdManager: number, week: number, Value: number) {
    this.Id = Id;
    this.IdMonitorItem = IdMonitorItem;
    this.IdManager = IdManager
    this.Week = week;
    this.Value = Value;
    this.Name = Name
  }
}
export class MonitorResults  {


  Week: number;
  IdManager: number;
  DateStart: Date | null = null;
  DateEnd: Date | null = null;
  Loaded = false;
  Values: MonitorResultItem[] = [];


  constructor(IdManager: number, week: number) {

    this.IdManager = IdManager;
    this.Week = week;
  }
}
