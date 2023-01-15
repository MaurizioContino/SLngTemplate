import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { menuitem } from 'dist/ng-sl-layouts/lib/models/menuitem';
import { NgSlDbService } from 'ng-sl-db';
import { DashboardConfigService } from 'ngslcommoncontrols';
import { NgSlMenuService } from 'ngsllayouts';

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

  constructor(private mnuServ: NgSlMenuService, private db: NgSlDbService, 
    private dashboard: DashboardConfigService, )
  {

  }
  ngOnInit(): void {

    const allmenus = [
      {itemtype:"title", title: 'Dataentry', subtitle:'Insert new data', children:[], url: ''},
      {itemtype:"link", title: 'Weekly results', url: 'WeekResults'},
      {itemtype:"title", title: 'Configurations', subtitle:'Application base configuration', children:[], url: ''},
      {itemtype:"link", title: 'Managers', url: 'configs/managers'},
      {itemtype:"link", title: 'Regions', url: 'configs/regions'},
      {itemtype:"link", title: 'Dashboards', url: 'configs/dashboards'}
      
    ] as menuitem[]
    const top = [{itemtype:"title", title: 'Dashboards', subtitle:'Application dashboards', children:[], url: ''}] as menuitem[]
      
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/100px-Angular_full_color_logo.svg.png"
    this.db.ready$.subscribe(dbready=>{
      this.dashboard.DashboardGrids$.subscribe(v=>{
        const dsbd = v.map(m=> {return {itemtype:"link", title: m.Name, url: 'dashboards/dashboard1/' + m.Id}}) as menuitem[]
        const currmenu = top.concat(dsbd);
        const all = currmenu.concat(allmenus);
        
        this.mnuServ.updateMenus("Test application", logo, all)
      })
      

      this.dashboard.Load();
    })
  }
  
}
