import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core'
import { Subscription } from 'rxjs'
import { DashboardGrid, DashboardGridItem } from '../models/DashboardGrid'
import { DashboardConfigService } from '../services/dashboard-config.service'

@Component({
  selector: 'sl-dashboard-config',
  templateUrl: './dashBoardConfig.component.html',
  styleUrls: ['./dashBoardConfig.component.scss'],
  //    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DashBoardConfigComponent implements OnInit, OnDestroy {

  
  @Input() public children: TemplateRef<any>[] | null = null
  @Input() public childrennames: string[] = []
  @Input() public EditableFeature: string = "DASHCONFIG"
  @Input() dashboardId: number = 1;

  @Output() public DraggingChange = new EventEmitter<boolean>()

  public EditMode = false
  
  DashBoardConfig = new DashboardGrid()
  appColNum = 0
  showDialog = false
  subs = new Subscription()
  private _currCell: DashboardGridItem | undefined
  private ItemChangedSub: Subscription | null = null;
  public get currCell(): DashboardGridItem | undefined {
    return this._currCell;
  }
  public set currCell(value: DashboardGridItem | undefined) {
    if (this.ItemChangedSub) {
      this.ItemChangedSub.unsubscribe();
    }

    
   if (value) {
      this._currCell = DashboardGridItem.fromItem(value)

      var idx =  this.DashBoardConfig.Items.findIndex(v=>v.IdItem == this._currCell?.IdItem);
      this.DashBoardConfig.Items[idx] = this._currCell;
      this.ItemChangedSub = this._currCell.$ItemChanged.subscribe(v => {
        this.checkFullBoundaries();
        this.changeref.detectChanges();
      })
    }

  }
  ShowConfig = false

  constructor(private changeref: ChangeDetectorRef, private confPageServ: DashboardConfigService) { }

  ngOnInit(): void { 

    this.confPageServ.DashboardGrids$.subscribe((values) => {
      const v = values.find(v=>v.Id == this.dashboardId)
      

      if (v) {
        this.DashBoardConfig = new DashboardGrid();
        this.DashBoardConfig.fromObject(v)
      } else {
        this.DashBoardConfig.initializeNewDashboard()
        this.DashBoardConfig.isnew = true;
      }
      
      this.checkFullBoundaries();
      this.changeref.detectChanges()
    })
    this.confPageServ.Load()
  }
  ngOnDestroy(): void {
    if (this.ItemChangedSub) {
      this.ItemChangedSub.unsubscribe();
    }
  }

  addControl(x: number, y: number) {
    var itm = this.DashBoardConfig.AddControl(x, y, 3, 2)
    this.checkBoundaries(itm);
    this.changeref.detectChanges()
  }

  removeControl(id: number) {
    this.DashBoardConfig.RemoveControlByID(id)
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
    this.DashBoardConfig
    debugger;
    this.checkFullBoundaries();
    this.confPageServ.save(this.DashBoardConfig).subscribe((v) => {
      if (v) {
        this.EditMode = false
        this.changeref.detectChanges()
      }
    })
  }

  dashboardItems(r: any, c: any): any[] {
    return this.DashBoardConfig.findByPosition(r, c)
  }

  MoveControl(r: number, c: number, e: any) {
    console.log(e);
    const id = Number.parseInt(e.item.element.nativeElement.id.split('_')[1])
    const itm = this.DashBoardConfig.findById(id) as any
    itm.top = r
    itm.left = c
    this.checkBoundaries(itm);
    this.changeref.detectChanges()
  }

  checkBoundaries(itm: any) {
    // this.DashBoardConfig.rows a volte i valori arrivano come stringa, per evitare errori, forzo un cast to int per ogni situazione
    const v = parseInt(this.DashBoardConfig.rows.toString())
    const t = parseInt(itm.top.toString())
    const h = parseInt(itm.height.toString())
    if (t + h > v) this.DashBoardConfig.rows = t + h + 3;
    this.checkFullBoundaries();

  }

  checkFullBoundaries() {
    var max = 7;
    this.DashBoardConfig.Items.forEach(i => {
      if (i) {
        if (!i.height) i.height = 3;
        const t = parseInt(i.top.toString())
        const h = parseInt(i.height.toString())
        if (t + h > max) max = t + h;
      }
    });

    const vn = parseInt(this.DashBoardConfig.rows.toString())
    if (max > 10) {
      if (this.EditMode) {
        this.DashBoardConfig.rows = max + 3;
      } else {
        this.DashBoardConfig.rows = max;
      }

    } else {
      this.DashBoardConfig.rows = 10;
    }



  }

  GetCols() {
    var ret = [];
    for (var i = 0; i < this.DashBoardConfig.cols; i++) {
      ret.push(i * 10);
    }
    return ret;
  }

  GetRows() {
    var ret = [];
    for (var i = 0; i < this.DashBoardConfig.rows; i++) {
      ret.push(i * 10);
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
    const itm = this.DashBoardConfig.Items[idx - 1];
    if (itm) {
      this.checkBoundaries(itm);
    }
  }

  setupControl(cell: any) {
    this.currCell = cell

    if (this.currCell == undefined || this.currCell.ShowCustomSettings == undefined) {
      this.ShowConfig = true
    } else {
      this.currCell.ShowCustomSettings()
    }
  }

}
