import { Component } from '@angular/core';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent {

  itemsCount = 0;
  items = [{Name:'Maurizio', Surname:'Contino', }]
}
