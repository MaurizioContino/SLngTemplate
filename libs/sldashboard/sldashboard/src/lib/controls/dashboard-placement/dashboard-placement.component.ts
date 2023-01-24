import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { DashboardWidget } from '../../models/DashboardWidget';
import { WidgetStatus } from '../../models/WidgetStatus';
import { DashboardConfigService } from '../../services/dashboard.service';

@Component({
    selector: 'sl-dashboard-placement',
    templateUrl: './dashboard-placement.component.html',
    styleUrls: ['./dashboard-placement.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPlacementComponent implements AfterViewInit {
    rows: number[] = [];
    cols: number[] = [];

    SelectedItem: DashboardWidget | undefined;
    SelectedConfig: any;
    DisplayDetails: true | null = null;
    showSelect = false;
    showConfig = false;
    configStatus = WidgetStatus.config;
    selectr: number | null = null;
    selectc: number | null = null;

    private _contents: QueryList<TemplateRef<any>> | undefined;
    @ContentChildren('dashboarditem')
    public get contents(): QueryList<TemplateRef<any>> | undefined {
        return this._contents;
    }
    public set contents(value: QueryList<TemplateRef<any>> | undefined) {
        this._contents = value;
        this.cdr.detectChanges();
    }

    constructor(private myElement: ElementRef, private cdr: ChangeDetectorRef, public dashserv: DashboardConfigService) {}

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
        this.SelectedItem = this.dashserv.Widgets.find((v) => v.IdComponent == IdComponent);
        if (this.SelectedItem) {
            this.showSelect = false;
            this.showConfig = true;
            this.SelectedConfig = this.SelectedItem.config;
        }
    }
}
