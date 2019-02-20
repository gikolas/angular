import {Component,Input,ContentChild,ElementRef,TemplateRef,ViewChild} from '@angular/core';

@Component({
selector : 'modalnavitem',
templateUrl :'./navitem.html'
})

export class modalNavItem {
    @Input('header') header:string;
@ContentChild(TemplateRef) TemplateRefCompses : TemplateRef<any>;
@ViewChild(TemplateRef) templateRef: TemplateRef<any>;

}