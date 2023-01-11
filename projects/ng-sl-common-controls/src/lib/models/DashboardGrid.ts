import { IDBModel } from "ng-sl-db";
import { Observable, Subject } from "rxjs";


export class DashboardGridItem {
  IdItem: number = 0;
  top: number;
  left: number;
  $ItemChanged: Subject<DashboardGridItem>;

  private _width: number = 0;
  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width =  value;
    this.$ItemChanged.next(this);
  }
  private _height: number = 100;
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
    this.$ItemChanged.next(this);
  }
  idComponent: number;
  customData: any = {};
  public ShowCustomSettings: any;

  constructor(top: number, left: number, height: number, width: number ){
    this.$ItemChanged = new Subject<DashboardGridItem>();
    this.height = height;
    this.width = width;
    this.top = top ;
    this.left = left;
    this.idComponent = -1;
  }
  static fromItem(item: DashboardGridItem): DashboardGridItem {
    const ret =  new DashboardGridItem(item.top, item.left, 
        parseInt(item._height ? item._height.toString() : item.height.toString()), 
        parseInt(item._width ? item._width.toString(): item.width.toString()));
    ret.IdItem = item.IdItem;
    ret.idComponent = item.idComponent;
    ret.customData = item.customData;
    ret.ShowCustomSettings = item.ShowCustomSettings;
    return ret;
  }
  toItem(): DashboardGridItem {
    const ret =  new DashboardGridItem(this.top, this.left, this.height, this.width);
    ret.IdItem = this.IdItem;
    ret.idComponent = this.idComponent;
    ret.customData = this.customData;
    ret.ShowCustomSettings = this.ShowCustomSettings;
    //ret.$ItemChanged = null;
    return ret;
  }
}

export class DashboardGrid implements IDBModel {

  isnew: boolean = false;
  updated: string = "";
  originalupdated: string = ""
  deleted: boolean = false;
  Id: number = 0;

  Items: DashboardGridItem[] = [];
  rows: number = 0;
  cols: number = 0;
  max = 0;


  public fromJson(data: string){
    const deserialized = JSON.parse(data) as DashboardGrid;
    if (deserialized.Items)
    {
      this.Items = deserialized.Items.map(v=>  DashboardGridItem.fromItem(v));
    }
    if (this.Items==undefined || this.Items==null) this.initializeNewDashboard();
    this.max = deserialized.max;
    if (this.rows == 0) this.rows = 10;
    if (this.cols == 0) this.cols = 10;
   
    
  }


  public fromObject(data: DashboardGrid){
    this.isnew = data.isnew
    this.updated = data.updated
    this.originalupdated = data.originalupdated
    this.deleted = data.deleted
    this.Id = data.Id
    this.Items = data.Items
    this.rows = data.rows
    this.cols = data.cols
    for (var idx = 0; idx < this.Items.length; idx++) {
      this.Items[idx] = DashboardGridItem.fromItem(this.Items[idx]);
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

    const itm = new DashboardGridItem(top, left, height, width);
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
