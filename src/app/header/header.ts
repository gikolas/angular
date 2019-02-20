import {Component,OnInit} from '@angular/core';
import {headerService} from './headerservice';
import { state,trigger,style,transition, animate } from '@angular/animations';
@Component({
  selector : 'headerApp',
 templateUrl : './header.html',
 styleUrls : ['./header.css'],
 animations : [
   trigger('menuFade',[
   state ('fadeIn', style({
    opacity:1,
    width:"1500px",
    margin: "0 auto"
   })
  ),
  state ('fadeOut', style({
    opacity:1,
    position: "fixed",

   background: "rgb(34, 32, 32)",

   width:"1500px",
   margin: "0 auto"

       })
      ),
      transition('fadeIn <=> fadeOut',[
        animate('0.5s')
      ]),
  
])
] 
})
export class header implements OnInit  {

  pHeader : string;
  pDescription:string;
   logoname:object;
  constructor(private headerService:headerService){}
rowClass =false;
mainState = 'fadeIn';
clk(){

  let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number > 10) {
    this.mainState = "fadeOut";

    
   
  } else if (number < 10) {
    this.mainState = "fadeIn";
  }
}

 

ngOnInit(){
  this.pHeader = 'Welcome to a better way to borrow.';
  this.pDescription=" We’re using unrivaled service and technology to bring low-interest loans to high-potential people. Like you.";
  this.logoname = this.headerService.getLogoName();


}


}