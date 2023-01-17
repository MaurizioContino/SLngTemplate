import { ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-single-value',
  templateUrl: './single-value.component.html',
  styleUrls: ['./single-value.component.scss']
})
export class SingleValueComponent {

  @Input() Color: string = ""
  @Input() FooterColor: string = ""
  
  @Input() Value: string | number = ""
  @Input() Footer: string = ""
  maxfontsize=400;
  fontsize=80;
  constructor(private _element:ElementRef, private cdr: ChangeDetectorRef){}
 
  ngAfterViewInit(): void {
    
    var h = this._element.nativeElement.offsetHeight;
    //var w = this._element.nativeElement.offsetWidth;
    this.fontsize = h/2
    this.cdr.detectChanges()
    
  }

  getValueStyle() {
    return {
      'font-size.px': 55 ,
      'color' : this.Color
    }
  }
}
