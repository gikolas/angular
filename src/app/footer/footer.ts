import {Component} from '@angular/core';
import {brands,footerTexts} from './footerClass';
@Component({
selector:'footer',
templateUrl :'./footer.html',
styleUrls:['./footer.css']
})


export class footer {
    brands = brands;
    footerTexts = footerTexts;

    ngOnInit(){
     
    }
 
}