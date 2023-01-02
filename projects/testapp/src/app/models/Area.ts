import { IDBModel } from "projects/ng-sl-db/src/public-api";

export class Area implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Name: string;
  Region: string;

  constructor(Region: string, Name: string) {
    this.Region = Region;
    this.Name = Name;
  }
}
