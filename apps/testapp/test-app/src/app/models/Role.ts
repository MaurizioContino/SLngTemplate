import { IDBModel } from "ng-sl-db";

export class Role implements IDBModel {

  Id: number;
  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;

  Name: string;
  constructor(Id: number, Name: string) {
    this.Name = Name;
    this.Id = Id;
  }
}
