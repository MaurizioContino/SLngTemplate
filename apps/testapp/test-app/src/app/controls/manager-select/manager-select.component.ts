import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Manager } from '../../models/Manager';
import { ManagersService } from '../../services/managers.service';

@Component({
    selector: 'app-manager-select',
    templateUrl: './manager-select.component.html',
    styleUrls: ['./manager-select.component.scss'],
})
export class ManagerSelectComponent implements OnInit, OnDestroy {

  @Input() Value = -1
  @Output() ValueChange = new EventEmitter<number>()

  private _InternalValue = -1;
  public get InternalValue() {
    return this._InternalValue;
  }
  public set InternalValue(value) {
    this._InternalValue = value;
    this.Value = this.InternalValue;
    this.ValueChange.emit(this.InternalValue)
  }

  managers: any[] = []
  destroy$ = new Subject();
  constructor(private managerServ: ManagersService){}

  ngOnInit(): void {
    this.InternalValue = this.Value;
    this.managerServ.Managers$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.managers = v.map(r=> {return {Id: r.Id, label: r.Name + ' ' + r.Surname}});
    })
    this.managerServ.Load();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete()

  }

}
