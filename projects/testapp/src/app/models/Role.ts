import { IDBModel } from "projects/ng-sl-db/src/public-api";

export class Role implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;

  Name: string;
  constructor(Name: string) {
    this.Name = Name;
  }
}
