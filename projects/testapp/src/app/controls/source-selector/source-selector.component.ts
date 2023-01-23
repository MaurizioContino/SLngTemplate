import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.scss']
})
export class SourceSelectorComponent implements OnInit {

  StoreList: string[] = []
  @Input() Store: string = "";
  @Output() StoreChange = new EventEmitter<string>();


  constructor(private storeserv: StoreService) {}

  ngOnInit(): void {
    this.StoreList = [];
    Object.keys(this.storeserv.stores).forEach(k=>
      this.StoreList.push(k)
    )
  }
  EmitStore(e: string) {
    this.StoreChange.emit(e);
  }
}
