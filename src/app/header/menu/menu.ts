import {Component} from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
    selector :'menuApp',
    templateUrl :'./menu.html',
    styleUrls :['./menu.css'],
    animations:[
      trigger('tooglemenu',[
        state('over',style({
          opacity: 0.2
    })),
    state('out',style({
      opacity: 1
})),
transition('over => out', [
  animate('0.5s')
]),
  ])
]
})
export class menu {
  tglmenu = 'over';
    param=true;
   
    hide(){
     
        this.param = true;  
        this.tglmenu = 'over'
 

     }

     hides(){
   
        this.param = true;  
       

 }
      show(){
       
    this.param = false;
     }
     show_link(){
      this.tglmenu = 'out';
      this.param = false;
     }
 
  
}