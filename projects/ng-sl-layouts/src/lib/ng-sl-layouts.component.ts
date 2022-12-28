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
import { SlLayoutsService } from './services/ng-sl-layouts.service';

@Component({
  selector: 'sl-Layouts',
  templateUrl: './ng-sl-layouts.component.html',
  styleUrls: ['./ng-sl-layouts.component.css'],
})
export class NgSlLayoutsComponent implements OnDestroy {
  destroyed = new Subject<void>();

  @ContentChild('left') left: TemplateRef<any> | null = null;
  @ContentChild('mainleft') mainleft: TemplateRef<any> | null = null;
  @ContentChild('mainright') mainright: TemplateRef<any> | null = null;
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

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
