import { Component, Input, OnInit } from '@angular/core';
import { DashboardDataSource, DashboardDataSourceField } from '../../models/DashboardDataSource';
import { DashboardWidget } from '../../models/DashboardWidget';
import { NoConfigComponent } from '../no-config/no-config.component';

@Component({
    selector: 'sl-dashboard-grid',
    templateUrl: './dashboard-grid.component.html',
    styleUrls: ['./dashboard-grid.component.scss'],
})
export class DashboardGridComponent implements OnInit {

  static Definition = new DashboardWidget(DashboardGridComponent, NoConfigComponent, 2, 'xxx', 'Griglia dati', 'Visualizza tutti i dati della dashboard in una griglia', 
        { IdItem: 0, BackgroundColor: 'white', IdComponent: 2, Top: 0, Left: 0, width: 20, height: 5, Title: '', CustomData: {} }
    );

    @Input() DataSource!: DashboardDataSource | undefined;
    data: any[] = [];
    Fields: DashboardDataSourceField[] = [];

    ngOnInit(): void {
        if (this.DataSource && this.DataSource.Fields) {
            this.Fields = this.DataSource.Fields;
            this.data = this.DataSource.data;
        }
    }
}
