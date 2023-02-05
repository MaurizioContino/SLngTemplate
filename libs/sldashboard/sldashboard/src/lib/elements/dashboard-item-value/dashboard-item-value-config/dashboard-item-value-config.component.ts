import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DashboardDataSource, DashboardDataSourceField } from '../../../models/DashboardDataSource';
import { WidgetConfig } from '../../../models/WidgetConfig';

@Component({
    selector: 'sl-dashboard-item-value-config',
    templateUrl: './dashboard-item-value-config.component.html',
    styleUrls: ['./dashboard-item-value-config.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardItemValueConfigComponent {
    @Input() DataSource: DashboardDataSource | undefined;
    @Input() Config: WidgetConfig | undefined;

    methods = ['Primo', 'Ultimo', 'Penultimo', 'Media', 'Massimo', 'Minimo', 'Somma'];

    public get MainField(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['MainField'];
        else return undefined;
    }
    public set MainField(value: DashboardDataSourceField | undefined) {
        if (this.Config) {
            this.Config.CustomData['MainField'] = value;
            this.SecondaryLeftField = value;
            this.SecondaryRightField = value;
        }
    }

    public get SecondaryLeftField(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['SecondaryLeftField'];
        else return undefined;
    }
    public set SecondaryLeftField(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryLeftField'] = value;
    }

    public get SecondaryRightField(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['SecondaryRightField'];
        else return undefined;
    }
    public set SecondaryRightField(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryRightField'] = value;
    }

    public get MainSelect(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['MainSelect'];
        else return undefined;
    }
    public set MainSelect(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['MainSelect'] = value;
    }

    public get SecondaryLeftSelect(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['SecondaryLeftSelect'];
        else return undefined;
    }
    public set SecondaryLeftSelect(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryLeftSelect'] = value;
    }

    public get SecondaryRightSelect(): DashboardDataSourceField | undefined {
        if (this.Config) return this.Config.CustomData['SecondaryRightSelect'];
        else return undefined;
    }
    public set SecondaryRightSelect(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryRightSelect'] = value;
    }

    public set SecondaryLeftTitle(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryLeftTitle'] = value;
    }

    public set SecondaryRightTitle(value: DashboardDataSourceField | undefined) {
        if (this.Config) this.Config.CustomData['SecondaryRightTitle'] = value;
    }

    public get MainStyle(): any | undefined {
      if (this.Config) return this.Config.CustomData['MainStyle'];
      else return undefined;
    }
    public set MainStyle(value: any | undefined) {
        if (this.Config) this.Config.CustomData['MainStyle'] = value;
    }

    public get LeftStyle(): any | undefined {
      if (this.Config) return this.Config.CustomData['LeftStyle'];
      else return undefined;
    }
    public set LeftStyle(value: any | undefined) {
        if (this.Config) this.Config.CustomData['LeftStyle'] = value;
    }

    public get RightStyle(): any | undefined {
      if (this.Config) return this.Config.CustomData['RightStyle'];
      else return undefined;
    }
    public set RightStyle(value: any | undefined) {
        if (this.Config) this.Config.CustomData['RightStyle'] = value;
    }

}
