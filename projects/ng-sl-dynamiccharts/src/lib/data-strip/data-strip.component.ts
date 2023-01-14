import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-data-strip',
  templateUrl: './data-strip.component.html',
  styleUrls: ['./data-strip.component.scss']
})
export class DataStripComponent implements AfterViewInit {

  @Input() public childtemplate: TemplateRef<any> | null = null
  @Input() Data: any[] = []
  maxfontsize=400;
  fontsize=80;
  constructor(private _element:ElementRef, private cdr: ChangeDetectorRef){}
 
  ngAfterViewInit(): void {
    
    var h = this._element.nativeElement.offsetHeight;
    //var w = this._element.nativeElement.offsetWidth;
    this.fontsize = h/3
    this.cdr.detectChanges()
    
  }
}
