
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
import { DashboardDataSourceField } from '../../models/DashboardDataSource';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetConfig } from '../../models/WidgetConfig';
import { WidgetStatus } from '../../models/WidgetStatus';

@Component({
    selector: 'sl-dashboard-element',
    templateUrl: './dashboard-element.component.html',
    styleUrls: ['./dashboard-element.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardElementComponent implements AfterViewInit {

    @Input() item: DashboardWidget | undefined;


    @Input() status: WidgetStatus = WidgetStatus.view
    @Input() config: WidgetConfig | undefined;
    @Input() EditMode = 'none'
    @Input() Data: any;
    @Input() Fields: DashboardDataSourceField[] = []

    viewStatus = WidgetStatus.view;

    @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;

    @Output() Delete = new EventEmitter<WidgetConfig>()
    @Output() Setup = new EventEmitter<WidgetConfig>()


    get width(): number {
      if (this.item) {
        const w = this.item.config.width > 0 ? this.item.config.width : 1;
        return w * 50
      } else {
        return 100;
      }
    }
    get height(): number {
      if (this.item) {
        const h = this.item.config.height > 0 ? this.item.config.height : 1;
        return h * 50
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
        if (this.item && this.item.component) {
            const componentRef = viewContainerRef.createComponent<DashboardWidget>(this.item.component);
            componentRef.instance.status = this.status;
            if (this.config) componentRef.instance.config = this.config;
            if (this.Data) componentRef.instance.Data = this.Data;
            if (this.Fields) componentRef.instance.Fields = this.Fields;
            componentRef.instance.status = this.status;

        }
      }
    }


   remove() {
    this.Delete.emit(this.config)
   }
   setup() {
    this.Setup.emit(this.config);
   }


}
