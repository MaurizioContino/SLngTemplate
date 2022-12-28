import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgSlMenuService } from '../services/ng-sl-menu.service';

@Component({
  selector: 'sl-default-menu',
  templateUrl: './default-menu.component.html',
  styleUrls: ['./default-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultMenuComponent {
  constructor(public menuservice: NgSlMenuService) {

  }
}
