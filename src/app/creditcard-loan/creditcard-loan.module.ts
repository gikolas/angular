import {NgModule} from '@angular/core';
import {CredicardLoanComponent} from './creditcard-loan.component';
import {crcardLazy} from './creditcard-loan.lazyload';
import { CommonModule } from '@angular/common';
import {containerLoanModule} from '../containerloans/containerloansmodule';
import {containerloans} from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    crcardLazy,
    containerLoanModule
  ],
declarations : [CredicardLoanComponent]
})
export class credCardModule {

}