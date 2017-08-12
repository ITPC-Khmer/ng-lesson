import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  data: string[];
  constructor() { }

  ngOnInit() {
    this.data = ['a', 'b', 'c', 'd'];
  }

}
