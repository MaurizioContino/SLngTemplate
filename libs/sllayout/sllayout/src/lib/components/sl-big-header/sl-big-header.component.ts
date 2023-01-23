import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-bigheader',
  templateUrl: './sl-big-header.component.html',
  styleUrls: ['./sl-big-header.component.scss'],
})
export class SlBigHeaderComponent {

  private _content: TemplateRef<any> | null = null;

  @ContentChild('bigheadcontent')
  public get content(): TemplateRef<any> | null {
    return this._content;
  }
  public set content(value: TemplateRef<any> | null) {
    this._content = value;
    this.cdr.detectChanges();
  }

  @Input() Background: string = "";
  @Input() Avatar: string = "";
  @Input() Title: string = "";
  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"
  @Input() canSave = true

  @Output() Edit = new EventEmitter();
  @Output() Save = new EventEmitter();
  @Output() Delete = new EventEmitter();
  @Output() Cancel = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}
}
