import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgSlMenuService } from 'projects/ng-sl-layouts/src/public-api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testapp';

  constructor(private mnuServ: NgSlMenuService){

  }
  ngOnInit(): void {

    this.mnuServ.updateMenus("Test application",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/100px-Angular_full_color_logo.svg.png",
    [
      {itemtype:"title", title: 'Dashboards', subtitle:'Application dashboards', children:[], url: ''},
      {itemtype:"link", title: 'Dashboard 1', url: 'dashboards/dashboard1'},
      {itemtype:"title", title: 'Configurations', subtitle:'Application base configuration', children:[], url: ''},
      {itemtype:"link", title: 'Managers', url: 'configs/managers'},
      {itemtype:"link", title: 'Areas', url: 'configs/areas'},
      {itemtype:"link", title: 'Regions', url: 'configs/regions'}
    ])
  }


}
