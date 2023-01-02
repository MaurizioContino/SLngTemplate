import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgSlDbService } from 'projects/ng-sl-db/src/public-api';
import { NgSlMenuService } from 'projects/ng-sl-layouts/src/public-api';
import { AreeService } from './services/aree.service';
import { ManagersService } from './services/managers.service';
import { RegionService } from './services/region.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testapp';

  constructor(private mnuServ: NgSlMenuService, private db: NgSlDbService, private m: ManagersService, private r: RegionService, private a: AreeService)
  {

  }
  ngOnInit(): void {


    this.mnuServ.updateMenus("Test application",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/100px-Angular_full_color_logo.svg.png",
    [
      {itemtype:"title", title: 'Dashboards', subtitle:'Application dashboards', children:[], url: ''},
      {itemtype:"link", title: 'Dashboard 1', url: 'dashboards/dashboard1'},
      {itemtype:"title", title: 'Dataentry', subtitle:'Insert new data', children:[], url: ''},
      {itemtype:"link", title: 'Week results', url: 'WeekResults'},
      {itemtype:"title", title: 'Configurations', subtitle:'Application base configuration', children:[], url: ''},
      {itemtype:"link", title: 'Managers', url: 'configs/managers'},
      {itemtype:"link", title: 'Regions', url: 'configs/regions'}
    ])
    this.beginDatabase()
  }
  beginDatabase(){

  }

}
