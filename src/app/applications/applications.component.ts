import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import {firebaseService} from '../firebase/firebase.service';
import {appData} from '../firebase/firebaseApp';
import {Router} from '@angular/router';
import {checkEmail} from './validator';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor(
  private route:ActivatedRoute,
  private firebaseService:firebaseService,
  private router:Router,
  private fb:FormBuilder
) { }
LoanType:any;
Username:string;
applicationStatus:boolean;
  PdayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  YearNumbers = [2,4,5];
  Ccy = ['GEL','USD'];
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
  createApp = this.fb.group({
    email : new FormControl(window.localStorage.getItem('username'),
    Validators.compose([Validators.required,Validators.email])),
    amount : new FormControl('',[Validators.required]),
    ccy : new FormControl('',[Validators.required]),
    year : new FormControl('',[Validators.required]),
    paymentDay : new FormControl('',[Validators.required]),
  },
  {
    validator:checkEmail.validatorEmail
  })

  get email(){
    return this.createApp.get('email');
  }
  get amount(){
    return this.createApp.get('amount');
  }
  get ccy(){
    return this.createApp.get('ccy');
  }
  get year(){
    return this.createApp.get('year');
  }
  get paymentDay(){
    return this.createApp.get('paymentDay');
  }

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
