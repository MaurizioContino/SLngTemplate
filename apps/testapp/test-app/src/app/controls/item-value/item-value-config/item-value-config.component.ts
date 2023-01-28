import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DashboardDataSourceField, WidgetConfig } from '@soloud/sldashboard';

@Component({
    selector: 'app-item-value-config',
    templateUrl: './item-value-config.component.html',
    styleUrls: ['./item-value-config.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemValueConfigComponent {


  @Input() Fields: DashboardDataSourceField[] | undefined;
  @Input() Config: WidgetConfig | undefined;

}
