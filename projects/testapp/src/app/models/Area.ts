import { IDBModel } from "projects/ng-sl-db/src/public-api";

export class Area implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number ;
  IdRegion: number;
  Name: string;
  Region: string;

  constructor(Id: number ,IdRegion: number, Region: string, Name: string) {
    this.Id = Id;
    this.IdRegion = IdRegion
    this.Region = Region;
    this.Name = Name;
  }
}
