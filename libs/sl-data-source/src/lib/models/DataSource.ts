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


export interface DataSourceField {
  Label: string;
  Property: string;
  ValueType: ValueType;
}

export interface DataSourceFilter {
  Property: string;
  Operator: operator;
  Value: string;
}


export interface DataSource {
  name: string;
  data: any;
  Fields: DataSourceField[];
  Filters: DataSourceFilter[];
}
