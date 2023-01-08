import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Manager } from '../../../models/Manager';
import { ManagersService } from '../../../services/managers.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerDetailsComponent {
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

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private managerservice: ManagersService){}

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
