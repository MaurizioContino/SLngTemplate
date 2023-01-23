import { Component } from '@angular/core';
import { SlLayoutsService } from '@soloud/sllayout';
import { menuitem, SlMenuService } from '@soloud/slmenu';
import { SlDbService } from 'libs/sl-db/src/lib/services/sl-db.service';
import { DashboardConfigService } from 'libs/sldashboard/sldashboard/src/lib/services/dashboard.service';

@Component({
  selector: 'testapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testapp-test-app';
  constructor(public layoutService: SlLayoutsService, private dashserv: DashboardConfigService,
    private db: SlDbService, private mnuServ: SlMenuService) {

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
      this.dashserv.DashboardGrids$.subscribe(v=>{
        const dsbd = v.map(m=> {return {itemtype:"link", title: m.Name, url: 'dashboards/dashboard1/' + m.Id}}) as menuitem[]
        const currmenu = top.concat(dsbd);
        const all = currmenu.concat(allmenus);

        this.mnuServ.updateMenus("Test application", logo, all)
      })


      this.dashserv.Load();
     })
  }
}
