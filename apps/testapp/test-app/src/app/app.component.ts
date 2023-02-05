/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { SlLayoutsService } from '@soloud/sllayout';
import { menuitem, SlMenuService } from '@soloud/slmenu';
import { sldbService } from '@soloud/sldb';
import { DashboardConfigService, DashboardDataSourceService, DashboardFiltersService } from '@soloud/sldashboard';
import { allmenus, top, logo, DashWidgetsConf} from './models/StarupData';

import { MonitorResultsService } from './services/monitor-results.service';
import { ManagerSelectComponent } from './controls/manager-select/manager-select.component';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'testapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'testapp-test-app';
  constructor(public layoutService: SlLayoutsService, private dashserv: DashboardService, private dashConfigserv: DashboardConfigService,
    private db: sldbService, private mnuServ: SlMenuService, private dssources: DashboardDataSourceService,
    private itmserv: MonitorResultsService, private fserv: DashboardFiltersService) {

  }

  ngOnInit(): void {
    this.db.ready$.subscribe(dbready=>{
      this.dashserv.DashboardGrids$.subscribe(v=>{
        const dsbd = v.map(m=> {return {itemtype:"link", title: m.Name, url: 'dashboards/dashboard1/' + m.Id}}) as menuitem[]
        const currmenu = top.concat(dsbd);
        const all = currmenu.concat(allmenus);
        this.mnuServ.updateMenus("Test application", logo, all)
      })
      this.mnuServ.updateMenus("Test application", logo, allmenus)
      this.dashserv.Load();
     })

     this.dashConfigserv.Widgets = DashWidgetsConf;

     this.fserv.registerFilter("IdManager", ManagerSelectComponent)
  }
}
