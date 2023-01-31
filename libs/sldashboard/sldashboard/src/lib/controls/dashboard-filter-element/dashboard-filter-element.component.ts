import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { DasboardItemDirective } from '../../directives/dasboard-item.directive';
import { DashboardDataSourceField, DashboardDataSourceFilter } from '../../models/DashboardDataSource';
import { DashboardFiltersService } from '../../services/dashboard-filters.service';


@Component({
    selector: 'sl-dashboard-filter-element',
    templateUrl: './dashboard-filter-element.component.html',
    styleUrls: ['./dashboard-filter-element.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFilterElementComponent implements AfterViewInit {

  @Input() Filter!: DashboardDataSourceFilter;
  @Input() Field!: DashboardDataSourceField

  @Input() Value: any
  @Output() ValueChange = new EventEmitter()

  @ViewChild(DasboardItemDirective, { static: true }) WidgetHost!: DasboardItemDirective;

  Destroy$ = new Subject()

  constructor(private cdr: ChangeDetectorRef, private dashfilterserv: DashboardFiltersService) {}

  ngAfterViewInit(): void {
      this.loadComponent();
  }

  loadComponent() {

      if (this.WidgetHost) {

          const viewContainerRef = this.WidgetHost.viewContainerRef;
          viewContainerRef.clear();
          if (this.Filter && this.Field.CustomType) {

              const model = this.dashfilterserv.Filters[this.Field.CustomType];
              if (model) {
                  const componentRef = viewContainerRef.createComponent<any>(model);
                  (componentRef as any).instance.Filter = this.Filter;
                  (componentRef as any).instance.Value = this.Value;
                  (componentRef as any).instance.ValueChange.pipe(takeUntil(this.Destroy$)).subscribe((v: any)=>{
                    this.ValueChange.emit(v);
                  })
                  this.cdr.detectChanges();
              }
          }
      }
  }

}
