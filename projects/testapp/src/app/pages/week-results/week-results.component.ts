import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SlLayoutsService } from 'projects/ng-sl-layouts/src/public-api';
import { Subject, takeUntil } from 'rxjs';
import { MonitorItem } from '../../models/Monitoritem';
import { MonitorResultItem, MonitorResults } from '../../models/MonitorResults';
import { MonitorItemsService } from '../../services/monitor-items.service';
import { MonitorResultsService } from '../../services/monitor-results.service';

@Component({
  selector: 'app-week-results',
  templateUrl: './week-results.component.html',
  styleUrls: ['./week-results.component.scss']
})
export class WeekResultsComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  small = false;
  DetailItem: any;
  Items: MonitorResults[] = []
  ItemTypes: MonitorItem[] = []
  constructor(private monitorserv: MonitorResultsService, private itemsrv: MonitorItemsService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.Items = [];
    this.itemsrv.results$.pipe(takeUntil(this.destroy$)).subscribe(v=>{
      this.ItemTypes = v;
      this.monitorserv.results$.pipe(takeUntil(this.destroy$)).subscribe(list=>{

        const lastweek = this.weekFromdate(new Date(2023, 11, 31))
        const values = []
        for(var i=1;i<lastweek;i++) {
          const dt1 = this.weekToDate(2023, i);
          let dt2 = new Date(dt1);
          dt2.setDate(dt2. getDate() + 6);

          const onWeek = list.filter(itm=>itm.Week == i);
          // Dovrebbe esserci un solo elemento ma per ora evitiamo di nascondere eventuali errori
          if (onWeek.length>0)
          {
            onWeek.forEach(v=>{
              v.DateStart = dt1;
              v.DateEnd = dt2;
              v.Loaded = true
              this.FillItemTypes(v)
              values.push(v);
            })

          } else {

            const res = new MonitorResults(1, i)
            res.DateStart = dt1;
            res.DateEnd = dt2;
            res.Loaded = false;
            this.FillItemTypes(res);
            values.push(res);
          }
        }

        this.Items = values;
        this.cdr.detectChanges();
      })
      this.monitorserv.Load(true);
    })
    this.itemsrv.Load();

  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  SelectedChange(row: any){
    this.DetailItem = row
  }
  FillItemTypes(item: MonitorResults ) {
    this.ItemTypes.forEach(typ=>{
      if (item.Values.find(itm=>itm.IdMonitorItem == typ.Id)==undefined){
        const v = new MonitorResultItem(0, typ.Id, typ.Name, item.IdManager, item.Week, 0);
        item.Values.push(v);
      }
    })
    item.Values
  }

  weekToDate(year: number, week: number) {

    var simple = new Date(year, 0, 1 + (week - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }

  weekFromdate(date : Date) {
    {

      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                            - 3 + (week1.getDay() + 6) % 7) / 7);
    }
  }
}
