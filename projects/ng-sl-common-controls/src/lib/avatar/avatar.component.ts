import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'sl-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {

  @Input() src: string = "";
  @ViewChild("avatar") avatar: any;
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.forEach((element: any) => {
      this.avatar.nativeElement.classList.add(element);
    });
  }

}
