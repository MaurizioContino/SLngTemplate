import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionItemDirective } from './accordionitem.directive';

@Component({
    selector: 'sl-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements AfterViewInit {

  @ContentChildren (AccordionItemDirective) items!: QueryList<AccordionItemDirective>;

  ngAfterViewInit(): void {
   console.log(this.items)
  }


}
