/* eslint-disable @angular-eslint/directive-selector */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sl-accordion-body]'
})
export class AccordionBodyDirective {
  constructor(public template: TemplateRef<any>) { }
}
