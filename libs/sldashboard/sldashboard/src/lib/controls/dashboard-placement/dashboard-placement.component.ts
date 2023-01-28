import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';

import { Subject, Subscription, takeUntil } from 'rxjs';
import { Dashboard } from '../../models/Dashboard';
import { DashboardDataSource } from '../../models/DashboardDataSource';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetConfig } from '../../models/WidgetConfig';
import { WidgetStatus } from '../../models/WidgetStatus';
import { DashboardDataSourceService } from '../../services/DashbaoardDataSource.service';
import { DashboardConfigService } from '../../services/dashboard.service';

@Component({
    selector: 'sl-dashboard-placement',
    templateUrl: './dashboard-placement.component.html',
    styleUrls: ['./dashboard-placement.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPlacementComponent implements OnInit, AfterViewInit, OnDestroy {
  private _contents: QueryList<TemplateRef<any>> | undefined;
  private _dashboard: Dashboard | undefined;
  @Input()

  public get dashboard(): Dashboard | undefined {
    return this._dashboard;
  }
  public set dashboard(value: Dashboard | undefined) {
    this._dashboard = value;

    if (value && value.DataSourceName) {

      this.registerDatasource();
      this.dsSources.LoadData(value.DataSourceName);
    }
  }

  @ContentChildren('dashboarditem')
    public get contents(): QueryList<TemplateRef<any>> | undefined {
        return this._contents;
    }
    public set contents(value: QueryList<TemplateRef<any>> | undefined) {
        this._contents = value;
        this.cdr.detectChanges();
    }
    destroy$ = new Subject<any>();
    rows: number[] = [];
    cols: number[] = [];

    SelectedItem: DashboardWidget | undefined;
    SelectedConfig: WidgetConfig | undefined;

    DisplayDetails: true | null = null;
    showSelect = false;
    showConfig = false;
    configStatus = WidgetStatus.config;
    viewStatus = WidgetStatus.view;
    selectr: number | null = null;
    selectc: number | null = null;
    datasource: DashboardDataSource = {name: 'none', Fields:[], Filters:[], data:null};
    dsSubscriber: Subscription | undefined;
    constructor(private myElement: ElementRef, private cdr: ChangeDetectorRef,
      public dashserv: DashboardConfigService, private dsSources: DashboardDataSourceService) {}

      registerDatasource() {
        if (this.dashboard) {

          if (this.dsSubscriber) this.dsSubscriber.unsubscribe();
          this.dsSubscriber = this.dsSources.Data$.pipe(takeUntil(this.destroy$)).subscribe(ds=>{

            if (ds && ds.name==this.dashboard?.DataSourceName) {

              this.datasource = ds;
              this.cdr.detectChanges();
              if(this.dashboard)
              {
                this.dashboard.Items.forEach(v=>{
                  v.CustomData
                })
              }
            }
          });

        }
      }
      ngOnInit(): void {
        this.registerDatasource();
      }
      ngOnDestroy(): void {
        this.destroy$.next(null);
        this.destroy$.complete();
      }

    ngAfterViewInit() {
        this.myElement.nativeElement.style = '100%';
        const maxHeight = (this.myElement.nativeElement.offsetWidth - 50) / 50;
        const maxwidth = 40;

        for (let i = 0; i < maxwidth; i++) {
            this.rows.push(i);
        }
        for (let i = 0; i < maxHeight; i++) {
            this.cols.push(i);
        }
    }
    showadd(idr: number, idc: number) {
        this.DisplayDetails = true;
        this.showSelect = true;
        this.selectc = idc;
        this.selectr = idr;
    }
    closeDetails() {
        this.DisplayDetails = null;
        this.showSelect = false;
        this.showConfig = false;
        this.selectc = null;
        this.selectr = null;
    }

    InitnewWidget(IdComponent: number) {

      const model = this.dashserv.Widgets.find((v) => v.IdComponent == IdComponent);
      this.SelectedItem = JSON.parse(JSON.stringify(model));
      if (this.SelectedItem) {
          this.showSelect = false;
          this.showConfig = true;
          this.SelectedConfig = this.SelectedItem.config;
          if (this.SelectedConfig && this.selectr!==null && this.selectc!==null) {
            this.SelectedConfig.Top = this.selectr;
            this.SelectedConfig.Left = this.selectc;
            this.SelectedConfig.IdComponent = IdComponent;
            this.dashboard?.Items.push(this.SelectedConfig);
            this.selectr = null;
            this.selectc = null
            this.cdr.detectChanges();
          }
      }
    }
    SaveConfig(){
      //todo
    }
    CancelConfig(){
      //todo
    }

    WidgetIn(r: number, c: number): DashboardWidget | null {
      if (this.dashboard) {
        const config = this.dashboard.getWidgetByPosition(r,c);
        const model = this.dashserv.Widgets.find(v=>v.IdComponent==config?.IdComponent);
        if (model && config) {
          const w =  JSON.parse(JSON.stringify(model)) as DashboardWidget;
          w.component = model.component;
          w.config = config;
          return w;
        } else {
          return null
        }

      } else {
        return null;
      }
    }
    ConfigIn(r: number, c: number): WidgetConfig | null {
      if (this.dashboard) {
        return this.dashboard.getWidgetByPosition(r,c);
      } else {
        return null;
      }
    }
    copyElement(e: WidgetConfig) {
      const model = this.dashserv.Widgets.find((v) => v.IdComponent == e.IdComponent);
      this.SelectedItem = JSON.parse(JSON.stringify(model));
      if (this.SelectedItem && this.dashboard) {
          this.showSelect = false;
          this.showConfig = true;
          this.SelectedItem.config = JSON.parse(JSON.stringify(e));
          this.SelectedItem.config.Top++;
          this.SelectedConfig = this.SelectedItem.config;
          this.dashboard.Items.push(this.SelectedConfig);
      }
    }
    deleteElement(e: WidgetConfig) {
      if (this.dashboard) {
        const idx = this.dashboard.Items.indexOf(e);
        this.dashboard.Items.splice(idx)
        this.DisplayDetails = null;
      }
    }
    setupElement(e: WidgetConfig) {
      if (this.dashboard) {
        const idx = this.dashboard.Items.indexOf(e);
        const newItem = JSON.parse(JSON.stringify(this.dashboard.Items[idx]))
        this.dashboard.Items[this.dashboard?.Items.length - 1].Top++;

      }
    }
}
