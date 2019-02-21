import {NgModule} from '@angular/core';
import {modal} from './modal';
import {modalNavItem} from './modal-nav/modal-nav-item/navitem';
import {modalNav} from './modal-nav/modalnav';
import { BrowserModule } from '@angular/platform-browser';
import {modalService} from './modalservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
imports:[
    BrowserModule,
    BrowserAnimationsModule],
    
providers: [modalService],
declarations:[
    modal,
    modalNavItem,
    modalNav
],
exports:[
    modal,
    modalNavItem,
    modalNav,
    
]
})

export class modalModule {

}