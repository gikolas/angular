import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import {firebaseService} from '../firebase/firebase.service';
import {appData} from '../firebase/firebaseApp';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor(
  private route:ActivatedRoute,
  private firebaseService:firebaseService
) { }
LoanType:any;
  numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  ngOnInit() {
   this.LoanType =  this.route.snapshot.params;
  }
  createApp = new FormGroup({
    email : new FormControl(''),
    amount : new FormControl(''),
    ccy : new FormControl(''),
    year : new FormControl(''),
    paymentDay : new FormControl(''),
  })

  appData  = [];
  onSubmit(){
    this.appData  = [{
      amount: this.createApp.controls.amount.value,
      application_type: this.LoanType.name,
      ccy: this.createApp.controls.ccy.value,
      id: 123,
      identifier: 'test@test.com',
      paymentDay: this.createApp.controls.paymentDay.value,
      year: this.createApp.controls.year.value,
  
    }]
this.firebaseService.createApp(this.appData).subscribe((data:string)=>{
console.log(data);
});
  }
}
