/* eslint-disable @angular-eslint/directive-selector */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sl-accordion-element]'
})
export class AccordionItemDirective {
  constructor(public template: TemplateRef<any>) { }
}
