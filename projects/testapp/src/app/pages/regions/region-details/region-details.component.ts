import { ChangeDetectorRef, Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Area } from '../../../models/Area';
import { Region } from '../../../models/Region';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDetailsComponent {
  private _current: Region | null = null;

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

  form = this.fb.group(
    {

      Name: [null, [Validators.required]],
      isnew: [false],
      updated: [new Date()],
      originalupdated: [null],
      deleted: [false],
      BackgroundImage: [''],
      Avatar: [''],
      Aree: this.fb.array([])
  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private regionservice: RegionService){}

  createArea(v: any = null) {
    this._current?.Aree.push(new Area(this._current.Name, ''))
  }

  activeAree() {
    return this._current?.Aree.filter( v=> !v.deleted);
  }
  Save() {
    this.regionservice.Load
  }

  disableSave(): boolean {
      return this.form.invalid || this._current?.Aree.find(v=>v.Name) !=null
  }


  Edit() {
    this.EditStatus = "edit"
    this.form.setValue(this._current as any);

    this.form.controls.Aree = this.fb.array([{
      Name: [null, [Validators.required]]
    }]);

  }

  Cancel() {
    this.EditStatus = "none"
    this.form.reset(this._current  as any);
  }

  Delete() {
    this.EditStatus = "delete"
  }
  DeleteArea(area: Area) {
    if (area.isnew) {
      this._current?.Aree.splice(this._current?.Aree.indexOf(area));
    } else {
      area.deleted = true
    }
  }

  AreaChanged(area: Area) {
    area.updated = new Date().toDateString();
  }

}
