import { Component } from '@angular/core';
import { NgSlMenuService } from './ng-sl-menu.service';

@Component({
  selector: 'sl-menu',
  templateUrl: './ng-sl-menu.component.html',
  styles: [
  ]
})
export class NgSlMenuComponent {
  constructor(public menuservice: NgSlMenuService) {

  }
}
