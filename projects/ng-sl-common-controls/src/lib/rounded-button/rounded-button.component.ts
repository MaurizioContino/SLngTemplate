import { AfterViewInit, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sl-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundedButtonComponent implements AfterViewInit {

  @Input() Text: string = ""
  @Input() Icon: string = ""
  @Output() click  = new EventEmitter<any>();
  @ViewChild("thebutton") button: any;

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit(): void {
    console.log(this.button);

    this.el.nativeElement.classList.forEach((element: any) => {
      this.button.nativeElement.classList.add(element);
    });
  }



  onclick(e: any) {
    this.click.emit(e);
  }
}
