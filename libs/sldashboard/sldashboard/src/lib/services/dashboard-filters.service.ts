import { Type } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardFiltersService {

  Filters: any = {}

  //constructor() { }

  registerFilter(forType: string, component: Type<any>) {
    this.Filters[forType] = component;
  }

}
