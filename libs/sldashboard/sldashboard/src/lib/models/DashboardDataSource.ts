export enum operator {
  '==',
  '<',
  '>',
  '<=',
  '>=',
  'startwith',
  'endwith'
}

export enum ValueType {
  'number',
  'string',
  'date'
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
  Value: string;
}


export interface DashboardDataSource {
  name: string;
  data: any[];
  Fields: DashboardDataSourceField[];
  Filters: DashboardDataSourceFilter[];
}
