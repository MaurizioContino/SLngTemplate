import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardGrid, DashboardItem } from '@soloud/sldashboard';
import { DashboardConfigService } from 'libs/sldashboard/sldashboard/src/lib/services/dashboard.service';

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

    return this._current;
  }
  public set current(value: DashboardGrid | null) {
    this._current = value;
    if (value?.isnew) {
      this.EditStatus = "add"
      if (value) this.form.setValue(value);
    } else {
      this.EditStatus = "none"
    }
    this.cdr.detectChanges();
  }




  form = this.fb.group(
    {
      Id: [0],
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      rows: [10],
      cols: [10],
      max: [0],
      isnew: [false],
      updated: [new Date().toISOString()],
      originalupdated: [''],
      deleted: [false],
      Items: this.fb.array<DashboardItem>([]),

  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private Dashboardservice: DashboardConfigService){}


  Save() {
    const s = this.form.value  as DashboardGrid;
    s.updated = (new Date()).toISOString()
    this.Dashboardservice.save(s).subscribe(v=>{
      this.current = v.find(v=>v.Id == this._current?.Id) as DashboardGrid;
      this.EditStatus = "none"
      this.cdr.detectChanges();
    })
  }
  Edit() {
    this.EditStatus = "edit"
    this.form.setValue(this._current as DashboardGrid);

  }
  Cancel() {
    this.EditStatus = "none"
    this.form.reset(this._current as DashboardGrid);
  }

  Delete() {
    this.EditStatus = "delete"
  }





}
