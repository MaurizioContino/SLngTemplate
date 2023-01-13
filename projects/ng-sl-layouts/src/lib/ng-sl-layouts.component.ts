import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  OnDestroy,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';


import { Subject, takeUntil } from 'rxjs';
import { SlLayoutsService } from './services/ng-sl-layouts.service';

@Component({
  selector: 'sl-Layouts',
  templateUrl: './ng-sl-layouts.component.html',
  styleUrls: ['./ng-sl-layouts.component.css'],
})
export class NgSlLayoutsComponent implements OnDestroy {
  destroyed = new Subject<void>();

  @ContentChild('top') top: TemplateRef<any> | null = null;
  @ContentChild('menu') menu: TemplateRef<any> | null = null;
  @ContentChild('main') main: TemplateRef<any> | null = null;
  @ContentChild('secondary') secondary: TemplateRef<any> | null = null;
  @ContentChild('bottom') bottom: TemplateRef<any> | null = null;

  Sections: any = {};

  constructor(
    breakpointObserver: BreakpointObserver,
    public layoutService: SlLayoutsService,

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
            layoutService.updateSize(query);
          }
        }
      });
      this.setupSections();
  }

  setupSections(){
    if (this.top) this.Sections["top"] = this.top;
    if (this.top) this.Sections["bottom"] = this.bottom;
    if (this.top) this.Sections["menu"] = this.menu;
    if (this.top) this.Sections["main"] = this.main;
    if (this.top) this.Sections["secondary"] = this.secondary;
  }


  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
