import {Directive,HostListener,HostBinding} from '@angular/core';
@Directive({
selector:'[menudirect]'
})

export class menuDirective {
@HostBinding('class.rowWhite') rowWhite;
@HostBinding('style.opacity') opacity;
    @HostListener('window:scroll') MouseY(){
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
          this.rowWhite = true;
    
          
         
        } else if (this.rowWhite && number < 10) {
          this.rowWhite = false;
        }
      }
       
    
}