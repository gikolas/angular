import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {logo} from './logo/logo';
import {header} from './header';
import {headerService} from './headerservice';
import {menu} from './menu/menu';
import {directives} from './menu/directive';
import {getstart} from '../header/getstarted/getstart';
import {getstartDirective} from '../header/getstarted/getstartdirective';
import {signin} from '../header/signin/signin';
import {menuDirective} from './menudirective';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {modalModule} from '../modal/modalmodule';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
declarations : [
    logo,
    header,
    menu,
    directives,
    getstart,
    getstartDirective,
    signin,
    menuDirective,
    ],
providers :[headerService],
exports : [
    logo,
    header,
    menu,
    directives,
    getstart,
    getstartDirective,
    signin,
    menuDirective,
    
    ],
    imports:[CommonModule,RouterModule,modalModule,ReactiveFormsModule]
})

export class headerModule{

}