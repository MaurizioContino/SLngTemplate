import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core'
import { Subscription } from 'rxjs'
import { DashboardGrid } from './models/DashboardGrid'
import { DashboardItem } from './models/DashboardItem'
import { DashboardConfigService } from './services/dashboard.service'

@Component({
  selector: 'sl-dashboard-config',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashBoardComponent implements OnInit, OnDestroy {


  @Input() public children: TemplateRef<any>[] | null = null
  @Input() public childrennames: string[] = []
  @Input() public EditableFeature: string = "DASHCONFIG"
  @Input() dashboardId: number = 1;
  @Input() Injections : any = null;
  @Output() public DraggingChange = new EventEmitter<boolean>()

  public EditMode = false

  @Input() DashBoardConfig :DashboardGrid | undefined = new DashboardGrid()
  appColNum = 0
  showDialog = false
  subs = new Subscription()
  private _currCell: DashboardItem | undefined
  private ItemChangedSub: Subscription | null = null;
  public get currCell(): DashboardItem | undefined {
    return this._currCell;
  }
  public set currCell(value: DashboardItem | undefined) {
    if (this.ItemChangedSub) {
      this.ItemChangedSub.unsubscribe();
    }


   if (value) {
      this._currCell = value; // DashboardItem.fromItem(value)
      this._currCell.configurator = true
      this.currCell?.Update
      this.currwidth = value.width;
      this.currheight = value.height;
      this.currtitle = value.title;

      this.ItemChangedSub = this._currCell.ItemChanged$.subscribe(v => {
        this.checkFullBoundaries();
        this.changeref.detectChanges();
      })
    }

  }

  // Proprietà a modifica immediata
  private _currwidth = 0
  public get currwidth() {
    return this._currwidth
  }
  public set currwidth(value) {
    this._currwidth = value
    var idx =  this.DashBoardConfig!.Items.findIndex(v=>v.IdItem == this._currCell?.IdItem);
    this.DashBoardConfig!.Items[idx].width = value;
    this._currCell!.width = value;
    this.changeref.detectChanges();
  }
  private _currheight = 0
  public get currheight() {
    return this._currheight
  }
  public set currheight(value) {
    this._currheight = value
    var idx =  this.DashBoardConfig!.Items.findIndex(v=>v.IdItem == this._currCell?.IdItem);
    this.DashBoardConfig!.Items[idx].height = value;
    this._currCell!.height = value;
    this.changeref.detectChanges();
  }

  private _title = ""
  public get currtitle() {
    return this._title
  }
  public set currtitle(value) {
    this._title = value
    var idx =  this.DashBoardConfig!.Items.findIndex(v=>v.IdItem == this._currCell?.IdItem);
    this.DashBoardConfig!.Items[idx].title = value;
    this._currCell!.title = value;
    this.changeref.detectChanges();
  }


  constructor(private changeref: ChangeDetectorRef, private confPageServ: DashboardConfigService) { }



  ngOnInit(): void {

    if (this.DashBoardConfig) {

      this.injectParameters(this.DashBoardConfig!);
      this.checkFullBoundaries();
      this.changeref.detectChanges()
    }
  }
  injectParameters(v: DashboardGrid){
    if (this.Injections) {
      if (!v.Items) v.Items = [];
      for(let i = 0; i<v.Items.length; i++)
      {
        v.Items[i] = DashboardItem.fromItem(v.Items[i]);
        if (!v.Items[i].customData) v.Items[i].customData = {}
        Object.keys(this.Injections).forEach(key=>{
          v.Items[i].customData[key] = this.Injections[key]
        })
      }
    }
  }
  ngOnDestroy(): void {
    if (this.ItemChangedSub) {
      this.ItemChangedSub.unsubscribe();
    }
  }

  addControl(x: number, y: number) {
    var itm = this.DashBoardConfig!.AddControl(x, y, 3, 2)
    this.checkBoundaries(itm);
    this.changeref.detectChanges()
  }

  removeControl(id: number) {
    this.DashBoardConfig!.RemoveControlByID(id)
    this.changeref.detectChanges()
  }

  clearAll() { }
  replacer(key: string, value: any) {
    if (key == "http") return undefined;
    else if (key == "cfg") return undefined;
    else if (key == "ShowCustomSettings") return undefined;
    else return value;
  }
  saveConf() {


    this.checkFullBoundaries();
    this.DashBoardConfig!.updated = new Date().toISOString();
    for(var idx=0;idx < this.DashBoardConfig!.Items.length; idx++){
      // Semplifico l'elemento che verrà salvato
      this.DashBoardConfig!.Items[idx] = this.DashBoardConfig!.Items[idx].toItem()
    }
    this.confPageServ.save(this.DashBoardConfig!).subscribe((v) => {
      if (v) {
        this.EditMode = false
        this.changeref.detectChanges()
      }
    })
  }

  dashboardItems(r: any, c: any): any[] {
    if (this.DashBoardConfig)
      {

        return this.DashBoardConfig!.findByPosition(r, c)
      } else {
        return [];
      }
  }

  MoveControl(r: number, c: number, e: any) {

    const id = Number.parseInt(e.item.element.nativeElement.id.split('_')[1])
    const itm = this.DashBoardConfig!.findById(id) as any
    itm.top = r
    itm.left = c
    this.checkBoundaries(itm);
    this.changeref.detectChanges()
  }

  checkBoundaries(itm: any) {
    // this.DashBoardConfig!.rows a volte i valori arrivano come stringa, per evitare errori, forzo un cast to int per ogni situazione
    const v = parseInt(this.DashBoardConfig!.rows.toString())
    const t = parseInt(itm.top.toString())
    const h = parseInt(itm.height.toString())
    if (t + h > v) this.DashBoardConfig!.rows = t + h + 3;
    this.checkFullBoundaries();

  }

  checkFullBoundaries() {
    var max = 7;
    this.DashBoardConfig!.Items.forEach(i => {
      if (i) {
        if (!i.height) i.height = 3;
        const t = parseInt(i.top.toString())
        const h = parseInt(i.height.toString())
        if (t + h > max) max = t + h;
      }
    });

    const vn = parseInt(this.DashBoardConfig!.rows.toString())
    if (max > 10) {
      if (this.EditMode) {
        this.DashBoardConfig!.rows = max + 3;
      } else {
        this.DashBoardConfig!.rows = max;
      }

    } else {
      this.DashBoardConfig!.rows = 10;
    }



  }

  GetCols() {
    var ret = [];
    if (this.DashBoardConfig) {
      for (var i = 0; i < this.DashBoardConfig!.cols; i++) {
        ret.push(i * 10);
      }
    } else {
      for (var i = 0; i < 10; i++) {
        ret.push(i * 10);
      }
    }

    return ret;
  }

  GetRows() {
    var ret = [];
    if (this.DashBoardConfig) {
      for (var i = 0; i < this.DashBoardConfig!.rows; i++) {
        ret.push(i * 10);
      }

    } else {
      for (var i = 0; i < 10; i++) {
        ret.push(i * 10);
      }
    }
    return ret;
  }


  dragging = ''
  dragstart(idx: number) {
    this.dragging = 'control_' + idx
    this.DraggingChange.emit(true)
  }

  dragend(idx: number) {
    this.DraggingChange.emit(false)
    this.dragging = ''
    const itm = this.DashBoardConfig!.Items[idx - 1];
    if (itm) {
      this.checkBoundaries(itm);
    }
  }

  setupControl(cell: any) {
    this.currCell = DashboardItem.fromItem(cell);
    this.currCell.configurator = true;

    this.changeref.detectChanges();
  }

  editclose(currCell: any) {
    var idx =  this.DashBoardConfig!.Items.findIndex(v=>v.IdItem == this._currCell?.IdItem);
    this.DashBoardConfig!.Items[idx].Update(currCell);
    this._currCell = undefined;
    this.changeref.detectChanges();

  }
}
