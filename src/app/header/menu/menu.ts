import {Component} from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import {services} from '../../services';

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
imageName = 'url(assets/slr-hero-1-min.jpg)';
creditImage = 'url(assets/credit-card-bg.png)';
engagementImage = 'url(assets/EngagementB.jpg)';
homeImage = 'url(assets/paint.jpg)';
medicalImage = 'url(assets/MedicalBG-1.jpg)';
movingImage = 'url(assets/reloation-hero-bg.jpg)';
reviewImage = 'url(assets/reviews-hero.png)';
blogImage = 'url(assets/WeddingHero.png)';
className = 'navbar-nav';
     constructor(private myservice:services){}
     changeImage(){
      this.myservice.changeHeaderImage(this.imageName,'jumbotrons','navbar-navs');
this.className = 'navbar-navs';
     }

     changeImageCreditCard(){
      this.myservice.changeHeaderImage(this.creditImage,'jumbotrons','navbar-navs');
      this.className = 'navbar-navs';
     }

     changeImageEngagement(){
      this.myservice.changeHeaderImage(this.engagementImage,'jumbotron','navbar-nav');
      this.className = 'navbar-nav';
     }

     changeImageHome(){
      this.myservice.changeHeaderImage(this.homeImage,'jumbotron','navbar-nav');
      this.className = 'navbar-nav';
     }

     changeImageMedical(){
      this.myservice.changeHeaderImage(this.medicalImage,'jumbotron','navbar-nav');
      this.className = 'navbar-nav';
     }
     changeImageMoving(){
      this.myservice.changeHeaderImage(this.movingImage,'jumbotrons', 'navbar-navs');
      this.className = 'navbar-navs';
     }

     changeImageReview(){
      this.myservice.changeHeaderImage(this.reviewImage,'jumbotrons','navbar-navs');
      this.className = 'navbar-navs';
     }

     changeImageBlog(){
      this.myservice.changeHeaderImage(this.blogImage,'jumbotron','navbar-nav');
      this.className = 'navbar-nav';
     }
ngOnInit(){
this.myservice.Mysubject.subscribe((data)=>{
this.className = data.className;
})
}
     

}