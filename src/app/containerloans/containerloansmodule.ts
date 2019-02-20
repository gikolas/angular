import {NgModule} from '@angular/core';
import {containerloans} from './containerloans';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    exports:[containerloans],
    imports:[HttpClientModule,ReactiveFormsModule],
    declarations:[containerloans]
})

export class containerLoanModule {

}