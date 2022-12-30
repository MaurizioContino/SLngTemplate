import { Component } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';
import { Regions } from '../../data.';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {

  DetailItem:any = null;
  constructor(private srLayout: SlLayoutsService) {

  }
  ngOnInit(): void {

  }

  itemsCount = 0;
  items = Regions;
  SelectedChange(row: any){
    this.DetailItem = row
  }

}
