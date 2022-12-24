import {Breakpoints} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { layout, layoutModels } from './models/layoutmodel';
import { layoutsection } from './models/layoutsection';

@Injectable({
  providedIn: 'root'
})
export class SlLayoutsService {

  currLayouts: any;
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
    this.currLayouts = layoutModels.get(SizeName);
    this.currentScreenLayout$.next(this.currLayouts);
  }
  sectionByName(name: string) {
    return this.currLayouts.sections.find((v: layoutsection)=>v.name==name);
  }
}
