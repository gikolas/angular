import {NgModule} from '@angular/core';
import {EngagementLoanComponent} from './engagement-loan.component';
import {engagementdLazy} from './engagement-loan.lazyload';
import { CommonModule } from '@angular/common';
import {containerLoanModule} from '../containerloans/containerloansmodule';
import {containerloans} from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    engagementdLazy,
    containerLoanModule
  ],
declarations : [EngagementLoanComponent]
})
export class engagementModule {

}