import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundedButtonComponent {

  @Input() Color: string = "white"
  @Input() TextColor: string = "white"
  @Input() Text: string = "white"
  @Input() Icon: string = ""

}
