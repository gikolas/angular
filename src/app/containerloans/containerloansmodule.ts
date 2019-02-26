import {NgModule} from '@angular/core';
import {containerloans} from './containerloans';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
    exports:[containerloans],
    imports:[
        CommonModule
    ],
    declarations:[containerloans]
})

export class containerLoanModule {

}