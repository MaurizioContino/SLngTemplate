import { ChangeDetectorRef, Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  get AreeFA():FormArray{
    return <FormArray> this.form.controls['Aree'] as FormArray;
  }

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private regionservice: RegionService){}


  activeAree() {
    return this._current?.Aree.filter( v=> !v.deleted);
  }

  setChanged(area: AbstractControl<any, any>, value: Area) {

    value.updated = new Date().toISOString()
    area.patchValue(value);
    //area.controls['updated'].patchValue(new Date().toISOString());
  }

  createArea(v: any = null) {

    const nArea = new Area(this._current!.Name, '');
    this._current?.Aree.push(nArea)
    this.AreeFA.push(this.createAreaFA(nArea));
  }
  createAreaFA(area: Area) {

    return this.fb.group(
      {

        Name: [area.Name, [Validators.required]],
        Region: [area.Region],
        isnew: [false],
        updated: [null],
        originalupdated: [null],
        deleted: [false],
    });
  }

  Save() {
    this.regionservice.save(this._current!).subscribe(v=>{
      this.EditStatus = "none"
    })
  }
  Edit() {
    this.EditStatus = "edit"
    this.AreeFA.clear();
    this._current?.Aree.forEach(a=>{
      this.AreeFA.push(this.createAreaFA(a));
    })
    this.form.setValue(this._current as any);

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
