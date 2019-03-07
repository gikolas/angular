import {Component} from '@angular/core';
import {modalService} from '../../modal/modalservice';
import {FormGroup,FormControl} from '@angular/forms';
import {firebaseService} from '../../firebase/firebase.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
selector : 'signin',
templateUrl:'./signin.html',
styleUrls :['./signin.css']
})
export class signin
{
    showSignUp = false;
    setColor = false;
    loadingStatus :boolean;
    activateStatus:boolean;
    SignIn(){
        this.showSignUp = false;
        this.setColor = false;
    }

    SignUp(){
        this.showSignUp = true;
        this.setColor = true;
    }

    constructor(
        private modalService:modalService,
        private firebaseService:firebaseService,
        private route:Router){

    }
    ModalStatus : boolean=true;
    closeModal(){
  
       setTimeout(() => {
        
       this.ModalStatus = true;
       }, 300);
   
       
    }

    showModal(){
        setTimeout(() => {
        
            this.ModalStatus = false;
            }, 300);
    }

    signInForm = new FormGroup({
        username: new FormControl('gio@gio.ge'),
        password: new FormControl('123456')
    })
   
    signUpForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })
   
    Param:boolean=false;
    onSubmit(e:Event){
      
      setTimeout(()=>{
        this.ModalStatus=true;
      },200)
      
        e.preventDefault();
        this.loadingStatus = true;
        this.firebaseService.loadingSubject.next(true);
       this.firebaseService.logIn(this.signInForm.controls.username.value,
        this.signInForm.controls.password.value).then((res)=>{
            this.firebaseService.loadingSubject.next(false);
            window.localStorage.setItem('activate','0');
            this.firebaseService.userNameSubject.next(this.signInForm.controls.username.value);
            window.localStorage.setItem('username',this.signInForm.controls.username.value);
            this.firebaseService.canAcitaveSubjet.next(false);
            this.firebaseService.Username = window.localStorage.getItem('username');
            this.activateStatus = true;
            this.Param = true;
            this.route.navigate(['myApp']);
                  }).catch((err) => {this.Param = false,  this.firebaseService.loadingSubject.next(false);}
                    )

      
}

    onSubmitUp(e:Event){
        e.preventDefault();
        setTimeout(()=>{
            this.ModalStatus=true;
          },200)
        this.firebaseService.loadingSubject.next(true);
this.firebaseService.register(this.signUpForm.controls.username.value,
    this.signUpForm.controls.password.value).then((res)=>{
        this.firebaseService.loadingSubject.next(false);
    }).catch((err)=>{
alert(err);this.firebaseService.loadingSubject.next(false);
    })
    }


ngOnInit(){
    if(window.localStorage.getItem('activate')){
        this.activateStatus = true; 
    }
    else {
        this.activateStatus = false;  
    }
    firebase.initializeApp({
        apiKey: "AIzaSyDVpS3ltAn_CWIXQTtdPuw3YL1DX4-I2IQ",
        authDomain: "angular-http-7477a.firebaseapp.com",
    })
}

LogOut(e:Event){
    e.preventDefault();
    window.localStorage.removeItem('activate');
    window.localStorage.removeItem('username');
    this.activateStatus = false;  
    setTimeout(()=>{
        this.ModalStatus=true;
      },200)
    this.route.navigate(['./']);
    this.firebaseService.canAcitaveSubjet.next(true);
}
}