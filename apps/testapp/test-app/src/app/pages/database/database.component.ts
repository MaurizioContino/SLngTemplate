import { Component } from '@angular/core';
import { AreeService } from '../../services/aree.service';
import { ManagersService } from '../../services/managers.service';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent  {
  constructor(private a: AreeService,private  r: RegionService,private  m: ManagersService) {}
}
