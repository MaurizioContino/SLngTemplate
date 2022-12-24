import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  OnDestroy,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';


import { Subject, takeUntil } from 'rxjs';
import { layoutModels } from './models/layoutmodel';
import { SlLayoutsService } from './ng-sl-layouts.service';

@Component({
  selector: 'sl-Layouts',
  templateUrl: './ng-sl-layouts.component.html',
  styles: [],
})
export class NgSlLayoutsComponent implements OnDestroy, AfterViewInit {
  destroyed = new Subject<void>();

  @ContentChild('left') left: TemplateRef<any> | null = null;
  @ContentChild('main-left') mainleft: TemplateRef<any> | null = null;
  @ContentChild('main-right') mainright: TemplateRef<any> | null = null;
  @ContentChild('right') right: TemplateRef<any> | null = null;
  @ContentChild('top') top: TemplateRef<any> | null = null;
  @ContentChild('bottom') bottom: TemplateRef<any> | null = null;

  constructor(
    breakpointObserver: BreakpointObserver,
    public layoutService: SlLayoutsService
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            layoutService.update(query);
          }
        }
      });
  }

  ngAfterViewInit() {
    //this.templates.forEach(tabInstance => console.log(tabInstance as any))
    console.log(this.left);
    this.layoutService.displayNameMap.forEach((value: any, key: string) => {
      const sections = layoutModels.get(value);
      console.log(sections);
      sections.forEach((section: any) => {
        console.log(section);
        const name = section.name;
        console.log(name);
        if (name == 'left' && this.left) section.template = this.left;
        if (name == 'mainleft' && this.mainleft)
          section.template = this.mainleft;
        if (name == 'mainright' && this.mainright)
          section.template = this.mainright;
        if (name == 'right' && this.right) section.template = this.right;
        if (name == 'top' && this.top) section.template = this.top;
        if (name == 'bottom' && this.bottom) section.template = this.bottom;
      });
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
