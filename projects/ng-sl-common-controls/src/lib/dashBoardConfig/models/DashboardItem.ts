import { Subject } from "rxjs";

export class DashboardItem {
  IdItem: number = 0;
  top: number;
  left: number;
  $ItemChanged: Subject<DashboardItem>;


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
    this.$ItemChanged = new Subject<DashboardItem>();
    this.height = height;
    this.width = width;
    this.top = top ;
    this.left = left;
    this.idComponent = -1;
  }
  static fromItem(item: DashboardItem): DashboardItem {
    const ret =  new DashboardItem(item.top, item.left,
        parseInt(item._height ? item._height.toString() : item.height.toString()),
        parseInt(item._width ? item._width.toString(): item.width.toString()));
    ret.IdItem = item.IdItem;
    ret.idComponent = item.idComponent;
    ret.customData = item.customData;
    ret.ShowCustomSettings = item.ShowCustomSettings;
    return ret;
  }
  toItem(): DashboardItem {
    const ret =  new DashboardItem(this.top, this.left, this.height, this.width);
    ret.IdItem = this.IdItem;
    ret.idComponent = this.idComponent;
    ret.customData = this.customData;
    ret.ShowCustomSettings = this.ShowCustomSettings;
    //ret.$ItemChanged = null;
    return ret;
  }
}
