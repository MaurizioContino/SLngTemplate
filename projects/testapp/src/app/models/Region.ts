import { IDBModel } from "ng-sl-db";
import { Area } from "./Area";

export class Region implements IDBModel {


  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number;
  Name: string = "";
  BackgroundImage: string = "";
  Avatar: string = "";
  Aree: Area[] = [];

  constructor(Id: number, Name: string,BackgroundImage: string, Avatar: string, aree: Area[] ){
    this.Id = Id;
    this.Name = Name;
    this.BackgroundImage = BackgroundImage;
    this.Avatar = Avatar;
    this.Aree = aree
  }

}


