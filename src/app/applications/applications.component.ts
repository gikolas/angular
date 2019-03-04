import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor() { }

  numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  ngOnInit() {
  }

}
