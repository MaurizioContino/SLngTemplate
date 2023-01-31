import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { retry } from 'rxjs';
import { Dashboard } from '../../models/Dashboard';
import { DashboardDataSource, DashboardDataSourceField, DashboardDataSourceFilter, ValueType } from '../../models/DashboardDataSource';
import { DashboardDataSourceService } from '../../services/DashbaoardDataSource.service';
import { DashboardFiltersService } from '../../services/dashboard-filters.service';

@Component({
    selector: 'sl-dashboar-filter',
    templateUrl: './dashboard-filter.component.html',
    styleUrls: ['./dashboard-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFilterComponent implements OnInit {

  @Input() dashboard!: Dashboard
  @Output() DataSourceChange = new EventEmitter()

  ds!: DashboardDataSource | undefined;
  filters: DashboardDataSourceFilter[] = [];
  fields: DashboardDataSourceField[] = []



  numbertype = ValueType.number;
  stringtype = ValueType.string;
  datetype = ValueType.date;
  weektype = ValueType.week;



  constructor(private cdr: ChangeDetectorRef, private dsServ: DashboardFiltersService, private dsSources: DashboardDataSourceService){

  }

  ngOnInit(): void {

    this.ds = this.dsSources.dataSources.find(v=>v.name==this.dashboard.DataSourceName);
    if (this.ds)
    {
      if (this.ds.Fields && this.ds.Fields.length > 0){
        this.fields = this.ds.Fields;
      }
      if (this.ds.Filters && this.ds.Filters.length > 0){
        this.filters = this.ds.Filters;
      }

    }
  }
  getField(FieldName: string) {
    return this.fields.find(f=>f.Property==FieldName)
  }
  getType(FieldName: string) {

    const fd = this.fields.find(f=>f.Property==FieldName)
    if (fd) {
      if (fd.CustomType==null) {
        return fd.ValueType
      } else {
        return fd.CustomType
      }
    } else {
      return null;
    }
  }
  existsModel(itemtype: string){
    if (this.dsServ.Filters[itemtype]) {
      return true;
    } else {
      return false;
    }

  }
  getLabel(property: any) {

    const p = this.fields.find(v=>v.Property == property);
    if (p) {
      return p.Label;
    } else {
      return "unknown property";
    }
  }
  dofilter() {
    if (this.ds) {
      this.ds.Filters = this.filters;
      this.DataSourceChange.emit(this.ds);
    }
  }
}
