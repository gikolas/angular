import {Component,ContentChildren,QueryList,ViewChild} from '@angular/core';
import {modalNavItem} from './modal-nav-item/navitem';
@Component({
selector : 'modalnav',
templateUrl : './modalnav.html'
})

export class modalNav {
    bltrue = true;
@ContentChildren(modalNavItem) modalNavItems:QueryList<modalNavItem>;

ngOnInit(){
    console.log(this.modalNavItems);
}

}