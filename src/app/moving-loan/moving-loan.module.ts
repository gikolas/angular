import { NgModule } from '@angular/core';
import { MovingLoanComponent } from './moving-loan.component';
import { movingLazy } from './moving-loan.lazyload';
import { CommonModule } from '@angular/common';
import { containerLoanModule } from '../containerloans/containerloansmodule';
import { containerloans } from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    movingLazy,
    containerLoanModule
  ],
  declarations: [MovingLoanComponent]
})
export class movingModule {

}