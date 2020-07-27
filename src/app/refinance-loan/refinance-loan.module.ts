import { NgModule } from '@angular/core';
import { RefinanceLoanComponent } from './refinance-loan.component';
import { refinancedLazy } from './refinance-loan.lazyload';
import { CommonModule } from '@angular/common';
import { containerLoanModule } from '../containerloans/containerloansmodule';
import { containerloans } from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    refinancedLazy,
    containerLoanModule
  ],
  declarations: [RefinanceLoanComponent]
})
export class refinanceModule {

}