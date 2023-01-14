import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { TabItemDirective } from './tab-item.directive';

@Component({
  selector: 'sl-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],

})
export class TabHeaderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    
  }
  @Input() Data: any;
 
  @ContentChildren(TabItemDirective) contentChildren: any[] = []; 
  ngOnInit(): void {

  }

}
