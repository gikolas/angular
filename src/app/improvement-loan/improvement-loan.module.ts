import {NgModule} from '@angular/core';
import {ImprovementLoanComponent} from './improvement-loan.component';
import {improvmentLazy} from './improvement-loan.lazyload';
import { CommonModule } from '@angular/common';
import {containerLoanModule} from '../containerloans/containerloansmodule';
import {containerloans} from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    improvmentLazy,
    containerLoanModule
  ],
declarations : [ImprovementLoanComponent]
})
export class improvementModule {

}