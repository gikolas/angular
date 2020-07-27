import { NgModule } from '@angular/core';
import { ReviewComponent } from './review.component';
import { reviewLazy } from './review.lazyload';
import { CommonModule } from '@angular/common';
import { containerLoanModule } from '../containerloans/containerloansmodule';
import { containerloans } from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    reviewLazy,
    containerLoanModule
  ],
  declarations: [ReviewComponent]
})
export class reviewModule {

}