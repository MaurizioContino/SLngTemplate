import { ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SlLayoutsService } from '../../services/sl-layouts.service';

@Component({
  selector: 'sl-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject<any>();
  isSmallScreen = false;
  showSmallMenu = false;
  private _topbar: TemplateRef<any> | null = null;
  private _menu: TemplateRef<any> | null = null;
  private _bottom: TemplateRef<any> | null = null;
  private _main: TemplateRef<any> | null = null;

  @ContentChild('topbar')

  public get topbar(): TemplateRef<any> | null {
    return this._topbar;
  }
  public set topbar(value: TemplateRef<any> | null) {
    this._topbar = value;
    this.cdr.detectChanges()
  }
  @ContentChild('menu')
  public get menu(): TemplateRef<any> | null {
    return this._menu;
  }
  public set menu(value: TemplateRef<any> | null) {
    this._menu = value;
    this.cdr.detectChanges()

  }
  @ContentChild('bottom')
  public get bottom(): TemplateRef<any> | null {
    return this._bottom;
  }
  public set bottom(value: TemplateRef<any> | null) {
    this._bottom = value;
    this.cdr.detectChanges()

  }
  @ContentChild('main')
  public get main(): TemplateRef<any> | null {
    return this._main;
  }
  public set main(value: TemplateRef<any> | null) {
    this._main = value;
    this.cdr.detectChanges()

  }

  constructor(public layserv: SlLayoutsService,  private cdr: ChangeDetectorRef){


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


  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  hidefloatingMenu() {

  }
}
