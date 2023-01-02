import { Component, OnInit } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';
import { Manager } from '../../models/Manager';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit  {


  DetailItem:any = null;
  items: Manager[] = []
  itemsCount = 0;

  constructor(private managers: ManagersService) {

  }
  ngOnInit(): void {
    this.managers.Managers$.subscribe(v=>{
      this.itemsCount = v.length;
      this.items = v;
    })
  }



  SelectedChange(row: any){
    this.DetailItem = row
  }

}
