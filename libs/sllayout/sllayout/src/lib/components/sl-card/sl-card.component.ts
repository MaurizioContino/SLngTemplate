import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-card',
  templateUrl: './sl-card.component.html',
  styleUrls: ['./sl-card.component.scss'],
})
export class SlCardComponent {

  private _head: TemplateRef<any> | null = null;
  private _body: TemplateRef<any> | null = null;

  @ContentChild('card_header')
  public get head(): TemplateRef<any> | null {
    return this._head;
  }
  public set head(value: TemplateRef<any> | null) {
    this._head = value;
    this.cdr.detectChanges();
  }

  @ContentChild('card_body')
  public get body(): TemplateRef<any> | null {
    return this._body;
  }
  public set body(value: TemplateRef<any> | null) {
    this._body = value;
    this.cdr.detectChanges();
  }


  constructor(private cdr: ChangeDetectorRef) {}
}
