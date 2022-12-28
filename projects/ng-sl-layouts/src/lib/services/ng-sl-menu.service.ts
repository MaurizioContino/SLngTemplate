import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menuitem } from '../models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class NgSlMenuService {

  private isFloating = false;
  menu$ = new BehaviorSubject<menuitem[]> ([]);
  floating= new BehaviorSubject<boolean> (this.isFloating);
  constructor() { }

  updateMenus(menu: menuitem[]) {
    this.menu$.next(menu);
  }
  toggleFloating(){
    this.isFloating = !this.isFloating;
    this.floating.next(this.isFloating);
  }
}
