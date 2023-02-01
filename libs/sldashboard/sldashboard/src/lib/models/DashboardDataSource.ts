import { filterItem, ValueType } from "@soloud/SlDb";



export interface DashboardDataSourceField {
  Label: string;
  Property: string;
  ValueType: ValueType;
  CustomType?: string;
}

// export interface DashboardDataSourceFilter {
//   Property: string;
//   Operator: operator;
//   Value: any;
// }


export interface DashboardDataSource {
  name: string;
  data: any[];
  Fields: DashboardDataSourceField[];
  Filters: filterItem[];
}
