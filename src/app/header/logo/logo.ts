import {Component,Input} from '@angular/core';
import { services } from '../../services';

@Component({
    selector :'logoApp',
    templateUrl :'/logo.html',
    styleUrls:['./logo.css']
})

export class logo {
    constructor(private myservice:services){}
    mainImage = 'url(assets/mphp-photo-hero.jpg)';
    className = 'navbar-nav';
    changeMain(){
        this.myservice.changeHeaderImage(this.mainImage);
        this.className = 'navbar-nav';
       }
@Input('logo') logo : string;
}
