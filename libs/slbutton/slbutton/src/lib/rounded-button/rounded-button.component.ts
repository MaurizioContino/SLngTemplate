import { AfterViewInit, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlRoundedButtonComponent implements AfterViewInit {

  @Input() Text: string = ""
  @Input() Icon: string = ""
  @Input() Disabled = false;
  @Output() click  = new EventEmitter<any>();
  @ViewChild("thebutton") button: any;

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.forEach((element: any) => {
      this.button.nativeElement.classList.add(element);
    });
    this.el.nativeElement.classList = []
  }



  onclick(e: any) {
    //this.click.emit(e);
  }
}
