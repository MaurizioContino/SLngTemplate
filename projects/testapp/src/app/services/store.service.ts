import { Injectable } from '@angular/core';
import { AreeService } from './aree.service';
import { IDataservice } from './IDataservice';
import { ManagersService } from './managers.service';
import { MonitorResultsService } from './monitor-results.service';
import { RegionService } from './region.service';


export interface storeitem {
  
  service: IDataservice,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  stores = {
    Managers: { service: {}, description: '' } as storeitem, 
    Regions:  { service: {}, description: '' } as storeitem, 
    Aree: { service: {}, description: '' }  as storeitem, 
    Monitors:  { service: {}, description: '' } as storeitem
  }

  constructor(
    private areeserv: AreeService, private managerserv: ManagersService, 
    private monitorserv: MonitorResultsService, private regionserv: RegionService) { 
      this.stores.Aree.service = this.areeserv;
      this.stores.Aree.description = 'Access aree list';
      this.stores.Managers.service = this.managerserv;
      this.stores.Managers.description = 'Access managers list';
      this.stores.Regions.service = this.regionserv;
      this.stores.Regions.description = 'Access regions list';
      this.stores.Monitors.service = this.monitorserv;
      this.stores.Monitors.description = 'Access monitored items';
    }
}
