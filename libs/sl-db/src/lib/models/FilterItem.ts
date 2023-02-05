export enum operator {
  '==',
  '<',
  '>',
  '<=',
  '>=',
  '<>',
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

export class filterItem {
  Label: string;
  Field: string;
  Operator: operator;
  Type: ValueType | string;
  Value: any;


  constructor(Label: string, Field: string, operator: operator, Type: ValueType | string, value: any) {
    this.Field = Field;
    this.Operator = operator;
    this.Value = value;
    this.Label = Label;
    this.Type = Type
  }
}
