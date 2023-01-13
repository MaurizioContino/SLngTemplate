import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component {
  listObject = ['uno', 'due', 'ciao 1', 'ciao 2']

  dataset = [20, 20, 40, 30, 60]
  labels = ['uno', 'due', 'tre', 'quattro', 'cinque']

}
