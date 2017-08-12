import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tview',
  templateUrl: './tview.component.html',
  styleUrls: ['./tview.component.css']
})
export class TviewComponent implements OnInit {
  data: any[];
  data2: any[];
  data3: any;
  b: boolean;
  constructor() { }

  ngOnInit() {
    this.data = [1, true, 'dara'];
    this.data2 = ['a', 'b', 'c'];
    this.data3 = [
                  {
                    'id': 1,
                    'name': 'dara',
                    'sex': 'male',
                  },
                  {
                    'id': 2,
                    'name': 'bona',
                    'sex': 'female',
                  }
                 ];
    this.b = true;
  }

}
