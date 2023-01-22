import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { SlLayoutsService } from '@soloud/sllayout';

import { Observable, Subject, takeUntil } from 'rxjs';
import { SlMenuService } from '../services/sl-menu.service';

@Component({
  selector: 'sl-default-topbar',
  templateUrl: './default-topbar.component.html',
  styleUrls: ['./default-topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultTopbarComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>()
  isfloating = false;
  constructor(public layoutserv: SlLayoutsService, private mnuServ: SlMenuService, private cdr: ChangeDetectorRef) {


  }
  ngOnInit(): void {
    this.layoutserv.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
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
    this.destroy$.next();
    this.destroy$.complete();
  }
  FloatingMenu() {
    this.mnuServ.ShowFloatingMenu(this.isfloating);
    this.cdr.detectChanges();
  }
}
