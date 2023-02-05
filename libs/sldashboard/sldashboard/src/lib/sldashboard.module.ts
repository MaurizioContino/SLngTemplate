import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccordionComponent, SllayoutModule } from '@soloud/sllayout';
import { SlButtonModule } from '@soloud/slbutton';
import { DashboardPlacementComponent } from './controls/dashboard-placement/dashboard-placement.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DashboardElementComponent } from './controls/dashboard-element/dashboard-element.component';
import { DashboardElementPanelComponent } from './controls/dashboard-element-panel/dashboard-element-panel.component';
import { DasboardListComponent } from './controls/dasboard-list/dasboard-list.component';

import { DasboardItemDirective } from './directives/dasboard-item.directive';
import { DashboardItemValueComponent } from './elements/dashboard-item-value/dashboard-item-value.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardItemValueConfigComponent } from './elements/dashboard-item-value/dashboard-item-value-config/dashboard-item-value-config.component';
import { DashboardItemValueStyleComponent } from './elements/dashboard-item-value/dashboard-item-value-style/dashboard-item-value-style.component';
import { DashboardFilterComponent } from './controls/dashboard-filter/dashboard-filter.component';
import { DashboardFilterElementComponent } from './controls/dashboard-filter-element/dashboard-filter-element.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { SlCommonControlsModule } from '@soloud/commoncontrols';
import { DashboardGridComponent } from './elements/dashboard-grid/dashboard-grid.component';
import { TableModule } from 'primeng/table';
import { NoConfigComponent } from './elements/no-config/no-config.component';
@NgModule({
    declarations: [
        DashboardPlacementComponent,
        DashboardElementComponent,
        DashboardElementPanelComponent,
        DasboardListComponent,
        DasboardItemDirective,
        DashboardItemValueComponent,
        DashboardItemValueConfigComponent,
        DashboardItemValueStyleComponent,
        DashboardItemValueStyleComponent,
        DashboardFilterComponent,
        DashboardFilterElementComponent,
        DashboardGridComponent,
        NoConfigComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SlButtonModule, DragDropModule, SllayoutModule, NgScrollbarModule, NgSelectModule, InputTextModule, InputNumberModule, CalendarModule, SlCommonControlsModule, TableModule],
    exports: [
      DashboardPlacementComponent, DashboardElementComponent,
      DashboardElementPanelComponent, DasboardItemDirective,
      DashboardItemValueComponent, DashboardItemValueConfigComponent,
      AccordionComponent, DashboardItemValueStyleComponent,
      DashboardGridComponent, NoConfigComponent],
})
export class SldashboardModule {}
