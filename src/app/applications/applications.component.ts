import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import {firebaseService} from '../firebase/firebase.service';
import {appData} from '../firebase/firebaseApp';
import {Router} from '@angular/router';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor(
  private route:ActivatedRoute,
  private firebaseService:firebaseService,
  private router:Router
) { }
LoanType:any;
Username:string;
applicationStatus:boolean;
  numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  ngOnInit() {
   this.LoanType =  this.route.snapshot.params;
 this.firebaseService.canAcitaveSubjet.subscribe((appStatus:boolean)=>{
this.applicationStatus=!appStatus;
 })

 if(window.localStorage.getItem('username')){
  this.applicationStatus = true;
      }
      else {
        this.applicationStatus = false;  
      }

  }
  createApp = new FormGroup({
    email : new FormControl(window.localStorage.getItem('username')),
    amount : new FormControl(''),
    ccy : new FormControl(''),
    year : new FormControl(''),
    paymentDay : new FormControl(''),
  })

  appData  = [];
  onSubmit(){
    this.firebaseService.loadingSubject.next(true);
    this.appData  = [{
      amount: this.createApp.controls.amount.value,
      application_type: this.LoanType.name,
      ccy: this.createApp.controls.ccy.value,
      identifier: this.createApp.controls.email.value,
      paymentDay: this.createApp.controls.paymentDay.value,
      year: this.createApp.controls.year.value,
  
    }]
this.firebaseService.createApp(this.appData).subscribe((data:string)=>{
this.firebaseService.loadingSubject.next(false);
this.router.navigate(['myApp']);
});
  }
}
