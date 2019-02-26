import {NgModule} from '@angular/core';
import {maincLazy} from './main-contentlazy';
import { CommonModule } from '@angular/common';
import {mainContent} from './main-content';
@NgModule({
    declarations:[mainContent],
    imports:[maincLazy,CommonModule],
    exports:[],

})

export class maincrmodule {

}