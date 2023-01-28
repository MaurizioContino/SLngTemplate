/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { SlLayoutsService } from '@soloud/sllayout';
import { menuitem, SlMenuService } from '@soloud/slmenu';
import { SlDbService } from '@soloud/SlDb';
import { DashboardConfigService, DashboardDataSourceService } from '@soloud/sldashboard';
import { allmenus, top, logo, DashWidgetsConf} from './models/StarupData';

import { MonitorResultsService } from './services/monitor-results.service';

@Component({
  selector: 'testapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'testapp-test-app';
  constructor(public layoutService: SlLayoutsService, private dashserv: DashboardConfigService,
    private db: SlDbService, private mnuServ: SlMenuService, private dssources: DashboardDataSourceService,
    private itmserv: MonitorResultsService) {

  }

  ngOnInit(): void {




    this.db.ready$.subscribe(dbready=>{
      this.dashserv.DashboardGrids$.subscribe(v=>{
        const dsbd = v.map(m=> {return {itemtype:"link", title: m.Name, url: 'dashboards/dashboard1/' + m.Id}}) as menuitem[]
        const currmenu = top.concat(dsbd);
        const all = currmenu.concat(allmenus);
        this.mnuServ.updateMenus("Test application", logo, all)
      })
      this.dashserv.Load();
     })

     this.dashserv.Widgets = DashWidgetsConf;
  }
}
