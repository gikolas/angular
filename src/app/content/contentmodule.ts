import {NgModule} from '@angular/core';
import {contentClass} from './content';
import {texts} from './contentHtml/texts';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declarations :[contentClass,texts],
exports:[contentClass,texts],
imports:[BrowserModule],
})

export class contentModule{

}