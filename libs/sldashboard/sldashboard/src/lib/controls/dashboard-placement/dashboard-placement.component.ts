import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'sl-dashboard-placement',
  templateUrl: './dashboard-placement.component.html',
  styleUrls: ['./dashboard-placement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPlacementComponent implements AfterViewInit  {

  rows: number[] = []
  cols: number[] = []
  SelectedItem: any = null
  showSelect = false;

  selectr: number | null= null;
  selectc: number | null= null;

  private _contents: TemplateRef<any>[]  = [];
  @ContentChildren('dashboarditem')
  public get contents(): TemplateRef<any>[] {
    return this._contents;
  }
  public set contents(value: TemplateRef<any>[]) {
    this._contents = value;
    this.cdr.detectChanges();
  }


  constructor(private myElement: ElementRef, private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.myElement.nativeElement.style="100%"
    const maxHeight = (this.myElement.nativeElement.offsetWidth -50) / 50;
    const maxwidth = 40;

    for(var i=0;i<maxwidth;i++) {
      this.rows.push(i);
    }
    for(var i=0;i<maxHeight;i++) {
      this.cols.push(i);
    }
  }
  showadd(idr: number, idc: number){
    this.SelectedItem = true
    this.showSelect = true;
    this.selectc = idc;
    this.selectr = idr;
  }
  closeDetails() {
    this.showSelect = false;
    this.SelectedItem = null;
    this.selectc = null;
    this.selectr = null;

  }
}
