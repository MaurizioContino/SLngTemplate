import { IDBModel } from "projects/ng-sl-db/src/public-api";

export class Manager implements IDBModel {

  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number ;
  Name: string = "";
  Surname: string = "";
  Role: string;
  IdArea: number;
  Region: string = "";
  Avatar: string;
  BackgroundImage: string;

  constructor(Id: number, Name: string, Surname: string, Role: string, IdArea: number, Avatar:string, BackgroundImage:string ) {
    this.Id = Id;
    this.Name = Name;
    this.Surname = Surname;
    this.Role = Role;
    this.IdArea = IdArea;
    this.Avatar = Avatar;
    this.BackgroundImage = BackgroundImage;
   }
}
