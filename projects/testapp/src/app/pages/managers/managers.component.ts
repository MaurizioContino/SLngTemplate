import { Component, OnInit } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';

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
  items = [
    {Name:'Maurizio', Surname:'Contino', Area:'Area 1', Region: 'Lombardia', Avatar: 'male-04.jpg', BackgroundImage: '14-640x480.jpg'},
    {Name:'Davide', Surname:'Contino', Area:'Area 2', Region: 'Veneto', Avatar: 'male-04.jpg', BackgroundImage: '19-640x480.jpg'},
    {Name:'Elena', Surname:'Masotti', Area:'Area 3', Region: 'Trentino Altoadige', Avatar: 'female-06.jpg', BackgroundImage: '34-640x480.jpg'}


  ]
  SelectedChange(row: any){
    this.DetailItem = row
  }

}
