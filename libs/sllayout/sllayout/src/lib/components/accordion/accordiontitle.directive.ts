/* eslint-disable @angular-eslint/directive-selector */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sl-accordion-title]'
})
export class AccordionTitleDirective {
  constructor(public template: TemplateRef<any>) { }
}
