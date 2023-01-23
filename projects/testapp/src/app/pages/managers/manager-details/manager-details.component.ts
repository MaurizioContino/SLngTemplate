import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Area } from '../../../models/Area';
import { Manager } from '../../../models/Manager';
import { AreeService } from '../../../services/aree.service';
import { ManagersService } from '../../../services/managers.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerDetailsComponent implements OnInit {
  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"
  private _current: Manager | null = null;
  @Input()
  public get current(): Manager | null{
    return this._current;
  }
  public set current(value: Manager | null) {
    this._current = value;
    this.EditStatus = "none"
    this.cdr.detectChanges();
  }

  aree: Area[]=[];

  get regions():string[] {
    const ret : string[]= []
    this.aree.forEach(v=>{
      if (ret.indexOf(v.Region)==-1) ret.push(v.Region)
    })
    return ret;
  }
  filteredAree() {
    return this.aree.filter(v=>v.Region == this.form.controls.Region.value);
  }

  form = this.fb.group(
    {
      Id: [null],
      Name: [null, [Validators.required]],
      Surname: [null, [Validators.required]],
      Role: [null, [Validators.required]],
      IdArea:  [null, [Validators.required]],
      Region: [null],
      isnew: [false],
      updated: [new Date()],
      originalupdated: [null],
      deleted: [false],
      BackgroundImage: [''],
      Avatar: [''],

  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private managerservice: ManagersService, public areaserv: AreeService){}
  ngOnInit(): void {
    this.areaserv.Dataset$.subscribe(v=>{
      this.aree = v;
    });
  }



  Save() {
    const s = this.form.value as any as Manager;
    this.managerservice.save([s]).subscribe(v=>{
      this.current = v.find(v=>v.Id == this._current?.Id) as Manager;
      this.EditStatus = "none"
      this.cdr.detectChanges();
    })
  }
  Edit() {
    this.EditStatus = "edit"
    this.form.setValue(this._current as any);

  }
  Cancel() {
    this.EditStatus = "none"
    this.form.reset(this._current  as any);
  }

  Delete() {
    this.EditStatus = "delete"
  }

}
