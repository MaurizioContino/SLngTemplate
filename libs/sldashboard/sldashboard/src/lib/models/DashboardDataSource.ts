export enum operator {
  '==',
  '<',
  '>',
  '<=',
  '>=',
  'startwith',
  'endwith',
  'between'
}

export enum ValueType {
  'number',
  'string',
  'date',
  'week'
}


export interface DashboardDataSourceField {
  Label: string;
  Property: string;
  ValueType: ValueType;
  CustomType?: string;
}

export interface DashboardDataSourceFilter {
  Property: string;
  Operator: operator;
  Value: any;
}


export interface DashboardDataSource {
  name: string;
  data: any[];
  Fields: DashboardDataSourceField[];
  Filters: DashboardDataSourceFilter[];
}
