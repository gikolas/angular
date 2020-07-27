import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';
@Directive({
    selector: '[direct]'
})
export class directives {
    constructor(element: ElementRef) {

    }
    @HostBinding('style.opacity') opacity;
    @HostListener("mouseover") onmouseover() {
        this.opacity = '1';
    }
    @HostListener("mouseout") onmouseout() {
        this.opacity = '0.2';
    }
}