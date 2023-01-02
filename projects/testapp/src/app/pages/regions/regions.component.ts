import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Region } from '../../models/Region';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnDestroy {

  itemsCount = 0;
  items:Region[] = [];
  DetailItem:Region | null = null;
  destroy$ = new Subject();
  constructor(public regions: RegionService, private cdr: ChangeDetectorRef){
  }

  ngOnInit(): void {

    this.regions.Regions$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
      this.cdr.detectChanges();
    })
    this.regions.Load();
  }
  //items = regions;
  SelectedChange(row: any){
    this.DetailItem = row
    this.cdr.detectChanges();
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }


}
