import {Component,Input} from '@angular/core';

@Component({
    selector :'logoApp',
    templateUrl :'/logo.html',
    styleUrls:['./logo.css']
})

export class logo {
  
@Input('logo') logo : string;
}
