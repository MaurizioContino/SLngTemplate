import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { menuitem } from './models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class NgSlMenuService {

  menu$ = new BehaviorSubject<menuitem[]> ([]);

  constructor() { }

  update(menu: menuitem[]) {
    this.menu$.next(menu);
  }

}
