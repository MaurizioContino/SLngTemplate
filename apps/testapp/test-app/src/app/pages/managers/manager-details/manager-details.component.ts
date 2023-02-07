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
  filteredaree: Area[]=[];
  regions: any[] = []


  private _currentRegion = "";
  public get currentRegion() {
    return this._currentRegion;
  }
  public set currentRegion(value) {
    if (this._currentRegion != value) {
      this._currentRegion = value;
      this.form.controls.Region.patchValue(value);
      this.filteredaree = this.aree.filter(v=>v.Region===this.form.controls.Region.value);
      this.form.controls.IdArea.patchValue(-1);


    }
  }





  form = this.fb.group(
    {
      Id: [-1],
      Name: ['', [Validators.required]],
      Surname: ['', [Validators.required]],
      Role: ['', [Validators.required]],
      IdArea:  [-1, [Validators.required]],
      Region: ['', [Validators.required]],
      isnew: [false],
      updated: [new Date()],
      originalupdated: [new Date(1990,1,1)],
      deleted: [false],
      BackgroundImage: [''],
      Avatar: [''],

  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private managerservice: ManagersService, public areaserv: AreeService){}
  ngOnInit(): void {
    this.areaserv.Aree$.subscribe(v=>{
      this.aree = v;

      this.regions = [];
      this.aree.forEach(v=>{
        if (this.regions.indexOf(v.Region)==-1) this.regions.push({id: v.Region, name: v.Region})
      })

      this.cdr.detectChanges();
    });
  }

  Save() {

    const s = this.form.value as any as Manager;
    this.managerservice.save([s]).subscribe(v=>{
      this.current = v.find(v=>v.Id===this._current?.Id) as Manager;
      this.EditStatus = "none"
      this.cdr.detectChanges();
    })
  }
  Edit() {
    if (this._current) {
      this.EditStatus = "edit"
      this.currentRegion = this._current.Region;
      this.form.setValue(this._current as any);
    }
  }
  Cancel() {
    this.EditStatus = "none"
    this.form.reset(this._current  as any);
  }

  Delete() {
    this.EditStatus = "delete"
  }

}
