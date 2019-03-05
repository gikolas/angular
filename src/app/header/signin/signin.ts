import {Component} from '@angular/core';
import {modalService} from '../../modal/modalservice';
@Component({
selector : 'signin',
templateUrl:'./signin.html',
styleUrls :['./signin.css']
})
export class signin
{
    showSignUp = false;
    setColor = false;
    SignIn(){
        this.showSignUp = false;
        this.setColor = false;
    }

    SignUp(){
        this.showSignUp = true;
        this.setColor = true;
    }

    constructor(private modalService:modalService){

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

}