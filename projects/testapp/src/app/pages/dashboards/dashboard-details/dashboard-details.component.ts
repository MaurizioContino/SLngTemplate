import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardConfigService, DashboardGrid } from 'ngslcommoncontrols';

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

  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private Dashboardservice: DashboardConfigService){}
  ngOnInit(): void {
   
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

}
