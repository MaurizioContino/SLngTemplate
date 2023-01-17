import { IDBModel } from "ng-sl-db";
import { DashboardFilter } from "./DashboardFilter";
import { DashboardItem } from "./DashboardItem";

export class DashboardGrid implements IDBModel {

  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number = 0;
  Name = ""
  Description = ""
  Items: DashboardItem[] = [];
  Filters: DashboardFilter[] = []
  rows: number = 0;
  cols: number = 0;
  max = 0;


  public fromJson(data: string){
    const deserialized = JSON.parse(data) as DashboardGrid;
    if (deserialized.Items)
    {
      this.Items = deserialized.Items.map(v=>  DashboardItem.fromItem(v));
    }
    if (this.Items==undefined || this.Items==null) this.initializeNewDashboard();
    this.max = deserialized.max;
    this.Items = deserialized.Items ? deserialized.Items : [] 
    this.rows = deserialized.rows ? deserialized.rows : 10;
    this.cols = deserialized.cols ? deserialized.cols : 10;
    this.Name = deserialized.Name;
    this.Description = deserialized.Description;

    if (this.rows == 0) this.rows = 10;
    if (this.cols == 0) this.cols = 10;


  }


  public fromObject(data: DashboardGrid){
    this.isnew = data.isnew
    this.updated = data.updated
    this.originalupdated = data.originalupdated
    this.deleted = data.deleted
    this.Id = data.Id
    this.Items = data.Items ? data.Items : [] 
    this.rows = data.rows ? data.rows : 10;
    this.cols = data.cols ? data.cols : 10;
    this.Name = data.Name;
    this.Description = data.Description;

    if (this.rows == 0) this.rows = 10;
    if (this.cols == 0) this.cols = 10;
    
    for (var idx = 0; idx < this.Items.length; idx++) {
      this.Items[idx] = DashboardItem.fromItem(this.Items[idx]);
    }

  }


    initializeNewDashboard() {
    this.Items = [];
    this.max = 0;
    this.rows = 10;
    this.cols = 10;
    this.isnew = true;
  }


  public AddControl(top:number, left:number, width: number, height: number ) {
    this.max = 0;
    this.Items.forEach(v=>{
      if (v.IdItem > this.max) this.max = v.IdItem;
    });

    this.max += 1;

    const itm = new DashboardItem(top, left, height, width);
    itm.IdItem = this.max;
    this.Items.push(itm)
    return itm;
  }

  RemoveControlByID(id: number){
    if (this.Items)  {
      const v = this.Items.find(v=>v.IdItem == id)
      if (v) {
        const idx = this.Items.indexOf(v);
        this.Items.splice(idx,1);
      }
    }
  }

  public findByPosition(row: number, col: number) {
    if (this.Items && this.Items.length>0) {
      const res = this.Items.filter(v=>v.top==row && v.left==col);

      if (res.length>0) {
        return res
      } else {
        return [];
      }
    } else {
      return [];
    }

  }
  public findById(id: number) {
    const res = this.Items.filter(v=>v.IdItem == id);
    if (res.length>0) {
      return res[0]
    } else {
      return [];
    }

  }



}
