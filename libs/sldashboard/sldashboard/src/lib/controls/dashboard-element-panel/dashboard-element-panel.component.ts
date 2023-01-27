
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, EventEmitter, Input,  Output, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { DataSourceField } from '@soloud/SlDataSource';
import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetConfig } from '../../models/WidgetConfig';
import { WidgetStatus } from '../../models/WidgetStatus';

@Component({
    selector: 'sl-dashboard-element-panel',
    templateUrl: './dashboard-element-panel.component.html',
    styleUrls: ['./dashboard-element-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardElementPanelComponent implements AfterViewInit {

    @Input() item: DashboardWidget | undefined;

    @Input() status: WidgetStatus = WidgetStatus.view
    @Input() config: WidgetConfig | undefined;
    @Input() EditMode = 'none'
    @Input() Data: any;
    @Input() Fields: DataSourceField[] = []

    viewStatus = WidgetStatus.view;

    @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;
    @ViewChild('card') card!: ElementRef<any>;



    @Output() Delete = new EventEmitter<WidgetConfig>()
    @Output() Setup = new EventEmitter<WidgetConfig>()
    @Output() Copy = new EventEmitter<WidgetConfig>()


    DragDeltaWidth = 0;
    DragDeltaHeight = 0;


    get width(): number {
      if (this.item) {
        const w = this.item.config.width > 0 ? this.item.config.width : 1;
        return (w * 50) + this.DragDeltaWidth
      } else {
        return 100;
      }
    }
    get height(): number {
      if (this.item) {
        const h = this.item.config.height > 0 ? this.item.config.height : 1;
        return (h * 50) + this.DragDeltaHeight
      } else {
        return 100;
      }

    }

    ngAfterViewInit(): void {
      this.loadComponent();
    }

    loadComponent() {
      if (this.WidgetHost) {
        const viewContainerRef = this.WidgetHost.viewContainerRef;
        viewContainerRef.clear();
        if (this.item) {
            const componentRef = viewContainerRef.createComponent<DashboardWidget>(this.item.component);
            if (this.config) componentRef.instance.config = this.config;
            if (this.Data) componentRef.instance.Data = this.Data;
            if (this.Fields) componentRef.instance.Fields = this.Fields;
            componentRef.instance.status = this.status;

        }
      }
    }


   remove() {
    if (this.item) this.Delete.emit(this.item.config)
   }
   setup() {
    if (this.item) this.Setup.emit(this.item.config);
   }

   copy() {
    if (this.item) this.Copy.emit(this.item.config);
   }

   cdkResizeDragMoved(e: CdkDragMove<any>) {


    this.DragDeltaHeight = e.distance.y;
    this.DragDeltaWidth = e.distance.x;
    e.source.element.nativeElement.style.transform="translate3d(0px,0px," + "0px)"

   }
   cdkResizeDragEnded(e: CdkDragEnd){
    if (this.item && this.item.config){
      const deltax = Math.round(e.distance.x / 50);
      const deltay = Math.round(e.distance.y / 50);
      this.item.config.height += deltay;
      this.item.config.width += deltax;
      this.DragDeltaWidth = 0;
      this.DragDeltaHeight = 0;


    }
   }

   cdkMoveDragMoved(e: CdkDragMove<any>) {
    this.card.nativeElement.style.transform = e.source.element.nativeElement.style.transform;
    e.source.element.nativeElement.style.transform="translate3d(0px,0px," + "0px)"
   }
   cdkMoveDragEnded(e: CdkDragEnd){
    if (this.item && this.item.config){
      const deltax = Math.round(e.distance.x / 50);
      const deltay = Math.round(e.distance.y / 50);

      this.item.config.Top += deltay;
      this.item.config.Left += deltax;
      this.card.nativeElement.style.transform = "translate3d(0px,0px," + "0px)"
    }
   }

}
