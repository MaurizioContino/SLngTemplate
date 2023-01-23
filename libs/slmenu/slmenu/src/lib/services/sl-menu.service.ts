import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menuitem } from '../models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class SlMenuService {

  isFloating = false;
  isCollapsed = false;
  title = "Main menu";
  logourl: string | null = null;
  menu$ = new BehaviorSubject<menuitem[]> ([]);
  floating$= new BehaviorSubject<boolean> (this.isFloating);
  collapsed$= new BehaviorSubject<boolean> (false);
  constructor() { }

  updateMenus(title: string, logourl: string | null, menu: menuitem[]) {
    this.logourl = logourl;
    this.title = title;
    this.menu$.next(menu);
  }
  ShowFloatingMenu(show: boolean){
    if (show) {
      this.collapse(false);
    }
    this.isFloating = show;
    this.floating$.next(this.isFloating);
  }
  collapse(state: boolean){
    if (!this.isFloating) {
      this.isCollapsed = state;
      this.collapsed$.next(this.isCollapsed);
    }
  }
}
