import { outputAst } from '@angular/compiler';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
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
    
    @Input()
    item: DashboardWidget | undefined;

    @Input() status: WidgetStatus = WidgetStatus.view
    @Input() config: WidgetConfig | undefined;
    @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;
    
    ngAfterViewInit(): void {
      this.loadComponent();
      
    }
  
    loadComponent() {
        const viewContainerRef = this.WidgetHost.viewContainerRef;
        viewContainerRef.clear();
        if (this.item) {
            const componentRef = viewContainerRef.createComponent<DashboardWidget>(this.item.component);
            if (this.config) componentRef.instance.config = this.config;
            componentRef.instance.status = this.status;
            
        }
    }
}
