import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DashboardConfigService, DashboardFilter, DashboardGrid } from 'ngslcommoncontrols';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent {
  @Input() EditStatus : "none" | "add" | "edit" | "delete" = "none"
  private _current: DashboardGrid | null = null;
  @Input()
  public get current(): DashboardGrid | null{
    if (this._current) {
      (this._current as any)['BackgroundImage'] = "backgrounds/Dashboard.png";
      (this._current as any)['Avatar'] = "avatars/Dashboard.png"
    }

    return this._current;
  }
  public set current(value: DashboardGrid | null) {
    this._current = value;
    this.EditStatus = "none"
    this.cdr.detectChanges();
  }

  


  form = this.fb.group(
    {
      Id: [null],
      Name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      Items: [],
      rows: [],
      cols: [],
      max: [],
      isnew: [false],
      updated: [new Date()],
      originalupdated: [null],
      deleted: [false],
      BackgroundImage: [''],
      Avatar: [''],
      Filters: this.fb.array([])
  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private Dashboardservice: DashboardConfigService){}
  ngOnInit(): void {
   
  }
  get FiltersArray():FormArray{
    return <FormArray> this.form.controls['Filters'] as FormArray;
  }
  Save() {
    const s = this.form.value as any as DashboardGrid;
    s.updated = (new Date()).toISOString()
    this.Dashboardservice.save(s).subscribe(v=>{
      this.current = v.find(v=>v.Id == this._current?.Id) as DashboardGrid;
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


  createFilter(v: any = null) {
    
    const newfilter = {isnew: true, deleted: false, field: '',  multiSelect: false} as DashboardFilter
    this._current?.Filters.push(newfilter)
    this.FiltersArray.push(this.createFilterFA(newfilter));
  }
  createFilterFA(filter: DashboardFilter) {

    return this.fb.group(
      {
        field: [filter.field, Validators.required],
        multiSelect: [filter.multiSelect],
        isnew: [filter.isnew],
        updated: [filter.updated],
        originalupdated: [filter.originalupdated],
        deleted: [false],
    });
  }


  DeleteFilter(filter: DashboardFilter, index: number) {
    if (filter.isnew) {
      this._current?.Filters.splice(index);
      this.FiltersArray.controls.splice(index)
    } else {
      filter.deleted = true
      this.FiltersArray.controls[index].patchValue(filter)
      this.FiltersArray.controls[index].markAsDirty();

      //this.AreeFA.controls
    }
    this.cdr.detectChanges()
  }
  RestoreArea(filter: DashboardFilter, index: number){
    filter.deleted = false
    this.cdr.detectChanges()
  }
}
