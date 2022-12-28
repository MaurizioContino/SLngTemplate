import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { SlLayoutsService } from '../services/ng-sl-layouts.service';
import { NgSlMenuService } from '../services/ng-sl-menu.service';

@Component({
  selector: 'sl-default-topbar',
  templateUrl: './default-topbar.component.html',
  styleUrls: ['./default-topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultTopbarComponent implements OnDestroy {

  destroy$ = new Subject()
  isfloating = false;
  constructor(public layoutserv: SlLayoutsService, private mnuServ: NgSlMenuService, private cdr: ChangeDetectorRef) {

    layoutserv.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      if (v=='XSmall' || v=='Small' ) 
      {
        this.isfloating = true;
      } else {
        this.isfloating = false;
      }
      this.cdr.detectChanges();
    })

  }
  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
    this.destroy$.complete();
  }
  FloatingMenu() {
    this.mnuServ.toggleFloating();  
    this.layoutserv.togleSectionVisibility("left")
    this.cdr.detectChanges();
  }
}
