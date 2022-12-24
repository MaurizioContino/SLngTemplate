import {Directive, Input} from '@angular/core';

@Directive({selector: 'layout-section'})
export class SectionDirective {
  @Input() name!: string;
  constructor() { }
}
