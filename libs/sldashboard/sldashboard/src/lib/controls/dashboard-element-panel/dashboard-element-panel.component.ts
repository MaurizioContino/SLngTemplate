
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, EventEmitter, Input,  Output, ViewChild, ContentChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
import { DashboardDataSource } from '../../models/DashboardDataSource';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetConfig } from '../../models/WidgetConfig';
import { DashboardConfigService } from '../../services/dashboard.service';

@Component({
    selector: 'sl-dashboard-element-panel',
    templateUrl: './dashboard-element-panel.component.html',
    styleUrls: ['./dashboard-element-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardElementPanelComponent implements AfterViewInit {


    @Input() Config!: WidgetConfig;
    @Input() EditMode = false
    @Input() DataSource: DashboardDataSource | undefined;


    @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;
    @ViewChild('card') card!: ElementRef<any>;



    @Output() Delete = new EventEmitter<WidgetConfig>()
    @Output() Setup = new EventEmitter<WidgetConfig>()
    @Output() Copy = new EventEmitter<WidgetConfig>()


    DragDeltaWidth = 0;
    DragDeltaHeight = 0;


    get width(): number {
      if (this.Config) {
        const w = this.Config.width > 0 ? this.Config.width : 1;
        return (w * 50) + this.DragDeltaWidth - 20; //20 padding
      } else {
        return 100;
      }
    }
    get height(): number {
      if (this.Config) {
        const h = this.Config.height > 0 ? this.Config.height : 1;
        return (h * 50) + this.DragDeltaHeight - 20; //20 padding
      } else {
        return 100;
      }

    }
    constructor(private cdr: ChangeDetectorRef, private dashserv: DashboardConfigService) {}


    ngAfterViewInit(): void {
      this.loadComponent();
    }

    loadComponent() {
      if (this.WidgetHost) {
        const viewContainerRef = this.WidgetHost.viewContainerRef;
        viewContainerRef.clear();
        if (this.Config) {
          const model = this.dashserv.Widgets.find((v) => v.IdComponent == this.Config?.IdComponent);
          if (model) {
            const componentRef = viewContainerRef.createComponent<DashboardWidget>(model.component);
            if (this.Config) componentRef.instance.Config = this.Config;
            if (this.DataSource) componentRef.instance.DataSource = this.DataSource;
            this.cdr.detectChanges()
          }
        }
      }
    }


   remove() {
    if (this.Config) this.Delete.emit(this.Config)
   }
   setup() {
    if (this.Config) this.Setup.emit(this.Config);
   }

   copy() {
    if (this.Config) this.Copy.emit(this.Config);
   }

   cdkResizeDragMoved(e: CdkDragMove<any>) {


    this.DragDeltaHeight = e.distance.y;
    this.DragDeltaWidth = e.distance.x;
    e.source.element.nativeElement.style.transform="translate3d(0px,0px," + "0px)"

   }
   cdkResizeDragEnded(e: CdkDragEnd){
    if (this.Config){
      const deltax = Math.round(e.distance.x / 50);
      const deltay = Math.round(e.distance.y / 50);
      this.Config.height += deltay;
      this.Config.width += deltax;
      this.DragDeltaWidth = 0;
      this.DragDeltaHeight = 0;


    }
   }

   cdkMoveDragMoved(e: CdkDragMove<any>) {
    this.card.nativeElement.style.transform = e.source.element.nativeElement.style.transform;
    e.source.element.nativeElement.style.transform="translate3d(0px,0px," + "0px)"
   }
   cdkMoveDragEnded(e: CdkDragEnd){
    if (this.Config){
      const deltax = Math.round(e.distance.x / 50);
      const deltay = Math.round(e.distance.y / 50);

      this.Config.Top += deltay;
      this.Config.Left += deltax;
      this.card.nativeElement.style.transform = "translate3d(0px,0px," + "0px)"
    }
   }

}
