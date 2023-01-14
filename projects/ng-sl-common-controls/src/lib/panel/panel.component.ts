import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() visible = false;
  @Input() Width = 500;
  @Input() Height = 500;

}
