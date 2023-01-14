import { Component, OnInit } from '@angular/core';
import { chartfilter } from '../../controls/charts/chart-filter/filterValues';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  
  listObject = ['uno', 'due', 'ciao 1', 'ciao 2']
  showYears = false;
  mainfilter: chartfilter = {fromweek: 1, toweek: 1, year: (new Date()).getFullYear(), reportType: 'weekly'}
  years:number[] = []

  ngOnInit(): void {
    this.years = [];
    const current = (new Date()).getFullYear();
    for(var i=0; i < 10; i++) 
    {
      this.years.push( current - i);
    }
  }

}
