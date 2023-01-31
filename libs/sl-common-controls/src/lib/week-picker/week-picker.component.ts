import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { first } from 'rxjs';

@Component({
    selector: 'sl-week-picker',
    templateUrl: './week-picker.component.html',
    styleUrls: ['./week-picker.component.scss'],
})
export class WeekPickerComponent {
    text = '';
    currentweek = 1;
    private _date = new Date();



    public get date() {
        return this._date;
    }
    public set date(value) {

        this._date = new Date(value);
        this.currentweek = this.weekFromdate(this._date);
        const year = value.getFullYear();
        const first = this.weekToDate(year, this.currentweek);
        const last = new Date(first);
        last.setDate(first.getDate() + 6);
        this.text = this.datePipe.transform(first, 'dd/MM/yyy') + ' ~ ' + this.datePipe.transform(last, 'dd/MM/yyy');


    }

    constructor(private cdr: ChangeDetectorRef, private datePipe: DatePipe) {
     this.date = new Date();

    }


    weekToDate(year: number, week: number): Date {
        const simple = new Date(year, 0, 1 + (week - 1) * 7);
        const dow = simple.getDay();
        const ISOweekStart = simple;
        if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }

    weekFromdate(date: Date) {
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        // January 4 is always in week 1.
        const week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
    }
}
