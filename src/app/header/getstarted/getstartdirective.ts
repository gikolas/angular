import {Directive,HostListener,HostBinding} from '@angular/core';
@Directive({
    selector :'[getsrat]'
})

export class getstartDirective{
@HostBinding('style.color') color ;
@HostListener('mouseover') onmouseover(){
    setTimeout(()=>{
        this.color= "black";
    },200)
    
}
@HostListener('mouseout') onmouseout(){
    setTimeout(()=>{
        this.color= "white";
    },200)
}
}