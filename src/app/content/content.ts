import {Component} from '@angular/core';
import {sharedTexts} from './sharedTexts/sharedTexts';
import {animation,state,trigger,transition,style, animate} from '@angular/animations';
@Component({
    selector:'content',
    templateUrl:'./content.html',
    styleUrls:['./content.css'],
    animations:[
        trigger('pageOpacity',[
          state('opacityOn',style({
            opacity:'0.2'
          })),
          state('opacityOot',style({
            opacity:'1'
          })),
    transition("opacityOn=>opacityOot",[animate('0.5s')])
        ])
      ]
})

export class contentClass {

    pageNimation='opacityOn';
    ngOnInit() {
        setTimeout(() => {
          this.pageNimation = 'opacityOot';
        }, 2);
    
      }
    imgUrls : sharedTexts = {
        imgUrl:"./assets/financial.png",
        loanImageUrl : "./assets/personal.png",
        h3:"Personal finance that fits you",
        paragraph : "We believe financially responsible people deserve better financial options. That’s why we’re blending insightful data science, elegant design, and personalized service to build lifelong relationships with our clients."
    }

    ContentStyles = {
        'background-image' : `url(${this.imgUrls.imgUrl})`,
        'margin-left': "150px",
        'margin-top': "250px"
    }

    LoanStyle = {
        'background-image' : `url(${this.imgUrls.loanImageUrl})`,
    }
}