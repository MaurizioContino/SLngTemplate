import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {

}
