import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directive1',
  templateUrl: './test-directive1.component.html',
  styleUrls: ['./test-directive1.component.css']
})
export class TestDirective1Component implements OnInit {
  isActive: boolean;
  value: number;
  color: string;
  constructor() { }

  ngOnInit() {
    this.isActive = false;
    this.value = 1;
  }

}
