import {NgModule} from '@angular/core';
import {modal} from './modal';
import {modalNavItem} from './modal-nav/modal-nav-item/navitem';
import {modalNav} from './modal-nav/modalnav';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
imports:[BrowserModule],
declarations:[
    modal,
    modalNavItem,
    modalNav
],
exports:[
    modal,
    modalNavItem,
    modalNav
]
})

export class modalModule {

}