import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SlLayoutsService } from '../services/ng-sl-layouts.service';
import { NgSlMenuService } from '../services/ng-sl-menu.service';

@Component({
  selector: 'sl-default-menu',
  templateUrl: './default-menu.component.html',
  styleUrls: ['./default-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultMenuComponent implements OnInit, OnDestroy {

  collapsed = false;
  destroy$:Subject<any> = new Subject()
  isfloating = false;
  selected: string = "";
  constructor(public menuservice: NgSlMenuService,public layoutserv: SlLayoutsService, private router: Router) {

  }

  collapse(){
    this.menuservice.collapse(!this.menuservice.isCollapsed)
  }

  ngOnInit(): void {
    this.layoutserv.currentScreenSize$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      if (v=='XSmall' || v=='Small' )
      {
        this.isfloating = true;
      } else {
        this.isfloating = false;
      }

    })
  }

  navigate(url: string) {
    this.selected = url;

  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
