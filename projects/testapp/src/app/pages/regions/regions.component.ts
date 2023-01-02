import { Component } from '@angular/core';
import { Region } from '../../models/Region';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {

  itemsCount = 0;
  items:Region[] = [];
  DetailItem:any = null;

  constructor(public regions: RegionService){}


  ngOnInit(): void {
    this.regions.Regions$.subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
    })
  }
  //items = regions;
  SelectedChange(row: any){
    this.DetailItem = row

  }

}
