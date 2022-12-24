import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { SlLayoutsService } from '../../ng-sl-layouts.service';


@Component({
  selector: 'sl-layout-m',
  templateUrl: './layout-m.component.html',
  styleUrls: ['./layout-m.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMComponent {

  @Input() left: TemplateRef<any> | null = null
  @Input() mainleft: TemplateRef<any> | null = null
  @Input() mainright: TemplateRef<any> | null = null
  @Input() right: TemplateRef<any> | null = null


  constructor(public layoutService:  SlLayoutsService) {
  }
}
