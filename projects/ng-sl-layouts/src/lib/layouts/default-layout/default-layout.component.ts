import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';


import { Subject, takeUntil } from 'rxjs';
import { SlLayoutsService } from '../../services/ng-sl-layouts.service';
import { NgSlMenuService } from '../../services/ng-sl-menu.service';

@Component({
  selector: 'sl-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject<any>();
  @Input() Layout: any = {};
  isSmallScreen = false;
  showSmallMenu = false;

  constructor(public layserv: SlLayoutsService, public mnuServ: NgSlMenuService, private cdr: ChangeDetectorRef){


  }
  ngOnInit(): void {

    this.layserv.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{

      if (v=='XSmall' || v=='Small' )
      {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
      this.cdr.detectChanges();
    })

    this.mnuServ.floating$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.showSmallMenu = v;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  hidefloatingMenu() {
    this.mnuServ.ShowFloatingMenu(false);
  }
}
