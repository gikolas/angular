import {NgModule} from '@angular/core';
import {containerloans} from './containerloans';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@NgModule({
    exports:[containerloans],
    imports:[
        CommonModule,RouterModule
    ],
    declarations:[containerloans]
})

export class containerLoanModule {

}