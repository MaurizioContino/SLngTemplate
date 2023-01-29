import { AfterViewInit, Component, ContentChild, ContentChildren, Input, TemplateRef } from '@angular/core';
import { AccordionBodyDirective } from '../accordionbody.directive';
import { AccordionItemDirective } from '../accordionitem.directive';
import { AccordionTitleDirective } from '../accordiontitle.directive';

@Component({
    selector: 'sl-accordion-item',
    templateUrl: './accordion-item.component.html',
    styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements AfterViewInit  {

   @Input() show = false;

   @ContentChild(AccordionTitleDirective) title!: AccordionTitleDirective;
   @ContentChild(AccordionBodyDirective) body!: AccordionBodyDirective;


   ngAfterViewInit(): void {
    console.log(this.title)
    console.log(this.body)
   }

   SelectItem() {
    this.show = !this.show;
   }

}
