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

  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"

  private _current: Region | null = null;
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
      Id: [null],
      Name: [null, [Validators.required]],
      isnew: [false],
      updated: [new Date()],
      originalupdated: [null],
      deleted: [false],
      BackgroundImage: [''],
      Avatar: [''],
      Aree: this.fb.array([])
  });

  get AreeFA(): FormArray {
    return <FormArray> this.form.controls['Aree'] as FormArray;
  }

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private regionservice: RegionService){}


  get activeAree(): Area[] {
    return this._current? this._current.Aree.filter( v=> !v.deleted) : [];
  }


  createArea(v: any = null) {

    const nArea = new Area(0, this.current?.Id?this.current?.Id:0, this._current!.Name, '');
    this._current?.Aree.push(nArea)
    this.AreeFA.push(this.createAreaFA(nArea));
  }
  createAreaFA(area: Area) {

    return this.fb.group(
      {
        Id: [area.Id],
        IdRegion: [area.IdRegion],
        Name: [area.Name, [Validators.required]],
        Region: [area.Region],
        isnew: [area.Id ? false : true],
        updated: [area.updated],
        originalupdated: [area.originalupdated],
        deleted: [false],
    });
  }

  Save() {
    const s = this.form.value as any as Region;
    s.Aree = this.form.controls.Aree.controls.filter(v=>v.dirty).map(v=>v.value as Area) ;
    this.regionservice.save([s]).subscribe(v=>{
      this.current = v.find(v=>v.Id == this._current?.Id) as Region;
      this.EditStatus = "none"
      this.cdr.detectChanges();
    })
  }
  Edit() {
    this.EditStatus = "edit"
    this.AreeFA.clear();
    this.activeAree.forEach(a=>{
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
  DeleteArea(area: Area, index: number) {
    if (area.isnew) {
      this._current?.Aree.splice(index);
      this.AreeFA.controls.splice(index)
    } else {
      area.deleted = true
      this.AreeFA.controls[index].patchValue(area)
      this.AreeFA.controls[index].markAsDirty();

      //this.AreeFA.controls
    }
    this.cdr.detectChanges()
  }
  RestoreArea(area: Area, index: number){
    area.deleted = false
    this.cdr.detectChanges()
  }
  AreaChanged(area: Area) {
    area.updated = new Date().toDateString();
  }

}
