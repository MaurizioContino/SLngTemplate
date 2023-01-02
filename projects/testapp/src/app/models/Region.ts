import { IDBModel } from "projects/ng-sl-db/src/public-api";
import { Area } from "./Area";

export class Region implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;

  Name: string = "";
  BackgroundImage: string = "";
  Avatar: string = "";
  Aree: Area[] = [];

  constructor(Name: string,BackgroundImage: string, Avatar: string ){
    this.Name = Name;
    this.BackgroundImage = BackgroundImage;
    this.Avatar = Avatar;

  }

}


