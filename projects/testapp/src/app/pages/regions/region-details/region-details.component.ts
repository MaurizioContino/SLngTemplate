import { ChangeDetectorRef, Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Area } from '../../../models/Area';
import { Region } from '../../../models/Region';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDetailsComponent {
  private _current: Region | null = null;
  public AreeEdit: any[] = []
  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"

  @Input()
  public get current(): Region | null{
    return this._current;
  }
  public set current(value: Region | null) {
    this._current = value;
    this.EditStatus = "none"
    this.cdr.detectChanges();
  }

  form = new FormGroup({
    Name: new FormControl(''),
    isnew: new FormControl(false),
    updated: new FormControl(new Date()),
    originalupdated: new FormControl(null),
    deleted: new FormControl(false),
    BackgroundImage: new FormControl(),
    Avatar: new FormControl(),
    Aree: new FormArray([]),
  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder){}

  Save() {

  }
  get aree() {
    return this.form.get('Aree') as FormArray;
  }

  editableAreas(): any[] {
    return this.AreeEdit.filter(v=>v.status!='deleted')
  }

  Edit() {
    this.EditStatus = "edit"
    //this.AreeEdit = this._current!.Aree.map((v: any)=>{return {Name: v, original: v, status: 'none'}})

     this.AreeEdit.forEach(a => {
       this.aree.push(new FormGroup(
       {
        Name: new FormControl(a),
        original: new FormControl(a),
        status: new FormControl('none'),
       }
       ))
    });
    this.form.setValue(this._current as any);
  }

  Cancel() {
    this.EditStatus = "none"
    this.form.reset(this._current  as any);
  }

  Delete() {
    this.EditStatus = "delete"
  }
  DeleteArea(area: any) {
    area.status = "deleted"
  }
  AddArea() {
    this.AreeEdit.push({Name:'', original:'', status: 'added'})
  }
  AreaChanged(area: any) {
    area.status = "changed";
  }

}
