import { Component } from '@angular/core';
import { NgSlMenuService } from 'NgSlMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testapp';

  constructor(mnuServ: NgSlMenuService){
    mnuServ.update([
      {label: 'ciao', children:[], url: ''}
    ])
  }


}
