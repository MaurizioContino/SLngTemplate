import { Subject } from "rxjs";

export class DashboardItem {
  IdItem: number = 0;
  top: number;
  left: number;
  icon = ''
  configurator = false;
  idComponent: number;
  customData: any = {};

  ItemChanged$: Subject<DashboardItem>;
  private _title: string = "";

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title =  value;
    this.ItemChanged$.next(this);
  }

  private _width: number = 0;
  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width =  value;
    this.ItemChanged$.next(this);
  }
  private _height: number = 100;
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
    this.ItemChanged$.next(this);
  }
  
  private _Background: string = 'white';
  public get Background(): string {
    return this._Background;
  }
  public set Background(value: string) {
    this._Background = value;
    this.ItemChanged$.next(this);
  }

  constructor(top: number, left: number, height: number, width: number ){
    this.ItemChanged$ = new Subject<DashboardItem>();
    this.height = height;
    this.width = width;
    this.top = top ;
    this.left = left;
    this.idComponent = -1;
  }
  static fromItem(item: any): DashboardItem {
    const ret =  new DashboardItem(item.top, item.left,
        parseInt(item._height ? item._height.toString() : item.height.toString()),
        parseInt(item._width ? item._width.toString(): item.width.toString()));
    ret.IdItem = item.IdItem;
    ret.title = item.title;
    ret.idComponent = item.idComponent;
    ret.customData = JSON.parse(JSON.stringify(item.customData));


    return ret;
  }


  Update(item: DashboardItem) {
    this.height = item.height;
    this.width = item.width;
    this.top = item.top ;
    this.left = item.left;
    this.IdItem = item.IdItem;
    this.title = item.title;
    this.idComponent = item.idComponent;
    this.customData = item.customData;
    this.ItemChanged$.next(this);
  }

  toItem(): any {

    return {
      top: this.top,
      left: this.left,
      height: this.height,
      width: this.width,
      IdItem: this.IdItem,
      idComponent: this.idComponent,
      customData: this.customData,
      title: this.title
    }
  }
}
