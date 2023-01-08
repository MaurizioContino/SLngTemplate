import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent {

  @Input() current: any = null;
  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"
  @Input() cantSave=false

  @Output() Edit = new EventEmitter();
  @Output() Save = new EventEmitter();
  @Output() Delete = new EventEmitter();
  @Output() Cancel = new EventEmitter();




}
