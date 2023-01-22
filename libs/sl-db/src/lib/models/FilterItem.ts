export class filterItem {
  Label: string;
  Field: string;
  comparer: string;
  value: string | 'ask';

  constructor(Label: string, Field: string, comparer: string, value: string) {
    this.Field = Field;
    this.comparer = comparer;
    this.value = value;
    this.Label = Label;
  }
}
