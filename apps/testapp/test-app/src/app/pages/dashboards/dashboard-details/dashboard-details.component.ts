import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dashboard, DashboardWidget } from '@soloud/sldashboard';
import { DashboardConfigService } from '@soloud/sldashboard';

@Component({
    selector: 'app-dashboard-details',
    templateUrl: './dashboard-details.component.html',
    styleUrls: ['./dashboard-details.component.scss'],
})
export class DashboardDetailsComponent {
    datasources: string[] = [];

    @Input() EditStatus: 'none' | 'add' | 'edit' | 'delete' = 'none';
    private _current: Dashboard | null = null;
    @Input()
    public get current(): Dashboard | null {
        return this._current;
    }
    public set current(value: Dashboard | null) {
        this._current = value;
        if (value?.isnew) {
            this.EditStatus = 'add';
            if (value) this.form.setValue(value);
        } else {
            this.EditStatus = 'none';
        }
        this.cdr.detectChanges();
    }

    form = this.fb.group({
        Id: [0],
        Name: ['', [Validators.required]],
        Description: ['', [Validators.required]],
        isnew: [false],
        updated: [new Date().toISOString()],
        originalupdated: [''],
        deleted: [false],
        //Items: this.fb.array<DashboardWidget>([]),
    });

    constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private Dashboardservice: DashboardConfigService) {}

    Save() {
        const s = this.form.value as Dashboard;
        s.updated = new Date().toISOString();
        // this.Dashboardservice.save(s).subscribe(v=>{
        //   this.current = v.find(v=>v.Id===this._current?.Id) as Dashboard;
        //   this.EditStatus = "none"
        //   this.cdr.detectChanges();
        // })
    }
    Edit() {
        this.EditStatus = 'edit';
        this.form.setValue(this._current as Dashboard);
    }
    Cancel() {
        this.EditStatus = 'none';
        this.form.reset(this._current as Dashboard);
    }

    Delete() {
        this.EditStatus = 'delete';
    }
}
