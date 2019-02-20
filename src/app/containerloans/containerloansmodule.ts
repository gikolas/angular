import {NgModule} from '@angular/core';
import {containerloans} from './containerloans';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports:[containerloans],
    imports:[HttpClientModule,ReactiveFormsModule,BrowserModule],
    declarations:[containerloans]
})

export class containerLoanModule {

}