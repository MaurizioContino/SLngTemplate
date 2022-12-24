import {Breakpoints} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { layout, layoutModels } from './models/layoutmodel';

@Injectable({
  providedIn: 'root'
})
export class SlLayoutsService {


  currentScreenSize$ = new BehaviorSubject<string>("Medium");
  currentScreenLayout$ = new BehaviorSubject<layout|null>(layoutModels["Medium"]);

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor() {
  }

  update( query: string ) {
    const SizeName = this.displayNameMap.get(query) ?? 'Medium';
    this.currentScreenSize$.next(SizeName);
    this.currentScreenLayout$.next(layoutModels.get(SizeName));
  }

}
