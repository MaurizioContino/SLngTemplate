import { IDBModel } from "projects/ng-sl-db/src/public-api";
import { Area } from "./Area";
import { Role } from "./Role";
export class Manager implements IDBModel {

  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;

  Name: string = "";
  Surname: string = "";
  Role: string;
  Area: string;
  Region: string = "";
  Avatar: string;
  BackgroundImage: string;

  constructor(Name: string, Surname: string, Role: string, Area: string, Avatar:string, BackgroundImage:string ) {
    this.Name = Name;
    this.Surname = Surname;
    this.Role = Role;
    this.Area = Area;
    this.Avatar = Avatar;
    this.BackgroundImage = BackgroundImage;
   }
}
