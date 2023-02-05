import { IDBModel } from "@soloud/sldb";

export class MonitorItem implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number ;
  Name: string;


  constructor(Id: number, Name: string) {
    this.Id = Id;
    this.Name = Name;
  }
}
