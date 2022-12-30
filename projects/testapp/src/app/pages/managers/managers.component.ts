import { Component, OnInit } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';
import { Managers } from '../../data.';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {

  DetailItem:any = null;
  constructor(private srLayout: SlLayoutsService) {

  }
  ngOnInit(): void {

  }

  itemsCount = 0;
  items = Managers;
  SelectedChange(row: any){
    this.DetailItem = row
  }

}
