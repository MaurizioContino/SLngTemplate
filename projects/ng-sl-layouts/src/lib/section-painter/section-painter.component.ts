import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, TemplateRef } from '@angular/core';
import { layoutsection } from '../models/layoutsection';

@Component({
  selector: 'sl-section-painter',
  templateUrl: './section-painter.component.html',
  styleUrls: ['./section-painter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionPainterComponent {

  @Input() template: TemplateRef<any> | null = null;
  @Input() section: layoutsection | null = null;
  parent: any;
  constructor(private el: ElementRef){
    this.parent = el.nativeElement;
  }
  isVisible() {
    if (this.section?.collapsible && this.section.collapsed) return false;
    return true
  }
  ngAfterViewInit() {
    if (this.section?.collapsible && this.section.collapsed)
      {
        this.parent.style.display = 'none';
      } else {
        this.parent.style.display = 'flex';
        this.parent.style.align_items = 'stretch';

        this.parent.style.flex = '1 0 auto';

      }
  }
}
