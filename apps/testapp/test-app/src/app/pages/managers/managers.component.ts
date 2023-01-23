import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Manager } from '../../models/Manager';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss'],

})
export class ManagersComponent implements OnInit, OnDestroy  {


  DetailItem:Manager | null = null;
  items: Manager[] = []
  itemsCount = 0;
  destroy$ = new Subject();

  constructor(private managers: ManagersService, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.managers.Dataset$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
      this.cdr.detectChanges();
    })
    this.managers.Load();
  }

  SelectedChange(row: any){
    this.DetailItem = row
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
