import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
import { DashboardDataSource } from '../../models/DashboardDataSource';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetConfig } from '../../models/WidgetConfig';
import { DashboardConfigService } from '../../services/dashboard.service';

@Component({
    selector: 'sl-dashboard-element',
    templateUrl: './dashboard-element.component.html',
    styleUrls: ['./dashboard-element.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardElementComponent implements AfterViewInit {
    private _Config: WidgetConfig | undefined;

    @Input()
    public get Config(): WidgetConfig | undefined {
        return this._Config;
    }
    public set Config(value: WidgetConfig | undefined) {
        this._Config = value;
        this.loadComponent();
    }
    @Input() EditMode = 'none';
    @Input() DataSource: DashboardDataSource | undefined;

    @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;

    @Output() Delete = new EventEmitter<WidgetConfig>();
    @Output() Setup = new EventEmitter<WidgetConfig>();

    get width(): number {
        if (this.Config) {
            const w = this.Config.width > 0 ? this.Config.width : 1;
            return w * 50;
        } else {
            return 100;
        }
    }
    get height(): number {
        if (this.Config) {
            const h = this.Config.height > 0 ? this.Config.height : 1;
            return h * 50;
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
                    const componentRef = viewContainerRef.createComponent<DashboardWidget>(model.Configcomponent);
                    if (this.Config) componentRef.instance.Config = this.Config;
                    if (this.DataSource) componentRef.instance.DataSource = this.DataSource;
                    this.cdr.detectChanges();
                }
            }
        }
    }

    remove() {
        this.Delete.emit(this.Config);
    }
    setup() {
        this.Setup.emit(this.Config);
    }
}
